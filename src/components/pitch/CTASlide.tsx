import Link from "next/link";
import { Slide } from "./Slide";

const MAPS_URL =
  "https://www.google.com/maps/search/Rua+Cardeal+Arcoverde+1393+Pinheiros+S%C3%A3o+Paulo+05407-002";

export function CTASlide() {
  return (
    <Slide
      id="cta"
      variant="cta"
      dark
      cinematic={false}
      overlayStyle={{ background: "transparent" }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
          marginBottom: "16px",
        }}
      >
        Vocês podem contratar um gerente de marketing e um promoter.
        <br />
        Eles vão encher a casa sexta que vem.
      </h2>
      <h1>Ou fechar com a gente.</h1>
      <p style={{ marginTop: "24px" }}>
        E construir a casa noturna mais desejada e rentável do Brasil para os
        próximos 5 anos.
      </p>
      <p className="highlight" style={{ marginTop: "16px" }}>
        O mapa está pronto. O conceito está pronto. O investidor está
        engatilhado.
      </p>
      <div className="cta-buttons">
        <Link href="/avenue/floor-plan">
          VER MAPA COMPLETO
        </Link>
        <Link href={MAPS_URL} target="_blank" rel="noopener">
          VER NO MAPA
        </Link>
        <Link href="#" className="primary">
          VAMOS ASSINAR?
        </Link>
      </div>
    </Slide>
  );
}
