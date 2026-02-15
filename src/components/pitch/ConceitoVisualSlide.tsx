import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";
import { ConceitoChip } from "../ui/ConceitoChip";

const refTags = [
  "Selva Miami",
  "LIV",
  "Mark's Club",
  "Nexus London",
  "Amazónico",
  "Annabel's",
];

export function ConceitoVisualSlide() {
  return (
    <Slide
      id="conceito-visual"
      videoBg="/AVENUE/conceito-royal-2.mp4"
      cinematic
      kineticLights
      contentStyle={{ maxWidth: "1000px" }}
    >
      <ActTag>CONCEITO VISUAL</ActTag>
      <h2 className="impact-title">Miami × London</h2>
      <p>
        <strong>Tendências 2024-25.</strong> Selva, LIV, Mark&apos;s Club,
        Nexus. A Royal é a fusão.
      </p>
      <div className="conceito-grid">
        <ConceitoChip
          label="MIAMI — SELVA"
          title="Velvet Esmeralda"
          desc="Banquettes em veludo verde profundo. Luz cinética que reage ao beat. Pedra vulcânica."
          variant="emerald"
        />
        <ConceitoChip
          label="LONDON — MARK'S"
          title="Heritage Scarlet"
          desc="Paredes em vermelho ousado. Molduras douradas. Sofisticação country-house."
          variant="scarlet"
        />
        <ConceitoChip
          label="MATERIAIS"
          title="Pedra & Madeira"
          desc="Pedra vulcânica, teak tropical, latão escovado. Texturas que pedem toque."
          variant="volcanic"
        />
        <ConceitoChip
          label="LIGHTING"
          title="Cinético & Íntimo"
          desc="LED que pulsa com o DJ. Cantos em âmbar. Cada zona com alma própria."
          variant="teak"
        />
      </div>
      <p className="conceito-tagline">
        <strong>Instagramável por design.</strong> Espelhos estratégicos,
        árvore LED no piso, alcovas com veludo. O cliente não escolhe tirar
        foto — o espaço exige.
      </p>
      <div className="referencias-row">
        {refTags.map((tag) => (
          <span key={tag} className="ref-tag">
            {tag}
          </span>
        ))}
      </div>
    </Slide>
  );
}
