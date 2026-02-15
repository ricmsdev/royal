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
      bg="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=85&w=2940"
      cinematic={false}
      overlayStyle={{
        background: `linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.82) 50%, rgba(0,0,0,0.72) 100%),
          radial-gradient(ellipse 60% 50% at 80% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)`,
      }}
      contentStyle={{
        textAlign: "left",
        maxWidth: "1100px",
        padding: "0 48px 0 20px",
      }}
    >
      <div className="rec-overlay">
        <div className="rec-badge">
          <div className="rec-dot" /> REC • LIVE
        </div>
      </div>
      <ActTag>MÍDIA & EXPANSÃO</ActTag>
      <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        Royal Studios: <br />
        <span className="highlight">A Casa vira Emissora.</span>
      </h2>
      <div className="broadcast-grid">
        <div className="broadcast-text">
          <p>
            <strong>Estúdio foda.</strong> Infraestrutura de TV 4K dentro da
            balada. A fama dos influenciadores vira nosso ativo.
          </p>
          <p>
            O palco não é apenas para quem está lá. É um estúdio de transmissão
            fibra ótica. Inspirado em <em>&quot;Tiny Desk&quot;</em> e{" "}
            <em>&quot;Boiler Room&quot;</em>. Trazemos marcas. Nomes fortes.
          </p>
          <ul className="broadcast-list">
            <li>
              <strong>Pocket Shows Intimistas:</strong> Lançamentos exclusivos
              para 100 convidados e 1 milhão de viewers.
            </li>
            <li>
              <strong>Podcast & Interviews:</strong> O camarim é estúdio. O
              artista sai do palco e gera conteúdo.
            </li>
            <li>
              <strong>Pay-Per-View:</strong> Ingressos virtuais para shows
              esgotados.
            </li>
          </ul>
          <p className="broadcast-atendimento">
            <strong>Atendimento de verdade.</strong> Concierge dedicado.
            Protocolo. Cada convidado é tratado como VIP. É isso que deixa foda.
          </p>
        </div>
        <div className="vp-board">
          <h3
            style={{
              fontFamily: "var(--font-cinzel), Cinzel",
              color: "var(--gold)",
              fontSize: "1.2rem",
              marginBottom: "20px",
            }}
          >
            BOARD DE CREATORS (VPs)
          </h3>
          <p style={{ fontSize: "0.9rem", marginBottom: "20px" }}>
            Não contratamos influencers. Montamos um time de sócios de mídia.
            Nomes fortes. Fama que vende.
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
      </div>
      <div
        style={{
          marginTop: "30px",
          padding: "15px 20px",
          borderLeft: "3px solid var(--gold)",
          background: "rgba(212,175,55,0.05)",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.9rem" }}>
          <strong>IMPACTO:</strong> A Royal deixa de depender do ticket da porta
          e passa a vender <em>media equity</em> e <em>naming rights</em> de
          transmissão.
        </p>
      </div>
    </Slide>
  );
}
