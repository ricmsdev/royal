"use client";

import type { Lead } from "@/types/comercial";
import { LEAD_TYPES, ASSIGNEES, LEAD_STATUSES } from "@/types/comercial";

interface LeadTableProps {
  leads: Lead[];
  onEdit?: (lead: Lead) => void;
  onDelete?: (id: string) => void;
}

function getLabel<T extends { value: string; label: string }>(
  arr: readonly T[],
  value: string
): string {
  return arr.find((x) => x.value === value)?.label ?? value;
}

export function LeadTable({ leads, onEdit, onDelete }: LeadTableProps) {
  if (leads.length === 0) {
    return (
      <div className="comercial-empty" role="status">
        <p>Nenhum lead cadastrado.</p>
        <p className="comercial-empty-hint">Adicione um lead usando o botão acima.</p>
      </div>
    );
  }

  return (
    <div className="comercial-tabela">
      <div className="comercial-tabela-header">
        <span>Cliente</span>
        <span>Contato</span>
        <span>Tipo</span>
        <span>Responsável</span>
        <span>Status</span>
        <span>Casa</span>
        {(onEdit || onDelete) && <span className="comercial-tabela-actions">Ações</span>}
      </div>
      {leads.map((lead) => (
        <div key={lead.id} className="comercial-tabela-linha">
          <span className="comercial-cell-name">{lead.customerName}</span>
          <span>{lead.contact ?? "—"}</span>
          <span>{getLabel(LEAD_TYPES, lead.type)}</span>
          <span className="comercial-cell-assignee">
            {lead.assignee === "third_person"
              ? lead.assigneeOther || "Terceiro"
              : getLabel(ASSIGNEES, lead.assignee)}
          </span>
          <span>{getLabel(LEAD_STATUSES, lead.status)}</span>
          <span>{lead.hasHouse ? "Sim" : "Não"}</span>
          {(onEdit || onDelete) && (
            <span className="comercial-tabela-actions">
              {onEdit && (
                <button
                  type="button"
                  onClick={() => onEdit(lead)}
                  className="comercial-btn-icon"
                  aria-label={`Editar ${lead.customerName}`}
                >
                  Editar
                </button>
              )}
              {onDelete && (
                <button
                  type="button"
                  onClick={() => onDelete(lead.id)}
                  className="comercial-btn-icon comercial-btn-icon-danger"
                  aria-label={`Excluir ${lead.customerName}`}
                >
                  Excluir
                </button>
              )}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
