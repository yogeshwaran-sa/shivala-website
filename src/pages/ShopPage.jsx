import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, CATEGORIES } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { Filter, ShoppingBag, Check, RotateCcw } from 'lucide-react';

export const ShopPage = () => {
  const { setIsCartOpen, cartItemCount, productsList, navigateTo } = useShop();

  // Filters State
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(200);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  const toggleCategoryFilter = (catId) => {
    setSelectedCategories(prev => 
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    );
  };

  let filteredProducts = productsList.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.categoryId);
    const matchesPrice = product.price <= maxPrice;
    const matchesStock = inStockOnly ? (product.availability && product.availability !== 'Out of Stock') : true;
    return matchesCategory && matchesPrice && matchesStock;
  });

  // Apply Sorting
  filteredProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'newest': return (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1;
      case 'top-rated': return b.rating - a.rating;
      case 'bestseller': return (a.isBestseller === b.isBestseller) ? 0 : a.isBestseller ? -1 : 1;
      case 'popular':
      default:
        return (b.reviewsCount || 0) - (a.reviewsCount || 0);
    }
  });

  const resetFilters = () => {
    setSelectedCategories([]);
    setMaxPrice(200);
    setInStockOnly(false);
    setSortBy('popular');
  };

  return (
    <div className="shop-page">
      
      {/* Header Banner */}
      <section className="section-padding" style={{ background: 'var(--primary-dark)', color: '#FFFFFF', padding: '3.5rem 0 2.5rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>D2C ONLINE STORE</span>
            <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-heading)' }}>
              SHIVALA Direct Home Shop
            </h1>
            <p style={{ color: 'var(--secondary-light)', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              Fresh stock packaged directly from our family processing center.
            </p>
          </div>

          <button className="btn-secondary" onClick={() => navigateTo('cart')} style={{ background: 'var(--secondary)', color: 'var(--primary-dark)' }}>
            <ShoppingBag size={18} /> View Cart ({cartItemCount} items)
          </button>
        </div>
      </section>

      {/* Main D2C Layout */}
      <section className="section-padding">
        <div className="container shop-layout-grid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2.5rem' }}>
          
          {/* Left Sidebar Filters */}
          <aside style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', height: 'fit-content' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--primary)' }}>
                <Filter size={18} /> Filters
              </div>
              <button onClick={resetFilters} style={{ fontSize: '0.78rem', color: 'var(--secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
                <RotateCcw size={12} /> Reset
              </button>
            </div>

            {/* Category Filter */}
            <div style={{ marginBottom: '1.75rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                Category
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                  <label key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => toggleCategoryFilter(cat.id)}
                      style={{ accentColor: 'var(--primary)' }}
                    />
                    <span>{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter Slider */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                <span>Max Price:</span>
                <span style={{ color: 'var(--primary)' }}>₹{maxPrice}</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="200" 
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '4px' }}>
                <span>₹50</span>
                <span>₹200</span>
              </div>
            </div>

            {/* In Stock */}
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  style={{ accentColor: 'var(--primary)' }}
                />
                <span>In Stock & Ready to Dispatch</span>
              </label>
            </div>

          </aside>

          {/* Right Product Grid */}
          <main>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Found <strong>{filteredProducts.length}</strong> items for direct delivery
              </span>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Sort by:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid var(--border-light)', fontSize: '0.85rem', outline: 'none' }}
                >
                  <option value="popular">Popular</option>
                  <option value="bestseller">Best Selling</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="top-rated">Top Rated</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>No products match criteria</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Try adjusting price limit or category selection.</p>
                <button className="btn-primary" onClick={resetFilters}>
                  Clear Shop Filters
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.75rem' }}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>

        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .shop-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
