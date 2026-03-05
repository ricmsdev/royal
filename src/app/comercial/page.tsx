"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { PasswordGate } from "@/components/PasswordGate";
import { CommercialNav } from "@/components/comercial/CommercialNav";
import type { CommercialTab } from "@/components/comercial/CommercialNav";
import { LeadForm } from "@/components/comercial/LeadForm";
import { LeadTable } from "@/components/comercial/LeadTable";
import { SellerForm } from "@/components/comercial/SellerForm";
import { SellerTable } from "@/components/comercial/SellerTable";
import type { Lead, Seller } from "@/types/comercial";
import {
  getLeads,
  getSellers,
  addLead,
  updateLead,
  deleteLead,
  addSeller,
  updateSeller,
  deleteSeller,
} from "@/lib/comercial-storage";

function CommercialContent() {
  const [tab, setTab] = useState<CommercialTab>("leads");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showSellerForm, setShowSellerForm] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [editingSeller, setEditingSeller] = useState<Seller | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    setLeads(getLeads());
    setSellers(getSellers());
  }, []);

  useEffect(() => {
    setLoading(false);
    refresh();
  }, [refresh]);

  const handleLeadSubmit = (data: Omit<Lead, "id" | "createdAt" | "updatedAt">) => {
    if (editingLead) {
      updateLead(editingLead.id, data);
    } else {
      addLead(data);
    }
    setEditingLead(null);
    setShowLeadForm(false);
    refresh();
  };

  const handleSellerSubmit = (data: Omit<Seller, "id" | "createdAt" | "updatedAt">) => {
    if (editingSeller) {
      updateSeller(editingSeller.id, data);
    } else {
      addSeller(data);
    }
    setEditingSeller(null);
    setShowSellerForm(false);
    refresh();
  };

  const handleEditLead = (lead: Lead) => {
    setEditingLead(lead);
    setShowLeadForm(true);
  };

  const handleEditSeller = (seller: Seller) => {
    setEditingSeller(seller);
    setShowSellerForm(true);
  };

  const handleDeleteLead = (id: string) => {
    if (typeof window !== "undefined" && window.confirm("Excluir este lead?")) {
      deleteLead(id);
      refresh();
    }
  };

  const handleDeleteSeller = (id: string) => {
    if (typeof window !== "undefined" && window.confirm("Excluir este vendedor?")) {
      deleteSeller(id);
      refresh();
    }
  };

  const leadsFiltered =
    tab === "clientes"
      ? leads.filter((l) => l.status === "open" || l.status === "in_progress")
      : leads;

  if (loading) {
    return (
      <div className="comercial-page">
        <div className="comercial-loading" role="status" aria-live="polite">
          <div className="comercial-loading-spinner" />
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="comercial-page">
      <header className="comercial-header">
        <Link href="/" className="comercial-back">
          ← Voltar
        </Link>
        <h1 className="comercial-title">Comercial</h1>
        <p className="comercial-subtitle">Leads, clientes e vendedores</p>
      </header>

      <CommercialNav active={tab} onTab={setTab} />

      <main className="comercial-main">
        {(tab === "leads" || tab === "clientes") && (
          <section className="comercial-section" aria-labelledby="leads-heading">
            <div className="comercial-section-header">
              <h2 id="leads-heading" className="comercial-section-title">
                {tab === "clientes" ? "Propostas em andamento" : "Leads"}
              </h2>
              {!showLeadForm && (
                <button
                  type="button"
                  className="comercial-btn comercial-btn-primary"
                  onClick={() => {
                    setEditingLead(null);
                    setShowLeadForm(true);
                  }}
                >
                  Novo lead
                </button>
              )}
            </div>

            {showLeadForm ? (
              <div className="comercial-form-wrapper">
                <LeadForm
                  initial={editingLead}
                  onSubmit={handleLeadSubmit}
                  onCancel={() => {
                    setShowLeadForm(false);
                    setEditingLead(null);
                  }}
                />
              </div>
            ) : (
              <LeadTable
                leads={leadsFiltered}
                onEdit={handleEditLead}
                onDelete={handleDeleteLead}
              />
            )}
          </section>
        )}

        {tab === "vendedores" && (
          <section className="comercial-section" aria-labelledby="vendedores-heading">
            <div className="comercial-section-header">
              <h2 id="vendedores-heading" className="comercial-section-title">
                Vendedores potenciais
              </h2>
              {!showSellerForm && (
                <button
                  type="button"
                  className="comercial-btn comercial-btn-primary"
                  onClick={() => {
                    setEditingSeller(null);
                    setShowSellerForm(true);
                  }}
                >
                  Novo vendedor
                </button>
              )}
            </div>

            {showSellerForm ? (
              <div className="comercial-form-wrapper">
                <SellerForm
                  initial={editingSeller}
                  onSubmit={handleSellerSubmit}
                  onCancel={() => {
                    setShowSellerForm(false);
                    setEditingSeller(null);
                  }}
                />
              </div>
            ) : (
              <SellerTable
                sellers={sellers}
                onEdit={handleEditSeller}
                onDelete={handleDeleteSeller}
              />
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default function ComercialPage() {
  return (
    <PasswordGate>
      <CommercialContent />
    </PasswordGate>
  );
}
