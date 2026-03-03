"use client";

import Image from "next/image";
import { useState } from "react";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const MARCAS_DATA = [
  { name: "Jack Daniel's", slug: "jack-daniels", desc: "Naming partner · Jack Daniel's Studios" },
  { name: "Mainstreet Records", slug: "mainstreet", desc: "Label · Chefin Night · Line-up" },
  { name: "Spotify", slug: "spotify", desc: "Distribuição · Playlists · Alcance" },
  { name: "JBL", slug: "jbl", desc: "Audio · Lifestyle · Tech" },
] as const;

export function MarcasSlide() {
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  return (
    <Slide
      id="marcas"
      bg="dark"
      dark
      cinematic={false}
      overlayStyle={{ background: "transparent" }}
      contentStyle={{ maxWidth: "1000px" }}
    >
      <ActTag>MARCAS PARCEIRAS</ActTag>
      <h2 className="impact-title">Quem trazemos para a mesa</h2>
      <p style={{ marginBottom: "28px", color: "#c0c0c0" }}>
        Colaborações exclusivas. Naming rights. Estúdio de visibilidade.
      </p>

      <div className="marcas-grid">
        {MARCAS_DATA.map(({ name, slug, desc }) => {
          const src = `/AVENUE/marcas/${slug}.svg`;
          const hasError = errors[slug];
          return (
            <article key={slug} className="marca-tile">
              <div className="marca-tile-logo">
                {!hasError ? (
                  <Image
                    src={src}
                    alt={name}
                    width={100}
                    height={50}
                    className="marca-tile-img"
                    onError={() => setErrors((p) => ({ ...p, [slug]: true }))}
                  />
                ) : (
                  <span className="marca-tile-fallback">{name}</span>
                )}
              </div>
              <p className="marca-tile-desc">{desc}</p>
            </article>
          );
        })}
      </div>
    </Slide>
  );
}
