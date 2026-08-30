import React from 'react';
import { FileText, ExternalLink, Link2 } from 'lucide-react';
import { sourceLibraryData } from '../data/otherData';

export const SourceLibrary: React.FC = () => {
  return (
    <div className="sources-library-view">
      {/* Title */}
      <div className="sources-header">
        <span className="badge badge-purple">Official Archives</span>
        <h1 className="sources-title">SOURCE BIBLIOGRAPHY LIBRARY</h1>
        <p className="sources-subtitle">
          Verify and consult the primary sources backing our notes. Browse official government documentation and exam papers.
        </p>
      </div>

      {/* Grid of official links */}
      <div className="sources-grid">
        {sourceLibraryData.map(source => (
          <div key={source.name} className="glass-card glow-purple source-item-card">
            <div className="source-card-header">
              <div className="source-icon-title">
                <div className="source-file-icon bg-neon-purple">
                  <FileText size={18} />
                </div>
                <h3 className="source-name">{source.name}</h3>
              </div>
            </div>

            <div className="source-usage-box">
              <div className="usage-header">
                <Link2 size={12} className="text-neon-purple" />
                <span className="usage-lbl text-neon-purple">PRIMARY USE CASE:</span>
              </div>
              <p className="usage-text">{source.use}</p>
            </div>

            <div className="source-card-footer">
              <a 
                href={source.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary source-open-btn"
              >
                Access Source Database <ExternalLink size={14} style={{ marginLeft: '4px' }} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .sources-library-view {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sources-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sources-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--purple-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sources-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .sources-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 850px) {
          .sources-grid {
            grid-template-columns: 1fr;
          }
        }

        .source-item-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: space-between;
          min-height: 200px;
        }

        .source-card-header {
          border-bottom: 1px solid var(--line-color);
          padding-bottom: 12px;
        }

        .source-icon-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .source-file-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #050607;
          flex-shrink: 0;
        }

        .source-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-color);
          line-height: 1.4;
        }

        .source-usage-box {
          background: rgba(170, 140, 255, 0.02);
          border: 1px solid rgba(170, 140, 255, 0.12);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .usage-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .usage-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .source-card-footer {
          margin-top: auto;
        }

        .source-open-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          padding: 10px 16px;
        }
      `}</style>
    </div>
  );
};
