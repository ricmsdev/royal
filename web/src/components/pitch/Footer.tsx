import Link from "next/link";

const MAPS_URL =
  "https://www.google.com/maps/search/Rua+Cardeal+Arcoverde+1393+Pinheiros+S%C3%A3o+Paulo+05407-002";

export function Footer() {
  return (
    <footer className="footer">
      <div className="address">
        <h3>ROYAL</h3>
        <p>
          Rua Cardeal Arcoverde, 1393 — Pinheiros — São Paulo, SP — 05407-002
        </p>
        <Link href={MAPS_URL} target="_blank" rel="noopener">
          VER NO MAPA →
        </Link>
      </div>
      <div className="branding">
        <p className="footer-presented">APRESENTADO POR CASA SARMENTO</p>
        STRATEGY & DESIGN BY RICARDO SARMENTO
        <p style={{ marginTop: "12px" }}>
          <Link
            href="https://github.com/ricmsdev/royal"
            target="_blank"
            rel="noopener"
            style={{
              color: "var(--gold)",
              textDecoration: "none",
              fontSize: "0.75rem",
            }}
          >
            github.com/ricmsdev/royal
          </Link>
        </p>
      </div>
    </footer>
  );
}
