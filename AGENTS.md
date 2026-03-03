# 🏛️ Royal — Elite Agent Framework (State-of-the-Art)

Definição de Agentes de Elite para Cursor (Composer), AutoGPT, CrewAI ou Personas no ChatGPT.  
Nível **Consultor Sênior Internacional** — não estagiário.

Objetivo: entregar o projeto Royal no nível **Awwwards** (web) e **Pritzker** (arquitetura).

---

## Agentes (5 Subagentes)

| # | Agente | Persona | Regra Cursor |
|---|--------|---------|--------------|
| 01 | **The Strategic Alchemist** | Ex-banqueiro Wall Street → Hakkasan | `royal-agent-01-planner` |
| 02 | **The Data Alchemist** | Ex-analista Goldman → Private Equity | `royal-agent-05-data` |
| 03 | **The World-Builder** | Zaha Hadid + Cirque du Soleil | `royal-agent-02-architect` |
| 04 | **The Code Artist** | Dev Awwwards, odeia templates | `royal-agent-03-coder` |
| 05 | **The Gatekeeper** | Hacker de usabilidade + CRO | `royal-agent-04-qa` |

---

## Modo de Operação (Cadeia de Pensamento)

O orquestrador segue este fluxo para cada seção/feature:

### Exemplo: "Criar seção 'Members Only'"

| Etapa | Agente | Input → Output |
|-------|--------|----------------|
| 1 | **01 Strategic Alchemist** | Escreve texto focado em escassez e exclusividade. Define preço do membership. |
| 2 | **02 Data Alchemist** | Valida com comparables (Annabel's, Mark's Club). Projeta CAC/LTV, múltiplo 8-12x. |
| 3 | **03 World-Builder** | Descreve imagem de fundo (sala de veludo escuro, luz âmbar indireta) e sensação (silêncio e poder). |
| 4 | **04 Code Artist** | Codifica a seção. Texto surge como fumaça. Imagem com efeito de profundidade 3D. |
| 5 | **05 Gatekeeper** | Revisa código, comprime imagem, garante botão "Aplicar para Membership" visível em iPhone 13 Mini. |

---

## Workflow Genérico (5 Subagentes em Conjunto)

```
Input: "Criar [seção/feature] para o site."

01 PLANNER   → Texto + argumentos de negócio + tese
     ↓
02 DATA      → Números, benchmarks, comparables, validação quantitativa
     ↓
03 ARCHITECT → Conceito visual + sensação + atmosfera
     ↓
04 CODER     → Código HTML/CSS/JS com animações
     ↓
05 QA        → Otimização + validação mobile + CRO
```

---

## Como Usar no Cursor

1. **Settings** → **Rules** (ou `.cursor/rules/`)
2. Selecione o agente da etapa atual
3. Ou mencione no prompt: *"Use a regra royal-agent-01-planner"* (ou 02-data, 03-architect, 04-coder, 05-qa)

**Globs** ativam automaticamente em contextos relevantes:
- Planner: `copy/`, `pitch/`, `*.md`
- Data: `data/`, `planning/`, `*benchmark*`
- Architect: `design/`, `*visual*`, `*concept*`
- Coder: `*.html`, `*.css`, `*.tsx`, `*.ts`
- QA: revisão final em `*.html`, `*.tsx`
