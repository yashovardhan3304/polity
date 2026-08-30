import React, { useState, useEffect, useRef } from 'react';
import { Search, Bookmark, BookmarkCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { articlesData } from '../data/articlesData';


interface ArticleFinderProps {
  savedArticles: string[];
  toggleSaveArticle: (artNumber: string) => void;
  setActiveTab: (tab: string) => void;
}

export const ArticleFinder: React.FC<ArticleFinderProps> = ({
  savedArticles,
  toggleSaveArticle,
  setActiveTab
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // List of unique categories for quick filtering
  const categories = [
    'All',
    'Part III: Fundamental Rights',
    'Part IV: Directive Principles of State Policy',
    'Part V: The Union (Executive, Parliament, Judiciary)',
    'Part VI: The States',
    'Part XVIII: Emergency Provisions',
    'Part XX: Amendment of the Constitution'
  ];

  // Listen for focus-article events (e.g., when clicking search result in Navbar)
  useEffect(() => {
    const handleFocusArticle = (e: Event) => {
      const artNumber = (e as CustomEvent).detail;
      setSearchQuery(artNumber);
      setActiveCategory('All');

      // Scroll to that card and highlight it
      setTimeout(() => {
        const card = cardRefs.current[artNumber];
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('highlight-article-glow');
          setTimeout(() => {
            card.classList.remove('highlight-article-glow');
          }, 3000);
        }
      }, 200);
    };

    window.addEventListener('focus-article', handleFocusArticle);
    return () => window.removeEventListener('focus-article', handleFocusArticle);
  }, []);

  const handleRelatedArticleClick = (artNum: string) => {
    setSearchQuery(artNum);
    setActiveCategory('All');
    setTimeout(() => {
      const card = cardRefs.current[artNum];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('highlight-article-glow');
        setTimeout(() => {
          card.classList.remove('highlight-article-glow');
        }, 2000);
      }
    }, 100);
  };

  const handleTopicLinkClick = (topicName: string) => {
    setActiveTab('chapters');
    setTimeout(() => {
      const event = new CustomEvent('focus-lesson', { detail: topicName });
      window.dispatchEvent(event);
    }, 150);
  };

  // Filter logic
  const filteredArticles = articlesData.filter(art => {
    const matchesCategory = activeCategory === 'All' || art.category.startsWith(activeCategory.split(':')[0]);
    const matchesSearch = 
      art.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.relatedTopic.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case 'Critical': return <span className="badge badge-pink">Critical Priority</span>;
      case 'High': return <span className="badge badge-purple">High Yield</span>;
      case 'Medium': return <span className="badge badge-blue">Medium Priority</span>;
      default: return <span className="badge badge-green">Basic</span>;
    }
  };

  return (
    <div className="article-finder-container">
      {/* Title */}
      <div className="finder-header">
        <span className="badge badge-blue">Constitutional Code</span>
        <h1 className="finder-title">ARTICLE FINDER & RESEARCH LAB</h1>
        <p className="finder-subtitle">
          Search the Indian Constitution by Article number or key terms. Access direct notes, traps, and official citations.
        </p>
      </div>

      {/* Controls: Search and Filters */}
      <div className="finder-controls glass-card glow-blue">
        <div className="finder-search-row">
          <Search className="search-icon-inside" size={20} />
          <input
            type="text"
            placeholder="Type article number (e.g. 21A) or keyword (e.g. Money Bill, writtens)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="input-search search-input-field"
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>Clear</button>
          )}
        </div>

        {/* Category Pills */}
        <div className="category-pills-scroll">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cat-pill-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat === 'All' ? 'All Sections' : cat.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="results-meta">
        Found <span className="text-neon-blue">{filteredArticles.length}</span> high-yield constitutional articles matching your filters.
      </div>

      {/* Articles Grid */}
      <div className="articles-grid">
        {filteredArticles.map(art => {
          const isSaved = savedArticles.includes(art.number);
          
          return (
            <div 
              key={art.number} 
              ref={el => { cardRefs.current[art.number] = el; }}
              className="glass-card glow-blue article-result-card"
            >
              {/* Card Title Row */}
              <div className="article-card-header">
                <div className="article-number-title">
                  <div className="article-badge bg-neon-blue">
                    Art. {art.number}
                  </div>
                  <h3 className="article-card-title">{art.title}</h3>
                </div>
                
                {/* Save toggle button */}
                <button
                  className={`save-art-btn ${isSaved ? 'saved' : ''}`}
                  onClick={() => toggleSaveArticle(art.number)}
                  title={isSaved ? "Remove from Revision" : "Save to Revision"}
                >
                  {isSaved ? (
                    <BookmarkCheck className="text-neon-blue" size={18} />
                  ) : (
                    <Bookmark className="text-muted-check" size={18} />
                  )}
                </button>
              </div>

              {/* Meta row */}
              <div className="article-card-meta">
                <span className="art-category-label">{art.category}</span>
                {getImportanceBadge(art.importance)}
              </div>

              {/* Short explanation */}
              <p className="article-explanation">{art.explanation}</p>

              {/* Exam Trap */}
              {art.examTrap && (
                <div className="article-trap-container">
                  <span className="trap-badge-mini">EXAM TRAP</span>
                  <p className="trap-text-mini">{art.examTrap}</p>
                </div>
              )}

              {/* Footer Section: related chips and topics */}
              <div className="article-card-footer">
                <div className="footer-section">
                  <span className="footer-label">Connected Concept:</span>
                  <button 
                    className="topic-link-btn"
                    onClick={() => handleTopicLinkClick(art.relatedTopic)}
                  >
                    {art.relatedTopic} <ArrowRight size={12} />
                  </button>
                </div>

                {art.relatedArticles.length > 0 && (
                  <div className="footer-section">
                    <span className="footer-label">Related:</span>
                    <div className="related-articles-chips">
                      {art.relatedArticles.map(rel => (
                        <button
                          key={rel}
                          className="rel-art-chip"
                          onClick={() => handleRelatedArticleClick(rel)}
                        >
                          Art. {rel}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="footer-section source-section-mini">
                  <a 
                    href={art.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="official-pdf-link"
                  >
                    View Official Constitution Source <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .article-finder-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .finder-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .finder-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--blue-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .finder-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .finder-controls {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;
        }

        .finder-search-row {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;
        }

        .search-icon-inside {
          position: absolute;
          left: 16px;
          color: var(--text-muted);
          pointer-events: none;
        }

        .search-input-field {
          width: 100%;
          padding: 14px 16px 14px 48px;
          font-size: 0.95rem;
          border-radius: var(--radius-md);
        }

        .clear-search-btn {
          position: absolute;
          right: 16px;
          background: var(--panel-secondary);
          border: 1px solid var(--line-color);
          color: var(--text-muted);
          font-size: 0.75rem;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .clear-search-btn:hover {
          color: var(--text-color);
          border-color: var(--text-color);
        }

        .category-pills-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .cat-pill-btn {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--line-color);
          color: var(--text-muted);
          padding: 8px 16px;
          border-radius: 30px;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-smooth);
        }

        .cat-pill-btn:hover {
          color: var(--text-color);
          border-color: var(--text-color);
        }

        .cat-pill-btn.active {
          background: rgba(76, 201, 255, 0.1);
          color: var(--blue-neon);
          border-color: var(--blue-neon);
          box-shadow: 0 0 8px rgba(76, 201, 255, 0.2);
        }

        .results-meta {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .articles-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .article-result-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: var(--transition-smooth);
        }

        .article-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .article-number-title {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .article-badge {
          color: #050607;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 6px 14px;
          border-radius: var(--radius-sm);
        }

        .article-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-color);
        }

        .save-art-btn {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--line-color);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .save-art-btn:hover {
          border-color: var(--blue-neon);
          background: rgba(76, 201, 255, 0.05);
        }

        .save-art-btn.saved {
          border-color: var(--blue-neon);
          background: rgba(76, 201, 255, 0.1);
        }

        .article-card-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.8rem;
        }

        .art-category-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .article-explanation {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .article-trap-container {
          background: rgba(255, 76, 168, 0.03);
          border: 1px solid rgba(255, 76, 168, 0.2);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .trap-badge-mini {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--pink-neon);
          letter-spacing: 0.05em;
        }

        .trap-text-mini {
          font-size: 0.85rem;
          color: var(--text-color);
        }

        .article-card-footer {
          border-top: 1px solid var(--line-color);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-section {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.8rem;
        }

        .footer-label {
          color: var(--text-muted);
          font-weight: 500;
          min-width: 130px;
        }

        .topic-link-btn {
          background: none;
          border: none;
          color: var(--blue-neon);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: var(--transition-smooth);
        }

        .topic-link-btn:hover {
          text-decoration: underline;
          text-shadow: 0 0 5px var(--blue-neon);
        }

        .related-articles-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .rel-art-chip {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--line-color);
          color: var(--text-color);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .rel-art-chip:hover {
          border-color: var(--blue-neon);
          color: var(--blue-neon);
          background: rgba(76, 201, 255, 0.05);
        }

        .source-section-mini {
          margin-top: 4px;
        }

        .official-pdf-link {
          color: var(--text-muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          transition: var(--transition-smooth);
        }

        .official-pdf-link:hover {
          color: var(--blue-neon);
          text-shadow: 0 0 4px var(--blue-neon);
        }

        /* Target scrolling animation highlight */
        .highlight-article-glow {
          animation: articleGlow 1s ease-in-out 3;
        }

        @keyframes articleGlow {
          0% { border-color: var(--line-color); box-shadow: none; }
          50% { border-color: var(--blue-neon); box-shadow: 0 0 15px var(--blue-neon); }
          100% { border-color: var(--line-color); box-shadow: none; }
        }
      `}</style>
    </div>
  );
};
