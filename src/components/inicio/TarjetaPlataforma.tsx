import type { CSSProperties } from "react";
import type { Producto } from "@/config/productos";
import styles from "./TarjetaPlataforma.module.css";

export default function TarjetaPlataforma({ producto }: { producto: Producto }) {
  const colores = {
    "--plataforma": producto.colores.base,
    "--plataforma-oscuro": producto.colores.oscuro,
    "--plataforma-texto": `var(--${producto.id}-texto)`,
  } as CSSProperties;

  return (
    <article className={styles.tarjeta} style={colores}>
      <h3 className={styles.titulo}>
        <picture>
          <source
            srcSet={`/brand/submarcas/unex-${producto.id}-negativo.svg`}
            media="(prefers-color-scheme: dark)"
          />
          <img
            src={`/brand/submarcas/unex-${producto.id}.svg`}
            alt={producto.nombre}
            width={200}
            height={64}
          />
        </picture>
      </h3>

      <p className={styles.para}>
        <span className={styles.etiqueta}>Para</span> {producto.para}
      </p>
      <p className={styles.frase}>{producto.frase}</p>

      <div className={styles.accion}>
        {producto.url ? (
          <a href={producto.url} className={styles.boton}>
            Entrar a {producto.nombre}
            <span aria-hidden="true">→</span>
          </a>
        ) : (
          <span className={styles.proximamente}>Próximamente</span>
        )}
      </div>
    </article>
  );
}
