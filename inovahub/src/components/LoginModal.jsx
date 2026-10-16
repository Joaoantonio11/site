import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    onLogin({ name: email.split('@')[0], email });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', right: '16px', top: '16px', background: 'transparent', color: 'var(--text-muted)' }}>
          <X size={24} />
        </button>
        <h2 style={{ marginBottom: '1.5rem' }}>Entrar na sua conta</h2>
        {error && <p style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>E-mail</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>Palavra-passe</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <button type="submit" style={{ background: 'var(--primary)', color: '#fff', padding: '12px', marginTop: '1rem' }}>Entrar</button>
        </form>
      </div>
    </div>
  );
}
