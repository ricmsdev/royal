"use client";

import Image from "next/image";
import { useState } from "react";

const MARCAS = [
  { name: "Jack Daniel's", slug: "jack-daniels" },
  { name: "Mainstreet Records", slug: "mainstreet" },
  { name: "Spotify", slug: "spotify" },
  { name: "JBL", slug: "jbl" },
] as const;

export function PartnerLogos() {
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  return (
    <div className="marcas-cards">
      {MARCAS.map(({ name, slug }) => {
        const src = `/AVENUE/marcas/${slug}.svg`;
        const hasError = errors[slug];
        return (
          <article key={slug} className="marca-card">
            <div className="marca-card-inner">
              {!hasError ? (
                <Image
                  src={src}
                  alt={name}
                  width={80}
                  height={40}
                  className="marca-logo"
                  onError={() => setErrors((p) => ({ ...p, [slug]: true }))}
                />
              ) : (
                <span className="marca-fallback">{name}</span>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
