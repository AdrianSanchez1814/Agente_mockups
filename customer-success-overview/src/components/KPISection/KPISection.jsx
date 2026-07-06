import React from 'react';
import { Info } from 'lucide-react';
import KPICard from '../KPICard';
import './KPISection.css';

/**
 * =====================================================
 * COMPONENTE: KPISection
 * =====================================================
 * 
 * Tipo de gráfico: Sección de Tarjetas KPI (KPI Cards Section)
 * 
 * Descripción: Contenedor que agrupa las 5 tarjetas KPI
 * principales del dashboard:
 * 
 * 1. Total a renovar - 10,9 M€
 * 2. Renovado - 4,6 M€ | 42,0%
 * 3. Por renovar - 5,7 M€ | 52,5%
 * 4. Bajas - 0,6 M€ | 5,5%
 * 5. Ventas adicion. vs ppto - 1,8 M€ | +5,5%
 * 
 * Cada KPI incluye:
 * - Barra de acento de color
 * - Icono representativo
 * - Título
 * - Valor y porcentaje
 * - Variación vs año anterior
 * 
 * Basado en la documentación de kpis.md del datasource.
 * =====================================================
 */
const KPISection = () => {
  // Datos de los KPIs del mockup
  const kpiData = [
    {
      id: 1,
      icon: 'volume',
      title: 'Total a renovar',
      value: '10,9 M€',
      percentage: null,
      variation: '-2,0%',
      variationType: 'negative',
      accentColor: '#D6D6D6'
    },
    {
      id: 2,
      icon: 'check',
      title: 'Renovado',
      value: '4,6 M€',
      percentage: '42,0%',
      variation: '-2,0%',
      variationType: 'negative',
      accentColor: '#FD3D4A'
    },
    {
      id: 3,
      icon: 'document',
      title: 'Por renovar',
      value: '5,7 M€',
      percentage: '52,5%',
      variation: '-2,0%',
      variationType: 'negative',
      accentColor: '#D6D6D6'
    },
    {
      id: 4,
      icon: 'file',
      title: 'Bajas',
      value: '0,6 M€',
      percentage: '5,5%',
      variation: '-2,0%',
      variationType: 'positive',
      accentColor: '#D6D6D6'
    },
    {
      id: 5,
      icon: 'lightbulb',
      title: 'Ventas adicion. vs ppto',
      value: '1,8 M€',
      percentage: '+5,5%',
      variation: '-2,0%',
      variationType: 'negative',
      accentColor: '#D6D6D6'
    }
  ];

  return (
    <section className="kpi-section">
      {/* Botones de slicer */}
      <div className="kpi-section__slicers">
        <button className="kpi-section__slicer kpi-section__slicer--active">
          Importe
        </button>
        <button className="kpi-section__slicer">
          Nº Cuentas
        </button>
      </div>

      {/* Contenedor de KPIs */}
      <div className="kpi-section__cards">
        {kpiData.map((kpi) => (
          <KPICard
            key={kpi.id}
            icon={kpi.icon}
            title={kpi.title}
            value={kpi.value}
            percentage={kpi.percentage}
            variation={kpi.variation}
            variationType={kpi.variationType}
            accentColor={kpi.accentColor}
          />
        ))}
      </div>

      {/* Icono de información */}
      <button className="kpi-section__info" aria-label="Información">
        <Info size={24} color="#8F8F8F" />
      </button>
    </section>
  );
};

export default KPISection;
