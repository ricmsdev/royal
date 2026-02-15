"use client";

import { useRef } from "react";
import { Slide } from "./Slide";

export function HeroSlide() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = () => {
    const container = document.querySelector(".pitch-container");
    if (container) {
      const firstSlide = document.querySelector(".slide");
      if (firstSlide) {
        const next = firstSlide.nextElementSibling;
        next?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Slide
      id="hero"
      cinematic
      videoBg="/AVENUE/conceito-royal.mp4"
      overlayStyle={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.82) 50%, rgba(0,0,0,0.95) 100%)",
      }}
    >
      <p className="act-tag">CASA SARMENTO apresenta</p>
      <p
        className="hero-quase"
        style={{
          fontSize: "0.9rem",
          letterSpacing: "0.25em",
          marginBottom: "8px",
        }}
      >
        QUASE LÁ — JÁ EXISTIRAM 2
      </p>
      <h1>ROYAL 3.0</h1>
      <p style={{ marginTop: "24px", letterSpacing: "0.3em", fontSize: "1rem" }}>
        SÃO PAULO | PINHEIROS
      </p>
      <div className="scroll-cta">
        <p className="scroll-text">ROLE PARA INICIAR A VIAGEM</p>
        <div
          className="scroll-indicator"
          role="button"
          tabIndex={0}
          aria-label="Rolar para próxima seção"
          onClick={handleScrollClick}
          onKeyDown={(e) => e.key === "Enter" && handleScrollClick()}
          ref={containerRef}
        >
          <div className="scroll-dot" />
          <div className="scroll-ring" />
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
      <button
        className="btn-fullscreen"
        id="btnFullscreen"
        title="Pressione F11 para melhor experiência"
        aria-label="Ativar tela cheia"
        type="button"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
        <span>F11 — TELA CHEIA</span>
      </button>
    </Slide>
  );
}
