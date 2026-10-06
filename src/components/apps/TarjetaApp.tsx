import type { App, Publico } from "@/data/apps";
import styles from "./TarjetaApp.module.css";

const textoPara: Record<Publico, string> = {
  docentes: "Para docentes",
  estudiantes: "Para estudiantes",
  todos: "Para todos",
};

export default function TarjetaApp({ app }: { app: App }) {
  const disponible = app.estado === "disponible";

  return (
    <li className={styles.tarjeta} data-estado={app.estado}>
      <span className={styles.icono} aria-hidden="true">
        {app.icono}
      </span>
      <div>
        <h3 className={styles.nombre}>
          {disponible ? (
            <a
              href={app.url}
              className={styles.enlace}
              {...(app.externa && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {app.nombre}
              {app.externa && (
                <>
                  <span aria-hidden="true"> ↗</span>
                  <span className="visualmente-oculto"> (se abre en una pestaña nueva)</span>
                </>
              )}
            </a>
          ) : (
            app.nombre
          )}
        </h3>
        <p className={styles.descripcion}>{app.descripcion}</p>
        <p className={styles.etiquetas}>
          <span className={styles.para}>{textoPara[app.para]}</span>
          {!disponible && <span className={styles.pronto}>Próximamente</span>}
          {app.ejemplo && <span className={styles.ejemplo}>Ejemplo</span>}
        </p>
      </div>
    </li>
  );
}
