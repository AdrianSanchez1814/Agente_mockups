# ClickEdu Customer Success Dashboard

Dashboard de Customer Success para ClickEdu desarrollado en React.

## 📋 Descripción

Este proyecto replica el mockup del dashboard de Customer Success de ClickEdu, incluyendo:

- **Header**: Logo, título y selector de fechas
- **Sidebar**: Menú de navegación lateral con iconos
- **Navbar**: Tabs de navegación horizontal
- **KPI Cards**: 5 indicadores clave de rendimiento
- **Gráficos de Distribución**:
  - Por Comunidad Autónoma (Barras Horizontales)
  - Por Segmento (Barras Verticales)
  - Por Tier (Barras Verticales)
- **Gráfico Evolutivo**: Evolución acumulada de cuentas renovadas

## 🛠️ Tecnologías

- **React** 18.2.0
- **Recharts** 2.10.3 (Librería de gráficos)
- **Lucide React** (Iconos)
- **CSS3** (Estilos personalizados)

## 📁 Estructura del Proyecto

```
clickedu-dashboard/
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
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   └── index.js
│   │   ├── KPISection/
│   │   │   ├── KPISection.jsx
│   │   │   ├── KPISection.css
│   │   │   └── index.js
│   │   ├── ChartsSection/
│   │   │   ├── ChartsSection.jsx
│   │   │   ├── ChartsSection.css
│   │   │   └── index.js
│   │   └── EvolutionChart/
│   │       ├── EvolutionChart.jsx
│   │       ├── EvolutionChart.css
│   │       └── index.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd clickedu-dashboard
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm start
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 📊 Componentes y Tipos de Gráficos

### KPISection
- **Tipo**: Tarjetas KPI (KPI Cards)
- **Descripción**: Muestra 5 indicadores clave con valor principal, variación y comparación vs año anterior

### ChartsSection
Contiene 3 gráficos:

1. **Por Comunidad Autónoma**
   - Tipo: Gráfico de Barras Horizontales
   - Librería: Recharts (BarChart layout="vertical")

2. **Por Segmento**
   - Tipo: Gráfico de Barras Verticales
   - Librería: Recharts (BarChart)

3. **Por Tier**
   - Tipo: Gráfico de Barras Verticales
   - Librería: Recharts (BarChart)

### EvolutionChart
- **Tipo**: Gráfico Compuesto (Barras + Línea de Referencia)
- **Descripción**: Muestra evolución mensual con comparativa año anterior vs actual
- **Librería**: Recharts (ComposedChart + ReferenceLine)

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Rojo Principal | `#E84C4C` | Marca, navbar, acentos |
| Azul Claro | `#87CEEB` | Barras año actual |
| Gris | `#D1D5DB` | Barras año anterior |
| Rojo Oscuro | `#8B2323` | Segmento Privados, Tier 1 |
| Dorado | `#DAA520` | Tier 2 |
| Azul Marino | `#1E3A5F` | Barras comunidad |

## 📝 Licencia

Este proyecto es privado y pertenece a ClickEdu - Sanoma Company.
