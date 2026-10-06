import { productos } from "@/config/productos";
import TarjetaPlataforma from "./TarjetaPlataforma";
import styles from "./Plataformas.module.css";

export default function Plataformas() {
  return (
    <section id="plataformas" className="contenedor seccion" aria-labelledby="plataformas-titulo">
      <div className={styles.intro}>
        <h2 id="plataformas-titulo">Las plataformas UNEX</h2>
        <p>
          Cada una está pensada para alguien distinto: estudiantes, docentes, directivos y toda la
          comunidad. Elige la tuya.
        </p>
      </div>
      <div className={styles.rejilla}>
        {productos.map((p) => (
          <TarjetaPlataforma key={p.id} producto={p} />
        ))}
      </div>
    </section>
  );
}
