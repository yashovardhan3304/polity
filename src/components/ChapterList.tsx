import React, { useEffect, useRef } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { chaptersData } from '../data/chaptersData';

interface ChapterListProps {
  completedTopics: string[];
  toggleTopicCompletion: (topic: string) => void;
  openLesson: (topic: string) => void;
}

export const ChapterList: React.FC<ChapterListProps> = ({
  completedTopics,
  toggleTopicCompletion,
  openLesson
}) => {
  const topicRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Listen for custom trigger to scroll to and focus on a specific topic (e.g., from search or cockpit)
  useEffect(() => {
    const handleFocusLesson = (e: Event) => {
      const topicName = (e as CustomEvent).detail;
      const ref = topicRefs.current[topicName];
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
        ref.classList.add('highlight-pulse');
        setTimeout(() => {
          ref.classList.remove('highlight-pulse');
        }, 3000);
        openLesson(topicName);
      }
    };

    window.addEventListener('focus-lesson', handleFocusLesson);
    return () => window.removeEventListener('focus-lesson', handleFocusLesson);
  }, [openLesson]);

  return (
    <div className="chapters-page-container">
      {/* Page Title */}
      <div className="chapters-header">
        <span className="badge badge-purple">Constitutional Textbook</span>
        <h1 className="chapters-title">POLITY STUDY MODULES</h1>
        <p className="chapters-subtitle">
          Click any topic card to study the comprehensive notes and toggle your completion status.
        </p>
      </div>

      {/* Chapters Grid */}
      <div className="chapters-grid">
        {chaptersData.map((chap, idx) => {
          // Calculate chapter progress
          const chapCompleted = chap.topics.filter(t => completedTopics.includes(t)).length;
          const chapTotal = chap.topics.length;
          const chapPercent = chapTotal > 0 ? Math.round((chapCompleted / chapTotal) * 100) : 0;

          // Determine border neon color based on index
          const glowClasses = [
            'glow-purple', 'glow-blue', 'glow-green', 'glow-yellow', 
            'glow-pink', 'glow-purple', 'glow-blue', 'glow-green'
          ];
          const textClasses = [
            'text-neon-purple', 'text-neon-blue', 'text-neon-green', 'text-neon-yellow', 
            'text-neon-pink', 'text-neon-purple', 'text-neon-blue', 'text-neon-green'
          ];
          const borderClass = glowClasses[idx % glowClasses.length];
          const textClass = textClasses[idx % textClasses.length];

          return (
            <div key={chap.name} className={`glass-card ${borderClass} chapter-container`}>
              {/* Chapter Header */}
              <div className="chapter-header-row">
                <div className="chapter-title-info">
                  <span className="chapter-emoji">{chap.icon}</span>
                  <div className="chapter-name-meta">
                    <span className="chapter-index">Chapter 0{idx + 1}</span>
                    <h2 className="chapter-name">{chap.name}</h2>
                  </div>
                </div>
                <div className="chapter-progress-badge badge badge-purple">
                  {chapCompleted}/{chapTotal} Done
                </div>
              </div>

              {/* Progress Line */}
              <div className="chapter-progress-bar">
                <div 
                  className="chapter-progress-bar-fill"
                  style={{ 
                    width: `${chapPercent}%`,
                    backgroundColor: `var(--${borderClass.split('-')[1]}-neon)` 
                  }}
                ></div>
              </div>

              {/* Topics Grid */}
              <div className="topics-list">
                {chap.topics.map(topic => {
                  const isCompleted = completedTopics.includes(topic);
                  return (
                    <button
                      key={topic}
                      ref={el => { topicRefs.current[topic] = el; }}
                      onClick={() => {
                        toggleTopicCompletion(topic);
                        openLesson(topic);
                      }}
                      className={`topic-card-btn ${isCompleted ? 'completed' : ''}`}
                    >
                      <div className="topic-card-status">
                        {isCompleted ? (
                          <CheckCircle size={16} className={`${textClass}`} />
                        ) : (
                          <Circle size={16} className="text-muted-check" />
                        )}
                      </div>
                      <span className="topic-name-text">{topic}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .chapters-page-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .chapters-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chapters-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--purple-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .chapters-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .chapters-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        @media (max-width: 1050px) {
          .chapters-grid {
            grid-template-columns: 1fr;
          }
        }

        .chapter-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .chapter-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chapter-title-info {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .chapter-emoji {
          font-size: 1.8rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--line-color);
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chapter-name-meta {
          display: flex;
          flex-direction: column;
        }

        .chapter-index {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .chapter-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-color);
        }

        .chapter-progress-bar {
          background: var(--line-color);
          height: 4px;
          border-radius: 2px;
          overflow: hidden;
          width: 100%;
        }

        .chapter-progress-bar-fill {
          height: 100%;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .topics-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }

        @media (max-width: 480px) {
          .topics-list {
            grid-template-columns: 1fr;
          }
        }

        .topic-card-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--line-color);
          border-radius: var(--radius-md);
          padding: 12px 14px;
          cursor: pointer;
          transition: var(--transition-smooth);
          text-align: left;
          width: 100%;
        }

        .topic-card-btn:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateX(2px);
        }

        .topic-card-btn.completed {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(170, 140, 255, 0.1);
        }

        .topic-card-status {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .text-muted-check {
          color: var(--text-muted);
          opacity: 0.3;
        }

        .topic-name-text {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-color);
        }

        .topic-card-btn.completed .topic-name-text {
          color: var(--text-muted);
          text-decoration: line-through;
        }

        /* Pulse highlights for search scroll targets */
        .highlight-pulse {
          animation: focusGlow 1s ease-in-out 3;
        }

        @keyframes focusGlow {
          0% { border-color: var(--line-color); box-shadow: none; }
          50% { border-color: var(--purple-neon); box-shadow: 0 0 12px var(--purple-neon); }
          100% { border-color: var(--line-color); box-shadow: none; }
        }
      `}</style>
    </div>
  );
};
