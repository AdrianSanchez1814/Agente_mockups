/**
 * ===========================================
 * COMPONENTE: KPISection
 * Tipo: Sección de Tarjetas KPI
 * Descripción: Agrupa 6 tarjetas KPI en un grid de 3x2
 *              mostrando métricas clave del soporte de tickets:
 *              - Tickets Resueltos
 *              - Tickets Nuevos  
 *              - Tiempo Resolución
 *              - First Contact Resolution
 *              - Coste por Ticket
 *              - Documentos Válidos
 * ===========================================
 */

import React from 'react';
import KPICard from '../KPICard';
import './KPISection.css';

/**
 * SVG Icon Components
 * Iconos inline SVG simples con color gris (#6B7280) y tamaño 24x24
 */

// Icono de documento con checkmark para Tickets Resueltos
const TicketsResueltosIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M14 2V8H20" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M9 15L11 17L15 13" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icono de personas para Tickets Nuevos
const TicketsNuevosIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icono de reloj para Tiempo Resolución
const TiempoResolucionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 6V12L16 14" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icono de casa para First Contact Resolution
const FirstContactIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M9 22V12H15V22" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icono de bombilla con euro para Coste por Ticket
const CosteTicketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M9 18H15" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M10 22H14" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M15.09 14C15.65 13.33 16 12.44 16 11.5C16 9.01 13.99 7 11.5 7C9.91 7 8.5 7.82 7.69 9.08" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 2C8.69 2 6 4.69 6 8C6 9.5 6.5 10.87 7.35 11.96C8.21 13.06 9 14.23 9 15.5V16H15V15.5C15 14.23 15.79 13.06 16.65 11.96C17.5 10.87 18 9.5 18 8C18 4.69 15.31 2 12 2Z" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M10 11H14" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M10 9H13" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

// Icono de documento válido para Documentos Válidos
const DocumentosValidosIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M14 2V8H20" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M8 13H16" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M8 17H16" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M8 9H10" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * KPI Data Configuration
 * Datos de ejemplo para las 6 métricas del dashboard
 */
const kpiData = [
  {
    id: 1,
    title: 'Tickets Resueltos',
    value: '1.245',
    variation: 12.4,
    variationType: 'increase',
    description: 'vs mes anterior',
    icon: <TicketsResueltosIcon />,
    iconBgColor: '#FEE8EB'
  },
  {
    id: 2,
    title: 'Tickets Nuevos',
    value: '342',
    variation: -5.2,
    variationType: 'decrease',
    description: 'vs mes anterior',
    icon: <TicketsNuevosIcon />,
    iconBgColor: '#F3F4F6'
  },
  {
    id: 3,
    title: 'Tiempo Resolución',
    value: '4.2h',
    variation: -18.5,
    variationType: 'increase',
    description: 'promedio (mejor)',
    icon: <TiempoResolucionIcon />,
    iconBgColor: '#F3F4F6'
  },
  {
    id: 4,
    title: 'First Contact Resolution',
    value: '78%',
    variation: 8.3,
    variationType: 'increase',
    description: 'vs mes anterior',
    icon: <FirstContactIcon />,
    iconBgColor: '#FEE8EB'
  },
  {
    id: 5,
    title: 'Coste por Ticket',
    value: '€12.50',
    variation: -3.1,
    variationType: 'increase',
    description: 'promedio (mejor)',
    icon: <CosteTicketIcon />,
    iconBgColor: '#F3F4F6'
  },
  {
    id: 6,
    title: 'Documentos Válidos',
    value: '95%',
    variation: 2.1,
    variationType: 'increase',
    description: 'tasa de aprobación',
    icon: <DocumentosValidosIcon />,
    iconBgColor: '#F3F4F6'
  }
];

const KPISection = () => {
  return (
    <section className="kpi-section">
      <div className="kpi-section__grid">
        {kpiData.map((kpi) => (
          <KPICard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            variation={kpi.variation}
            variationType={kpi.variationType}
            description={kpi.description}
            icon={kpi.icon}
            iconBgColor={kpi.iconBgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default KPISection;