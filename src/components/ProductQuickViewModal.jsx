import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Star, ShoppingBag, Heart, Zap, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { getWhatsAppOrderLink } from '../config/businessConfig';

export const ProductQuickViewModal = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    buyNow,
    wishlist, 
    toggleWishlist,
    navigateTo
  } = useShop();

  if (!quickViewProduct) return null;

  const [selectedWeight, setSelectedWeight] = useState(quickViewProduct.weight);
  const [selectedImage, setSelectedImage] = useState(quickViewProduct.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const isWishlisted = wishlist.includes(quickViewProduct.id);
  const galleryImages = quickViewProduct.images && quickViewProduct.images.length > 0 
    ? quickViewProduct.images 
    : [quickViewProduct.image];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedWeight, quantity);
    setQuickViewProduct(null);
  };

  const handleBuyNow = () => {
    setQuickViewProduct(null);
    buyNow(quickViewProduct, selectedWeight, quantity);
  };

  const handleWhatsAppOrder = () => {
    const url = getWhatsAppOrderLink(quickViewProduct.name, selectedWeight, quantity);
    window.open(url, '_blank');
  };

  const handleViewFullDetails = () => {
    const slug = quickViewProduct.slug;
    setQuickViewProduct(null);
    navigateTo('product-detail', slug);
  };

  return (
    <div className="modal-overlay" onClick={() => setQuickViewProduct(null)}>
      <div className="modal-content quick-view-modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={() => setQuickViewProduct(null)}>
          <X size={20} />
        </button>

        <div className="quick-view-grid">
          
          {/* Left Column: Image Gallery & Zoom */}
          <div className="quick-view-gallery">
            <div className="main-image-container">
              <img 
                src={selectedImage || quickViewProduct.image} 
                alt={quickViewProduct.name} 
                className="main-gallery-img"
              />
              <div className="brand-tag-floating">SHIVALA DIRECT</div>
            </div>

            {/* Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className="gallery-thumbnail-strip">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`${quickViewProduct.name} ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Specs & Actions */}
          <div className="quick-view-info">
            <span className="brand-micro-label">SHIVALA FMCG</span>
            <span className="product-category-tag">{quickViewProduct.category}</span>
            
            <h2 className="modal-product-title">{quickViewProduct.name}</h2>

            {/* Rating & Availability */}
            <div className="rating-availability-row">
              <div className="star-rating-box">
                <Star size={16} fill="#C59B27" color="#C59B27" />
                <span>{quickViewProduct.rating}</span>
                <span className="reviews-text">({quickViewProduct.reviewsCount} customer reviews)</span>
              </div>
              <span className="stock-badge-pill">● {quickViewProduct.availability || 'In Stock'}</span>
            </div>

            {/* Price Row */}
            <div className="modal-price-row">
              <span className="modal-price">₹{quickViewProduct.price}</span>
              {quickViewProduct.mrp > quickViewProduct.price && (
                <>
                  <span className="modal-mrp">MRP ₹{quickViewProduct.mrp}</span>
                  <span className="save-badge-lg">Save ₹{quickViewProduct.mrp - quickViewProduct.price} ({quickViewProduct.discount})</span>
                </>
              )}
            </div>

            {/* Short Description */}
            <p className="modal-short-desc">
              {quickViewProduct.shortDescription || quickViewProduct.description}
            </p>

            {/* Weight Variant Selector */}
            {quickViewProduct.weightOptions && (
              <div className="weight-variant-selector">
                <label className="variant-label">Select Pack Size / Weight:</label>
                <div className="variant-options-grid">
                  {quickViewProduct.weightOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedWeight(opt)}
                      className={`variant-btn ${selectedWeight === opt ? 'selected' : ''}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Controls */}
            <div className="qty-row">
              <span className="variant-label" style={{ marginBottom: 0 }}>Quantity:</span>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="qty-val">{quantity}</span>
                <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="modal-actions-stack">
              <div className="primary-action-row">
                <button className="btn-primary" onClick={handleAddToCart} style={{ flex: 1 }}>
                  <ShoppingBag size={18} /> Add to Cart
                </button>
                <button className="btn-buy-now-lg" onClick={handleBuyNow} style={{ flex: 1 }}>
                  <Zap size={18} /> Buy Now
                </button>
                <button 
                  className={`wishlist-btn-sq ${isWishlisted ? 'active' : ''}`}
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  title={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
                >
                  <Heart size={20} fill={isWishlisted ? 'var(--accent-maroon)' : 'none'} color={isWishlisted ? 'var(--accent-maroon)' : '#666'} />
                </button>
              </div>

              <button className="btn-whatsapp-order" onClick={handleWhatsAppOrder}>
                <MessageCircle size={18} /> Order via WhatsApp
              </button>
            </div>

            {/* View Full Product Page Link */}
            <button className="btn-full-details-link" onClick={handleViewFullDetails}>
              View Full Product Detail Page →
            </button>

          </div>

        </div>

        {/* Tabbed Info Drawer below */}
        <div className="quick-view-tabs-container">
          <div className="tab-headers">
            <button className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>Product Details</button>
            <button className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
            <button className={`tab-btn ${activeTab === 'storage' ? 'active' : ''}`} onClick={() => setActiveTab('storage')}>Storage Info</button>
            <button className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Customer Reviews ({quickViewProduct.reviewsCount})</button>
          </div>

          <div className="tab-body">
            {activeTab === 'details' && (
              <div>
                <p>{quickViewProduct.description}</p>
                {quickViewProduct.highlights && (
                  <ul className="tab-highlights-list">
                    {quickViewProduct.highlights.map((h, i) => (
                      <li key={i}><CheckCircle2 size={15} style={{ color: 'var(--secondary)' }} /> {h}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                {quickViewProduct.ingredientsPlaceholder ? (
                  <p><strong>Ingredients:</strong> {quickViewProduct.ingredientsPlaceholder}</p>
                ) : (
                  <p style={{ color: 'var(--text-muted)' }}>Product information will be updated soon.</p>
                )}
              </div>
            )}

            {activeTab === 'storage' && (
              <div>
                <p>{quickViewProduct.storageInfo || 'Store in a cool, dry place. Keep in an airtight container after opening.'}</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                {quickViewProduct.reviews && quickViewProduct.reviews.length > 0 ? (
                  <div className="quick-reviews-list">
                    {quickViewProduct.reviews.map((rev) => (
                      <div key={rev.id} className="quick-review-item">
                        <div className="rev-header">
                          <strong>{rev.name}</strong>
                          <span className="rev-date">{rev.date}</span>
                        </div>
                        <div className="rev-stars">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < rev.rating ? '#C59B27' : 'none'} color="#C59B27" />
                          ))}
                        </div>
                        <p className="rev-comment">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)' }}>No customer reviews yet. Be the first to try!</p>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
