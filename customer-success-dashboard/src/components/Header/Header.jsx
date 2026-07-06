import React from 'react';
import './Header.css';

/**
 * Header Component
 * Sección del encabezado con logo de ClickEdu y título del dashboard
 * Tipo: Header con branding y título de página
 */
const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header__logo-container">
        <div className="header__logo">
          <span className="header__logo-text">
            <span className="header__logo-click">clic</span>
            <span className="header__logo-k">k</span>
            <span className="header__logo-edu">edu</span>
          </span>
          <span className="header__logo-subtitle">a Sanoma company</span>
        </div>
      </div>
      
      {/* Title Section */}
      <div className="header__title-container">
        <h1 className="header__title">Customer Success</h1>
      </div>
    </header>
  );
};

export default Header;
