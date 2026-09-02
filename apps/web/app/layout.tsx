import "@bemara/design-tokens/tokens.css";
import "./globals.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { bemaraBrand } from "@bemara/domain";

export const metadata: Metadata = {
  title: {
    default: `${bemaraBrand.name} | ${bemaraBrand.slogan}`,
    template: `%s | ${bemaraBrand.name}`,
  },
  description:
    "BEMARA es una plataforma personal consumer premium para mujeres, orquestada por LENA.",
  applicationName: bemaraBrand.name,
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F7F1ED",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
