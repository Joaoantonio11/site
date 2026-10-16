import React from 'react';
import { X, Check } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToQuote }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', right: '16px', top: '16px', background: 'transparent', color: 'var(--text-muted)' }}>
          <X size={24} />
        </button>
        <img src={product.image} alt={product.title} style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
        <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>{product.category}</span>
        <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{product.title}</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{product.description}</p>
        <div style={{ marginBottom: '1.5rem', background: '#0f172a', padding: '1rem', borderRadius: '8px' }}>
          <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Especificações:</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {product.specs.map((spec, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="var(--accent)" /> {spec}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>R$ {product.price.toFixed(2)}</span>
          <button onClick={() => { onAddToQuote(product); onClose(); }} style={{ background: 'var(--primary)', color: '#fff', padding: '10px 20px' }}>Adicionar ao Orçamento</button>
        </div>
      </div>
    </div>
  );
}
