# COMPONENTE: Tarjeta KPI (KPI Card)

## Objetivo

Mostrar un indicador clave de rendimiento (KPI) de forma clara y destacada, permitiendo al usuario conocer el estado actual de una métrica de un solo vistazo.

---

## Cuándo utilizarlo

- Ventas totales.
- Ingresos.
- Beneficio.
- Número de usuarios.
- Conversión.
- Coste.
- Tiempo medio.
- NPS.
- Tickets abiertos.
- Disponibilidad del sistema.

---

## Cuándo NO utilizarlo

- Mostrar tendencias complejas.
- Comparar muchas categorías.
- Mostrar históricos detallados.

Para estos casos utilizar gráficos.

---

## Librería

React (componente personalizado)

Opcionalmente puede utilizarse:

- Material UI
- Chakra UI
- Ant Design
- TailwindCSS

---

## Datos esperados

```tsx
const kpi = {
    title: "Ventas",
    value: "€245.800",
    variation: 12.4,
    variationType: "increase",
    description: "vs mes anterior"
};
```

Campos:

- title → Nombre del indicador.
- value → Valor principal.
- variation → Variación porcentual o absoluta.
- variationType → increase | decrease | neutral.
- description → Texto contextual.

---

## Implementación

```tsx
<Card>

    <CardHeader>

        <Typography variant="subtitle2">
            {title}
        </Typography>

    </CardHeader>

    <CardContent>

        <Typography variant="h3">
            {value}
        </Typography>

        <Stack direction="row" spacing={1}>

            <TrendIcon />

            <Typography>

                {variation}%

            </Typography>

            <Typography>

                {description}

            </Typography>

        </Stack>

    </CardContent>

</Card>
```

---

## Props configurables

```
title

value

variation

variationType

description

icon

color

currency

prefix

suffix

showTrend

showIcon

showDescription

loading

size
```

---

## Estados soportados

### Positivo

↑ +12%

Color verde

---

### Negativo

↓ -8%

Color rojo

---

### Neutral

→ 0%

Color gris

---

### Loading

Skeleton

Placeholder

---

### Sin datos

"N/D"

"No disponible"

---

## Ejemplos de uso

✔ Ventas

✔ Beneficio

✔ Usuarios activos

✔ Conversión

✔ Tiempo medio

✔ Ingresos

✔ Pedidos

✔ Coste por adquisición

✔ Disponibilidad

✔ NPS

---

## Buenas prácticas UX

- Mostrar únicamente una métrica por tarjeta.
- Destacar visualmente el valor principal.
- Añadir contexto (comparación temporal o referencia).
- Utilizar iconografía solo cuando aporte significado.
- Mantener un formato consistente entre tarjetas.
- Formatear correctamente números, monedas y porcentajes.
- Evitar texto innecesario.

---

## Variantes

- KPI simple.
- KPI con icono.
- KPI con tendencia.
- KPI con sparkline.
- KPI con barra de progreso.
- KPI con objetivo.
- KPI con comparación respecto al periodo anterior.
- KPI con estado (OK, Warning, Error).

---
