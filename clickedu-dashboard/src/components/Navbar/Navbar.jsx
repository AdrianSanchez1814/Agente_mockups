/**
 * Navbar.jsx - Componente de barra de navegación horizontal
 * ClickEdu Customer Success Dashboard
 * 
 * SECCIÓN: Navbar / Tabs de navegación
 * Tipo de componente: Tab navigation
 * Contiene los tabs de navegación para las diferentes vistas del dashboard.
 */

import React, { useState } from 'react';
import './Navbar.css';

/**
 * Componente Navbar
 * Renderiza la barra de navegación horizontal con tabs
 */
const Navbar = () => {
  // Estado para el tab activo
  const [activeTab, setActiveTab] = useState('overview');

  // Configuración de los tabs de navegación
  const tabs = [
    { id: 'overview', label: 'Overview', active: true },
    { id: 'renovaciones', label: 'Renovaciones', active: false },
    { id: 'actividad', label: 'Actividad Del Equipo', active: false },
    { id: 'eficiencia', label: 'Eficiencia Del Equipo', active: false },
    { id: 'cuentas', label: 'Cuentas / Clientes', active: false },
    { id: 'pipeline', label: 'Pipeline', active: false },
    { id: 'soporte', label: 'Soporte', active: false },
    { id: 'detalle', label: 'Detalle Soporte', active: false },
  ];

  return (
    <nav className="navbar">
      {/* ====================================== */}
      {/* Tabs de navegación */}
      {/* ====================================== */}
      <div className="navbar-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`navbar-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ====================================== */}
      {/* Sección derecha con info adicional */}
      {/* ====================================== */}
      <div className="navbar-right">
        <span className="navbar-info">*Lorem Ipsum</span>
        <button className="navbar-info-button" aria-label="Información">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
