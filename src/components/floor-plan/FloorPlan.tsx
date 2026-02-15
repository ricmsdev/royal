'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './FloorPlan.module.css';

const MIN_SCALE = 0.5;
const MAX_SCALE = 3;
const ZOOM_STEP = 0.25;

interface AreaData {
  name: string;
  pax: string;
  val: string;
}

const AREAS: AreaData[] = [
  { name: 'CAMAROTE L1', pax: '15', val: 'R$ 5.000' },
  { name: 'CAMAROTE L2', pax: '15', val: 'R$ 5.000' },
  { name: 'CAMAROTE L3', pax: '15', val: 'R$ 5.000' },
  { name: 'CAMAROTE L4', pax: '15', val: 'R$ 5.000' },
  { name: 'CAMAROTE L5', pax: '15', val: 'R$ 5.000' },
  { name: 'CAMAROTE L6', pax: '15', val: 'R$ 5.000' },
  { name: 'CAMAROTE L7 (MASTER)', pax: '25', val: 'R$ 10.000' },
  { name: 'CAMAROTE M1', pax: '12', val: 'R$ 4.000' },
  { name: 'CAMAROTE M2', pax: '12', val: 'R$ 4.000' },
  { name: 'CAMAROTE M3', pax: '12', val: 'R$ 4.000' },
  { name: 'CAMAROTE M4', pax: '12', val: 'R$ 4.000' },
  { name: 'CAMAROTE M5', pax: '12', val: 'R$ 4.000' },
  { name: 'RED BULL STAGE', pax: '50', val: 'SOB CONSULTA' },
  { name: 'ACESSO AO LOUNGE', pax: 'VIP', val: 'EXCLUSIVO' },
  { name: 'ÁREA A1', pax: '4', val: 'R$ 1.200' },
  { name: 'ÁREA A2', pax: '4', val: 'R$ 1.200' },
  { name: 'ÁREA A3', pax: '4', val: 'R$ 1.200' },
  { name: 'ÁREA A4', pax: '4', val: 'R$ 1.200' },
  { name: 'FRONT 01', pax: '20', val: 'R$ 7.000' },
  { name: 'FRONT 02', pax: '20', val: 'R$ 7.000' },
  { name: 'SIDE STAGE', pax: '15', val: 'R$ 6.000' },
  { name: 'DJ BOOTH', pax: 'RESTRICTED', val: '---' },
  { name: 'PALCO PRINCIPAL', pax: 'ARTISTAS', val: '---' },
  { name: 'MESA P1', pax: '4', val: 'R$ 1.500' },
  { name: 'MESA P2', pax: '4', val: 'R$ 1.500' },
  { name: 'MESA P3', pax: '4', val: 'R$ 1.500' },
  { name: 'MESA P4', pax: '4', val: 'R$ 1.500' },
  { name: 'MESA P5', pax: '4', val: 'R$ 1.500' },
  { name: 'MESA P6', pax: '4', val: 'R$ 1.500' },
  { name: 'MESA P7', pax: '4', val: 'R$ 1.500' },
];

export default function FloorPlan() {
  const [tooltip, setTooltip] = useState<AreaData | null>(null);
  const [hovering, setHovering] = useState(false);
  const [dragging, setDragging] = useState(false);
  const scaleRef = useRef(1);
  const translateRef = useRef({ x: 0, y: 0 });
  const zoomWrapperRef = useRef<HTMLDivElement>(null);
  const mapSvgRef = useRef<SVGSVGElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, startTx: 0, startTy: 0 });
  const pinchRef = useRef<{ dist: number; center: [number, number] } | null>(null);

  const applyTransform = useCallback(() => {
    const svg = mapSvgRef.current;
    if (!svg) return;
    const { x, y } = translateRef.current;
    const s = scaleRef.current;
    svg.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
  }, []);

  const zoom = useCallback(
    (delta: number, centerX?: number, centerY?: number) => {
      const wrapper = zoomWrapperRef.current;
      const svg = mapSvgRef.current;
      if (!wrapper || !svg) return;

      const rect = wrapper.getBoundingClientRect();
      const cx = centerX ?? rect.left + rect.width / 2;
      const cy = centerY ?? rect.top + rect.height / 2;

      const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scaleRef.current + delta));
      const prevScale = scaleRef.current;
      scaleRef.current = newScale;

      const centerXRel = rect.left + rect.width / 2;
      const centerYRel = rect.top + rect.height / 2;
      translateRef.current.x += (cx - centerXRel - translateRef.current.x) * (1 - newScale / prevScale);
      translateRef.current.y += (cy - centerYRel - translateRef.current.y) * (1 - newScale / prevScale);

      applyTransform();
    },
    [applyTransform]
  );

  const showTooltip = useCallback((area: AreaData) => {
    setTooltip(area);
    setHovering(true);
  }, []);

  const hideTooltip = useCallback(() => {
    setTooltip(null);
    setHovering(false);
  }, []);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const circle = cursorCircleRef.current;
    const onMove = (e: MouseEvent) => {
      dot?.style && (dot.style.left = `${e.clientX}px`) && (dot.style.top = `${e.clientY}px`);
      circle?.style && (circle.style.left = `${e.clientX}px`) && (circle.style.top = `${e.clientY}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const wrapper = zoomWrapperRef.current;
    const svg = mapSvgRef.current;
    if (!wrapper || !svg) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoom(e.deltaY > 0 ? -0.15 : 0.15, e.clientX, e.clientY);
    };

    const onMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(`.${styles.zoomBtn}`)) return;
      dragRef.current = {
        active: true,
        startX: e.clientX,
        startY: e.clientY,
        startTx: translateRef.current.x,
        startTy: translateRef.current.y,
      };
      setDragging(true);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.active) return;
      translateRef.current.x = dragRef.current.startTx + (e.clientX - dragRef.current.startX);
      translateRef.current.y = dragRef.current.startTy + (e.clientY - dragRef.current.startY);
      applyTransform();
    };

    const onMouseUp = () => {
      dragRef.current.active = false;
      setDragging(false);
    };

    wrapper.addEventListener('wheel', onWheel, { passive: false });
    wrapper.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      wrapper.removeEventListener('wheel', onWheel);
      wrapper.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [zoom, applyTransform]);

  useEffect(() => {
    const onTouchEnd = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.interactiveGroup}`)) {
        hideTooltip();
      }
    };
    document.addEventListener('touchend', onTouchEnd);
    return () => document.removeEventListener('touchend', onTouchEnd);
  }, [hideTooltip]);

  useEffect(() => {
    const wrapper = zoomWrapperRef.current;
    if (!wrapper) return;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        pinchRef.current = {
          dist: Math.hypot(e.touches[1].clientX - e.touches[0].clientX, e.touches[1].clientY - e.touches[0].clientY),
          center: [(e.touches[0].clientX + e.touches[1].clientX) / 2, (e.touches[0].clientY + e.touches[1].clientY) / 2],
        };
      } else if (e.touches.length === 1) {
        dragRef.current = {
          active: true,
          startX: e.touches[0].clientX,
          startY: e.touches[0].clientY,
          startTx: translateRef.current.x,
          startTy: translateRef.current.y,
        };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && pinchRef.current) {
        e.preventDefault();
        const dist = Math.hypot(e.touches[1].clientX - e.touches[0].clientX, e.touches[1].clientY - e.touches[0].clientY);
        const delta = (dist - pinchRef.current.dist) * 0.01;
        zoom(delta, pinchRef.current.center[0], pinchRef.current.center[1]);
        pinchRef.current = {
          dist,
          center: [(e.touches[0].clientX + e.touches[1].clientX) / 2, (e.touches[0].clientY + e.touches[1].clientY) / 2],
        };
      } else if (e.touches.length === 1 && dragRef.current.active) {
        translateRef.current.x = dragRef.current.startTx + (e.touches[0].clientX - dragRef.current.startX);
        translateRef.current.y = dragRef.current.startTy + (e.touches[0].clientY - dragRef.current.startY);
        applyTransform();
      }
    };

    const onTouchEnd = () => {
      pinchRef.current = null;
      dragRef.current.active = false;
    };

    wrapper.addEventListener('touchstart', onTouchStart, { passive: true });
    wrapper.addEventListener('touchmove', onTouchMove, { passive: false });
    wrapper.addEventListener('touchend', onTouchEnd);

    return () => {
      wrapper.removeEventListener('touchstart', onTouchStart);
      wrapper.removeEventListener('touchmove', onTouchMove);
      wrapper.removeEventListener('touchend', onTouchEnd);
    };
  }, [zoom, applyTransform]);

  const rootClass = [styles.root, hovering ? styles.hovering : ''].filter(Boolean).join(' ');

  return (
    <div className={rootClass}>
      <div ref={cursorDotRef} className={styles.cursorDot} aria-hidden />
      <div ref={cursorCircleRef} className={styles.cursorCircle} aria-hidden />

      <Link href="/#ato3" className={styles.btnBack} title="Voltar à seção do mapa">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </Link>

      <header className={styles.header}>
        <h1>MAPA DA CASA</h1>
        <p className={styles.subtitle}>SELECIONE SUA EXPERIÊNCIA</p>
      </header>

      <div className={styles.mapContainer}>
        <div
          className={styles.tooltip}
          style={{ opacity: tooltip ? 1 : 0 }}
          role="tooltip"
          aria-hidden={!tooltip}
        >
          {tooltip && (
            <>
              <h3>{tooltip.name}</h3>
              <p>Pax: <span>{tooltip.pax}</span></p>
              <p>Min: <span>{tooltip.val}</span></p>
              <div className={styles.status}>● DISPONÍVEL</div>
            </>
          )}
        </div>

        <div
          ref={zoomWrapperRef}
          className={`${styles.zoomWrapper} ${dragging ? styles.dragging : ''}`}
        >
          <svg
            ref={mapSvgRef}
            className={styles.mapSvg}
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Mapa da casa Royal"
          >
            {/* Corredores */}
            <line x1={200} y1={55} x2={800} y2={55} className={styles.corridorLine} />
            <text x={500} y={48} className={styles.corridorText}>CORREDOR CAMAROTE LATERAL</text>
            <line x1={200} y1={545} x2={800} y2={545} className={styles.corridorLine} />
            <text x={500} y={555} className={styles.corridorText}>CORREDOR CAMAROTE SUPERIOR</text>

            {/* L1-L7 */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g
                key={`L${i + 1}`}
                className={styles.interactiveGroup}
                onMouseEnter={() => showTooltip(AREAS[i])}
                onMouseLeave={hideTooltip}
                onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[i]); }}
              >
                <rect className={`${styles.areaPath} ${styles.drawAnim}`} x={350 + i * 70} y={80} width={60} height={90} />
                <text x={380 + i * 70} y={130} className={styles.areaLabel}>L{i + 1}</text>
              </g>
            ))}
            <g
              className={styles.interactiveGroup}
              onMouseEnter={() => showTooltip(AREAS[6])}
              onMouseLeave={hideTooltip}
              onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[6]); }}
            >
              <path className={`${styles.areaPath} ${styles.drawAnim}`} d="M770 80 H820 V180 H770 V80 Z" />
              <text x={795} y={130} className={styles.areaLabel}>L7</text>
            </g>

            {/* M1-M5 */}
            {[0, 1, 2, 3, 4].map((i) => (
              <g
                key={`M${i + 1}`}
                className={styles.interactiveGroup}
                onMouseEnter={() => showTooltip(AREAS[7 + i])}
                onMouseLeave={hideTooltip}
                onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[7 + i]); }}
              >
                <rect className={`${styles.areaPath} ${styles.drawAnim}`} x={180 + i * 90} y={420} width={80} height={80} />
                <text x={220 + i * 90} y={465} className={styles.areaLabel}>M{i + 1}</text>
              </g>
            ))}

            {/* Red Bull Stage */}
            <g
              className={`${styles.interactiveGroup} ${styles.redbull}`}
              onMouseEnter={() => showTooltip(AREAS[12])}
              onMouseLeave={hideTooltip}
              onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[12]); }}
            >
              <path className={`${styles.areaPath} ${styles.redbullPath} ${styles.drawAnim}`} d="M50 80 H140 V200 L50 240 V80 Z" />
              <text x={95} y={160} className={styles.areaLabel} transform="rotate(-90 95 160)" style={{ fill: '#aaa' }}>RB STAGE</text>
            </g>

            {/* Acesso ao Lounge */}
            <g
              className={styles.interactiveGroup}
              onMouseEnter={() => showTooltip(AREAS[13])}
              onMouseLeave={hideTooltip}
              onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[13]); }}
            >
              <rect className={`${styles.loungeArea} ${styles.drawAnim}`} x={150} y={240} width={55} height={120} rx={2} />
              <text x={177} y={302} className={styles.areaLabel} transform="rotate(-90 177 302)">ACESSO AO LOUNGE</text>
            </g>

            {/* Escadas */}
            <g className={styles.stairsGroup}>
              {[252, 264, 276, 288, 300, 312, 324, 336, 348].map((y) => (
                <line key={y} x1={150} y1={y} x2={235} y2={y} className={styles.stairs} />
              ))}
            </g>

            {/* A1-A4 */}
            {[
              { cx: 230, cy: 115, i: 14 },
              { cx: 255, cy: 115, i: 15 },
              { cx: 230, cy: 140, i: 16 },
              { cx: 255, cy: 140, i: 17 },
            ].map(({ cx, cy, i }) => (
              <g
                key={`A${i - 13}`}
                className={styles.interactiveGroup}
                onMouseEnter={() => showTooltip(AREAS[i])}
                onMouseLeave={hideTooltip}
                onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[i]); }}
              >
                <circle className={`${styles.markerA} ${styles.drawAnim}`} cx={cx} cy={cy} r={12} />
                <text x={cx} y={cy + 3} className={styles.areaLabel} style={{ fontSize: 8 }} textAnchor="middle" dominantBaseline="middle">A{i - 13}</text>
              </g>
            ))}

            {/* FRONT 01, 02 */}
            <g
              className={styles.interactiveGroup}
              onMouseEnter={() => showTooltip(AREAS[18])}
              onMouseLeave={hideTooltip}
              onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[18]); }}
            >
              <rect className={`${styles.areaPath} ${styles.drawAnim}`} x={770} y={220} width={60} height={80} />
              <text x={800} y={265} className={styles.areaLabel} transform="rotate(-90 800 265)">FRONT 1</text>
            </g>
            <g
              className={styles.interactiveGroup}
              onMouseEnter={() => showTooltip(AREAS[19])}
              onMouseLeave={hideTooltip}
              onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[19]); }}
            >
              <rect className={`${styles.areaPath} ${styles.drawAnim}`} x={770} y={320} width={60} height={80} />
              <text x={800} y={365} className={styles.areaLabel} transform="rotate(-90 800 365)">FRONT 2</text>
            </g>

            {/* SIDE, DJ */}
            <g
              className={styles.interactiveGroup}
              onMouseEnter={() => showTooltip(AREAS[20])}
              onMouseLeave={hideTooltip}
              onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[20]); }}
            >
              <rect className={`${styles.areaPath} ${styles.drawAnim}`} x={770} y={440} width={80} height={60} />
              <text x={810} y={475} className={styles.areaLabel}>SIDE</text>
            </g>
            <g
              className={styles.interactiveGroup}
              onMouseEnter={() => showTooltip(AREAS[21])}
              onMouseLeave={hideTooltip}
              onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[21]); }}
            >
              <rect className={`${styles.areaPath} ${styles.drawAnim}`} x={860} y={440} width={80} height={60} style={{ stroke: '#555' }} />
              <text x={900} y={475} className={styles.areaLabel}>DJ</text>
            </g>

            {/* PALCO */}
            <g
              className={styles.interactiveGroup}
              onMouseEnter={() => showTooltip(AREAS[22])}
              onMouseLeave={hideTooltip}
              onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[22]); }}
            >
              <rect className={`${styles.palcoArea} ${styles.areaPath}`} x={850} y={100} width={120} height={320} rx={4} />
              <text x={910} y={260} className={styles.areaLabel} transform="rotate(-90 910 260)" style={{ fill: '#333', fontSize: 20, letterSpacing: 5 }}>PALCO</text>
            </g>

            {/* P1-P7 */}
            {[700, 650, 600, 550, 500, 450, 400].map((cx, i) => (
              <g
                key={`P${i + 1}`}
                className={styles.interactiveGroup}
                onMouseEnter={() => showTooltip(AREAS[23 + i])}
                onMouseLeave={hideTooltip}
                onTouchStart={(e) => { e.preventDefault(); showTooltip(AREAS[23 + i]); }}
              >
                <circle className={`${styles.areaPath} ${styles.drawAnim}`} cx={cx} cy={200} r={15} />
                <text x={cx} y={200} className={styles.areaLabel} style={{ fontSize: 8 }} textAnchor="middle" dominantBaseline="middle">P{i + 1}</text>
              </g>
            ))}
          </svg>
        </div>

        <div className={styles.zoomControls}>
          <button type="button" className={styles.zoomBtn} onClick={() => zoom(-ZOOM_STEP)} aria-label="Diminuir zoom">−</button>
          <button type="button" className={styles.zoomBtn} onClick={() => zoom(ZOOM_STEP)} aria-label="Aumentar zoom">+</button>
        </div>
      </div>
    </div>
  );
}
