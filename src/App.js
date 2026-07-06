/**
 * App.js - Main Application Component
 * Customer Success Dashboard - ClickEdu
 * 
 * This is the parent component that imports and renders all dashboard sections
 */
import React from 'react';
import './App.css';

// Import all section components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MenuBar from './components/MenuBar/MenuBar';
import KPISection from './components/KPISection/KPISection';
import LollipopChart from './components/LollipopChart/LollipopChart';
import SegmentBarChart from './components/SegmentBarChart/SegmentBarChart';
import TierBarChart from './components/TierBarChart/TierBarChart';
import EvolutiveChart from './components/EvolutiveChart/EvolutiveChart';
import SlicerButtons from './components/SlicerButtons/SlicerButtons';

/**
 * App Component
 * Parent component that structures the entire dashboard layout
 */
function App() {
  return (
    <div className="app">
      {/* ==================== HEADER SECTION ==================== */}
      {/* Top header with logo, breadcrumb, date filter and filter icon */}
      <Header />

      <div className="app-body">
        {/* ==================== SIDEBAR SECTION ==================== */}
        {/* Left sidebar for user navigation */}
        <Sidebar />

        <div className="main-content">
          {/* ==================== MENU BAR SECTION ==================== */}
          {/* Secondary navigation with tabs */}
          <MenuBar />

          <div className="dashboard-content">
            {/* ==================== SLICER BUTTONS SECTION ==================== */}
            {/* Toggle buttons for Importe/Nº Cuentas */}
            <SlicerButtons />

            {/* ==================== KPI CARDS SECTION ==================== */}
            {/* 5 KPI cards: Total a renovar, Renovado, Por renovar, Bajas, Ventas adicionales */}
            <KPISection />

            {/* ==================== CHARTS ROW SECTION ==================== */}
            <div className="charts-row">
              {/* Lollipop horizontal bar chart - Por Comunidad Autónoma */}
              <LollipopChart />

              {/* Vertical bar chart - Por segmento */}
              <SegmentBarChart />

              {/* Vertical bar chart - Por tier */}
              <TierBarChart />
            </div>

            {/* ==================== EVOLUTIVE CHART SECTION ==================== */}
            {/* Grouped bar chart with budget line - Evolutivo acumulado */}
            <EvolutiveChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
