import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

export function Pillar1Slide() {
  return (
    <Slide
      id="pillar1"
      bg="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=85&w=2940"
      cinematic
    >
      <ActTag>PILAR 1</ActTag>
      <h2 className="impact-title">A Revolução do Horário</h2>
      <p>
        <strong>Revenue Share Duplo.</strong> Hoje a casa fatura das 00h às 05h.
        Nós vamos faturar das 20h às 05h.
      </p>
      <div className="concept-container">
        <div className="card">
          <div className="time-tag">20:00 — 23:30</div>
          <div
            className="card-bg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=800')",
            }}
          />
          <div className="card-content">
            <h3>GASTRO CLUB</h3>
            <p>
              Alta gastronomia compartilhada. Cocktails autorais. Volume
              perfeito para negócios e sedução.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="time-tag">23:30 — 05:00</div>
          <div
            className="card-bg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2940')",
            }}
          />
          <div className="card-content">
            <h3>HIGH ENERGY</h3>
            <p>
              O restaurante se transforma. Luzes descem. Música sobe. Euforia e
              serviço de garrafa.
            </p>
          </div>
        </div>
      </div>
      <p className="highlight" style={{ marginTop: "30px" }}>
        O cliente chega sóbrio para comer (ticket alto) e fica para o camarote
        (ticket altíssimo). Retenção 100%.
      </p>
    </Slide>
  );
}
