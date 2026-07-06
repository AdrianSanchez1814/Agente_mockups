import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  LabelList
} from 'recharts';
import './BarChartSection.css';

/**
 * BarChartSection Component
 * Sección con gráfico de barras horizontales para mostrar ranking de productos
 * Tipo: Gráfico de Barras Horizontales (Horizontal Bar Chart)
 * Librería: Recharts
 */
const BarChartSection = ({ 
  title = "Tipología de Producto",
  data = null,
  barColor = "#FD3D4A"
}) => {
  
  // Default data based on mockup - Tipología de Producto
  const defaultData = [
    { category: 'Básico', value: 580, percentage: '37%' },
    { category: 'Standard', value: 450, percentage: '29%' },
    { category: 'Premium', value: 320, percentage: '21%' },
    { category: 'Enterprise', value: 210, percentage: '13%' }
  ];

  const chartData = data || defaultData;

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bar-chart__tooltip">
          <p className="bar-chart__tooltip-label">{payload[0].payload.category}</p>
          <p className="bar-chart__tooltip-value">{payload[0].value} centros</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="bar-chart-section">
      {/* Section Title */}
      <h2 className="bar-chart-section__title">{title}</h2>
      
      {/* Chart Container */}
      <div className="bar-chart-section__chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 20, right: 60, left: 20, bottom: 20 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              horizontal={true}
              vertical={false}
              stroke="#E5E5E5"
            />
            
            <XAxis 
              type="number" 
              tick={{ fontSize: 11, fill: '#666666' }}
              axisLine={{ stroke: '#E5E5E5' }}
              tickLine={false}
            />
            
            <YAxis 
              dataKey="category" 
              type="category" 
              width={80}
              tick={{ fontSize: 12, fill: '#3D3D3D' }}
              axisLine={false}
              tickLine={false}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Bar 
              dataKey="value" 
              radius={[0, 4, 4, 0]}
              barSize={28}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barColor} />
              ))}
              <LabelList 
                dataKey="percentage" 
                position="right" 
                style={{ fontSize: 11, fill: '#666666' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default BarChartSection;
