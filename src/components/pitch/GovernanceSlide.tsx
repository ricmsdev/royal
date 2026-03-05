"use client";

import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const DOC_CATEGORIES = [
  {
    title: "Contrato de Locação",
    items: [
      "Contrato de locação dos dois espaços",
      "Início e fim da vigência de cada espaço",
      "Garantias apresentadas em cada contrato",
      "Contas da casa pagas desde a assunção",
    ],
  },
  {
    title: "Análise Jurídica",
    items: [
      "Contrato Royal: validade, jurisdição, uso do nome",
      "Verificação junto ao VCB — dupla checagem",
      "Leitura do advogado: ABC para 650 pessoas (capacidade)",
    ],
  },
  {
    title: "Análise VCB",
    items: [
      "Valor de análise do VCB no sistema",
      "Documentação apresentada ao VCB",
    ],
  },
  {
    title: "Contas e Custos Fixos",
    items: [
      "Certificados de pagamento",
      "IPTU",
      "Relatórios de todas as contas em aberto em nome da casa",
      "Custo fixo da casa",
      "Ambiente de contas da casa",
    ],
  },
  {
    title: "Funcionários",
    items: [
      "Contrato com funcionários",
      "Estrutura de custos de pessoal",
    ],
  },
] as const;

export function GovernanceSlide() {
  return (
    <Slide
      id="governance"
      variant="scrollable"
      bg="dark"
      dark
      cinematic={false}
      overlayStyle={{ background: "transparent" }}
      contentStyle={{ maxWidth: "960px" }}
    >
      <ActTag>GOVERNANÇA</ActTag>
      <h2 className="impact-title">Documentação para Investidores</h2>
      <p className="governance-intro">
        Toda documentação necessária para análise de investimento — GEAM e demais.
        Sem isso, estamos no escuro para qualquer aporte, de R$ 5.000 a R$ 30.000.
      </p>

      <div className="governance-grid">
        {DOC_CATEGORIES.map((cat) => (
          <div key={cat.title} className="governance-card">
            <h4 className="governance-card-title">{cat.title}</h4>
            <ul className="governance-list">
              {cat.items.map((item) => (
                <li key={item} className="governance-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="governance-cta">
        Documentos serão disponibilizados conforme validação jurídica e contábil.
      </p>
    </Slide>
  );
}
