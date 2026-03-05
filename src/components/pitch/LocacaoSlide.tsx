"use client";

import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const ALUGUEL_BASE = 26_000;

const MESES_LOCACAO = [
  { mes: "Março", desconto: 35, valor: Math.round(ALUGUEL_BASE * 0.65), obs: "Pré-operacional · apenas 17/03 disponível" },
  { mes: "Abril", desconto: 25, valor: Math.round(ALUGUEL_BASE * 0.75), obs: "17/04 indisponível · resto do mês disponível (preço promocional)" },
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
      contentStyle={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}
    >
      <ActTag>PROPOSTA COMERCIAL</ActTag>
      <div className="locacao-content">
      <h2 className="impact-title">Locação da Casa</h2>
      <p className="locacao-intro">
        Preço padrão para todos. Não fazemos ofertas diferentes para GM, Outshia ou qualquer parceiro — 
        a tabela é única e transparente.
      </p>
      </div>

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
        <h4 className="locacao-calendario-title">Calendário anual de disponibilidade</h4>
        <p className="locacao-calendario-desc">
          Calendário anual dividido por meses. Datas reservadas ou livres. 
          Controle por senha — visualize o que está booked ou disponível. 
          Sábados = Tu Goxta (indisponíveis em todos os meses).
        </p>
        <div className="locacao-calendario-placeholder">
          <span>Calendário em breve</span>
          <span className="locacao-calendario-hint">Março: 17/03 — única data disponível</span>
          <span className="locacao-calendario-hint">Abril: 17/04 indisponível · resto do mês disponível</span>
        </div>
      </div>

      <p className="locacao-nota">
        Sábados fixos = Tu Goxta. Indisponíveis para locação em todos os meses.
      </p>

      <div className="locacao-pagamento">
        <h4 className="locacao-pagamento-title">Condições de pagamento (Maio em diante)</h4>
        <p className="locacao-pagamento-desc">
          <strong>40%</strong> na reserva da data · <strong>60%</strong> até 4 dias úteis antes do evento. 
          Em caso de cancelamento, o valor de 40% não é reembolsável devido ao preço promocional.
        </p>
      </div>

      <div className="locacao-disclaimers">
        <h4 className="locacao-disclaimers-title">O que está incluído e condições</h4>
        <ul className="locacao-disclaimers-list">
          <li>Datas vêm com <strong>5 seguranças patrimoniais</strong> da casa — não se envolvem na operação do evento.</li>
          <li><strong>Produtor master</strong> para acompanhar montagem e desmontagem.</li>
          <li>A casa deve ser <strong>entregue no mesmo formato</strong> em que foi recebida.</li>
          <li><strong>1 técnico de som e luz</strong> — R$ 950 para apoio durante o evento.</li>
          <li>Não nos responsabilizamos por conteúdo dos telões ou edições de conteúdo personalizado — apenas operação de som e luz durante o evento.</li>
          <li>Não inclui riders artísticos ou serviços extras. Serviços adicionais disponíveis mediante pedido do cliente.</li>
          <li>Este valor refere-se <strong>apenas à locação</strong>.</li>
        </ul>
      </div>
    </Slide>
  );
}
