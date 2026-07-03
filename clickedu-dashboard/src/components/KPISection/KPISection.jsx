/**
 * KPISection.jsx - Componente de sección de KPIs
 * ClickEdu Customer Success Dashboard
 * 
 * SECCIÓN: KPIs / Indicadores Clave de Rendimiento
 * Tipo de gráfico: KPI Cards (Tarjetas de indicadores)
 * 
 * Contiene 5 tarjetas KPI:
 * 1. Total a renovar
 * 2. Renovado
 * 3. Por renovar
 * 4. Bajas
 * 5. Ventas adicionales vs presupuesto
 */

import React from 'react';
import './KPISection.css';

/**
 * Componente KPISection
 * Renderiza las tarjetas KPI con los indicadores principales del dashboard
 */
const KPISection = () => {
  // Datos de los KPIs según el mockup
  const kpiData = [
    {
      id: 'total-renovar',
      title: 'Total a renovar',
      value: '500',
      secondaryValue: null,
      variation: -2.0,
      variationType: 'decrease',
      description: 'vs LY',
      icon: 'building'
    },
    {
      id: 'renovado',
      title: 'Renovado',
      value: '210',
      secondaryValue: '42,0%',
      variation: -2.0,
      variationType: 'decrease',
      description: 'vs LY',
      icon: 'download'
    },
    {
      id: 'por-renovar',
      title: 'Por renovar',
      value: '262',
      secondaryValue: '52,5%',
      variation: -2.0,
      variationType: 'decrease',
      description: 'vs LY',
      icon: 'upload'
    },
    {
      id: 'bajas',
      title: 'Bajas',
      value: '28',
      secondaryValue: '5,5%',
      variation: -2.0,
      variationType: 'decrease',
      description: 'vs LY',
      icon: 'cancel'
    },
    {
      id: 'ventas-adicionales',
      title: 'Ventas adicion. vs ppto',
      value: '250',
      secondaryValue: '+5,5%',
      secondaryPositive: true,
      variation: -2.0,
      variationType: 'decrease',
      description: 'vs LY',
      icon: 'euro'
    }
  ];

  /**
   * Renderiza el icono SVG según el tipo
   */
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'building':
        return (
          <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01"></path>
          </svg>
        );
      case 'download':
        return (
          <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 17v2a2 2 0 002 2h10a2 2 0 002-2v-2"></path>
          </svg>
        );
      case 'upload':
        return (
          <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 15V3m0 0l-4 4m4-4l4 4M5 17v2a2 2 0 002 2h10a2 2 0 002-2v-2"></path>
          </svg>
        );
      case 'cancel':
        return (
          <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        );
      case 'euro':
        return (
          <svg className="kpi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M14.5 9.5a3.5 3.5 0 00-5 0m5 5a3.5 3.5 0 01-5 0M8 10h6M8 14h6"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  /**
   * Renderiza el icono de tendencia
   */
  const renderTrendIcon = (variationType) => {
    if (variationType === 'decrease') {
      return (
        <svg className="trend-icon decrease" viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
          <path d="M7 14l5 5 5-5H7z"></path>
        </svg>
      );
    }
    return (
      <svg className="trend-icon increase" viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
        <path d="M7 10l5-5 5 5H7z"></path>
      </svg>
    );
  };

  return (
    <section className="kpi-section">
      {/* ====================================== */}
      {/* Toggle buttons Importe/Nº Cuentas */}
      {/* ====================================== */}
      <div className="kpi-toggles">
        <button className="toggle-button">Importe</button>
        <button className="toggle-button active">Nº Cuentas</button>
      </div>

      {/* ====================================== */}
      {/* Tarjetas KPI */}
      {/* ====================================== */}
      <div className="kpi-cards">
        {kpiData.map((kpi) => (
          <div key={kpi.id} className="kpi-card">
            {/* Icono del KPI */}
            <div className="kpi-card-icon">
              {renderIcon(kpi.icon)}
              {kpi.id === 'ventas-adicionales' && (
                <button className="kpi-info-button" aria-label="Información">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </button>
              )}
            </div>

            {/* Título */}
            <span className="kpi-card-title">{kpi.title}</span>

            {/* Valor principal */}
            <div className="kpi-card-value">
              <span className="kpi-main-value">{kpi.value}</span>
              {kpi.secondaryValue && (
                <>
                  <span className="kpi-value-separator">|</span>
                  <span className={`kpi-secondary-value ${kpi.secondaryPositive ? 'positive' : ''}`}>
                    {kpi.secondaryValue}
                  </span>
                </>
              )}
            </div>

            {/* Variación */}
            <div className="kpi-card-variation">
              {renderTrendIcon(kpi.variationType)}
              <span className={`kpi-variation-value ${kpi.variationType}`}>
                {kpi.variation}%
              </span>
              <span className="kpi-variation-desc">{kpi.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KPISection;
