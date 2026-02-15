"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HeroSlide } from "./HeroSlide";
import { ActSlide } from "./ActSlide";
import { LocalizacaoSlide } from "./LocalizacaoSlide";
import { ConceitoVisualSlide } from "./ConceitoVisualSlide";
import { ReferenciasSlide } from "./ReferenciasSlide";
import { Pillar1Slide } from "./Pillar1Slide";
import { GastroClubSlide } from "./GastroClubSlide";
import { CasaArtisticaSlide } from "./CasaArtisticaSlide";
import { EventosCorporativosSlide } from "./EventosCorporativosSlide";
import { ProgramacaoSemanaSlide } from "./ProgramacaoSemanaSlide";
import { Pillar2Slide } from "./Pillar2Slide";
import { AcessoLocalizacaoSlide } from "./AcessoLocalizacaoSlide";
import { Pillar3Slide } from "./Pillar3Slide";
import { BroadcastSlide } from "./BroadcastSlide";
import { MapSlide } from "./MapSlide";
import { LaunchConceptSlide } from "./LaunchConceptSlide";
import { NoiteSlide, NOITES_DATA } from "./NoiteSlide";
import { CTASlide } from "./CTASlide";
import { Footer } from "./Footer";

const SLIDE_IDS = [
  "hero",
  "ato1",
  "ato2-intro",
  "localizacao",
  "conceito-visual",
  "referencias",
  "pillar1",
  "gastro-club",
  "casa-artistica",
  "eventos-corporativos",
  "programacao-semana",
  "pillar2",
  "acesso-localizacao",
  "pillar3",
  "broadcast",
  "fora-da-curva",
  "ato3",
  "launch-concept",
  "noite-segunda",
  "noite-terca",
  "noite-quarta",
  "noite-quinta",
  "noite-sexta",
  "noite-sabado",
  "noite-domingo",
  "cta",
];

export function PitchContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [customCursor, setCustomCursor] = useState(false);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.defaults({ scroller: ".pitch-container", once: true });

      const container = containerRef.current;
      if (!container) return;

      let ctx: gsap.Context | null = null;

      const initAnimations = () => {
      const heroBg = container.querySelector<HTMLElement>("#hero .slide-bg");
      if (!heroBg || !document.contains(heroBg)) return false;

      ctx = gsap.context(() => {
      // Hero entrance
      gsap.from("#hero .act-tag", {
        opacity: 0,
        duration: 1.7,
        delay: 0.2,
        ease: "power2.out",
      });
      gsap.from("#hero .hero-quase", {
        opacity: 0,
        y: 10,
        duration: 0.8,
        delay: 2,
        ease: "power2.out",
      });
      gsap.from("#hero h1", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        delay: 2.5,
        ease: "power3.out",
      });
      gsap.from("#hero p:not(.hero-quase):not(.scroll-text)", {
        opacity: 0,
        duration: 1,
        delay: 3,
        stagger: 0.15,
      });
      gsap.from("#hero .scroll-cta", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 3.5,
        ease: "power2.out",
      });

      // Parallax hero — use scoped selector; skip if element unavailable
      try {
        const heroBg = container.querySelector("#hero .slide-bg");
        if (heroBg && document.contains(heroBg)) {
          gsap.to(heroBg as HTMLElement, {
            scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
              once: false,
            },
            y: 150,
            opacity: 0.15,
          });
        }
      } catch {
        // Skip parallax if GSAP fails (e.g. during hydration)
      }

      // Generic slides
      const genericIds = [
        "#ato1",
        "#localizacao",
        "#conceito-visual",
        "#referencias",
        "#pillar1",
        "#gastro-club",
        "#casa-artistica",
        "#eventos-corporativos",
        "#programacao-semana",
        "#pillar2",
        "#acesso-localizacao",
        "#pillar3",
        "#broadcast",
        "#ato3",
        "#launch-concept",
        "#noite-segunda",
        "#noite-terca",
        "#noite-quarta",
        "#noite-quinta",
        "#noite-sexta",
        "#noite-sabado",
        "#noite-domingo",
      ];
      genericIds.forEach((id) => {
        const target = container.querySelector(`${id} .slide-content`);
        if (target && document.contains(target)) {
          gsap.from(target, {
            scrollTrigger: { trigger: id, start: "top 85%" },
            y: 28,
            duration: 0.8,
            ease: "power3.out",
            immediateRender: false,
            overwrite: "auto",
          });
        }
      });

      // Ato1 specific
      gsap.from("#ato1 .ato1-title .word span", {
        scrollTrigger: { trigger: "#ato1", start: "top 85%" },
        y: "100%",
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
        immediateRender: false,
      });
      gsap.from("#ato1 .bullet", {
        scrollTrigger: { trigger: "#ato1", start: "top 85%" },
        opacity: 0,
        x: -15,
        duration: 0.7,
        stagger: 0.1,
        delay: 0.4,
        ease: "power2.out",
        immediateRender: false,
      });

      // Fora da curva
      gsap.from("#fora-da-curva .ato1-title .word span", {
        scrollTrigger: { trigger: "#fora-da-curva", start: "top 85%" },
        y: "100%",
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
        immediateRender: false,
      });
      gsap.from("#fora-da-curva .bullet", {
        scrollTrigger: { trigger: "#fora-da-curva", start: "top 85%" },
        opacity: 0,
        x: -15,
        duration: 0.7,
        stagger: 0.1,
        delay: 0.4,
        ease: "power2.out",
        immediateRender: false,
      });

      // Conceito visual
      gsap.from("#conceito-visual .impact-title", {
        scrollTrigger: { trigger: "#conceito-visual", start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        immediateRender: false,
      });
      gsap.from("#conceito-visual .conceito-chip", {
        scrollTrigger: { trigger: "#conceito-visual", start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        delay: 0.2,
        ease: "power3.out",
        immediateRender: false,
      });

      // Referencias
      gsap.from("#referencias .ref-card", {
        scrollTrigger: { trigger: "#referencias", start: "top 85%" },
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.04,
        delay: 0.15,
        ease: "power3.out",
        immediateRender: false,
      });

      // Ato2 intro
      gsap.from("#ato2-intro .slide-content > *", {
        scrollTrigger: { trigger: "#ato2-intro", start: "top 85%" },
        y: 24,
        duration: 0.7,
        stagger: 0.06,
        ease: "power2.out",
        immediateRender: false,
        overwrite: "auto",
      });

      // Pillar1
      gsap.from("#pillar1 .impact-title", {
        scrollTrigger: { trigger: "#pillar1", start: "top 85%" },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        immediateRender: false,
      });
      gsap.from("#pillar1 .card", {
        scrollTrigger: { trigger: "#pillar1", start: "top 85%" },
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.2,
        ease: "power3.out",
        immediateRender: false,
      });

      // Casa artistica, eventos
      gsap.from("#casa-artistica .impact-title", {
        scrollTrigger: { trigger: "#casa-artistica", start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        immediateRender: false,
      });
      gsap.from("#eventos-corporativos .impact-title", {
        scrollTrigger: { trigger: "#eventos-corporativos", start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        immediateRender: false,
      });
      gsap.from("#eventos-corporativos .ambiente-card", {
        scrollTrigger: { trigger: "#eventos-corporativos", start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        delay: 0.2,
        ease: "power3.out",
        immediateRender: false,
      });

      // Pillar2 lights
      gsap.from("#pillar2 .light-beam", {
        scrollTrigger: { trigger: "#pillar2", start: "top 85%" },
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power2.out",
      });
      gsap.from("#pillar2 .glow-orb", {
        scrollTrigger: { trigger: "#pillar2", start: "top 85%" },
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Acesso & Localização
      gsap.from("#acesso-localizacao .acesso-card", {
        scrollTrigger: { trigger: "#acesso-localizacao", start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.15,
        ease: "power3.out",
        immediateRender: false,
      });
      gsap.from("#acesso-localizacao .acesso-map-wrapper", {
        scrollTrigger: { trigger: "#acesso-localizacao", start: "top 85%" },
        y: 24,
        opacity: 0,
        duration: 0.9,
        delay: 0.4,
        ease: "power3.out",
        immediateRender: false,
      });

      // Pillar3
      gsap.from("#pillar3 .pillar3-box", {
        scrollTrigger: { trigger: "#pillar3", start: "top 85%" },
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.2,
        ease: "power3.out",
        immediateRender: false,
      });
      gsap.from("#pillar3 .pillar3-confirma", {
        scrollTrigger: { trigger: "#pillar3", start: "top 85%" },
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.5,
        ease: "power3.out",
        immediateRender: false,
      });

      // Broadcast
      gsap.from("#broadcast .rec-overlay", {
        scrollTrigger: { trigger: "#broadcast", start: "top 60%" },
        opacity: 0,
        scale: 1.1,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from("#broadcast .broadcast-text > *", {
        scrollTrigger: { trigger: "#broadcast", start: "top 60%" },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
      gsap.from("#broadcast .vp-board", {
        scrollTrigger: { trigger: "#broadcast", start: "top 60%" },
        x: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.2)",
      });
    }, container);
        return true;
      };

      let attempts = 0;
      const maxAttempts = 30;
      const tryInit = () => {
        if (!mounted) return;
        if (initAnimations()) {
          ScrollTrigger.refresh();
        } else if (attempts++ < maxAttempts) {
          requestAnimationFrame(tryInit);
        }
      };

      requestAnimationFrame(tryInit);
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);

      return () => {
        window.removeEventListener("load", onLoad);
        ctx?.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    };

    const cleanup = run();
    return () => {
      mounted = false;
      cleanup.then((fn) => fn?.());
    };
  }, []);

  // Progress dots / scroll position
  useEffect(() => {
    const container = document.querySelector(".pitch-container");
    if (!container) return;

    const slides = document.querySelectorAll(".slide, .footer");
    const updateActive = () => {
      const scrollTop = (container as HTMLElement).scrollTop;
      const height = (container as HTMLElement).clientHeight;
      let idx = 0;
      slides.forEach((el, i) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const containerRect = (container as HTMLElement).getBoundingClientRect();
        if (rect.top <= containerRect.top + height / 2) {
          idx = Math.min(i, SLIDE_IDS.length - 1);
        }
      });
      setActiveIndex(idx);
    };

    container.addEventListener("scroll", updateActive);
    updateActive();
    return () => container.removeEventListener("scroll", updateActive);
  }, []);

  // Custom cursor
  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      "ontouchstart" in window &&
      /Android|webOS|iPhone|iPad/i.test(navigator.userAgent);
    if (isTouch) return;

    setCustomCursor(true);
    document.body.classList.add("custom-cursor");
    const cursor = document.querySelector(".cursor") as HTMLElement;
    const ring = document.querySelector(".cursor-ring") as HTMLElement;
    if (!cursor || !ring) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };
    const leave = () => {
      cursor.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const enter = () => {
      cursor.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  // Fullscreen button
  useEffect(() => {
    const btn = document.getElementById("btnFullscreen");
    if (!btn) return;
    const toggle = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
        document.body.classList.add("fullscreen");
      } else {
        document.exitFullscreen?.();
        document.body.classList.remove("fullscreen");
      }
    };
    btn.addEventListener("click", toggle);
    return () => btn.removeEventListener("click", toggle);
  }, []);

  // VP card hovers (GSAP)
  useEffect(() => {
    let mounted = true;
    const handlers: Array<{ el: HTMLElement; enter: () => void; leave: () => void }> = [];
    void import("gsap").then(({ gsap }) => {
      if (!mounted) return;
      const cards = document.querySelectorAll(".vp-card");
      cards.forEach((card) => {
        const el = card as HTMLElement;
        const icon = el.querySelector(".vp-icon");
        const enter = () => {
          gsap.to(el, { x: 10, duration: 0.3 });
          if (icon) gsap.to(icon, { scale: 1.2, duration: 0.3 });
        };
        const leave = () => {
          gsap.to(el, { x: 0, duration: 0.3 });
          if (icon) gsap.to(icon, { scale: 1, duration: 0.3 });
        };
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        handlers.push({ el, enter, leave });
      });
    });
    return () => {
      mounted = false;
      handlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <Link href="#hero" className="skip-link">
        Pular para o conteúdo
      </Link>
      <div className="cursor" />
      <div className="cursor-ring" />

      <div className="progress-dots">
        {SLIDE_IDS.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === activeIndex ? "active" : ""}`}
            aria-hidden
          />
        ))}
      </div>

      <div className="pitch-container" ref={containerRef}>
        <HeroSlide />
        <ActSlide id="ato1" variant="ato1" />
        <ActSlide id="ato2-intro" variant="ato2" />
        <LocalizacaoSlide />
        <ConceitoVisualSlide />
        <ReferenciasSlide />
        <Pillar1Slide />
        <GastroClubSlide />
        <CasaArtisticaSlide />
        <EventosCorporativosSlide />
        <ProgramacaoSemanaSlide />
        <Pillar2Slide />
        <AcessoLocalizacaoSlide />
        <Pillar3Slide />
        <BroadcastSlide />
        <ActSlide id="fora-da-curva" variant="fora-da-curva" />
        <MapSlide />
        <LaunchConceptSlide />
        {NOITES_DATA.map((n) => (
          <NoiteSlide
            key={n.id}
            id={n.id}
            num={n.num}
            nome={n.nome}
            mood={n.mood}
            evento={n.evento}
            ambientes={n.ambientes}
            destaque={n.destaque}
          />
        ))}
        <CTASlide />
        <Footer />
      </div>
    </>
  );
}
