"use client";

import type { FieldSpec } from "@lmui/shared";

interface Props {
  fields: FieldSpec[];
  value: Record<string, any>;
  onChange: (next: Record<string, any>) => void;
}

/**
 * Turns a block type's FieldSpec[] (defined once in packages/shared) into a
 * working form. This is what makes adding a new block type to the site a
 * shared-package change instead of a hand-built admin screen every time.
 */
export default function BlockForm({ fields, value, onChange }: Props) {
  function setField(name: string, v: unknown) {
    onChange({ ...value, [name]: v });
  }

  return (
    <div>
      {fields.map((field) => (
        <FieldEditor
          key={field.name}
          field={field}
          value={value?.[field.name]}
          onChange={(v) => setField(field.name, v)}
        />
      ))}
    </div>
  );
}

function FieldEditor({
  field,
  value,
  onChange,
}: {
  field: FieldSpec;
  value: any;
  onChange: (v: any) => void;
}) {
  if (field.type === "repeater") {
    const rows: Record<string, any>[] = Array.isArray(value) ? value : [];
    return (
      <div className="field">
        <label>{field.label}</label>
        {rows.map((row, i) => (
          <div className="repeater-row" key={i}>
            <BlockForm
              fields={field.fields ?? []}
              value={row}
              onChange={(next) => {
                const copy = rows.slice();
                copy[i] = next;
                onChange(copy);
              }}
            />
            <button
              type="button"
              className="btn btn--danger"
              onClick={() => onChange(rows.filter((_, idx) => idx !== i))}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            const blank: Record<string, string> = {};
            for (const f of field.fields ?? []) blank[f.name] = "";
            onChange([...rows, blank]);
          }}
        >
          + Add {field.label}
        </button>
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div className="field">
        <label>{field.label}</label>
        <select value={value ?? ""} onChange={(e) => onChange(e.target.value)}>
          {(field.options ?? []).map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="field">
        <label>{field.label}</label>
        <textarea
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
        />
      </div>
    );
  }

  if (field.type === "number") {
    return (
      <div className="field">
        <label>{field.label}</label>
        <input
          type="number"
          value={value ?? 0}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    );
  }

  return (
    <div className="field">
      <label>{field.label}</label>
      <input
        type={field.type === "url" ? "url" : "text"}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
      />
    </div>
  );
}
