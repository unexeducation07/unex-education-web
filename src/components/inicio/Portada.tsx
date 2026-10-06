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
          En UNEX cada curso es un universo con su propia historia: aventura, magia, portales,
          mazmorras, videojuegos y futuro. Aprendes jugando y avanzas a tu ritmo.
        </p>
        <a href="#universos" className={styles.boton}>
          Explora los universos
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
