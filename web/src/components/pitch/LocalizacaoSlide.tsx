import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";
import { DataGrid } from "../ui/DataGrid";

const dataItems = [
  { value: "33%", label: "SP = 1/3 do mercado nacional de bares" },
  { value: "R$ 12k", label: "Preço/m² em Pinheiros" },
  { value: "6,74%", label: "Rental yield — maior de SP" },
  { value: "R$ 217B", label: "Mercado foodservice Brasil 2023" },
  { value: "+5,5%", label: "Crescimento real bares/restaurantes" },
  { value: "R$ 99B", label: "Mercado global bares/casas 2025" },
];

export function LocalizacaoSlide() {
  return (
    <Slide
      id="localizacao"
      bg="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940"
      cinematic
      contentStyle={{ maxWidth: "1100px" }}
    >
      <ActTag>LOCALIZAÇÃO ESTRATÉGICA</ActTag>
      <h2 className="impact-title">Por que Pinheiros</h2>
      <p>
        <strong>Rua Cardeal Arcoverde, 1393.</strong> 1.444 m². O bairro que
        concentra o dinheiro novo de SP.
      </p>
      <DataGrid items={dataItems} />
      <p className="highlight" style={{ marginTop: "32px" }}>
        O ponto é o ativo. Pinheiros não é escolha — é{" "}
        <strong>estratégia de valuation.</strong>
      </p>
    </Slide>
  );
}
