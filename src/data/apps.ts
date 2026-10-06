// Catálogo de UNEX Apps: el ÚNICO lugar donde se definen las microapps.
// Agregar una app = agregar una entrada a la lista `apps`.
//
// IMPORTANTE: las entradas con `ejemplo: true` son de muestra y se quitarán cuando
// lleguen las microapps reales.

export type Publico = "docentes" | "estudiantes" | "todos";
export type EstadoApp = "disponible" | "proximamente";

export interface App {
  /** Nombre corto de la app. */
  nombre: string;
  /** Una sola línea que explica qué hace. */
  descripcion: string;
  /** Dirección de la app. Las propias, relativas ("/..."); las externas, completas ("https://..."). */
  url: string;
  /** Para quién es. "todos" aparece en cualquier filtro. */
  para: Publico;
  /** Un emoji que la represente. */
  icono: string;
  /** "proximamente": se muestra pero no se puede abrir. */
  estado: EstadoApp;
  /** true = la app es de otro sitio y se abre en una pestaña nueva. */
  externa: boolean;
  /** true = entrada de muestra; se ve con la etiqueta "Ejemplo". */
  ejemplo?: boolean;
}

export const apps: App[] = [
  {
    nombre: "Ruleta de nombres",
    descripcion: "Elige al azar quién participa en clase, sin repetir.",
    url: "/microapps/ruleta-de-nombres",
    para: "docentes",
    icono: "🎯",
    estado: "proximamente",
    externa: false,
    ejemplo: true,
  },
  {
    nombre: "Tarjetas de repaso",
    descripcion: "Crea tarjetas de pregunta y respuesta para estudiar a tu ritmo.",
    url: "/microapps/tarjetas-de-repaso",
    para: "estudiantes",
    icono: "🃏",
    estado: "proximamente",
    externa: false,
    ejemplo: true,
  },
  {
    nombre: "Cronómetro de retos",
    descripcion: "Cuenta regresiva grande y clara para actividades por tiempo.",
    url: "/microapps/cronometro-de-retos",
    para: "todos",
    icono: "⏱️",
    estado: "proximamente",
    externa: false,
    ejemplo: true,
  },
  {
    nombre: "Calculadora gráfica",
    descripcion: "Dibuja funciones y explora geometría con GeoGebra, gratis.",
    url: "https://www.geogebra.org/calculator",
    para: "todos",
    icono: "📐",
    estado: "disponible",
    externa: true,
    ejemplo: true,
  },
];
