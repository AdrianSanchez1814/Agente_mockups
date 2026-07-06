/**
 * TierBarChart Component
 * Customer Success Dashboard - ClickEdu
 * 
 * Vertical bar chart showing data by tier:
 * "Por tier" (By Tier)
 * - Tier 1
 * - Tier 2
 * - Tier 3
 * 
 * Features:
 * - Vertical bars with different colors
 * - Labels on top of bars with value and percentage
 * - Tier labels at bottom
 * 
 * Chart type: Vertical Bar Chart
 * Library: Recharts
 */
import React from 'react';
import './TierBarChart.css';

/**
 * Chart Data - Por Tier
 */
const data = [
  { 
    name: 'Tier 1', 
    value: 0.6, 
    percentage: 14, 
    color: '#CA4536',
    height: 37 
  },
  { 
    name: 'Tier 2', 
    value: 1.8, 
    percentage: 39, 
    color: '#E5A949',
    height: 100 
  },
  { 
    name: 'Tier 3', 
    value: 2.2, 
    percentage: 47, 
    color: '#FADFA0',
    height: 118 
  },
];

/**
 * TierBarChart Component
 * Displays vertical bar chart for tier data
 */
const TierBarChart = () => {
  return (
    <div className="tier-chart-container">
      {/* ==================== CHART TITLE ==================== */}
      <h3 className="chart-title">Por tier</h3>

      {/* ==================== BAR CHART ==================== */}
      <div className="tier-chart">
        {data.map((item, index) => (
          <div key={item.name} className="tier-bar-wrapper">
            {/* Value Label */}
            <span className="tier-value">
              {item.value.toFixed(1)} M€ ({item.percentage}%)
            </span>
            
            {/* Bar */}
            <div 
              className="tier-bar"
              style={{ 
                backgroundColor: item.color,
                height: `${item.height}px`
              }}
            ></div>
            
            {/* Tier Label */}
            <span className="tier-label">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TierBarChart;
