import React from 'react';
import { TrendingDown, TrendingUp, Volume2, CheckCircle, FileText, Lightbulb, Clock } from 'lucide-react';
import './KPICard.css';

/**
 * =====================================================
 * COMPONENTE: KPICard
 * =====================================================
 * 
 * Tipo de gráfico: Tarjeta KPI (KPI Card)
 * 
 * Descripción: Componente que muestra un indicador clave
 * de rendimiento (KPI) con:
 * - Icono representativo
 * - Título del KPI
 * - Valor principal (y porcentaje opcional)
 * - Variación respecto al periodo anterior
 * - Indicador visual de tendencia (triángulo)
 * 
 * Basado en la documentación de kpis.md del datasource.
 * 
 * Props:
 * - icon: string - Tipo de icono a mostrar
 * - title: string - Nombre del KPI
 * - value: string - Valor principal
 * - percentage: string - Porcentaje (opcional)
 * - variation: string - Variación vs periodo anterior
 * - variationType: 'positive' | 'negative' - Tipo de variación
 * - accentColor: string - Color de acento de la barra superior
 * =====================================================
 */
const KPICard = ({ 
  icon = 'volume', 
  title, 
  value, 
  percentage,
  variation = '-2,0%',
  variationType = 'negative',
  accentColor = '#D6D6D6'
}) => {
  // Mapeo de iconos
  const iconMap = {
    volume: Volume2,
    check: CheckCircle,
    file: FileText,
    document: FileText,
    lightbulb: Lightbulb,
    clock: Clock
  };

  const IconComponent = iconMap[icon] || Volume2;

  // Determinar el color del indicador de tendencia
  const trendColor = variationType === 'positive' ? '#3DC331' : '#CA4536';

  return (
    <div className="kpi-card">
      {/* Barra de acento superior */}
      <div 
        className="kpi-card__accent" 
        style={{ backgroundColor: accentColor }}
      ></div>

      {/* Contenido principal */}
      <div className="kpi-card__content">
        {/* Icono */}
        <div className="kpi-card__icon">
          <IconComponent size={50} color="#8F8F8F" strokeWidth={1.5} />
        </div>

        {/* Título */}
        <span className="kpi-card__title">{title}</span>

        {/* Valor principal */}
        <div className="kpi-card__value-row">
          {percentage ? (
            <>
              <span className="kpi-card__value kpi-card__value--right">{value}</span>
              <span className="kpi-card__separator">|</span>
              <span className="kpi-card__value kpi-card__value--left">{percentage}</span>
            </>
          ) : (
            <span className="kpi-card__value kpi-card__value--center">{value}</span>
          )}
        </div>

        {/* Indicador de variación */}
        <div className="kpi-card__trend">
          <div 
            className={`kpi-card__trend-indicator ${variationType === 'positive' ? 'kpi-card__trend-indicator--up' : 'kpi-card__trend-indicator--down'}`}
            style={{ borderBottomColor: variationType === 'positive' ? '#3DC331' : trendColor }}
          ></div>
          <span className="kpi-card__variation">{variation}</span>
        </div>

        {/* Comparación */}
        <span className="kpi-card__comparison">vs LY</span>
      </div>
    </div>
  );
};

export default KPICard;
