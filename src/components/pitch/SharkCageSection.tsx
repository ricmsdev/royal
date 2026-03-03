"use client";

import Image from "next/image";

const SHARK_FORMAT = [
  "Shot clock 30s — ritmo de TV, zero enrolação",
  "Shark Cage no palco — quem blefa e perde, vai pra gaiola",
  "Câmeras na mesa — projeção ao vivo no telão",
  "Leaderboard em tempo real — o público acompanha cada mão",
  "Buy-in exclusivo — acesso só por indicação",
];

export function SharkCageSection() {
  return (
    <div className="shark-cage-visual">
      <div className="shark-cage-bars-overlay" aria-hidden />
      <div className="shark-cage-shark-img">
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=85"
          alt="Shark — Shark Cage"
          width={160}
          height={100}
        />
      </div>
      <div className="shark-cage-content-inner">
        <h4 className="shark-cage-clean-title">FORMATO SHARK CAGE</h4>
        <ul>
          {SHARK_FORMAT.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
