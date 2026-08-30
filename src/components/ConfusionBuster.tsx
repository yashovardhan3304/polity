import React, { useState } from 'react';
import { AlertTriangle, Sparkles, HelpCircle } from 'lucide-react';
import { comparisonsData } from '../data/otherData';

export const ConfusionBuster: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredComparisons = comparisonsData.filter(comp =>
    comp.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.aName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.bName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.examTrap.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="buster-container">
      {/* Title */}
      <div className="buster-header">
        <span className="badge badge-yellow">Exam Trap Defuser</span>
        <h1 className="buster-title">CONFUSION BUSTER MATRIX</h1>
        <p className="buster-subtitle">
          Deconstruct tricky UPSC and SSC CGL topics. Spot structural distinctions side-by-side and avoid examiners' traps.
        </p>
      </div>

      {/* Search Filter */}
      <div className="buster-search glass-card glow-yellow">
        <input
          type="text"
          placeholder="Filter comparisons (e.g. Writs, Emergency, Bill)..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="input-search search-bar-buster"
        />
      </div>

      {/* Comparisons Table / Responsive Grid */}
      <div className="table-responsive-wrapper glass-card glow-yellow">
        <table className="buster-table">
          <thead>
            <tr>
              <th style={{ width: '15%' }}>Concept</th>
              <th style={{ width: '35%' }}>Domain A</th>
              <th style={{ width: '35%' }}>Domain B</th>
              <th style={{ width: '15%' }}>Exam Trap Warning</th>
            </tr>
          </thead>
          <tbody>
            {filteredComparisons.map(comp => (
              <tr key={comp.concept}>
                <td className="concept-cell text-neon-yellow">
                  <div className="concept-wrapper">
                    <Sparkles size={14} className="sparkle-icon" />
                    <span>{comp.concept}</span>
                  </div>
                </td>
                
                <td className="domain-cell">
                  <span className="domain-title">{comp.aName}</span>
                  <p className="domain-desc">{comp.aContent}</p>
                </td>
                
                <td className="domain-cell">
                  <span className="domain-title">{comp.bName}</span>
                  <p className="domain-desc">{comp.bContent}</p>
                </td>
                
                <td className="trap-cell">
                  <div className="trap-alert-wrapper">
                    <AlertTriangle size={16} className="text-neon-pink" />
                    <p className="trap-alert-text">{comp.examTrap}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredComparisons.length === 0 && (
          <div className="no-comparisons">
            <HelpCircle size={32} className="text-muted" />
            <p>No comparisons match your filter query.</p>
          </div>
        )}
      </div>

      {/* Mobile Card Version (Hides Table on narrow screens via CSS) */}
      <div className="mobile-cards-list">
        {filteredComparisons.map(comp => (
          <div key={comp.concept} className="glass-card glow-yellow mobile-buster-card">
            <h3 className="mobile-concept-title text-neon-yellow">{comp.concept}</h3>
            
            <div className="mobile-domain-section">
              <span className="domain-title">{comp.aName}</span>
              <p className="domain-desc">{comp.aContent}</p>
            </div>
            
            <div className="mobile-domain-section border-top-line">
              <span className="domain-title">{comp.bName}</span>
              <p className="domain-desc">{comp.bContent}</p>
            </div>
            
            <div className="mobile-trap-section">
              <div className="trap-header-row">
                <AlertTriangle size={14} className="text-neon-pink" />
                <span className="trap-title text-neon-pink">Exam Trap Warning</span>
              </div>
              <p className="trap-desc">{comp.examTrap}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .buster-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .buster-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .buster-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--yellow-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .buster-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .buster-search {
          padding: 16px;
        }

        .search-bar-buster {
          width: 100%;
          font-size: 0.9rem;
        }

        .table-responsive-wrapper {
          overflow-x: auto;
          padding: 0;
        }

        .concept-cell {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .concept-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .sparkle-icon {
          flex-shrink: 0;
          margin-top: 4px;
        }

        .domain-cell {
          font-size: 0.85rem;
        }

        .domain-title {
          display: block;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 6px;
        }

        .domain-desc {
          color: var(--text-muted);
          line-height: 1.5;
        }

        .trap-cell {
          background: rgba(255, 76, 168, 0.01);
        }

        .trap-alert-wrapper {
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        .trap-alert-text {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .no-comparisons {
          padding: 40px;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        /* Mobile Card Styles */
        .mobile-cards-list {
          display: none;
          flex-direction: column;
          gap: 20px;
        }

        .mobile-buster-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-concept-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          border-bottom: 1px solid var(--line-color);
          padding-bottom: 8px;
        }

        .mobile-domain-section {
          font-size: 0.85rem;
        }

        .border-top-line {
          border-top: 1px dashed var(--line-color);
          padding-top: 12px;
        }

        .mobile-trap-section {
          background: rgba(255, 76, 168, 0.03);
          border: 1px solid rgba(255, 76, 168, 0.15);
          padding: 12px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .trap-header-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .trap-title {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .trap-desc {
          font-size: 0.8rem;
          color: var(--text-color);
        }

        /* Responsive Breakpoint */
        @media (max-width: 850px) {
          .table-responsive-wrapper {
            display: none;
          }
          .mobile-cards-list {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
};
