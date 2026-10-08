import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Star, ShoppingBag, Zap, Heart, MessageCircle, Phone, Mail, 
  Share2, Copy, CheckCircle2, ShieldCheck, Truck, ArrowLeft, Send
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { BUSINESS_CONFIG, getWhatsAppOrderLink, getEmailEnquiryLink } from '../config/businessConfig';

export const ProductDetailPage = () => {
  const { 
    currentProduct, 
    productsList, 
    addToCart, 
    buyNow, 
    wishlist, 
    toggleWishlist, 
    recentlyViewed,
    navigateTo,
    openWholesaleModal,
    addReview,
    showToast
  } = useShop();

  const product = currentProduct || productsList[0];

  const [selectedWeight, setSelectedWeight] = useState(product.weight);
  const [selectedImage, setSelectedImage] = useState(product.image || product.images?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Review Form state
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');

  const isWishlisted = wishlist.includes(product.id);
  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleWhatsAppOrder = () => {
    const url = getWhatsAppOrderLink(product.name, selectedWeight, quantity);
    window.open(url, '_blank');
  };

  const handleCallOrder = () => {
    window.location.href = `tel:${BUSINESS_CONFIG.PHONE_NUMBER.replace(/[^0-9+]/g, '')}`;
  };

  const handleEmailUs = () => {
    window.location.href = getEmailEnquiryLink(product.name);
  };

  const handleShareWhatsApp = () => {
    const pageUrl = window.location.href;
    const text = `Check out ${product.name} from SHIVALA: ${pageUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Product link copied to clipboard!');
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReviewName || !newReviewComment) return;
    
    addReview(product.id, {
      id: Date.now(),
      name: newReviewName,
      rating: Number(newReviewRating),
      date: new Date().toISOString().split('T')[0],
      comment: newReviewComment
    });

    setNewReviewName('');
    setNewReviewComment('');
  };

  // 4 Related Products
  const relatedProducts = productsList
    .filter(p => p.id !== product.id && p.categoryId === product.categoryId)
    .slice(0, 4);

  // Fallback if not enough category matches
  const displayRelated = relatedProducts.length >= 4 
    ? relatedProducts 
    : [...relatedProducts, ...productsList.filter(p => p.id !== product.id && !relatedProducts.includes(p))].slice(0, 4);

  // Recently Viewed List
  const recentlyViewedProducts = productsList.filter(p => recentlyViewed.includes(p.id) && p.id !== product.id);

  return (
    <div className="product-detail-page">
      
      {/* Breadcrumbs Banner */}
      <div className="breadcrumb-bar">
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', flexWrap: 'wrap' }}>
          <button onClick={() => navigateTo('home')} className="breadcrumb-link">Home</button>
          <span>/</span>
          <button onClick={() => navigateTo('shop')} className="breadcrumb-link">Products</button>
          <span>/</span>
          <button onClick={() => navigateTo('shop')} className="breadcrumb-link">{product.category}</button>
          <span>/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </div>
      </div>

      {/* Main Product Layout */}
      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          
          <div className="product-detail-grid">
            
            {/* LEFT: Image Gallery & Zoom */}
            <div className="product-gallery-container">
              <div className="main-zoom-image-box">
                <img 
                  src={selectedImage || product.image} 
                  alt={product.name} 
                  className="main-detail-img"
                />
                <span className="badge-gold floating-badge">100% TRADITIONAL</span>
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="detail-thumbnails-row">
                  {galleryImages.map((img, idx) => (
                    <button 
                      key={idx}
                      className={`detail-thumb-btn ${selectedImage === img ? 'active' : ''}`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={`${product.name} thumb ${idx}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Product Purchasing Column */}
            <div className="product-purchase-container">
              <div className="brand-header-badge">
                <span className="brand-micro-label">SHIVALA CONSUMER BRAND</span>
                <span className="category-pill">{product.category}</span>
              </div>

              <h1 className="detail-product-title">{product.name}</h1>

              {/* Rating & Stock */}
              <div className="rating-stock-row">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(product.rating) ? '#C59B27' : 'none'} color="#C59B27" />
                  ))}
                  <span className="rating-num">{product.rating}</span>
                  <a href="#reviews-section" className="review-link">({product.reviewsCount} customer reviews)</a>
                </div>

                <div className="stock-pill">
                  <span className="stock-dot">●</span>
                  <span>{product.availability || 'In Stock'}</span>
                </div>
              </div>

              {/* Price Row */}
              <div className="detail-price-box">
                <div className="price-main-group">
                  <span className="detail-price">₹{product.price}</span>
                  {product.mrp > product.price && (
                    <span className="detail-mrp">MRP ₹{product.mrp}</span>
                  )}
                </div>
                {product.mrp > product.price && (
                  <span className="detail-discount-badge">
                    Save ₹{product.mrp - product.price} ({product.discount})
                  </span>
                )}
                <span className="tax-shipping-note">Taxes included. Delivery calculated at checkout.</span>
              </div>

              {/* Short Description */}
              <p className="detail-short-desc">
                {product.shortDescription || product.description}
              </p>

              {/* Weight Options */}
              {product.weightOptions && (
                <div className="variant-selection-group">
                  <label className="group-label">Select Net Weight / Pack Size:</label>
                  <div className="variant-buttons">
                    {product.weightOptions.map(w => (
                      <button 
                        key={w}
                        className={`variant-option-btn ${selectedWeight === w ? 'active' : ''}`}
                        onClick={() => setSelectedWeight(w)}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="quantity-group">
                <label className="group-label">Quantity:</label>
                <div className="qty-control">
                  <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span className="qty-value">{quantity}</span>
                  <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              {/* Action Buttons Stack */}
              <div className="action-buttons-stack">
                <div className="row-primary-actions">
                  <button className="btn-primary flex-1" onClick={() => addToCart(product, selectedWeight, quantity)}>
                    <ShoppingBag size={18} /> Add to Cart
                  </button>

                  <button className="btn-buy-now-lg flex-1" onClick={() => buyNow(product, selectedWeight, quantity)}>
                    <Zap size={18} /> Buy Now
                  </button>

                  <button 
                    className={`wishlist-btn-sq ${isWishlisted ? 'active' : ''}`}
                    onClick={() => toggleWishlist(product.id)}
                    title={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
                  >
                    <Heart size={20} fill={isWishlisted ? 'var(--accent-maroon)' : 'none'} color={isWishlisted ? 'var(--accent-maroon)' : '#555'} />
                  </button>
                </div>

                <div className="row-secondary-contact-actions">
                  <button className="btn-whatsapp-full" onClick={handleWhatsAppOrder}>
                    <MessageCircle size={18} /> Order via WhatsApp
                  </button>

                  <button className="btn-call-order" onClick={handleCallOrder}>
                    <Phone size={16} /> Call to Order
                  </button>

                  <button className="btn-email-order" onClick={handleEmailUs}>
                    <Mail size={16} /> Email Us
                  </button>
                </div>
              </div>

              {/* Wholesale Enquiry Box */}
              <div className="wholesale-callout-box">
                <div>
                  <strong>Buying for a shop or business?</strong>
                  <p>Get direct wholesale rates & bulk packaging for retail counters.</p>
                </div>
                <button className="btn-secondary" onClick={() => openWholesaleModal(product)} style={{ whiteSpace: 'nowrap' }}>
                  Wholesale Enquiry
                </button>
              </div>

              {/* Verified Trust Badges */}
              <div className="truthful-trust-grid">
                <div className="trust-item"><CheckCircle2 size={16} style={{ color: 'var(--primary)' }} /> Quality-focused packaging</div>
                <div className="trust-item"><CheckCircle2 size={16} style={{ color: 'var(--primary)' }} /> Family-owned business</div>
                <div className="trust-item"><CheckCircle2 size={16} style={{ color: 'var(--primary)' }} /> Customer support</div>
                <div className="trust-item"><CheckCircle2 size={16} style={{ color: 'var(--primary)' }} /> Easy ordering</div>
              </div>

              {/* Share Product */}
              <div className="share-product-bar">
                <span className="share-title">Share Product:</span>
                <button onClick={handleShareWhatsApp} className="share-btn whatsapp"><MessageCircle size={14} /> WhatsApp</button>
                <button onClick={handleCopyLink} className="share-btn copy"><Copy size={14} /> Copy Link</button>
              </div>

            </div>

          </div>

          {/* BELOW TABS SECTION */}
          <div className="product-details-tabs-wrapper" id="reviews-section">
            <div className="tabs-header-bar">
              <button className={`tab-header-btn ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
              <button className={`tab-header-btn ${activeTab === 'ingredients' ? 'active' : ''}`} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
              <button className={`tab-header-btn ${activeTab === 'storage' ? 'active' : ''}`} onClick={() => setActiveTab('storage')}>How to Store</button>
              <button className={`tab-header-btn ${activeTab === 'packaging' ? 'active' : ''}`} onClick={() => setActiveTab('packaging')}>Weight & Packaging</button>
              <button className={`tab-header-btn ${activeTab === 'shipping' ? 'active' : ''}`} onClick={() => setActiveTab('shipping')}>Shipping Info</button>
              <button className={`tab-header-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Customer Reviews ({product.reviewsCount})</button>
            </div>

            <div className="tab-content-panel">
              {activeTab === 'description' && (
                <div>
                  <h3>Product Overview</h3>
                  <p>{product.description}</p>
                  {product.highlights && (
                    <div style={{ marginTop: '1rem' }}>
                      <strong>Key Features:</strong>
                      <ul style={{ marginTop: '0.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                        {product.highlights.map((h, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
                            <CheckCircle2 size={15} style={{ color: 'var(--secondary)' }} /> {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div>
                  <h3>Ingredients</h3>
                  {product.ingredientsPlaceholder ? (
                    <p>{product.ingredientsPlaceholder}</p>
                  ) : (
                    <p style={{ color: 'var(--text-muted)' }}>Product information will be updated soon.</p>
                  )}
                </div>
              )}

              {activeTab === 'storage' && (
                <div>
                  <h3>How to Store</h3>
                  <p>{product.storageInfo || 'Store in a cool, dry place. Keep sealed in an airtight container after opening.'}</p>
                </div>
              )}

              {activeTab === 'packaging' && (
                <div>
                  <h3>Weight & Packaging Specifications</h3>
                  <p><strong>Net Weight:</strong> {selectedWeight || product.weight}</p>
                  <p><strong>Packaging Type:</strong> {product.packagingInfo || 'Heat-sealed food grade multi-layer pouch.'}</p>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div>
                  <h3>Shipping & Delivery Information</h3>
                  <p>{product.shippingInfo || 'Dispatched directly from Madurai, Tamil Nadu within 24 hours of order placement.'}</p>
                  <p>Standard delivery timeline: 3-5 business days across India. Orders above ₹499 qualify for <strong>FREE Doorstep Delivery</strong>.</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="reviews-tab-container">
                  <div className="reviews-summary-box">
                    <div className="rating-overall font-heading">
                      <span className="big-rating">{product.rating}</span>
                      <div className="stars-flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill={i < Math.floor(product.rating) ? '#C59B27' : 'none'} color="#C59B27" />
                        ))}
                      </div>
                      <span className="total-rev-count">Based on {product.reviewsCount} customer reviews</span>
                    </div>
                  </div>

                  {/* Customer Review Items List */}
                  <div className="customer-reviews-list">
                    {product.reviews && product.reviews.length > 0 ? (
                      product.reviews.map((rev) => (
                        <div key={rev.id} className="review-card-item">
                          <div className="rev-user-header">
                            <strong>{rev.name}</strong>
                            <span className="rev-date">{rev.date}</span>
                          </div>
                          <div className="rev-stars">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} fill={i < rev.rating ? '#C59B27' : 'none'} color="#C59B27" />
                            ))}
                          </div>
                          <p className="rev-text">{rev.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p style={{ color: 'var(--text-muted)' }}>No customer reviews yet. Be the first to share your experience!</p>
                    )}
                  </div>

                  {/* Write a Review Form */}
                  <div className="write-review-form-box">
                    <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Write a Customer Review</h4>
                    <form onSubmit={handleReviewSubmit}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                          <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Your Name *</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. Ramesh Kumar"
                            value={newReviewName}
                            onChange={(e) => setNewReviewName(e.target.value)}
                            style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
                          />
                        </div>
                        <div>
                          <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Rating *</label>
                          <select 
                            value={newReviewRating} 
                            onChange={(e) => setNewReviewRating(e.target.value)}
                            style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
                          >
                            <option value={5}>5 Stars ★★★★★</option>
                            <option value={4}>4 Stars ★★★★☆</option>
                            <option value={3}>3 Stars ★★★☆☆</option>
                            <option value={2}>2 Stars ★★☆☆☆</option>
                            <option value={1}>1 Star ★☆☆☆☆</option>
                          </select>
                        </div>
                      </div>

                      <div style={{ marginBottom: '1rem' }}>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Your Review *</label>
                        <textarea 
                          required
                          rows={3}
                          placeholder="Share your experience with taste, quality, and packaging..."
                          value={newReviewComment}
                          onChange={(e) => setNewReviewComment(e.target.value)}
                          style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
                        />
                      </div>

                      <button type="submit" className="btn-primary">
                        <Send size={15} /> Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RELATED PRODUCTS ("You May Also Like") */}
          <div style={{ marginTop: '4rem' }}>
            <div style={{ borderBottom: '2px solid var(--secondary)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', margin: 0 }} className="font-heading">
                You May Also Like
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.75rem' }}>
              {displayRelated.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>

          {/* RECENTLY VIEWED PRODUCTS */}
          {recentlyViewedProducts.length > 0 && (
            <div style={{ marginTop: '4rem' }}>
              <div style={{ borderBottom: '2px solid var(--secondary)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', margin: 0 }} className="font-heading">
                  Recently Viewed
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.75rem' }}>
                {recentlyViewedProducts.slice(0, 4).map(rv => (
                  <ProductCard key={rv.id} product={rv} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="mobile-product-sticky-bar">
        <div className="sticky-price-info">
          <span className="sticky-title">{product.name}</span>
          <span className="sticky-price">₹{product.price} ({selectedWeight})</span>
        </div>
        <div className="sticky-btn-group">
          <button className="btn-primary" onClick={() => addToCart(product, selectedWeight, quantity)}>
            Add to Cart
          </button>
          <button className="btn-buy-now-lg" onClick={() => buyNow(product, selectedWeight, quantity)}>
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
};
