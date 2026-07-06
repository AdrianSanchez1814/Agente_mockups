import React from 'react';
import LollipopChart from '../LollipopChart';
import SegmentBarChart from '../SegmentBarChart';
import EvolutiveChart from '../EvolutiveChart';
import './ChartsSection.css';

/**
 * =====================================================
 * COMPONENTE: ChartsSection
 * =====================================================
 * 
 * Tipo de gráfico: Sección contenedora de gráficos
 * 
 * Descripción: Componente contenedor que agrupa todos los
 * gráficos del dashboard en una disposición de layout
 * específica:
 * 
 * Fila superior:
 * - LollipopChart: Gráfico por Comunidad Autónoma (izquierda)
 * - SegmentBarChart: Gráficos por Segmento y por Tier (derecha)
 * 
 * Fila inferior:
 * - EvolutiveChart: Gráfico evolutivo acumulado por meses
 * 
 * El componente incluye separadores visuales punteados
 * entre las diferentes secciones según el mockup.
 * =====================================================
 */
const ChartsSection = () => {
  return (
    <section className="charts-section">
      {/* Separador horizontal punteado superior */}
      <div className="charts-section__divider charts-section__divider--horizontal"></div>

      {/* Fila superior de gráficos */}
      <div className="charts-section__top-row">
        {/* Gráfico Lollipop - Por Comunidad Autónoma */}
        <div className="charts-section__lollipop">
          <LollipopChart />
        </div>

        {/* Separador vertical punteado */}
        <div className="charts-section__divider charts-section__divider--vertical"></div>

        {/* Gráficos de Barras - Por Segmento y Por Tier */}
        <div className="charts-section__bars">
          <SegmentBarChart />
        </div>
      </div>

      {/* Separador horizontal punteado inferior */}
      <div className="charts-section__divider charts-section__divider--horizontal"></div>

      {/* Fila inferior - Gráfico Evolutivo */}
      <div className="charts-section__bottom-row">
        <EvolutiveChart />
      </div>
    </section>
  );
};

export default ChartsSection;
