# Customer Success Overview - ClickEdu Dashboard

## 📊 Información del Mockup

**Proyecto**: CdM DataStorytelling  
**Cliente**: ClickEdu  
**Dashboard**: Customer Success Overview  
**Período**: Q1 2026 (01/01/2026 - 31/03/2026)  
**Fecha de Creación**: 2025  
**Fuente**: Figma (node-id: 1943-20194)

---

## 🎯 Objetivos del Dashboard

Este dashboard proporciona una visión completa del rendimiento del equipo de Customer Success, enfocándose en:

1. **Seguimiento de Renovaciones**: Monitoreo del progreso de renovaciones contractuales
2. **Análisis de Bajas**: Control de la pérdida de clientes
3. **Ventas Adicionales**: Seguimiento de oportunidades de upselling/cross-selling
4. **Segmentación**: Análisis por geografía, tipo de cliente y tier

---

## 📈 Métricas Clave (KPIs)

### Indicadores Principales

| Métrica | Valor | % | Tendencia |
|---------|-------|---|-----------|
| Total a renovar | 10,9 M€ | 100% | ▼ -2,0% vs LY |
| Renovado | 4,6 M€ | 42,0% | ▼ -2,0% vs LY |
| Por renovar | 5,7 M€ | 52,5% | ▼ -2,0% vs LY |
| Bajas | 0,6 M€ | 5,5% | ▼ -2,0% vs LY |
| Ventas adicionales vs ppto | 1,8 M€ | +5,5% | ▼ -2,0% vs LY |

---

## 🗺️ Distribución Geográfica

### Por Comunidad Autónoma

| Región | Importe | Porcentaje |
|--------|---------|------------|
| 🔵 Cataluña | 1,2 M€ | 26% |
| 🔵 Madrid | 1,1 M€ | 23% |
| 🔵 Andalucía | 0,9 M€ | 20% |
| 🔵 Valencia | 0,7 M€ | 16% |
| 🔵 Baleares | 0,7 M€ | 15% |

**Total**: 4,6 M€ (Renovado)

---

## 🏫 Segmentación de Clientes

### Por Segmento Educativo

```
Privados (45%)     ████████████████████ 2,1 M€
Concertados (35%)  ███████████████      1,6 M€
Público (20%)      █████████            0,9 M€
```

### Por Tier de Cliente

```
Tier 3 (47%)  ████████████████████████ 2,2 M€
Tier 2 (39%)  ████████████████████     1,8 M€
Tier 1 (14%)  ███████                  0,6 M€
```

---

## 📊 Visualizaciones Incluidas

### 1. Evolutivo Acumulado
- **Tipo**: Gráfico de barras + línea de tendencia
- **Período**: Enero - Diciembre
- **Comparativas**: 
  - Año Anterior (azul claro)
  - Año Actual (azul oscuro)
  - Presupuesto Total del Año (línea punteada)
- **Controles**: Toggle entre "Importe" y "Nº Cuentas"

### 2. Distribución Geográfica
- **Tipo**: Gráfico de barras horizontales
- **Top 5** comunidades autónomas

### 3. Segmentación de Clientes
- **Tipo**: Gráficos de donut (2)
- **Categorías**: Por segmento y por tier

---

## 🧭 Navegación del Dashboard

El dashboard incluye las siguientes secciones:

1. **Overview** ⭐ (Vista actual)
2. Renovaciones
3. Actividad Del Equipo
4. Eficiencia Del Equipo
5. Cuentas / Clientes
6. Pipeline
7. Soporte
8. Detalle Soporte

---

## 💡 Insights Clave

### Oportunidades
- ✅ Las ventas adicionales superan el presupuesto en un 5,5%
- ✅ El 42% del total ya está renovado en Q1
- ✅ Cataluña y Madrid representan casi el 50% de las renovaciones

### Áreas de Atención
- ⚠️ Todas las métricas muestran -2% vs año anterior
- ⚠️ Aún hay 5,7 M€ pendientes de renovar (52,5%)
- ⚠️ Las bajas representan 0,6 M€ (5,5% del total)

### Recomendaciones
1. 🎯 Priorizar el seguimiento de los 5,7 M€ por renovar
2. 🎯 Investigar causas de la tendencia negativa vs LY
3. 🎯 Potenciar estrategias de retención para reducir bajas
4. 🎯 Replicar estrategias exitosas de ventas adicionales

---

## 📁 Estructura de Archivos

```
mockups/customer_success/
├── Customer_Success_Overview_Mockup.docx
├── Customer_Success_Overview_Summary.md (este archivo)
├── README.md
└── images/
    └── customer_success_overview_mockup.png
```

---

## 🔗 Enlaces Útiles

- **Figma Original**: [CdM_DataStorytelling](https://www.figma.com/design/BOZlCNVoQU0NG0Bao2BRMf/CdM_DataStorytelling?node-id=1943-20194)
- **Repositorio**: git-repo-mockups
- **Rama**: feature/customer-success-overview-mockup-2025

---

## 📝 Notas de Implementación

### Consideraciones Técnicas
- **Framework sugerido**: React + D3.js / Chart.js para visualizaciones
- **Responsive**: Dashboard debe adaptarse a tablets y móviles
- **Actualización**: Datos en tiempo real o refresh programado
- **Exportación**: Incluir opción para exportar reportes en PDF/Excel

### Paleta de Colores
- **Primary Blue**: #0066CC
- **Secondary Blue**: #4A90E2
- **Success Green**: #28A745
- **Warning Orange**: #FFC107
- **Danger Red**: #DC3545
- **Background**: #FFFFFF
- **Text**: #333333

---

**Última actualización**: 2025  
**Versión del mockup**: 1.0  
**Estado**: ✅ Aprobado para desarrollo