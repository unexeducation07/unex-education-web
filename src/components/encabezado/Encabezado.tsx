// Encabezado común de UNEX: logo y selector de universos.
//
// Para usarlo en otro proyecto (Academy, Gestión, Evaluación) copia:
//   1. esta carpeta (src/components/encabezado/),
//   2. src/config/productos.ts (con las URL completas del sitio principal),
//   3. public/brand/unex-logo-horizontal-negativo.svg,
// e indica el universo del proyecto: <Encabezado actual="academy" />.
// La página debe tener <main id="contenido"> para el enlace "Saltar al contenido".
//
// No usa JavaScript: en pantallas pequeñas el menú se abre con <details>.
import type { CSSProperties } from "react";
import { productos, sitioPrincipal, type Producto, type UniversoId } from "@/config/productos";
import styles from "./Encabezado.module.css";

interface EncabezadoProps {
  /** Universo en el que está el usuario. Se omite en el sitio principal. */
  actual?: UniversoId;
}

function Universo({ producto, actual }: { producto: Producto; actual?: UniversoId }) {
  const colores = {
    "--universo": producto.colores.base,
    "--universo-claro": producto.colores.claro,
  } as CSSProperties;

  const nombre = (
    <>
      <span className={styles.punto} aria-hidden="true" />
      {producto.nombreCorto}
    </>
  );

  if (!producto.url) {
    return (
      <li style={colores}>
        <span className={styles.inactivo}>
          {nombre}
          <span className={styles.pronto}>Próximamente</span>
        </span>
      </li>
    );
  }

  return (
    <li style={colores}>
      <a
        href={producto.url}
        className={styles.enlace}
        aria-current={producto.id === actual ? "page" : undefined}
      >
        {nombre}
      </a>
    </li>
  );
}

export default function Encabezado({ actual }: EncabezadoProps) {
  const universos = productos.map((p) => <Universo key={p.id} producto={p} actual={actual} />);

  return (
    <header className={styles.encabezado}>
      <a href="#contenido" className={styles.saltar}>
        Saltar al contenido
      </a>
      <div className={styles.barra}>
        <a href={sitioPrincipal.url} className={styles.logo}>
          <img
            src="/brand/unex-logo-horizontal-negativo.svg"
            alt={`${sitioPrincipal.nombre}: inicio`}
            width={168}
            height={54}
          />
        </a>
        <nav aria-label="Universos UNEX">
          <ul className={styles.lista}>{universos}</ul>
          <details className={styles.menu}>
            <summary>Universos</summary>
            <ul className={styles.panel}>{universos}</ul>
          </details>
        </nav>
      </div>
    </header>
  );
}
