"use client";

import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Rua+Cardeal+Arcoverde+1393+Pinheiros+S%C3%A3o+Paulo+SP&output=embed";

const accessPoints = [
  {
    icon: "1",
    title: "Rua Cardeal Arcoverde, 1393",
    desc: "Pinheiros. O bairro que concentra o dinheiro novo de SP.",
  },
  {
    icon: "2",
    title: "Acesso privilegiado",
    desc: "Fácil entrada e saída. Estacionamento valet. Uber na porta.",
  },
  {
    icon: "3",
    title: "Metrô Faria Lima",
    desc: "10 min a pé. Conexão direta com a linha amarela.",
  },
];

export function AcessoLocalizacaoSlide() {
  return (
    <Slide
      id="acesso-localizacao"
      bg="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940"
      cinematic
      overlayStyle={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.88) 100%)",
      }}
      contentStyle={{ maxWidth: "1000px" }}
    >
      <ActTag>ACESSO & LOCALIZAÇÃO</ActTag>
      <h2 className="impact-title">Onde o dinheiro encontra o endereço</h2>
      <p style={{ marginBottom: "32px", color: "var(--text-grey)" }}>
        O ponto não é acidente. É decisão estratégica.
      </p>
      <div className="acesso-grid">
        {accessPoints.map((item) => (
          <div key={item.title} className="acesso-card">
            <span className="acesso-icon">{item.icon}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="acesso-map-wrapper">
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Royal — Rua Cardeal Arcoverde, 1393, Pinheiros"
        />
        <a
          href="https://www.google.com/maps/search/Rua+Cardeal+Arcoverde+1393+Pinheiros+São+Paulo"
          target="_blank"
          rel="noopener noreferrer"
          className="acesso-map-link"
        >
          Abrir no Google Maps →
        </a>
      </div>
      <p className="highlight" style={{ marginTop: "36px" }}>
        Localização premium = cliente premium. A Royal não compete por
        endereço — ela define o endereço.
      </p>
    </Slide>
  );
}
