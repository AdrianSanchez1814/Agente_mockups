import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import './MultiLineChartSection.css';

/**
 * MultiLineChartSection Component
 * Sección con gráfico de líneas múltiples para comparar evolución de varias métricas
 * Tipo: Gráfico de Líneas Múltiples (Multi-Line Chart)
 * Librería: Recharts
 */
const MultiLineChartSection = ({ 
  title = "Nuevos vs Bajas",
  data = null,
  height = 280
}) => {
  
  // Default data based on mockup - Nuevos vs Bajas
  const defaultData = [
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

  const chartData = data || defaultData;

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="multi-line-chart__tooltip">
          <p className="multi-line-chart__tooltip-label">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="multi-line-chart__tooltip-value" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom legend
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="multi-line-chart__legend">
        {payload.map((entry, index) => (
          <div key={index} className="multi-line-chart__legend-item">
            <span 
              className="multi-line-chart__legend-color" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="multi-line-chart__legend-text">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="multi-line-chart-section">
      {/* Section Title */}
      <h2 className="multi-line-chart-section__title">{title}</h2>
      
      {/* Chart Container */}
      <div className="multi-line-chart-section__chart-container">
        <ResponsiveContainer width="100%" height={height}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#E5E5E5"
              vertical={false}
            />
            
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 10, fill: '#666666' }}
              axisLine={{ stroke: '#E5E5E5' }}
              tickLine={false}
            />
            
            <YAxis 
              tick={{ fontSize: 10, fill: '#666666' }}
              axisLine={false}
              tickLine={false}
            />
            
            <Tooltip content={<CustomTooltip />} />
            <Legend content={renderLegend} />
            
            <Line
              type="monotone"
              dataKey="nuevos"
              name="Nuevos"
              stroke="#64A9FF"
              strokeWidth={2}
              dot={{ fill: '#64A9FF', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5 }}
            />
            
            <Line
              type="monotone"
              dataKey="bajas"
              name="Bajas"
              stroke="#CA4536"
              strokeWidth={2}
              dot={{ fill: '#CA4536', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default MultiLineChartSection;
