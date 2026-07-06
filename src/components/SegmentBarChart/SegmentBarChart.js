/**
 * SegmentBarChart Component
 * Customer Success Dashboard - ClickEdu
 * 
 * Vertical bar chart showing data by segment:
 * "Por segmento" (By Segment)
 * - Privados (Private)
 * - Concertados (Concerted)
 * - Público (Public)
 * 
 * Features:
 * - Vertical bars with different colors
 * - Labels on top of bars with value and percentage
 * - Category labels at bottom
 * 
 * Chart type: Vertical Bar Chart
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
import './SegmentBarChart.css';

/**
 * Chart Data - Por Segmento
 */
const data = [
  { 
    name: 'Privados', 
    value: 2.1, 
    percentage: 45, 
    color: '#AE3C33',
    height: 126 
  },
  { 
    name: 'Concertados', 
    value: 1.6, 
    percentage: 35, 
    color: '#CE8A85',
    height: 90 
  },
  { 
    name: 'Público', 
    value: 0.9, 
    percentage: 20, 
    color: '#87CCF8',
    height: 54 
  },
];

/**
 * SegmentBarChart Component
 * Displays vertical bar chart for segment data
 */
const SegmentBarChart = () => {
  const maxHeight = 126;

  return (
    <div className="segment-chart-container">
      {/* ==================== CHART TITLE ==================== */}
      <h3 className="chart-title">Por segmento</h3>

      {/* ==================== BAR CHART ==================== */}
      <div className="segment-chart">
        {data.map((item, index) => (
          <div key={item.name} className="segment-bar-wrapper">
            {/* Value Label */}
            <span className="segment-value">
              {item.value.toFixed(1)} M€ ({item.percentage}%)
            </span>
            
            {/* Bar */}
            <div 
              className="segment-bar"
              style={{ 
                backgroundColor: item.color,
                height: `${item.height}px`
              }}
            ></div>
            
            {/* Category Label */}
            <span className="segment-label">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentBarChart;
