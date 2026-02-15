import Image from "next/image";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const highlights = [
  "Sold out das 2 primeiras noites",
  "Stand-up Royal — palco intimista e Instagramável",
  "Show especial. Surreal.",
  "250 convidados. Nossa casa. Sua experiência.",
];

export function LaunchConceptSlide() {
  return (
    <Slide
      id="launch-concept"
      bg="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2940"
      cinematic
      overlayStyle={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.95) 100%)",
      }}
      contentStyle={{ maxWidth: "900px" }}
    >
      <ActTag>CONCEITO DE LANÇAMENTO</ActTag>
      <h2 className="impact-title">Não é abertura. É estreia.</h2>
      <p className="launch-subtitle">
        Vender nossa casa para 250 convidados. Algo surreal. Palco intimista,
        Instagramável. Stand-up. Show especial. As 2 primeiras noites — sold
        out antes de abrir.
      </p>
      <div className="launch-estreia">
        <div className="launch-estreia-img">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=85&w=800"
            alt="Estreia Royal — frente do palco"
            width={400}
            height={240}
          />
        </div>
        <div className="launch-estreia-caption">
          <strong>Estreia.</strong> Frente do palco. 250 convidados. Sold out
          antes de abrir.
        </div>
      </div>
      <div className="launch-highlights">
        {highlights.map((h, i) => (
          <div key={i} className="launch-highlight-item">
            <span className="launch-highlight-num">{String(i + 1).padStart(2, "0")}</span>
            <span>{h}</span>
          </div>
        ))}
      </div>
      <p className="launch-tagline">
        Cada noite é um evento. Cada evento é uma máquina de FOMO.
      </p>
    </Slide>
  );
}
