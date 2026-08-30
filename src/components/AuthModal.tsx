import React, { useState } from 'react';
import { X, Lock, Mail, User, AlertCircle, Loader } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: (token: string, username: string, email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSuccess }) => {
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
      onClose();
    } catch (err: any) {
      setError(err.message || 'Server connection failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-card glass-card glow-purple animate-fade-in">
        <button className="auth-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="auth-header">
          <h2 className="auth-title">{isLogin ? 'LOG IN' : 'SIGN UP'}</h2>
          <p className="auth-subtitle">
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

        <form onSubmit={handleSubmit} className="auth-form">
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

        <div className="auth-footer">
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

      <style>{`
        .auth-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(5, 6, 7, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .auth-modal-card {
          width: 100%;
          max-width: 440px;
          background: linear-gradient(135deg, rgba(12,15,18,0.95), rgba(5,6,7,0.98));
          border: 1px solid rgba(170, 140, 255, 0.3);
          border-radius: var(--radius-md);
          padding: 36px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }

        .auth-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .auth-close-btn:hover {
          color: var(--text-color);
          transform: scale(1.1);
        }

        .auth-header {
          margin-bottom: 24px;
          text-align: center;
        }

        .auth-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-color);
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .auth-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
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

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
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
          padding: 10px 14px 10px 40px;
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
          box-shadow: 0 0 10px rgba(170, 140, 255, 0.1);
        }

        .auth-submit-btn {
          margin-top: 10px;
          padding: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
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

        .auth-footer {
          margin-top: 24px;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .auth-switch-mode-btn {
          background: none;
          border: none;
          color: var(--purple-neon);
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
        }

        .auth-switch-mode-btn:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};
