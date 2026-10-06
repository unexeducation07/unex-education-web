# UNEX Education: sitio principal

Lee este archivo completo antes de escribir código.

## Qué es UNEX Education
Plataforma educativa que combina **storytelling y gamificación**. Cada curso es un universo
temático (aventura, magia, portales, mazmorras, videojuegos, futuro).
Idea central de la marca: **"Donde los mundos del aprendizaje se cruzan."**
Pilares: Conexión, Narrativa, Gamificación, Autonomía, Calidad.

## Qué es este repositorio
El **sitio principal**: la puerta de entrada a todos los productos. Incluye además el catálogo
de **UNEX Apps**. No tiene base de datos ni inicio de sesión.

- Publicación: Vercel (plan gratuito por ahora) → `https://unexeducation.vercel.app`
- Dominio futuro: `unexeducation.co` (cada producto pasará a un subdominio)

## Arquitectura (decidida, no cambiar sin consultar)
Cada producto es independiente: su propio repositorio, proyecto de Vercel y base de datos Supabase.
Este sitio solo los enlaza.

| Producto | Qué es | Para quién | Dónde vive |
|---|---|---|---|
| UNEX Academy | Cursos cortos gamificados por universos | Estudiantes | Repo propio + Supabase propio. URL: aún no creada |
| UNEX Gestión | Gestión escolar: matrículas, notas, asistencia, reportes | Rectores y coordinación | Repo propio + Supabase propio. URL: aún no creada |
| UNEX Evaluación | Exámenes y evaluaciones con resultados al instante | Docentes e instituciones | Repo propio + Supabase propio. URL: aún no creada |
| UNEX Apps | Catálogo de microapps sin base de datos (tarjetas que redirigen) | Toda la comunidad | **Este repo**, ruta `/apps` |

**Las direcciones de Academy, Gestión y Evaluación todavía no existen**; el usuario las creará más
adelante. No las pidas ni las inventes. Ponlas en **un solo archivo de configuración**
(por ejemplo `src/config/productos.ts`) con `url: null`. Mientras una URL sea `null`, su tarjeta
muestra el estado "Próximamente" y el botón no navega. Cuando el usuario tenga la dirección,
basta con cambiar ese archivo.

Nombres previstos: `unex-academy.vercel.app`, `unex-gestion.vercel.app`, `unex-evaluacion.vercel.app`.
Futuro: `academy.`, `gestion.`, `evaluacion.` y `apps.unexeducation.co`.

## Stack
- Pregunta al usuario con qué están hechas Academy y Gestión y usa lo mismo.
  Si no lo sabe o es Next.js: **Next.js (App Router) + TypeScript**, CSS propio con los tokens de
  `docs/marca/tokens.css`. Sin librerías de UI pesadas.
- Fuentes con `next/font/google`: **Unbounded** (títulos: 500, 600, 700) y **Lexend** (texto: 300, 400, 500).
- El directorio no está vacío (tiene `CLAUDE.md` y `docs/`), así que `create-next-app` puede
  rechazarlo. Genera el proyecto en una carpeta temporal y mueve los archivos, o configúralo a mano.

## Marca (obligatorio)
Todo está en `docs/marca/`: manual completo, tokens CSS y 23 SVG del logo.
- **Nunca redibujes ni modifiques el logo.** Copia los SVG que necesites a `public/brand/` y úsalos
  con `<img>`. El logo animado (`unex-logo-animado-negativo.svg`) funciona dentro de `<img>`.
- Favicon: `unex-favicon.svg`. Ícono de app: `unex-app-icon.svg`.
- Colores: solo los tokens. Nova (dorado) es solo para la estrella y los logros, nunca texto
  sobre fondo claro. Proporción aproximada: Polvo 60 %, Cosmos 25 %, color de universo 10 %, Nova 5 %.
- Cada submarca tiene su color: Academy = Aurora, Gestión = Índigo, Evaluación = Nebulosa, Apps = Plasma.
- Unbounded con moderación (títulos). Lexend para todo el texto.

## Páginas
### Inicio (`/`)
1. **Portada** sobre fondo Cosmos: logo animado, la frase "Donde los mundos del aprendizaje se
   cruzan." y un llamado a explorar los universos. No uses alto 100vh.
2. **Los cuatro universos**: una tarjeta por producto con su color, para quién es, una frase y un
   botón hacia su URL.
3. **Cómo se aprende en UNEX**: storytelling y gamificación explicados en palabras simples.
4. **Pie de página**: logo, enlaces a los productos y año.

### UNEX Apps (`/apps`)
- Catálogo de tarjetas leído de **un solo archivo de datos** (por ejemplo `src/data/apps.ts`).
  Agregar una app = agregar una entrada. Sin base de datos.
- Campos de cada app: `nombre`, `descripcion` (una línea), `url`, `para` (docentes | estudiantes | todos),
  `icono`, `estado` (disponible | proximamente), `externa` (boolean).
- Las apps propias abren en la misma pestaña; las externas en una pestaña nueva.
- Filtro simple por público. Las tarjetas "próximamente" se muestran pero no se pueden pulsar.
- Lista de microapps: **PENDIENTE (pedir al usuario)**. Mientras tanto, usa 3 o 4 ejemplos
  marcados claramente como ejemplo.

### Encabezado común
Logo horizontal y un selector de universos (Academy, Gestión, Evaluación, Apps). Debe ser fácil de
copiar después a los otros tres proyectos.

## Calidad
- Responsive desde 360 px. Modo claro y oscuro con los tokens.
- Accesible: contraste AA, foco visible, textos alternativos, `prefers-reduced-motion`.
- Rápido: sitio estático siempre que se pueda.
- Textos en español, en tono cercano y claro, sin tecnicismos para el usuario final.

## Forma de trabajar
- El usuario quiere avanzar **paso a paso, sin prisa, priorizando estabilidad**.
- Antes de cada cambio grande, explica el plan en pocas líneas y espera su visto bueno.
- Commits pequeños con mensajes en español.
- Nunca subas secretos ni archivos `.env`.
- El usuario publica con GitHub Desktop (Push origin); Vercel despliega automáticamente.
