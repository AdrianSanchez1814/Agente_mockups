import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ComposedChart
} from 'recharts';
import './LineChartSection.css';

/**
 * LineChartSection Component
 * Sección con gráfico de líneas para mostrar evolución temporal
 * Tipo: Gráfico de Líneas (Line Chart)
 * Librería: Recharts
 */
const LineChartSection = ({ 
  title = "Evolución de Centros Activos",
  data = null,
  lines = null,
  showArea = false,
  height = 300
}) => {
  
  // Default data based on mockup - Evolución temporal
  const defaultData = [
    { month: 'Ene', centrosActivos: 1420, nuevos: 45, bajas: 12 },
    { month: 'Feb', centrosActivos: 1445, nuevos: 38, bajas: 15 },
    { month: 'Mar', centrosActivos: 1468, nuevos: 42, bajas: 19 },
    { month: 'Abr', centrosActivos: 1485, nuevos: 35, bajas: 18 },
    { month: 'May', centrosActivos: 1502, nuevos: 40, bajas: 23 },
    { month: 'Jun', centrosActivos: 1518, nuevos: 32, bajas: 16 },
    { month: 'Jul', centrosActivos: 1530, nuevos: 28, bajas: 16 },
    { month: 'Ago', centrosActivos: 1535, nuevos: 18, bajas: 13 },
    { month: 'Sep', centrosActivos: 1548, nuevos: 30, bajas: 17 },
    { month: 'Oct', centrosActivos: 1555, nuevos: 25, bajas: 18 },
    { month: 'Nov', centrosActivos: 1558, nuevos: 22, bajas: 19 },
    { month: 'Dic', centrosActivos: 1560, nuevos: 20, bajas: 18 }
  ];

  const defaultLines = [
    { dataKey: 'centrosActivos', name: 'Centros Activos', color: '#FD3D4A', strokeWidth: 2 }
  ];

  const chartData = data || defaultData;
  const chartLines = lines || defaultLines;

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="line-chart__tooltip">
          <p className="line-chart__tooltip-label">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="line-chart__tooltip-value" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="line-chart-section">
      {/* Section Title */}
      <h2 className="line-chart-section__title">{title}</h2>
      
      {/* Chart Container */}
      <div className="line-chart-section__chart-container">
        <ResponsiveContainer width="100%" height={height}>
          {showArea ? (
            <ComposedChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                {chartLines.map((line, index) => (
                  <linearGradient key={index} id={`gradient-${line.dataKey}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={line.color} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={line.color} stopOpacity={0}/>
                  </linearGradient>
                ))}
              </defs>
              
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E5E5E5"
                vertical={false}
              />
              
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 11, fill: '#666666' }}
                axisLine={{ stroke: '#E5E5E5' }}
                tickLine={false}
              />
              
              <YAxis 
                tick={{ fontSize: 11, fill: '#666666' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => value.toLocaleString()}
              />
              
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: 11, paddingTop: 10 }}
                iconType="line"
              />
              
              {chartLines.map((line, index) => (
                <React.Fragment key={index}>
                  <Area
                    type="monotone"
                    dataKey={line.dataKey}
                    fill={`url(#gradient-${line.dataKey})`}
                    stroke="none"
                  />
                  <Line
                    type="monotone"
                    dataKey={line.dataKey}
                    name={line.name}
                    stroke={line.color}
                    strokeWidth={line.strokeWidth || 2}
                    dot={{ fill: line.color, strokeWidth: 2, r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </React.Fragment>
              ))}
            </ComposedChart>
          ) : (
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E5E5E5"
                vertical={false}
              />
              
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 11, fill: '#666666' }}
                axisLine={{ stroke: '#E5E5E5' }}
                tickLine={false}
              />
              
              <YAxis 
                tick={{ fontSize: 11, fill: '#666666' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => value.toLocaleString()}
              />
              
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: 11, paddingTop: 10 }}
                iconType="line"
              />
              
              {chartLines.map((line, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={line.dataKey}
                  name={line.name}
                  stroke={line.color}
                  strokeWidth={line.strokeWidth || 2}
                  dot={{ fill: line.color, strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 5 }}
                />
              ))}
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default LineChartSection;
