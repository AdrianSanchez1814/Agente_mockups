import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import './StackedBarChartSection.css';

/**
 * StackedBarChartSection Component
 * Sección con gráfico de barras apiladas para mostrar composición
 * Tipo: Gráfico de Barras Apiladas (Stacked Bar Chart)
 * Librería: Recharts
 */
const StackedBarChartSection = ({ 
  title = "Distribución por Producto y Región",
  data = null,
  height = 300
}) => {
  
  // Default data based on mockup
  const defaultData = [
    { region: 'España', basico: 320, standard: 180, premium: 120, enterprise: 80 },
    { region: 'LATAM', basico: 150, standard: 140, premium: 100, enterprise: 60 },
    { region: 'Portugal', basico: 80, standard: 90, premium: 70, enterprise: 50 },
    { region: 'Otros', basico: 30, standard: 40, premium: 30, enterprise: 20 }
  ];

  const chartData = data || defaultData;

  // Colors for each stack
  const colors = {
    basico: '#FD3D4A',
    standard: '#FF6B6B',
    premium: '#FF8E8E',
    enterprise: '#FFB4B4'
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const total = payload.reduce((sum, entry) => sum + entry.value, 0);
      return (
        <div className="stacked-bar-chart__tooltip">
          <p className="stacked-bar-chart__tooltip-label">{label}</p>
          <p className="stacked-bar-chart__tooltip-total">Total: {total}</p>
          {payload.map((entry, index) => (
            <p key={index} className="stacked-bar-chart__tooltip-value" style={{ color: entry.fill }}>
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
      <div className="stacked-bar-chart__legend">
        {payload.map((entry, index) => (
          <div key={index} className="stacked-bar-chart__legend-item">
            <span 
              className="stacked-bar-chart__legend-color" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="stacked-bar-chart__legend-text">
              {entry.value.charAt(0).toUpperCase() + entry.value.slice(1)}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="stacked-bar-chart-section">
      {/* Section Title */}
      <h2 className="stacked-bar-chart-section__title">{title}</h2>
      
      {/* Chart Container */}
      <div className="stacked-bar-chart-section__chart-container">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#E5E5E5"
              vertical={false}
            />
            
            <XAxis 
              dataKey="region" 
              tick={{ fontSize: 11, fill: '#666666' }}
              axisLine={{ stroke: '#E5E5E5' }}
              tickLine={false}
            />
            
            <YAxis 
              tick={{ fontSize: 11, fill: '#666666' }}
              axisLine={false}
              tickLine={false}
            />
            
            <Tooltip content={<CustomTooltip />} />
            <Legend content={renderLegend} />
            
            <Bar 
              dataKey="basico" 
              name="Básico"
              stackId="a" 
              fill={colors.basico}
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="standard" 
              name="Standard"
              stackId="a" 
              fill={colors.standard}
            />
            <Bar 
              dataKey="premium" 
              name="Premium"
              stackId="a" 
              fill={colors.premium}
            />
            <Bar 
              dataKey="enterprise" 
              name="Enterprise"
              stackId="a" 
              fill={colors.enterprise}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default StackedBarChartSection;
