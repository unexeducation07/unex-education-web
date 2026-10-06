import styles from "./Portada.module.css";

export default function Portada() {
  return (
    <section className={styles.portada} aria-labelledby="portada-titulo">
      <div className={styles.contenido}>
        <img
          src="/brand/unex-logo-animado-negativo.svg"
          alt="UNEX Education"
          width={360}
          height={116}
          fetchPriority="high"
          className={styles.logo}
        />
        <h1 id="portada-titulo" className={styles.titulo}>
          Donde los mundos del aprendizaje se cruzan.
        </h1>
        <p className={styles.entradilla}>
          UNEX reúne en un solo lugar lo que vive una comunidad educativa: cursos que se aprenden
          como una aventura, la gestión del colegio, las evaluaciones y herramientas para el aula.
        </p>
        <a href="#plataformas" className={styles.boton}>
          Explora UNEX
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
