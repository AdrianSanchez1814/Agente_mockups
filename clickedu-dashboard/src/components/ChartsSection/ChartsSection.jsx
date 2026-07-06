/**
 * ===========================================
 * COMPONENTE: ChartsSection
 * Tipo: Sección de Gráficos
 * Descripción: Agrupa el gráfico de líneas (evolución temporal)
 *              y el gráfico de donut (distribución por categoría)
 *              en un layout de 2 columnas con proporción 2:1
 * ===========================================
 */

import React from 'react';
import LineChartCard from '../LineChartCard';
import DonutChartCard from '../DonutChartCard';
import './ChartsSection.css';

const ChartsSection = () => {
  return (
    <section className="charts-section">
      {/* 
        Gráfico de Líneas - Evolución de Tickets
        Tipo: Line Chart
        Muestra la evolución temporal de tickets resueltos vs nuevos
      */}
      <div className="charts-section__line-chart">
        <LineChartCard 
          title="Evolución de Tickets"
          height={320}
        />
      </div>

      {/* 
        Gráfico Donut - Distribución por Categoría
        Tipo: Donut/Pie Chart
        Muestra la distribución porcentual de tickets por categoría
      */}
      <div className="charts-section__donut-chart">
        <DonutChartCard 
          title="Distribución por Categoría"
          height={320}
        />
      </div>
    </section>
  );
};

export default ChartsSection;
