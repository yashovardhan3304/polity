import React from 'react';
import { X, Bookmark, BookmarkCheck, CheckCircle2, Circle, AlertCircle, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { generateFallbackLesson } from '../data/chaptersData';
import type { Lesson } from '../data/chaptersData';

interface LessonModalProps {
  topic: string;
  lesson: Lesson | undefined;
  onClose: () => void;
  isCompleted: boolean;
  isSaved: boolean;
  onToggleComplete: () => void;
  onToggleSave: () => void;
  setActiveTab: (tab: string) => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  topic,
  lesson,
  onClose,
  isCompleted,
  isSaved,
  onToggleComplete,
  onToggleSave,
  setActiveTab
}) => {
  // If the lesson isn't explicitly hardcoded, we generate a highly structured fallback to avoid dead content.
  const activeLesson = lesson || generateFallbackLesson(topic);

  const handleArticleChipClick = (artNumber: string) => {
    onClose();
    setActiveTab('articles');
    setTimeout(() => {
      const event = new CustomEvent('focus-article', { detail: artNumber });
      window.dispatchEvent(event);
    }, 150);
  };

  const handlePracticeClick = () => {
    onClose();
    setActiveTab('practice');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card glow-purple" onClick={e => e.stopPropagation()}>
        {/* Sticky Header */}
        <div className="lesson-modal-header">
          <div className="lesson-header-left">
            <span className="badge badge-purple">Study Notes</span>
            <h2 className="lesson-modal-title">{activeLesson.topic}</h2>
          </div>
          
          <div className="lesson-header-actions">
            {/* Toggle Completion */}
            <button 
              className={`lesson-action-btn ${isCompleted ? 'active-complete' : ''}`}
              onClick={onToggleComplete}
              title={isCompleted ? "Mark Incomplete" : "Mark Complete"}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 size={16} className="text-neon-green" />
                  <span className="btn-label text-neon-green">Completed</span>
                </>
              ) : (
                <>
                  <Circle size={16} />
                  <span className="btn-label">Mark Completed</span>
                </>
              )}
            </button>

            {/* Toggle Save */}
            <button 
              className={`lesson-action-btn ${isSaved ? 'active-saved' : ''}`}
              onClick={onToggleSave}
              title={isSaved ? "Remove Bookmark" : "Save Lesson"}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck size={16} className="text-neon-blue" />
                  <span className="btn-label text-neon-blue">Saved</span>
                </>
              ) : (
                <>
                  <Bookmark size={16} />
                  <span className="btn-label">Save Lesson</span>
                </>
              )}
            </button>

            {/* Close */}
            <button className="lesson-close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="lesson-modal-body">
          {/* 1. Overview */}
          <section className="lesson-section">
            <h3 className="section-heading">Overview</h3>
            <p className="overview-text">{activeLesson.overview}</p>
          </section>

          {/* 2. Important Articles */}
          <section className="lesson-section">
            <h3 className="section-heading">Key Articles Referenced</h3>
            <div className="article-chips-row">
              {activeLesson.importantArticles.map(art => {
                const cleaned = art.replace(/[^\d]/g, ''); // Extract number if direct
                return (
                  <button 
                    key={art} 
                    className="article-chip"
                    onClick={() => cleaned ? handleArticleChipClick(cleaned) : handleArticleChipClick(art)}
                  >
                    {art}
                  </button>
                );
              })}
            </div>
          </section>

          {/* 3. Core Notes */}
          <section className="lesson-section">
            <h3 className="section-heading">Core Study Notes</h3>
            <ul className="core-notes-list">
              {activeLesson.coreNotes.map((note, idx) => (
                <li key={idx} className="core-note-item">
                  <span className="note-bullet bg-neon-purple"></span>
                  <p className="note-text">{note}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Constitutional Context */}
          <section className="lesson-section panel-box context-box">
            <h4 className="panel-box-heading text-neon-blue">Constitutional Context</h4>
            <p className="panel-box-text">{activeLesson.constitutionalContext}</p>
          </section>

          {/* 5. Examples */}
          <section className="lesson-section">
            <h3 className="section-heading">Practical Examples</h3>
            <div className="examples-grid">
              {activeLesson.examples.map((ex, idx) => (
                <div key={idx} className="example-card">
                  <span className="example-number">Ex. 0{idx + 1}</span>
                  <p className="example-text">{ex}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Exam Focus */}
          <section className="lesson-section panel-box focus-box">
            <h4 className="panel-box-heading text-neon-green">Exam Focus (High-Yield Area)</h4>
            <p className="panel-box-text">{activeLesson.examFocus}</p>
          </section>

          {/* 7. Common Traps */}
          <section className="lesson-section panel-box trap-box">
            <div className="trap-box-header">
              <AlertCircle size={18} className="text-neon-pink" />
              <h4 className="panel-box-heading text-neon-pink">Common Exam Traps</h4>
            </div>
            <ul className="trap-list">
              {activeLesson.commonTraps.map((trap, idx) => (
                <li key={idx} className="trap-item">{trap}</li>
              ))}
            </ul>
          </section>

          {/* 8. Memory Trick */}
          <section className="lesson-section panel-box memory-box">
            <h4 className="panel-box-heading text-neon-yellow">Memory Lab Trick</h4>
            <p className="panel-box-text italic">{activeLesson.memoryTrick}</p>
          </section>

          {/* 9. Related Articles */}
          <section className="lesson-section">
            <h3 className="section-heading">Related Constitutional Articles</h3>
            <div className="article-chips-row">
              {activeLesson.relatedArticles.map(art => (
                <button 
                  key={art} 
                  className="article-chip-secondary"
                  onClick={() => handleArticleChipClick(art)}
                >
                  Article {art} →
                </button>
              ))}
            </div>
          </section>

          {/* 10. Quick Revision */}
          <section className="lesson-section">
            <h3 className="section-heading">Quick Revision Check</h3>
            <ul className="revision-list">
              {activeLesson.quickRevision.map((rev, idx) => (
                <li key={idx} className="revision-item">
                  <span className="revision-bullet">☐</span>
                  <span className="revision-text">{rev}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 11. Practice Questions */}
          <section className="lesson-section panel-box question-box">
            <div className="question-box-header">
              <HelpCircle size={18} className="text-neon-purple" />
              <h4 className="panel-box-heading text-neon-purple">Mains Practice Prompts</h4>
            </div>
            <ol className="question-list">
              {activeLesson.practiceQuestions.map((q, idx) => (
                <li key={idx} className="question-prompt-item">{q}</li>
              ))}
            </ol>
            <button className="btn-primary start-mcq-btn" onClick={handlePracticeClick}>
              Practice MCQs in Arena <ArrowRight size={14} />
            </button>
          </section>

          {/* 12. Official Sources */}
          <section className="lesson-section sources-section">
            <span className="sources-label">Official Sources:</span>
            <div className="sources-links">
              {activeLesson.officialSources.map((source, idx) => (
                <a 
                  key={idx} 
                  href={source} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="source-link"
                >
                  Verify Source {idx + 1} <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .lesson-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          border-bottom: 1px solid var(--line-color);
          position: sticky;
          top: 0;
          background: var(--panel-color);
          z-index: 10;
        }

        .lesson-header-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .lesson-modal-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-color);
        }

        .lesson-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .lesson-action-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--line-color);
          color: var(--text-muted);
          padding: 8px 12px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        .lesson-action-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-color);
          border-color: var(--text-color);
        }

        .lesson-action-btn.active-complete {
          background: rgba(167, 255, 56, 0.05);
          border-color: var(--green-neon);
          box-shadow: 0 0 8px rgba(167, 255, 56, 0.2);
        }

        .lesson-action-btn.active-saved {
          background: rgba(76, 201, 255, 0.05);
          border-color: var(--blue-neon);
          box-shadow: 0 0 8px rgba(76, 201, 255, 0.2);
        }

        .lesson-close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .lesson-close-btn:hover {
          background: rgba(255,255,255,0.05);
          color: var(--text-color);
        }

        .lesson-modal-body {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .lesson-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .section-heading {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-left: 3px solid var(--purple-neon);
          padding-left: 10px;
          color: var(--text-color);
        }

        .overview-text {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .article-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .article-chip {
          background: rgba(170, 140, 255, 0.1);
          color: var(--purple-neon);
          border: 1px solid rgba(170, 140, 255, 0.2);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .article-chip:hover {
          background: var(--purple-neon);
          color: #050607;
          box-shadow: 0 0 10px var(--purple-neon);
        }

        .article-chip-secondary {
          background: rgba(76, 201, 255, 0.1);
          color: var(--blue-neon);
          border: 1px solid rgba(76, 201, 255, 0.2);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .article-chip-secondary:hover {
          background: var(--blue-neon);
          color: #050607;
          box-shadow: 0 0 10px var(--blue-neon);
        }

        .core-notes-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .core-note-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .note-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 9px;
          flex-shrink: 0;
        }

        .note-text {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .panel-box {
          padding: 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--line-color);
          background: rgba(255, 255, 255, 0.01);
        }

        .panel-box-heading {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .panel-box-text {
          font-size: 0.9rem;
          color: var(--text-color);
        }

        .context-box {
          border-color: rgba(76, 201, 255, 0.2);
          background: rgba(76, 201, 255, 0.02);
        }

        .focus-box {
          border-color: rgba(167, 255, 56, 0.2);
          background: rgba(167, 255, 56, 0.02);
        }

        .examples-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 600px) {
          .examples-grid {
            grid-template-columns: 1fr;
          }
        }

        .example-card {
          border: 1px dashed var(--line-color);
          padding: 16px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .example-number {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--purple-neon);
          text-transform: uppercase;
        }

        .example-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .trap-box {
          border-color: rgba(255, 76, 168, 0.2);
          background: rgba(255, 76, 168, 0.02);
        }

        .trap-box-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .trap-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 6px;
        }

        .trap-item {
          font-size: 0.9rem;
          color: var(--text-color);
          position: relative;
          padding-left: 16px;
        }

        .trap-item::before {
          content: '⚠';
          color: var(--pink-neon);
          font-size: 0.8rem;
          position: absolute;
          left: 0;
        }

        .memory-box {
          border-color: rgba(255, 225, 0, 0.2);
          background: rgba(255, 225, 0, 0.02);
        }

        .revision-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .revision-item {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .revision-bullet {
          color: var(--purple-neon);
          font-weight: bold;
        }

        .revision-text {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .question-box {
          border-color: rgba(170, 140, 255, 0.2);
          background: rgba(170, 140, 255, 0.02);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .question-box-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .question-list {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .question-prompt-item {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .start-mcq-btn {
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          font-size: 0.8rem;
        }

        .sources-section {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid var(--line-color);
          padding-top: 20px;
          font-size: 0.8rem;
        }

        .sources-label {
          color: var(--text-muted);
          font-weight: 600;
        }

        .sources-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .source-link {
          color: var(--purple-neon);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
          transition: var(--transition-smooth);
        }

        .source-link:hover {
          text-shadow: 0 0 5px var(--purple-neon);
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .lesson-modal-header {
            padding: 16px;
          }
          .lesson-modal-body {
            padding: 20px;
          }
          .btn-label {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
