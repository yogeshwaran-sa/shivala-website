import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Search, ArrowRight } from 'lucide-react';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, productsList, navigateTo } = useShop();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const lowerQuery = searchQuery.toLowerCase();
      const results = productsList.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(lowerQuery))) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(lowerQuery))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, productsList]);

  if (!isSearchOpen) return null;

  const handleProductClick = (slug) => {
    setIsSearchOpen(false);
    navigateTo('product-detail', slug);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsSearchOpen(false)} style={{ alignItems: 'flex-start', paddingTop: '10vh' }}>
      <div className="modal-content" style={{ maxWidth: '600px', width: '90%' }} onClick={(e) => e.stopPropagation()}>
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border-light)' }}>
          <Search size={22} style={{ position: 'absolute', left: '1.25rem', color: 'var(--text-light)' }} />
          <input 
            ref={inputRef}
            type="text"
            placeholder="Search SHIVALA products (e.g., 'appalam', 'vathal')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '1.25rem 3rem 1.25rem 3.5rem', 
              fontSize: '1.1rem', 
              border: 'none', 
              outline: 'none',
              background: 'transparent',
              color: 'var(--primary)'
            }}
          />
          <button 
            onClick={() => setIsSearchOpen(false)}
            style={{ position: 'absolute', right: '1.25rem', background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {searchQuery.trim().length > 1 ? (
            searchResults.length > 0 ? (
              <div style={{ padding: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', padding: '0 0.5rem' }}>
                  Found {searchResults.length} results
                </div>
                {searchResults.map(product => (
                  <div 
                    key={product.id}
                    onClick={() => handleProductClick(product.slug)}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem', 
                      padding: '0.75rem', 
                      cursor: 'pointer',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-warm)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <img src={product.image} alt={product.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div style={{ flexGrow: 1 }}>
                      <h4 style={{ margin: '0 0 0.2rem 0', color: 'var(--primary)', fontSize: '0.95rem' }}>{product.name}</h4>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {product.category} • ₹{product.price}
                      </div>
                    </div>
                    <ArrowRight size={18} style={{ color: 'var(--text-light)' }} />
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>No SHIVALA products found.</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Try searching for categories like 'Staples', 'Snacks' or generic terms like 'millet'.</p>
              </div>
            )
          ) : (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-light)' }}>
              <p style={{ fontSize: '0.9rem' }}>Start typing to see live product suggestions...</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
