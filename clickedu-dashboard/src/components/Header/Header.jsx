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
import logo from '../../assets/images/clickedu-logo.png';

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header__logo-container">
        <img 
          src={logo} 
          alt="Clickedu - a Sanoma company" 
          className="header__logo"
        />
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
