import Image from "next/image";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const vpCards = [
  { icon: "★", title: "VP DE LIFESTYLE", desc: "Curadoria de público e marcas de luxo. Trazemos as marcas." },
  { icon: "►", title: "VP DE MÚSICA", desc: "Conexão direta com gravadoras. Nomes fortes no palco." },
  { icon: "●", title: "VP DE TECH/CRYPTO", desc: "Eventos tokenizados e comunidade Web3." },
];

export function BroadcastSlide() {
  return (
    <Slide
      id="broadcast"
      videoBg="/AVENUE/broadcast-boiler.mp4"
      cinematic={false}
      overlayStyle={{
        background: `linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.55) 100%)`,
      }}
      contentStyle={{
        textAlign: "left",
        maxWidth: "1080px",
        padding: "0 40px 0 28px",
      }}
    >
      <ActTag>MÍDIA & EXPANSÃO</ActTag>
      <h2 className="broadcast-title">
        Royal Studios: <br />
        <span className="highlight">100 na Casa. Milhões Assistindo.</span>
      </h2>
      <p className="broadcast-lead">
        O palco não é só para quem está lá. Inspirado em{" "}
        <em>Tiny Desk</em> e <em>Boiler Room</em>. Palco intimista, transmissão
        ao vivo. A fama dos creators vira ativo.
      </p>
      <div className="broadcast-layout">
        <div className="broadcast-visual">
          <div className="broadcast-visual-img">
            <Image
              src="/AVENUE/conceito-bar-dance.jpeg"
              alt="Royal Studios — palco intimista, vibe Boiler Room"
              width={520}
              height={340}
            />
          </div>
          <p className="broadcast-visual-caption">
            Pocket shows. Podcast no camarim. Pay-per-view para shows esgotados.
          </p>
        </div>
        <div className="broadcast-side">
          <div className="vp-board">
            <h3 className="vp-board-title">BOARD DE CREATORS (VPs)</h3>
            <p className="vp-board-desc">
              Não contratamos influencers. Montamos um time de sócios de mídia.
            </p>
            {vpCards.map((c) => (
              <div key={c.title} className="vp-card">
                <div className="vp-icon">{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="broadcast-impact">
            <strong>IMPACTO:</strong> A Royal deixa de depender do ticket da
            porta e passa a vender <em>media equity</em> e{" "}
            <em>naming rights</em> de transmissão.
          </div>
        </div>
      </div>
    </Slide>
  );
}
