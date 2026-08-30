import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Bookmark, BookmarkCheck, ArrowRight } from 'lucide-react';
import { examTrapsData } from '../data/otherData';

interface TrapVaultProps {
  savedTraps: string[];
  toggleSaveTrap: (trapId: string) => void;
  setActiveTab: (tab: string) => void;
}

export const TrapVault: React.FC<TrapVaultProps> = ({
  savedTraps,
  toggleSaveTrap,
  setActiveTab
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Listen for focus-trap events (triggered from global search)
  useEffect(() => {
    const handleFocusTrap = (e: Event) => {
      const trapId = (e as CustomEvent).detail;
      setSearchTerm('');
      
      setTimeout(() => {
        const card = cardRefs.current[trapId];
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('highlight-trap-glow');
          setTimeout(() => {
            card.classList.remove('highlight-trap-glow');
          }, 3000);
        }
      }, 150);
    };

    window.addEventListener('focus-trap', handleFocusTrap);
    return () => window.removeEventListener('focus-trap', handleFocusTrap);
  }, []);

  const handleArticleRedirect = (artNumber: string) => {
    setActiveTab('articles');
    setTimeout(() => {
      const event = new CustomEvent('focus-article', { detail: artNumber });
      window.dispatchEvent(event);
    }, 150);
  };

  const filteredTraps = examTrapsData.filter(trap =>
    trap.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trap.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trap.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trap.explanation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="trap-vault-container">
      {/* Title */}
      <div className="trap-header">
        <span className="badge badge-pink">Trap Vault</span>
        <h1 className="trap-title">EXAM TRAP DEFUSION VAULT</h1>
        <p className="trap-subtitle">
          Examiners design questions specifically to lead students to wrong answers. Review these high-probability traps and master their solutions.
        </p>
      </div>

      {/* Search Filter */}
      <div className="trap-search glass-card glow-pink">
        <input
          type="text"
          placeholder="Filter exam traps (e.g. Property, Writs, Emergency)..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="input-search search-bar-traps"
        />
      </div>

      {/* Traps Grid */}
      <div className="traps-grid">
        {filteredTraps.map(trap => {
          const isSaved = savedTraps.includes(trap.id);
          
          return (
            <div
              key={trap.id}
              ref={el => { cardRefs.current[trap.id] = el; }}
              className="glass-card glow-pink trap-card"
            >
              {/* Card Header */}
              <div className="trap-card-header">
                <div className="trap-id-title">
                  <div className="trap-alert-badge bg-neon-pink">
                    <AlertTriangle size={14} />
                    <span>{trap.id}</span>
                  </div>
                  <h3 className="trap-card-title">{trap.title}</h3>
                </div>

                <button
                  className={`save-trap-btn ${isSaved ? 'saved' : ''}`}
                  onClick={() => toggleSaveTrap(trap.id)}
                  title={isSaved ? "Remove from Revision" : "Save to Revision"}
                >
                  {isSaved ? (
                    <BookmarkCheck className="text-neon-pink" size={18} />
                  ) : (
                    <Bookmark className="text-muted-check" size={18} />
                  )}
                </button>
              </div>

              {/* Trap Core Statement */}
              <div className="trap-statement-box">
                <span className="statement-label">WHAT EXAMINERS STATE:</span>
                <p className="trap-text">{trap.text}</p>
              </div>

              {/* Detailed Explanation */}
              <div className="trap-solution-box">
                <span className="solution-label">THE DEFUSION TRUTH:</span>
                <p className="trap-explanation">{trap.explanation}</p>
              </div>

              {/* Related Article Link */}
              {trap.articleLink && (
                <div className="trap-card-footer">
                  <button 
                    className="trap-redirect-btn"
                    onClick={() => handleArticleRedirect(trap.articleLink!)}
                  >
                    Examine Article {trap.articleLink} <ArrowRight size={12} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .trap-vault-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .trap-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .trap-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--pink-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .trap-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .trap-search {
          padding: 16px;
        }

        .search-bar-traps {
          width: 100%;
          font-size: 0.9rem;
        }

        .traps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 900px) {
          .traps-grid {
            grid-template-columns: 1fr;
          }
        }

        .trap-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: var(--transition-smooth);
        }

        .trap-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .trap-id-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .trap-alert-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #050607;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .trap-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-color);
        }

        .save-trap-btn {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--line-color);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .save-trap-btn:hover {
          border-color: var(--pink-neon);
          background: rgba(255, 76, 168, 0.05);
        }

        .save-trap-btn.saved {
          border-color: var(--pink-neon);
          background: rgba(255, 76, 168, 0.1);
        }

        .trap-statement-box {
          background: rgba(255, 76, 168, 0.03);
          border: 1px dashed rgba(255, 76, 168, 0.3);
          padding: 12px 14px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .statement-label {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--pink-neon);
          letter-spacing: 0.05em;
        }

        .trap-text {
          font-size: 0.85rem;
          color: var(--text-color);
          font-weight: 500;
        }

        .trap-solution-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .solution-label {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--green-neon);
          letter-spacing: 0.05em;
        }

        .trap-explanation {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .trap-card-footer {
          border-top: 1px solid var(--line-color);
          padding-top: 12px;
          margin-top: auto;
        }

        .trap-redirect-btn {
          background: none;
          border: none;
          color: var(--pink-neon);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: var(--transition-smooth);
        }

        .trap-redirect-btn:hover {
          text-shadow: 0 0 5px var(--pink-neon);
          transform: translateX(3px);
        }

        /* Target highlighting animation */
        .highlight-trap-glow {
          animation: trapGlow 1s ease-in-out 3;
        }

        @keyframes trapGlow {
          0% { border-color: var(--line-color); box-shadow: none; }
          50% { border-color: var(--pink-neon); box-shadow: 0 0 15px var(--pink-neon); }
          100% { border-color: var(--line-color); box-shadow: none; }
        }
      `}</style>
    </div>
  );
};
