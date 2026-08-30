import React from 'react';
import { Award, Zap, Bookmark, Star, AlertTriangle, RefreshCw, ArrowRight } from 'lucide-react';

interface CockpitProps {
  completedTopicsCount: number;
  totalTopicsCount: number;
  savedCount: number;
  quizPoints: number;
  streak: number;
  weakTopics: string[];
  resetProgress: () => void;
  setActiveTab: (tab: string) => void;
}

export const Cockpit: React.FC<CockpitProps> = ({
  completedTopicsCount,
  totalTopicsCount,
  savedCount,
  quizPoints,
  streak,
  weakTopics,
  resetProgress,
  setActiveTab
}) => {
  const progressPercent = totalTopicsCount > 0 
    ? Math.round((completedTopicsCount / totalTopicsCount) * 100) 
    : 0;

  // Determine milestones based on achievements
  const milestones = [
    { name: "Polity Rookie", desc: "First topic completed", met: completedTopicsCount >= 1 },
    { name: "Consistent Scholar", desc: "Keep a 3-day study streak", met: streak >= 3 },
    { name: "Quiz Master", desc: "Score 100+ Quiz Points", met: quizPoints >= 100 },
    { name: "Deep Researcher", desc: "Save 5+ study cards or articles", met: savedCount >= 5 },
    { name: "Polity Champion", desc: "Complete 50% of the syllabus", met: progressPercent >= 50 }
  ];

  return (
    <div className="cockpit-container">
      {/* Welcome Hero / Eyebrow */}
      <div className="cockpit-header">
        <span className="badge badge-purple">Student Cockpit</span>
        <h1 className="cockpit-title">WELCOME BACK, ASPIRANT.</h1>
        <p className="cockpit-subtitle">
          Track your progress, review your milestones, and prepare to conquer UPSC & competitive exams.
        </p>
      </div>

      {/* Grid of Main Stat Cards */}
      <div className="stats-grid">
        {/* Progress Card */}
        <div className="glass-card glow-purple stat-card progress-card-wide">
          <div className="stat-card-header">
            <h3 className="stat-label">Syllabus Completion</h3>
            <span className="stat-value-text">{progressPercent}%</span>
          </div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill bg-neon-purple"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="stat-desc">
            {completedTopicsCount} of {totalTopicsCount} topics completed. Keep going!
          </p>
        </div>

        {/* Streak Card */}
        <div className="glass-card glow-yellow stat-card">
          <div className="stat-card-icon-wrapper">
            <Zap className="text-neon-yellow" size={24} />
          </div>
          <div className="stat-card-data">
            <span className="stat-number">{streak}</span>
            <h3 className="stat-label">Day Streak</h3>
            <p className="stat-desc">Consecutive days active</p>
          </div>
        </div>

        {/* Quiz Points Card */}
        <div className="glass-card glow-green stat-card">
          <div className="stat-card-icon-wrapper">
            <Award className="text-neon-green" size={24} />
          </div>
          <div className="stat-card-data">
            <span className="stat-number">{quizPoints}</span>
            <h3 className="stat-label">Quiz Points</h3>
            <p className="stat-desc">Accumulated from correct answers</p>
          </div>
        </div>

        {/* Saved Items Card */}
        <div className="glass-card glow-blue stat-card">
          <div className="stat-card-icon-wrapper">
            <Bookmark className="text-neon-blue" size={24} />
          </div>
          <div className="stat-card-data">
            <span className="stat-number">{savedCount}</span>
            <h3 className="stat-label">Saved Cards</h3>
            <p className="stat-desc">Lessons and articles bookmarked</p>
          </div>
        </div>
      </div>

      <div className="cockpit-secondary-grid">
        {/* Left column: Weak topics and Actions */}
        <div className="cockpit-left-col">
          {/* Weak Topic Indicator */}
          <div className="glass-card glow-pink weak-topics-panel">
            <div className="panel-header">
              <AlertTriangle className="text-neon-pink" size={20} />
              <h3 className="panel-title">Weak Topic Analysis</h3>
            </div>
            
            {weakTopics.length > 0 ? (
              <div className="weak-topics-list-container">
                <p className="panel-desc">
                  Based on quiz performance and incomplete lessons, prioritize these areas:
                </p>
                <ul className="weak-topics-list">
                  {weakTopics.map(topic => (
                    <li key={topic} className="weak-topic-item">
                      <span className="weak-dot"></span>
                      <span className="weak-name">{topic}</span>
                      <button 
                        className="weak-action-btn"
                        onClick={() => {
                          setActiveTab('chapters');
                          // Small timeout to allow tab to switch before triggering scroll
                          setTimeout(() => {
                            const event = new CustomEvent('focus-lesson', { detail: topic });
                            window.dispatchEvent(event);
                          }, 100);
                        }}
                      >
                        Review Notes <ArrowRight size={12} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="weak-topics-empty">
                <Star className="text-neon-yellow" size={32} />
                <p className="empty-text">No weak topics identified yet!</p>
                <p className="empty-subtext">Complete quizzes in the Practice Arena to generate analytics.</p>
              </div>
            )}
          </div>

          {/* Quick Actions Panel */}
          <div className="glass-card glow-blue actions-panel">
            <h3 className="panel-title-simple">Quick Actions</h3>
            <div className="actions-buttons-grid">
              <button className="quick-action-button text-neon-blue" onClick={() => setActiveTab('chapters')}>
                <span>Open Textbook</span>
                <ArrowRight size={16} />
              </button>
              <button className="quick-action-button text-neon-green" onClick={() => setActiveTab('practice')}>
                <span>Solve MCQs</span>
                <ArrowRight size={16} />
              </button>
              <button className="quick-action-button text-neon-yellow" onClick={() => setActiveTab('map')}>
                <span>Interactive Map</span>
                <ArrowRight size={16} />
              </button>
              <button className="quick-action-button text-neon-pink" onClick={() => setActiveTab('revision')}>
                <span>Revision Deck</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right column: Milestones and Reset */}
        <div className="cockpit-right-col">
          {/* Milestones Panel */}
          <div className="glass-card glow-purple milestones-panel">
            <h3 className="panel-title-simple">Student Milestones</h3>
            <div className="milestones-list">
              {milestones.map(m => (
                <div key={m.name} className={`milestone-item ${m.met ? 'met' : 'unlocked'}`}>
                  <div className={`milestone-status-indicator ${m.met ? 'bg-neon-purple' : 'locked'}`}>
                    {m.met ? "✓" : "●"}
                  </div>
                  <div className="milestone-details">
                    <span className="milestone-name">{m.name}</span>
                    <span className="milestone-desc">{m.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Settings / Reset Demo Panel */}
          <div className="glass-card reset-panel">
            <h4 className="reset-title">Reset Study Progress</h4>
            <p className="reset-desc">
              Clears all local storage data, including your streak, completed topics checklist, and bookmarked cards.
            </p>
            <button className="btn-secondary reset-btn" onClick={resetProgress}>
              <RefreshCw size={14} className="reset-icon" /> Reset Progress
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .cockpit-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .cockpit-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cockpit-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--purple-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cockpit-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 1100px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          .progress-card-wide {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .progress-card-wide {
            grid-column: span 1;
          }
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 140px;
        }

        .stat-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 12px;
        }

        .stat-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .stat-value-text {
          font-size: 2rem;
          font-weight: 700;
          font-family: var(--font-heading);
          color: var(--purple-neon);
          text-shadow: 0 0 10px rgba(170, 140, 255, 0.3);
        }

        .progress-bar-container {
          background: var(--line-color);
          height: 12px;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 6px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .stat-card-icon-wrapper {
          align-self: flex-start;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--line-color);
          padding: 8px;
          border-radius: var(--radius-sm);
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          font-family: var(--font-heading);
          display: block;
          line-height: 1.1;
          margin-top: 8px;
        }

        .cockpit-secondary-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 20px;
        }

        @media (max-width: 950px) {
          .cockpit-secondary-grid {
            grid-template-columns: 1fr;
          }
        }

        .cockpit-left-col, .cockpit-right-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .panel-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .panel-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .panel-title-simple {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .panel-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .weak-topics-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .weak-topic-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--line-color);
          border-radius: var(--radius-md);
        }

        .weak-dot {
          width: 8px;
          height: 8px;
          background-color: var(--pink-neon);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--pink-neon);
        }

        .weak-name {
          font-size: 0.85rem;
          font-weight: 500;
          flex: 1;
        }

        .weak-action-btn {
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

        .weak-action-btn:hover {
          text-shadow: 0 0 8px var(--pink-neon);
          transform: translateX(3px);
        }

        .weak-topics-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px 10px;
        }

        .empty-text {
          font-size: 0.95rem;
          font-weight: 600;
          margin-top: 12px;
        }

        .empty-subtext {
          font-size: 0.8rem;
          color: var(--text-muted);
          max-width: 320px;
          margin-top: 4px;
        }

        .actions-buttons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        @media (max-width: 480px) {
          .actions-buttons-grid {
            grid-template-columns: 1fr;
          }
        }

        .quick-action-button {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--line-color);
          padding: 16px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          transition: var(--transition-smooth);
          text-align: left;
        }

        .quick-action-button:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: currentColor;
          box-shadow: 0 0 10px currentColor;
          transform: scale(1.02);
        }

        .milestones-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .milestone-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: var(--radius-md);
          border: 1px solid var(--line-color);
        }

        .milestone-item.met {
          background: rgba(170, 140, 255, 0.04);
          border-color: rgba(170, 140, 255, 0.2);
        }

        .milestone-item.unlocked {
          opacity: 0.6;
          background: rgba(0, 0, 0, 0.1);
        }

        .milestone-status-indicator {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: #050607;
        }

        .milestone-status-indicator.locked {
          background: var(--line-color);
          color: var(--text-muted);
        }

        .milestone-details {
          display: flex;
          flex-direction: column;
        }

        .milestone-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-color);
        }

        .milestone-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .reset-panel {
          border-color: rgba(255, 76, 168, 0.1);
          background: rgba(12, 15, 18, 0.4);
        }

        .reset-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          color: var(--pink-neon);
          margin-bottom: 8px;
        }

        .reset-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .reset-btn {
          width: 100%;
          font-size: 0.8rem;
          padding: 8px 16px;
          color: var(--pink-neon);
          border-color: rgba(255, 76, 168, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .reset-btn:hover {
          border-color: var(--pink-neon);
          background: rgba(255, 76, 168, 0.05);
        }

        .reset-icon {
          transition: transform 0.5s ease;
        }

        .reset-btn:hover .reset-icon {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};
