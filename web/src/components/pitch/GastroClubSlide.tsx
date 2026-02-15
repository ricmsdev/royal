"use client";

import { useState } from "react";
import Image from "next/image";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

export function GastroClubSlide() {
  const [flipped, setFlipped] = useState(false);

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) > 20) {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <Slide
      id="gastro-club"
      bg="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=2940"
      cinematic
      contentClassName="gastro-slide-content"
    >
      <ActTag>PLANO ESTRATÉGICO</ActTag>
      <h2 className="impact-title">Gastro Club</h2>
      <div
        className={`gastro-flip ${flipped ? "flipped" : ""}`}
        role="button"
        tabIndex={0}
        aria-label="Alternar entre coquetelaria e gastronomia"
        onClick={() => setFlipped((p) => !p)}
        onWheel={handleWheel}
      >
        <div className="gastro-panel drinks">
          <Image
            src="https://images.unsplash.com/photo-1575023782549-62ca0d244b39?q=80&w=600"
            alt="Coquetelaria Royal — cocktails autorais e carta de vinhos"
            className="gastro-panel-img"
            width={600}
            height={600}
            unoptimized
          />
          <div>
            <p
              style={{
                color: "var(--gold)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                marginBottom: "16px",
              }}
            >
              COQUETELARIA
            </p>
            <ul className="dining-details-list">
              <li>
                <strong>Cocktails autorais</strong> — Mixologista exclusivo,
                drinks assinados Royal
              </li>
              <li>
                <strong>Carta de vinhos selecionada</strong> — Nacional e
                importados premium
              </li>
              <li>
                <strong>Volume ambiente 20h–23h</strong> — Música ao vivo ou DJ
                set suave
              </li>
            </ul>
          </div>
        </div>
        <div className="gastro-panel food">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600"
            alt="Gastronomia Royal — alta gastronomia compartilhada"
            className="gastro-panel-img"
            width={600}
            height={600}
            unoptimized
          />
          <div>
            <p
              style={{
                color: "var(--gold)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                marginBottom: "16px",
              }}
            >
              GASTRONOMIA
            </p>
            <ul className="dining-details-list">
              <li>
                <strong>Alta gastronomia compartilhada</strong> — Menu degustação
                e pratos para dividir
              </li>
              <li>
                <strong>Transição orgânica</strong> — O jantar evolui para a
                festa sem o cliente sair
              </li>
              <li>
                <strong>Ticket alto</strong> — Chega sóbrio, fica para o
                camarote. Retenção 100%.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="gastro-scroll-hint">
        Clique ou use o scroll do mouse para alternar Drinks ↔ Comida
      </p>
    </Slide>
  );
}
