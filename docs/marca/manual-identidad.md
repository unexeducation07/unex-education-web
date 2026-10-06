# UNEX Education: Manual de Identidad Corporativa

**Versión:** 2.1 (añade tonos de texto por universo)
**Fecha:** 2026-10-06
**Archivos del logo:** `04_Branding/logo/` (23 SVG)

---

## 1. Concepto

**Idea central:** donde los mundos del aprendizaje se cruzan.

El símbolo representa la filosofía de UNEX. Ninguna parte está solo para adornar:

| Elemento | Significado | Pilar |
|---|---|---|
| Dos órbitas | Cada una es un mundo de aprendizaje: un curso, un universo temático, una submarca | Narrativa |
| Cruce entrelazado | Cada órbita pasa una vez por encima y otra por debajo de la otra. Ningún mundo domina; se sostienen entre sí | Conexión |
| Estrella guía (centro) | Quien aprende, en el punto donde todo se cruza. Es una estrella norte: más alta que ancha | Calidad / orientación |
| Dos planetas | Viajeros que recorren las órbitas a ritmos distintos: cada estudiante avanza a su paso | Autonomía / gamificación |
| Estrella en la X | La X de UNEX se abre en su cruce para alojar la misma estrella. Símbolo y nombre dicen lo mismo | Conexión |

### La animación cuenta una historia (≈3 s)
1. **0,0 s:** nace la estrella guía
2. **0,4 s:** se trazan los dos mundos
3. **1,0 s:** aparece el nombre, letra por letra
4. **1,8 s:** brilla la estrella de la X y comienza el viaje (los planetas orbitan sin fin)

La animación respeta `prefers-reduced-motion`: si el usuario pide menos movimiento, el logo aparece completo y quieto.

---

## 2. Construcción

| Parte | Medida |
|---|---|
| Órbitas | Elipses de 72 × 200 u |
| Inclinación | ±34°, **el mismo ángulo de las diagonales de la X** |
| Trazo de órbita | 8,5 u |
| Entrelazado | Hueco de 16,5 u en cada cruce inferior |
| Estrella guía | 76 × 52 u (proporción vertical 1,46) |
| Nombre "UNEX" | Altura 100 u, astas de 14 u, letras dibujadas a medida (no es una fuente) |
| Subtítulo | Trazo monolínea de 3 u, mismo ancho que "UNEX" |

Todo el logo es geometría exacta. No depende de ninguna fuente instalada.

---

## 3. Versiones del logo

| Versión | Archivo | Cuándo usarla |
|---|---|---|
| Horizontal | `unex-logo-horizontal.svg` / `-negativo` | Por defecto: web, documentos, encabezados |
| Horizontal animada | `unex-logo-animado.svg` / `-negativo` | Portada del sitio, pantallas de carga, video |
| Vertical | `unex-logo-vertical.svg` / `-negativo` | Espacios cuadrados, carteles, redes |
| Isotipo | `unex-isotipo.svg` / `-negativo` | Cuando la marca ya está presente en la página |
| Isotipo animado | `unex-isotipo-animado.svg` | Pantalla de carga de las apps |
| Solo nombre | `unex-wordmark.svg` / `-negativo` | Espacios muy horizontales |
| Monocromo | `unex-logo-monocromo.svg` / `-blanco` | Impresión a una tinta, grabados, sellos |
| Ícono de app | `unex-app-icon.svg` | Tiendas de apps, accesos directos |
| Favicon | `unex-favicon.svg` | Por debajo de 24 px (trazos más gruesos, sin planetas) |

**Negativo** = para fondos oscuros (Cosmos).

### Área de respeto y tamaños mínimos
- **Unidad x** = altura de la estrella de la X. Deja **1x libre** en los cuatro lados.
- **Logo horizontal:** mínimo 160 px de ancho en pantalla, 40 mm impreso.
- **Isotipo:** mínimo 24 px. Por debajo, usa el favicon.

### Usos incorrectos
- No estirar ni comprimir.
- No cambiar los colores.
- No rotar ni inclinar.
- No añadir sombras, contornos ni ponerlo sobre fondos que compitan.

---

## 4. Submarcas: las plataformas UNEX

**Vocabulario:** la palabra *universo* se reserva para los mundos temáticos de los cursos de Academy (aventura, magia, portales, mazmorras, videojuegos, futuro). Academy, Gestión, Evaluación y Apps son *plataformas*. Así nadie confunde un curso con un producto.

Conservan el símbolo y el nombre. Cambian el color de los planetas y la palabra inferior.

| Submarca | Color | Hex | Versión clara (sobre Cosmos) | Para |
|---|---|---|---|---|
| **UNEX Academy** | Aurora | `#1FBFA9` | `#1FBFA9` | Estudiantes: cursos gamificados por universos |
| **UNEX Gestión** | Índigo | `#5866F5` | `#8E98FF` | Rectores y coordinación |
| **UNEX Evaluación** | Nebulosa | `#EC4A82` | `#F27BA3` | Docentes e instituciones |
| **UNEX Apps** | Plasma | `#A35CF0` | `#C597FF` | Toda la comunidad |

Archivos en `logo/submarcas/`, cada uno con su versión `-negativo`.

---

## 5. Color

Un cielo nocturno con una sola fuente de luz.

### Base
| Nombre | Hex | RGB | Uso |
|---|---|---|---|
| **Cosmos** | `#15173F` | 21, 23, 63 | Fondo de marca y texto principal |
| **Polvo estelar** | `#F5F4FB` | 245, 244, 251 | Fondo claro. Reemplaza al blanco puro en superficies grandes |
| **Nova** | `#F8B630` | 248, 182, 48 | Solo para la estrella y los logros. Si todo brilla, nada guía |

### Universos (submarcas)
| Nombre | Hex | RGB |
|---|---|---|
| Aurora | `#1FBFA9` | 31, 191, 169 |
| Índigo | `#5866F5` | 88, 102, 245 |
| Nebulosa | `#EC4A82` | 236, 74, 130 |
| Plasma | `#A35CF0` | 163, 92, 240 |

### Proporción en una pantalla típica
Polvo estelar 60 %, Cosmos 25 %, color del universo 10 %, Nova 5 %.

### Reglas
- Nova nunca va como texto sobre fondos claros (no alcanza contraste mínimo).
- Para texto de submarca sobre Cosmos usa las versiones claras de la tabla de submarcas.
- Los colores de estado (éxito, alerta, error) se definirán en la guía de componentes y no reutilizan los colores de universo.

### Color de universo en la interfaz (v2.1)
El color base de cada universo **no alcanza contraste AA como texto** sobre fondo claro. Por eso:

- **Color base** (Aurora, Índigo, Nebulosa, Plasma): solo elementos gráficos, como franjas, puntos, íconos, ilustraciones y el logo de submarca.
- **Texto y botones** sobre fondo claro: usa Cosmos, o el **tono oscuro** del universo.
- **Texto** sobre fondo Cosmos: usa el **tono claro** del universo.

| Universo | Base (gráficos) | Tono oscuro (texto/botón en claro) | Tono claro (texto en Cosmos) |
|---|---|---|---|
| Aurora (Academy) | `#1FBFA9` | `#137365` (5,2:1) | `#1FBFA9` (7,4:1) |
| Índigo (Gestión) | `#5866F5` | `#4050F4` (5,2:1) | `#8E98FF` (6,6:1) |
| Nebulosa (Evaluación) | `#EC4A82` | `#C81553` (5,2:1) | `#F27BA3` (6,6:1) |
| Plasma (Apps) | `#A35CF0` | `#892EEC` (5,2:1) | `#C597FF` (7,5:1) |

Sobre los tonos oscuros, el texto blanco alcanza 5,7:1, así que sirven como fondo de botón.
El logo está exento de esta regla: las versiones de submarca conservan su color base.

### Modo oscuro (interfaz)
| Token | Claro | Oscuro |
|---|---|---|
| Fondo | `#F5F4FB` | `#0D0F2B` |
| Superficie | `#FFFFFF` | `#161941` |
| Texto | `#15173F` | `#EEEDF9` |
| Texto secundario | `#585A7E` | `#A3A5CB` |
| Líneas | `#DDDBEE` | `#2A2D5C` |

---

## 6. Tipografía

El logo no usa fuentes. Para todo lo demás, dos familias gratuitas de Google Fonts:

| Rol | Fuente | Por qué |
|---|---|---|
| Títulos | **Unbounded** (500, 600, 700) | Ancha y geométrica, con energía de videojuego. Usar con moderación |
| Texto | **Lexend** (300, 350, 400, 500) | Diseñada para mejorar la fluidez lectora: ideal para estudiantes |

### Escala
| Rol | Fuente | Tamaño | Peso |
|---|---|---|---|
| Título 1 | Unbounded | 56 px | 700 |
| Título 2 | Unbounded | 34 px | 600 |
| Título 3 | Unbounded | 20 px | 500 |
| Entradilla | Lexend | 19 px | 300 |
| Texto | Lexend | 17 px | 350 |
| Botones y etiquetas | Lexend | 14 px | 500 |

---

## 7. Uso técnico del logo en la web

```html
<!-- Animado en la portada -->
<img src="/brand/unex-logo-animado.svg" alt="UNEX Education" width="360">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/brand/unex-favicon.svg">
```

- Los SVG pesan entre 2 y 7 KB y no cargan nada externo.
- Los animados funcionan dentro de `<img>` sin JavaScript.
- Para registro de marca o imprenta: abrir el SVG en Illustrator o Figma y convertir trazos a contornos (Objeto > Contorno de trazo) antes de enviar.

---

## 8. Pendiente

- [ ] Guía de componentes (botones, formularios, tarjetas, colores de estado)
- [ ] Iconografía propia
- [ ] Estilo de ilustración por universo (aventura, magia, portales, mazmorras, videojuegos, futuro)
- [ ] Exportar PNG del ícono de app (1024, 512, 192, 180 px) para las tiendas
- [ ] Solicitud de registro en la SIC (clases 41 y 42) con la versión monocroma

---
*Versión 2.0. Última actualización: 2026-10-06.*
