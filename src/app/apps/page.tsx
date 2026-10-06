import type { Metadata } from "next";
import Encabezado from "@/components/encabezado/Encabezado";
import { openGraphComun } from "@/config/metadatos";
import CatalogoApps from "@/components/apps/CatalogoApps";
import { apps } from "@/data/apps";
import styles from "./apps.module.css";

const descripcion = "Pequeñas herramientas listas para usar en clase y en casa.";

export const metadata: Metadata = {
  title: "UNEX Apps",
  description: descripcion,
  openGraph: {
    ...openGraphComun,
    title: "UNEX Apps · UNEX Education",
    description: descripcion,
    url: "/apps",
  },
};

export default function Apps() {
  const hayEjemplos = apps.some((app) => app.ejemplo);

  return (
    <>
      <Encabezado actual="apps" />
      <main id="contenido">
        <section className={styles.intro}>
          <div className="contenedor">
            <h1 className={styles.titulo}>
              <img
                src="/brand/submarcas/unex-apps-negativo.svg"
                alt="UNEX Apps"
                width={240}
                height={77}
              />
            </h1>
            <p className={styles.entradilla}>
              Pequeñas herramientas listas para usar en clase y en casa. Elige la que necesites y
              ábrela al instante.
            </p>
          </div>
        </section>

        <section className="contenedor seccion" aria-labelledby="catalogo-titulo">
          <h2 id="catalogo-titulo" className="visualmente-oculto">
            Catálogo de apps
          </h2>
          {hayEjemplos && (
            <p className={styles.aviso}>
              Estamos preparando el catálogo. Las apps marcadas como «Ejemplo» son de muestra.
            </p>
          )}
          <CatalogoApps apps={apps} />
        </section>
      </main>
    </>
  );
}
