"use client";

import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const ALUGUEL_BASE = 26_000;

const MESES_LOCACAO = [
  { mes: "Março", desconto: 35, valor: Math.round(ALUGUEL_BASE * 0.65), obs: "Pré-operacional · apenas 17/03 disponível" },
  { mes: "Abril", desconto: 25, valor: Math.round(ALUGUEL_BASE * 0.75), obs: "Sábados = Tu Goxta (indisponíveis)" },
  { mes: "Maio", desconto: 20, valor: Math.round(ALUGUEL_BASE * 0.8), obs: "Sábados = Tu Goxta" },
  { mes: "Junho", desconto: 20, valor: Math.round(ALUGUEL_BASE * 0.8), obs: "Sábados = Tu Goxta" },
  { mes: "Julho", desconto: 20, valor: Math.round(ALUGUEL_BASE * 0.8), obs: "Sábados = Tu Goxta" },
  { mes: "Agosto", desconto: 20, valor: Math.round(ALUGUEL_BASE * 0.8), obs: "Sábados = Tu Goxta" },
  { mes: "Setembro", desconto: 20, valor: Math.round(ALUGUEL_BASE * 0.8), obs: "Sábados = Tu Goxta" },
  { mes: "Outubro", desconto: 20, valor: Math.round(ALUGUEL_BASE * 0.8), obs: "Sábados = Tu Goxta" },
  { mes: "Novembro", desconto: null, valor: null, obs: "Indisponível para locação" },
] as const;

function formatBRL(n: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(n);
}

export function LocacaoSlide() {
  return (
    <Slide
      id="locacao"
      variant="scrollable"
      bg="dark"
      dark
      cinematic={false}
      overlayStyle={{ background: "transparent" }}
      contentStyle={{ maxWidth: "1000px" }}
    >
      <ActTag>PROPOSTA BRAND DAY</ActTag>
      <h2 className="impact-title">Locação da Casa</h2>
      <p style={{ marginBottom: "24px", color: "#c0c0c0", maxWidth: "720px" }}>
        Preço padrão para todos. Não fazemos ofertas diferentes para GM, Outshia ou qualquer parceiro — 
        a tabela é única e transparente.
      </p>

      <div className="locacao-base">
        <span className="locacao-base-label">Aluguel base</span>
        <span className="locacao-base-val">{formatBRL(ALUGUEL_BASE)}</span>
        <span className="locacao-base-sublabel">/evento · casa completa</span>
      </div>

      <div className="locacao-tabela">
        <div className="locacao-tabela-header">
          <span>Mês</span>
          <span>Desconto</span>
          <span>Valor</span>
          <span>Observação</span>
        </div>
        {MESES_LOCACAO.map((m) => (
          <div
            key={m.mes}
            className={`locacao-tabela-linha ${m.valor === null ? "locacao-tabela-indisponivel" : ""}`}
          >
            <span className="locacao-mes">{m.mes}</span>
            <span>{m.desconto !== null ? `${m.desconto}%` : "—"}</span>
            <span className="locacao-valor">{m.valor !== null ? formatBRL(m.valor) : "—"}</span>
            <span className="locacao-obs">{m.obs}</span>
          </div>
        ))}
      </div>

      <div className="locacao-calendario-box">
        <h4 className="locacao-calendario-title">Calendário de disponibilidade</h4>
        <p className="locacao-calendario-desc">
          Área dividida por meses. Calendário com datas reservadas ou livres. 
          Controle por senha — visualize o que está booked ou disponível.
        </p>
        <div className="locacao-calendario-placeholder">
          <span>Calendário em breve</span>
          <span className="locacao-calendario-hint">Março: 17/03 — única data disponível</span>
        </div>
      </div>

      <p className="locacao-nota">
        Sábados fixos = Tu Goxta (Chefin Night). Demais dias disponíveis para locação com desconto.
      </p>
    </Slide>
  );
}
