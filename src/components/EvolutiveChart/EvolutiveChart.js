/**
 * EvolutiveChart Component
 * Customer Success Dashboard - ClickEdu
 * 
 * Grouped bar chart with budget line showing:
 * "Evolutivo acumulado importe renovado (€)"
 * (Accumulated evolution of renewed amount)
 * 
 * Features:
 * - Grouped bars (Año anterior - light blue, Año actual - dark blue)
 * - Dashed horizontal line for budget target
 * - X-axis with months (Ene - Dic)
 * - Y-axis with values in millions
 * - Legend at top
 * 
 * Chart type: Grouped Bar Chart with Reference Line
 * Library: Recharts
 */
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Legend,
  Tooltip,
} from 'recharts';
import './EvolutiveChart.css';

/**
 * Chart Data - Monthly evolution
 */
const data = [
  { month: 'Ene', previousYear: 23, currentYear: 33 },
  { month: 'Feb', previousYear: 58, currentYear: 58 },
  { month: 'Mar', previousYear: 81, currentYear: 81 },
  { month: 'Abr', previousYear: 94, currentYear: 0 },
  { month: 'May', previousYear: 121, currentYear: 0 },
  { month: 'Jun', previousYear: 121, currentYear: 0 },
  { month: 'Jul', previousYear: 151, currentYear: 0 },
  { month: 'Ago', previousYear: 227, currentYear: 0 },
  { month: 'Sep', previousYear: 186, currentYear: 0 },
  { month: 'Oct', previousYear: 197, currentYear: 0 },
  { month: 'Nov', previousYear: 217, currentYear: 0 },
  { month: 'Dic', previousYear: 247, currentYear: 0 },
];

// Budget reference line value (in same scale)
const budgetValue = 254;

/**
 * Custom Legend Component
 */
const CustomLegend = () => {
  return (
    <div className="evolutive-legend">
      <div className="legend-item">
        <span className="legend-color previous-year"></span>
        <span className="legend-text">Año Anterior</span>
      </div>
      <div className="legend-item">
        <span className="legend-color current-year"></span>
        <span className="legend-text">Año actual</span>
      </div>
      <div className="legend-item">
        <span className="legend-line"></span>
        <span className="legend-text">Presupuesto total del año</span>
      </div>
    </div>
  );
};

/**
 * EvolutiveChart Component
 * Displays grouped bar chart with budget reference line
 */
const EvolutiveChart = () => {
  return (
    <div className="evolutive-chart-container">
      {/* ==================== HORIZONTAL DIVIDER ==================== */}
      <div className="evolutive-divider"></div>

      {/* ==================== CHART TITLE ==================== */}
      <h3 className="evolutive-title">Evolutivo acumulado importe renovado (€)</h3>

      {/* ==================== LEGEND ==================== */}
      <CustomLegend />

      {/* ==================== CHART ==================== */}
      <div className="evolutive-chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
            barGap={0}
            barCategoryGap="20%"
          >
            {/* Grid lines */}
            <CartesianGrid 
              strokeDasharray="0" 
              vertical={false}
              stroke="#EBEBEB"
              strokeWidth={0.78}
            />
            
            {/* X Axis - Months */}
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ 
                fontSize: 12, 
                fill: '#8F8F8F',
                fontFamily: 'Tahoma'
              }}
            />
            
            {/* Y Axis - Values */}
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ 
                fontSize: 11, 
                fill: '#8F8F8F',
                fontFamily: 'Tahoma'
              }}
              tickFormatter={(value) => {
                if (value === 0) return '0';
                return `${Math.round(value / 25)}M`;
              }}
              ticks={[0, 50, 100, 150, 200, 250]}
              domain={[0, 280]}
            />
            
            {/* Budget Reference Line */}
            <ReferenceLine 
              y={budgetValue} 
              stroke="#AE3C33" 
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            
            {/* Tooltip */}
            <Tooltip 
              formatter={(value) => [`${(value * 0.04).toFixed(1)} M€`, '']}
              contentStyle={{
                fontFamily: 'Tahoma',
                fontSize: 12,
              }}
            />
            
            {/* Previous Year Bars */}
            <Bar 
              dataKey="previousYear" 
              fill="#B7E0FB" 
              name="Año Anterior"
              radius={[0, 0, 0, 0]}
              maxBarSize={50}
            />
            
            {/* Current Year Bars */}
            <Bar 
              dataKey="currentYear" 
              fill="#64A9FF" 
              name="Año actual"
              radius={[0, 0, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ==================== Y-AXIS LABELS ==================== */}
      <div className="y-axis-labels">
        <span>10M</span>
        <span>8M</span>
        <span>6M</span>
        <span>4M</span>
        <span>2M</span>
        <span>0</span>
      </div>
    </div>
  );
};

export default EvolutiveChart;
