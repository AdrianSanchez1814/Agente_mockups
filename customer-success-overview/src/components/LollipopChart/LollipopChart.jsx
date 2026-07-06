import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList
} from 'recharts';
import './LollipopChart.css';

/**
 * =====================================================
 * COMPONENTE: LollipopChart
 * =====================================================
 * 
 * Tipo de gráfico: Gráfico de Barras Horizontales (Lollipop Style)
 * 
 * Descripción: Gráfico de barras horizontales con etiquetas
 * externas que muestra datos por Comunidad Autónoma.
 * 
 * Datos:
 * - Cataluña: 1,2 M€ (26%)
 * - Madrid: 1,1 M€ (23%)
 * - Andalucía: 0,9 M€ (20%)
 * - Valencia: 0,7 M€ (16%)
 * - Baleares: 0,7 M€ (15%)
 * 
 * Basado en la documentación de grafico_barras.md del datasource.
 * Utiliza la librería Recharts para la visualización.
 * =====================================================
 */
const LollipopChart = () => {
  // Datos del gráfico según el mockup
  const data = [
    { name: 'Cataluña', value: 412, label: '1,2 M€ (26%)' },
    { name: 'Madrid', value: 373, label: '1,1 M€ (23%)' },
    { name: 'Andalucía', value: 352, label: '0,9 M€ (20%)' },
    { name: 'Valencia', value: 278, label: '0,7 M€ (16%)' },
    { name: 'Baleares', value: 276, label: '0,7 M€ (15%)' },
  ];

  // Color de las barras
  const barColor = '#3975E4';

  // Renderizado de etiqueta personalizada
  const renderCustomizedLabel = (props) => {
    const { x, y, width, value, index } = props;
    return (
      <text
        x={x + width + 25}
        y={y + 12}
        fill="#000000"
        fontSize={16}
        fontFamily="Tahoma"
      >
        {data[index].label}
      </text>
    );
  };

  return (
    <div className="lollipop-chart">
      {/* Título */}
      <h3 className="lollipop-chart__title">Por Comunidad Autónoma</h3>

      {/* Gráfico */}
      <div className="lollipop-chart__container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 140, left: 0, bottom: 0 }}
            barSize={3}
          >
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              width={79}
              tick={{
                fill: '#666666',
                fontSize: 18,
                fontFamily: 'Tahoma',
                textAnchor: 'end'
              }}
            />
            <Bar
              dataKey="value"
              radius={[0, 10, 10, 0]}
              background={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barColor} />
              ))}
              <LabelList
                dataKey="value"
                content={renderCustomizedLabel}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LollipopChart;
