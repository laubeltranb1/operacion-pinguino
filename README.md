# OPERACIÓN PINGÜINO 🐧

> Dossier 01 — Nivel de acceso: ULTRA
> ¿Qué tan lejos podría llegar un pingüino intentando conquistar Europa?

Presentación interactiva full-screen (estilo informe militar/OTAN, dark mode) pensada para
reemplazar un PowerPoint tradicional y proyectarse en una fiesta. 14 diapositivas navegables
con teclado, ratón/clic o swipe.

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre la URL que indique la terminal (por defecto `http://localhost:5173`). Para proyectar,
usa pantalla completa del navegador (F11 / Cmd+Ctrl+F).

Build de producción:

```bash
npm run build
npm run preview
```

## Navegación

- `→` / `Espacio` — avanzar (o revelar el punchline oculto en algunas diapositivas)
- `←` — retroceder
- Clic/toque en cualquier parte de la pantalla — avanzar
- Botones ‹ › fijos en los laterales
- Swipe izquierda/derecha en móvil
- Barra de progreso superior + contador `03 / 14`
- Botón "CLASSIFIED" (esquina superior, decorativo — no te dejará pasar)

Las diapositivas 04 (presupuesto operativo), 10 (respuesta de la OTAN) y 14 (conclusión)
esconden un punchline: el primer avance lo revela en lugar de pasar de diapositiva.

## Estructura del proyecto

```
src/
  App.tsx                 punto de entrada de la app
  components/
    Presentation.tsx      estado del mazo, navegación por teclado/swipe/clic
    Slide.tsx              "marco" visual compartido por cada diapositiva (grid, scanlines,
                           esquinas HUD, cabecera/pie clasificados, reloj en vivo)
    ProgressBar.tsx        barra de progreso + contador + insignia CLASSIFIED
    Navigation.tsx         botones ‹ › y pista de atajos de teclado
    PenguinIntelCard.tsx   ficha de inteligencia del pingüino (slide 03)
    ThreatMeter.tsx        medidor táctico reutilizable (barras segmentadas + contador)
    EuropeMap.tsx          mapa táctico estilizado con ruta animada España→Francia→Alemania→Suiza
    ui/                    átomos: contador animado, sello CLASSIFIED, radar, esquinas HUD,
                           silueta del pingüino (SVG dibujado a mano), pingüino armado que
                           marcha en bucle por el borde inferior de cada diapositiva
  slides/
    Slide01Portada.tsx ... Slide14Conclusion.tsx
    index.ts               registro ordenado de las 14 diapositivas
  hooks/useClock.ts        reloj UTC en vivo para las cabeceras
```

## Notas de diseño

- El mapa y el pingüino son ilustraciones SVG propias (no fotos de stock), para que la app
  funcione siempre sin depender de imágenes externas rotas. Si quieres sustituir la silueta
  por una foto real, reemplaza `<PenguinSilhouette />` en `Slide01Portada.tsx` por un
  `<img src="..." />` con la URL que prefieras.
- Paleta y tipografías están centralizadas en `tailwind.config.js` (colores `void`, `bone`,
  `alert`, `warn`, `tactical`) y en el `<link>` de Google Fonts de `index.html`
  (Oswald / Barlow / JetBrains Mono).
- Si al hacer `npm run dev` ves un error de un icono de `lucide-react` que no existe en tu
  versión instalada, basta con abrir el archivo indicado por el error y cambiar ese nombre de
  icono por otro equivalente de https://lucide.dev/icons.
- Los textos usan español neutro y sencillo, sin modismos regionales.

## Stack

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React. Sin dependencias
innecesarias.
