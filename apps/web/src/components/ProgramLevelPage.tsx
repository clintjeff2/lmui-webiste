import Link from "next/link";
import { OptionCard } from "@/components/OptionCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { getFields, type Fields } from "@/data/fields";
import { getOptions, type Option } from "@/data/options";
import { getSchools, type School } from "@/data/schools";

type ProgramLevel = "undergraduate" | "graduate";

interface OptionGroup {
  key: string;
  title: string;
  href: string;
  school?: School;
  options: Option[];
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
  return level === "undergraduate"
    ? ["undergraduate", "undergradute", "hnd"].includes(degreeLevel)
    : ["graduate", "doctoral"].includes(degreeLevel);
}

function groupOptions(options: Option[], fields: Fields[], schools: School[]): OptionGroup[] {
  const fieldsByReference = new Map<string, Fields>();
  const seenOptionSlugs = new Set<string>();
  for (const field of fields) {
    fieldsByReference.set(normalize(field.slug), field);
    fieldsByReference.set(normalize(field.name.split(",")[0]), field);
  }

  const groups = new Map<string, OptionGroup>();
  for (const option of options) {
    const optionSlug = normalize(option.slug);
    if (seenOptionSlugs.has(optionSlug)) continue;
    seenOptionSlugs.add(optionSlug);

    const reference = normalize(option.fieldSlug);
    const field = fieldsByReference.get(reference);
    const school = field
      ? schools.find((item) => item.slug === field.schoolSlug)
      : schools.find((item) => normalize(item.slug) === reference);
    const key = field ? `field:${field.slug}` : `reference:${reference}`;
    const title = field
      ? field.name.split(",")[0].trim()
      : school?.name ?? displayReference(option.fieldSlug);
    const href = field
      ? `/academics/${field.slug}`
      : school?.route ?? `/academics/${option.slug}`;

    let group = groups.get(key);
    if (!group) {
      group = { key, title, href, school, options: [] };
      groups.set(key, group);
    }
    group.options.push(option);
  }

  return [...groups.values()];
}

export async function ProgramLevelPage({ level }: { level: ProgramLevel }) {
  const [options, fields, schools] = await Promise.all([
    getOptions(),
    getFields(),
    getSchools(),
  ]);
  const title = level === "undergraduate" ? "Undergraduate Programs" : "Graduate Programs";
  const groups = groupOptions(options.filter((option) => belongsToLevel(option, level)), fields, schools);
  const optionCount = groups.reduce((count, group) => count + group.options.length, 0);

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
              {optionCount} study options
            </p>
          </Reveal>
        </div>
      </section>

      {groups.length > 0 ? groups.map((group) => (
        <section className="section program-level-field" key={group.key}>
          <div className="container">
            <Reveal>
              <h2 className="headline program-level-field__title">
                <Link href={group.href}>{group.title}</Link>
              </h2>
            </Reveal>
            <RevealGroup className="program-level-field__grid">
              {group.options.map((option) => (
                <RevealItem key={option.slug}>
                  <OptionCard option={option} school={group.school} />
                </RevealItem>
              ))}
            </RevealGroup>
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
        .program-level-field { padding-top: 36px; }
        .program-level-field__title { margin-bottom: 28px; }
        .program-level-field__title a { color: inherit; }
        .program-level-field__title a:hover { color: var(--garnet-500); }
        .program-level-field__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
        @media (max-width: 980px) { .program-level-field__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .program-level-field__grid { grid-template-columns: 1fr; } }
      ` }} />
    </main>
  );
}
