import React, { useState, useRef, useEffect } from 'react';
import { Search, Zap, BookOpen, AlertCircle, Award, Brain, ExternalLink } from 'lucide-react';
import { articlesData } from '../data/articlesData';
import { lessonsData, chaptersData } from '../data/chaptersData';
import { examTrapsData, judgmentsData } from '../data/otherData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  streak: number;
  progressPercent: number;
  openLesson: (topic: string) => void;
  currentUser: { username: string; email: string };
  onLogout: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  type: 'Article' | 'Lesson' | 'Chapter' | 'Exam Trap' | 'Judgment' | 'Current Affairs';
  targetTab: string;
  payload?: any;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  streak,
  progressPercent,
  openLesson,
  currentUser,
  onLogout,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Run search across multiple datasets
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      setIsDropdownOpen(false);
      return;
    }

    const cleanedQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // 1. Search Articles
    articlesData.forEach(art => {
      if (
        art.number.toLowerCase().includes(cleanedQuery) ||
        art.title.toLowerCase().includes(cleanedQuery) ||
        art.explanation.toLowerCase().includes(cleanedQuery)
      ) {
        results.push({
          id: `art-${art.number}`,
          title: `Article ${art.number}: ${art.title}`,
          type: 'Article',
          targetTab: 'articles',
          payload: art.number
        });
      }
    });

    // 2. Search Chapters & Lessons
    chaptersData.forEach(chap => {
      if (chap.name.toLowerCase().includes(cleanedQuery)) {
        results.push({
          id: `chap-${chap.name}`,
          title: `${chap.icon} Chapter: ${chap.name}`,
          type: 'Chapter',
          targetTab: 'chapters'
        });
      }
      
      chap.topics.forEach(topic => {
        const lesson = lessonsData[topic];
        const topicMatch = topic.toLowerCase().includes(cleanedQuery);
        const contentMatch = lesson && (
          lesson.overview.toLowerCase().includes(cleanedQuery) ||
          lesson.coreNotes.some(n => n.toLowerCase().includes(cleanedQuery))
        );

        if (topicMatch || contentMatch) {
          results.push({
            id: `topic-${topic}`,
            title: `Lesson: ${topic}`,
            type: 'Lesson',
            targetTab: 'chapters',
            payload: topic
          });
        }
      });
    });

    // 3. Search Exam Traps
    examTrapsData.forEach(trap => {
      if (
        trap.title.toLowerCase().includes(cleanedQuery) ||
        trap.text.toLowerCase().includes(cleanedQuery) ||
        trap.explanation.toLowerCase().includes(cleanedQuery)
      ) {
        results.push({
          id: `trap-${trap.id}`,
          title: `${trap.id}: ${trap.title}`,
          type: 'Exam Trap',
          targetTab: 'traps',
          payload: trap.id
        });
      }
    });

    // 4. Search Judgments
    judgmentsData.forEach(jg => {
      if (
        jg.name.toLowerCase().includes(cleanedQuery) ||
        jg.principle.toLowerCase().includes(cleanedQuery) ||
        jg.summary.toLowerCase().includes(cleanedQuery)
      ) {
        results.push({
          id: `jg-${jg.name}`,
          title: `Judgment: ${jg.name}`,
          type: 'Judgment',
          targetTab: 'practice' // In Practice/Landmarks panel
        });
      }
    });

    // Limit results for UX
    setSearchResults(results.slice(0, 7));
    setIsDropdownOpen(true);
  };

  const handleResultClick = (result: SearchResult) => {
    setActiveTab(result.targetTab);
    setIsDropdownOpen(false);
    setSearchQuery('');

    if (result.type === 'Lesson' && result.payload) {
      openLesson(result.payload);
    } else if (result.type === 'Article' && result.payload) {
      // Small delay to let tab switch, then dispatch custom event or use window helper
      setTimeout(() => {
        const event = new CustomEvent('focus-article', { detail: result.payload });
        window.dispatchEvent(event);
      }, 100);
    } else if (result.type === 'Exam Trap' && result.payload) {
      setTimeout(() => {
        const event = new CustomEvent('focus-trap', { detail: result.payload });
        window.dispatchEvent(event);
      }, 100);
    }
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Article': return <BookOpen size={14} className="text-neon-blue" />;
      case 'Lesson': return <Brain size={14} className="text-neon-green" />;
      case 'Chapter': return <Award size={14} className="text-neon-purple" />;
      case 'Exam Trap': return <AlertCircle size={14} className="text-neon-pink" />;
      default: return <ExternalLink size={14} className="text-neon-yellow" />;
    }
  };

  return (
    <header className="navbar-sticky">
      <div className="navbar-inner">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => setActiveTab('dashboard')}>
          <span className="brand-logo">POLITYMASTER</span>
          <span className="brand-flag">🇮🇳</span>
        </div>

        {/* Global Search Bar */}
        <div className="navbar-search-container" ref={dropdownRef}>
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search Articles, Lessons, Traps..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery && setIsDropdownOpen(true)}
              className="input-search navbar-search-field"
            />
          </div>
          
          {isDropdownOpen && searchResults.length > 0 && (
            <div className="search-dropdown-results glass-card">
              <div className="results-header">Search Results</div>
              <ul className="results-list">
                {searchResults.map(result => (
                  <li
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="result-item"
                  >
                    <span className="result-type-icon">{getIconForType(result.type)}</span>
                    <div className="result-details">
                      <span className="result-title">{result.title}</span>
                      <span className="result-category">{result.type}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Nav Tabs for Desktop */}
        <nav className="navbar-desktop-nav">
          <button 
            className={`nav-link-btn ${activeTab === 'chapters' ? 'active' : ''}`}
            onClick={() => setActiveTab('chapters')}
          >
            Learn
          </button>
          <button 
            className={`nav-link-btn ${activeTab === 'articles' ? 'active' : ''}`}
            onClick={() => setActiveTab('articles')}
          >
            Articles
          </button>
          <button 
            className={`nav-link-btn ${activeTab === 'practice' ? 'active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            Practice
          </button>
          <button 
            className={`nav-link-btn ${activeTab === 'current' ? 'active' : ''}`}
            onClick={() => setActiveTab('current')}
          >
            Current Affairs
          </button>
          <button 
            className={`nav-link-btn ${activeTab === 'sources' ? 'active' : ''}`}
            onClick={() => setActiveTab('sources')}
          >
            Sources
          </button>
        </nav>

        {/* Cockpit Stats Mini */}
        <div className="navbar-cockpit-mini">
          <div className="nav-stat-item tooltip-hover" title="Your daily study streak">
            <Zap className="text-neon-yellow pulse-animation" size={16} />
            <span className="stat-value">{streak}d</span>
          </div>
          <div className="nav-stat-item" title="Overall course progress">
            <div className="nav-progress-circle" style={{ '--progress-pct': `${progressPercent}%` } as React.CSSProperties}>
              <span className="progress-value">{progressPercent}%</span>
            </div>
          </div>
          <div className="nav-profile-badge">
            <span className="username-text">{currentUser.username}</span>
            <button className="logout-action-btn" onClick={onLogout}>Log out</button>
          </div>
          
        </div>
      </div>

      <style>{`
        .navbar-sticky {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(5, 6, 7, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line-color);
          z-index: 500;
        }
        
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .brand-logo {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, var(--text-color), var(--purple-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-flag {
          font-size: 1.2rem;
        }

        .navbar-search-container {
          position: relative;
          width: 320px;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          color: var(--text-muted);
          pointer-events: none;
        }

        .navbar-search-field {
          width: 100%;
          padding-left: 44px;
          background: var(--panel-color);
          font-size: 0.85rem;
          border-radius: 40px;
        }

        .search-dropdown-results {
          position: absolute;
          top: 50px;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 12px 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          max-height: 400px;
          overflow-y: auto;
          border-color: var(--purple-neon);
        }

        .results-header {
          padding: 4px 16px 8px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          border-bottom: 1px solid var(--line-color);
        }

        .results-list {
          list-style: none;
          margin-top: 6px;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .result-item:hover {
          background: rgba(255,255,255,0.05);
        }

        .result-details {
          display: flex;
          flex-direction: column;
        }

        .result-title {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-color);
        }

        .result-category {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .navbar-desktop-nav {
          display: flex;
          gap: 10px;
        }

        .nav-link-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.9rem;
          padding: 8px 16px;
          cursor: pointer;
          transition: var(--transition-smooth);
          border-radius: var(--radius-sm);
        }

        .nav-link-btn:hover, .nav-link-btn.active {
          color: var(--text-color);
          background: rgba(255, 255, 255, 0.04);
        }

        .navbar-cockpit-mini {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-stat-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-color);
          font-size: 0.9rem;
          font-weight: 600;
          background: var(--panel-secondary);
          padding: 6px 12px;
          border-radius: 30px;
          border: 1px solid var(--line-color);
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); filter: drop-shadow(0 0 2px var(--yellow-neon)); }
          50% { transform: scale(1.1); filter: drop-shadow(0 0 8px var(--yellow-neon)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 2px var(--yellow-neon)); }
        }

        .nav-progress-circle {
          position: relative;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: conic-gradient(var(--purple-neon) var(--progress-pct), var(--line-color) 0);
        }

        .nav-progress-circle::after {
          content: '';
          position: absolute;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--bg-color);
          z-index: 1;
        }

        .progress-value {
          position: relative;
          z-index: 2;
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-color);
        }

        .navbar-action-btn {
          padding: 8px 16px;
          font-size: 0.8rem;
        }

        .login-action-btn {
          border-color: var(--purple-neon);
          color: var(--purple-neon);
          font-weight: 700;
        }

        .login-action-btn:hover {
          background: rgba(170, 140, 255, 0.1);
          color: var(--text-color);
        }

        .nav-profile-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--panel-secondary);
          border: 1px solid var(--line-color);
          padding: 6px 12px;
          border-radius: 30px;
        }

        .username-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-color);
        }

        .logout-action-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          font-family: var(--font-heading);
          transition: var(--transition-smooth);
        }

        .logout-action-btn:hover {
          color: var(--pink-neon);
        }

        @media (max-width: 900px) {
          .navbar-desktop-nav, .navbar-action-btn, .nav-stat-item:nth-child(2) {
            display: none;
          }
          .navbar-inner {
            padding: 0 16px;
          }
          .navbar-search-container {
            width: 180px;
          }
        }
      `}</style>
    </header>
  );
};
