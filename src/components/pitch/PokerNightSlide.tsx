"use client";

import Image from "next/image";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

const IDOLS = [
  { id: 1, name: "Ronaldo", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=85" },
  { id: 2, name: "Neymar", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=85" },
  { id: 3, name: "Ídolo 3", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=85" },
  { id: 4, name: "Ídolo 4", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&q=85" },
  { id: 5, name: "Ídolo 5", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=85" },
  { id: 6, name: "Ídolo 6", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=85" },
];

const SHARK_FORMAT = [
  "Shot clock 30s — ritmo de TV, zero enrolação",
  "Shark Cage no palco — quem blefa e perde, vai pra gaiola",
  "Câmeras na mesa — projeção ao vivo no telão",
  "Leaderboard em tempo real — o público acompanha cada mão",
  "Buy-in exclusivo — acesso só por indicação",
];

export function PokerNightSlide() {
  return (
    <Slide
      id="noite-terca"
      bg="/ronaldosharkpoker.jpg"
      cinematic
      overlayStyle={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(5,3,15,0.65) 50%, rgba(0,0,0,0.75) 100%)",
      }}
      contentStyle={{ maxWidth: "820px" }}
    >
      <ActTag>PROGRAMAÇÃO — TERÇA</ActTag>

      <div className="allin">
        <span className="allin-badge">SHARK CAGE</span>

        <header className="allin-header">
          <span className="allin-num">02</span>
          <h1 className="allin-title">ALL IN</h1>
          <p className="allin-subtitle">POKER NIGHT SHOW</p>
        </header>

        <blockquote className="allin-hook">
          Ronaldo. Neymar. Na mesa. Ao vivo. O palco vira arena. Ídolos jogando
          entre si — transmissão ao vivo, drama em tempo real.
        </blockquote>

        <div className="allin-grid">
          <section className="allin-mesa">
            <h2 className="allin-section-title">MESA — 6 ÍDOLOS</h2>
            <div className="allin-avatars">
              {IDOLS.map((idol) => (
                <div key={idol.id} className="allin-avatar">
                  <div className="allin-avatar-ring">
                    <Image
                      src={idol.img}
                      alt={idol.name}
                      width={64}
                      height={64}
                    />
                  </div>
                  <span className="allin-avatar-num">{String(idol.id).padStart(2, "0")}</span>
                  <span className="allin-avatar-name">{idol.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="allin-cage">
            <div className="allin-cage-frame">
              <div className="allin-cage-grid" aria-hidden />
              <div className="allin-cage-img">
                <Image
                  src="/money.jpg"
                  alt="Shark Cage Champion"
                  width={280}
                  height={160}
                />
              </div>
              <div className="allin-cage-body">
                <h2 className="allin-section-title">FORMATO SHARK CAGE</h2>
                <ul className="allin-cage-list">
                  {SHARK_FORMAT.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <p className="allin-footer">Lounge · Camarotes · Mesa VIP · Transmissão</p>
      </div>
    </Slide>
  );
}
