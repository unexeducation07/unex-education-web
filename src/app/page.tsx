import Encabezado from "@/components/encabezado/Encabezado";
import ComoSeAprende from "@/components/inicio/ComoSeAprende";
import Portada from "@/components/inicio/Portada";
import Plataformas from "@/components/inicio/Plataformas";

export default function Inicio() {
  return (
    <>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <Plataformas />
        <ComoSeAprende />
      </main>
    </>
  );
}
