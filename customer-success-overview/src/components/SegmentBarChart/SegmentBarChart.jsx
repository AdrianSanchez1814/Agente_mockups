import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList,
  ReferenceLine
} from 'recharts';
import './SegmentBarChart.css';

/**
 * =====================================================
 * COMPONENTE: SegmentBarChart
 * =====================================================
 * 
 * Tipo de gráfico: Gráfico de Barras Verticales
 * 
 * Descripción: Gráficos de barras verticales divididos en
 * dos secciones:
 * 
 * Por Segmento:
 * - Privados: 2,1 M€ (45%) - Color rojo oscuro
 * - Concertados: 1,6 M€ (35%) - Color rojo claro
 * - Público: 0,9 M€ (20%) - Color azul claro
 * 
 * Por Tier:
 * - Tier 1: 0,6 M€ (14%) - Color rojo
 * - Tier 2: 1,8 M€ (39%) - Color amarillo
 * - Tier 3: 2,2 M€ (47%) - Color amarillo claro
 * 
 * Basado en la documentación de grafico_barras.md del datasource.
 * Utiliza la librería Recharts para la visualización.
 * =====================================================
 */
const SegmentBarChart = () => {
  // Datos del gráfico por Segmento
  const segmentData = [
    { name: 'Privados', value: 126, label: '2,1 M€ (45%)', color: '#AE3C33' },
    { name: 'Concertados', value: 90, label: '1,6 M€ (35%)', color: '#CE8A85' },
    { name: 'Público', value: 54, label: '0,9 M€ (20%)', color: '#87CCF8' },
  ];

  // Datos del gráfico por Tier
  const tierData = [
    { name: 'Tier 1', value: 37, label: '0,6 M€ (14%)', color: '#CA4536' },
    { name: 'Tier 2', value: 100, label: '1,8 M€ (39%)', color: '#E5A949' },
    { name: 'Tier 3', value: 118, label: '2,2 M€ (47%)', color: '#FADFA0' },
  ];

  // Renderizado de etiqueta personalizada encima de las barras
  const renderCustomizedLabel = (props, data) => {
    const { x, y, width, index } = props;
    return (
      <text
        x={x + width / 2}
        y={y - 10}
        fill="#000000"
        fontSize={16}
        fontFamily="Tahoma"
        textAnchor="middle"
      >
        {data[index].label}
      </text>
    );
  };

  return (
    <div className="segment-bar-chart">
      {/* Sección Por Segmento */}
      <div className="segment-bar-chart__section">
        <h3 className="segment-bar-chart__title">Por segmento</h3>
        <div className="segment-bar-chart__container">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={segmentData}
              margin={{ top: 30, right: 20, left: 20, bottom: 40 }}
              barSize={73}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: '#666666',
                  fontSize: 18,
                  fontFamily: 'Tahoma'
                }}
              />
              <YAxis hide domain={[0, 150]} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {segmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList
                  dataKey="value"
                  content={(props) => renderCustomizedLabel(props, segmentData)}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Separador vertical punteado */}
      <div className="segment-bar-chart__separator"></div>

      {/* Sección Por Tier */}
      <div className="segment-bar-chart__section">
        <h3 className="segment-bar-chart__title">Por tier</h3>
        <div className="segment-bar-chart__container">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={tierData}
              margin={{ top: 30, right: 20, left: 20, bottom: 40 }}
              barSize={73}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: '#666666',
                  fontSize: 18,
                  fontFamily: 'Tahoma'
                }}
              />
              <YAxis hide domain={[0, 150]} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {tierData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList
                  dataKey="value"
                  content={(props) => renderCustomizedLabel(props, tierData)}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SegmentBarChart;
