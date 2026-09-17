import React, { useState } from 'react';

interface AuthGateProps {
  onSuccess: (token: string, username: string, email: string) => void;
}

export const AuthGate: React.FC<AuthGateProps> = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await fetch(isLogin ? '/api/auth/login' : '/api/auth/register', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isLogin ? { email, password } : { username, email, password })
      });
      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        throw new Error(`Login service is unavailable (HTTP ${response.status}). Please try again after the deployment finishes.`);
      }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to continue.');
      onSuccess(data.token, data.username, data.email);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Unable to connect to the server.');
    } finally { setLoading(false); }
  };

  return <main className="auth-shell"><section className="auth-card glass-card glow-purple">
    <p className="auth-kicker">POLITYMASTER</p><h1>{isLogin ? 'Welcome back' : 'Build your study profile'}</h1>
    <p className="auth-copy">Your study progress, saved material, quiz score and daily streak stay linked to your account.</p>
    <form onSubmit={submit} className="auth-form">
      {!isLogin && <input required minLength={2} value={username} onChange={event => setUsername(event.target.value)} placeholder="Your name" />}
      <input required type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email address" />
      <input required minLength={6} type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password (6+ characters)" />
      {error && <p className="auth-error">{error}</p>}<button className="btn-primary" disabled={loading}>{loading ? 'Please wait…' : isLogin ? 'Log in' : 'Create account'}</button>
    </form>
    <button className="auth-switch" onClick={() => { setIsLogin(!isLogin); setError(''); }}>{isLogin ? 'New here? Create an account' : 'Already have an account? Log in'}</button>
  </section><style>{`.auth-shell{min-height:100vh;display:grid;place-items:center;padding:24px;position:relative;z-index:1}.auth-card{width:min(100%,440px);padding:42px}.auth-kicker{color:var(--purple-neon);font-weight:800;letter-spacing:.12em;font-size:.78rem}.auth-card h1{margin:12px 0;font-size:2rem}.auth-copy{color:var(--text-muted);line-height:1.55;margin-bottom:28px}.auth-form{display:grid;gap:13px}.auth-form input{border:1px solid var(--line-color);border-radius:8px;background:rgba(255,255,255,.04);color:var(--text-color);padding:13px;font:inherit}.auth-form input:focus{outline:none;border-color:var(--purple-neon)}.auth-form button{padding:13px}.auth-error{color:#ff8db7;font-size:.9rem}.auth-switch{margin-top:22px;padding:0;border:0;background:none;color:var(--purple-neon);cursor:pointer;font:inherit}`}</style></main>;
};
