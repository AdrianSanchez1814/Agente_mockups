import React from 'react';
import './Dashboard.css';

// Import all section components
import Header from '../Header/Header';
import KPISection from '../KPISection/KPISection';
import BarChartSection from '../BarChartSection/BarChartSection';
import LineChartSection from '../LineChartSection/LineChartSection';
import MultiLineChartSection from '../MultiLineChartSection/MultiLineChartSection';
import StackedBarChartSection from '../StackedBarChartSection/StackedBarChartSection';
import DataTable from '../DataTable/DataTable';

/**
 * Dashboard Component
 * Componente padre que integra todas las secciones del Customer Success Dashboard
 * Layout: Grid responsive con múltiples secciones de KPIs y gráficos
 */
const Dashboard = () => {
  // Data for the line chart showing evolution
  const evolutionData = [
    { month: 'Ene', centrosActivos: 1420 },
    { month: 'Feb', centrosActivos: 1445 },
    { month: 'Mar', centrosActivos: 1468 },
    { month: 'Abr', centrosActivos: 1485 },
    { month: 'May', centrosActivos: 1502 },
    { month: 'Jun', centrosActivos: 1518 },
    { month: 'Jul', centrosActivos: 1530 },
    { month: 'Ago', centrosActivos: 1535 },
    { month: 'Sep', centrosActivos: 1548 },
    { month: 'Oct', centrosActivos: 1555 },
    { month: 'Nov', centrosActivos: 1558 },
    { month: 'Dic', centrosActivos: 1560 }
  ];

  const evolutionLines = [
    { dataKey: 'centrosActivos', name: 'Centros Activos', color: '#FD3D4A', strokeWidth: 2 }
  ];

  // Data for nuevos vs bajas chart
  const nuevosVsBajasData = [
    { month: 'Ene', nuevos: 45, bajas: 12 },
    { month: 'Feb', nuevos: 38, bajas: 15 },
    { month: 'Mar', nuevos: 42, bajas: 19 },
    { month: 'Abr', nuevos: 35, bajas: 18 },
    { month: 'May', nuevos: 40, bajas: 23 },
    { month: 'Jun', nuevos: 32, bajas: 16 },
    { month: 'Jul', nuevos: 28, bajas: 16 },
    { month: 'Ago', nuevos: 18, bajas: 13 },
    { month: 'Sep', nuevos: 30, bajas: 17 },
    { month: 'Oct', nuevos: 25, bajas: 18 },
    { month: 'Nov', nuevos: 22, bajas: 19 },
    { month: 'Dic', nuevos: 20, bajas: 18 }
  ];

  // Data for product type bar chart
  const productTypeData = [
    { category: 'Básico', value: 580, percentage: '37%' },
    { category: 'Standard', value: 450, percentage: '29%' },
    { category: 'Premium', value: 320, percentage: '21%' },
    { category: 'Enterprise', value: 210, percentage: '13%' }
  ];

  // Data for stacked bar chart
  const stackedBarData = [
    { region: 'España', basico: 320, standard: 180, premium: 120, enterprise: 80 },
    { region: 'LATAM', basico: 150, standard: 140, premium: 100, enterprise: 60 },
    { region: 'Portugal', basico: 80, standard: 90, premium: 70, enterprise: 50 },
    { region: 'Otros', basico: 30, standard: 40, premium: 30, enterprise: 20 }
  ];

  // Data for ARR evolution
  const arrEvolutionData = [
    { month: 'Ene', arr: 32.5 },
    { month: 'Feb', arr: 33.1 },
    { month: 'Mar', arr: 33.8 },
    { month: 'Abr', arr: 34.2 },
    { month: 'May', arr: 34.9 },
    { month: 'Jun', arr: 35.4 },
    { month: 'Jul', arr: 35.8 },
    { month: 'Ago', arr: 36.1 },
    { month: 'Sep', arr: 36.5 },
    { month: 'Oct', arr: 36.9 },
    { month: 'Nov', arr: 37.2 },
    { month: 'Dic', arr: 37.45 }
  ];

  const arrLines = [
    { dataKey: 'arr', name: 'ARR (M€)', color: '#64A9FF', strokeWidth: 2 }
  ];

  return (
    <div className="dashboard">
      {/* ============================================
          SECCIÓN: Header con Logo y Título
          Tipo: Header/Branding Section
          ============================================ */}
      <Header />

      {/* ============================================
          SECCIÓN: KPIs Principales
          Tipo: KPI Cards Grid (8 indicadores)
          ============================================ */}
      <KPISection />

      {/* ============================================
          SECCIÓN: Gráficos Principales (Fila 1)
          Tipo: Grid de 3 columnas con gráficos
          ============================================ */}
      <div className="dashboard__charts-row">
        {/* Gráfico de Líneas - Evolución de Centros Activos */}
        <div className="dashboard__chart-card dashboard__chart-card--large">
          <LineChartSection 
            title="Evolución de Centros Activos"
            data={evolutionData}
            lines={evolutionLines}
            showArea={true}
            height={280}
          />
        </div>

        {/* Gráfico de Líneas Múltiples - Nuevos vs Bajas */}
        <div className="dashboard__chart-card">
          <MultiLineChartSection 
            title="Nuevos vs Bajas"
            data={nuevosVsBajasData}
            height={250}
          />
        </div>

        {/* Gráfico de Barras Horizontales - Tipología de Producto */}
        <div className="dashboard__chart-card">
          <BarChartSection 
            title="Tipología de Producto"
            data={productTypeData}
            barColor="#FD3D4A"
          />
        </div>
      </div>

      {/* ============================================
          SECCIÓN: Gráficos Secundarios (Fila 2)
          Tipo: Grid de 3 columnas con gráficos y tabla
          ============================================ */}
      <div className="dashboard__charts-row">
        {/* Gráfico de Barras Apiladas - Distribución por Región */}
        <div className="dashboard__chart-card">
          <StackedBarChartSection 
            title="Distribución por Región"
            data={stackedBarData}
            height={280}
          />
        </div>

        {/* Gráfico de Líneas - Evolución ARR */}
        <div className="dashboard__chart-card">
          <LineChartSection 
            title="Evolución ARR"
            data={arrEvolutionData}
            lines={arrLines}
            showArea={true}
            height={250}
          />
        </div>

        {/* Tabla de Datos - Resumen por Región */}
        <div className="dashboard__chart-card">
          <DataTable 
            title="Resumen por Región"
          />
        </div>
      </div>

      {/* ============================================
          SECCIÓN: Footer
          Tipo: Footer con información de marca
          ============================================ */}
      <footer className="dashboard__footer">
        <p className="dashboard__footer-text">
          Customer Success Dashboard - ClickEdu © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
