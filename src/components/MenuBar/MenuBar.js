/**
 * MenuBar Component
 * Customer Success Dashboard - ClickEdu
 * 
 * Secondary navigation bar containing:
 * - Navigation tabs (Overview, Renovaciones, Actividad del equipo, etc.)
 * - Info icon
 * - Lorem Ipsum link
 */
import React, { useState } from 'react';
import './MenuBar.css';

/**
 * MenuBar Component
 * Displays the secondary navigation with tab items
 */
const MenuBar = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Tab configuration
  const tabs = [
    { id: 'overview', label: 'Overview', isBold: true },
    { id: 'renovaciones', label: 'Renovaciones' },
    { id: 'actividad', label: 'Actividad del equipo' },
    { id: 'eficiencia', label: 'Eficiencia del Equipo' },
    { id: 'cuentas', label: 'Cuentas / Clientes' },
    { id: 'pipeline', label: 'Pipeline' },
    { id: 'soporte', label: 'Soporte' },
    { id: 'detalle', label: 'Detalle Soporte' },
  ];

  return (
    <nav className="menu-bar">
      {/* ==================== TABS SECTION ==================== */}
      <div className="menu-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`menu-tab ${activeTab === tab.id ? 'active' : ''} ${tab.isBold ? 'bold' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ==================== RIGHT SECTION ==================== */}
      <div className="menu-right">
        {/* Lorem Ipsum Link */}
        <span className="menu-lorem">*Lorem Ipsum</span>

        {/* Info Icon */}
        <button className="info-button" aria-label="Información">
          <svg 
            width="34" 
            height="34" 
            viewBox="0 0 34 34" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17" cy="17" r="15" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
            <path d="M17 15V25" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="17" cy="10" r="1.5" fill="#FFFFFF"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default MenuBar;
