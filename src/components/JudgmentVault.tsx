import React from 'react';
import { Landmark, Scale, ExternalLink } from 'lucide-react';
import { judgmentsData } from '../data/otherData';

interface JudgmentVaultProps {
  setActiveTab: (tab: string) => void;
}

export const JudgmentVault: React.FC<JudgmentVaultProps> = ({ setActiveTab }) => {
  
  const handleArticleRedirect = (artNum: string) => {
    // Extract numerical digits for redirect
    const num = artNum.replace(/[^\d]/g, '');
    setActiveTab('articles');
    setTimeout(() => {
      const event = new CustomEvent('focus-article', { detail: num || artNum });
      window.dispatchEvent(event);
    }, 150);
  };

  return (
    <div className="judgments-view">
      {/* Title */}
      <div className="judgments-header">
        <span className="badge badge-purple">Judicial Precedents</span>
        <h1 className="judgments-title">LANDMARK JUDGMENTS VAULT</h1>
        <p className="judgments-subtitle">
          Explore legal cases that shaped the basic architecture of the Indian Constitution. Study their core principles and associated articles.
        </p>
      </div>

      {/* Grid of Judgments */}
      <div className="judgments-grid">
        {judgmentsData.map(jg => (
          <div key={jg.name} className="glass-card glow-purple judgment-card">
            <div className="card-header-row">
              <div className="header-icon-name">
                <div className="judg-icon-circle bg-neon-purple">
                  <Landmark size={18} />
                </div>
                <h3 className="judgment-name">{jg.name}</h3>
              </div>
            </div>

            {/* Principle Box */}
            <div className="judgment-doctrine-box">
              <div className="doctrine-lbl">
                <Scale size={14} className="text-neon-purple" />
                <span className="text-neon-purple">LEGAL PRINCIPLE:</span>
              </div>
              <h4 className="doctrine-name">{jg.principle}</h4>
            </div>

            {/* Summary */}
            <p className="judgment-summary-text">{jg.summary}</p>

            {/* Footer: related and official citation */}
            <div className="card-footer-layout">
              <div className="footer-related">
                <span className="footer-lbl-mini">Related:</span>
                <button 
                  className="related-art-link-btn"
                  onClick={() => handleArticleRedirect(jg.related)}
                >
                  {jg.related}
                </button>
              </div>

              <a 
                href={jg.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="official-pdf-link"
              >
                Supreme Court Archive <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .judgments-view {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .judgments-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .judgments-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--purple-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .judgments-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .judgments-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 900px) {
          .judgments-grid {
            grid-template-columns: 1fr;
          }
        }

        .judgment-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--line-color);
          padding-bottom: 12px;
        }

        .header-icon-name {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .judg-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #050607;
          flex-shrink: 0;
        }

        .judgment-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-color);
          line-height: 1.3;
        }

        .judgment-doctrine-box {
          background: rgba(170, 140, 255, 0.02);
          border: 1px solid rgba(170, 140, 255, 0.15);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .doctrine-lbl {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .doctrine-name {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-color);
        }

        .judgment-summary-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .card-footer-layout {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px dashed var(--line-color);
          padding-top: 12px;
          font-size: 0.8rem;
          margin-top: auto;
        }

        .footer-related {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-lbl-mini {
          color: var(--text-muted);
        }

        .related-art-link-btn {
          background: none;
          border: none;
          color: var(--purple-neon);
          font-weight: 600;
          cursor: pointer;
          font-size: 0.8rem;
          transition: var(--transition-smooth);
        }

        .related-art-link-btn:hover {
          text-decoration: underline;
          text-shadow: 0 0 4px var(--purple-neon);
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
