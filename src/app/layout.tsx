import type { Metadata, Viewport } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export const metadata: Metadata = {
  title: "ROYAL 3.0 | Mudança de Era",
  description:
    "ROYAL 3.0 — Casa noturna em Pinheiros, São Paulo. Apresentado por Casa Sarmento.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${cinzel.variable} ${manrope.variable} antialiased`}
        style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
