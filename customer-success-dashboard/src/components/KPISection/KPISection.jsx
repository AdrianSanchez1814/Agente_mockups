import React from 'react';
import './KPISection.css';
import KPICard from '../KPICard/KPICard';

// Import icons (using inline SVG as fallback)
const IconHome = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FD3D4A" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const IconBusiness = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1.5">
    <circle cx="12" cy="8" r="5"/>
    <path d="M12 13v8"/>
    <path d="M9 16l3-3 3 3"/>
    <text x="12" y="9" textAnchor="middle" fontSize="6" fill="#666666">€</text>
  </svg>
);

const IconPeopleBlock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1.5">
    <circle cx="9" cy="7" r="4"/>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
    <circle cx="17" cy="17" r="4"/>
    <path d="M15 15l4 4m0-4l-4 4"/>
  </svg>
);

const IconChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1.5">
    <path d="M3 3v18h18"/>
    <path d="M7 16l4-4 4 4 5-6"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
);

const IconPeopleSettings = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FD3D4A" strokeWidth="2">
    <circle cx="9" cy="7" r="4"/>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4"/>
    <circle cx="17" cy="17" r="3"/>
    <path d="M17 14v-1m0 8v-1m-2.6-1.5l-.7-.7m6.6 0l-.7.7m-4.6-3l-.7.7m6.6 0l-.7-.7"/>
  </svg>
);

const IconValidDocument = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <path d="M9 15l2 2 4-4"/>
  </svg>
);

const IconTimeResolution = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <circle cx="12" cy="15" r="3"/>
    <path d="M12 14v2l1 1"/>
  </svg>
);

const IconTicketsResueltos = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <path d="M9 13l2 2 4-4"/>
  </svg>
);

/**
 * KPISection Component
 * Sección que agrupa las tarjetas de KPIs principales
 * Tipo: Grid de KPI Cards con iconos y valores
 */
const KPISection = () => {
  const kpiData = [
    {
      id: 1,
      icon: <IconHome />,
      value: '1.560',
      label: 'Centros Activos',
      iconBackgroundColor: '#FEE8E9'
    },
    {
      id: 2,
      icon: <IconBusiness />,
      value: '37,45 M€',
      label: 'ARR',
      iconBackgroundColor: '#F5F5F5'
    },
    {
      id: 3,
      icon: <IconPeopleBlock />,
      value: '7,42%',
      label: 'Churn Rate',
      iconBackgroundColor: '#F5F5F5'
    },
    {
      id: 4,
      icon: <IconChart />,
      value: '18,50%',
      label: 'Expansion Revenue',
      iconBackgroundColor: '#F5F5F5'
    },
    {
      id: 5,
      icon: <IconPeopleSettings />,
      value: '4.678',
      label: 'Usuarios',
      iconBackgroundColor: '#FEE8E9'
    },
    {
      id: 6,
      icon: <IconValidDocument />,
      value: '85%',
      label: 'Ticket con Documentación Recibida',
      iconBackgroundColor: '#F5F5F5'
    },
    {
      id: 7,
      icon: <IconTimeResolution />,
      value: '5,3h',
      label: 'Tiempo Medio de Resolución',
      iconBackgroundColor: '#F5F5F5'
    },
    {
      id: 8,
      icon: <IconTicketsResueltos />,
      value: '92%',
      label: 'Tickets Resueltos',
      iconBackgroundColor: '#F5F5F5'
    }
  ];

  return (
    <section className="kpi-section">
      <div className="kpi-section__grid">
        {kpiData.map((kpi) => (
          <KPICard
            key={kpi.id}
            icon={kpi.icon}
            value={kpi.value}
            label={kpi.label}
            iconBackgroundColor={kpi.iconBackgroundColor}
          />
        ))}
      </div>
    </section>
  );
};

export default KPISection;
