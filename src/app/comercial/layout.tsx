import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROYAL | Área Comercial",
  description: "Leads, clientes e vendedores — Royal Yacht.",
};

export default function ComercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
