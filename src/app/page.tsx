import Encabezado from "@/components/encabezado/Encabezado";
import Portada from "@/components/inicio/Portada";
import Universos from "@/components/inicio/Universos";

export default function Inicio() {
  return (
    <>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <Universos />
      </main>
    </>
  );
}
