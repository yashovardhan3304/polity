import React, { useState } from 'react';
import { HelpCircle, AlertTriangle, BookOpen, RefreshCw, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

interface PYQ {
  id: string;
  exam: 'UPSC' | 'SSC CGL' | 'CDS' | 'CAPF' | 'State PSC';
  year: number;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based
  concept: string;
  article: string;
  trap: string;
  officialExplanation: string;
}

export const PYQArena: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const pyqDatabase: PYQ[] = [
    {
      id: "pyq-01",
      exam: "UPSC",
      year: 2023,
      topic: "President",
      question: "Consider the following statements:\n1. If the election of the President of India is declared void by the Supreme Court of India, all acts done by him/her in the performance of duties of his/her office of President before the date of decision become invalid.\n2. Election for the post of the President of India can be postponed on the ground that some Legislative Assemblies have been dissolved and elections have not taken place.\n3. When a Bill is presented to the President of India, the Constitution prescribes time-limits within which he/she has to declare his/her assent.\nWhich of the statements given above is/are correct?",
      options: [
        "1 and 2 only",
        "2 and 3 only",
        "3 only",
        "Neither 1, 2 nor 3"
      ],
      correctAnswer: 3,
      concept: "Presidential Elections & Legislative Assent Powers",
      article: "54, 71, 111",
      trap: "The Constitution does NOT prescribe any time-limit for the President's assent (leading to pocket veto). Furthermore, acts done by the President remain valid even if the election is declared void retrospectively (Article 71).",
      officialExplanation: "Under Article 71 of the Constitution, if the election of a President is declared void by the Supreme Court, acts done by him prior to the decision are NOT invalidated. Election cannot be postponed on assembly dissolution grounds (re-affirmed in Presidential Election Case 1974). Article 111 specifies the President shall declare assent 'as soon as possible' but sets no strict deadline."
    },
    {
      id: "pyq-02",
      exam: "UPSC",
      year: 2021,
      topic: "Judicial Review",
      question: "With reference to the Constitution of India, consider the following statements:\n1. No High Court shall have the jurisdiction to declare any central law to be constitutionally invalid.\n2. An amendment to the Constitution of India cannot be called into question by the Supreme Court of India.\nWhich of the statements given above is/are correct?",
      options: [
        "1 only",
        "2 only",
        "Both 1 and 2",
        "Neither 1 nor 2"
      ],
      correctAnswer: 3,
      concept: "Scope of Judicial Review and Constitutional Amendments",
      article: "13, 226, 368",
      trap: "High Courts have full powers to declare central laws invalid under Article 226. Amendments CAN be questioned if they violate the Basic Structure (Kesavananda Bharati).",
      officialExplanation: "Article 226 empowers High Courts with robust judicial review over both state and central laws within their territorial jurisdiction. The 42nd Amendment did try to restrict High Courts from reviewing central laws, but that was restored by the 43rd Amendment. The Supreme Court has the absolute right to invalidate any Constitutional Amendment violating Basic Structure."
    },
    {
      id: "pyq-03",
      exam: "CDS",
      year: 2022,
      topic: "Writs",
      question: "Which one of the following writs can be issued by a High Court or Supreme Court to direct a public authority to perform a public duty which it is bound to do?",
      options: [
        "Habeas Corpus",
        "Mandamus",
        "Certiorari",
        "Quo Warranto"
      ],
      correctAnswer: 1,
      concept: "Distinguishing Writ Remedies",
      article: "32, 226",
      trap: "Mandamus cannot be issued against a private individual, the President, or Governors. It only applies to public duties.",
      officialExplanation: "Mandamus literally means 'We command'. It is a command issued by the court to a public authority directing them to perform a statutory duty that they have refused to perform. Habeas Corpus is for unlawful detention; Certiorari is to quash lower court orders; Quo Warranto checks public office credentials."
    },
    {
      id: "pyq-04",
      exam: "SSC CGL",
      year: 2023,
      topic: "73rd Amendment",
      question: "What is the minimum age prescribed by the Constitution of India for contesting elections to a Panchayat?",
      options: [
        "18 years",
        "21 years",
        "25 years",
        "30 years"
      ],
      correctAnswer: 1,
      concept: "Local Body Contest Qualifications",
      article: "243F",
      trap: "Do not confuse the voting age (18 years under Art 326) or the Lok Sabha contesting age (25 years) with the Panchayat contesting age (21 years).",
      officialExplanation: "Under Article 243F of the Constitution, a person shall not be disqualified for contesting elections to a Panchayat if they are not less than 21 years of age, whereas the general assembly age is 25."
    }
  ];

  // Filtering
  const filteredPYQs = pyqDatabase.filter(q => {
    const matchesExam = selectedExam === 'All' || q.exam === selectedExam;
    const matchesYear = selectedYear === 'All' || q.year.toString() === selectedYear;
    return matchesExam && matchesYear;
  });

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleReattempt = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const handleNext = () => {
    if (activeQuestionIdx < filteredPYQs.length - 1) {
      setActiveQuestionIdx(activeQuestionIdx + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  const activeQ = filteredPYQs[activeQuestionIdx];

  return (
    <div className="pyq-page-container">
      {/* Title */}
      <div className="pyq-header">
        <span className="badge badge-purple">Official PYQs</span>
        <h1 className="pyq-title">PYQ SOLVER ARENA</h1>
        <p className="pyq-subtitle">
          Examine official questions from UPSC, SSC, and CDS archives. Break down concepts, articles, and traps systematically.
        </p>
      </div>

      {/* Filter Row */}
      <div className="glass-card glow-purple pyq-filters">
        <h4 className="filters-title">Select Exam Year & Series</h4>
        <div className="filters-row-pyq">
          <div className="filter-item">
            <label className="filter-label">Exam Board</label>
            <select 
              className="filter-select"
              value={selectedExam}
              onChange={e => {
                setSelectedExam(e.target.value);
                setActiveQuestionIdx(0);
                handleReattempt();
              }}
            >
              <option value="All">All Exams</option>
              <option value="UPSC">UPSC Civil Services</option>
              <option value="CDS">Combined Defence Services (CDS)</option>
              <option value="SSC CGL">SSC CGL</option>
            </select>
          </div>

          <div className="filter-item">
            <label className="filter-label">Year</label>
            <select 
              className="filter-select"
              value={selectedYear}
              onChange={e => {
                setSelectedYear(e.target.value);
                setActiveQuestionIdx(0);
                handleReattempt();
              }}
            >
              <option value="All">All Years</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>

      {filteredPYQs.length > 0 && activeQ ? (
        <div className="pyq-solver-layout">
          {/* Question Box */}
          <div className="glass-card glow-purple pyq-question-card">
            <div className="pyq-meta-line">
              <span className="badge badge-blue">{activeQ.exam} ({activeQ.year})</span>
              <span className="pyq-topic-label">Topic: <strong>{activeQ.topic}</strong></span>
            </div>

            <p className="pyq-question-text">{activeQ.question}</p>

            <div className="pyq-options-list">
              {activeQ.options.map((opt, idx) => {
                let statusClass = '';
                if (isSubmitted) {
                  if (idx === activeQ.correctAnswer) {
                    statusClass = 'correct';
                  } else if (idx === selectedOption) {
                    statusClass = 'wrong';
                  } else {
                    statusClass = 'disabled';
                  }
                } else if (selectedOption === idx) {
                  statusClass = 'selected';
                }

                return (
                  <button
                    key={idx}
                    className={`pyq-option-btn ${statusClass}`}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isSubmitted}
                  >
                    <span className="opt-index">{String.fromCharCode(65 + idx)}.</span>
                    <span className="opt-text">{opt}</span>
                  </button>
                );
              })}
            </div>

            <div className="pyq-actions-row">
              {!isSubmitted ? (
                <button 
                  className="btn-primary" 
                  onClick={() => setIsSubmitted(true)}
                  disabled={selectedOption === null}
                >
                  Verify Answer
                </button>
              ) : (
                <div className="action-buttons-grp">
                  <button className="btn-secondary reattempt-btn" onClick={handleReattempt}>
                    <RefreshCw size={14} /> Reattempt
                  </button>
                  {activeQuestionIdx < filteredPYQs.length - 1 && (
                    <button className="btn-primary" onClick={handleNext}>
                      Next PYQ <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Guided Breakdown Panel (Visible after submission) */}
          {isSubmitted && (
            <div className="pyq-breakdown-panel glass-card glow-pink">
              <h3 className="breakdown-title text-neon-pink">SYSTEMATIC BREAKDOWN</h3>
              
              {/* Step 1: Concept */}
              <div className="breakdown-section border-top-line">
                <div className="breakdown-header">
                  <FileText className="text-neon-blue" size={16} />
                  <span className="breakdown-heading text-neon-blue">1. Core Concept Identified</span>
                </div>
                <p className="breakdown-desc">{activeQ.concept}</p>
              </div>

              {/* Step 2: Articles */}
              <div className="breakdown-section border-top-line">
                <div className="breakdown-header">
                  <BookOpen className="text-neon-green" size={16} />
                  <span className="breakdown-heading text-neon-green">2. Constitutional Article Spine</span>
                </div>
                <p className="breakdown-desc">Deals with: <strong>Article {activeQ.article}</strong></p>
              </div>

              {/* Step 3: Trap */}
              <div className="breakdown-section border-top-line">
                <div className="breakdown-header">
                  <AlertTriangle className="text-neon-pink" size={16} />
                  <span className="breakdown-heading text-neon-pink">3. The Exam Trap Warning</span>
                </div>
                <p className="breakdown-desc">{activeQ.trap}</p>
              </div>

              {/* Step 4: Explanation */}
              <div className="breakdown-section border-top-line">
                <div className="breakdown-header">
                  <CheckCircle2 className="text-neon-purple" size={16} />
                  <span className="breakdown-heading text-neon-purple">4. Detailed Explanation</span>
                </div>
                <p className="breakdown-desc">{activeQ.officialExplanation}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="glass-card glow-purple empty-pool-card">
          <HelpCircle className="text-muted-check" size={40} />
          <h3>No Questions Found</h3>
          <p className="empty-desc">No past papers match the current filters. Adjust your exam or year choices.</p>
        </div>
      )}

      <style>{`
        .pyq-page-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .pyq-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pyq-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--purple-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pyq-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .pyq-filters {
          padding: 16px;
        }

        .filters-row-pyq {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 600px) {
          .filters-row-pyq {
            flex-direction: column;
            gap: 12px;
          }
        }

        .pyq-solver-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        @media (max-width: 950px) {
          .pyq-solver-layout {
            grid-template-columns: 1fr;
          }
        }

        .pyq-question-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pyq-meta-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--line-color);
          padding-bottom: 12px;
        }

        .pyq-topic-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .pyq-question-text {
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.6;
          color: var(--text-color);
          white-space: pre-line;
        }

        .pyq-options-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pyq-option-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--line-color);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          cursor: pointer;
          transition: var(--transition-smooth);
          text-align: left;
          width: 100%;
        }

        .pyq-option-btn:hover:not(:disabled) {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.2);
        }

        .pyq-option-btn.selected {
          border-color: var(--purple-neon);
          background: rgba(170, 140, 255, 0.03);
        }

        .pyq-option-btn.correct {
          border-color: var(--green-neon);
          background: rgba(167, 255, 56, 0.06);
        }

        .pyq-option-btn.wrong {
          border-color: var(--pink-neon);
          background: rgba(255, 76, 168, 0.06);
        }

        .pyq-option-btn.disabled {
          opacity: 0.4;
        }

        .opt-index {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--text-muted);
        }

        .pyq-option-btn.selected .opt-index, .pyq-option-btn.correct .opt-index {
          color: var(--purple-neon);
        }

        .pyq-option-btn.wrong .opt-index {
          color: var(--pink-neon);
        }

        .opt-text {
          font-size: 0.85rem;
          color: var(--text-color);
        }

        .pyq-actions-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }

        .action-buttons-grp {
          display: flex;
          gap: 12px;
        }

        .reattempt-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          font-size: 0.8rem;
        }

        .pyq-breakdown-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
          animation: slideUp 0.35s ease-out;
        }

        .breakdown-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--line-color);
          padding-bottom: 8px;
        }

        .breakdown-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .breakdown-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .breakdown-heading {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .breakdown-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
};
