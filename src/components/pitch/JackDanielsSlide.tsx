"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const JD_ARTISTS = [
  { nome: "Chefin", slug: "chefin", instagram: "chefin23", role: "Headliner" },
  { nome: "MC Tuto", slug: "tutto", instagram: "mctuto", role: "Headliner" },
  { nome: "MC Meno K", slug: "meno-k", instagram: "mcmenok", role: "Guest" },
  { nome: "MC IG", slug: "ig", instagram: "mcig4m", role: "Guest" },
];

interface FormatCard {
  tag: string;
  title: string;
  icon: string;
  teaser: string;
  visual: string;
  details: string[];
  highlight: string;
  cta: string;
}

const JD_FORMAT_CARDS: FormatCard[] = [
  {
    tag: "NAMING RIGHTS",
    title: "Jack Daniel\u2019s Black Box",
    icon: "01",
    teaser: "Uma noite. Um nome. Uma transmissão que ninguém mais tem.",
    visual: "/AVENUE/marcas/bondedjack2.jpg",
    details: [
      "Noite fixa mensal com naming exclusivo Jack Daniel\u2019s Black Box",
      "Transmissão fechada s\u00f3 para convidados \u2014 FOMO real",
      "Royal vira palco fixo: curadoria, est\u00e9tica e p\u00fablico premium",
      "Black Box = c\u00e2meras, luzes, boiler room est\u00e9tica",
    ],
    highlight: "O \u00fanico evento com naming Jack Daniel\u2019s no formato Black Box no Brasil.",
    cta: "A noite mais exclusiva da cidade.",
  },
  {
    tag: "VIRALIZAÇ\u00c3O",
    title: "M\u00e1quina de Cortes",
    icon: "02",
    teaser: "Os novos whiskys da marca no centro da viraliza\u00e7\u00e3o.",
    visual: "/AVENUE/marcas/bondedjack2.jpg",
    details: [
      "Triple Mash e Bonded em cena \u2014 produto no palco, no bar, no conte\u00fado",
      "M\u00e1quina de cortes profissional: 4 c\u00e2meras, edi\u00e7\u00e3o em tempo real",
      "Conte\u00fado vertical pronto pra Reels, TikTok e Stories",
      "Alcance org\u00e2nico: foco no el\u00e9trico, no que viraliza nas redes",
    ],
    highlight: "Cada noite gera 15\u201320 cortes edit\u00e1veis. A marca no feed sem parecer an\u00fancio.",
    cta: "Branded content que viraliza.",
  },
  {
    tag: "CONTRATO ARTISTA",
    title: "\u201CEstou na Jack Daniel\u2019s Black Box\u201D",
    icon: "03",
    teaser: "O artista liga a marca \u00e0 noite. Em contrato.",
    visual: "/AVENUE/artists/chefin.jpg",
    details: [
      "Cl\u00e1usula contratual: artista menciona \u201CJack Daniel\u2019s Black Box\u201D no palco e nas redes",
      "Story obrigat\u00f3rio: \u201CEstou na Jack Daniel\u2019s Black Box hoje\u201D com check-in",
      "Naming no setlist, no backdrop, na transmiss\u00e3o ao vivo",
      "Storytelling aut\u00eantico: o artista bebe, mostra, vive a marca",
    ],
    highlight: "N\u00e3o \u00e9 publi. \u00c9 viv\u00eancia. O p\u00fablico sente porque o artista sente.",
    cta: "A marca na boca do artista.",
  },
];

export function JackDanielsSlide() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [activeFormat, setActiveFormat] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleImgError = (slug: string) => {
    setImgErrors((p) => ({ ...p, [slug]: true }));
  };

  const toggleFormat = (idx: number) => {
    setActiveFormat((prev) => {
      const next = prev === idx ? null : idx;
      if (next !== null) {
        setTimeout(() => {
          panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 80);
      }
      return next;
    });
  };

  return (
    <Slide
      id="jack-daniels"
      variant="scrollable"
      videoBg="/AVENUE/broadcast-boiler.mp4"
      cinematic={false}
      overlayStyle={{
        background:
          "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(8,6,4,0.88) 50%, rgba(0,0,0,0.94) 100%)",
      }}
      contentStyle={{
        textAlign: "left",
        maxWidth: "1200px",
        padding: "0 32px",
      }}
    >
      {/* Hero header */}
      <div className="jd-hero">
        <div className="jd-hero-logo-box">
          <Image
            src="/AVENUE/logoparceiros/jackdaniels.svg"
            alt="Jack Daniel's"
            width={180}
            height={120}
            className="jd-hero-logo"
            unoptimized
          />
        </div>
        <div className="jd-hero-divider" />
        <div className="jd-hero-text">
          <ActTag>PROPOSTA DE PARCERIA</ActTag>
          <h2 className="jd-hero-title">
            ROYAL STUDIO <span className="jd-hero-x">x</span> JACK DANIEL&apos;S
          </h2>
          <p className="jd-hero-sub">
            Naming rights &middot; Noite fixa &middot; Transmissão exclusiva &middot; Estética premium
          </p>
        </div>
      </div>

      {/* Defesa */}
      <section className="jd-defesa">
        <div className="jd-defesa-accent" />
        <div className="jd-defesa-content">
          <h3 className="jd-defesa-title">POR QUE ESTA PARCERIA</h3>
          <p className="jd-defesa-text">
            Triple Mash é o produto certo para a noite certa. Royal traz o público premium,
            a curadoria e o palco. Jack Daniel&apos;s traz o naming, o storytelling e o alcance.
            Uma noite fixa com transmissão só para convidados gera <strong>FOMO</strong>, conteúdo exclusivo
            e viralização orgânica nas redes — foco no elétrico, no que viraliza.
          </p>
        </div>
      </section>

      {/* Lineup */}
      <section className="jd-lineup">
        <h3 className="jd-section-label">LINE-UP CONFIRMADO</h3>
        <div className="jd-lineup-grid">
          {JD_ARTISTS.map((a) => {
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(a.nome)}&size=200&background=d4af37&color=0a0a0a&bold=true`;
            const useFallback = imgErrors[a.slug];
            return (
              <article key={a.nome} className="jd-artist">
                <div className="jd-artist-img-wrap">
                  {!useFallback ? (
                    <Image
                      src={`/AVENUE/artists/${a.slug}.jpg`}
                      alt={a.nome}
                      width={200}
                      height={200}
                      className="jd-artist-img"
                      onError={() => handleImgError(a.slug)}
                    />
                  ) : (
                    <img
                      src={avatarUrl}
                      alt={a.nome}
                      className="jd-artist-img"
                      width={200}
                      height={200}
                    />
                  )}
                  <div className="jd-artist-overlay" />
                  <span className="jd-artist-role">{a.role}</span>
                </div>
                <div className="jd-artist-info">
                  <h4 className="jd-artist-name">{a.nome}</h4>
                  <a
                    href={`https://instagram.com/${a.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jd-artist-ig"
                  >
                    @{a.instagram}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Format cards — cinematic */}
      <section className="jd-formats">
        <h3 className="jd-section-label">FORMATO DA NOITE</h3>
        <div className="jd-formats-grid">
          {JD_FORMAT_CARDS.map((card, idx) => (
            <button
              key={card.tag}
              type="button"
              className={`jd-format ${activeFormat === idx ? "active" : ""}`}
              onClick={() => toggleFormat(idx)}
            >
              <span className="jd-format-number">{card.icon}</span>
              <span className="jd-format-tag">{card.tag}</span>
              <h4 className="jd-format-title">{card.title}</h4>
              <p className="jd-format-teaser">{card.teaser}</p>
              <span className="jd-format-expand">
                {activeFormat === idx ? "FECHAR" : "EXPLORAR"}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d={activeFormat === idx ? "M2 8L6 4L10 8" : "M2 4L6 8L10 4"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {/* Cinematic expand panel */}
        {activeFormat !== null && (
          <div className="jd-format-panel" ref={panelRef} key={activeFormat}>
            <div className="jd-format-panel-inner">
              <div className="jd-format-panel-visual">
                <Image
                  src={JD_FORMAT_CARDS[activeFormat].visual}
                  alt={JD_FORMAT_CARDS[activeFormat].title}
                  width={480}
                  height={480}
                  className="jd-format-panel-img"
                />
                <div className="jd-format-panel-img-overlay" />
                <span className="jd-format-panel-number">
                  {JD_FORMAT_CARDS[activeFormat].icon}
                </span>
              </div>
              <div className="jd-format-panel-content">
                <span className="jd-format-panel-tag">
                  {JD_FORMAT_CARDS[activeFormat].tag}
                </span>
                <h3 className="jd-format-panel-title">
                  {JD_FORMAT_CARDS[activeFormat].title}
                </h3>
                <ul className="jd-format-panel-list">
                  {JD_FORMAT_CARDS[activeFormat].details.map((d, i) => (
                    <li key={i} className="jd-format-panel-item">
                      <span className="jd-format-panel-bullet" />
                      {d}
                    </li>
                  ))}
                </ul>
                <blockquote className="jd-format-panel-highlight">
                  {JD_FORMAT_CARDS[activeFormat].highlight}
                </blockquote>
                <p className="jd-format-panel-cta-text">
                  {JD_FORMAT_CARDS[activeFormat].cta}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <div className="jd-cta-wrap">
        <a href="#cta" className="jd-cta">
          <span className="jd-cta-label">PROPOSTA COMERCIAL</span>
          <span className="jd-cta-val">Sob consulta</span>
        </a>
      </div>
    </Slide>
  );
}
