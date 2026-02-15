import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";
import { PartnerLogos } from "./PartnerLogos";

type ColchaoBox = {
  label: string;
  title: string;
  desc: string;
  metric: string;
  logos?: boolean;
};

const colchaoBoxes: ColchaoBox[] = [
  {
    label: "1. RECORRÊNCIA",
    title: "Royal Black",
    desc: "Atendimento de verdade. Anuidade pré-paga. Sala secreta, concierge, mixologista na mesa. Em janeiro, quando SP está vazia, o caixa já está pago pelas anuidades vendidas em dezembro.",
    metric: "8–12x múltiplo",
  },
  {
    label: "2. VIRAL & FOMO",
    title: "Aparecer é vender",
    desc: "Fama dos influenciadores. Marcas fortes (JBL, lifestyle, tech). Nomes fortes. Trazemos as marcas. Estúdio de visibilidade — alcance e FOMO antes da porta abrir.",
    metric: "CAC zero",
    logos: true,
  },
  {
    label: "3. MÍDIA",
    title: "Royal Studios",
    desc: "A casa vira emissora. Estúdio de visibilidade: pocket shows, podcast, pay-per-view. Media equity e naming rights. O palco gera conteúdo e receita além do ticket.",
    metric: "10–15x múltiplo",
  },
];

export function Pillar3Slide() {
  return (
    <Slide
      id="pillar3"
      bg="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=85&w=2940"
      cinematic
      kineticLights
      overlayStyle={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.9) 100%)",
      }}
      contentStyle={{ maxWidth: "960px" }}
    >
      <ActTag>PILAR 3</ActTag>
      <h2 className="impact-title pillar3-title">O &quot;Colchão&quot; Financeiro</h2>
      <p className="pillar3-thesis">
        Três ativos, três cash flows. Balada tradicional vende 4x. Royal vende
        o mesmo imóvel como três classes de ativo.
      </p>
      <div className="pillar3-boxes">
        {colchaoBoxes.map((box) => (
          <div key={box.label} className="pillar3-box">
            <span className="pillar3-box-label">{box.label}</span>
            <h4 className="pillar3-box-title">{box.title}</h4>
            <p className="pillar3-box-desc">{box.desc}</p>
            {box.logos && <PartnerLogos />}
            <span className="pillar3-box-metric">{box.metric}</span>
          </div>
        ))}
      </div>
      <div className="pillar3-confirma">
        <strong>CONFIRMAÇÃO DA TESE:</strong> Blended 7–9x. Concorrência 4x. O
        investidor não compra balada. Compra veículo de lifestyle com yield de
        real estate. Só 100 cartões Black no primeiro ano. Queremos fila de
        espera.
      </div>
    </Slide>
  );
}
