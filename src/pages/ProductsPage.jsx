import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, CATEGORIES } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, Grid, ArrowUpDown } from 'lucide-react';

export const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Filter & Sort Logic
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return b.rating - a.rating; // Popular default
  });

  return (
    <div className="products-page">
      
      {/* Header Banner */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)', padding: '3.5rem 0 2.5rem', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">THE COMPLETE CATALOG</span>
          <h1 className="section-title">Explore SHIVALA Range</h1>
          <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Discover our full spectrum of authentic South Indian consumer food items, pooja goods, and living essentials.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '580px', margin: '0 auto', position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
            <input 
              type="text" 
              placeholder="Search products by name, category or ingredient..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 3rem',
                borderRadius: 'var(--radius-full)',
                border: '1.5px solid var(--border-gold)',
                background: 'var(--bg-card)',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Filter & Sort Control Bar */}
      <section style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-light)', padding: '1rem 0', sticky: 'top', top: '80px', zIndex: 90 }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          
          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '4px', flexGrow: 1 }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  border: selectedCategory === cat.id ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                  background: selectedCategory === cat.id ? 'var(--primary)' : 'var(--bg-cream)',
                  color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--text-main)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowUpDown size={16} style={{ color: 'var(--primary)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                background: 'var(--bg-cream)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--primary)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="popular">Popularity</option>
              <option value="newest">Newest Launches</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>
      </section>

      {/* Main Product Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Showing <strong>{filteredProducts.length}</strong> SHIVALA products
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <Grid size={48} style={{ color: 'var(--text-light)', marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>No matching products found</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Try clearing search keywords or switching category filters.</p>
              <button 
                className="btn-primary" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '2rem' }}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};
