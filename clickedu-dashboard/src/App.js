/**
 * App.js - Componente principal de la aplicación
 * ClickEdu Customer Success Dashboard
 * 
 * Este componente actúa como contenedor padre que importa y organiza
 * todas las secciones del dashboard según el mockup proporcionado.
 */

import React from 'react';
import './App.css';

// Importación de componentes de sección
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import KPISection from './components/KPISection/KPISection';
import ChartsSection from './components/ChartsSection/ChartsSection';
import EvolutionChart from './components/EvolutionChart/EvolutionChart';

/**
 * Componente App
 * Estructura principal del dashboard con layout de sidebar + contenido principal
 */
function App() {
  return (
    <div className="app">
      {/* ====================================== */}
      {/* SECCIÓN: Sidebar - Menú lateral izquierdo con iconos de navegación */}
      {/* ====================================== */}
      <Sidebar />
      
      <div className="main-content">
        {/* ====================================== */}
        {/* SECCIÓN: Header - Logo, título y selector de fecha */}
        {/* ====================================== */}
        <Header />
        
        {/* ====================================== */}
        {/* SECCIÓN: Navbar - Tabs de navegación horizontal */}
        {/* ====================================== */}
        <Navbar />
        
        <div className="dashboard-content">
          {/* ====================================== */}
          {/* SECCIÓN: KPIs - Tarjetas con indicadores clave */}
          {/* Tipo de gráfico: KPI Cards (5 tarjetas) */}
          {/* ====================================== */}
          <KPISection />
          
          {/* ====================================== */}
          {/* SECCIÓN: Gráficos de distribución */}
          {/* Tipos de gráfico: 
           *   - Barras Horizontales (Por Comunidad Autónoma)
           *   - Barras Verticales (Por segmento)
           *   - Barras Verticales (Por tier)
           */}
          {/* ====================================== */}
          <ChartsSection />
          
          {/* ====================================== */}
          {/* SECCIÓN: Evolutivo acumulado */}
          {/* Tipo de gráfico: Barras verticales con línea de objetivo */}
          {/* ====================================== */}
          <EvolutionChart />
        </div>
      </div>
    </div>
  );
}

export default App;
