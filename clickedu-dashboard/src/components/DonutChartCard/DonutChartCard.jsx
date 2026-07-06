/**
 * ===========================================
 * COMPONENTE: DonutChartCard
 * Tipo: Gráfico Donut (Pie Chart)
 * Descripción: Muestra la distribución porcentual de tickets por categoría
 *              utilizando un gráfico de donut con Recharts.
 *              Permite visualizar la proporción de cada segmento respecto al total.
 * Librería: Recharts
 * ===========================================
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from 'recharts';
import './DonutChartCard.css';

/**
 * Color palette for chart segments
 */
const COLORS = [
  '#F5455C',
  '#2563EB',
  '#10B981',
  '#F59E0B',
  '#8B5CF6',
  '#06B6D4'
];

/**
 * Sample data for tickets distribution
 */
const defaultData = [
  { name: 'Técnico', value: 35 },
  { name: 'Consultas', value: 28 },
  { name: 'Incidencias', value: 20 },
  { name: 'Facturación', value: 12 },
  { name: 'Otros', value: 5 }
];

/**
 * Custom Tooltip Component
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="donut-chart__tooltip">
        <p 
          className="donut-chart__tooltip-name"
          style={{ color: data.payload.fill }}
        >
          {data.name}
        </p>
        <p className="donut-chart__tooltip-value">
          {data.value}% del total
        </p>
      </div>
    );
  }
  return null;
};

/**
 * Custom Legend Component
 */
const CustomLegend = ({ payload }) => {
  return (
    <ul className="donut-chart__legend">
      {payload.map((entry, index) => (
        <li key={index} className="donut-chart__legend-item">
          <span 
            className="donut-chart__legend-color"
            style={{ backgroundColor: entry.color }}
          />
          <span className="donut-chart__legend-text">{entry.value}</span>
          <span className="donut-chart__legend-value">
            {defaultData[index]?.value}%
          </span>
        </li>
      ))}
    </ul>
  );
};

/**
 * DonutChartCard Component
 * @param {string} title - Título del gráfico
 * @param {Array} data - Datos para el gráfico
 * @param {number} height - Altura del gráfico
 */
const DonutChartCard = ({
  title = 'Distribución por Categoría',
  data = defaultData,
  height = 350
}) => {
  // Calculate total for center label
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="donut-chart-card">
      {/* Card Header */}
      <div className="donut-chart-card__header">
        <h3 className="donut-chart-card__title">{title}</h3>
      </div>

      {/* Chart Container */}
      <div className="donut-chart-card__content">
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={2}
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            
            <Tooltip content={<CustomTooltip />} />
            
            <Legend
              content={<CustomLegend />}
              layout="vertical"
              align="right"
              verticalAlign="middle"
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label */}
        <div className="donut-chart-card__center-label">
          <span className="donut-chart-card__center-value">{total}%</span>
          <span className="donut-chart-card__center-text">Total</span>
        </div>
      </div>
    </div>
  );
};

DonutChartCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ),
  height: PropTypes.number
};

export default DonutChartCard;
