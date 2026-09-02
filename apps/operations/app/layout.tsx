import "@bemara/design-tokens/tokens.css";
import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "BEMARA Operations",
  description: "Internal BEMARA operations foundation.",
};

export default function OperationsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
