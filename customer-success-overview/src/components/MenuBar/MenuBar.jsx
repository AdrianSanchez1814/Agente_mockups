import React from 'react';
import { Info } from 'lucide-react';
import './MenuBar.css';

/**
 * =====================================================
 * COMPONENTE: MenuBar
 * =====================================================
 * 
 * Tipo de gráfico: N/A - Componente de navegación por tabs
 * 
 * Descripción: Barra de menú horizontal con las diferentes
 * secciones del dashboard Customer Success. Incluye:
 * - Overview (activo)
 * - Renovaciones
 * - Actividad del equipo
 * - Eficiencia del Equipo
 * - Cuentas / Clientes
 * - Pipeline
 * - Soporte
 * - Detalle Soporte
 * 
 * También incluye un tooltip de información y texto Lorem Ipsum.
 * =====================================================
 */
const MenuBar = ({ activeTab = 'Overview', onTabChange }) => {
  const tabs = [
    'Overview',
    'Renovaciones',
    'Actividad del equipo',
    'Eficiencia del Equipo',
    'Cuentas / Clientes',
    'Pipeline',
    'Soporte',
    'Detalle Soporte'
  ];

  return (
    <nav className="menu-bar">
      {/* Tabs de navegación */}
      <ul className="menu-bar__tabs">
        {tabs.map((tab) => (
          <li key={tab} className="menu-bar__tab-item">
            <button
              className={`menu-bar__tab ${activeTab === tab ? 'menu-bar__tab--active' : ''}`}
              onClick={() => onTabChange && onTabChange(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Sección derecha */}
      <div className="menu-bar__right">
        <span className="menu-bar__lorem">*Lorem Ipsum</span>
        <button className="menu-bar__info-btn" aria-label="Información">
          <Info size={34} color="#FFFFFF" />
        </button>
      </div>
    </nav>
  );
};

export default MenuBar;
