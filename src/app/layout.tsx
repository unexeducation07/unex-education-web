import type { Metadata, Viewport } from "next";
import { Lexend, Unbounded } from "next/font/google";
import "../../docs/marca/tokens.css";
import "./globals.css";
import PiePagina from "@/components/PiePagina";
import { openGraphComun } from "@/config/metadatos";
import { sitioPrincipal } from "@/config/productos";

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

const descripcion =
  "Donde los mundos del aprendizaje se cruzan. Cursos que se aprenden como una aventura, gestión escolar, evaluaciones y herramientas para el aula.";

export const metadata: Metadata = {
  metadataBase: new URL(sitioPrincipal.urlPublica),
  title: {
    default: sitioPrincipal.nombre,
    template: `%s · ${sitioPrincipal.nombre}`,
  },
  description: descripcion,
  openGraph: {
    ...openGraphComun,
    title: sitioPrincipal.nombre,
    url: "/",
    description: descripcion,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: { url: "/brand/unex-favicon.svg", type: "image/svg+xml" },
  },
};

// Color de la barra del navegador en móviles: Cosmos (--unex-cosmos).
export const viewport: Viewport = {
  themeColor: "#15173F",
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
