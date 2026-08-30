import React, { useState } from 'react';
import { Mail, Lock, User, AlertCircle, Loader, BookOpen, Award, Sparkles, Network } from 'lucide-react';

interface AuthGateProps {
  onSuccess: (token: string, username: string, email: string) => void;
}

export const AuthGate: React.FC<AuthGateProps> = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!isLogin) {
      if (!username.trim() || !email.trim() || !password.trim()) {
        setError('All fields are required.');
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters.');
        setLoading(false);
        return;
      }
    } else {
      if (!email.trim() || !password.trim()) {
        setError('Email and password are required.');
        setLoading(false);
        return;
      }
    }

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const payload = isLogin 
        ? { email, password } 
        : { username, email, password };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      onSuccess(data.token, data.username, data.email);
    } catch (err: any) {
      setError(err.message || 'Server connection failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-gate-wrapper animate-fade-in">
      <div className="auth-gate-container">
        
        {/* Left Panel: App Showcase (Blackboard Teaser) */}
        <div className="auth-showcase-panel">
          <div className="showcase-brand">
            <span className="brand-logo-large">POLITYMASTER</span>
            <span className="brand-flag-large">🇮🇳</span>
          </div>
          
          <h2 className="showcase-heading">Master Indian Polity with Active Learning</h2>
          <p className="showcase-tagline">
            An advanced, source-backed study cockpit designed specifically for UPSC & civil services aspirants.
          </p>

          <div className="showcase-bullet-list">
            <div className="showcase-bullet-item">
              <span className="bullet-icon-wrapper text-neon-blue"><BookOpen size={18} /></span>
              <div className="bullet-content">
                <h4>Interactive Study Cockpit</h4>
                <p>Track your daily learning progress, syllabus completion, and core study metrics.</p>
              </div>
            </div>

            <div className="showcase-bullet-item">
              <span className="bullet-icon-wrapper text-neon-green"><Network size={18} /></span>
              <div className="bullet-content">
                <h4>Constitutional Connection Map</h4>
                <p>Trace relationships, schedules, and links between different Articles dynamically.</p>
              </div>
            </div>

            <div className="showcase-bullet-item">
              <span className="bullet-icon-wrapper text-neon-purple"><Sparkles size={18} /></span>
              <div className="bullet-content">
                <h4>Confusion Buster & Exam Traps</h4>
                <p>Clarify easily-confused articles and learn warnings about common examiner traps.</p>
              </div>
            </div>

            <div className="showcase-bullet-item">
              <span className="bullet-icon-wrapper text-neon-yellow"><Award size={18} /></span>
              <div className="bullet-content">
                <h4>Practice Arena & Memory Lab</h4>
                <p>Solve high-yield MCQs and reinforce article learning using Spaced Repetition flashcards.</p>
              </div>
            </div>
          </div>

          {/* Statistics Teaser */}
          <div className="showcase-stats-row">
            <div className="showcase-stat-card">
              <span className="stat-num text-neon-purple">395+</span>
              <span className="stat-label">Mapped Articles</span>
            </div>
            <div className="showcase-stat-card">
              <span className="stat-num text-neon-yellow">1,200+</span>
              <span className="stat-label">Quiz Questions</span>
            </div>
            <div className="showcase-stat-card">
              <span className="stat-num text-neon-green">22+</span>
              <span className="stat-label">Core Modules</span>
            </div>
          </div>
        </div>

        {/* Right Panel: Authentication Card */}
        <div className="auth-form-panel">
          <div className="auth-form-card glass-card glow-purple">
            <div className="auth-form-header">
              <h3 className="auth-form-title">{isLogin ? 'LOG IN' : 'SIGN UP'}</h3>
              <p className="auth-form-subtitle">
                {isLogin 
                  ? 'Access your authenticated study dashboard and sync progress.' 
                  : 'Create a study account to save your polity learnings.'}
              </p>
            </div>

            {error && (
              <div className="auth-error-banner">
                <AlertCircle size={16} className="text-neon-pink" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form-fields">
              {!isLogin && (
                <div className="form-group">
                  <label>Aspirant Username</label>
                  <div className="input-with-icon">
                    <User size={16} className="input-icon" />
                    <input
                      type="text"
                      placeholder="Enter a username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      disabled={loading}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="form-group">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <Mail size={16} className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="input-with-icon">
                  <Lock size={16} className="input-icon" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label>Confirm Password</label>
                  <div className="input-with-icon">
                    <Lock size={16} className="input-icon" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={loading}
                      required
                    />
                  </div>
                </div>
              )}

              <button type="submit" className="btn-primary auth-submit-btn" disabled={loading}>
                {loading ? (
                  <span className="btn-loading-content">
                    <Loader size={16} className="spinner" />
                    Processing...
                  </span>
                ) : (
                  isLogin ? 'Log In' : 'Sign Up'
                )}
              </button>
            </form>

            <div className="auth-form-footer">
              <span>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button 
                  className="auth-switch-mode-btn"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError(null);
                  }}
                  disabled={loading}
                >
                  {isLogin ? 'Create one →' : 'Log in here →'}
                </button>
              </span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .auth-gate-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          z-index: 10;
        }

        .auth-gate-container {
          display: flex;
          width: 100%;
          max-width: 1200px;
          gap: 60px;
          align-items: center;
        }

        .auth-showcase-panel {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .showcase-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-logo-large {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, var(--text-color), var(--purple-neon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-flag-large {
          font-size: 2rem;
        }

        .showcase-heading {
          font-size: 2.6rem;
          font-weight: 800;
          line-height: 1.2;
          color: var(--text-color);
        }

        .showcase-tagline {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .showcase-bullet-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 10px;
        }

        .showcase-bullet-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .bullet-icon-wrapper {
          padding: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--line-color);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bullet-content h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 4px;
          color: var(--text-color);
        }

        .bullet-content p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .showcase-stats-row {
          display: flex;
          gap: 20px;
          margin-top: 16px;
        }

        .showcase-stat-card {
          flex: 1;
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed var(--line-color);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 700;
        }

        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .auth-form-panel {
          flex: 0.85;
          display: flex;
          justify-content: center;
        }

        .auth-form-card {
          width: 100%;
          max-width: 440px;
          background: linear-gradient(135deg, rgba(12,15,18,0.95), rgba(5,6,7,0.98));
          border: 1px solid rgba(170, 140, 255, 0.3);
          border-radius: var(--radius-md);
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }

        .auth-form-header {
          margin-bottom: 28px;
          text-align: center;
        }

        .auth-form-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-color);
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .auth-form-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .auth-form-fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .auth-submit-btn {
          margin-top: 10px;
          padding: 14px;
          font-size: 0.95rem;
          font-weight: 700;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .auth-form-footer {
          margin-top: 28px;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
          text-align: left;
        }

        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          color: var(--text-muted);
          pointer-events: none;
        }

        .input-with-icon input {
          width: 100%;
          padding: 12px 14px 12px 40px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--line-color);
          border-radius: var(--radius-sm);
          color: var(--text-color);
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .input-with-icon input:focus {
          outline: none;
          border-color: var(--purple-neon);
          background: rgba(170, 140, 255, 0.03);
          box-shadow: 0 0 10px rgba(170, 140, 255, 0.15);
        }

        .auth-switch-mode-btn {
          background: none;
          border: none;
          color: var(--purple-neon);
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
          transition: var(--transition-smooth);
        }

        .auth-switch-mode-btn:hover {
          text-decoration: underline;
          text-shadow: 0 0 8px rgba(170, 140, 255, 0.4);
        }

        .auth-error-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 76, 168, 0.1);
          border: 1px solid rgba(255, 76, 168, 0.3);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          font-size: 0.8rem;
          color: var(--text-color);
          margin-bottom: 20px;
        }

        .btn-loading-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .auth-gate-container {
            gap: 40px;
          }
          .showcase-heading {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 900px) {
          .auth-gate-container {
            flex-direction: column;
            gap: 40px;
          }
          .auth-showcase-panel {
            text-align: center;
            align-items: center;
          }
          .showcase-brand {
            justify-content: center;
          }
          .showcase-bullet-list {
            text-align: left;
            max-width: 500px;
          }
          .showcase-stats-row {
            width: 100%;
            max-width: 500px;
          }
          .auth-form-panel {
            width: 100%;
          }
          .auth-form-card {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
