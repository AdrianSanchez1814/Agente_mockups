# Assets Directory

This directory contains all static assets for the Customer Success Dashboard.

## Structure

```
assets/
├── icons/
│   ├── SGT_icon_outlined_media-volumen.png    - KPI: Total a renovar
│   ├── icon_tickets-resueltos.png             - KPI: Renovado
│   ├── icon_tiempo-resolucion.png             - KPI: Por renovar
│   ├── icon_valid-document.png                - KPI: Bajas
│   └── streamline-sharp_business-idea-money.png - KPI: Ventas adicionales
├── images/
│   └── logo-clickedu.png                      - Main company logo
└── README.md
```

## Usage

Import assets in React components:

```jsx
import logoImage from '../../assets/images/logo-clickedu.png';
import iconVolumen from '../../assets/icons/SGT_icon_outlined_media-volumen.png';
```

## Icon Mapping

| Icon File | KPI Card | Description |
|-----------|----------|-------------|
| SGT_icon_outlined_media-volumen.png | Total a renovar | Volume/media icon |
| icon_tickets-resueltos.png | Renovado | Resolved tickets icon |
| icon_tiempo-resolucion.png | Por renovar | Time resolution icon |
| icon_valid-document.png | Bajas | Valid document icon |
| streamline-sharp_business-idea-money.png | Ventas adicionales | Business idea money icon |

## Notes

- All icons should be 50x50px for KPI cards
- Logo image is 190px width
- Icons use outlined style with gray (#666666) or brand colors
