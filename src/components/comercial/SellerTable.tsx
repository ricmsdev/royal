"use client";

import type { Seller } from "@/types/comercial";
import { ASSIGNEES } from "@/types/comercial";

interface SellerTableProps {
  sellers: Seller[];
  onEdit?: (seller: Seller) => void;
  onDelete?: (id: string) => void;
}

function getAssigneeLabel(s: Seller): string {
  return s.assignee === "third_person"
    ? s.assigneeOther || "Terceiro"
    : ASSIGNEES.find((a) => a.value === s.assignee)?.label ?? s.assignee;
}

export function SellerTable({ sellers, onEdit, onDelete }: SellerTableProps) {
  if (sellers.length === 0) {
    return (
      <div className="comercial-empty" role="status">
        <p>Nenhum vendedor cadastrado.</p>
        <p className="comercial-empty-hint">Cadastre um vendedor potencial usando o botão acima.</p>
      </div>
    );
  }

  return (
    <div className="comercial-tabela">
      <div className="comercial-tabela-header comercial-tabela-header-sellers">
        <span>Nome</span>
        <span>Contato</span>
        <span>Responsável</span>
        {(onEdit || onDelete) && <span className="comercial-tabela-actions">Ações</span>}
      </div>
      {sellers.map((seller) => (
        <div key={seller.id} className="comercial-tabela-linha comercial-tabela-linha-sellers">
          <span className="comercial-cell-name">{seller.name}</span>
          <span>{seller.contact ?? "—"}</span>
          <span className="comercial-cell-assignee">{getAssigneeLabel(seller)}</span>
          {(onEdit || onDelete) && (
            <span className="comercial-tabela-actions">
              {onEdit && (
                <button
                  type="button"
                  onClick={() => onEdit(seller)}
                  className="comercial-btn-icon"
                  aria-label={`Editar ${seller.name}`}
                >
                  Editar
                </button>
              )}
              {onDelete && (
                <button
                  type="button"
                  onClick={() => onDelete(seller.id)}
                  className="comercial-btn-icon comercial-btn-icon-danger"
                  aria-label={`Excluir ${seller.name}`}
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
