/**
 * Sidebar.jsx - Componente de barra lateral
 * ClickEdu Customer Success Dashboard
 * 
 * SECCIÓN: Sidebar
 * Tipo de componente: Menú de navegación vertical con iconos
 * Contiene iconos de navegación para diferentes secciones de la aplicación.
 */

import React from 'react';
import './Sidebar.css';

/**
 * Componente Sidebar
 * Renderiza el menú lateral izquierdo con iconos de navegación
 */
const Sidebar = () => {
  // Items del menú de navegación
  const menuItems = [
    { id: 'home', icon: 'home', label: 'Inicio', active: false },
    { id: 'salesforce', icon: 'salesforce', label: 'Salesforce', active: false },
    { id: 'customer', icon: 'customer', label: 'Customer Success', active: true },
    { id: 'insights', icon: 'insights', label: 'Insights', active: false },
    { id: 'team', icon: 'team', label: 'Equipo', active: false },
  ];

  /**
   * Renderiza el icono SVG según el tipo
   */
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'home':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        );
      case 'salesforce':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <text x="4" y="18" fontSize="20" fontWeight="bold">S</text>
          </svg>
        );
      case 'customer':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'insights':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        );
      case 'team':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <aside className="sidebar">
      {/* ====================================== */}
      {/* Items de navegación */}
      {/* ====================================== */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${item.active ? 'active' : ''}`}
            title={item.label}
            aria-label={item.label}
          >
            {renderIcon(item.icon)}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
