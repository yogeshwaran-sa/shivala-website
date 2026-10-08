import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Star, Heart, ShoppingBag, Eye, Zap, Info, CheckCircle2 } from 'lucide-react';
import { getWhatsAppOrderLink } from '../config/businessConfig';

export const ProductCard = ({ product }) => {
  const { addToCart, buyNow, wishlist, toggleWishlist, setQuickViewProduct, navigateTo } = useShop();
  const [isFlipped, setIsFlipped] = useState(false);

  const isWishlisted = wishlist.includes(product.id);
  const discountPercent = product.mrp > product.price 
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100) 
    : 0;

  const handleCardClick = (e) => {
    // If user clicked inside interactive buttons, don't trigger navigate
    if (e.target.closest('button') || e.target.closest('a')) return;
    navigateTo('product-detail', product.slug);
  };

  const toggleMobileFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`product-card-container ${isFlipped ? 'flipped' : ''}`} 
      onClick={handleCardClick}
    >
      <div className="product-card-inner">
        
        {/* FRONT SIDE OF CARD */}
        <div className="product-card-front">
          {/* Image Wrap */}
          <div className="product-img-wrap">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-img" 
              loading="lazy"
            />

            {/* Badges */}
            <div className="card-badge-stack">
              {product.isBestseller && <span className="badge-gold">★ BESTSELLER</span>}
              {product.isNew && <span className="badge-green">NEW LAUNCH</span>}
              {discountPercent > 0 && <span className="badge-discount">{discountPercent}% OFF</span>}
            </div>

            {/* Wishlist Button */}
            <button 
              className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product.id);
              }}
              title={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
            >
              <Heart size={18} fill={isWishlisted ? 'var(--accent-maroon)' : 'none'} color={isWishlisted ? 'var(--accent-maroon)' : '#555'} />
            </button>

            {/* Mobile Tap Info Button */}
            <button 
              className="mobile-flip-btn"
              onClick={toggleMobileFlip}
              title="Tap for key info"
            >
              <Info size={16} />
            </button>

            {/* Hover Actions Bar */}
            <div className="hover-actions-overlay">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setQuickViewProduct(product);
                }}
                className="btn-quickview"
              >
                <Eye size={14} /> Quick View
              </button>
            </div>
          </div>

          {/* Product Body */}
          <div className="product-body">
            <div className="brand-category-header">
              <span className="brand-micro-label">SHIVALA</span>
              <span className="product-category-tag">{product.category}</span>
            </div>

            <h3 className="product-title" title={product.name}>
              {product.name}
            </h3>

            <p className="product-short-desc">
              {product.shortDescription || product.description?.substring(0, 75) + '...'}
            </p>

            <div className="product-weight-row">
              <span className="product-weight-badge">Net Wt: {product.weight}</span>
              <div className="product-rating">
                <Star size={14} fill="#C59B27" color="#C59B27" />
                <span>{product.rating}</span>
                <span className="review-count">({product.reviewsCount})</span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="product-pricing">
              <div className="price-group">
                <span className="product-price">₹{product.price}</span>
                {product.mrp > product.price && (
                  <span className="product-mrp">MRP ₹{product.mrp}</span>
                )}
              </div>
              {product.mrp > product.price && (
                <span className="save-badge">Save ₹{product.mrp - product.price}</span>
              )}
            </div>

            {/* Functional Buttons */}
            <div className="product-actions-grid">
              <button 
                className="btn-add-cart"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                <ShoppingBag size={14} /> Add
              </button>

              <button 
                className="btn-buy-now"
                onClick={(e) => {
                  e.stopPropagation();
                  buyNow(product);
                }}
              >
                <Zap size={14} /> Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* BACK / HOVER REVEAL SIDE OF CARD */}
        <div className="product-card-back">
          <div className="back-card-content">
            <span className="brand-micro-label">SHIVALA QUALITY GUARANTEE</span>
            <h4 className="back-title">{product.name}</h4>
            <span className="product-weight-badge" style={{ alignSelf: 'flex-start' }}>Pack: {product.weight}</span>

            <p className="back-desc">
              {product.description}
            </p>

            <div className="back-highlights">
              <strong style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Key Highlights:</strong>
              <ul>
                {(product.highlights || ['100% Sun Dried', 'Clean & Hygienic', 'Zero Preservatives']).map((hl, i) => (
                  <li key={i}><CheckCircle2 size={13} style={{ color: 'var(--secondary)' }} /> {hl}</li>
                ))}
              </ul>
            </div>

            <div className="stock-status-row">
              <span className="stock-dot">●</span>
              <span>{product.availability || 'In Stock'} • Direct Dispatch</span>
            </div>

            <div className="back-actions-grid">
              <button 
                className="btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                style={{ padding: '0.6rem 0.8rem', fontSize: '0.82rem' }}
              >
                <ShoppingBag size={14} /> Add to Cart
              </button>

              <button 
                className="btn-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  buyNow(product);
                }}
                style={{ padding: '0.6rem 0.8rem', fontSize: '0.82rem', background: 'var(--secondary)', color: 'var(--primary-dark)' }}
              >
                <Zap size={14} /> Buy Now
              </button>
            </div>

            <button 
              className="back-flip-return-btn"
              onClick={toggleMobileFlip}
            >
              ← Back to Product Front
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
