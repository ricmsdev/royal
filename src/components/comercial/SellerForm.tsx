"use client";

import { useState } from "react";
import type { Seller, CommercialAssignee } from "@/types/comercial";
import { AssigneeSelect } from "./AssigneeSelect";

interface SellerFormProps {
  initial?: Seller | null;
  onSubmit: (data: Omit<Seller, "id" | "createdAt" | "updatedAt">) => void;
  onCancel?: () => void;
}

export function SellerForm({ initial, onSubmit, onCancel }: SellerFormProps) {
  const [name, setName] = useState(initial?.name ?? "");
  const [contact, setContact] = useState(initial?.contact ?? "");
  const [assignee, setAssignee] = useState<CommercialAssignee>(
    initial?.assignee ?? "ricardo"
  );
  const [assigneeOther, setAssigneeOther] = useState(initial?.assigneeOther ?? "");
  const [notes, setNotes] = useState(initial?.notes ?? "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Nome é obrigatório.");
      return;
    }
    onSubmit({
      name: trimmed,
      contact: contact.trim() || undefined,
      assignee,
      assigneeOther: assignee === "third_person" ? assigneeOther.trim() : undefined,
      notes: notes.trim() || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="comercial-form">
      <h3 className="comercial-form-title">
        {initial ? "Editar vendedor" : "Novo vendedor potencial"}
      </h3>

      <div className="comercial-field">
        <label htmlFor="sellerName" className="comercial-label">
          Nome *
        </label>
        <input
          id="sellerName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="comercial-input"
          placeholder="Nome completo"
          required
          aria-required
        />
      </div>

      <div className="comercial-field">
        <label htmlFor="sellerContact" className="comercial-label">
          Contato
        </label>
        <input
          id="sellerContact"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="comercial-input"
          placeholder="Telefone ou e-mail"
        />
      </div>

      <AssigneeSelect
        value={assignee}
        otherValue={assigneeOther}
        onChange={(v, o) => {
          setAssignee(v);
          setAssigneeOther(o ?? "");
        }}
        id="seller-assignee"
        label="Responsável comercial"
      />

      <div className="comercial-field">
        <label htmlFor="sellerNotes" className="comercial-label">
          Observações
        </label>
        <textarea
          id="sellerNotes"
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
          {initial ? "Salvar" : "Cadastrar"}
        </button>
      </div>
    </form>
  );
}
