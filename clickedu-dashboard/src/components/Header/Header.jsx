/**
 * Header.jsx - Componente de cabecera
 * ClickEdu Customer Success Dashboard
 * 
 * SECCIÓN: Header
 * Contiene el logo de ClickEdu, título de la sección, 
 * selector de rango de fechas y botón de configuración.
 */

import React from 'react';
import './Header.css';

/**
 * Componente Header
 * Renderiza la barra superior del dashboard con logo, título y controles
 */
const Header = () => {
  return (
    <header className="header">
      {/* ====================================== */}
      {/* Logo y Título */}
      {/* ====================================== */}
      <div className="header-left">
        {/* Logo ClickEdu */}
        <div className="logo">
          <span className="logo-text">click</span>
          <span className="logo-edu">Edu</span>
          <span className="logo-subtitle">a Sanoma company</span>
        </div>
        
        {/* Separador vertical */}
        <div className="header-divider"></div>
        
        {/* Título de sección */}
        <h1 className="header-title">
          <span className="title-main">ClickEdu</span>
          <span className="title-separator"> &gt; </span>
          <span className="title-section">Customer Success</span>
        </h1>
      </div>

      {/* ====================================== */}
      {/* Controles de fecha y configuración */}
      {/* ====================================== */}
      <div className="header-right">
        {/* Selector de rango de fechas */}
        <div className="date-range">
          <span className="date-text">01/01/2026</span>
          <span className="date-separator">-</span>
          <span className="date-text">31/03/2026</span>
        </div>
        
        {/* Botón de configuración */}
        <button className="config-button" aria-label="Configuración">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <circle cx="8" cy="6" r="2"></circle>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <circle cx="14" cy="12" r="2"></circle>
            <line x1="4" y1="18" x2="20" y2="18"></line>
            <circle cx="10" cy="18" r="2"></circle>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
