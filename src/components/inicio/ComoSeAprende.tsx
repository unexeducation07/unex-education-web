import styles from "./ComoSeAprende.module.css";

const pilares = [
  {
    etiqueta: "Storytelling",
    titulo: "Aprendes dentro de una historia",
    texto:
      "Cada curso es un universo con personajes, misiones y un mundo por descubrir. Los temas dejan de ser una lista de contenidos y se convierten en capítulos de una aventura.",
  },
  {
    etiqueta: "Gamificación",
    titulo: "Avanzas como en un juego",
    texto:
      "Superas retos, ganas puntos y desbloqueas logros. Ves tu progreso en todo momento y decides cuándo seguir: cada quien avanza a su ritmo.",
  },
];

const pasos = [
  {
    titulo: "Eliges un universo",
    texto: "Aventura, magia, portales, mazmorras, videojuegos o futuro.",
  },
  {
    titulo: "Sigues la historia",
    texto: "Cada lección es un capítulo con una misión clara.",
  },
  {
    titulo: "Superas retos",
    texto: "Practicas con desafíos cortos y sabes al instante cómo te fue.",
  },
  {
    titulo: "Desbloqueas logros",
    texto: "Tus avances se convierten en insignias que muestran lo que ya dominas.",
  },
];

export default function ComoSeAprende() {
  return (
    <section className={styles.banda} aria-labelledby="aprende-titulo">
      <div className="contenedor seccion">
        <div className={styles.intro}>
          <h2 id="aprende-titulo">Cómo se aprende en UNEX Academy</h2>
          <p>
            Aprender es más fácil cuando hay una historia que seguir y un reto que superar. Por eso
            cada curso combina dos ingredientes.
          </p>
        </div>

        <div className={styles.pilares}>
          {pilares.map((p) => (
            <article key={p.etiqueta} className={styles.pilar}>
              <p className={styles.etiqueta}>{p.etiqueta}</p>
              <h3>{p.titulo}</h3>
              <p className={styles.texto}>{p.texto}</p>
            </article>
          ))}
        </div>

        <h3 className={styles.subtitulo}>Tu recorrido, paso a paso</h3>
        <ol className={styles.pasos}>
          {pasos.map((p, i) => (
            <li key={p.titulo} className={styles.paso}>
              <span className={styles.numero} aria-hidden="true">
                {i + 1}
              </span>
              <h4 className={styles.pasoTitulo}>{p.titulo}</h4>
              <p className={styles.texto}>{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
