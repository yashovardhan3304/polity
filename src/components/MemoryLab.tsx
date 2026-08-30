import React, { useState } from 'react';
import { RefreshCw, Check, AlertCircle, Bookmark, BookmarkCheck, ChevronLeft, ChevronRight } from 'lucide-react';

interface MemoryCard {
  number: string;
  meaning: string;
}

interface MemoryLabProps {
  savedCards: string[];
  toggleSaveCard: (cardNumber: string) => void;
  masteredCards: string[];
  setMasteredCards: React.Dispatch<React.SetStateAction<string[]>>;
}

export const MemoryLab: React.FC<MemoryLabProps> = ({
  savedCards,
  toggleSaveCard,
  masteredCards,
  setMasteredCards
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Prepopulated cards from the requirements
  const cards: MemoryCard[] = [
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

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setActiveIdx((activeIdx + 1) % cards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setActiveIdx((activeIdx - 1 + cards.length) % cards.length);
    }, 150);
  };

  const handleMasteryToggle = (cardNum: string, mastered: boolean) => {
    setMasteredCards(prev => {
      if (mastered) {
        if (!prev.includes(cardNum)) return [...prev, cardNum];
      } else {
        return prev.filter(c => c !== cardNum);
      }
      return prev;
    });
    handleNext();
  };

  const activeCard = cards[activeIdx];
  const isSaved = savedCards.includes(activeCard.number);

  const totalMasteredCount = masteredCards.length;
  const masteryPercentage = Math.round((totalMasteredCount / cards.length) * 100);

  return (
    <div className="memory-lab-container">
      {/* Title */}
      <div className="memory-header">
        <span className="badge badge-yellow">Memory Lab</span>
        <h1 className="memory-title">CONSTITUTIONAL MEMORY LAB</h1>
        <p className="memory-subtitle">
          Accelerate your retention of key Articles and Numbers using interactive flashcards. Test your recall and track your mastery.
        </p>
      </div>

      <div className="memory-grid-layout">
        {/* Flashcard Area */}
        <div className="flashcard-deck-section">
          {/* Progress bar */}
          <div className="deck-progress">
            <div className="deck-progress-text">
              <span>Recall Deck Progress</span>
              <span className="text-neon-yellow">{activeIdx + 1} / {cards.length} cards</span>
            </div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill bg-neon-yellow"
                style={{ width: `${((activeIdx + 1) / cards.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* 3D Flashcard Container */}
          <div className="flashcard-card-wrapper">
            {/* Save Card toggle */}
            <button 
              className={`save-card-icon-btn ${isSaved ? 'saved' : ''}`}
              onClick={() => toggleSaveCard(activeCard.number)}
              title={isSaved ? "Remove from Revision" : "Save to Revision"}
            >
              {isSaved ? (
                <BookmarkCheck className="text-neon-yellow" size={20} />
              ) : (
                <Bookmark className="text-muted-check" size={20} />
              )}
            </button>

            {/* The Flipping Card */}
            <div 
              className={`flashcard-3d ${isFlipped ? 'flipped' : ''}`}
              onClick={handleFlip}
            >
              {/* Front Side: The Number */}
              <div className="card-face card-front glass-card glow-yellow">
                <span className="card-hint">Article Number</span>
                <h2 className="card-big-number text-neon-yellow">{activeCard.number}</h2>
                <span className="card-click-prompt">Click Card to Flip & Reveal</span>
              </div>

              {/* Back Side: The Meaning */}
              <div className="card-face card-back glass-card glow-purple">
                <span className="card-hint">Constitutional Provision</span>
                <p className="card-meaning-text text-neon-purple">{activeCard.meaning}</p>
                <span className="card-click-prompt">Click Card to Flip Back</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="deck-nav-controls">
            <button className="btn-secondary nav-arrow-btn" onClick={handlePrev}>
              <ChevronLeft size={16} /> Prev
            </button>
            <button className="btn-secondary nav-arrow-btn" onClick={handleFlip}>
              <RefreshCw size={14} /> Flip Card
            </button>
            <button className="btn-secondary nav-arrow-btn" onClick={handleNext}>
              Next <ChevronRight size={16} />
            </button>
          </div>

          {/* Mastery actions (Got it / Needs review) */}
          <div className="mastery-actions-row">
            <button 
              className="mastery-action-btn needs-review-btn"
              onClick={() => handleMasteryToggle(activeCard.number, false)}
            >
              <AlertCircle size={16} /> Needs Review
            </button>
            <button 
              className="mastery-action-btn got-it-btn bg-neon-yellow"
              onClick={() => handleMasteryToggle(activeCard.number, true)}
            >
              <Check size={16} /> Got It!
            </button>
          </div>
        </div>

        {/* Deck Analytics Panel */}
        <div className="deck-analytics-sidebar">
          <div className="glass-card glow-yellow analytics-panel">
            <h3 className="analytics-title">Deck Master Analytics</h3>
            
            <div className="analytics-metric">
              <span className="metric-number-big">{totalMasteredCount}</span>
              <span className="metric-label-big">Articles Mastered</span>
            </div>

            <div className="mastery-percentage-gauge">
              <div className="accuracy-label-row">
                <span>Mastery Progress</span>
                <span className="text-neon-yellow font-bold">{masteryPercentage}%</span>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill bg-neon-yellow"
                  style={{ width: `${masteryPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="mastered-list-container">
              <h4 className="mastered-list-title">Mastered List</h4>
              {masteredCards.length > 0 ? (
                <div className="mastered-tags-cloud">
                  {masteredCards.map(c => (
                    <span key={c} className="mastered-tag-pill">Art. {c}</span>
                  ))}
                </div>
              ) : (
                <p className="no-mastery-text">No articles mastered yet. Select "Got It!" to log progress.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .memory-lab-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .memory-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .memory-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--yellow-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .memory-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .memory-grid-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        @media (max-width: 900px) {
          .memory-grid-layout {
            grid-template-columns: 1fr;
          }
        }

        .flashcard-deck-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .deck-progress {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .deck-progress-text {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .flashcard-card-wrapper {
          position: relative;
          height: 300px;
          perspective: 1000px; /* Crucial for 3D flip */
        }

        .save-card-icon-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(12, 15, 18, 0.6);
          border: 1px solid var(--line-color);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: var(--transition-smooth);
        }

        .save-card-icon-btn:hover {
          border-color: var(--yellow-neon);
          background: rgba(255, 225, 0, 0.05);
        }

        .save-card-icon-btn.saved {
          border-color: var(--yellow-neon);
          background: rgba(255, 225, 0, 0.1);
        }

        .flashcard-3d {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .flashcard-3d.flipped {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
        }

        .card-front {
          z-index: 2;
          transform: rotateY(0deg);
        }

        .card-back {
          transform: rotateY(180deg);
          background: rgba(17, 20, 25, 0.9);
        }

        .card-hint {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .card-big-number {
          font-size: 4rem;
          font-weight: 700;
          font-family: var(--font-heading);
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .card-meaning-text {
          font-size: 1.6rem;
          font-weight: 700;
          font-family: var(--font-heading);
          line-height: 1.3;
          margin-bottom: 20px;
          max-width: 500px;
        }

        .card-click-prompt {
          font-size: 0.75rem;
          color: var(--text-muted);
          opacity: 0.5;
        }

        .deck-nav-controls {
          display: flex;
          justify-content: space-between;
          gap: 16px;
        }

        .nav-arrow-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.85rem;
          padding: 10px;
        }

        .mastery-actions-row {
          display: flex;
          gap: 16px;
        }

        .mastery-action-btn {
          flex: 1;
          border-radius: var(--radius-md);
          border: 1px solid var(--line-color);
          padding: 12px;
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition-smooth);
        }

        .needs-review-btn {
          background: transparent;
          color: var(--pink-neon);
          border-color: rgba(255, 76, 168, 0.2);
        }

        .needs-review-btn:hover {
          border-color: var(--pink-neon);
          background: rgba(255, 76, 168, 0.05);
        }

        .got-it-btn {
          color: #050607;
          border-color: var(--yellow-neon);
        }

        .got-it-btn:hover {
          filter: brightness(1.15);
          box-shadow: 0 0 15px var(--yellow-neon);
        }

        /* Analytics Sidebar */
        .analytics-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .analytics-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .analytics-metric {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: rgba(255,255,255,0.01);
          border: 1px solid var(--line-color);
          border-radius: var(--radius-md);
          padding: 20px;
        }

        .metric-number-big {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-color);
          line-height: 1;
        }

        .metric-label-big {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 8px;
        }

        .mastery-percentage-gauge {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mastered-list-container {
          border-top: 1px solid var(--line-color);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mastered-list-title {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-color);
        }

        .mastered-tags-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          max-height: 180px;
          overflow-y: auto;
        }

        .mastered-tag-pill {
          background: rgba(255, 225, 0, 0.1);
          color: var(--yellow-neon);
          border: 1px solid rgba(255, 225, 0, 0.2);
          border-radius: var(--radius-sm);
          padding: 4px 8px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .no-mastery-text {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-style: italic;
        }
      `}</style>
    </div>
  );
};
