/**
 * LollipopChart Component
 * Customer Success Dashboard - ClickEdu
 * 
 * Horizontal lollipop bar chart showing data by:
 * "Por Comunidad Autónoma" (By Autonomous Community)
 * 
 * Features:
 * - Horizontal bars with circle endpoint (lollipop style)
 * - Labels on the left (Cataluña, Madrid, etc.)
 * - Values with percentage on the right
 * 
 * Chart type: Lollipop Horizontal Bar Chart
 * Library: Recharts
 */
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList,
} from 'recharts';
import './LollipopChart.css';

/**
 * Chart Data - Por Comunidad Autónoma
 */
const data = [
  { name: 'Cataluña', value: 1.2, percentage: 26, fullWidth: 412 },
  { name: 'Madrid', value: 1.1, percentage: 23, fullWidth: 373 },
  { name: 'Andalucía', value: 0.9, percentage: 20, fullWidth: 352 },
  { name: 'Valencia', value: 0.7, percentage: 16, fullWidth: 278 },
  { name: 'Baleares', value: 0.7, percentage: 15, fullWidth: 276 },
];

/**
 * Custom label renderer for bar values
 */
const renderCustomLabel = (props) => {
  const { x, y, width, value, index } = props;
  const item = data[index];
  
  return (
    <text
      x={x + width + 30}
      y={y + 12}
      fill="#000000"
      fontSize={16}
      fontFamily="Tahoma"
    >
      {item.value.toFixed(1)} M€ ({item.percentage}%)
    </text>
  );
};

/**
 * LollipopChart Component
 * Displays horizontal lollipop chart for regional data
 */
const LollipopChart = () => {
  return (
    <div className="lollipop-chart-container">
      {/* ==================== CHART TITLE ==================== */}
      <h3 className="chart-title">Por Comunidad Autónoma</h3>

      {/* ==================== LOLLIPOP CHART ==================== */}
      <div className="lollipop-chart">
        {/* Custom implementation with labels */}
        {data.map((item, index) => (
          <div key={item.name} className="lollipop-row">
            {/* Label */}
            <span className="lollipop-label">{item.name}</span>
            
            {/* Bar container */}
            <div className="lollipop-bar-container">
              {/* Bar with circle endpoint */}
              <div 
                className="lollipop-bar"
                style={{ width: `${(item.fullWidth / 412) * 100}%` }}
              >
                <div className="lollipop-line"></div>
                <div className="lollipop-circle"></div>
              </div>
              
              {/* Value label */}
              <span className="lollipop-value">
                {item.value.toFixed(1)} M€ ({item.percentage}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LollipopChart;
