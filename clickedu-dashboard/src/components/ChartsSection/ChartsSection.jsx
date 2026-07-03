/**
 * ChartsSection.jsx - Componente de sección de gráficos de distribución
 * ClickEdu Customer Success Dashboard
 * 
 * SECCIÓN: Gráficos de distribución (3 gráficos)
 * 
 * Tipos de gráficos:
 * 1. Gráfico de Barras Horizontales - "Por Comunidad Autónoma"
 * 2. Gráfico de Barras Verticales - "Por segmento"
 * 3. Gráfico de Barras Verticales - "Por tier"
 */

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
import './ChartsSection.css';

/**
 * Componente ChartsSection
 * Renderiza los tres gráficos de distribución del dashboard
 */
const ChartsSection = () => {
  
  /* ====================================== */
  /* DATOS: Gráfico Por Comunidad Autónoma */
  /* Tipo: Barras Horizontales */
  /* ====================================== */
  const comunidadData = [
    { category: 'Cataluña', value: 57, percentage: '26%' },
    { category: 'Madrid', value: 48, percentage: '23%' },
    { category: 'Andalucía', value: 42, percentage: '20%' },
    { category: 'Valencia', value: 34, percentage: '16%' },
    { category: 'Baleares', value: 32, percentage: '15%' },
  ];

  /* ====================================== */
  /* DATOS: Gráfico Por Segmento */
  /* Tipo: Barras Verticales */
  /* ====================================== */
  const segmentoData = [
    { name: 'Privados', value: 95, percentage: '45%', color: '#8B2323' },
    { name: 'Concertados', value: 74, percentage: '35%', color: '#CD8C8C' },
    { name: 'Público', value: 42, percentage: '20%', color: '#87CEEB' },
  ];

  /* ====================================== */
  /* DATOS: Gráfico Por Tier */
  /* Tipo: Barras Verticales */
  /* ====================================== */
  const tierData = [
    { name: 'Tier 1', value: 29, percentage: '14%', color: '#8B2323' },
    { name: 'Tier 2', value: 82, percentage: '39%', color: '#DAA520' },
    { name: 'Tier 3', value: 99, percentage: '47%', color: '#87CEEB' },
  ];

  /**
   * Componente de tooltip personalizado para barras horizontales
   */
  const CustomTooltipHorizontal = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{payload[0].payload.category}</p>
          <p className="tooltip-value">{payload[0].value} ({payload[0].payload.percentage})</p>
        </div>
      );
    }
    return null;
  };

  /**
   * Componente de tooltip personalizado para barras verticales
   */
  const CustomTooltipVertical = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{payload[0].payload.name}</p>
          <p className="tooltip-value">{payload[0].value} ({payload[0].payload.percentage})</p>
        </div>
      );
    }
    return null;
  };

  /**
   * Renderiza etiqueta personalizada con punto circular
   */
  const renderCustomLabel = (props) => {
    const { x, y, width, value, percentage } = props;
    return (
      <g>
        <circle cx={x + width + 10} cy={y + 10} r={5} fill="#87CEEB" />
        <text x={x + width + 20} y={y + 14} fill="#374151" fontSize={12}>
          {value} ({percentage})
        </text>
      </g>
    );
  };

  return (
    <section className="charts-section">
      {/* ====================================== */}
      {/* GRÁFICO 1: Por Comunidad Autónoma */}
      {/* Tipo: Gráfico de Barras Horizontales */}
      {/* ====================================== */}
      <div className="chart-container chart-comunidad">
        <h3 className="chart-title">Por Comunidad Autónoma</h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={comunidadData}
              layout="vertical"
              margin={{ top: 10, right: 80, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" hide />
              <YAxis 
                dataKey="category" 
                type="category" 
                width={80}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#374151' }}
              />
              <Tooltip content={<CustomTooltipHorizontal />} />
              <Bar 
                dataKey="value" 
                fill="#1E3A5F"
                radius={[0, 4, 4, 0]}
                barSize={20}
              >
                <LabelList 
                  dataKey="value" 
                  position="right" 
                  content={(props) => {
                    const { x, y, width, value, index } = props;
                    const item = comunidadData[index];
                    return (
                      <g>
                        <circle cx={x + width + 15} cy={y + 10} r={6} fill="#87CEEB" />
                        <text x={x + width + 28} y={y + 14} fill="#374151" fontSize={12}>
                          {value} ({item.percentage})
                        </text>
                      </g>
                    );
                  }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ====================================== */}
      {/* GRÁFICO 2: Por Segmento */}
      {/* Tipo: Gráfico de Barras Verticales */}
      {/* ====================================== */}
      <div className="chart-container chart-segmento">
        <h3 className="chart-title">Por segmento</h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={segmentoData}
              margin={{ top: 30, right: 20, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#374151' }}
              />
              <YAxis hide />
              <Tooltip content={<CustomTooltipVertical />} />
              <Bar 
                dataKey="value" 
                radius={[4, 4, 0, 0]}
                barSize={60}
              >
                {segmentoData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList 
                  dataKey="value" 
                  position="top" 
                  content={(props) => {
                    const { x, y, width, value, index } = props;
                    const item = segmentoData[index];
                    return (
                      <text 
                        x={x + width / 2} 
                        y={y - 10} 
                        fill="#374151" 
                        fontSize={12}
                        textAnchor="middle"
                      >
                        {value} ({item.percentage})
                      </text>
                    );
                  }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ====================================== */}
      {/* GRÁFICO 3: Por Tier */}
      {/* Tipo: Gráfico de Barras Verticales */}
      {/* ====================================== */}
      <div className="chart-container chart-tier">
        <h3 className="chart-title">Por tier</h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={tierData}
              margin={{ top: 30, right: 20, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#374151' }}
              />
              <YAxis hide />
              <Tooltip content={<CustomTooltipVertical />} />
              <Bar 
                dataKey="value" 
                radius={[4, 4, 0, 0]}
                barSize={60}
              >
                {tierData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList 
                  dataKey="value" 
                  position="top" 
                  content={(props) => {
                    const { x, y, width, value, index } = props;
                    const item = tierData[index];
                    return (
                      <text 
                        x={x + width / 2} 
                        y={y - 10} 
                        fill="#374151" 
                        fontSize={12}
                        textAnchor="middle"
                      >
                        {value} ({item.percentage})
                      </text>
                    );
                  }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;
