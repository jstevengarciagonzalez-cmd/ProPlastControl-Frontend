# 🏭 ProPlastControl - Front-End

Módulo de interfaz gráfica para el sistema de gestión y control de inventarios de materia prima **ProPlastControl**, desarrollado como parte del programa de formación en **Análisis y Desarrollo de Software (ADSO)** del SENA.

---

## 📌 Descripción del Proyecto

**ProPlastControl Front-End** es una aplicación web SPA (Single Page Application) construida con **React** y **Vite**. Proporciona una interfaz limpia, modular y reactiva para el registro, visualización y administración en tiempo real de insumos y materias primas (PET, HDPE, PP, entre otros) utilizados en procesos de transformación de plásticos.

---

## 🚀 Tecnologías Utilizadas

* **Framework / Librería:** React 18+
* **Herramienta de Construcción:** Vite
* **Estilos y UI:** Bootstrap 5 (vía CDN)
* **Lenguaje:** JavaScript (ES6+) / JSX
* **Entorno de Desarrollo:** Node.js & npm

---

## 📁 Estructura del Proyecto

```text
ProPlastControl-Frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── FormularioInsumo.jsx   # Formulario de registro de materia prima
│   │   ├── Header.jsx             # Cabecera principal del sistema
│   │   ├── InsumoItem.jsx         # Componente individual de elemento de inventario
│   │   └── ListaInsumos.jsx       # Contenedor y mapeo de la lista de insumos
│   ├── App.jsx                    # Orquestador principal y manejo de estado global
│   ├── main.jsx                   # Punto de entrada de React
│   └── index.css                  # Estilos globales opcionales
├── dist/                          # Compilado de producción (generado tras npm run build)
├── index.html                     # Plantilla base e integración con Bootstrap CDN
├── package.json                   # Gestión de dependencias y scripts de ejecución
└── vite.config.js                 # Configuración del empaquetador Vite