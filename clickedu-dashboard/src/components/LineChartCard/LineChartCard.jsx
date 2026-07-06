/**
 * ===========================================
 * COMPONENTE: LineChartCard
 * Tipo: Gráfico de Líneas (Line Chart)
 * Descripción: Muestra la evolución de tickets a lo largo del tiempo
 *              utilizando un gráfico de líneas con Recharts.
 *              Permite visualizar tendencias y comparar diferentes métricas.
 * Librería: Recharts
 * ===========================================
 */

import React from 'react';
import PropTypes from 'prop-types';
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
import './LineChartCard.css';

/**
 * Sample data for tickets evolution
 * Datos de ejemplo mostrando la evolución de tickets por mes
 */
const defaultData = [
  { label: 'Ene', ticketsResueltos: 1050, ticketsNuevos: 1200 },
  { label: 'Feb', ticketsResueltos: 1150, ticketsNuevos: 1100 },
  { label: 'Mar', ticketsResueltos: 1280, ticketsNuevos: 1300 },
  { label: 'Abr', ticketsResueltos: 1180, ticketsNuevos: 1150 },
  { label: 'May', ticketsResueltos: 1320, ticketsNuevos: 1250 },
  { label: 'Jun', ticketsResueltos: 1245, ticketsNuevos: 1180 },
  { label: 'Jul', ticketsResueltos: 1380, ticketsNuevos: 1320 },
  { label: 'Ago', ticketsResueltos: 1200, ticketsNuevos: 1100 },
  { label: 'Sep', ticketsResueltos: 1450, ticketsNuevos: 1380 },
  { label: 'Oct', ticketsResueltos: 1520, ticketsNuevos: 1450 },
  { label: 'Nov', ticketsResueltos: 1380, ticketsNuevos: 1300 },
  { label: 'Dic', ticketsResueltos: 1245, ticketsNuevos: 1180 }
];

/**
 * Custom Tooltip Component
 */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="line-chart__tooltip">
        <p className="line-chart__tooltip-label">{label}</p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="line-chart__tooltip-value"
            style={{ color: entry.color }}
          >
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

/**
 * LineChartCard Component
 * @param {string} title - Título del gráfico
 * @param {Array} data - Datos para el gráfico
 * @param {number} height - Altura del gráfico
 */
const LineChartCard = ({
  title = 'Evolución de Tickets',
  data = defaultData,
  height = 350
}) => {
  return (
    <div className="line-chart-card">
      {/* Card Header */}
      <div className="line-chart-card__header">
        <h3 className="line-chart-card__title">{title}</h3>
      </div>

      {/* Chart Container */}
      <div className="line-chart-card__content">
        <ResponsiveContainer width="100%" height={height}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 10
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#E5E7EB"
              vertical={false}
            />
            
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              dy={10}
            />
            
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              dx={-10}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Legend
              wrapperStyle={{
                paddingTop: '20px'
              }}
              iconType="circle"
              iconSize={8}
            />
            
            {/* Línea de Tickets Resueltos */}
            <Line
              type="monotone"
              dataKey="ticketsResueltos"
              name="Tickets Resueltos"
              stroke="#F5455C"
              strokeWidth={2}
              dot={{ r: 4, fill: '#F5455C', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#F5455C', strokeWidth: 2, stroke: '#fff' }}
            />
            
            {/* Línea de Tickets Nuevos */}
            <Line
              type="monotone"
              dataKey="ticketsNuevos"
              name="Tickets Nuevos"
              stroke="#2563EB"
              strokeWidth={2}
              dot={{ r: 4, fill: '#2563EB', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#2563EB', strokeWidth: 2, stroke: '#fff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

LineChartCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      ticketsResueltos: PropTypes.number,
      ticketsNuevos: PropTypes.number
    })
  ),
  height: PropTypes.number
};

export default LineChartCard;
