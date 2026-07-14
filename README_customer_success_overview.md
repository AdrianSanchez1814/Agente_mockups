# README - Customer Success Overview Mockup

## 📋 Resumen del Proyecto

Este documento describe la extracción y documentación del mockup **Customer Success Overview - Importe** desde Figma al repositorio de mockups.

---

## 🔗 Enlaces

- **Figma:** [CdM_DataStorytelling](https://www.figma.com/design/BOZlCNVoQU0NG0Bao2BRMf/CdM_DataStorytelling?node-id=1943-20194)
- **Rama:** `feature/customer-success-overview-importe-docx`
- **Archivo principal:** `customer_success_overview_importe.md`

---

## 📦 Archivos Generados

### 1. customer_success_overview_importe.md
Documentación completa del mockup incluyendo:
- KPIs principales
- Desglose por segmento, tier y comunidad autónoma
- Características del dashboard
- Notas técnicas y recursos

### 2. CdM_DataStorytelling_Mockup.docx
Archivo Word con:
- Imagen del mockup en alta resolución (PNG)
- Descripción de los KPIs
- Formato listo para presentación

---

## 🎨 Especificaciones del Mockup

### Dimensiones
- **Resolución:** 1920x1080 px
- **Escala de exportación:** 2x (3840x2160 px)
- **Formato:** PNG

### Colores Principales
- **Barra superior:** #FD3D4A (Rojo)
- **Fondo:** #FFFFFF (Blanco)
- **Acento positivo:** #3DC331 (Verde)
- **Acento negativo:** #CA4536 (Rojo oscuro)
- **Gráfico año anterior:** #B7E0FB (Azul claro)
- **Gráfico año actual:** #64A9FF (Azul)

### Tipografía
- **Fuente:** Tahoma
- **Tamaños:**
  - Título: 20px Bold
  - KPI nombre: 18px Regular
  - KPI valor: 22px Bold
  - Textos: 16px Regular

---

## 📊 Datos del Dashboard

### KPIs Principales
| Métrica | Valor | Porcentaje |
|---------|-------|------------|
| Total a renovar | 10,9 M€ | 100% |
| Renovado | 4,6 M€ | 42,0% |
| Por renovar | 5,7 M€ | 52,5% |
| Bajas | 0,6 M€ | 5,5% |
| Ventas adicionales | 1,8 M€ | +5,5% |

### Por Segmento
- Privados: 45%
- Concertados: 35%
- Público: 20%

### Por Tier
- Tier 1: 14%
- Tier 2: 39%
- Tier 3: 47%

### Top 5 Comunidades Autónomas
1. Cataluña: 26%
2. Madrid: 23%
3. Andalucía: 20%
4. Valencia: 16%
5. Baleares: 15%

---

## 🛠️ Proceso de Extracción

### 1. Extracción de Datos de Figma
```bash
GET https://api.figma.com/v1/files/BOZlCNVoQU0NG0Bao2BRMf/nodes?ids=1943:20194
```

### 2. Descarga de Imagen
```bash
Formato: PNG
Escala: 2x
Resolución final: 3840x2160 px
```

### 3. Generación de DOCX
```python
from docx import Document
from docx.shared import Inches

doc = Document()
doc.add_heading('Customer Success Overview - ClickEdu', 0)
doc.add_picture('mockup.png', width=Inches(6.5))
doc.save('CdM_DataStorytelling_Mockup.docx')
```

### 4. Commit al Repositorio
```bash
git checkout -b feature/customer-success-overview-importe-docx
git add customer_success_overview_importe.md
git commit -m "Add Customer Success Overview Importe mockup documentation"
```

---

## 📝 Componentes de Figma Utilizados

- **Filter** (1:5) - Filtros de fecha y visualización
- **label_basic** (324:1075) - Etiquetas de datos
- **lollipop_horizontal_outer_label** (324:1111) - Gráficos horizontales
- **btn_slicer** (256:2474) - Botones de selección (Importe/Nº Cuentas)

---

## 🚀 Próximos Pasos

1. ✅ Extracción de mockup completada
2. ✅ Documentación generada
3. ✅ Archivo DOCX creado
4. ✅ Commit en nueva rama
5. ⏳ Revisión y aprobación
6. ⏳ Merge a rama principal

---

## 📞 Contacto

Para cualquier duda o modificación del mockup, contactar con el equipo de diseño de ClickEdu.

---

**Fecha de extracción:** 14 de julio de 2026  
**Versión:** 1.0  
**Autor:** Sistema automatizado de extracción de mockups
