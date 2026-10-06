"use client";

// Catálogo con filtro por público. Sin JavaScript se muestran todas las apps.
import { useState } from "react";
import type { App } from "@/data/apps";
import TarjetaApp from "./TarjetaApp";
import styles from "./CatalogoApps.module.css";

type Filtro = "todas" | "docentes" | "estudiantes";

const filtros: { id: Filtro; texto: string }[] = [
  { id: "todas", texto: "Todas" },
  { id: "docentes", texto: "Para docentes" },
  { id: "estudiantes", texto: "Para estudiantes" },
];

export default function CatalogoApps({ apps }: { apps: App[] }) {
  const [filtro, setFiltro] = useState<Filtro>("todas");

  const visibles = apps.filter(
    (app) => filtro === "todas" || app.para === filtro || app.para === "todos",
  );

  return (
    <>
      <div className={styles.barra}>
        <div className={styles.filtros} role="group" aria-label="Filtrar por público">
          {filtros.map((f) => (
            <button
              key={f.id}
              type="button"
              className={styles.filtro}
              aria-pressed={filtro === f.id}
              onClick={() => setFiltro(f.id)}
            >
              {f.texto}
            </button>
          ))}
        </div>
        <p className={styles.cuenta} aria-live="polite">
          {visibles.length} {visibles.length === 1 ? "app" : "apps"}
        </p>
      </div>

      {visibles.length > 0 ? (
        <ul className={styles.rejilla}>
          {visibles.map((app) => (
            <TarjetaApp key={app.nombre} app={app} />
          ))}
        </ul>
      ) : (
        <p className={styles.vacio}>Todavía no hay apps para este público.</p>
      )}
    </>
  );
}
