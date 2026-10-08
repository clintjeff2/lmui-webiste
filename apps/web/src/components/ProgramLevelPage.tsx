import Link from "next/link";
import { OptionCard } from "@/components/OptionCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { getFields, type Fields } from "@/data/fields";
import { getOptions, type Option } from "@/data/options";
import { getSchools, type School } from "@/data/schools";

type ProgramLevel = "undergraduate" | "graduate" | "hnd";

interface FieldOptionGroup {
  key: string;
  title: string;
  href: string;
  options: Option[];
}

interface SchoolOptionGroup {
  key: string;
  title: string;
  href?: string;
  school?: School;
  options: Option[];
  fields: Map<string, FieldOptionGroup>;
}

function normalize(value: string): string {
  return value.trim().toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
}

function displayReference(value: string): string {
  return value
    .split(/[-_\\s]+/)
    .filter(Boolean)
    .map((part) => part[0].toLocaleUpperCase() + part.slice(1))
    .join(" ");
}

function belongsToLevel(option: Option, level: ProgramLevel): boolean {
  const degreeLevel = normalize(option.degreeLevel);
  if (level === "hnd") return degreeLevel === "hnd";
  return level === "undergraduate"
    ? ["undergraduate", "undergradute"].includes(degreeLevel)
    : ["graduate", "doctoral"].includes(degreeLevel);
}

function groupOptions(options: Option[], fields: Fields[], schools: School[]): SchoolOptionGroup[] {
  const fieldsByReference = new Map<string, Fields>();
  const seenOptionSlugs = new Set<string>();
  for (const field of fields) {
    fieldsByReference.set(normalize(field.slug), field);
    fieldsByReference.set(normalize(field.name.split(",")[0]), field);
  }

  const groups = new Map<string, SchoolOptionGroup>();
  for (const option of options) {
    const optionSlug = normalize(option.slug);
    if (seenOptionSlugs.has(optionSlug)) continue;
    seenOptionSlugs.add(optionSlug);

    const reference = normalize(option.fieldSlug);
    const field = fieldsByReference.get(reference);
    const school = field
      ? schools.find((item) => item.slug === field.schoolSlug)
      : schools.find((item) => normalize(item.slug) === reference);
    const schoolSlug = field?.schoolSlug ?? school?.slug;
    const schoolKey = schoolSlug ? `school:${normalize(schoolSlug)}` : "school:other";
    const schoolTitle = school?.name ?? (schoolSlug ? displayReference(schoolSlug) : "Other Programs");

    let group = groups.get(schoolKey);
    if (!group) {
      group = {
        key: schoolKey,
        title: schoolTitle,
        href: school?.route,
        school,
        options: [],
        fields: new Map(),
      };
      groups.set(schoolKey, group);
    }

    if (!field && school) {
      group.options.push(option);
      continue;
    }

    const fieldKey = field ? `field:${field.slug}` : `reference:${reference}`;
    let fieldGroup = group.fields.get(fieldKey);
    if (!fieldGroup) {
      fieldGroup = {
        key: fieldKey,
        title: field ? field.name.split(",")[0].trim() : displayReference(option.fieldSlug),
        href: field ? `/academics/${field.slug}` : school?.route ?? `/academics/${option.slug}`,
        options: [],
      };
      group.fields.set(fieldKey, fieldGroup);
    }
    fieldGroup.options.push(option);
  }

  return [...groups.values()]
    .sort((left, right) => left.title.localeCompare(right.title, undefined, { sensitivity: "base" }))
    .map((group) => {
      const sortOptions = (items: Option[]) => [...items].sort((left, right) =>
        left.name.localeCompare(right.name, undefined, { sensitivity: "base" }),
      );
      return {
        ...group,
        options: sortOptions(group.options),
        fields: new Map(
          [...group.fields.entries()]
            .sort(([, left], [, right]) => left.title.localeCompare(right.title, undefined, { sensitivity: "base" }))
            .map(([key, fieldGroup]) => [key, { ...fieldGroup, options: sortOptions(fieldGroup.options) }]),
        ),
      };
    });
}

export async function ProgramLevelPage({ level }: { level: ProgramLevel }) {
  const [options, fields, schools] = await Promise.all([
    getOptions(),
    getFields(),
    getSchools(),
  ]);
  const title = level === "hnd"
    ? "HND Programs"
    : level === "undergraduate"
      ? "Undergraduate Programs"
      : "Graduate Programs";
  const groups = groupOptions(options.filter((option) => belongsToLevel(option, level)), fields, schools);
  const optionCount = groups.reduce(
    (count, group) => count + group.options.length + [...group.fields.values()].reduce(
      (fieldCount, fieldGroup) => fieldCount + fieldGroup.options.length,
      0,
    ),
    0,
  );

  return (
    <main>
      <section className="section program-level-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Academics</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="headline--display" style={{ marginTop: 20 }}>
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 20 }}>
              {optionCount} study Specialization
            </p>
          </Reveal>
        </div>
      </section>

      {groups.length > 0 ? groups.map((group) => (
        <section className="section program-level-school" key={group.key} style={{paddingTop: 0, paddingBottom:60}}>
          <div className="container">
            <Reveal>
              <h2 className="headline program-level-school__title">
                {group.href ? <Link href={group.href}>{group.title}</Link> : group.title}
              </h2>
            </Reveal>
            {group.options.length > 0 && (
              <RevealGroup className="program-level-field__grid">
                {group.options.map((option) => (
                  <RevealItem key={option.slug}>
                    <OptionCard option={option} school={group.school} />
                  </RevealItem>
                ))}
              </RevealGroup>
            )}
            {[...group.fields.values()].map((fieldGroup) => (
              <section className="program-level-field" key={fieldGroup.key}>
                <Reveal>
                  <h3 className="headline program-level-field__title" style={{ fontSize: "2rem", marginTop: 35, marginBottom: 25 }}>
                    <Link href={fieldGroup.href}>{fieldGroup.title}</Link>
                  </h3>
                </Reveal>
                <RevealGroup className="program-level-field__grid">
                  {fieldGroup.options.map((option) => (
                    <RevealItem key={option.slug}>
                      <OptionCard option={option} school={group.school} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </section>
            ))}
          </div>
        </section>
      )) : (
        <section className="section">
          <div className="container">
            <p className="lede">No programs are currently available at this level.</p>
          </div>
        </section>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .program-level-hero { padding-bottom: 48px; }
        .program-level-school { padding-top: 36px; }
        .program-level-school__title { width: 100%; max-width: none; margin-bottom: 28px; }
        .program-level-school__title a { color: inherit; }
        .program-level-school__title a:hover { color: var(--garnet-500); }
        .program-level-field { margin-top: 32px; }
        .program-level-field__title { font-size: 1.35rem; margin-bottom: 20px; }
        .program-level-field__title a { color: inherit; }
        .program-level-field__title a:hover { color: var(--garnet-500); }
        .program-level-field__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
        @media (max-width: 980px) { .program-level-field__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .program-level-field__grid { grid-template-columns: 1fr; } }
      ` }} />
    </main>
  );
}
