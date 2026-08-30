import React from 'react';
import { Calendar, ExternalLink, Shield } from 'lucide-react';
import { currentPolityData } from '../data/otherData';

export const CurrentPolity: React.FC = () => {
  return (
    <div className="current-polity-view">
      {/* Title */}
      <div className="current-header">
        <span className="badge badge-purple">Exam News</span>
        <h1 className="current-title">CURRENT POLITY & AFFAIRS</h1>
        <p className="current-subtitle">
          Real-time constitutional developments. Study how news events translate directly into objective exam questions.
        </p>
      </div>

      {/* Timeline items list */}
      <div className="current-timeline">
        {currentPolityData.map(item => (
          <div key={item.id} className="glass-card glow-purple timeline-card">
            <div className="card-top-bar">
              <div className="date-badge">
                <Calendar size={14} className="text-neon-purple" />
                <span>{item.date}</span>
              </div>
              <span className="source-label-tag text-neon-purple">Source: {item.sourceName}</span>
            </div>

            <div className="card-body">
              <h3 className="development-title">{item.title}</h3>
              <p className="development-desc">{item.description}</p>
            </div>

            {/* Why it matters for exams */}
            <div className="exam-significance-box">
              <div className="significance-header">
                <Shield size={14} className="text-neon-green" />
                <span className="text-neon-green">EXAM SIGNIFICANCE:</span>
              </div>
              <p className="significance-text">{item.examSignificance}</p>
            </div>

            <div className="card-footer">
              <a 
                href={item.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="official-pdf-link"
              >
                Inspect Official Source Material <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .current-polity-view {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .current-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .current-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--purple-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .current-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .current-timeline {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .timeline-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          border-bottom: 1px solid var(--line-color);
          padding-bottom: 10px;
        }

        .date-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-weight: 600;
        }

        .source-label-tag {
          font-family: var(--font-heading);
          font-weight: 600;
        }

        .development-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 6px;
        }

        .development-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .exam-significance-box {
          background: rgba(167, 255, 56, 0.02);
          border: 1px solid rgba(167, 255, 56, 0.15);
          padding: 14px 16px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .significance-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .significance-text {
          font-size: 0.85rem;
          color: var(--text-color);
        }

        .card-footer {
          display: flex;
          justify-content: flex-end;
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
          color: var(--purple-neon);
          text-shadow: 0 0 4px var(--purple-neon);
        }
      `}</style>
    </div>
  );
};
