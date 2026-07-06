/**
 * Header Component
 * Customer Success Dashboard - ClickEdu
 * 
 * Top header section containing:
 * - Company logo (ClickEdu - a Sanoma company)
 * - Breadcrumb navigation (ClickEdu > Customer Success)
 * - Date range filter
 * - Filter icon button
 */
import React from 'react';
import './Header.css';

// Import logo image
import logoImage from '../../assets/images/logo-clickedu.png';

/**
 * Header Component
 * Displays the top navigation bar with logo, breadcrumb and filters
 */
const Header = () => {
  return (
    <header className="header">
      {/* ==================== LOGO SECTION ==================== */}
      <div className="header-logo">
        <img 
          src={logoImage} 
          alt="ClickEdu - a Sanoma company" 
          className="logo-image"
        />
      </div>

      {/* ==================== VERTICAL DIVIDER ==================== */}
      <div className="header-divider"></div>

      {/* ==================== BREADCRUMB SECTION ==================== */}
      <div className="header-breadcrumb">
        <span className="breadcrumb-text">ClickEdu &gt; Customer Success</span>
      </div>

      {/* ==================== SPACER ==================== */}
      <div className="header-spacer"></div>

      {/* ==================== DATE FILTER SECTION ==================== */}
      <div className="header-date-filter">
        <span className="date-text">01/01/2026 - 31/03/2026</span>
      </div>

      {/* ==================== FILTER DIVIDER ==================== */}
      <div className="filter-divider"></div>

      {/* ==================== FILTER ICON SECTION ==================== */}
      <button className="filter-button" aria-label="Filtrar">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M5 10H35M10 20H30M15 30H25" 
            stroke="#FFFFFF" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
