/**
 * KPISection Component
 * Customer Success Dashboard - ClickEdu
 * 
 * Section containing 5 KPI cards:
 * - Total a renovar
 * - Renovado
 * - Por renovar
 * - Bajas
 * - Ventas adicion. vs ppto
 * 
 * Each KPI displays:
 * - Icon
 * - Title
 * - Main value (with percentage for some)
 * - Trend indicator (up/down arrow)
 * - Comparison text (vs LY)
 */
import React from 'react';
import './KPISection.css';

// Import icons
import iconVolumen from '../../assets/icons/SGT_icon_outlined_media-volumen.png';
import iconTicketsResueltos from '../../assets/icons/icon_tickets-resueltos.png';
import iconTiempoResolucion from '../../assets/icons/icon_tiempo-resolucion.png';
import iconValidDocument from '../../assets/icons/icon_valid-document.png';
import iconBusinessIdea from '../../assets/icons/streamline-sharp_business-idea-money.png';

/**
 * KPI Card Data
 */
const kpiData = [
  {
    id: 'total-renovar',
    title: 'Total a renovar',
    value: '10,9 M€',
    percentage: null,
    variation: '-2,0%',
    variationType: 'decrease',
    vsLabel: 'vs LY',
    icon: iconVolumen,
    accentColor: '#D6D6D6', // Gray underline
  },
  {
    id: 'renovado',
    title: 'Renovado',
    value: '4,6 M€',
    percentage: '42,0%',
    variation: '-2,0%',
    variationType: 'decrease',
    vsLabel: 'vs LY',
    icon: iconTicketsResueltos,
    accentColor: '#FD3D4A', // Red underline (active)
  },
  {
    id: 'por-renovar',
    title: 'Por renovar',
    value: '5,7 M€',
    percentage: '52,5%',
    variation: '-2,0%',
    variationType: 'decrease',
    vsLabel: 'vs LY',
    icon: iconTiempoResolucion,
    accentColor: '#D6D6D6',
  },
  {
    id: 'bajas',
    title: 'Bajas',
    value: '0,6 M€',
    percentage: '5,5%',
    variation: '-2,0%',
    variationType: 'increase', // Green arrow
    vsLabel: 'vs LY',
    icon: iconValidDocument,
    accentColor: '#D6D6D6',
  },
  {
    id: 'ventas-adicionales',
    title: 'Ventas adicion. vs ppto',
    value: '1,8 M€',
    percentage: '+5,5%',
    variation: '-2,0%',
    variationType: 'decrease',
    vsLabel: 'vs LY',
    icon: iconBusinessIdea,
    accentColor: '#D6D6D6',
  },
];

/**
 * KPICard Component
 * Individual KPI card with icon, value, and trend
 */
const KPICard = ({ kpi }) => {
  return (
    <div className="kpi-card">
      {/* Accent line under the card */}
      <div 
        className="kpi-accent-line" 
        style={{ backgroundColor: kpi.accentColor }}
      ></div>

      <div className="kpi-content">
        {/* ==================== ICON ==================== */}
        <div className="kpi-icon">
          <img src={kpi.icon} alt={kpi.title} />
        </div>

        {/* ==================== TITLE ==================== */}
        <span className="kpi-title">{kpi.title}</span>

        {/* ==================== VALUES ROW ==================== */}
        <div className="kpi-values">
          {kpi.percentage ? (
            <>
              <span className="kpi-value">{kpi.value}</span>
              <span className="kpi-separator">|</span>
              <span className="kpi-percentage">{kpi.percentage}</span>
            </>
          ) : (
            <span className="kpi-value center">{kpi.value}</span>
          )}
        </div>

        {/* ==================== TREND INDICATOR ==================== */}
        <div className="kpi-trend">
          <div 
            className={`trend-arrow ${kpi.variationType}`}
          ></div>
          <span className="trend-value">{kpi.variation}</span>
        </div>

        {/* ==================== VS LABEL ==================== */}
        <span className="kpi-vs-label">{kpi.vsLabel}</span>
      </div>
    </div>
  );
};

/**
 * KPISection Component
 * Container for all KPI cards
 */
const KPISection = () => {
  return (
    <section className="kpi-section">
      {/* ==================== KPI CARDS GRID ==================== */}
      <div className="kpi-cards-container">
        {kpiData.map((kpi) => (
          <KPICard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      {/* ==================== INFO ICON ==================== */}
      <button className="kpi-info-button" aria-label="Información KPIs">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="#666666" strokeWidth="1.5" fill="none"/>
          <path d="M12 11V17" stroke="#666666" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="7" r="1" fill="#666666"/>
        </svg>
      </button>
    </section>
  );
};

export default KPISection;
