"use client";

export type CommercialTab = "leads" | "clientes" | "vendedores";

interface CommercialNavProps {
  active: CommercialTab;
  onTab: (tab: CommercialTab) => void;
}

const TABS: { id: CommercialTab; label: string }[] = [
  { id: "leads", label: "Leads" },
  { id: "clientes", label: "Clientes" },
  { id: "vendedores", label: "Vendedores" },
];

export function CommercialNav({ active, onTab }: CommercialNavProps) {
  return (
    <nav className="comercial-nav" aria-label="Área comercial">
      <ul className="comercial-nav-list">
        {TABS.map((tab) => (
          <li key={tab.id}>
            <button
              type="button"
              className={`comercial-nav-item ${active === tab.id ? "active" : ""}`}
              onClick={() => onTab(tab.id)}
              aria-current={active === tab.id ? "page" : undefined}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
