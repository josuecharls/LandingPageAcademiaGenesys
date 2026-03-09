# 🎓 Academia Genesys — Landing Page

Landing page moderna y premium para **Academia Genesys**, una academia de clases personalizadas para todos los niveles educativos: Primaria, Secundaria, Pre-Universitario y Universitario.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Componentes Principales](#-componentes-principales)
- [Personalización](#-personalización)
- [Despliegue](#-despliegue)
- [Licencia](#-licencia)

---

## 📖 Descripción

Sitio web tipo landing page diseñado para captar estudiantes interesados en clases personalizadas. Presenta información sobre los niveles disponibles, planes de precios con opciones individuales y grupales, y un formulario de contacto funcional integrado con Google Apps Script para la recepción de datos.

El diseño utiliza un tema **oscuro premium** con acentos de neón, glassmorphism, animaciones geométricas y tipografía moderna (Inter + Space Grotesk).

---

## ✨ Características

- 🌙 **Tema oscuro premium** con acentos de neón (cian, violeta, esmeralda)
- 🔮 **Efectos glassmorphism** en tarjetas y componentes
- 🎯 **Navegación fluida** con scroll suave entre secciones
- 📱 **Diseño responsive** adaptable a todos los dispositivos
- 💰 **Selector de niveles** — Primaria, Secundaria, Pre-Universitario, Universitario
- 💳 **Sección de precios** con toggle mensual/anual y planes individuales/grupales
- 📝 **Formulario de contacto** con validación en tiempo real (Zod + React Hook Form)
- 📨 **Envío de datos** vía Google Apps Script
- 🔔 **Notificaciones toast** con Sonner
- ⚡ **Animaciones suaves** y micro-interacciones
- 🔍 **SEO optimizado** con meta tags descriptivos

---

## 🛠 Tecnologías

| Categoría          | Tecnología                                                     |
| ------------------ | -------------------------------------------------------------- |
| **Framework**      | [React 19](https://react.dev/)                                 |
| **Lenguaje**       | [TypeScript 5.9](https://www.typescriptlang.org/)              |
| **Bundler**        | [Vite 7](https://vite.dev/)                                    |
| **Estilos**        | [Tailwind CSS 3.4](https://tailwindcss.com/)                   |
| **Estado global**  | [Zustand 5](https://zustand.docs.pmnd.rs/)                     |
| **Formularios**    | [React Hook Form 7](https://react-hook-form.com/)              |
| **Validación**     | [Zod 4](https://zod.dev/)                                      |
| **HTTP**           | [Axios](https://axios-http.com/)                               |
| **Iconos**         | [Lucide React](https://lucide.dev/)                            |
| **Notificaciones** | [Sonner](https://sonner.emilkowal.dev/)                        |
| **Linting**        | [ESLint 9](https://eslint.org/) + TypeScript ESLint            |

---

## 📁 Estructura del Proyecto

```
PageGenesys/
├── public/
│   └── logo.png                  # Logo de la academia
├── src/
│   ├── assets/                   # Recursos estáticos
│   ├── components/
│   │   ├── Navbar.tsx            # Barra de navegación con menú responsivo
│   │   ├── Hero.tsx              # Sección principal con CTA
│   │   ├── LevelSelector.tsx     # Selector de niveles educativos
│   │   ├── PricingSection.tsx    # Planes y precios (individual/grupal)
│   │   ├── ContactForm.tsx       # Formulario de contacto con validación
│   │   └── Footer.tsx            # Pie de página
│   ├── data/
│   │   └── pricing.ts            # Datos de precios y planes
│   ├── lib/
│   │   └── submitForm.ts         # Lógica de envío a Google Apps Script
│   ├── store/
│   │   └── useStore.ts           # Estado global (Zustand)
│   ├── App.tsx                   # Componente raíz
│   ├── main.tsx                  # Punto de entrada
│   └── index.css                 # Estilos globales y animaciones
├── index.html                    # HTML principal
├── tailwind.config.js            # Configuración de Tailwind CSS
├── vite.config.ts                # Configuración de Vite
├── tsconfig.json                 # Configuración de TypeScript
├── eslint.config.js              # Configuración de ESLint
└── package.json                  # Dependencias y scripts
```

---

## 📦 Requisitos Previos

- **Node.js** >= 18.x
- **npm** >= 9.x (o [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/))

---

## 🚀 Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/LandingPageAcademiaGenesys.git
   cd LandingPageAcademiaGenesys/PageGenesys
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**

   El servidor se iniciará en `http://localhost:5173` por defecto.

---

## 📜 Scripts Disponibles

| Comando             | Descripción                                   |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Inicia el servidor de desarrollo con HMR      |
| `npm run build`     | Compila TypeScript y genera el build de producción |
| `npm run preview`   | Previsualiza el build de producción localmente |
| `npm run lint`      | Ejecuta ESLint para verificar el código        |

---

## 🧩 Componentes Principales

### `Navbar`
Barra de navegación fija con logo, enlaces a secciones y menú hamburguesa para dispositivos móviles. Incluye efecto de fondo al hacer scroll.

### `Hero`
Sección principal con título llamativo, descripción, botones de acción (CTA) y estadísticas destacadas. Incorpora animaciones geométricas de fondo.

### `LevelSelector`
Muestra los niveles educativos disponibles (Primaria, Secundaria, Pre-Universitario, Universitario) con tarjetas interactivas.

### `PricingSection`
Presenta los planes de precios con:
- Toggle entre facturación **mensual** y **anual** (con ahorro)
- Opciones para planes **individuales** y **grupales**
- Tarjetas con efecto glassmorphism y badge de "Más Popular"

### `ContactForm`
Formulario funcional con:
- Campos: nombre, email, celular, nivel y mensaje
- Validación en tiempo real con **Zod**
- Envío de datos a **Google Apps Script**
- Notificaciones de éxito/error con **Sonner**
- Beneficios destacados junto al formulario

### `Footer`
Pie de página con enlaces de navegación, información de contacto y créditos.

---

## 🎨 Personalización

### Colores y Tema
Los colores personalizados se definen en `tailwind.config.js`. El tema principal incluye:
- **Fondo oscuro:** tonos basados en `hsl(220, ...)`
- **Acentos neón:** cian (`neon-cyan`), violeta (`neon-violet`), esmeralda (`neon-emerald`)
- **Glass:** efectos de transparencia y difuminado

### Tipografía
Se utilizan dos fuentes de Google Fonts:
- **Inter** — Para el cuerpo del texto
- **Space Grotesk** — Para títulos y encabezados

### Precios
Los datos de precios se encuentran centralizados en `src/data/pricing.ts`. Modifica este archivo para actualizar planes, precios y características.

### Formulario de Contacto
La URL del Google Apps Script se configura en `src/lib/submitForm.ts`. Reemplázala con tu propia URL de despliegue del script.

---

## 🌐 Despliegue

### Build de Producción

```bash
npm run build
```

Los archivos generados se guardan en la carpeta `dist/`. Puedes desplegarlos en cualquier servicio de hosting estático:

- [Vercel](https://vercel.com/) — `npx vercel`
- [Netlify](https://netlify.com/) — Arrastra la carpeta `dist/` o conecta tu repositorio
- [GitHub Pages](https://pages.github.com/) — Configura el directorio de publicación como `dist/`
- [Firebase Hosting](https://firebase.google.com/products/hosting)

### Variables de Entorno

Actualmente el proyecto no requiere variables de entorno. La URL del endpoint de contacto está definida directamente en `src/lib/submitForm.ts`.

---

## 📄 Licencia

Este proyecto es de uso privado. Todos los derechos reservados © Academia Genesys.
