import React from 'react';
import { Search, User, LogOut, FileText } from 'lucide-react';

export default function Navbar({ searchTerm, setSearchTerm, user, onOpenLogin, onOpenRegister, onLogout, onRequestQuote, quoteCount }) {
  return (
    <header style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-card)', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>InovaHub</h1>

        {/* RF003 - Pesquisa de Produtos */}
        <div style={{ position: 'relative', flex: '1', maxWidth: '400px' }}>
          <input
            type="text"
            placeholder="Pesquisar projetos ou produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '38px' }}
          />
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button 
            onClick={onRequestQuote} 
            style={{ background: 'var(--accent)', color: '#fff', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={18} /> Orçamentos ({quoteCount})
          </button>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}><User size={14} style={{ display: 'inline', marginRight: '4px' }} /> {user.name}</span>
              <button onClick={onLogout} style={{ background: '#ef4444', color: '#fff', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <LogOut size={16} /> Sair
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={onOpenLogin} style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)', padding: '8px 16px' }}>Entrar</button>
              <button onClick={onOpenRegister} style={{ background: 'var(--primary)', color: '#fff', padding: '8px 16px' }}>Cadastrar</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
