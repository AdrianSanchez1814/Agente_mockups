# Customer Success Dashboard - ClickEdu

A React application that displays a comprehensive Customer Success dashboard with KPIs, charts, and metrics for monitoring customer renewals and business performance.

## 📋 Overview

This dashboard is based on the Figma mockup and includes the following sections:

### Components Structure

```
src/
├── components/
│   ├── Header/              # Top navigation with logo and filters
│   ├── Sidebar/             # Left vertical navigation
│   ├── MenuBar/             # Secondary navigation tabs
│   ├── SlicerButtons/       # Toggle buttons (Importe/Nº Cuentas)
│   ├── KPISection/          # 5 KPI cards with metrics
│   ├── LollipopChart/       # Horizontal lollipop chart
│   ├── SegmentBarChart/     # Vertical bar chart by segment
│   ├── TierBarChart/        # Vertical bar chart by tier
│   └── EvolutiveChart/      # Grouped bar chart with budget line
├── assets/
│   ├── icons/               # KPI icons
│   └── images/              # Logo and other images
├── App.js                   # Main parent component
├── App.css                  # Global layout styles
├── index.js                 # Entry point
└── index.css                # Global CSS reset
```

## 🎨 Design Specifications

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Red | `#FD3D4A` | Menu bar, accents, buttons |
| Dark Gray | `#3D3D3D` | Primary text |
| Medium Gray | `#666666` | Secondary text, titles |
| Light Gray | `#8F8F8F` | Tertiary text, labels |
| Border Gray | `#D6D6D6` | Dividers, borders |
| White | `#FFFFFF` | Backgrounds |
| Blue (Light) | `#B7E0FB` | Previous year bars |
| Blue (Dark) | `#64A9FF` | Current year bars |
| Red (Dark) | `#AE3C33` | Privados segment |
| Red (Trend) | `#CA4536` | Tier 1, decrease indicator |
| Pink | `#CE8A85` | Concertados segment |
| Blue (Sky) | `#87CCF8` | Público segment |
| Orange | `#E5A949` | Tier 2 |
| Yellow | `#FADFA0` | Tier 3 |
| Green | `#3DC331` | Increase indicator |

### Typography

- **Font Family:** Tahoma (with fallbacks: Segoe UI, Helvetica Neue, Arial)
- **Title (Page):** 30px Regular
- **Title (Section):** 20px Bold
- **KPI Title:** 18px Regular
- **KPI Value:** 22px Bold
- **Body:** 16px Regular
- **Labels:** 12px Regular
- **Small:** 11px Regular

## 📊 Chart Types

### 1. KPI Cards
- Icon with 50x50px dimensions
- Title, main value, percentage (optional)
- Trend indicator (up/down arrow)
- Comparison label (vs LY)

### 2. Lollipop Chart (Horizontal Bar)
- Labels on left
- Horizontal line with circle endpoint
- Value labels on right

### 3. Vertical Bar Charts
- Color-coded bars
- Value labels on top
- Category labels at bottom

### 4. Evolutive Chart (Grouped Bars)
- Two series (Previous Year, Current Year)
- Budget reference line (dashed)
- Monthly X-axis
- Custom legend

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd customer-success-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Add the icon and image files to:
   - `src/assets/icons/` - KPI icons
   - `src/assets/images/` - Logo image

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## 📦 Dependencies

- **React** (^18.2.0) - UI library
- **ReactDOM** (^18.2.0) - DOM rendering
- **Recharts** (^2.10.3) - Charting library

## 🖼️ Required Assets

### Icons (50x50px)
1. `SGT_icon_outlined_media-volumen.png` - Total a renovar
2. `icon_tickets-resueltos.png` - Renovado
3. `icon_tiempo-resolucion.png` - Por renovar
4. `icon_valid-document.png` - Bajas
5. `streamline-sharp_business-idea-money.png` - Ventas adicionales

### Images
1. `logo-clickedu.png` - Company logo (190x74px)

## 📱 Responsive Design

The dashboard includes responsive breakpoints:
- **Desktop:** 1920px (full layout)
- **Large:** 1600px (adjusted gaps)
- **Medium:** 1400px (wrapped layouts)
- **Tablet:** 1200px (stacked sections)
- **Mobile:** 768px (single column)

## 🔧 Customization

### Changing Data

Each chart component has its own data array that can be easily modified:

```jsx
// Example: KPISection.js
const kpiData = [
  {
    id: 'total-renovar',
    title: 'Total a renovar',
    value: '10,9 M€',
    // ... modify values here
  },
];
```

### Changing Colors

Colors are defined in the component CSS files and can be customized as needed.

## 📄 License

This project is proprietary to ClickEdu (a Sanoma company).

## 👥 Contributors

- Frontend Development Team
- Design Team (Figma mockup)
