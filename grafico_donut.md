# COMPONENTE: Gráfico Donut

## Objetivo

Mostrar la distribución porcentual de un conjunto de categorías respecto a un total, permitiendo visualizar fácilmente la proporción de cada segmento.

---

## Cuándo utilizarlo

- Distribución de ventas por categoría.
- Usuarios por dispositivo.
- Estado de incidencias.
- Métodos de pago.
- Participación por departamento.
- Cualquier conjunto de datos que represente partes de un total.

---

## Cuándo NO utilizarlo

- Más de 6-8 categorías.
- Comparar valores exactos.
- Mostrar evolución temporal.
- Cuando las diferencias entre categorías son muy pequeñas.

En estos casos es preferible utilizar un gráfico de barras.

---

## Librería

Recharts

---

## Imports

```tsx
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";
```

---

## Datos esperados

```tsx
const data = [
    {
        name: "Desktop",
        value: 45
    },
    {
        name: "Mobile",
        value: 35
    },
    {
        name: "Tablet",
        value: 20
    }
];
```

Campos:

- **name** → Nombre de la categoría.
- **value** → Valor numérico.

La suma de todos los valores representa el 100% del gráfico.

---

## Colores

```tsx
const COLORS = [
    "#2563EB",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#06B6D4"
];
```

---

## Implementación

```tsx
<ResponsiveContainer width="100%" height={350}>

    <PieChart>

        <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={2}
        >

            {data.map((entry, index) => (
                <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                />
            ))}

        </Pie>

        <Tooltip />

        <Legend />

    </PieChart>

</ResponsiveContainer>
```

---

## Props configurables

```
height

innerRadius

outerRadius

paddingAngle

showLegend

showTooltip

showLabels

showPercentage

colors

animation
```

---

## Ejemplos de uso

✔ Ventas por categoría

✔ Usuarios por dispositivo

✔ Métodos de pago

✔ Estado de incidencias

✔ Distribución de presupuesto

✔ Participación de mercado

---

## Buenas prácticas UX

- Utilizar entre 3 y 6 categorías.
- Agrupar categorías pequeñas en "Otros".
- Mostrar porcentaje en el tooltip.
- Mantener una paleta de colores consistente.
- Ordenar los segmentos de mayor a menor valor.
- Evitar gráficos con demasiados segmentos.
- Utilizar un tamaño suficiente para facilitar la lectura.

---

## Variantes

- Donut simple.
- Donut con porcentaje en el centro.
- Donut con etiquetas externas.
- Donut con múltiples anillos.
- Donut interactivo con selección de segmentos.
- Donut con animaciones.
- Donut comparativo.

---

## Accesibilidad

- Incluir leyenda visible.
- No depender únicamente del color para diferenciar categorías.
- Mostrar valores y porcentajes en el tooltip.
- Garantizar contraste suficiente entre colores.
- Añadir etiquetas descriptivas para lectores de pantalla.

---