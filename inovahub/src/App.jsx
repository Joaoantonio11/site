import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetailModal from './components/ProductDetailModal';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import QuoteModal from './components/QuoteModal';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'InovaHub Software IoT',
    category: 'Sistemas',
    price: 1500.00,
    shortDescription: 'Plataforma completa de gestão de sensores para feiras e eventos.',
    description: 'Sistema completo com suporte a relatórios em tempo real, integração com sensores IoT e dashboard analítico.',
    specs: ['Dashboards em tempo real', 'Suporte HTTPS/TLS', 'API RESTful integrada'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Módulo de Gestão Acadêmica',
    category: 'Módulos',
    price: 850.00,
    shortDescription: 'Módulo para controle de notas, presença e certificação de projetos.',
    description: 'Permite registar pontuações de avaliadores e emitir certificados automaticamente no final do evento.',
    specs: ['Validação automática no servidor', 'Geração de PDF', 'Inscrição por QR Code'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quoteItems, setQuoteItems] = useState([]);
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToQuote = (product) => {
    if (!quoteItems.some(i => i.id === product.id)) {
      setQuoteItems([...quoteItems, product]);
    }
  };

  const handleRemoveFromQuote = (id) => {
    setQuoteItems(quoteItems.filter(i => i.id !== id));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        user={user} 
        onOpenLogin={() => setIsLoginOpen(true)} 
        onOpenRegister={() => setIsRegisterOpen(true)} 
        onLogout={() => setUser(null)}
        onRequestQuote={() => setIsQuoteOpen(true)}
        quoteCount={quoteItems.length}
      />

      <main style={{ flex: 1, maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 1rem' }}>
        <ProductList 
          products={filteredProducts} 
          onSelectProduct={(product) => setSelectedProduct(product)} 
          onAddToQuote={handleAddToQuote} 
        />
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} InovaHub - Sistema de Gestão de Projetos e Eventos
      </footer>

      {/* Modais */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onLogin={(u) => setUser(u)} />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} onRegister={(u) => setUser(u)} />
      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToQuote={handleAddToQuote} />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} quoteItems={quoteItems} onRemoveItem={handleRemoveFromQuote} onClearItems={() => setQuoteItems([])} user={user} />
    </div>
  );
}
