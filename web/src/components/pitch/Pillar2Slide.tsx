import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

export function Pillar2Slide() {
  return (
    <Slide
      id="pillar2"
      bg="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2940"
      cinematic
      kineticLights
      overlayStyle={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)",
      }}
    >
      <ActTag>PILAR 2</ActTag>
      <h2 className="impact-title">O Ativo Instagramável</h2>
      <p>
        <strong>Marketing Gratuito.</strong> Ninguém mais tira foto no escuro.
      </p>
      <p>
        Cenografia Cinética. O teto se mexe. As luzes respiram. Cada story
        postado por um VIP vale R$ 5.000 em mídia espontânea.
      </p>
      <p className="highlight" style={{ marginTop: "24px" }}>
        A Royal deixa de ser um local e vira um cenário.
      </p>
    </Slide>
  );
}
