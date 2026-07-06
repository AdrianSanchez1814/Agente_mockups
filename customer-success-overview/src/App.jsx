import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MenuBar from './components/MenuBar';
import KPISection from './components/KPISection';
import ChartsSection from './components/ChartsSection';
import './App.css';

/**
 * =====================================================
 * COMPONENTE: App (Componente Padre Principal)
 * =====================================================
 * 
 * Descripción: Componente principal del dashboard
 * "Customer Success Overview" que integra todas las
 * secciones del mockup:
 * 
 * Estructura del Layout:
 * 
 * 1. HEADER (Header)
 *    - Logo de ClickEdu
 *    - Título: "ClickEdu > Customer Success"
 *    - Selector de fechas y filtros
 * 
 * 2. SIDEBAR (Sidebar)
 *    - Barra de navegación lateral con iconos
 * 
 * 3. MENU BAR (MenuBar)
 *    - Tabs de navegación: Overview, Renovaciones, etc.
 *    - Información adicional
 * 
 * 4. KPI SECTION (KPISection)
 *    - Botones slicer: Importe / Nº Cuentas
 *    - 5 Tarjetas KPI: Total a renovar, Renovado, 
 *      Por renovar, Bajas, Ventas adicionales
 * 
 * 5. CHARTS SECTION (ChartsSection)
 *    - Gráfico Lollipop: Por Comunidad Autónoma
 *    - Gráfico Barras: Por Segmento
 *    - Gráfico Barras: Por Tier
 *    - Gráfico Evolutivo: Acumulado importe renovado (€)
 * 
 * Framework: React
 * Librería de gráficos: Recharts
 * Iconos: Lucide React
 * =====================================================
 */
function App() {
  // Estado para el tab activo del menú
  const [activeTab, setActiveTab] = useState('Overview');

  // Handler para cambio de tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      {/* =====================================================
          SECCIÓN: Header
          Tipo: Navegación / Branding
          Descripción: Cabecera con logo, título y filtros
          ===================================================== */}
      <Header />

      {/* =====================================================
          SECCIÓN: Sidebar
          Tipo: Navegación lateral
          Descripción: Barra lateral con iconos de navegación
          ===================================================== */}
      <Sidebar />

      {/* Contenedor principal del contenido */}
      <main className="app__main">
        {/* =====================================================
            SECCIÓN: Menu Bar
            Tipo: Navegación por tabs
            Descripción: Barra de menú con las diferentes vistas
            del dashboard Customer Success
            ===================================================== */}
        <MenuBar activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Área de contenido */}
        <div className="app__content">
          {/* =====================================================
              SECCIÓN: KPI Section
              Tipo de gráfico: Tarjetas KPI (KPI Cards)
              Descripción: Sección con los indicadores clave:
              - Total a renovar: 10,9 M€
              - Renovado: 4,6 M€ | 42,0%
              - Por renovar: 5,7 M€ | 52,5%
              - Bajas: 0,6 M€ | 5,5%
              - Ventas adicionales vs ppto: 1,8 M€ | +5,5%
              Incluye botones slicer para filtrar por Importe/Nº Cuentas
              ===================================================== */}
          <KPISection />

          {/* =====================================================
              SECCIÓN: Charts Section
              Tipos de gráficos incluidos:
              
              1. Gráfico Lollipop Horizontal (Por Comunidad Autónoma)
                 - Cataluña, Madrid, Andalucía, Valencia, Baleares
                 
              2. Gráfico de Barras Verticales (Por Segmento)
                 - Privados, Concertados, Público
                 
              3. Gráfico de Barras Verticales (Por Tier)
                 - Tier 1, Tier 2, Tier 3
                 
              4. Gráfico de Barras Agrupadas Evolutivo
                 - Comparativa Año Anterior vs Año Actual
                 - Línea de referencia: Presupuesto total del año
                 - Eje X: Meses (Ene - Dic)
                 - Eje Y: Valores en millones (0 - 10M)
              ===================================================== */}
          <ChartsSection />
        </div>
      </main>
    </div>
  );
}

export default App;
