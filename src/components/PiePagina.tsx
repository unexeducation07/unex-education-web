import { productos, sitioPrincipal } from "@/config/productos";
import styles from "./PiePagina.module.css";

export default function PiePagina() {
  const anio = new Date().getFullYear();

  return (
    <footer className={styles.pie}>
      <div className={styles.contenido}>
        <div className={styles.marca}>
          <a href={sitioPrincipal.url} className={styles.logo}>
            <img
              src="/brand/unex-logo-horizontal-negativo.svg"
              alt={`${sitioPrincipal.nombre}: inicio`}
              width={168}
              height={54}
            />
          </a>
          <p>Donde los mundos del aprendizaje se cruzan.</p>
        </div>

        <nav aria-labelledby="pie-plataformas">
          <h2 id="pie-plataformas" className={styles.titulo}>
            Plataformas UNEX
          </h2>
          <ul className={styles.lista}>
            {productos.map((p) => (
              <li key={p.id}>
                {p.url ? (
                  <a href={p.url}>{p.nombre}</a>
                ) : (
                  <span className={styles.inactivo}>
                    {p.nombre} <span className={styles.pronto}>(próximamente)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className={styles.legal}>
        © {anio} {sitioPrincipal.nombre}
      </p>
    </footer>
  );
}
