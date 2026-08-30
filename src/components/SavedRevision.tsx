import React, { useState } from 'react';
import { Bookmark, Trash2, ArrowRight, BookOpen, Brain, AlertTriangle, Lightbulb } from 'lucide-react';
import { articlesData } from '../data/articlesData';
import { lessonsData } from '../data/chaptersData';
import { examTrapsData } from '../data/otherData';

interface SavedRevisionProps {
  savedLessons: string[];
  savedArticles: string[];
  savedTraps: string[];
  savedCards: string[];
  toggleSaveLesson: (topic: string) => void;
  toggleSaveArticle: (artNum: string) => void;
  toggleSaveTrap: (trapId: string) => void;
  toggleSaveCard: (cardNum: string) => void;
  openLesson: (topic: string) => void;
  setActiveTab: (tab: string) => void;
}

export const SavedRevision: React.FC<SavedRevisionProps> = ({
  savedLessons,
  savedArticles,
  savedTraps,
  savedCards,
  toggleSaveLesson,
  toggleSaveArticle,
  toggleSaveTrap,
  toggleSaveCard,
  openLesson,
  setActiveTab
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Lessons' | 'Articles' | 'Traps' | 'Cards'>('All');

  // Load associated data objects for bookmarks
  const lessonsList = savedLessons.map(topic => ({
    type: 'Lesson' as const,
    id: topic,
    title: topic,
    desc: lessonsData[topic]?.overview || "Study guide and notes",
    onAction: () => openLesson(topic),
    onRemove: () => toggleSaveLesson(topic)
  }));

  const articlesList = savedArticles.map(num => {
    const art = articlesData.find(a => a.number === num);
    return {
      type: 'Article' as const,
      id: num,
      title: `Article ${num}: ${art?.title || 'Constitutional Article'}`,
      desc: art?.explanation || "Constitutional description",
      onAction: () => {
        setActiveTab('articles');
        setTimeout(() => {
          const event = new CustomEvent('focus-article', { detail: num });
          window.dispatchEvent(event);
        }, 150);
      },
      onRemove: () => toggleSaveArticle(num)
    };
  });

  const trapsList = savedTraps.map(id => {
    const trap = examTrapsData.find(t => t.id === id);
    return {
      type: 'Trap' as const,
      id: id,
      title: `${id}: ${trap?.title || 'Exam Trap'}`,
      desc: trap?.text || "Trap warning message",
      onAction: () => {
        setActiveTab('traps');
        setTimeout(() => {
          const event = new CustomEvent('focus-trap', { detail: id });
          window.dispatchEvent(event);
        }, 150);
      },
      onRemove: () => toggleSaveTrap(id)
    };
  });

  // Pre-compiled memory cards definitions
  const flashcardsReference = [
    { number: "12–35", meaning: "Fundamental Rights" },
    { number: "36–51", meaning: "DPSP" },
    { number: "51A", meaning: "Fundamental Duties" },
    { number: "52", meaning: "President" },
    { number: "63", meaning: "Vice-President" },
    { number: "74–75", meaning: "Council of Ministers" },
    { number: "79", meaning: "Parliament" },
    { number: "110", meaning: "Money Bill" },
    { number: "123", meaning: "President Ordinance" },
    { number: "124", meaning: "Supreme Court" },
    { number: "141", meaning: "Binding Supreme Court law" },
    { number: "142", meaning: "Complete justice" },
    { number: "148", meaning: "CAG" },
    { number: "153", meaning: "Governor" },
    { number: "280", meaning: "Finance Commission" },
    { number: "324", meaning: "Election Commission" },
    { number: "352", meaning: "National Emergency" },
    { number: "356", meaning: "State constitutional machinery" },
    { number: "360", meaning: "Financial Emergency" },
    { number: "368", meaning: "Constitutional Amendment" },
    { number: "300A", meaning: "Property Right" }
  ];

  const cardsList = savedCards.map(num => {
    const card = flashcardsReference.find(c => c.number === num);
    return {
      type: 'Card' as const,
      id: num,
      title: `Memory Card: Art. ${num}`,
      desc: `Provision: ${card?.meaning || 'Constitutional Article'}`,
      onAction: () => setActiveTab('memory'),
      onRemove: () => toggleSaveCard(num)
    };
  });

  // Combine lists
  const allSavedItems = [...lessonsList, ...articlesList, ...trapsList, ...cardsList];
  
  // Filter items
  const filteredItems = allSavedItems.filter(item => {
    if (activeFilter === 'All') return true;
    return item.type === activeFilter.slice(0, -1) || (activeFilter === 'Lessons' && item.type === 'Lesson') || (activeFilter === 'Articles' && item.type === 'Article') || (activeFilter === 'Traps' && item.type === 'Trap') || (activeFilter === 'Cards' && item.type === 'Card');
  });

  const getBadgeForType = (type: string) => {
    switch (type) {
      case 'Lesson': return <span className="badge badge-green"><Brain size={12} style={{ marginRight: '4px' }} /> Lesson</span>;
      case 'Article': return <span className="badge badge-blue"><BookOpen size={12} style={{ marginRight: '4px' }} /> Article</span>;
      case 'Trap': return <span className="badge badge-pink"><AlertTriangle size={12} style={{ marginRight: '4px' }} /> Exam Trap</span>;
      default: return <span className="badge badge-yellow"><Lightbulb size={12} style={{ marginRight: '4px' }} /> Memory</span>;
    }
  };

  const borderClassForType = (type: string) => {
    switch (type) {
      case 'Lesson': return 'glow-green';
      case 'Article': return 'glow-blue';
      case 'Trap': return 'glow-pink';
      default: return 'glow-yellow';
    }
  };

  return (
    <div className="revision-deck-view">
      {/* Title */}
      <div className="revision-header">
        <span className="badge badge-purple">Revision Center</span>
        <h1 className="revision-title">MY REVISION DECK</h1>
        <p className="revision-subtitle">
          Your centralized vault of saved lessons, articles, traps, and memory cards. Filter and review your saved elements.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="glass-card glow-purple revision-filter-bar">
        <div className="filter-buttons-grp">
          {(['All', 'Lessons', 'Articles', 'Traps', 'Cards'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`filter-tab-btn ${activeFilter === tab ? 'active' : ''}`}
            >
              {tab === 'All' ? 'All Bookmarks' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Items List */}
      {filteredItems.length > 0 ? (
        <div className="saved-items-grid">
          {filteredItems.map(item => (
            <div 
              key={`${item.type}-${item.id}`} 
              className={`glass-card ${borderClassForType(item.type)} saved-item-card`}
            >
              <div className="saved-card-top">
                {getBadgeForType(item.type)}
                
                {/* Remove bookmark button */}
                <button 
                  className="remove-bookmark-btn"
                  onClick={item.onRemove}
                  title="Remove from Deck"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="saved-card-content">
                <h3 className="saved-card-title">{item.title}</h3>
                <p className="saved-card-desc">{item.desc}</p>
              </div>

              <div className="saved-card-footer">
                <button className="study-card-btn" onClick={item.onAction}>
                  Study Now <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card glow-purple empty-revision-card">
          <Bookmark size={40} className="text-muted-check" />
          <h3>Revision Deck Empty</h3>
          <p>
            You haven't bookmarked any items in this category yet. Review textbooks, articles, or flashcards and click save to build your desk.
          </p>
        </div>
      )}

      <style>{`
        .revision-deck-view {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .revision-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .revision-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--purple-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .revision-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .revision-filter-bar {
          padding: 12px 20px;
        }

        .filter-buttons-grp {
          display: flex;
          gap: 8px;
          overflow-x: auto;
        }

        .filter-tab-btn {
          background: rgba(255,255,255,0.01);
          border: 1px solid var(--line-color);
          color: var(--text-muted);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 500;
          white-space: nowrap;
          transition: var(--transition-smooth);
        }

        .filter-tab-btn:hover {
          color: var(--text-color);
          border-color: var(--text-color);
        }

        .filter-tab-btn.active {
          background: rgba(170, 140, 255, 0.1);
          color: var(--purple-neon);
          border-color: var(--purple-neon);
          box-shadow: 0 0 8px rgba(170, 140, 255, 0.2);
        }

        .saved-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .saved-item-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 180px;
          gap: 14px;
        }

        .saved-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .remove-bookmark-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-smooth);
          padding: 4px;
          border-radius: var(--radius-sm);
        }

        .remove-bookmark-btn:hover {
          color: var(--pink-neon);
          background: rgba(255, 76, 168, 0.05);
        }

        .saved-card-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .saved-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-color);
        }

        .saved-card-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .saved-card-footer {
          border-top: 1px dashed var(--line-color);
          padding-top: 10px;
        }

        .study-card-btn {
          background: none;
          border: none;
          color: var(--text-color);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: var(--transition-smooth);
        }

        .study-card-btn:hover {
          color: var(--purple-neon);
          text-shadow: 0 0 5px var(--purple-neon);
          transform: translateX(3px);
        }

        .empty-revision-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 20px;
          gap: 16px;
        }

        .empty-revision-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          max-width: 380px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};
