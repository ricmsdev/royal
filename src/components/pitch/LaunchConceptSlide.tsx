import Image from "next/image";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const LAUNCH_BG = "/AVENUE/danilo-poster.png";
const DANILO_IMG = "/AVENUE/danilo-estreia-tight.png";

const kpis = [
  { value: "250", label: "convidados por noite" },
  { value: "02", label: "primeiras noites sold out" },
  { value: "100%", label: "casa vendida antes da abertura" },
];

const highlights = [
  {
    title: "SOLD OUT DAS 2 PRIMEIRAS NOITES",
    desc: "Escassez real desde o dia zero.",
  },
  {
    title: "POCKET SHOWS COM CARA DE HEADLINE",
    desc: "Formato curto, intenso e filmavel para corte viral.",
  },
  {
    title: "CLUB PRIVADO NO BACKSTAGE",
    desc: "Lista branca, bar reservado e acesso por convite.",
  },
  {
    title: "NOITES EPICAS TODA SEMANA",
    desc: "A estreia abre uma agenda recorrente de alto desejo.",
  },
];

export function LaunchConceptSlide() {
  return (
    <Slide
      id="launch-concept"
      bg={LAUNCH_BG}
      cinematic
      overlayStyle={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.56) 48%, rgba(0,0,0,0.72) 100%)",
      }}
      contentStyle={{ maxWidth: "1160px", width: "100%", margin: "0 auto" }}
    >
      <div className="launch-shell">
        <div className="launch-copy">
          <ActTag>CONCEITO DE LANCAMENTO</ActTag>
          <h2 className="launch-title">
            Nao e abertura. <span className="launch-title-accent">É estreia.</span>
          </h2>
          <p className="launch-subtitle">
            A primeira noite vira statement: casa cheia, narrativa forte, conteudo
            filmavel. Pocket shows como club privado, com a cara da Royal. Nao e
            inauguracao social; e o primeiro capitulo de noites epicas.
          </p>
          <div className="launch-kpis">
            {kpis.map((item) => (
              <div key={item.label} className="launch-kpi">
                <span className="launch-kpi-value">{item.value}</span>
                <span className="launch-kpi-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="launch-estreia">
          <div className="launch-visuals">
            <div className="launch-visual-danilo">
              <Image
                src={DANILO_IMG}
                alt="Danilo Gentili na estreia Royal"
                width={596}
                height={560}
                priority
              />
            </div>
          </div>
          <div className="launch-estreia-caption">
            <span className="launch-estreia-label">ESTREIA COM DANILO GENTILI</span>
            <p className="launch-estreia-lead">
              Stand-up + pocket show no mesmo roteiro. Atmosfera de club
              privado com energia de headline.
            </p>
            <ul className="launch-estreia-points">
              <li>250 convidados com lista curada.</li>
              <li>Pocket show filmado para cortes.</li>
              <li>Backstage privado para convidados.</li>
            </ul>
            <strong className="launch-estreia-proof">
              D-0 e D+1 vendidos antes de abrir.
            </strong>
            <span className="launch-club-note">
              Meta: abrir ciclo de noites epicas em SP.
            </span>
          </div>
        </div>
      </div>

      <div className="launch-highlights">
        {highlights.map((h, i) => (
          <div key={i} className="launch-highlight-item">
            <span className="launch-highlight-num">{String(i + 1).padStart(2, "0")}</span>
            <div className="launch-highlight-body">
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="launch-tagline">
        Cada noite e um evento. Cada evento e uma maquina de FOMO.
      </p>
    </Slide>
  );
}
