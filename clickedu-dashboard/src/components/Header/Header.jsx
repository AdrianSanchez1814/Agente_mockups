/**
 * ===========================================
 * COMPONENTE: Header
 * Tipo: Header/Navbar
 * Descripción: Cabecera del dashboard con logo de Clickedu
 *              y título del módulo de soporte
 * ===========================================
 */

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header__logo-container">
        <div className="header__logo">
          <span className="header__logo-text">
            clic<span className="header__logo-k">k</span>edu
          </span>
          <span className="header__logo-subtitle">a Sanoma company</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="header__title-container">
        <h1 className="header__title">Soporte</h1>
        <span className="header__subtitle">Tickets overview</span>
      </div>
    </header>
  );
};

export default Header;