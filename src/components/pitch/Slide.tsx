import type { ReactNode } from "react";

type SlideVariant = "default" | "enemy" | "scrollable" | "map" | "cta";

interface SlideProps {
  id: string;
  variant?: SlideVariant;
  bg?: string;
  videoBg?: string;
  bgHover?: string | null;
  dark?: boolean;
  cinematic?: boolean;
  kineticLights?: boolean;
  kineticGrid?: boolean;
  drinkGlow?: boolean;
  overlayStyle?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  children: ReactNode;
}

export function Slide({
  id,
  variant = "default",
  bg,
  videoBg,
  bgHover,
  dark,
  cinematic = true,
  kineticLights = false,
  kineticGrid = false,
  drinkGlow = false,
  overlayStyle,
  contentClassName,
  contentStyle,
  children,
}: SlideProps) {
  const slideClasses = [
    "slide",
    variant === "enemy" && "enemy",
    variant === "scrollable" && "scrollable",
    variant === "map" && "map-section scrollable",
    variant === "cta" && "cta",
  ]
    .filter(Boolean)
    .join(" ");

  const baseBg =
    bg === "dark"
      ? "#080808"
      : dark
        ? "#0a0a0a"
        : bg
          ? `url('${bg}')`
          : undefined;

  return (
    <section className={slideClasses} id={id}>
      {videoBg && (
        <div className="slide-bg slide-bg-video">
          <video
            src={videoBg}
            autoPlay
            muted
            loop
            playsInline
            className="slide-video"
          />
        </div>
      )}
      {!videoBg && (
        <div
          className={`slide-bg ${dark ? "dark" : ""}`}
          style={
            baseBg === "#080808" || baseBg === "#0a0a0a"
              ? { background: baseBg }
              : baseBg
                ? { backgroundImage: baseBg }
                : undefined
          }
        />
      )}
      {bgHover && (
        <div
          key={bgHover}
          className="slide-bg slide-bg-hover"
          style={{
            backgroundImage: `url('${bgHover}')`,
          }}
        />
      )}
      {cinematic && (
        <div className="cinematic-layer">
          <div className="cinematic-flash" />
          <div className="cinematic-vignette" />
          <div className="cinematic-light-leak" />
          <div className="cinematic-grain" />
        </div>
      )}
      {kineticLights && (
        <div className="kinetic-lights">
          <div className="light-beam" />
          <div className="light-beam" />
          <div className="light-beam" />
          {kineticGrid && (
            <>
              <div className="light-beam" />
              <div className="light-beam" />
              <div className="glow-orb gold" />
              <div className="glow-orb side side-1" />
              <div className="glow-orb side side-2" />
              <div className="kinetic-grid" />
            </>
          )}
          {!kineticGrid && (
            <>
              <div className="glow-orb gold" />
              <div className="glow-orb side side-1" />
              <div className="glow-orb side side-2" />
            </>
          )}
        </div>
      )}
      {drinkGlow && (
        <div className="drink-glow">
          <div className="drink-flare" />
        </div>
      )}
      <div className="slide-overlay" style={overlayStyle} />
      <div
        className={`slide-content ${contentClassName ?? ""}`}
        style={contentStyle}
      >
        {children}
      </div>
    </section>
  );
}
