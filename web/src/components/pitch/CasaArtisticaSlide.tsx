import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

export function CasaArtisticaSlide() {
  return (
    <Slide
      id="casa-artistica"
      bg="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2940"
      cinematic
      kineticLights
    >
      <ActTag>PLANO ESTRATÉGICO</ActTag>
      <h2 className="impact-title">Royal Casa Artística</h2>
      <p>
        <strong>Cenografia. Curadoria. Experiência.</strong>
      </p>
      <p>
        A Royal não é só um endereço. É um palco para a noite de São Paulo.
        Curadoria de DJs, residências artísticas, colaborações exclusivas com
        marcas e artistas. Cada noite é um evento. Cada evento é uma história.
      </p>
      <ul
        className="dining-details-list"
        style={{
          marginTop: "30px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <li>
          <strong>Cenografia Cinética</strong> — Teto e luzes que respiram
        </li>
        <li>
          <strong>Curadoria de programação</strong> — DJs e artistas exclusivos
        </li>
        <li>
          <strong>Colaborações</strong> — Marcas e artistas em residência
        </li>
        <li>
          <strong>Experiência imersiva</strong> — Cada noite é única
        </li>
      </ul>
    </Slide>
  );
}
