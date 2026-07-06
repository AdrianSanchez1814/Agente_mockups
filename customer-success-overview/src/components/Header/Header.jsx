import React from 'react';
import { Filter } from 'lucide-react';
import './Header.css';

/**
 * =====================================================
 * COMPONENTE: Header
 * =====================================================
 * 
 * Tipo de gráfico: N/A - Componente de navegación
 * 
 * Descripción: Header principal del dashboard que contiene
 * el logo de la empresa, título de la sección y filtros de fecha.
 * 
 * Estructura:
 * - Logo de ClickEdu (imagen placeholder)
 * - Separador vertical
 * - Título de sección: "ClickEdu > Customer Success"
 * - Selector de fechas: "01/01/2026 - 31/03/2026"
 * - Icono de filtro
 * =====================================================
 */
const Header = () => {
  return (
    <header className="header">
      {/* Logo de la empresa */}
      <div className="header__logo">
        <div className="header__logo-placeholder">
          <span className="header__logo-text">ClickEdu</span>
        </div>
      </div>

      {/* Separador vertical */}
      <div className="header__separator"></div>

      {/* Título de la sección */}
      <h1 className="header__title">
        ClickEdu &gt; Customer Success
      </h1>

      {/* Filtros de fecha */}
      <div className="header__filters">
        <span className="header__date-range">01/01/2026 - 31/03/2026</span>
        <div className="header__filter-divider"></div>
        <button className="header__filter-btn" aria-label="Abrir filtros">
          <Filter size={24} color="#FFFFFF" />
        </button>
      </div>
    </header>
  );
};

export default Header;
