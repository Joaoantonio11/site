import React from 'react';
import { Plus, Eye } from 'lucide-react';

export default function ProductList({ products, onSelectProduct, onAddToQuote }) {
  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
        <h3>Nenhum produto ou projeto encontrado com os termos pesquisados.</h3>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', padding: '2rem 0' }}>
      {products.map((item) => (
        <div key={item.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <img src={item.image} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
          <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase' }}>{item.category}</span>
              <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>{item.shortDescription}</p>
            </div>
            <div>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>R$ {item.price.toFixed(2)}</p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => onSelectProduct(item)} style={{ flex: 1, background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-main)', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <Eye size={16} /> Ver
                </button>
                <button onClick={() => onAddToQuote(item)} style={{ flex: 1, background: 'var(--primary)', color: '#fff', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <Plus size={16} /> Orçamento
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
