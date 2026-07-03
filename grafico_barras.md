# COMPONENTE: Gráfico de Barras Horizontales

## Objetivo

Comparar valores entre diferentes categorías utilizando barras horizontales. Es especialmente útil cuando las etiquetas son largas o cuando se desea mostrar un ranking.

---

## Cuándo utilizarlo

- Rankings.
- Top 10 productos.
- Ventas por país.
- Incidencias por categoría.
- Comparación entre departamentos.
- Comparativas donde las etiquetas son largas.

---

## Cuándo NO utilizarlo

- Evolución temporal (usar gráfico de líneas).
- Distribución porcentual (usar Donut o Pie).
- Correlaciones (usar Scatter Plot).

---

## Librería

Recharts

---

## Imports

```tsx
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
```

---

## Datos esperados

```tsx
const data = [
    {
        category: "España",
        value: 245
    },
    {
        category: "Francia",
        value: 198
    },
    {
        category: "Italia",
        value: 154
    },
    {
        category: "Portugal",
        value: 112
    }
];
```

Campos:

- **category** → Nombre de la categoría.
- **value** → Valor numérico.

---

## Implementación

```tsx
<ResponsiveContainer width="100%" height={350}>

    <BarChart
        data={data}
        layout="vertical"
        margin={{
            top: 20,
            right: 20,
            left: 40,
            bottom: 20
        }}
    >

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
            type="number"
        />

        <YAxis
            dataKey="category"
            type="category"
            width={120}
        />

        <Tooltip />

        <Legend />

        <Bar
            dataKey="value"
            radius={[0, 6, 6, 0]}
        />

    </BarChart>

</ResponsiveContainer>
```

---

## Props configurables

```
height

barSize

radius

showLegend

showTooltip

showGrid

animation

colors

margin

maxBars
```

---


## Variantes

- Barra simple.
- Barras agrupadas.
- Barras apiladas horizontales.
- Ranking Top N.
- Barras con etiquetas de valor.
- Barras con objetivo (Bullet Bar).
- Barras con colores condicionales.






