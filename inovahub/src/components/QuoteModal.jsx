import React, { useState } from 'react';
import { X, Trash2, CheckCircle } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, quoteItems, onRemoveItem, onClearItems, user }) {
  const [protocol, setProtocol] = useState(null);

  if (!isOpen) return null;

  const handleSendQuote = (e) => {
    e.preventDefault();
    const generatedProtocol = 'INV-' + Math.floor(100000 + Math.random() * 900000);
    setProtocol(generatedProtocol);
    onClearItems();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', right: '16px', top: '16px', background: 'transparent', color: 'var(--text-muted)' }}>
          <X size={24} />
        </button>
        {protocol ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <CheckCircle size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h2>Solicitação Enviada!</h2>
            <p style={{ color: 'var(--text-muted)', margin: '1rem 0' }}>O seu protocolo de solicitação de orçamento é:</p>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '1px', color: 'var(--primary)' }}>
              {protocol}
            </div>
            <button onClick={() => { setProtocol(null); onClose(); }} style={{ marginTop: '1.5rem', background: 'var(--primary)', color: '#fff', padding: '10px 20px' }}>Fechar</button>
          </div>
        ) : (
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Solicitar Orçamento</h2>
            {quoteItems.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 0' }}>Nenhum item selecionado.</p>
            ) : (
              <form onSubmit={handleSendQuote}>
                <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                  {quoteItems.map((item) => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span>{item.title}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 'bold' }}>R$ {item.price.toFixed(2)}</span>
                        <button type="button" onClick={() => onRemoveItem(item.id)} style={{ background: 'transparent', color: '#ef4444' }}><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>Observações</label>
                    <textarea rows="3" placeholder="Detalhes específicos para o seu pedido..."></textarea>
                  </div>
                  <button type="submit" style={{ background: 'var(--accent)', color: '#fff', padding: '12px' }}>Enviar Solicitação</button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
