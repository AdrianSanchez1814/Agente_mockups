/**
 * EvolutionChart.jsx - Componente de gráfico evolutivo
 * ClickEdu Customer Success Dashboard
 * 
 * SECCIÓN: Evolutivo acumulado Nº de cuentas renovadas
 * Tipo de gráfico: Gráfico de Barras Verticales con Línea de Objetivo/Presupuesto
 * 
 * Muestra la evolución mensual del número de cuentas renovadas,
 * comparando el año anterior vs año actual, con una línea de presupuesto total.
 */

import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from 'recharts';
import './EvolutionChart.css';

/**
 * Componente EvolutionChart
 * Renderiza el gráfico de evolución acumulada de cuentas renovadas
 */
const EvolutionChart = () => {
  
  /* ====================================== */
  /* DATOS: Evolutivo mensual */
  /* ====================================== */
  const evolutionData = [
    { month: 'Ene', añoAnterior: 40, añoActual: 50 },
    { month: 'Feb', añoAnterior: 60, añoActual: 70 },
    { month: 'Mar', añoAnterior: 140, añoActual: 165 },
    { month: 'Abr', añoAnterior: 160, añoActual: 190 },
    { month: 'May', añoAnterior: 220, añoActual: 260 },
    { month: 'Jun', añoAnterior: 240, añoActual: 280 },
    { month: 'Jul', añoAnterior: 280, añoActual: 310 },
    { month: 'Ago', añoAnterior: 300, añoActual: 340 },
    { month: 'Sep', añoAnterior: 340, añoActual: 390 },
    { month: 'Oct', añoAnterior: 380, añoActual: 430 },
    { month: 'Nov', añoAnterior: 420, añoActual: 460 },
    { month: 'Dic', añoAnterior: 450, añoActual: 500 },
  ];

  // Valor del presupuesto total del año
  const presupuestoTotal = 500;

  /**
   * Componente de leyenda personalizada
   */
  const CustomLegend = () => {
    return (
      <div className="evolution-legend">
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#D1D5DB' }}></span>
          <span className="legend-text">Año Anterior</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#87CEEB' }}></span>
          <span className="legend-text">Año Actual</span>
        </div>
        <div className="legend-item">
          <span className="legend-line"></span>
          <span className="legend-text">Presupuesto Total Del Año</span>
        </div>
      </div>
    );
  };

  /**
   * Componente de tooltip personalizado
   */
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="evolution-tooltip">
          <p className="tooltip-month">{label}</p>
          {payload.map((item, index) => (
            <p key={index} className="tooltip-item" style={{ color: item.color }}>
              {item.name === 'añoAnterior' ? 'Año Anterior' : 'Año Actual'}: {item.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="evolution-section">
      {/* ====================================== */}
      {/* Título del gráfico */}
      {/* ====================================== */}
      <h3 className="evolution-title">Evolutivo acumulado Nº de cuentas renovadas</h3>
      
      {/* ====================================== */}
      {/* Leyenda personalizada */}
      {/* ====================================== */}
      <CustomLegend />
      
      {/* ====================================== */}
      {/* GRÁFICO: Barras Verticales Agrupadas con Línea de Objetivo */}
      {/* Tipo: ComposedChart (Barras + Línea de referencia) */}
      {/* ====================================== */}
      <div className="evolution-chart-wrapper">
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart
            data={evolutionData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            
            {/* Eje X - Meses */}
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            
            {/* Eje Y - Valores */}
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              domain={[0, 550]}
              ticks={[0, 100, 200, 300, 400, 500]}
            />
            
            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} />
            
            {/* Línea de referencia - Presupuesto Total */}
            <ReferenceLine 
              y={presupuestoTotal} 
              stroke="#EF4444" 
              strokeDasharray="5 5"
              strokeWidth={2}
            />
            
            {/* Barras - Año Anterior */}
            <Bar 
              dataKey="añoAnterior" 
              name="añoAnterior"
              fill="#D1D5DB" 
              radius={[4, 4, 0, 0]}
              barSize={25}
            />
            
            {/* Barras - Año Actual */}
            <Bar 
              dataKey="añoActual" 
              name="añoActual"
              fill="#87CEEB" 
              radius={[4, 4, 0, 0]}
              barSize={25}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default EvolutionChart;
