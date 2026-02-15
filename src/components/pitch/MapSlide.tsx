"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Slide } from "./Slide";
import { ActTag } from "../ui/ActTag";

interface MapZone {
  name: string;
  pax: string;
  min: string;
}

const mapZones: MapZone[] = [
  { name: "FRONT STAGE 01", pax: "20", min: "R$ 7k" },
  { name: "FRONT STAGE 02", pax: "20", min: "R$ 7k" },
  { name: "CAMAROTE L1", pax: "15", min: "R$ 5k" },
  { name: "CAMAROTE L2", pax: "15", min: "R$ 5k" },
  { name: "CAMAROTE L3", pax: "15", min: "R$ 5k" },
  { name: "CAMAROTE L4", pax: "15", min: "R$ 5k" },
  { name: "CAMAROTE L5", pax: "15", min: "R$ 5k" },
  { name: "CAMAROTE L6", pax: "15", min: "R$ 5k" },
  { name: "CAMAROTE L7 (MASTER)", pax: "25", min: "R$ 10k" },
  { name: "CAMAROTE M1", pax: "12", min: "R$ 4k" },
  { name: "CAMAROTE M2", pax: "12", min: "R$ 4k" },
  { name: "CAMAROTE M3", pax: "12", min: "R$ 4k" },
  { name: "CAMAROTE M4", pax: "12", min: "R$ 4k" },
  { name: "CAMAROTE M5", pax: "12", min: "R$ 4k" },
  { name: "PISTA P1", pax: "4", min: "R$ 1.5k" },
  { name: "PISTA P2", pax: "4", min: "R$ 1.5k" },
  { name: "PISTA P3", pax: "4", min: "R$ 1.5k" },
  { name: "PISTA P4", pax: "4", min: "R$ 1.5k" },
];

export function MapSlide() {
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    name: string;
    pax: string;
    min: string;
    x: number;
    y: number;
  }>({ show: false, name: "", pax: "", min: "", x: 0, y: 0 });

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent, zone: MapZone) => {
      setTooltip({
        show: true,
        name: zone.name,
        pax: zone.pax,
        min: zone.min,
        x: e.clientX,
        y: e.clientY,
      });
    },
    []
  );

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setTooltip((prev) =>
      prev.show ? { ...prev, x: e.clientX, y: e.clientY } : prev
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip((prev) => ({ ...prev, show: false }));
  }, []);

  return (
    <Slide
      id="ato3"
      variant="map"
      dark
      cinematic={false}
      overlayStyle={{ background: "transparent" }}
      contentClassName="map-slide-content"
    >
      <ActTag>ATO 3 — O CHEQUE-MATE</ActTag>
      <div className="map-header">
        <h2>Não é um mapa. É uma Máquina de Vendas.</h2>
        <p className="map-subtitle">Cada metro quadrado tem preço. Passe o mouse.</p>
      </div>
      <div
        id="map-tooltip"
        style={{
          opacity: tooltip.show ? 1 : 0,
          left: tooltip.x,
          top: tooltip.y,
          pointerEvents: "none",
        }}
      >
        <h4>ÁREA</h4>
        <span>Capacidade: {tooltip.pax || "--"} pax</span>
        <span>Consumação: {tooltip.min || "--"}</span>
      </div>
      <div className="svg-container">
        <svg
          viewBox="0 0 1000 600"
          id="royal-map"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            className="interactive-zone"
            data-name="FRONT STAGE 01"
            data-pax="20"
            data-min="R$ 7k"
            onMouseEnter={(e) =>
              handleMouseEnter(e, { name: "FRONT STAGE 01", pax: "20", min: "R$ 7k" })
            }
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <rect x="750" y="200" width="70" height="100" className="area-path" />
            <text
              x="785"
              y="255"
              className="area-text"
              transform="rotate(-90 785 255)"
            >
              FRONT 01
            </text>
          </g>
          <g
            className="interactive-zone"
            onMouseEnter={(e) =>
              handleMouseEnter(e, { name: "FRONT STAGE 02", pax: "20", min: "R$ 7k" })
            }
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <rect x="750" y="320" width="70" height="100" className="area-path" />
            <text
              x="785"
              y="375"
              className="area-text"
              transform="rotate(-90 785 375)"
            >
              FRONT 02
            </text>
          </g>
          {[
            { x: 350, y: 80, w: 55, h: 80, id: "L1" },
            { x: 415, y: 80, w: 55, h: 80, id: "L2" },
            { x: 480, y: 80, w: 55, h: 80, id: "L3" },
            { x: 545, y: 80, w: 55, h: 80, id: "L4" },
            { x: 610, y: 80, w: 55, h: 80, id: "L5" },
            { x: 675, y: 80, w: 55, h: 80, id: "L6" },
          ].map((r, i) => (
            <g
              key={r.id}
              className="interactive-zone"
              onMouseEnter={(e) =>
                handleMouseEnter(e, {
                  name: `CAMAROTE L${i + 1}`,
                  pax: "15",
                  min: "R$ 5k",
                })
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <rect
                x={r.x}
                y={r.y}
                width={r.w}
                height={r.h}
                className="area-path"
              />
              <text x={r.x + r.w / 2} y={r.y + r.h / 2 + 5} className="area-text">
                {r.id}
              </text>
            </g>
          ))}
          <g
            className="interactive-zone"
            onMouseEnter={(e) =>
              handleMouseEnter(e, {
                name: "CAMAROTE L7 (MASTER)",
                pax: "25",
                min: "R$ 10k",
              })
            }
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <path
              d="M740 80 H820 V180 H740 V80 Z"
              className="area-path"
            />
            <text x="780" y="130" className="area-text">
              L7
            </text>
          </g>
          {[
            { x: 180, y: 420 }, { x: 260, y: 420 }, { x: 340, y: 420 },
            { x: 420, y: 420 }, { x: 500, y: 420 },
          ].map((r, i) => (
            <g
              key={`M${i + 1}`}
              className="interactive-zone"
              onMouseEnter={(e) =>
                handleMouseEnter(e, {
                  name: `CAMAROTE M${i + 1}`,
                  pax: "12",
                  min: "R$ 4k",
                })
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <rect x={r.x} y={r.y} width="70" height="70" className="area-path" />
              <text x={r.x + 35} y={r.y + 40} className="area-text">
                M{i + 1}
              </text>
            </g>
          ))}
          <rect
            x="850"
            y="100"
            width="120"
            height="400"
            fill="#111"
            stroke="#333"
            strokeDasharray="4"
          />
          <text
            x="910"
            y="300"
            transform="rotate(-90 910 300)"
            fill="#333"
            textAnchor="middle"
            fontSize="20"
          >
            PALCO
          </text>
          {[
            { cx: 400, cy: 250 },
            { cx: 450, cy: 250 },
            { cx: 500, cy: 250 },
            { cx: 550, cy: 250 },
          ].map((c, i) => (
            <g
              key={`P${i + 1}`}
              className="interactive-zone"
              onMouseEnter={(e) =>
                handleMouseEnter(e, {
                  name: `PISTA P${i + 1}`,
                  pax: "4",
                  min: "R$ 1.5k",
                })
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <circle
                cx={c.cx}
                cy={c.cy}
                r="15"
                className="area-path"
              />
              <text x={c.cx} y={c.cy + 3} className="area-text">
                P{i + 1}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="map-cta">
        <Link href="/avenue/floor-plan">
          MAPA COMPLETO COM ZOOM →
        </Link>
      </div>
      <div className="equity-block">
        <p className="cta-line">
          Esse mapa vale R$ 30 milhões na mão de um fundo. Em 24 meses.
        </p>
      </div>
    </Slide>
  );
}
