# Customer Success Overview Dashboard

Dashboard de Customer Success para ClickEdu, desarrollado en React siguiendo el mockup de Figma.

## 📋 Descripción

Este proyecto es una implementación del dashboard "Customer Success Overview" que muestra métricas clave de renovaciones, segmentación y evolución temporal de datos.

## 🏗️ Estructura del Proyecto

```
customer-success-overview/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   └── index.js
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Sidebar.css
│   │   │   └── index.js
│   │   ├── MenuBar/
│   │   │   ├── MenuBar.jsx
│   │   │   ├── MenuBar.css
│   │   │   └── index.js
│   │   ├── KPICard/
│   │   │   ├── KPICard.jsx
│   │   │   ├── KPICard.css
│   │   │   └── index.js
│   │   ├── KPISection/
│   │   │   ├── KPISection.jsx
│   │   │   ├── KPISection.css
│   │   │   └── index.js
│   │   ├── LollipopChart/
│   │   │   ├── LollipopChart.jsx
│   │   │   ├── LollipopChart.css
│   │   │   └── index.js
│   │   ├── SegmentBarChart/
│   │   │   ├── SegmentBarChart.jsx
│   │   │   ├── SegmentBarChart.css
│   │   │   └── index.js
│   │   ├── EvolutiveChart/
│   │   │   ├── EvolutiveChart.jsx
│   │   │   ├── EvolutiveChart.css
│   │   │   └── index.js
│   │   └── ChartsSection/
│   │       ├── ChartsSection.jsx
│   │       ├── ChartsSection.css
│   │       └── index.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 📊 Componentes y Tipos de Gráficos

### 1. Header
- **Tipo:** Navegación / Branding
- **Descripción:** Cabecera con logo de ClickEdu, título de sección y filtros de fecha

### 2. Sidebar
- **Tipo:** Navegación lateral
- **Descripción:** Barra lateral con iconos de navegación

### 3. MenuBar
- **Tipo:** Navegación por tabs
- **Descripción:** Barra de menú con tabs (Overview, Renovaciones, etc.)

### 4. KPICard / KPISection
- **Tipo:** Tarjetas KPI (KPI Cards)
- **Descripción:** Indicadores clave de rendimiento:
  - Total a renovar: 10,9 M€
  - Renovado: 4,6 M€ | 42,0%
  - Por renovar: 5,7 M€ | 52,5%
  - Bajas: 0,6 M€ | 5,5%
  - Ventas adicionales: 1,8 M€ | +5,5%

### 5. LollipopChart
- **Tipo:** Gráfico de Barras Horizontales (Lollipop Style)
- **Librería:** Recharts
- **Datos:** Por Comunidad Autónoma
  - Cataluña: 1,2 M€ (26%)
  - Madrid: 1,1 M€ (23%)
  - Andalucía: 0,9 M€ (20%)
  - Valencia: 0,7 M€ (16%)
  - Baleares: 0,7 M€ (15%)

### 6. SegmentBarChart
- **Tipo:** Gráfico de Barras Verticales
- **Librería:** Recharts
- **Datos:**
  - Por Segmento: Privados, Concertados, Público
  - Por Tier: Tier 1, Tier 2, Tier 3

### 7. EvolutiveChart
- **Tipo:** Gráfico de Barras Agrupadas Evolutivo
- **Librería:** Recharts
- **Descripción:** Comparativa Año Anterior vs Año Actual con línea de referencia del presupuesto

## 🚀 Instalación y Ejecución

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio
cd customer-success-overview

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 📦 Dependencias

- **React 18** - Framework principal
- **Recharts** - Librería de gráficos
- **Lucide React** - Iconos

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Primary | `#FD3D4A` | Color principal, menú, acentos |
| Secondary | `#EF3340` | Botones, bordes activos |
| Text Dark | `#000000` | Texto principal |
| Text Gray | `#666666` | Títulos secundarios |
| Text Light | `#8F8F8F` | Texto terciario |
| Chart Red | `#CA4536` | Indicadores negativos |
| Chart Blue | `#64A9FF` | Barras año actual |
| Chart Blue Light | `#B7E0FB` | Barras año anterior |
| Chart Green | `#3DC331` | Indicadores positivos |

## 📱 Responsive

El dashboard incluye breakpoints responsivos para:
- Desktop (> 1400px)
- Tablet (768px - 1400px)
- Mobile (< 768px)

## 🔗 Mockup de Referencia

[Figma - Customer Success Overview](https://www.figma.com/design/BOZlCNVoQU0NG0Bao2BRMf/CdM_DataStorytelling?node-id=1950-33965)

## 📝 Licencia

Proyecto privado - ClickEdu
