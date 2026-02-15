import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";
import { RefCard } from "../ui/RefCard";

const refs = [
  {
    icon: "◇",
    title: "THE DINNER CLUB",
    desc: "Script elegante, martini line-art. Clássico que não envelhece.",
    mood: "Velvet · Script · Martini",
    location: "London",
    detail: "Tipografia como identidade. O menu é arte.",
  },
  {
    icon: "◇",
    title: "SUPPER CLUB",
    desc: "Minimalista, talheres estilizados. Exclusividade discreta.",
    mood: "Silêncio · Prata · Linhas",
    location: "Global",
    detail: "Menos é mais. O vazio respira.",
  },
  {
    icon: "◇",
    title: "NEON NIGHT",
    desc: "#morethanaclub. Luz que fala. DANCE ON TABLES.",
    mood: "Neon · Euforia · Tabelas",
    location: "Ibiza · Miami",
    detail: "A luz não ilumina — ela performa.",
  },
  {
    icon: "◇",
    title: "SECRET DINING",
    desc: "Midnight escapades. Memórias após a meia-noite.",
    mood: "Penumbra · Whisper · Tarde",
    location: "NYC · Tokyo",
    detail: "O melhor acontece quando a cidade dorme.",
  },
  {
    icon: "◇",
    title: "MAKE IT ICONIC",
    desc: "Every night iconic. Cada noite é um evento.",
    mood: "Evento · Único · Memória",
    location: "—",
    detail: "Nenhuma noite se repete. Por design.",
  },
  {
    icon: "◇",
    title: "NIGHT DINNER",
    desc: "Jantar + festa. Lua, estrelas, talheres em neon.",
    mood: "Transição · Lua · Talheres",
    location: "São Paulo",
    detail: "Das 20h às 05h. Uma única narrativa.",
  },
  {
    icon: "◇",
    title: "OTTURA",
    desc: "Neon forte, selva urbana, bar iluminado. Miami vibes.",
    mood: "Selva · Neon · Tropicália",
    location: "Miami",
    detail: "Natureza domesticada. Bar como bioma.",
  },
  {
    icon: "◇",
    title: "THE MEATING PLACE",
    desc: "Interior escuro, signage minimal. Steakhouse exclusivo.",
    mood: "Carne · Escuro · Signage",
    location: "London",
    detail: "Uma palavra. Um conceito. Uma experiência.",
  },
  {
    icon: "◇",
    title: "SABABA SUPPER CLUB",
    desc: "Lagos. Line art, mesa e cadeiras. Apply now — membership.",
    mood: "Line art · Membership · Lagos",
    location: "Lagos",
    detail: "Apply now. A fila é o produto.",
  },
  {
    icon: "◇",
    title: "THE LAST DINNER PARTY",
    desc: "Querubins, serif estilizado. Arte e festa unidos.",
    mood: "Barroco · Querubins · Serif",
    location: "London",
    detail: "Arte na parede. Arte no prato. Arte na pista.",
  },
  {
    icon: "◇",
    title: "TALK LESS ACT MORE",
    desc: "Neon vermelho. Sofisticação sem exagero.",
    mood: "Vermelho · Neon · Ação",
    location: "—",
    detail: "Uma frase. Uma cor. Uma noite.",
  },
  {
    icon: "◇",
    title: "SMILE EAT DRINK TALK",
    desc: "Neon rosa e verde. Experiência multisensorial.",
    mood: "Rosa · Verde · Multisensorial",
    location: "—",
    detail: "Os sentidos não competem. Colaboram.",
  },
  {
    icon: "◇",
    title: "DINNER IS LOVE LANGUAGE",
    desc: "A Dinner Club. Every Saturday. Comunidade gastronômica.",
    mood: "Comunidade · Sábado · Amor",
    location: "—",
    detail: "A mesa é o altar. O jantar, o ritual.",
  },
  {
    icon: "◇",
    title: "ROOFTOP & LOUNGE",
    desc: "Disco balls, geometria de luz. Ambiente premium.",
    mood: "Disco · Geometria · Céu",
    location: "Dubai · NYC",
    detail: "Entre o céu e a cidade. Suspenso.",
  },
  {
    icon: "◇",
    title: "STOP THINKING START DRINKING",
    desc: "Neon em tijolo. Indulgência sem culpa.",
    mood: "Tijolo · Neon · Indulgência",
    location: "—",
    detail: "A parede fala. O copo responde.",
  },
];

const refTags2 = ["LIV Miami", "Annabel's", "Amazónico", "Mark's Club", "Nexus London", "Selva"];

export function ReferenciasSlide() {
  return (
    <Slide
      id="referencias"
      variant="scrollable"
      bg="dark"
      dark
      cinematic={false}
      overlayStyle={{ background: "transparent" }}
      contentStyle={{ maxWidth: "1100px" }}
    >
      <ActTag>REFERÊNCIAS</ActTag>
      <h2 className="impact-title">Dinner Club × Supper Club × Night</h2>
      <p>
        <strong>Mood board global.</strong> Neon, script, velvet, neon. O que
        inspira a Royal.
      </p>
      <div className="ref-grid ref-grid-expanded">
        {refs.map((r) => (
          <RefCard key={r.title} icon={r.icon} title={r.title} desc={r.desc} />
        ))}
      </div>
      <p className="conceito-tagline" style={{ marginTop: "28px" }}>
        <strong>OTTURA, SABABA, THE MEATING PLACE.</strong> Onde o dinheiro
        janta e dança.
      </p>
      <div className="referencias-row" style={{ marginTop: "20px" }}>
        {refTags2.map((tag) => (
          <span key={tag} className="ref-tag">
            {tag}
          </span>
        ))}
      </div>
    </Slide>
  );
}
