import type { Metadata } from "next";
import { Lexend, Unbounded } from "next/font/google";
import "../../docs/marca/tokens.css";
import "./globals.css";
import PiePagina from "@/components/PiePagina";

// Títulos: Unbounded con los tres pesos del manual.
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-unbounded",
  display: "swap",
});

// Texto: Lexend variable (incluye el peso 350 del manual).
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNEX Education",
  description: "Donde los mundos del aprendizaje se cruzan.",
  icons: {
    icon: { url: "/brand/unex-favicon.svg", type: "image/svg+xml" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${unbounded.variable} ${lexend.variable}`}>
      <body>
        {children}
        <PiePagina />
      </body>
    </html>
  );
}
