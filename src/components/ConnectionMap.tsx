import React, { useState } from 'react';
import { HelpCircle, Award, Layers } from 'lucide-react';

interface NodeInfo {
  id: string;
  article: string;
  topic: string;
  x: number;
  y: number;
  role: string;
  notes: string;
}

export const ConnectionMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>("node-52");
  const [flowStep, setFlowStep] = useState<number>(0);

  // Core nodes as specified in the requirements
  const nodes: NodeInfo[] = [
    {
      id: "node-52",
      article: "52",
      topic: "President",
      x: 150,
      y: 100,
      role: "Executive Head of State",
      notes: "Vests all executive actions of the Union. Summons and prorogues Parliament. Gives final assent to bills."
    },
    {
      id: "node-75",
      article: "75",
      topic: "Prime Minister",
      x: 300,
      y: 100,
      role: "De Facto Head of Government",
      notes: "Appointed by the President. Leads the Council of Ministers, acts as the primary channel of communication with the President, and steers national policy."
    },
    {
      id: "node-74",
      article: "74",
      topic: "Council of Ministers",
      x: 450,
      y: 100,
      role: "Aid and Advice to President",
      notes: "Collective executive body headed by the Prime Minister. Their advice is constitutionally binding on the President (who may request reconsideration once)."
    },
    {
      id: "node-76",
      article: "76",
      topic: "Attorney General",
      x: 600,
      y: 100,
      role: "Chief Legal Adviser to the Union",
      notes: "Appointed by the President. Holds office during Presidential pleasure. Advises on legal matters and enjoys right of audience in all Indian courts."
    },
    {
      id: "node-79",
      article: "79",
      topic: "Parliament",
      x: 300,
      y: 220,
      role: "Union Legislature",
      notes: "Consists of President, Lok Sabha, and Rajya Sabha. Passes ordinary and constitutional amendment bills."
    },
    {
      id: "node-110",
      article: "110",
      topic: "Money Bill",
      x: 180,
      y: 340,
      role: "Special Devolution Bill",
      notes: "Contains only matters of taxation and public expenditure. Speaker holds final certifying authority. Rajya Sabha has only 14 days."
    },
    {
      id: "node-124",
      article: "124",
      topic: "Supreme Court",
      x: 600,
      y: 220,
      role: "Highest Judicial Forum",
      notes: "Final interpreter of the Constitution. Resolves federal conflicts under original jurisdiction (Art 131)."
    },
    {
      id: "node-148",
      article: "148",
      topic: "CAG",
      x: 650,
      y: 100,
      role: "Guardian of Public Purse",
      notes: "Audits all government receipts and expenditure. Independent tenure similar to an SC Judge."
    },
    {
      id: "node-280",
      article: "280",
      topic: "Finance Commission",
      x: 750,
      y: 220,
      role: "Revenue Devolution Commission",
      notes: "Constituted by the President every five years. Recommends the sharing of tax proceeds and principles of grants-in-aid between Center and States."
    },
    {
      id: "node-153",
      article: "153",
      topic: "Governor",
      x: 150,
      y: 460,
      role: "State Executive Head",
      notes: "Appointed by the President. Serves as both state head and central agent. Possesses broad constitutional discretion."
    },
    {
      id: "node-163",
      article: "163",
      topic: "State Council of Ministers",
      x: 450,
      y: 460,
      role: "Aid and Advice to Governor",
      notes: "Headed by the Chief Minister. Advises Governor except in areas of explicit gubernatorial discretion."
    },
    {
      id: "node-168",
      article: "168",
      topic: "State Legislature",
      x: 300,
      y: 380,
      role: "State Legislative Organ",
      notes: "Bicameral or unicameral legislative bodies in States. Can pass state bills and initiate council creation resolutions."
    },
    {
      id: "node-324",
      article: "324",
      topic: "Election Commission",
      x: 750,
      y: 340,
      role: "Superintendent of Elections",
      notes: "Conducts clean elections to Parliament, State Legislatures, President, and VP. Independent CEC removal rules."
    }
  ];

  // Visual Flow representation: President -> Prime Minister -> Council of Ministers -> Parliament -> Bills -> Assent
  const flowSteps = [
    {
      title: "1. The President (Art 52)",
      detail: "Acts as the executive head. All executive actions of the Government of India are formally taken in the President's name.",
      article: "52",
      color: "var(--purple-neon)"
    },
    {
      title: "2. The Prime Minister (Art 75)",
      detail: "Appointed by the President. Represents the real executive leader (de facto head) of the country, advising the President on cabinet appointments.",
      article: "75",
      color: "var(--yellow-neon)"
    },
    {
      title: "3. Council of Ministers (Art 74)",
      detail: "Aid and advise the President in exercising executive powers. Their collective advice is binding on the President.",
      article: "74",
      color: "var(--green-neon)"
    },
    {
      title: "4. Parliament (Art 79)",
      detail: "Cabinet drafts and introduces legislative proposals (Bills) in either Lok Sabha or Rajya Sabha (subject to Money Bill limits).",
      article: "79",
      color: "var(--blue-neon)"
    },
    {
      title: "5. Legislative Bills (Art 107/110)",
      detail: "Bills are debated, amended, and passed by both Houses. Money bills bypass Rajya Sabha rejection; other bills allow joint sittings in deadlocks.",
      article: "110",
      color: "var(--pink-neon)"
    },
    {
      title: "6. Presidential Assent (Art 111)",
      detail: "Once passed, the Bill is sent to the President, who must assent, withhold assent, or return it (unless a Constitutional Amendment).",
      article: "111",
      color: "var(--purple-neon)"
    }
  ];

  const activeNodeInfo = nodes.find(n => n.id === selectedNode);

  return (
    <div className="connection-map-view">
      {/* Title */}
      <div className="map-header">
        <span className="badge badge-purple">Interactive Graph</span>
        <h1 className="map-title">CONSTITUTIONAL CONNECTION MAP</h1>
        <p className="map-subtitle">
          Explore the relationships between core constitutional institutions, articles, and the flow of democratic governance.
        </p>
      </div>

      <div className="map-layout-grid">
        {/* Interactive Graph Board */}
        <div className="glass-card glow-purple graph-board">
          <div className="graph-board-header">
            <span className="sub-title"><Layers size={16} /> Federal Network Diagram</span>
            <span className="help-text-mini">Click nodes to review institutional connections</span>
          </div>

          <div className="canvas-wrapper">
            <svg width="100%" height="560" viewBox="0 0 900 560" className="svg-canvas">
              {/* Definitions for arrow markers and filters */}
              <defs>
                <filter id="glow-effect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Glowing SVG connection lines */}
              {/* Executive Center (President -> PM -> Cabinet) */}
              <line x1="150" y1="100" x2="300" y2="100" stroke="var(--purple-neon)" strokeWidth="2" strokeDasharray="5,5" className="glowing-path" />
              <line x1="300" y1="100" x2="450" y2="100" stroke="var(--green-neon)" strokeWidth="2" strokeDasharray="5,5" className="glowing-path" />
              {/* President to Parliament */}
              <line x1="150" y1="100" x2="300" y2="220" stroke="var(--purple-neon)" strokeWidth="2.5" className="glowing-path" />
              {/* PM to Parliament */}
              <line x1="300" y1="100" x2="300" y2="220" stroke="var(--yellow-neon)" strokeWidth="2" className="glowing-path" />
              {/* Cabinet to Parliament */}
              <line x1="450" y1="100" x2="300" y2="220" stroke="var(--green-neon)" strokeWidth="2" className="glowing-path" />
              {/* Parliament to Money Bill */}
              <line x1="300" y1="220" x2="180" y2="340" stroke="var(--pink-neon)" strokeWidth="2" className="glowing-path" />
              {/* Parliament to SC */}
              <line x1="300" y1="220" x2="600" y2="220" stroke="var(--blue-neon)" strokeWidth="2" strokeDasharray="5,5" className="glowing-path" />
              {/* President to CAG */}
              <line x1="150" y1="100" x2="650" y2="100" stroke="var(--purple-neon)" strokeWidth="1.5" className="glowing-path" />
              {/* President to AG */}
              <line x1="150" y1="100" x2="600" y2="100" stroke="var(--purple-neon)" strokeWidth="1.5" className="glowing-path" />
              {/* AG to SC */}
              <line x1="600" y1="100" x2="600" y2="220" stroke="var(--purple-neon)" strokeWidth="1.5" strokeDasharray="5,5" className="glowing-path" />
              {/* President to Finance Commission */}
              <line x1="150" y1="100" x2="750" y2="220" stroke="var(--purple-neon)" strokeWidth="1.5" className="glowing-path" />
              {/* Finance Commission to EC */}
              <line x1="750" y1="220" x2="750" y2="340" stroke="var(--purple-neon)" strokeWidth="1.5" strokeDasharray="5,5" className="glowing-path" />
              
              {/* State Executive Lines */}
              <line x1="150" y1="460" x2="450" y2="460" stroke="var(--yellow-neon)" strokeWidth="2" strokeDasharray="5,5" className="glowing-path" />
              <line x1="150" y1="460" x2="300" y2="380" stroke="var(--yellow-neon)" strokeWidth="2" className="glowing-path" />
              <line x1="450" y1="460" x2="300" y2="380" stroke="var(--green-neon)" strokeWidth="2" className="glowing-path" />
              
              {/* Center federal links (Legislature to State Legislature) */}
              <line x1="300" y1="220" x2="300" y2="380" stroke="var(--purple-neon)" strokeWidth="2" strokeDasharray="10,5" className="glowing-path" />

              {/* Rendering interactive nodes */}
              {nodes.map(node => {
                const isSelected = selectedNode === node.id;
                return (
                  <g 
                    key={node.id} 
                    className="interactive-node-group" 
                    onClick={() => setSelectedNode(node.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Glowing outer circle if active */}
                    <circle 
                      cx={node.x} 
                      cy={node.y} 
                      r={isSelected ? 38 : 28} 
                      fill="rgba(12, 15, 18, 0.9)"
                      stroke={isSelected ? "var(--purple-neon)" : "var(--line-color)"}
                      strokeWidth={isSelected ? 3 : 1.5}
                      filter={isSelected ? "url(#glow-effect)" : ""}
                      className="node-bg"
                    />
                    {/* Node text: Article Number */}
                    <text 
                      x={node.x} 
                      y={node.y - 2}
                      textAnchor="middle" 
                      fill={isSelected ? "var(--purple-neon)" : "var(--text-color)"}
                      fontSize="11" 
                      fontWeight="bold"
                      fontFamily="var(--font-heading)"
                    >
                      Art. {node.article}
                    </text>
                    {/* Node text: Topic name */}
                    <text 
                      x={node.x} 
                      y={node.y + 14} 
                      textAnchor="middle" 
                      fill="var(--text-muted)"
                      fontSize="8.5"
                      fontWeight="600"
                    >
                      {node.topic.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Node detail display panel */}
        <div className="glass-card glow-purple node-info-panel">
          {activeNodeInfo ? (
            <div className="node-detail-layout">
              <span className="badge badge-purple">Institutional Node</span>
              <div className="node-title-row">
                <h3 className="node-topic-title text-neon-purple">{activeNodeInfo.topic}</h3>
                <div className="article-bubble bg-neon-purple">Article {activeNodeInfo.article}</div>
              </div>
              <h4 className="node-role-label">{activeNodeInfo.role}</h4>
              <p className="node-notes-text">{activeNodeInfo.notes}</p>
              
              <div className="node-connections-summary">
                <span className="summary-label">Key Connections:</span>
                <ul className="conn-bullets">
                  {activeNodeInfo.topic === "President" && (
                    <>
                      <li>Binds executive action with advice of the <strong>Prime Minister & Cabinet (Art 74)</strong></li>
                      <li>Constituent part of the <strong>Parliament (Art 79)</strong></li>
                      <li>Appoints the <strong>Attorney General (Art 76)</strong>, <strong>CAG (Art 148)</strong>, and <strong>Finance Commission (Art 280)</strong></li>
                    </>
                  )}
                  {activeNodeInfo.topic === "Prime Minister" && (
                    <>
                      <li>Head of government; recommends cabinet appointments to the <strong>President (Art 75)</strong></li>
                      <li>Serves as the principal advisor to the <strong>President</strong> and link to the <strong>Council of Ministers (Art 74)</strong></li>
                      <li>Leads the legislative business and debates in <strong>Parliament</strong></li>
                    </>
                  )}
                  {activeNodeInfo.topic === "Council of Ministers" && (
                    <>
                      <li>Responsible collectively to the <strong>Lok Sabha (Art 75)</strong></li>
                      <li>Tenders binding aid and advice to the <strong>President (Art 74)</strong></li>
                    </>
                  )}
                  {activeNodeInfo.topic === "Attorney General" && (
                    <>
                      <li>Appointed by the <strong>President</strong> as chief legal advisor (Art 76)</li>
                      <li>Enjoys the right of audience in the <strong>Supreme Court</strong> and all courts in India</li>
                      <li>Can take part in <strong>Parliament</strong> proceedings but does not have the right to vote</li>
                    </>
                  )}
                  {activeNodeInfo.topic === "Parliament" && (
                    <>
                      <li>Legislates on federal subjects; passes <strong>Money Bills (Art 110)</strong></li>
                      <li>Sets limits and confirms <strong>Supreme Court (Art 124)</strong> judge size</li>
                    </>
                  )}
                  {activeNodeInfo.topic === "Finance Commission" && (
                    <>
                      <li>Appointed by the <strong>President</strong> every 5 years (Art 280)</li>
                      <li>Recommends distribution of net tax proceeds between Center and States</li>
                      <li>Formulates principles for grants-in-aid out of the Consolidated Fund of India</li>
                    </>
                  )}
                  {activeNodeInfo.topic === "Governor" && (
                    <>
                      <li>Appointed by <strong>President</strong>; represents Center</li>
                      <li>Vests state executive power; works with <strong>State Council (Art 163)</strong></li>
                    </>
                  )}
                  {activeNodeInfo.topic === "Supreme Court" && (
                    <>
                      <li>Resolves disputes between Center and States</li>
                      <li>Binds all lower courts with precedents (Art 141)</li>
                    </>
                  )}
                  {!["President", "Prime Minister", "Council of Ministers", "Attorney General", "Parliament", "Finance Commission", "Governor", "Supreme Court"].includes(activeNodeInfo.topic) && (
                    <li>Interlinked body executing checks and balances under constitutional mandates.</li>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div className="node-detail-placeholder">
              <HelpCircle size={40} className="text-muted-check" />
              <p>Select any node in the federal diagram to inspect constitutional interactions.</p>
            </div>
          )}
        </div>
      </div>

      {/* Bill Passage Legislative Flow Simulator */}
      <div className="glass-card glow-pink flow-simulator">
        <h3 className="panel-title-simple"><Award size={18} /> Legislative Bill Passage Simulator</h3>
        <p className="panel-desc">
          Click through the constitutional steps modeling how an executive concept transforms into a binding federal law.
        </p>

        {/* Visual Roadmap steps */}
        <div className="flow-steps-timeline">
          {flowSteps.map((step, idx) => {
            const isActive = flowStep === idx;
            return (
              <button
                key={step.title}
                onClick={() => setFlowStep(idx)}
                className={`flow-step-dot-btn ${isActive ? 'active' : ''}`}
                style={{ '--accent-color': step.color } as React.CSSProperties}
              >
                <div className="flow-step-circle">
                  {idx + 1}
                </div>
                <span className="flow-step-label">{step.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Info card for active flow step */}
        <div className="flow-step-detail-card glass-card">
          <div className="flow-card-header">
            <h4 className="flow-step-title">{flowSteps[flowStep].title}</h4>
            <span className="badge badge-pink">Art. {flowSteps[flowStep].article}</span>
          </div>
          <p className="flow-step-detail-text">{flowSteps[flowStep].detail}</p>
        </div>
      </div>

      <style>{`
        .connection-map-view {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .map-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .map-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--purple-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .map-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .map-layout-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        @media (max-width: 1050px) {
          .map-layout-grid {
            grid-template-columns: 1fr;
          }
        }

        .graph-board {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .graph-board-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: var(--text-color);
        }

        .sub-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 600;
          text-transform: uppercase;
        }

        .help-text-mini {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .canvas-wrapper {
          width: 100%;
          border: 1px solid var(--line-color);
          border-radius: var(--radius-md);
          background: #020304;
          overflow: hidden;
        }

        .svg-canvas {
          max-width: 100%;
          height: auto;
        }

        .glowing-path {
          stroke-linecap: round;
          animation: march 30s linear infinite;
        }

        @keyframes march {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }

        .interactive-node-group circle {
          transition: var(--transition-smooth);
        }

        .interactive-node-group:hover circle {
          stroke: var(--purple-neon);
          fill: rgba(170, 140, 255, 0.1);
          transform: scale(1.05);
          transform-origin: center;
        }

        .node-info-panel {
          min-height: 300px;
          display: flex;
          flex-direction: column;
        }

        .node-detail-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-muted);
          flex: 1;
          gap: 16px;
          padding: 20px;
          font-size: 0.85rem;
        }

        .node-detail-layout {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .node-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .node-topic-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .article-bubble {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.8rem;
          padding: 4px 10px;
          border-radius: 20px;
          color: #050607;
        }

        .node-role-label {
          font-size: 0.95rem;
          color: var(--text-color);
          font-weight: 600;
        }

        .node-notes-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .node-connections-summary {
          border-top: 1px dashed var(--line-color);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .summary-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-color);
          text-transform: uppercase;
        }

        .conn-bullets {
          padding-left: 16px;
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .flow-simulator {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .flow-steps-timeline {
          display: flex;
          justify-content: space-between;
          position: relative;
          padding: 20px 0;
          margin: 10px 0;
        }

        .flow-steps-timeline::before {
          content: '';
          position: absolute;
          top: 36px;
          left: 5%;
          right: 5%;
          height: 2px;
          background: var(--line-color);
          z-index: 1;
        }

        @media (max-width: 700px) {
          .flow-steps-timeline {
            flex-direction: column;
            gap: 16px;
            padding: 0;
          }
          .flow-steps-timeline::before {
            display: none;
          }
        }

        .flow-step-dot-btn {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          z-index: 2;
          width: 80px;
        }

        @media (max-width: 700px) {
          .flow-step-dot-btn {
            flex-direction: row;
            width: 100%;
            gap: 16px;
          }
        }

        .flow-step-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--panel-color);
          border: 2px solid var(--line-color);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: bold;
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .flow-step-dot-btn.active .flow-step-circle {
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 12px var(--accent-color);
          transform: scale(1.15);
        }

        .flow-step-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-align: center;
          transition: var(--transition-smooth);
        }

        .flow-step-dot-btn.active .flow-step-label {
          color: var(--text-color);
          text-shadow: 0 0 5px var(--text-color);
        }

        .flow-step-detail-card {
          background: rgba(5,6,7,0.4);
          border-color: var(--line-color);
          padding: 16px 20px;
        }

        .flow-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .flow-step-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
        }

        .flow-step-detail-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
