import React from 'react';
import { 
  Home, 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  HelpCircle,
  LogOut 
} from 'lucide-react';
import './Sidebar.css';

/**
 * =====================================================
 * COMPONENTE: Sidebar
 * =====================================================
 * 
 * Tipo de gráfico: N/A - Componente de navegación lateral
 * 
 * Descripción: Barra lateral de navegación con iconos
 * para acceder a diferentes secciones del dashboard.
 * 
 * Elementos:
 * - Iconos de navegación (Home, Charts, Users, Files, etc.)
 * - Separador visual
 * - Iconos de utilidades (Settings, Help, Logout)
 * =====================================================
 */
const Sidebar = () => {
  const mainNavItems = [
    { icon: Home, label: 'Inicio', active: true },
    { icon: BarChart3, label: 'Estadísticas', active: false },
    { icon: Users, label: 'Usuarios', active: false },
    { icon: FileText, label: 'Documentos', active: false },
  ];

  const utilityNavItems = [
    { icon: Settings, label: 'Configuración' },
    { icon: HelpCircle, label: 'Ayuda' },
    { icon: LogOut, label: 'Cerrar sesión' },
  ];

  return (
    <aside className="sidebar">
      {/* Navegación principal */}
      <nav className="sidebar__nav sidebar__nav--main">
        {mainNavItems.map((item, index) => (
          <button
            key={index}
            className={`sidebar__nav-item ${item.active ? 'sidebar__nav-item--active' : ''}`}
            aria-label={item.label}
            title={item.label}
          >
            <item.icon size={24} />
          </button>
        ))}
      </nav>

      {/* Separador */}
      <div className="sidebar__divider"></div>

      {/* Navegación de utilidades */}
      <nav className="sidebar__nav sidebar__nav--utility">
        {utilityNavItems.map((item, index) => (
          <button
            key={index}
            className="sidebar__nav-item"
            aria-label={item.label}
            title={item.label}
          >
            <item.icon size={24} />
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
