import React from 'react';
import './KPICard.css';

/**
 * KPICard Component
 * Tarjeta de KPI individual que muestra un valor con icono y etiqueta
 * Tipo: KPI Card con icono, valor numérico y descripción
 */
const KPICard = ({ 
  icon, 
  value, 
  label, 
  trend = null,
  trendValue = null,
  backgroundColor = '#FFFFFF',
  iconBackgroundColor = '#FEE8E9',
  valueColor = '#3D3D3D',
  labelColor = '#666666'
}) => {
  return (
    <div className="kpi-card" style={{ backgroundColor }}>
      {/* Icon Section */}
      <div className="kpi-card__icon-wrapper" style={{ backgroundColor: iconBackgroundColor }}>
        {typeof icon === 'string' ? (
          <img src={icon} alt={label} className="kpi-card__icon" />
        ) : (
          <div className="kpi-card__icon">{icon}</div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="kpi-card__content">
        <div className="kpi-card__value-row">
          <span className="kpi-card__value" style={{ color: valueColor }}>
            {value}
          </span>
          {trend && (
            <span className={`kpi-card__trend kpi-card__trend--${trend}`}>
              {trend === 'up' ? '↑' : '↓'} {trendValue}
            </span>
          )}
        </div>
        <span className="kpi-card__label" style={{ color: labelColor }}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default KPICard;
