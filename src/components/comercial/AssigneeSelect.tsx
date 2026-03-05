"use client";

import type { CommercialAssignee } from "@/types/comercial";
import { ASSIGNEES } from "@/types/comercial";

interface AssigneeSelectProps {
  value: CommercialAssignee;
  otherValue?: string;
  onChange: (value: CommercialAssignee, other?: string) => void;
  id?: string;
  label?: string;
  disabled?: boolean;
}

export function AssigneeSelect({
  value,
  otherValue = "",
  onChange,
  id = "assignee",
  label = "Responsável",
  disabled = false,
}: AssigneeSelectProps) {
  return (
    <div className="comercial-field">
      <label htmlFor={id} className="comercial-label">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as CommercialAssignee)}
        disabled={disabled}
        className="comercial-select"
        aria-label={label}
      >
        {ASSIGNEES.map((a) => (
          <option key={a.value} value={a.value}>
            {a.label}
          </option>
        ))}
      </select>
      {value === "third_person" && (
        <input
          type="text"
          placeholder="Nome do responsável"
          value={otherValue}
          onChange={(e) => onChange(value, e.target.value)}
          className="comercial-input comercial-input-mt"
          aria-label="Nome do terceiro responsável"
        />
      )}
    </div>
  );
}
