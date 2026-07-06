/**
 * SlicerButtons Component
 * Customer Success Dashboard - ClickEdu
 * 
 * Toggle buttons for switching between views:
 * - Importe (active by default)
 * - Nº Cuentas
 */
import React, { useState } from 'react';
import './SlicerButtons.css';

/**
 * SlicerButtons Component
 * Displays toggle buttons for switching data views
 */
const SlicerButtons = () => {
  // State to track active slicer
  const [activeSlicer, setActiveSlicer] = useState('importe');

  return (
    <div className="slicer-buttons">
      {/* ==================== IMPORTE BUTTON ==================== */}
      <button
        className={`slicer-btn ${activeSlicer === 'importe' ? 'active' : ''}`}
        onClick={() => setActiveSlicer('importe')}
      >
        Importe
      </button>

      {/* ==================== Nº CUENTAS BUTTON ==================== */}
      <button
        className={`slicer-btn ${activeSlicer === 'cuentas' ? 'active' : ''}`}
        onClick={() => setActiveSlicer('cuentas')}
      >
        Nº Cuentas
      </button>
    </div>
  );
};

export default SlicerButtons;
