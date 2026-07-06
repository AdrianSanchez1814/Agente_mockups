/**
 * Sidebar Component
 * Customer Success Dashboard - ClickEdu
 * 
 * Left sidebar navigation containing:
 * - User profile/avatar icon
 * - Navigation icons for different sections
 */
import React from 'react';
import './Sidebar.css';

/**
 * Sidebar Component
 * Displays the left vertical navigation bar with user icon
 */
const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* ==================== USER ICON SECTION ==================== */}
      <div className="sidebar-user">
        <div className="user-avatar">
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="15" r="8" stroke="#666666" strokeWidth="2" fill="none"/>
            <path 
              d="M5 35C5 28 11 23 20 23C29 23 35 28 35 35" 
              stroke="#666666" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* ==================== NAVIGATION SPACER ==================== */}
      <div className="sidebar-spacer"></div>
    </aside>
  );
};

export default Sidebar;
