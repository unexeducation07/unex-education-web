import Encabezado from "@/components/encabezado/Encabezado";
import Portada from "@/components/inicio/Portada";

export default function Inicio() {
  return (
    <>
      <Encabezado />
      <main id="contenido">
        <Portada />
        {/* Provisional: la sección de universos se construye en el paso 5. */}
        <section id="universos" className="contenedor seccion">
          <h2>Los universos UNEX</h2>
          <p>Muy pronto.</p>
        </section>
      </main>
    </>
  );
}
