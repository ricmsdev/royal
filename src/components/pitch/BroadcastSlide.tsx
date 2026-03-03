import Image from "next/image";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const FORMAT_LINES = [
  {
    tag: "TINY SESSION",
    title: "micro palco curado",
    desc: "set curto, alto valor artistico, camera proxima do artista",
  },
  {
    tag: "BOILER SET",
    title: "DJ no centro da pista",
    desc: "publico em volta, energia de club, feed ao vivo",
  },
  {
    tag: "BACKSTAGE POD",
    title: "podcast no camarim",
    desc: "entrevista pre e pos show para cortes e distribuicao",
  },
  {
    tag: "CREATOR CUT",
    title: "edicao de highlights",
    desc: "reels e shorts em minutos depois da apresentacao",
  },
];

const STUDIO_STACK = [
  {
    id: "01",
    title: "PISTA A - TINY PERFORMANCE STAGE",
    desc: "Palco intimista para voz, instrumentos e sessions de alta proximidade.",
  },
  {
    id: "02",
    title: "PISTA B - BOILER FLOOR",
    desc: "DJ no centro da pista com publico em volta e captura multicam ao vivo.",
  },
  {
    id: "03",
    title: "JACK DANIEL'S PODCAST SUITE",
    desc: "Suite dedicada para entrevistas, branded episodes e creator roundtables.",
  },
  {
    id: "04",
    title: "CONTROL ROOM",
    desc: "Switch ao vivo, audio mix, clock de cena e clipping imediato.",
  },
];

const REVENUE_STACK = [
  "tickets premium para gravacoes presenciais",
  "brand partnerships por episodio e temporada",
  "licenciamento de cortes para social e imprensa",
  "membership para acesso a episodios e after rooms",
];

export function BroadcastSlide() {
  return (
    <Slide
      id="broadcast"
      videoBg="/AVENUE/broadcast-boiler.mp4"
      cinematic={false}
      overlayStyle={{
        background:
          "linear-gradient(105deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.66) 38%, rgba(0,0,0,0.5) 100%)",
      }}
      contentStyle={{
        textAlign: "left",
        maxWidth: "1160px",
        padding: "0 28px",
      }}
    >
      <ActTag>MIDIA & EXPANSAO</ActTag>
      <h2 className="broadcast-title">
        ROYAL STUDIOS:
        <br />
        <span className="highlight">tiny intimacy, boiler energy.</span>
      </h2>

      <p className="broadcast-lead">
        Um sistema de conteudo continuo dentro da casa: palco intimista no
        estilo Tiny Desk, pista em 360 no estilo Boiler Room, suite de podcast
        e control room para distribuir cortes no mesmo dia.
      </p>

      <div className="broadcast-layout">
        <div className="broadcast-visual">
          <div className="broadcast-visual-main">
            <div className="broadcast-visual-img">
              <Image
                src="/AVENUE/conceito-bar-dance.jpeg"
                alt="Royal Studios com performance e publico"
                width={820}
                height={460}
              />
            </div>
            <div className="broadcast-secondary-img">
              <Image
                src="/AVENUE/avenuefoto1.jpg"
                alt="Lounge para backstage podcast"
                width={420}
                height={240}
              />
            </div>
          </div>

          <div className="broadcast-format-grid">
            {FORMAT_LINES.map((item) => (
              <article key={item.tag} className="broadcast-format-card">
                <span className="broadcast-format-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <p className="broadcast-visual-caption">
            Fluxo operacional: captacao ao vivo, corte vertical em tempo real,
            distribuicao para social e episodios longos em plataformas de video.
          </p>
        </div>

        <div className="broadcast-side">
          <div className="vp-board">
            <h3 className="vp-board-title">ESTRUTURA JACK DANIEL&apos;S STUDIOS</h3>
            <p className="vp-board-desc">
              Duas pistas de conteudo ao vivo, uma podcast suite com naming
              partner e uma control room central de broadcast.
            </p>

            {STUDIO_STACK.map((item) => (
              <div key={item.id} className="vp-card">
                <div className="vp-icon">{item.id}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="broadcast-revenue">
            <h3>RECEITA MULTICAMADA</h3>
            <ul>
              {REVENUE_STACK.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="broadcast-impact">
            <strong>IMPACTO:</strong> a Royal deixa de depender apenas de porta
            e passa a operar como <em>venue + media studio + creator platform</em>.
          </div>
        </div>
      </div>
    </Slide>
  );
}
