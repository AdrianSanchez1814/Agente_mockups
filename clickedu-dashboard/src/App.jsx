/**
 * ===========================================
 * COMPONENTE: App (Componente Principal)
 * Tipo: Layout Principal del Dashboard
 * Descripción: Componente padre que integra todas las secciones
 *              del dashboard de Clickedu Soporte:
 *              - Header: Logo y título
 *              - KPISection: 6 tarjetas con métricas clave
 *              - ChartsSection: Gráficos de líneas y donut
 * ===========================================
 */

import React from 'react';
import Header from './components/Header';
import KPISection from './components/KPISection';
import ChartsSection from './components/ChartsSection';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* 
        ===========================================
        SECCIÓN: Header
        Tipo: Header/Navbar
        Contiene: Logo de Clickedu y título del dashboard
        ===========================================
      */}
      <Header />

      {/* Main Content Container */}
      <main className="app__main">
        {/* 
          ===========================================
          SECCIÓN: KPIs
          Tipo: Grid de Tarjetas KPI (6 tarjetas en 3x2)
          Contiene:
            1. Tickets Resueltos
            2. Tickets Nuevos
            3. Tiempo Resolución
            4. First Contact Resolution
            5. Coste por Ticket
            6. Documentos Válidos
          ===========================================
        */}
        <KPISection />

        {/* 
          ===========================================
          SECCIÓN: Gráficos
          Tipo: Layout 2 columnas (2:1)
          Contiene:
            1. Gráfico de Líneas - Evolución de Tickets
            2. Gráfico Donut - Distribución por Categoría
          ===========================================
        */}
        <ChartsSection />
      </main>

      {/* Footer */}
      <footer className="app__footer">
        <p>© 2024 Clickedu - a Sanoma company. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
