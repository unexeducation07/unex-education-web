import Link from "next/link";
import Encabezado from "@/components/encabezado/Encabezado";

export default function NoEncontrada() {
  return (
    <>
      <Encabezado />
      <main id="contenido" className="contenedor seccion">
        <h1>Esta página no existe</h1>
        <p>Puede que el enlace esté mal escrito o que la página se haya movido.</p>
        <p>
          <Link href="/">Volver al inicio</Link>
        </p>
      </main>
    </>
  );
}
