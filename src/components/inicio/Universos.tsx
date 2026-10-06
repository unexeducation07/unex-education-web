import { productos } from "@/config/productos";
import TarjetaUniverso from "./TarjetaUniverso";
import styles from "./Universos.module.css";

export default function Universos() {
  return (
    <section id="universos" className="contenedor seccion" aria-labelledby="universos-titulo">
      <div className={styles.intro}>
        <h2 id="universos-titulo">Los universos UNEX</h2>
        <p>
          Cada universo está pensado para alguien: estudiantes, docentes, rectores y toda la
          comunidad educativa. Elige el tuyo.
        </p>
      </div>
      <div className={styles.rejilla}>
        {productos.map((p) => (
          <TarjetaUniverso key={p.id} producto={p} />
        ))}
      </div>
    </section>
  );
}
