"use client";

import { useState } from "react";
import type { Lead, LeadType, CommercialAssignee } from "@/types/comercial";
import { LEAD_TYPES, LEAD_STATUSES } from "@/types/comercial";
import { AssigneeSelect } from "./AssigneeSelect";

interface LeadFormProps {
  initial?: Lead | null;
  onSubmit: (data: Omit<Lead, "id" | "createdAt" | "updatedAt">) => void;
  onCancel?: () => void;
}

export function LeadForm({ initial, onSubmit, onCancel }: LeadFormProps) {
  const [customerName, setCustomerName] = useState(initial?.customerName ?? "");
  const [contact, setContact] = useState(initial?.contact ?? "");
  const [type, setType] = useState<LeadType>(initial?.type ?? "party");
  const [assignee, setAssignee] = useState<CommercialAssignee>(
    initial?.assignee ?? "ricardo"
  );
  const [assigneeOther, setAssigneeOther] = useState(initial?.assigneeOther ?? "");
  const [status, setStatus] = useState(initial?.status ?? "open");
  const [hasHouse, setHasHouse] = useState(initial?.hasHouse ?? false);
  const [notes, setNotes] = useState(initial?.notes ?? "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const trimmed = customerName.trim();
    if (!trimmed) {
      setError("Nome do cliente é obrigatório.");
      return;
    }
    onSubmit({
      customerName: trimmed,
      contact: contact.trim() || undefined,
      type,
      assignee,
      assigneeOther: assignee === "third_person" ? assigneeOther.trim() : undefined,
      status,
      hasHouse,
      notes: notes.trim() || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="comercial-form">
      <h3 className="comercial-form-title">
        {initial ? "Editar lead" : "Novo lead"}
      </h3>

      <div className="comercial-field">
        <label htmlFor="customerName" className="comercial-label">
          Nome do cliente *
        </label>
        <input
          id="customerName"
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="comercial-input"
          placeholder="Nome completo"
          required
          aria-required
        />
      </div>

      <div className="comercial-field">
        <label htmlFor="contact" className="comercial-label">
          Contato
        </label>
        <input
          id="contact"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="comercial-input"
          placeholder="Telefone ou e-mail"
        />
      </div>

      <div className="comercial-field">
        <label htmlFor="type" className="comercial-label">
          Tipo
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value as LeadType)}
          className="comercial-select"
        >
          {LEAD_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <AssigneeSelect
        value={assignee}
        otherValue={assigneeOther}
        onChange={(v, o) => {
          setAssignee(v);
          setAssigneeOther(o ?? "");
        }}
        id="lead-assignee"
        label="Quem está cuidando"
      />

      <div className="comercial-field">
        <label htmlFor="status" className="comercial-label">
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as Lead["status"])}
          className="comercial-select"
        >
          {LEAD_STATUSES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className="comercial-field comercial-field-row">
        <input
          id="hasHouse"
          type="checkbox"
          checked={hasHouse}
          onChange={(e) => setHasHouse(e.target.checked)}
          className="comercial-checkbox"
        />
        <label htmlFor="hasHouse" className="comercial-label comercial-label-inline">
          Tem casa
        </label>
      </div>

      <div className="comercial-field">
        <label htmlFor="notes" className="comercial-label">
          Observações
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="comercial-textarea"
          placeholder="Notas adicionais"
          rows={3}
        />
      </div>

      {error && <p className="comercial-error" role="alert">{error}</p>}

      <div className="comercial-form-actions">
        {onCancel && (
          <button type="button" onClick={onCancel} className="comercial-btn comercial-btn-secondary">
            Cancelar
          </button>
        )}
        <button type="submit" className="comercial-btn comercial-btn-primary">
          {initial ? "Salvar" : "Adicionar"}
        </button>
      </div>
    </form>
  );
}
