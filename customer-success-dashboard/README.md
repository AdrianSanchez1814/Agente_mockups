# Customer Success Dashboard

Dashboard de Customer Success para ClickEdu desarrollado en React con gráficos interactivos usando Recharts.

![ClickEdu](https://img.shields.io/badge/ClickEdu-Dashboard-FD3D4A)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB)
![Recharts](https://img.shields.io/badge/Recharts-2.12.0-8884D8)

## 📋 Descripción

Este proyecto implementa un dashboard de Customer Success que muestra las métricas clave del negocio, incluyendo:

- **KPIs Principales**: Centros Activos, ARR, Churn Rate, Expansion Revenue, Usuarios, etc.
- **Gráficos de Evolución**: Tendencias temporales de métricas clave
- **Análisis Comparativo**: Nuevos vs Bajas, distribución por producto y región
- **Tablas de Datos**: Resumen detallado por región

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio del proyecto
cd customer-success-dashboard

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

## 📁 Estructura del Proyecto

```
customer-success-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── icons/           # Iconos del dashboard
│   ├── components/
│   │   ├── Header/          # Componente del header con logo
│   │   ├── KPICard/         # Tarjeta individual de KPI
│   │   ├── KPISection/      # Sección con grid de KPIs
│   │   ├── BarChartSection/ # Gráfico de barras horizontales
│   │   ├── LineChartSection/# Gráfico de líneas
│   │   ├── MultiLineChartSection/ # Gráfico de líneas múltiples
│   │   ├── StackedBarChartSection/ # Gráfico de barras apiladas
│   │   ├── DataTable/       # Tabla de datos
│   │   ├── Dashboard/       # Componente padre principal
│   │   └── index.js         # Exports de componentes
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 Componentes

### Header
Encabezado con el logo de ClickEdu y título del dashboard.

### KPISection
Grid de 8 tarjetas KPI que muestran las métricas principales:
- Centros Activos
- ARR (Annual Recurring Revenue)
- Churn Rate
- Expansion Revenue
- Usuarios
- Tickets con Documentación
- Tiempo Medio de Resolución
- Tickets Resueltos

### BarChartSection
Gráfico de barras horizontales para mostrar la tipología de producto (Básico, Standard, Premium, Enterprise).

### LineChartSection
Gráfico de líneas para mostrar la evolución temporal de métricas como Centros Activos y ARR.

### MultiLineChartSection
Gráfico de líneas múltiples para comparar Nuevos vs Bajas.

### StackedBarChartSection
Gráfico de barras apiladas para mostrar la distribución por región y producto.

### DataTable
Tabla de datos con resumen por región incluyendo centros, ARR y Churn.

## 🎯 Características

- ✅ Diseño responsive
- ✅ Gráficos interactivos con tooltips
- ✅ Paleta de colores consistente con la marca ClickEdu
- ✅ Componentes reutilizables
- ✅ Código documentado
- ✅ Estilos modularizados por componente

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Rojo Principal | `#FD3D4A` | Acciones, destacados |
| Gris Oscuro | `#3D3D3D` | Textos principales |
| Gris Medio | `#666666` | Textos secundarios |
| Gris Claro | `#8F8F8F` | Textos auxiliares |
| Azul | `#64A9FF` | Gráficos secundarios |
| Rojo Oscuro | `#CA4536` | Indicadores negativos |
| Fondo | `#F5F5F5` | Background general |

## 📦 Dependencias

- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **recharts**: ^2.12.0

## 🛠️ Scripts Disponibles

```bash
npm start    # Inicia el servidor de desarrollo
npm build    # Genera la build de producción
npm test     # Ejecuta los tests
npm eject    # Eyecta la configuración de CRA
```

## 📝 Licencia

Este proyecto es propiedad de ClickEdu - A Sanoma Company.

---

Desarrollado con ❤️ para ClickEdu
