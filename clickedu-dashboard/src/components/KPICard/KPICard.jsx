/**
 * ===========================================
 * COMPONENTE: KPICard
 * Tipo: Tarjeta KPI (KPI Card)
 * Descripción: Muestra un indicador clave de rendimiento (KPI)
 *              de forma clara y destacada, permitiendo al usuario
 *              conocer el estado actual de una métrica de un solo vistazo.
 * ===========================================
 */

import React from 'react';
import PropTypes from 'prop-types';
import './KPICard.css';

/**
 * KPICard Component
 * @param {string} title - Nombre del indicador
 * @param {string|number} value - Valor principal
 * @param {number} variation - Variación porcentual o absoluta
 * @param {string} variationType - increase | decrease | neutral
 * @param {string} description - Texto contextual
 * @param {string|React.ReactNode} icon - Ruta del icono (string) o componente React (SVG inline)
 * @param {string} iconBgColor - Color de fondo del icono
 */
const KPICard = ({
  title,
  value,
  variation,
  variationType = 'neutral',
  description,
  icon,
  iconBgColor = '#FEE8EB'
}) => {
  // Determinar el icono de tendencia y color basado en variationType
  const getTrendConfig = () => {
    switch (variationType) {
      case 'increase':
        return {
          icon: '↑',
          className: 'kpi-card__trend--increase'
        };
      case 'decrease':
        return {
          icon: '↓',
          className: 'kpi-card__trend--decrease'
        };
      default:
        return {
          icon: '→',
          className: 'kpi-card__trend--neutral'
        };
    }
  };

  const trendConfig = getTrendConfig();

  // Renderiza el icono basado en su tipo
  const renderIcon = () => {
    if (!icon) {
      return null;
    }

    // Si es un string, renderizar como img tag
    if (typeof icon === 'string') {
      return (
        <img 
          src={icon} 
          alt={title} 
          className="kpi-card__icon"
        />
      );
    }

    // Si es un React element/node, renderizar directamente
    if (React.isValidElement(icon)) {
      return icon;
    }

    return null;
  };

  return (
    <div className="kpi-card">
      {/* Icon Section */}
      <div 
        className="kpi-card__icon-container"
        style={{ backgroundColor: iconBgColor }}
      >
        {renderIcon()}
      </div>

      {/* Content Section */}
      <div className="kpi-card__content">
        <span className="kpi-card__title">{title}</span>
        
        <div className="kpi-card__value-row">
          <span className="kpi-card__value">{value}</span>
          
          {variation !== undefined && (
            <div className={`kpi-card__trend ${trendConfig.className}`}>
              <span className="kpi-card__trend-icon">{trendConfig.icon}</span>
              <span className="kpi-card__trend-value">
                {variation > 0 ? '+' : ''}{variation}%
              </span>
            </div>
          )}
        </div>

        {description && (
          <span className="kpi-card__description">{description}</span>
        )}
      </div>
    </div>
  );
};

KPICard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  variation: PropTypes.number,
  variationType: PropTypes.oneOf(['increase', 'decrease', 'neutral']),
  description: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconBgColor: PropTypes.string
};

export default KPICard;