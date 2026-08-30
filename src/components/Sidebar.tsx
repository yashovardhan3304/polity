import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Search, 
  Network, 
  Sparkles, 
  Award, 
  AlertTriangle, 
  Brain, 
  Bookmark, 
  Newspaper, 
  FileText,
  Home
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface SidebarItem {
  name: string;
  tab: string;
  icon: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems: SidebarItem[] = [
    { name: "Student Cockpit", tab: "dashboard", icon: <Home size={18} /> },
    { name: "📚 Chapters", tab: "chapters", icon: <BookOpen size={18} /> },
    { name: "🔎 Article Finder", tab: "articles", icon: <Search size={18} /> },
    { name: "🕸️ Connection Map", tab: "map", icon: <Network size={18} /> },
    { name: "⚔️ Confusion Buster", tab: "buster", icon: <Sparkles size={18} /> },
    { name: "🎯 Practice Arena", tab: "practice", icon: <Award size={18} /> },
    { name: "🚨 Trap Vault", tab: "traps", icon: <AlertTriangle size={18} /> },
    { name: "🧠 Memory Lab", tab: "memory", icon: <Brain size={18} /> },
    { name: "🔖 My Revision", tab: "revision", icon: <Bookmark size={18} /> },
    { name: "📰 Current Polity", tab: "current", icon: <Newspaper size={18} /> },
    { name: "📚 Sources", tab: "sources", icon: <FileText size={18} /> }
  ];

  return (
    <aside className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Collapse Toggle Button */}
      <button 
        className="sidebar-toggle" 
        onClick={() => setIsCollapsed(!isCollapsed)}
        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Menu List */}
      <nav className="sidebar-menu">
        {menuItems.map(item => {
          const isActive = activeTab === item.tab;
          return (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`sidebar-item-btn ${isActive ? 'active' : ''}`}
            >
              <span className={`sidebar-icon-wrapper ${isActive ? 'active-icon' : ''}`}>
                {item.icon}
              </span>
              {!isCollapsed && <span className="sidebar-item-name">{item.name}</span>}
              {isActive && !isCollapsed && <div className="sidebar-active-dot bg-neon-purple"></div>}
            </button>
          );
        })}
      </nav>

      <style>{`
        .sidebar-container {
          width: 240px;
          background: rgba(12, 15, 18, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-right: 1px dashed var(--line-color);
          padding: 24px 12px;
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 70px;
          height: calc(100vh - 70px);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 400;
        }

        .sidebar-container.collapsed {
          width: 72px;
          padding: 24px 8px;
        }

        .sidebar-toggle {
          position: absolute;
          right: -12px;
          top: 24px;
          background: var(--panel-secondary);
          border: 1px solid var(--line-color);
          color: var(--text-color);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .sidebar-toggle:hover {
          border-color: var(--purple-neon);
          color: var(--purple-neon);
          box-shadow: 0 0 8px rgba(170, 140, 255, 0.3);
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sidebar-item-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          color: var(--text-muted);
          width: 100%;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition-smooth);
          text-align: left;
          position: relative;
        }

        .sidebar-item-btn:hover {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-color);
        }

        .sidebar-item-btn.active {
          background: rgba(170, 140, 255, 0.08);
          color: var(--purple-neon);
          border-left: 2px solid var(--purple-neon);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }

        .sidebar-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .sidebar-icon-wrapper.active-icon svg {
          stroke: var(--purple-neon);
          filter: drop-shadow(0 0 3px var(--purple-neon));
        }

        .sidebar-item-name {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .sidebar-active-dot {
          position: absolute;
          right: 12px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        @media (max-width: 900px) {
          .sidebar-container {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
};
