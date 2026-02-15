"use client";

import type { ReactNode } from "react";

const logos: Array<{ name: string; svg: ReactNode }> = [
  {
    name: "YouTube",
    svg: (
      <svg viewBox="0 0 68 48" fill="currentColor" className="pillar3-logo-svg">
        <path d="M66.5 7.7c-.8-2.9-3.1-5.2-6-5.9C55.5 0 34 0 34 0S12.5 0 7.5 1.8c-2.9.7-5.2 3-5.9 6C0 12.8 0 24 0 24s0 11.2 1.6 16.2c.7 2.9 3 5.2 5.9 5.9C12.5 48 34 48 34 48s21.5 0 26.5-1.8c2.9-.7 5.2-3 5.9-5.9 1.6-5 1.6-16.2 1.6-16.2s0-11.2-1.6-16.2zM27 34V14l18 10-18 10z" />
      </svg>
    ),
  },
  {
    name: "JBL",
    svg: (
      <svg viewBox="0 0 60 24" fill="currentColor" className="pillar3-logo-svg">
        <text x="30" y="18" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
          JBL
        </text>
      </svg>
    ),
  },
  {
    name: "Spotify",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="pillar3-logo-svg">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.26-1.02 8.52-.48 11.94 1.38.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z" />
      </svg>
    ),
  },
  {
    name: "Beats",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="pillar3-logo-svg">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">
          b
        </text>
      </svg>
    ),
  },
  {
    name: "Bose",
    svg: (
      <svg viewBox="0 0 60 20" fill="currentColor" className="pillar3-logo-svg">
        <text x="30" y="15" textAnchor="middle" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">
          Bose
        </text>
      </svg>
    ),
  },
];

export function PartnerLogos() {
  return (
    <div className="pillar3-logos">
      {logos.map(({ name, svg }) => (
        <div key={name} className="pillar3-logo-wrap" title={name}>
          {svg}
        </div>
      ))}
    </div>
  );
}
