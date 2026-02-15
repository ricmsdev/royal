import type { ReactNode } from "react";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";
import { Bullet } from "../ui/Bullet";

type ActSlideVariant = "ato1" | "ato2" | "fora-da-curva";

interface ActSlideProps {
  id: string;
  variant: ActSlideVariant;
}

const content = {
  ato1: {
    tag: "ATO 1 — O INIMIGO",
    title: (
      <>
        <span className="word">
          <span>O modelo de Casa Noturna</span>
        </span>
        <br />
        <span className="word punch">
          <span>morreu.</span>
        </span>
      </>
    ),
    bullets: [
      <>
        <strong>O que as baladas que quebraram tinham em comum?</strong> Vendiam
        apenas música e bebida. Modelo frágil. DJ ruim = casa vazia. Chuva =
        casa vazia.
      </>,
      <>
        O cliente de 2026 está entediado. Não quer mais pagar R$ 500 para ficar
        em pé numa pista escura, apertada e barulhenta.
      </>,
      <>
        <strong>O dinheiro velho (HNW) e o dinheiro novo (Tech/Crypto)</strong>{" "}
        querem a mesma coisa: Protocolo e Protagonismo. Jantar bem. Ser vistos.
        Gastar R$ 10k no camarote. Ir embora com conforto.
      </>,
    ],
    highlight: (
      <>
        A Royal tem o ponto. Tem o nome. Mas operando como &quot;balada&quot;,
        tem teto.
        <br />
        <strong>
          Não viemos reformar. Viemos transformar num ativo imobiliário de
          entretenimento.
        </strong>
      </>
    ),
  },
  ato2: {
    tag: "ATO 2 — A REVELAÇÃO",
    title: (
      <h2 className="lettering-hero">
        O Dining Club <span className="accent">Phigital</span>
      </h2>
    ),
    subtitle:
      "A solução não é inventar a roda. É olhar para onde o dinheiro está indo: Londres, Miami, Dubai.",
    highlight:
      "Desenhamos a Royal 3.0 em 3 pilares que blindam o caixa.",
  },
  "fora-da-curva": {
    tag: "FORA DA CURVA",
    title: (
      <>
        <span className="word">
          <span>O mercado paga 4x EBITDA para balada.</span>
        </span>
        <br />
        <span className="word punch">
          <span>Annabel&apos;s vale 15x.</span>
        </span>
      </>
    ),
    highlightIntro: "A diferença não é o champagne. É o protocolo.",
    bullets: [
      <>
        <strong>Royal não vende EBITDA.</strong> Vende três ativos com cash flows
        desacoplados: Operação física (4–6x), Membership (8–12x), Media Equity
        (10–15x). <strong>Blended: 7–9x.</strong>
      </>,
      <>
        O investidor não compra balada. Compra um{" "}
        <strong>veículo de lifestyle com yield de real estate.</strong> O mesmo
        imóvel, três classes de ativo.
      </>,
      <>
        <strong>20% de equity</strong> não é concessão. É o capital mais barato
        que o fundo vai deployar: cap table limpo, protocolo validado, goodwill
        de graça.
      </>,
    ],
    highlight: (
      <>
        A pergunta não é &quot;quanto custa 20%?&quot;.
        <br />
        <strong>A pergunta é: quanto custa não ter a Royal no portfólio?</strong>
      </>
    ),
  },
};

export function ActSlide({ id, variant }: ActSlideProps) {
  const data = content[variant];

  if (variant === "ato2") {
    const ato2Data = data as {
      tag: string;
      title: React.ReactNode;
      subtitle: string;
      highlight: string;
    };
    return (
      <Slide
        id={id}
        variant="default"
        bg="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2940"
        cinematic
        kineticLights
        drinkGlow
      >
        <p className="lettering-sub">{ato2Data.tag}</p>
        {ato2Data.title}
        <p
          style={{
            marginTop: "28px",
            maxWidth: "640px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {ato2Data.subtitle}
        </p>
        <p className="highlight" style={{ marginTop: "24px", fontSize: "1.1rem" }}>
          {ato2Data.highlight}
        </p>
      </Slide>
    );
  }

  return (
    <Slide id={id} variant="enemy" dark overlayStyle={{ background: "rgba(0,0,0,0.7)" }}>
      <ActTag>{data.tag}</ActTag>
      <h2 className="ato1-title" style={variant === "fora-da-curva" ? { marginBottom: "28px" } : undefined}>
        {data.title}
      </h2>
      {variant === "fora-da-curva" && "highlightIntro" in data && (
        <p className="highlight" style={{ marginBottom: "24px" }}>
          {data.highlightIntro}
        </p>
      )}
      {"bullets" in data &&
        data.bullets.map((bullet, i) => (
          <Bullet key={i}>{bullet}</Bullet>
        ))}
      <p className="highlight" style={{ marginTop: "32px" }}>
        {data.highlight}
      </p>
    </Slide>
  );
}
