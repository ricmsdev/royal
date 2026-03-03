"use client";

import { useState } from "react";
import Image from "next/image";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const JD_ARTISTS = [
  { nome: "Chefin", slug: "chefin", instagram: "chefinoficial", role: "Headliner" },
  { nome: "MC Tuto", slug: "tutto", instagram: "mctuto", role: "Headliner" },
  { nome: "MC Meno K", slug: "meno-k", instagram: "mcmenok", role: "Guest" },
  { nome: "MC IG", slug: "ig", instagram: "mcig", role: "Guest" },
];

const JD_FORMAT_CARDS = [
  {
    tag: "NOITE FIXA",
    title: "Uma noite dos caras",
    desc: "Transmissão exclusiva só para convidados. Royal Black Box vira palco fixo mensal.",
  },
  {
    tag: "VIRALIZAÇÃO",
    title: "Foco no elétrico",
    desc: "House, techno, eletrônico. Conteúdo que viraliza nas redes — alcance orgânico.",
  },
  {
    tag: "STORYTELLING",
    title: "Jack Daniel's Triple Mash",
    desc: "Produto em cena. A história do blend, da destilaria, da noite. Branded content premium.",
  },
];

export function JackDanielsSlide() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (slug: string) => {
    setImgErrors((p) => ({ ...p, [slug]: true }));
  };

  return (
    <Slide
      id="jack-daniels"
      variant="scrollable"
      videoBg="/AVENUE/broadcast-boiler.mp4"
      cinematic={false}
      overlayStyle={{
        background:
          "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(8,6,4,0.85) 50%, rgba(0,0,0,0.92) 100%)",
      }}
      contentStyle={{
        textAlign: "left",
        maxWidth: "1200px",
        padding: "0 32px",
      }}
    >
      <ActTag>PROPOSTA DE PARCERIA</ActTag>

      <header className="jack-daniels-header">
        <div className="jack-daniels-black-box">
          <div className="jack-daniels-logo-wrap">
            <Image
              src="/AVENUE/jack-daniels-logo.svg"
              alt="Jack Daniel's"
              width={220}
              height={80}
              className="jack-daniels-logo"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.nextElementSibling;
                if (fallback) (fallback as HTMLElement).style.display = "flex";
              }}
            />
            <div className="jack-daniels-logo-fallback" aria-hidden>
              <span className="jack-daniels-logo-text">JACK DANIEL&apos;S</span>
              <span className="jack-daniels-logo-old">TRIPLE MASH</span>
            </div>
          </div>
          <p className="jack-daniels-tagline">ROYAL BLACK BOX</p>
          <p className="jack-daniels-sub">Noite fixa · Transmissão exclusiva · Estética premium</p>
        </div>
        <div className="jack-daniels-header-text">
          <h2 className="jack-daniels-title">JACK DANIEL&apos;S × ROYAL STUDIOS</h2>
          <p className="jack-daniels-lead">
            Naming e parceria para o sistema de broadcast: energia Boiler Room
            com estética Royal — preto, dourado, exclusividade.
          </p>
        </div>
      </header>

      <section className="jack-daniels-defesa">
        <h3 className="jack-daniels-section-title">POR QUE JACK DANIEL&apos;S × ROYAL</h3>
        <p className="jack-daniels-defesa-text">
          Triple Mash é o produto certo para a noite certa. Royal traz o público premium,
          a curadoria e o palco. Jack Daniel&apos;s traz o naming, o storytelling e o alcance.
          Uma noite fixa com transmissão só para convidados gera FOMO, conteúdo exclusivo
          e viralização orgânica nas redes — foco no elétrico, no que viraliza.
        </p>
      </section>

      <section id="jd-lineup" className="jack-daniels-artists">
        <h3 className="jack-daniels-section-title">LINE-UP PARA SESSÕES</h3>
        <div className="jack-daniels-artists-grid">
          {JD_ARTISTS.map((a) => {
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(a.nome)}&size=200&background=d4af37&color=0a0a0a&bold=true`;
            const useFallback = imgErrors[a.slug];
            return (
              <article key={a.nome} className="jack-daniels-artist-card">
                <div className="jack-daniels-artist-photo">
                  {!useFallback ? (
                    <Image
                      src={`/AVENUE/artists/${a.slug}.jpg`}
                      alt={a.nome}
                      width={140}
                      height={140}
                      className="jack-daniels-artist-img"
                      onError={() => handleImgError(a.slug)}
                    />
                  ) : (
                    <img
                      src={avatarUrl}
                      alt={a.nome}
                      className="jack-daniels-artist-img"
                      width={140}
                      height={140}
                    />
                  )}
                  <span className="jack-daniels-artist-role">{a.role}</span>
                </div>
                <h4 className="jack-daniels-artist-nome">{a.nome}</h4>
                <a
                  href={`https://instagram.com/${a.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jack-daniels-artist-ig"
                >
                  @{a.instagram}
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section id="jd-formats" className="jack-daniels-formats">
        {JD_FORMAT_CARDS.map((card) => (
          <article key={card.tag} className="jack-daniels-format-card">
            <span className="jack-daniels-format-tag">{card.tag}</span>
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
          </article>
        ))}
      </section>

      <div id="jd-cta" className="jack-daniels-footer">
        <a href="#cta" className="jack-daniels-cta">
          <span className="jack-daniels-cta-label">PROPOSTA COMERCIAL</span>
          <span className="jack-daniels-cta-val">Sob consulta</span>
        </a>
      </div>
    </Slide>
  );
}
