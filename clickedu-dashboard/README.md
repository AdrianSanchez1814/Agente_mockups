# Clickedu Dashboard - Soporte Tickets Overview

Dashboard de visualización de métricas de soporte para Clickedu, desarrollado en React.

![Clickedu Logo](https://clickedu.eu/wp-content/uploads/2021/06/clickedu-logo.png)

## 📋 Descripción

Este proyecto es un dashboard interactivo que muestra las métricas clave del sistema de soporte de Clickedu, incluyendo:

- **KPIs principales**: Tickets resueltos, tickets nuevos, tiempo de resolución, etc.
- **Gráfico de evolución**: Tendencia temporal de tickets
- **Gráfico de distribución**: Distribución de tickets por categoría

## 🛠️ Tecnologías

- **React** 18.2.0
- **Recharts** 2.10.3 (para gráficos)
- **CSS3** con variables CSS
- **Google Fonts** (Inter)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd clickedu-dashboard
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
clickedu-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── icons/          # Iconos PNG
│   │   └── images/         # Imágenes (logo, etc.)
│   ├── components/
│   │   ├── Header/         # Componente de cabecera
│   │   ├── KPICard/        # Tarjeta KPI individual
│   │   ├── KPISection/     # Sección de KPIs (6 tarjetas)
│   │   ├── LineChartCard/  # Gráfico de líneas
│   │   ├── DonutChartCard/ # Gráfico de donut
│   │   └── ChartsSection/  # Sección de gráficos
│   ├── App.jsx             # Componente principal
│   ├── App.css
│   ├── index.js            # Punto de entrada
│   └── index.css           # Estilos globales
└── package.json
```

## 📊 Componentes

### Header
Cabecera del dashboard con el logo de Clickedu y el título "Soporte - Tickets Overview".

### KPISection
Grid de 6 tarjetas KPI mostrando:
1. Tickets Resueltos (+12.4%)
2. Tickets Nuevos (-5.2%)
3. Tiempo Resolución (4.2h)
4. First Contact Resolution (78%)
5. Coste por Ticket (€12.50)
6. Documentos Válidos (95%)

### ChartsSection
Contiene dos gráficos:
- **LineChartCard**: Evolución mensual de tickets (resueltos vs nuevos)
- **DonutChartCard**: Distribución de tickets por categoría

## 🎨 Personalización

### Colores
Los colores principales se definen en `src/index.css` usando variables CSS:

```css
:root {
  --color-primary: #F5455C;     /* Rojo Clickedu */
  --color-secondary: #3D3D3D;   /* Gris oscuro */
  --color-success: #10B981;     /* Verde */
  --color-error: #EF4444;       /* Rojo */
}
```

### Datos
Los datos de ejemplo se pueden modificar en cada componente:
- `KPISection.jsx` - Datos de los KPIs
- `LineChartCard.jsx` - Datos de evolución temporal
- `DonutChartCard.jsx` - Datos de distribución

## 📱 Responsive

El dashboard es completamente responsive:
- **Desktop**: Grid 3x2 para KPIs, gráficos en 2 columnas
- **Tablet**: Grid 2x3 para KPIs, gráficos apilados
- **Mobile**: KPIs y gráficos en una columna

## 🚀 Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `build/`.

## 📄 Licencia

© 2024 Clickedu - a Sanoma company. Todos los derechos reservados.
