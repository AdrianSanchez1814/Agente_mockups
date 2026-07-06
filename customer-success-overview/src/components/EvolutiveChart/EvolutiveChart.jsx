import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Cell,
  Legend
} from 'recharts';
import './EvolutiveChart.css';

/**
 * =====================================================
 * COMPONENTE: EvolutiveChart
 * =====================================================
 * 
 * Tipo de gráfico: Gráfico de Barras Agrupadas Evolutivo
 * 
 * Descripción: Gráfico de barras evolutivo que muestra el
 * importe renovado acumulado por mes, comparando:
 * - Año Anterior (color azul claro #B7E0FB)
 * - Año Actual (color azul #64A9FF)
 * - Línea de referencia: Presupuesto total del año (línea punteada roja)
 * 
 * El eje Y muestra valores de 0 a 10M.
 * El eje X muestra los meses del año (Ene - Dic).
 * 
 * Basado en la documentación de grafico_barras.md y
 * graficos_lineas.md del datasource.
 * Utiliza la librería Recharts para la visualización.
 * =====================================================
 */
const EvolutiveChart = () => {
  // Datos del gráfico evolutivo según el mockup
  const data = [
    { month: 'Ene', lastYear: 23, currentYear: 33 },
    { month: 'Feb', lastYear: 58, currentYear: 58 },
    { month: 'Mar', lastYear: 81, currentYear: 81 },
    { month: 'Abr', lastYear: 94, currentYear: 0 },
    { month: 'May', lastYear: 121, currentYear: 0 },
    { month: 'Jun', lastYear: 121, currentYear: 0 },
    { month: 'Jul', lastYear: 151, currentYear: 0 },
    { month: 'Ago', lastYear: 150, currentYear: 0 },
    { month: 'Sep', lastYear: 186, currentYear: 0 },
    { month: 'Oct', lastYear: 217, currentYear: 0 },
    { month: 'Nov', lastYear: 227, currentYear: 0 },
    { month: 'Dic', lastYear: 247, currentYear: 0 },
  ];

  // Valor del presupuesto total del año (línea de referencia)
  const budgetLine = 254;

  // Colores
  const colors = {
    lastYear: '#B7E0FB',
    currentYear: '#64A9FF',
    budgetLine: '#AE3C33'
  };

  // Formateo de valores del eje Y
  const formatYAxis = (value) => {
    if (value === 0) return '0';
    return `${Math.round(value / 25)}M`;
  };

  // Leyenda personalizada
  const renderLegend = () => {
    return (
      <div className="evolutive-chart__legend">
        <div className="evolutive-chart__legend-item">
          <span 
            className="evolutive-chart__legend-color" 
            style={{ backgroundColor: colors.lastYear }}
          ></span>
          <span className="evolutive-chart__legend-text">Año Anterior</span>
        </div>
        <div className="evolutive-chart__legend-item">
          <span 
            className="evolutive-chart__legend-color" 
            style={{ backgroundColor: colors.currentYear }}
          ></span>
          <span className="evolutive-chart__legend-text">Año actual</span>
        </div>
        <div className="evolutive-chart__legend-item">
          <span 
            className="evolutive-chart__legend-line"
            style={{ borderColor: colors.budgetLine }}
          ></span>
          <span className="evolutive-chart__legend-text">Presupuesto total del año</span>
        </div>
      </div>
    );
  };

  return (
    <div className="evolutive-chart">
      {/* Título */}
      <h3 className="evolutive-chart__title">
        Evolutivo acumulado importe renovado (€)
      </h3>

      {/* Leyenda personalizada */}
      {renderLegend()}

      {/* Contenedor del gráfico */}
      <div className="evolutive-chart__container">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            barGap={0}
            barCategoryGap="20%"
          >
            {/* Grid horizontal */}
            <CartesianGrid 
              strokeDasharray="0" 
              horizontal={true}
              vertical={false}
              stroke="#EBEBEB"
            />
            
            {/* Eje X - Meses */}
            <XAxis
              dataKey="month"
              axisLine={{ stroke: '#EBEBEB' }}
              tickLine={false}
              tick={{
                fill: '#8F8F8F',
                fontSize: 12,
                fontFamily: 'Tahoma'
              }}
            />
            
            {/* Eje Y - Valores */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#8F8F8F',
                fontSize: 11,
                fontFamily: 'Tahoma',
                textAnchor: 'end'
              }}
              domain={[0, 250]}
              ticks={[0, 50, 100, 150, 200, 250]}
              tickFormatter={formatYAxis}
              width={55}
            />
            
            {/* Línea de referencia - Presupuesto */}
            <ReferenceLine 
              y={budgetLine} 
              stroke={colors.budgetLine}
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            
            {/* Barra Año Anterior */}
            <Bar 
              dataKey="lastYear" 
              fill={colors.lastYear}
              radius={[0, 0, 0, 0]}
              maxBarSize={50}
            />
            
            {/* Barra Año Actual */}
            <Bar 
              dataKey="currentYear" 
              fill={colors.currentYear}
              radius={[0, 0, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EvolutiveChart;
