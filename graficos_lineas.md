# COMPONENTE: Gráfico de Líneas

## Objetivo
Mostrar la evolución de una o varias métricas a lo largo del tiempo.

---

## Librería

Recharts

---

## Imports

```tsx
import {
  ResponsiveContainer,
  LineChart,
  Line,
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
        label: "Enero",
        value: 120
    },
    {
        label: "Febrero",
        value: 145
    },
    {
        label: "Marzo",
        value: 170
    }
];
```

Campos:

label → eje X

value → eje Y

---

## Implementación

```tsx
<ResponsiveContainer width="100%" height={350}>

    <LineChart
        data={data}
        margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10
        }}
    >

        <CartesianGrid strokeDasharray="3 3"/>

        <XAxis
            dataKey="label"
        />

        <YAxis />

        <Tooltip />

        <Legend />

        <Line
            type="monotone"
            dataKey="value"
            stroke="#2563EB"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
        />

    </LineChart>

</ResponsiveContainer>
```

---

## Props configurables

```
height

stroke

strokeWidth

showLegend

showGrid

showTooltip

showDots

animation

```

---

## Casos de uso

✔ Ventas por mes

✔ Usuarios activos

✔ Evolución de ingresos

✔ Visitas

✔ Conversión temporal

---

## Buenas prácticas UX

• Máximo 4 líneas simultáneas.

• No utilizar más de 12-24 puntos visibles sin filtros.

• El eje X debe representar tiempo.

• Utilizar colores consistentes.

• Añadir tooltip.

• Utilizar ResponsiveContainer.
