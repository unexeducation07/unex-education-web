import type { Metadata } from "next";
import Encabezado from "@/components/encabezado/Encabezado";

export const metadata: Metadata = {
  title: "UNEX Apps · UNEX Education",
  description: "Pequeñas herramientas listas para usar en clase y en casa.",
};

export default function Apps() {
  return (
    <>
      <Encabezado actual="apps" />
      <main id="contenido" className="contenedor seccion">
        <h1>UNEX Apps</h1>
        <p>Muy pronto encontrarás aquí el catálogo de apps.</p>
      </main>
    </>
  );
}
