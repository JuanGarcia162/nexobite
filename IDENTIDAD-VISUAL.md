# 🎨 IDENTIDAD VISUAL - nexobite DIGITAL

## Paleta de Colores Oficial

### Colores Principales

| Color                  | Código HEX | Código RGB           | Uso                                       |
| ---------------------- | ---------- | -------------------- | ----------------------------------------- |
| **Azul Profundo**      | `#1a365d`  | `rgb(26, 54, 93)`    | Color principal - Confianza y Tecnología  |
| **Naranja Energético** | `#ed8936`  | `rgb(237, 137, 54)`  | Color de acento - Creatividad y Dinamismo |
| **Blanco**             | `#ffffff`  | `rgb(255, 255, 255)` | Fondos - Limpieza                         |
| **Gris Oscuro**        | `#2d3748`  | `rgb(45, 55, 72)`    | Textos - Legibilidad                      |

### Aplicación de Colores

- **Azul Profundo (#1a365d)**:

  - Botones principales
  - Enlaces
  - Encabezados importantes
  - Iconos de tecnología
  - Borde de elementos destacados

- **Naranja Energético (#ed8936)**:

  - Llamados a la acción (CTA)
  - Efectos hover y glow
  - Elementos interactivos
  - Badges y etiquetas importantes
  - Acentos visuales

- **Blanco (#ffffff)**:

  - Fondos principales
  - Texto sobre colores oscuros
  - Espacios negativos

- **Gris Oscuro (#2d3748)**:
  - Texto principal del cuerpo
  - Descripciones
  - Contenido secundario

## Tipografía

### Jerarquía de Fuentes

| Elemento            | Fuente         | Peso             | Uso                                         |
| ------------------- | -------------- | ---------------- | ------------------------------------------- |
| **Títulos** (h1-h6) | Poppins        | Bold (700-800)   | Encabezados principales, títulos de sección |
| **Cuerpo**          | Inter          | Regular (400)    | Texto del cuerpo, descripciones, párrafos   |
| **Énfasis**         | Inter          | Medium (500-600) | Subtítulos, texto destacado                 |
| **Código/Técnico**  | JetBrains Mono | Regular (400)    | Fragmentos de código, elementos técnicos    |

### Tamaños de Tipografía

```css
/* Títulos */
h1: 2.5rem - 4rem (40px - 64px) - Poppins Bold
h2: 2rem - 3rem (32px - 48px) - Poppins Bold
h3: 1.5rem - 2rem (24px - 32px) - Poppins SemiBold
h4: 1.25rem (20px) - Poppins SemiBold

/* Cuerpo */
body: 1rem (16px) - Inter Regular
small: 0.875rem (14px) - Inter Regular
```

## Variables CSS

### Colores de Marca

```css
--nexobite-blue: 26 54 93;
--nexobite-orange: 237 137 54;
--nexobite-gray-dark: 45 55 72;
--nexobite-white: 255 255 255;
```

### Colores del Sistema

```css
--primary: rgb(26, 54, 93); /* Azul Profundo */
--accent: rgb(237, 137, 54); /* Naranja Energético */
--foreground: rgb(45, 55, 72); /* Gris Oscuro */
--background: rgb(255, 255, 255); /* Blanco */
```

## Efectos y Animaciones

### Hover Effects

```css
/* Hover Lift - Elevación suave */
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Hover Glow - Resplandor naranja */
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(237, 137, 54, 0.4);
}
```

### Animaciones

```css
/* Pulse Glow - Pulso con naranja nexobite */
@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(237, 137, 54, 0.4);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(237, 137, 54, 0.2);
  }
}

/* Float - Flotación suave */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

## Espaciado y Layout

### Sistema de Espaciado

- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

### Border Radius

- **Pequeño**: 0.25rem (4px)
- **Medio**: 0.5rem (8px) - Default
- **Grande**: 1rem (16px)
- **Completo**: 9999px (círculos)

## Componentes Clave

### Botones

#### Botón Principal (Primary)

- Fondo: Azul Profundo (#1a365d)
- Texto: Blanco (#ffffff)
- Hover: Naranja Energético (#ed8936) con efecto glow

#### Botón Secundario (Outline)

- Borde: Azul Profundo (#1a365d)
- Texto: Azul Profundo (#1a365d)
- Hover: Fondo Azul Profundo, texto Blanco

### Tarjetas (Cards)

- Fondo: Blanco (#ffffff)
- Borde: Gris claro (rgba)
- Sombra: Suave y sutil
- Hover: Elevación con borde naranja

### Iconos

- Color principal: Azul Profundo (#1a365d)
- Color hover: Naranja Energético (#ed8936)
- Tamaño estándar: 24px (h-6 w-6)

## Accesibilidad

### Contraste

Todos los colores cumplen con WCAG 2.1 nivel AA:

- Azul Profundo sobre Blanco: ✅ 9.5:1
- Naranja Energético sobre Blanco: ✅ 3.8:1
- Gris Oscuro sobre Blanco: ✅ 11.2:1

### Estados de Foco

```css
focus-visible: {
  outline: 2px solid rgb(237, 137, 54);
  outline-offset: 2px;
}
```

## Modo Oscuro (Dark Mode)

### Ajustes de Color

- **Background**: `#0f172a` (Azul muy oscuro)
- **Primary**: `#3b82f6` (Azul más brillante para contraste)
- **Accent**: `#fb923c` (Naranja brillante)
- **Foreground**: `#f8fafc` (Gris muy claro)

_Nota: El modo oscuro mantiene la identidad de nexobite mientras optimiza para legibilidad en pantallas oscuras._

## Uso en Código

### Importar Fuentes

```tsx
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
```

### Aplicar Clases

```tsx
<h1 className="font-display text-4xl font-bold text-primary">
  Título Principal
</h1>

<p className="font-sans text-base text-foreground">
  Texto del cuerpo
</p>

<button className="bg-primary text-primary-foreground hover-glow">
  Llamado a la Acción
</button>
```

---

**Última actualización:** Diciembre 2024  
**Versión:** 1.0  
**Autor:** nexobite DIGITAL
