// Datos comunes para compartir enlaces (Open Graph). Next.js no los combina entre páginas:
// si una página define `openGraph`, reemplaza el del layout. Por eso se reutiliza esta base.
import type { Metadata } from "next";
import { sitioPrincipal } from "./productos";

export const openGraphComun: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "es_CO",
  siteName: sitioPrincipal.nombre,
  // Se genera con `npm run imagen-compartir` (fuente: scripts/imagen-compartir.html).
  images: [
    {
      url: "/compartir.png",
      width: 1200,
      height: 630,
      alt: "UNEX Education: Donde los mundos del aprendizaje se cruzan. Academy, Gestión, Evaluación y Apps.",
    },
  ],
};
