"use client";

import { useState } from "react";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61322?q=85&w=2940";

const ambientes = [
  {
    icon: "◆",
    title: "LOUNGE",
    desc: "Recepção, networking, coquetel. Ambiente íntimo para 50–80 pax.",
    bg: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=85&w=2940",
  },
  {
    icon: "◆",
    title: "RESTAURANTE",
    desc: "Jantar executivo ou degustação. 40–120 pax. Menu sob medida.",
    bg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=2940",
  },
  {
    icon: "◆",
    title: "PISTA + PALCO",
    desc: "Após o jantar, a festa começa. DJ, banda ou apresentação.",
    bg: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=85&w=2940",
  },
  {
    icon: "◆",
    title: "CAMAROTES",
    desc: "L1–L7, M1–M5. Privacidade para VPs e decisores.",
    bg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=2940",
  },
  {
    icon: "◆",
    title: "FRONT STAGE",
    desc: "Áreas premium junto ao palco. Para patrocinadores e convidados especiais.",
    bg: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=85&w=2940",
  },
  {
    icon: "◆",
    title: "ÁREAS EXTERNAS",
    desc: "Varanda, deck. Smoking e respiro. Integração com o entorno.",
    bg: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=85&w=2940",
  },
];

const construcaoItems = [
  <><strong>Divisórias modulares</strong> — Ambientes se abrem ou fecham conforme o evento</>,
  <><strong>Som e iluminação zonados</strong> — Cada área com controle independente</>,
  <><strong>Capacidade flexível</strong> — De 50 (jantar fechado) a 800+ (festa total)</>,
  <><strong>Operação dia/noite</strong> — Corporativo de dia, casa noturna à noite</>,
];

export function EventosCorporativosSlide() {
  const [hoveredBg, setHoveredBg] = useState<string | null>(null);

  return (
    <Slide
      id="eventos-corporativos"
      variant="scrollable"
      bg={DEFAULT_BG}
      bgHover={hoveredBg}
      cinematic
      kineticLights
      contentStyle={{ maxWidth: "1100px" }}
    >
      <ActTag>PROGRAMAÇÃO — MÁQUINA DE RECEITA</ActTag>
      <h2 className="impact-title">Eventos Corporativos</h2>
      <p>
        <strong>Gastro Bar modular.</strong> Cada metro quadrado gera. De 50
        pax (jantar fechado) a 800+ (festa total). Construção inteligente.
      </p>
      <span className="area-badge">1.444 m² — Área total</span>
      <div
        className="ambientes-grid"
        onMouseLeave={() => setHoveredBg(null)}
      >
        {ambientes.map((a) => (
          <div
            key={a.title}
            className="ambiente-card interactive-zone"
            onMouseEnter={() => setHoveredBg(a.bg)}
          >
            <div className="ambiente-icon">{a.icon}</div>
            <h4>{a.title}</h4>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
      <div className="construcao-inteligente">
        <h3>Construção Inteligente</h3>
        <ul>
          {construcaoItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <p className="roi-line">
        <strong>ROI:</strong> Evento corporativo médio R$ 80k–150k. 2 por mês =
        colchão de R$ 160k–300k antes da festa começar.
      </p>
      <p className="gastro-scroll-hint" style={{ marginTop: "24px" }}>
        Role para ver mais conteúdo ↓
      </p>
    </Slide>
  );
}
