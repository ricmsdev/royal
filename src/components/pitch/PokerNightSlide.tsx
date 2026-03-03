"use client";

import Image from "next/image";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const LINEUP = [
  { seat: "01", name: "Ronaldo", role: "captain seat", stack: "R$ 500k" },
  { seat: "02", name: "Neymar", role: "pressure spot", stack: "R$ 500k" },
  { seat: "03", name: "Convidado 3", role: "aggressor", stack: "R$ 400k" },
  { seat: "04", name: "Convidado 4", role: "wild card", stack: "R$ 400k" },
  { seat: "05", name: "Convidado 5", role: "closer", stack: "R$ 300k" },
  { seat: "06", name: "Convidado 6", role: "closer", stack: "R$ 300k" },
];

const OPS = [
  { k: "CLOCK", v: "30s", sub: "decisao rapida" },
  { k: "TIME BANK", v: "x4", sub: "extensao por jogador" },
  { k: "BLUFF", v: "BUTTON", sub: "chamada publica" },
  { k: "PENALTY", v: "1 ORBIT", sub: "entra na cage" },
];

const SHARK_RULES = [
  "Pre-flop em 15s, pos-flop em 30s com cronometro de tela.",
  "Bluff button: blefou e perdeu, entra na cage por uma orbita.",
  "Cameras na mesa + telao com hand feed em tempo real.",
  "Leaderboard de maos e stacks para audiencia acompanhar.",
  "Acesso premium por lista e buy-in por indicacao.",
];

export function PokerNightSlide() {
  return (
    <Slide
      id="noite-terca"
      variant="scrollable"
      bg="/ronaldosharkpoker.jpg"
      cinematic
      overlayStyle={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(5,3,15,0.65) 52%, rgba(0,0,0,0.8) 100%)",
      }}
      contentStyle={{ maxWidth: "1280px" }}
    >
      <ActTag>PROGRAMACAO - TERCA</ActTag>

      <div className="allin">
        <div className="allin-topbar">
          <span className="allin-badge">SHARK CAGE</span>
          <span className="allin-live-pill">
            LIVE BROADCAST
            <span className="allin-live-dot" aria-hidden />
          </span>
        </div>

        <header className="allin-header">
          <span className="allin-num">02</span>
          <h1 className="allin-title">ALL IN</h1>
          <p className="allin-subtitle">POKER NIGHT SHOW</p>
        </header>

        <blockquote className="allin-hook">
          Ronaldo e convidados na mesa com dinamica de TV: clock correndo,
          bluff chamado no palco e transmissao ao vivo para o club inteiro.
        </blockquote>

        <div className="allin-ops">
          {OPS.map((op) => (
            <article key={op.k} className="allin-op-card">
              <span className="allin-op-k">{op.k}</span>
              <span className="allin-op-v">{op.v}</span>
              <span className="allin-op-sub">{op.sub}</span>
            </article>
          ))}
        </div>

        <div className="allin-grid">
          <section className="allin-lineup">
            <h2 className="allin-section-title">MESA - 6 IDOLOS</h2>
            <div className="allin-seats">
              {LINEUP.map((p) => (
                <article key={p.seat} className="allin-seat-card">
                  <span className="allin-seat-num">{p.seat}</span>
                  <h3>{p.name}</h3>
                  <p>{p.role}</p>
                  <span className="allin-seat-stack">{p.stack}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="allin-broadcast">
            <div className="allin-cage-img">
              <Image
                src="/money.jpg"
                alt="Shark Cage setup"
                width={560}
                height={315}
              />
            </div>
            <div className="allin-broadcast-body">
              <h2 className="allin-section-title">FORMATO SHARK CAGE</h2>
              <ul className="allin-cage-list">
                {SHARK_RULES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <p className="allin-footer">
          Lounge privado - Camarotes - Mesa VIP - Streaming feed
        </p>
      </div>
    </Slide>
  );
}
