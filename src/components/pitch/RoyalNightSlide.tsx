"use client";

import { useState, useEffect } from "react";
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
  instagram?: string;
  /** Seguidores no Instagram (ex: 450000) */
  followers?: number;
  /** Ouvintes mensais no Spotify (ex: 1200000) */
  spotifyMonthlyListeners?: number;
  /** Link do artista no Spotify */
  spotifyUrl?: string;
};

function formatMetric(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
}

const TU_GOXTA_ARTISTS: ArtistItem[] = [
  { nome: "MC Tuto", slug: "tutto", status: "contrato", instagram: "mctuto", followers: 320_000, spotifyMonthlyListeners: 1_200_000 },
  { nome: "Chefin", slug: "chefin", status: "contrato", instagram: "chefinoficial", followers: 890_000, spotifyMonthlyListeners: 2_400_000 },
  { nome: "MC Meno K", slug: "meno-k", status: "sem contrato", instagram: "mcmenok", followers: 180_000, spotifyMonthlyListeners: 450_000 },
  { nome: "MC IG", slug: "ig", status: "sem contrato", instagram: "mcig", followers: 210_000, spotifyMonthlyListeners: 680_000 },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

function ArtistCard({ nome, slug, status, instagram, followers, spotifyMonthlyListeners, spotifyUrl }: ArtistItem) {
  const [imgError, setImgError] = useState(false);
  const [triedPng, setTriedPng] = useState(false);
  const photoPath = triedPng ? `/AVENUE/artists/${slug}.png` : `/AVENUE/artists/${slug}.jpg`;
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(nome)}&size=240&background=d4af37&color=0a0a0a&bold=true`;
  const src = imgError ? avatarUrl : photoPath;

  const handleImgError = () => {
    if (!triedPng) {
      setTriedPng(true);
    } else {
      setImgError(true);
    }
  };
  const igUrl = instagram ? `https://instagram.com/${instagram}` : null;

  return (
    <article className="artist-card-modern">
      <div className="artist-card-modern-photo">
        {!imgError ? (
          <Image
            src={src}
            alt={nome}
            width={140}
            height={140}
            className="artist-card-modern-img"
            onError={handleImgError}
          />
        ) : (
          <img
            src={avatarUrl}
            alt={nome}
            className="artist-card-modern-img"
            width={140}
            height={140}
          />
        )}
        {status === "contrato" && (
          <span className="artist-card-modern-badge badge-contrato">Contratado</span>
        )}
      </div>
      <div className="artist-card-modern-body">
        <h4 className="artist-card-modern-nome">{nome}</h4>
        {(followers !== undefined || spotifyMonthlyListeners !== undefined) && (
          <div className="artist-card-modern-metrics">
            {followers !== undefined && (
              <div className="artist-card-modern-metric">
                <span className="artist-card-modern-metric-icon" aria-hidden>
                  <InstagramIcon />
                </span>
                <span className="artist-card-modern-metric-val">{formatMetric(followers)}</span>
                <span className="artist-card-modern-metric-label">seguidores</span>
              </div>
            )}
            {spotifyMonthlyListeners !== undefined && (
              <div className="artist-card-modern-metric">
                <span className="artist-card-modern-metric-icon spotify" aria-hidden>
                  <SpotifyIcon />
                </span>
                <span className="artist-card-modern-metric-val">{formatMetric(spotifyMonthlyListeners)}</span>
                <span className="artist-card-modern-metric-label">ouvintes/mês</span>
              </div>
            )}
          </div>
        )}
        <div className="artist-card-modern-links">
          {igUrl && (
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="artist-card-modern-link"
              aria-label={`Instagram de ${nome}`}
            >
              @{instagram}
            </a>
          )}
          {spotifyUrl && (
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="artist-card-modern-link"
              aria-label={`Spotify de ${nome}`}
            >
              Spotify
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

const TU_GOXTA_HASH_IDS = ["lineup-abril", "ultimo-evento", "faturamento", "dashboard-consolidado"];

/** Dashboard consolidado — faturamento estimado por noite (valor por evento) */
const DASHBOARD_NOITES = [
  { num: "01", dia: "Segunda", mood: "Executivo", evento: "Corporativo fechado", faturamento: 28_000 },
  { num: "02", dia: "Terça", mood: "All In", evento: "Poker Night VIP · Serviço Poker Club", faturamento: 250_000 },
  { num: "03", dia: "Quarta", mood: "Preview", evento: "Corporate + Preview", faturamento: 45_000 },
  { num: "04", dia: "Quinta", mood: "Estúdio", evento: "Stand-up Royal", faturamento: 55_000 },
  { num: "05", dia: "Sexta", mood: "High Energy", evento: "Casa cheia", faturamento: 95_000 },
  { num: "06", dia: "Sábado", mood: "Tu Goxta", evento: "Chefin Night", faturamento: 121_455 },
  { num: "07", dia: "Domingo", mood: "Respiro", evento: "Brunch & Lounge", faturamento: 35_000 },
] as const;

const EVENTOS_POR_MES = 4; // ~4 sábados, 4 sextas, etc.
const PERCENTUAL_ADIANTAMENTO = 35;

function formatBRL(n: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(n);
}

export function RoyalNightSlide() {
  const [activeTab, setActiveTab] = useState<"royal" | "tu-goxta">("royal");

  // Abre Tu Goxta ao acessar via link com hash (/#lineup-abril, etc.)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.slice(1);
    if (TU_GOXTA_HASH_IDS.includes(hash)) {
      requestAnimationFrame(() => setActiveTab("tu-goxta"));
    }
  }, []);

  return (
    <Slide
      id="noite-sabado"
      variant="scrollable"
      bg="/AVENUE/conceito-bar-dance.jpeg"
      cinematic
      overlayStyle={{
        background:
          "linear-gradient(135deg, rgba(5,5,8,0.88) 0%, rgba(13,10,12,0.82) 35%, rgba(26,22,18,0.85) 60%, rgba(8,6,5,0.9) 100%), radial-gradient(ellipse 80% 50% at 70% 40%, rgba(212,175,55,0.06) 0%, transparent 50%)",
      }}
      contentStyle={{ maxWidth: "1160px" }}
    >
      <ActTag>PROGRAMACAO - SABADO</ActTag>

      <div className="royal-night">
        <div className="royal-night-tabs" role="tablist">
          <button
            type="button"
            role="tab"
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
            role="tab"
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
              <section className="tu-goxta-proposta-intro">
                <p className="tu-goxta-proposta-texto">
                  Proposta comercial Tu Goxta — 4 artistas por noite, todo sabado. Line-up de abril: MC Tuto e Chefin (contratados), MC Meno K e MC IG (em negociacao). Cada artista com proposta individual e foto oficial.
                </p>
              </section>
              <section id="lineup-abril" className="tu-goxta-artists-section tu-goxta-lineup-modern">
                <div className="tu-goxta-lineup-header">
                  <h3 className="tu-goxta-section-title">LINE-UP ABRIL</h3>
                  <p className="tu-goxta-lineup-sub">4 artistas · alcance combinado +1,6M seguidores · +4,7M ouvintes/mês Spotify</p>
                </div>
                <div className="tu-goxta-artists-grid tu-goxta-artists-grid-modern">
                  {TU_GOXTA_ARTISTS.map((a) => (
                    <ArtistCard key={a.nome} {...a} />
                  ))}
                </div>
              </section>

              <div className="tu-goxta-dados-row">
                <section id="ultimo-evento" className="tu-goxta-section tu-goxta-metricas-section">
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

                <section id="faturamento" className="tu-goxta-section tu-goxta-faturamento-section">
                  <h3 className="tu-goxta-section-title">FATURAMENTO MEDIO POR EVENTO</h3>
                  <p className="tu-goxta-lead">
                    12 camarotes (10 pax cada = 120) + 465 pista = 585 pax total. Venda antecipada + consumo bar.
                  </p>
                  <div className="faturamento-tabela">
                    <div className="faturamento-linha faturamento-header">
                      <span>Item</span>
                      <span>Pax</span>
                      <span>Ticket/consumo</span>
                      <span className="faturamento-valor">Subtotal</span>
                    </div>
                    <div className="faturamento-linha">
                      <span>Camarotes (12 × 10 pax)</span>
                      <span>120</span>
                      <span>R$ 180</span>
                      <span className="faturamento-valor">R$ 21.600</span>
                    </div>
                    <div className="faturamento-linha">
                      <span>Pista</span>
                      <span>465</span>
                      <span>R$ 90</span>
                      <span className="faturamento-valor">R$ 41.850</span>
                    </div>
                    <div className="faturamento-linha faturamento-subtotal">
                      <span>Bilheteria bruta</span>
                      <span>585</span>
                      <span>—</span>
                      <span className="faturamento-valor">R$ 63.450</span>
                    </div>
                    <div className="faturamento-linha faturamento-deducao">
                      <span>(-) Ticketeira (10%)</span>
                      <span>—</span>
                      <span>—</span>
                      <span className="faturamento-valor">-R$ 6.345</span>
                    </div>
                    <div className="faturamento-linha">
                      <span>Bilheteria liquida casa</span>
                      <span>—</span>
                      <span>—</span>
                      <span className="faturamento-valor">R$ 57.105</span>
                    </div>
                    <div className="faturamento-linha">
                      <span>Bar (consumo medio)</span>
                      <span>585</span>
                      <span>R$ 110</span>
                      <span className="faturamento-valor">R$ 64.350</span>
                    </div>
                    <div className="faturamento-linha faturamento-total">
                      <span>Total evento (casa)</span>
                      <span>—</span>
                      <span>—</span>
                      <span className="faturamento-valor">R$ 121.455</span>
                    </div>
                  </div>
                  <div className="faturamento-resumo">
                    <p><strong>Ticketeira:</strong> R$ 6.345 · <strong>Bar:</strong> R$ 64.350 · <strong>Casa:</strong> R$ 121.455</p>
                  </div>
                  <div className="tu-goxta-adiantamento">
                    <span className="adiantamento-valor">35%</span>
                    <span className="adiantamento-desc">em adiantamento do valor gerado (ver dashboard)</span>
                  </div>
                  <div className="royal-night-stamp tu-goxta-stamp">
                    MARKETING & VENDAS — Frente de defesa
                  </div>
                </section>
              </div>

              <section id="dashboard-consolidado" className="tu-goxta-dashboard-consolidado">
                <header className="tu-goxta-dashboard-header">
                  <span className="tu-goxta-dashboard-badge">COMPILADO FINAL</span>
                  <h3 className="tu-goxta-dashboard-title">TODAS AS FESTAS — PROJEÇÃO MENSAL</h3>
                  <p className="tu-goxta-dashboard-lead">
                    {EVENTOS_POR_MES} eventos por noite · bilheteria + bar · valores conservadores
                  </p>
                </header>
                <div className="tu-goxta-dashboard-cards">
                  {DASHBOARD_NOITES.map((n) => (
                    <article
                      key={n.dia}
                      className={`tu-goxta-dashboard-card ${n.dia === "Sábado" ? "tu-goxta-dashboard-card-destaque" : ""}`}
                    >
                      <span className="tu-goxta-dashboard-card-num">{n.num}</span>
                      <div className="tu-goxta-dashboard-card-body">
                        <h4 className="tu-goxta-dashboard-card-dia">{n.dia}</h4>
                        <span className="tu-goxta-dashboard-card-mood">{n.mood}</span>
                        <p className="tu-goxta-dashboard-card-evento">{n.evento}</p>
                        <div className="tu-goxta-dashboard-card-valores">
                          <span className="tu-goxta-dashboard-card-evento-val">{formatBRL(n.faturamento)}</span>
                          <span className="tu-goxta-dashboard-card-evento-label">/evento</span>
                          <span className="tu-goxta-dashboard-card-mensal-val">{formatBRL(n.faturamento * EVENTOS_POR_MES)}</span>
                          <span className="tu-goxta-dashboard-card-mensal-label">/mês</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="tu-goxta-dashboard-footer">
                  <div className="tu-goxta-dashboard-total-card">
                    <span className="tu-goxta-dashboard-total-label">TOTAL MENSAL (CASA)</span>
                    <span className="tu-goxta-dashboard-total-val">
                      {formatBRL(DASHBOARD_NOITES.reduce((s, n) => s + n.faturamento * EVENTOS_POR_MES, 0))}
                    </span>
                  </div>
                  <div className="tu-goxta-dashboard-cta">
                    <span className="tu-goxta-dashboard-cta-pct">{PERCENTUAL_ADIANTAMENTO}%</span>
                    <div className="tu-goxta-dashboard-cta-body">
                      <span className="tu-goxta-dashboard-cta-desc">Adiantamento do valor que podemos gerar</span>
                      <span className="tu-goxta-dashboard-cta-val">
                        {formatBRL(
                          Math.round(
                            (DASHBOARD_NOITES.reduce((s, n) => s + n.faturamento * EVENTOS_POR_MES, 0) *
                              PERCENTUAL_ADIANTAMENTO) /
                              100
                          )
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="tu-goxta-dashboard-nota">
                  Garantia de exclusividade e operação. Projeções baseadas em dados conservadores.
                </p>
              </section>
            </div>
          </div>
        )}
      </div>
    </Slide>
  );
}
