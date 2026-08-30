import React, { useState, useEffect } from 'react';
import { ChevronRight, RefreshCw, BarChart2, Star, Check, AlertTriangle, BookOpen } from 'lucide-react';
import { mcqsData } from '../data/mcqsData';
import type { MCQ } from '../data/mcqsData';

interface MCQEngineProps {
  onScoreUpdate: (points: number, isCorrect: boolean, topic: string) => void;
  quizPoints: number;
}

export const MCQEngine: React.FC<MCQEngineProps> = ({ onScoreUpdate, quizPoints }) => {
  // Filters
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedExamType, setSelectedExamType] = useState<string>('All');

  // Quiz State
  const [questions, setQuestions] = useState<MCQ[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  // Statistics
  const [localStats, setLocalStats] = useState({
    correct: 0,
    total: 0
  });

  // Extract unique topics from the question pool for filters
  const topicsList = ['All', ...Array.from(new Set(mcqsData.map(q => q.topic)))];

  // Initialize and filter questions
  useEffect(() => {
    let filtered = [...mcqsData];
    if (selectedTopic !== 'All') {
      filtered = filtered.filter(q => q.topic === selectedTopic);
    }
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(q => q.difficulty === selectedDifficulty);
    }
    if (selectedExamType !== 'All') {
      filtered = filtered.filter(q => q.examType === selectedExamType);
    }

    setQuestions(filtered);
    setCurrentIdx(0);
    resetQuestionState();
  }, [selectedTopic, selectedDifficulty, selectedExamType]);

  const resetQuestionState = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleOptionSelect = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIdx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswered) return;

    setIsAnswered(true);
    const activeQuestion = questions[currentIdx];
    const isCorrect = selectedOption === activeQuestion.correctAnswer;

    // Update local statistics
    setLocalStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    // Bubble up score and topics accuracy to parent App.tsx
    // Correct gets +10 points, incorrect gets -2 (common competitive negative marking)
    const pointsAwarded = isCorrect ? 10 : -2;
    onScoreUpdate(pointsAwarded, isCorrect, activeQuestion.topic);
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      resetQuestionState();
    }
  };

  const handleShuffle = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIdx(0);
    resetQuestionState();
  };

  const handleResetQuiz = () => {
    setSelectedTopic('All');
    setSelectedDifficulty('All');
    setSelectedExamType('All');
    setQuestions([...mcqsData]);
    setCurrentIdx(0);
    setLocalStats({ correct: 0, total: 0 });
    resetQuestionState();
  };

  const activeQuestion = questions[currentIdx];
  const localAccuracy = localStats.total > 0 
    ? Math.round((localStats.correct / localStats.total) * 100) 
    : 0;

  return (
    <div className="quiz-page-container">
      {/* Title */}
      <div className="quiz-header">
        <span className="badge badge-green">Practice Arena</span>
        <h1 className="quiz-title">INTERACTIVE MCQ ENGINE</h1>
        <p className="quiz-subtitle">
          Practice high-yield questions under competitive exam scenarios. Review traps and article references instantly.
        </p>
      </div>

      <div className="quiz-grid-layout">
        {/* Main Quiz Card */}
        <div className="quiz-main-area">
          {/* Filters Bar */}
          <div className="glass-card glow-green filters-panel">
            <h4 className="filters-title">Filter Question Bank</h4>
            <div className="filters-row">
              <div className="filter-item">
                <label className="filter-label">Topic</label>
                <select 
                  className="filter-select" 
                  value={selectedTopic}
                  onChange={e => setSelectedTopic(e.target.value)}
                >
                  {topicsList.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="filter-item">
                <label className="filter-label">Difficulty</label>
                <select 
                  className="filter-select"
                  value={selectedDifficulty}
                  onChange={e => setSelectedDifficulty(e.target.value)}
                >
                  <option value="All">All Levels</option>
                  <option value="Basic">Basic</option>
                  <option value="Exam">Exam</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="filter-item">
                <label className="filter-label">Exam Type</label>
                <select 
                  className="filter-select"
                  value={selectedExamType}
                  onChange={e => setSelectedExamType(e.target.value)}
                >
                  <option value="All">All Exams</option>
                  <option value="SSC-style">SSC-style</option>
                  <option value="UPSC statement-based">UPSC statement-based</option>
                  <option value="General competitive exams">General competitive exams</option>
                </select>
              </div>
            </div>

            <div className="filters-action-row">
              <button className="btn-secondary filter-action-btn" onClick={handleShuffle}>
                <RefreshCw size={12} /> Shuffle Pool
              </button>
              <button className="btn-secondary filter-action-btn" onClick={handleResetQuiz}>
                Reset Filters
              </button>
            </div>
          </div>

          {/* Question Box */}
          {questions.length > 0 && activeQuestion ? (
            <div className="glass-card glow-green question-wrapper-card">
              {/* Question Header Meta */}
              <div className="question-card-meta">
                <span className="question-count">Question {currentIdx + 1} of {questions.length}</span>
                <div className="question-badges">
                  <span className={`badge ${activeQuestion.difficulty === 'Advanced' ? 'badge-pink' : activeQuestion.difficulty === 'Exam' ? 'badge-purple' : 'badge-green'}`}>
                    {activeQuestion.difficulty}
                  </span>
                  <span className="badge badge-blue">{activeQuestion.examType}</span>
                </div>
              </div>

              {/* Question Content */}
              <div className="question-content">
                <p className="question-text">{activeQuestion.question}</p>
              </div>

              {/* Options list */}
              <div className="options-list">
                {activeQuestion.options.map((opt, idx) => {
                  let optionClass = '';
                  if (isAnswered) {
                    if (idx === activeQuestion.correctAnswer) {
                      optionClass = 'correct-opt'; // Right answer shows green
                    } else if (idx === selectedOption) {
                      optionClass = 'wrong-opt'; // Wrong chosen option shows pink
                    } else {
                      optionClass = 'disabled-opt';
                    }
                  } else if (selectedOption === idx) {
                    optionClass = 'selected-opt';
                  }

                  return (
                    <button
                      key={idx}
                      className={`option-btn-choice ${optionClass}`}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isAnswered}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + idx)}.</span>
                      <span className="option-body-text">{opt}</span>
                      {isAnswered && idx === activeQuestion.correctAnswer && (
                        <Check size={16} className="opt-check-icon text-neon-green" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action row (Submit / Next) */}
              <div className="question-actions-row">
                {!isAnswered ? (
                  <button
                    className="btn-primary submit-ans-btn"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                  >
                    Lock Answer
                  </button>
                ) : (
                  currentIdx < questions.length - 1 ? (
                    <button className="btn-primary next-q-btn" onClick={handleNextQuestion}>
                      Next Question <ChevronRight size={16} />
                    </button>
                  ) : (
                    <div className="quiz-finished-badge text-neon-green">
                      Completed all questions in this filtered pool!
                    </div>
                  )
                )}
              </div>

              {/* Explanation panel (Slides open upon answer submit) */}
              {isAnswered && (
                <div className="explanation-panel glass-card">
                  <h4 className="explanation-title text-neon-green">Answer Explanation</h4>
                  <p className="explanation-body">{activeQuestion.explanation}</p>
                  
                  <div className="explanation-sub-meta">
                    {activeQuestion.article && (
                      <div className="meta-block">
                        <BookOpen size={14} className="text-neon-blue" />
                        <span>Relevant: <strong>Article {activeQuestion.article}</strong></span>
                      </div>
                    )}
                    {activeQuestion.examTrap && (
                      <div className="meta-block border-top-dashed">
                        <AlertTriangle size={14} className="text-neon-pink" />
                        <span className="text-neon-pink font-semibold">Exam Trap:</span>
                        <span>{activeQuestion.examTrap}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="glass-card glow-green empty-pool-card">
              <Star className="text-neon-yellow" size={40} />
              <h3>No Questions Found</h3>
              <p className="empty-desc">No questions fit the current filters. Adjust your difficulty or topic choices.</p>
              <button className="btn-primary reset-filter-btn" onClick={handleResetQuiz}>
                Reset Filter Setup
              </button>
            </div>
          )}
        </div>

        {/* Right Sidebar: Real-time Stats */}
        <div className="quiz-stats-sidebar">
          <div className="glass-card glow-green stats-panel">
            <h3 className="stats-panel-title"><BarChart2 size={18} /> Performance</h3>
            
            <div className="stats-row-metric">
              <div className="metric-box">
                <span className="metric-num">{localStats.correct}</span>
                <span className="metric-lbl">Correct</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">{localStats.total}</span>
                <span className="metric-lbl">Answered</span>
              </div>
            </div>

            {/* Accuracy gauge */}
            <div className="accuracy-container">
              <div className="accuracy-label-row">
                <span>Session Accuracy</span>
                <span className="text-neon-green font-bold">{localAccuracy}%</span>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill bg-neon-green"
                  style={{ width: `${localAccuracy}%` }}
                ></div>
              </div>
            </div>

            {/* Cumulative Cockpit metrics */}
            <div className="cumulative-metrics">
              <h4 className="sub-title-mini">Total Quiz Devolution</h4>
              <div className="mini-stat-bullet">
                <span>Quiz Score:</span>
                <strong className="text-neon-yellow">{quizPoints} pts</strong>
              </div>
              <p className="marking-guide">
                * Correct locks yield +10 pts. Incorrect locks subtract -2 pts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quiz-page-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .quiz-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .quiz-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-color), var(--green-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .quiz-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .quiz-grid-layout {
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 24px;
        }

        @media (max-width: 950px) {
          .quiz-grid-layout {
            grid-template-columns: 1fr;
          }
        }

        .quiz-main-area {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .filters-panel {
          padding: 20px;
        }

        .filters-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          color: var(--text-color);
        }

        .filters-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }

        @media (max-width: 600px) {
          .filters-row {
            grid-template-columns: 1fr;
          }
        }

        .filter-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .filter-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .filter-select {
          background: var(--panel-color);
          border: 1px solid var(--line-color);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          color: var(--text-color);
          font-family: var(--font-body);
          outline: none;
          cursor: pointer;
        }

        .filters-action-row {
          display: flex;
          gap: 12px;
        }

        .filter-action-btn {
          padding: 6px 12px;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .question-wrapper-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .question-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--line-color);
          padding-bottom: 12px;
        }

        .question-count {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .question-badges {
          display: flex;
          gap: 8px;
        }

        .question-text {
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.6;
          color: var(--text-color);
          white-space: pre-line;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .option-btn-choice {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--line-color);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          cursor: pointer;
          transition: var(--transition-smooth);
          text-align: left;
          width: 100%;
        }

        .option-btn-choice:hover:not(:disabled) {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.2);
        }

        .option-btn-choice.selected-opt {
          border-color: var(--green-neon);
          background: rgba(167, 255, 56, 0.03);
        }

        .option-btn-choice.correct-opt {
          border-color: var(--green-neon);
          background: rgba(167, 255, 56, 0.08);
        }

        .option-btn-choice.wrong-opt {
          border-color: var(--pink-neon);
          background: rgba(255, 76, 168, 0.08);
        }

        .option-btn-choice.disabled-opt {
          opacity: 0.4;
        }

        .option-letter {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .selected-opt .option-letter, .correct-opt .option-letter {
          color: var(--green-neon);
        }

        .wrong-opt .option-letter {
          color: var(--pink-neon);
        }

        .option-body-text {
          font-size: 0.9rem;
          color: var(--text-color);
          flex: 1;
        }

        .opt-check-icon {
          flex-shrink: 0;
        }

        .question-actions-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }

        .quiz-finished-badge {
          font-family: var(--font-heading);
          font-weight: bold;
          font-size: 0.9rem;
        }

        .explanation-panel {
          border-color: rgba(167, 255, 56, 0.2);
          background: rgba(167, 255, 56, 0.01);
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
          animation: slideUp 0.3s ease-out;
        }

        .explanation-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .explanation-body {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .explanation-sub-meta {
          border-top: 1px dashed var(--line-color);
          padding-top: 12px;
          margin-top: 4px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.8rem;
        }

        .meta-block {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .border-top-dashed {
          border-top: 1px dashed var(--line-color);
          padding-top: 8px;
        }

        .empty-pool-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 20px;
          gap: 16px;
        }

        .empty-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          max-width: 320px;
        }

        /* Stats Panel Sidebar */
        .stats-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stats-panel-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stats-row-metric {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .metric-box {
          background: rgba(255,255,255,0.01);
          border: 1px solid var(--line-color);
          border-radius: var(--radius-md);
          padding: 12px;
          text-align: center;
          display: flex;
          flex-direction: column;
        }

        .metric-num {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-color);
        }

        .metric-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .accuracy-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .accuracy-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .cumulative-metrics {
          border-top: 1px solid var(--line-color);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sub-title-mini {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-color);
        }

        .mini-stat-bullet {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .marking-guide {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-style: italic;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
};
