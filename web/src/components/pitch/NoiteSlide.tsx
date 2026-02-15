import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

export type NoiteItem = {
  id: string;
  num: string;
  nome: string;
  mood: string;
  evento: string;
  ambientes: string;
  destaque?: string;
};

export const NOITES_DATA: NoiteItem[] = [
  { id: "noite-segunda", num: "01", nome: "SEGUNDA", mood: "EXECUTIVO", evento: "Corporativo fechado. Jantar executivo.", ambientes: "Restaurante · Lounge" },
  { id: "noite-terca", num: "02", nome: "TERÇA", mood: "ALL IN", evento: "Poker Night. Mesa VIP. Buy-in exclusivo.", ambientes: "Lounge · Camarotes", destaque: "NOVO" },
  { id: "noite-quarta", num: "03", nome: "QUARTA", mood: "PREVIEW", evento: "Corporate + Preview. Jantar + after.", ambientes: "Restaurante · Camarotes · Pista" },
  { id: "noite-quinta", num: "04", nome: "QUINTA", mood: "ESTÚDIO", evento: "Stand-up Royal. Palco intimista e Instagramável. Gastro Club + comédia premium ao vivo. Show especial.", ambientes: "Restaurante · Lounge · Pista · Camarotes", destaque: "ESTÚDIO" },
  { id: "noite-sexta", num: "05", nome: "SEXTA", mood: "HIGH ENERGY", evento: "Casa cheia. Pista em ebulição. Sold out.", ambientes: "Pista · Camarotes · Front Stage · Externas" },
  { id: "noite-sabado", num: "06", nome: "SÁBADO", mood: "PICO", evento: "Reserva de camarote obrigatória. Todos os ambientes.", ambientes: "Todos os ambientes" },
  { id: "noite-domingo", num: "07", nome: "DOMINGO", mood: "RESPIRO", evento: "Brunch & Lounge. Respiro premium.", ambientes: "Restaurante · Externas" },
];

interface NoiteSlideProps {
  id: string;
  num: string;
  nome: string;
  mood: string;
  evento: string;
  ambientes: string;
  destaque?: string;
}

export function NoiteSlide({
  id,
  num,
  nome,
  mood,
  evento,
  ambientes,
  destaque,
}: NoiteSlideProps) {
  return (
    <Slide
      id={id}
      bg="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2940"
      cinematic
      overlayStyle={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.88) 100%)",
      }}
      contentStyle={{ maxWidth: "800px" }}
    >
      <ActTag>PROGRAMAÇÃO — {nome}</ActTag>
      <div className="noite-card">
        {destaque && <span className="noite-badge">{destaque}</span>}
        <div className="noite-num">{num}</div>
        <h2 className="noite-mood">{mood}</h2>
        <h3 className="noite-nome">{nome}</h3>
        <p className="noite-evento">{evento}</p>
        <p className="noite-ambientes">{ambientes}</p>
      </div>
    </Slide>
  );
}
