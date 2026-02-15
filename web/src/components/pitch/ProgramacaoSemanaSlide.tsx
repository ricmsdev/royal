import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const dias = [
  { num: "01", nome: "SEGUNDA", mood: "EXECUTIVO", evento: "Corporativo fechado. Jantar executivo.", ambientes: "Restaurante · Lounge" },
  { num: "02", nome: "TERÇA", mood: "ALL IN", evento: "Poker Night. Mesa VIP. Buy-in exclusivo.", ambientes: "Lounge · Camarotes", destaque: "NOVO" },
  { num: "03", nome: "QUARTA", mood: "PREVIEW", evento: "Corporate + Preview. Jantar + after.", ambientes: "Restaurante · Camarotes · Pista" },
  { num: "04", nome: "QUINTA", mood: "LIVE", evento: "Stand-up Royal. Gastro Club + comédia premium ao vivo.", ambientes: "Restaurante · Lounge · Pista · Camarotes", destaque: "ESTÚDIO" },
  { num: "05", nome: "SEXTA", mood: "HIGH ENERGY", evento: "Casa cheia. Pista em ebulição.", ambientes: "Pista · Camarotes · Front Stage · Externas" },
  { num: "06", nome: "SÁBADO", mood: "PICO", evento: "Reserva de camarote obrigatória. Todos os ambientes.", ambientes: "Todos os ambientes" },
  { num: "07", nome: "DOMINGO", mood: "RESPIRO", evento: "Brunch & Lounge. Respiro premium.", ambientes: "Restaurante · Externas" },
];

export function ProgramacaoSemanaSlide() {
  return (
    <Slide
      id="programacao-semana"
      bg="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2940"
      cinematic
      contentStyle={{ maxWidth: "1320px" }}
    >
      <ActTag>PROGRAMAÇÃO</ActTag>
      <h2 className="impact-title">Segunda a Domingo</h2>
      <p>
        <strong>5 agentes operando.</strong> Lounge, Restaurante, Pista,
        Camarotes, Externas. Cada dia, uma combinação. Poker, stand-up, gastro — a casa vira estúdio.
      </p>
      <div className="programacao-semana">
        {dias.map((d) => (
          <div key={d.nome} className={`dia-card dia-poster interactive-zone ${d.destaque ? "dia-card-destaque" : ""}`}>
            {d.destaque && <span className="dia-badge">{d.destaque}</span>}
            <div className="dia-poster-accent" />
            <div className="dia-num">{d.num}</div>
            <div className="dia-mood">{d.mood}</div>
            <div className="dia-nome">{d.nome}</div>
            <div className="dia-evento">{d.evento}</div>
            <div className="dia-ambientes">{d.ambientes}</div>
          </div>
        ))}
      </div>
      <p className="roi-line" style={{ marginTop: "32px" }}>
        <strong>5 ambientes</strong> — Lounge, Restaurante, Pista, Camarotes,
        Externas. Poker Night (terça). Stand-up Royal (quinta) — transmissão ao vivo no Royal Studios.
      </p>
    </Slide>
  );
}
