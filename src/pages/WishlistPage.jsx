import React from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingBag, Zap, Trash2, ArrowLeft } from 'lucide-react';

export const WishlistPage = () => {
  const { wishlist, productsList, toggleWishlist, addToCart, buyNow, navigateTo } = useShop();

  const wishlistedProducts = productsList.filter(p => wishlist.includes(p.id));

  return (
    <div className="wishlist-page">
      {/* Header Banner */}
      <section className="section-padding" style={{ background: 'var(--primary-dark)', color: '#FFFFFF', padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>YOUR SAVED FAVORITES</span>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-heading)' }}>
            My Wishlist ({wishlistedProducts.length} Items)
          </h1>
        </div>
      </section>

      {/* Main Wishlist Grid */}
      <section className="section-padding">
        <div className="container">
          
          {wishlistedProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <Heart size={64} style={{ color: 'var(--text-light)', marginBottom: '1.25rem', strokeWidth: 1.2 }} />
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Your Wishlist is Empty</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                Tap the heart icon ♡ on any SHIVALA product card to save your favorite appalams and essentials here.
              </p>
              <button className="btn-primary" onClick={() => navigateTo('shop')} style={{ padding: '0.85rem 2rem' }}>
                <ArrowLeft size={18} /> Explore Products
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
              {wishlistedProducts.map(product => (
                <div key={product.id} className="wishlist-card-item" style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  
                  <div style={{ position: 'relative', height: '220px', background: 'var(--bg-warm)' }}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      style={{ position: 'absolute', top: '10px', right: '10px', background: '#FFFFFF', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}
                      title="Remove from wishlist"
                    >
                      <Trash2 size={16} color="#DC2626" />
                    </button>
                  </div>

                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span className="brand-micro-label">SHIVALA</span>
                    <h3 
                      onClick={() => navigateTo('product-detail', product.slug)}
                      style={{ fontSize: '1.1rem', color: 'var(--primary)', margin: '0 0 0.5rem 0', cursor: 'pointer' }}
                    >
                      {product.name}
                    </h3>

                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      Pack Wt: <strong>{product.weight}</strong> • Status: <span style={{ color: 'var(--primary)', fontWeight: 700 }}>● {product.availability || 'In Stock'}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)' }}>₹{product.price}</span>
                      {product.mrp > product.price && (
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', textDecoration: 'line-through' }}>MRP ₹{product.mrp}</span>
                      )}
                    </div>

                    <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                      <button className="btn-primary" onClick={() => addToCart(product)} style={{ padding: '0.6rem', fontSize: '0.82rem' }}>
                        <ShoppingBag size={14} /> Add to Cart
                      </button>

                      <button className="btn-secondary" onClick={() => buyNow(product)} style={{ padding: '0.6rem', fontSize: '0.82rem', background: 'var(--secondary)', color: 'var(--primary-dark)' }}>
                        <Zap size={14} /> Buy Now
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
