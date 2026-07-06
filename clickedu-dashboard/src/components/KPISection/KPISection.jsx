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

// Import icons
import iconTicketsResueltos from '../../assets/icons/icon_tickets-resueltos.png';
import iconTicketsNuevos from '../../assets/icons/fluent-mdl2_people-block.png';
import iconTiempoResolucion from '../../assets/icons/icon_tiempo-resolucion.png';
import iconFirstContact from '../../assets/icons/material-symbols-light_home-outline-rounded.png';
import iconCosteTicket from '../../assets/icons/streamline-sharp_business-idea-money.png';
import iconDocumentos from '../../assets/icons/icon_valid-document.png';

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
    icon: iconTicketsResueltos,
    iconBgColor: '#FEE8EB'
  },
  {
    id: 2,
    title: 'Tickets Nuevos',
    value: '342',
    variation: -5.2,
    variationType: 'decrease',
    description: 'vs mes anterior',
    icon: iconTicketsNuevos,
    iconBgColor: '#F3F4F6'
  },
  {
    id: 3,
    title: 'Tiempo Resolución',
    value: '4.2h',
    variation: -18.5,
    variationType: 'increase',
    description: 'promedio (mejor)',
    icon: iconTiempoResolucion,
    iconBgColor: '#F3F4F6'
  },
  {
    id: 4,
    title: 'First Contact Resolution',
    value: '78%',
    variation: 8.3,
    variationType: 'increase',
    description: 'vs mes anterior',
    icon: iconFirstContact,
    iconBgColor: '#FEE8EB'
  },
  {
    id: 5,
    title: 'Coste por Ticket',
    value: '€12.50',
    variation: -3.1,
    variationType: 'increase',
    description: 'promedio (mejor)',
    icon: iconCosteTicket,
    iconBgColor: '#F3F4F6'
  },
  {
    id: 6,
    title: 'Documentos Válidos',
    value: '95%',
    variation: 2.1,
    variationType: 'increase',
    description: 'tasa de aprobación',
    icon: iconDocumentos,
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
