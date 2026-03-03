"use client";

import { useState } from "react";
import Image from "next/image";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const ROYAL_POINTS = [
  "Chefin Night com line-up Mainstreet Records.",
  "Formato so camarotes com entrada por lista.",
  "Front VIP para convidados e marcas parceiras.",
  "Noite assinatura ROYAL para alto ticket medio.",
];

type ArtistItem = {
  nome: string;
  slug: string;
  status: "contrato" | "sem contrato";
};

const TU_GOXTA_ARTISTS: ArtistItem[] = [
  { nome: "Tutto", slug: "tutto", status: "contrato" },
  { nome: "Chefin", slug: "chefin", status: "contrato" },
  { nome: "Meno K", slug: "meno-k", status: "sem contrato" },
  { nome: "IG", slug: "ig", status: "sem contrato" },
];

function ArtistCard({ nome, slug, status }: ArtistItem) {
  const [imgError, setImgError] = useState(false);
  const photoPath = `/AVENUE/artists/${slug}.jpg`;
  const placeholderPath = "/AVENUE/artists/placeholder.jpg";
  const src = imgError ? placeholderPath : photoPath;

  return (
    <div className="artist-card">
      <div className="artist-card-photo">
        <Image
          src={src}
          alt={nome}
          width={160}
          height={160}
          className="artist-card-img"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="artist-card-info">
        <span className="artist-card-nome">{nome}</span>
        <span className={`artist-card-status ${status === "contrato" ? "contratado" : ""}`}>
          {status === "contrato" ? "Contrato" : "Sem contrato"}
        </span>
      </div>
    </div>
  );
}

export function RoyalNightSlide() {
  const [activeTab, setActiveTab] = useState<"royal" | "tu-goxta">("royal");

  return (
    <Slide
      id="noite-sabado"
      bg="/AVENUE/conceito-bar-dance.jpeg"
      cinematic
      overlayStyle={{
        background:
          "linear-gradient(105deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.82) 100%)",
      }}
      contentStyle={{ maxWidth: "1160px" }}
    >
      <ActTag>PROGRAMACAO - SABADO</ActTag>

      <div className="royal-night">
        <div className="royal-night-tabs">
          <button
            type="button"
            className={`royal-night-tab ${activeTab === "royal" ? "active" : ""}`}
            onClick={() => setActiveTab("royal")}
            aria-selected={activeTab === "royal"}
            aria-controls="panel-royal"
            id="tab-royal"
          >
            Royal Mainstreet
          </button>
          <button
            type="button"
            className={`royal-night-tab ${activeTab === "tu-goxta" ? "active" : ""}`}
            onClick={() => setActiveTab("tu-goxta")}
            aria-selected={activeTab === "tu-goxta"}
            aria-controls="panel-tu-goxta"
            id="tab-tu-goxta"
          >
            Tu Goxta
          </button>
        </div>

        {activeTab === "royal" && (
          <div
            id="panel-royal"
            role="tabpanel"
            aria-labelledby="tab-royal"
            className="royal-night-panel-content"
          >
            <header className="royal-night-head">
              <span className="royal-night-num">06</span>
              <h2 className="royal-night-title">ROYAL MAINSTREET</h2>
              <p className="royal-night-sub">CHEFIN NIGHT - CAMAROTES ONLY</p>
            </header>

            <div className="royal-night-grid royal-mainstreet-grid">
              <div className="royal-night-media">
                <div className="royal-night-main-img">
                  <Image
                    src="/AVENUE/conceito-bar-dance.jpeg"
                    alt="Noite Royal Mainstreet"
                    width={860}
                    height={520}
                  />
                </div>
                <div className="royal-night-strip">
                  <div className="royal-night-mini">
                    <Image
                      src="/AVENUE/avenuefoto1.jpg"
                      alt="Lounge Royal para camarotes"
                      width={420}
                      height={240}
                    />
                  </div>
                  <div className="royal-night-mini">
                    <Image
                      src="/AVENUE/mayfair-society.jpeg"
                      alt="Entrada premium estilo members club"
                      width={420}
                      height={240}
                    />
                  </div>
                </div>
              </div>

              <aside className="royal-night-panel">
                <h3>NOITE ASSINATURA ROYAL</h3>
                <p>
                  Mainstream trap em setup de clube privado: energia de festival,
                  servico de camarote e narrativa de marca para viral.
                </p>
                <ul>
                  {ROYAL_POINTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="royal-night-stamp">ROYAL BLACK - SO CAMAROTES</div>
              </aside>
            </div>
          </div>
        )}

        {activeTab === "tu-goxta" && (
          <div
            id="panel-tu-goxta"
            role="tabpanel"
            aria-labelledby="tab-tu-goxta"
            className="royal-night-panel-content tu-goxta-panel"
          >
            <header className="royal-night-head">
              <span className="royal-night-num">06</span>
              <h2 className="royal-night-title">TU GOXTA</h2>
              <p className="royal-night-sub">PROJETO FIXO — TODO SABADO</p>
            </header>

            <div className="tu-goxta-layout">
              <section className="tu-goxta-artists-section">
                <h3 className="tu-goxta-section-title">ARTISTAS DE ABRIL</h3>
                <div className="tu-goxta-artists-grid">
                  {TU_GOXTA_ARTISTS.map((a) => (
                    <ArtistCard key={a.nome} {...a} />
                  ))}
                </div>
              </section>

              <div className="tu-goxta-dados-row">
                <section className="tu-goxta-section tu-goxta-metricas-section">
                  <h3 className="tu-goxta-section-title">ULTIMO EVENTO (FEV)</h3>
                  <p className="tu-goxta-contexto">
                    Casa em obras e ajustes operacionais. Abertura em fevereiro.
                  </p>
                  <div className="tu-goxta-metricas">
                    <div className="tu-goxta-metrica">
                      <span className="metric-val">185</span>
                      <span className="metric-desc">Bilheteria + Open Bar</span>
                    </div>
                    <div className="tu-goxta-metrica">
                      <span className="metric-val">R$ 40</span>
                      <span className="metric-desc">Locacao bustos e sofas</span>
                    </div>
                  </div>
                </section>

                <section className="tu-goxta-section tu-goxta-faturamento-section">
                  <h3 className="tu-goxta-section-title">CONCEITO FATURAMENTO</h3>
                  <p className="tu-goxta-lead">
                    Venda antecipada de camarotes e ingressos pista.
                  </p>
                  <div className="tu-goxta-receita">
                    <div className="receita-item">
                      <span className="receita-pax">120 pax</span>
                      <span className="receita-tipo">Camarotes</span>
                      <span className="receita-ticket">Ticket medio R$ 180</span>
                    </div>
                    <div className="receita-item">
                      <span className="receita-pax">495 pax</span>
                      <span className="receita-tipo">Pista</span>
                      <span className="receita-ticket">Ticket medio R$ 90</span>
                    </div>
                  </div>
                  <div className="tu-goxta-adiantamento">
                    <span className="adiantamento-valor">45%</span>
                    <span className="adiantamento-desc">em adiantamento para exclusividade</span>
                  </div>
                  <div className="royal-night-stamp tu-goxta-stamp">
                    MARKETING & VENDAS — Frente de defesa
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
      </div>
    </Slide>
  );
}
