"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
export type NavItem = {
  id: string;
  label: string;
  index: number;
  group?: string;
};

export type NavGroup = {
  key: string;
  label: string;
  items: NavItem[];
};

const SLIDE_IDS = [
  "hero",
  "ato1",
  "ato2-intro",
  "localizacao",
  "conceito-visual",
  "referencias",
  "pillar1",
  "gastro-club",
  "casa-artistica",
  "eventos-corporativos",
  "locacao",
  "programacao-semana",
  "pillar2",
  "acesso-localizacao",
  "pillar3",
  "governance",
  "marcas",
  "broadcast",
  "jack-daniels",
  "fora-da-curva",
  "ato3",
  "launch-concept",
  "noite-segunda",
  "noite-terca",
  "noite-quarta",
  "noite-quinta",
  "noite-sexta",
  "noite-sabado",
  "noite-domingo",
  "cta",
];

const LABELS: Record<string, string> = {
  hero: "Início",
  ato1: "O Inimigo",
  "ato2-intro": "A Revelação",
  localizacao: "Localização",
  "conceito-visual": "Conceito Visual",
  referencias: "Referências",
  pillar1: "Pilar 1 — Dining Club",
  "gastro-club": "Gastro Club",
  "casa-artistica": "Casa Artística",
  "eventos-corporativos": "Eventos Corporativos",
  locacao: "Locação",
  "programacao-semana": "Programação da Semana",
  pillar2: "Pilar 2 — Luz",
  "acesso-localizacao": "Acesso e Localização",
  pillar3: "Pilar 3 — Protocolo",
  governance: "Governança",
  marcas: "Marcas",
  broadcast: "Broadcast",
  "jack-daniels": "Jack Daniel's",
  "fora-da-curva": "Fora da Curva",
  ato3: "Mapa da Casa",
  "launch-concept": "Launch Concept",
  "noite-segunda": "Segunda",
  "noite-terca": "Terça — All In",
  "noite-quarta": "Quarta",
  "noite-quinta": "Quinta",
  "noite-sexta": "Sexta",
  "noite-sabado": "Sábado — Royal Mainstreet",
  "noite-domingo": "Domingo",
  cta: "Contato",
};

const SUB_SECTIONS: Array<{ id: string; label: string; parentId: string }> = [
  { id: "jd-lineup", label: "Line-up Sessões", parentId: "jack-daniels" },
  { id: "jd-formats", label: "Formatos", parentId: "jack-daniels" },
  { id: "jd-cta", label: "Proposta Comercial", parentId: "jack-daniels" },
  { id: "lineup-abril", label: "Line-up Abril", parentId: "noite-sabado" },
  { id: "ultimo-evento", label: "Último Evento", parentId: "noite-sabado" },
  { id: "faturamento", label: "Faturamento", parentId: "noite-sabado" },
  { id: "projecao-tu-goxta", label: "Projeção Tu Goxta", parentId: "noite-sabado" },
  { id: "proposta-q2", label: "Proposta Q2 — Ingressos", parentId: "noite-sabado" },
  { id: "dashboard-consolidado", label: "Dashboard", parentId: "noite-sabado" },
];

function buildNavGroups(): NavGroup[] {
  const items: NavItem[] = SLIDE_IDS.map((id, index) => ({
    id,
    label: LABELS[id] ?? id,
    index,
    group: getGroupForId(id),
  }));

  const groups: NavGroup[] = [];
  const seen = new Set<string>();

  const groupOrder = [
    "abertura",
    "espaco",
    "pilares",
    "localizacao",
    "parcerias",
    "governance",
    "atos",
    "launch",
    "programacao",
    "fechamento",
  ];

  const groupLabels: Record<string, string> = {
    abertura: "Abertura",
    espaco: "O Espaço",
    pilares: "Pilares",
    localizacao: "Localização",
    parcerias: "Parcerias",
    governance: "Governança",
    atos: "Atos",
    launch: "Launch",
    programacao: "Programação",
    fechamento: "Fechamento",
  };

  for (const gKey of groupOrder) {
    const groupItems = items.filter((i) => i.group === gKey);
    if (groupItems.length > 0) {
      groups.push({
        key: gKey,
        label: groupLabels[gKey] ?? gKey,
        items: groupItems,
      });
    }
  }

  return groups;
}

function getGroupForId(id: string): string {
  if (["hero", "ato1", "ato2-intro"].includes(id)) return "abertura";
  if (["localizacao", "conceito-visual", "referencias"].includes(id)) return "espaco";
  if (["pillar1", "gastro-club", "casa-artistica", "eventos-corporativos", "programacao-semana"].includes(id)) return "pilares";
  if (["pillar2", "acesso-localizacao", "pillar3"].includes(id)) return "localizacao";
  if (id === "governance") return "governance";
  if (["marcas", "broadcast", "jack-daniels"].includes(id)) return "parcerias";
  if (["fora-da-curva", "ato3"].includes(id)) return "atos";
  if (id === "launch-concept") return "launch";
  if (id.startsWith("noite-")) return "programacao";
  if (id === "cta") return "fechamento";
  return "outros";
}

const NAV_GROUPS = buildNavGroups();

interface LandingNavProps {
  activeIndex: number;
  onNavigate: (index: number, hash?: string) => void;
}

export function LandingNav({ activeIndex, onNavigate }: LandingNavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".pitch-container");
    if (!container) return;
    const onScroll = () => setScrolled((container as HTMLElement).scrollTop > 80);
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    onNavigate(item.index);
    setOpen(false);
  };

  const handleSubClick = (parentIndex: number, hash: string) => {
    onNavigate(parentIndex, hash);
    setOpen(false);
  };

  const parentIndexMap = new Map<string, number>();
  SLIDE_IDS.forEach((id, i) => parentIndexMap.set(id, i));

  return (
    <>
      <header
        className={`landing-nav-header ${open ? "open" : ""} ${scrolled ? "scrolled" : ""}`}
      >
        <a href="#hero" className="landing-nav-logo" onClick={(e) => { e.preventDefault(); onNavigate(0); }}>
          ROYAL
        </a>
        <button
          type="button"
          className={`landing-nav-trigger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span className="landing-nav-trigger-text">{open ? "FECHAR" : "MENU"}</span>
          <span className="landing-nav-trigger-icon">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </span>
        </button>
      </header>

      <div
        className={`landing-nav-overlay ${open ? "open" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <aside className={`landing-nav-drawer ${open ? "open" : ""}`}>
        <nav className="landing-nav-drawer-inner">
          <p className="landing-nav-drawer-title">Navegação</p>
          <Link
            href="/comercial"
            className="landing-nav-comercial"
            onClick={() => setOpen(false)}
          >
            Área Comercial
          </Link>
          {NAV_GROUPS.map((group) => (
            <div key={group.key} className="landing-nav-group">
              <span className="landing-nav-group-label">{group.label}</span>
              <ul className="landing-nav-list">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`landing-nav-item ${activeIndex === item.index ? "active" : ""}`}
                      onClick={() => handleNavClick(item)}
                    >
                      <span className="landing-nav-item-num">{String(item.index + 1).padStart(2, "0")}</span>
                      <span className="landing-nav-item-label">{item.label}</span>
                    </button>
                    {SUB_SECTIONS.filter((s) => s.parentId === item.id).map((sub) => (
                        <button
                          key={sub.id}
                          type="button"
                          className="landing-nav-sub"
                          onClick={() =>
                            handleSubClick(parentIndexMap.get(sub.parentId) ?? 0, sub.id)
                          }
                        >
                          {sub.label}
                        </button>
                      ))
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
