import React from 'react';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, Trash2, Heart, ArrowRight, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const CartPage = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    toggleWishlist,
    cartSubtotal, 
    shippingFee, 
    cartGrandTotal, 
    navigateTo,
    setIsCheckoutOpen
  } = useShop();

  const freeShippingThreshold = BUSINESS_CONFIG.FREE_SHIPPING_THRESHOLD || 499;
  const neededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleProceedToCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="cart-page">
      {/* Header Banner */}
      <section className="section-padding" style={{ background: 'var(--primary-dark)', color: '#FFFFFF', padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>SHIVALA SHOPPING BAG</span>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-heading)' }}>
            Your Cart ({cart.length} Products)
          </h1>
        </div>
      </section>

      {/* Main Cart Content */}
      <section className="section-padding">
        <div className="container">
          
          {/* Free Shipping Progress Indicator */}
          <div style={{ background: 'var(--bg-warm)', padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 600 }}>
              <Truck size={20} style={{ color: 'var(--secondary)' }} />
              {neededForFreeShipping > 0 ? (
                <span>Add <strong>₹{neededForFreeShipping}</strong> more to unlock <strong>FREE Doorstep Shipping!</strong></span>
              ) : (
                <span style={{ color: 'var(--primary)' }}>🎉 Congratulations! You qualify for <strong>FREE Shipping!</strong></span>
              )}
            </div>
            <div style={{ height: '8px', background: 'rgba(15, 56, 44, 0.12)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${freeShippingPercent}%`, height: '100%', background: 'var(--secondary)', transition: 'width 0.4s ease' }} />
            </div>
          </div>

          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <ShoppingBag size={64} style={{ color: 'var(--text-light)', marginBottom: '1.25rem', strokeWidth: 1.2 }} />
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Your Cart is Empty</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                Discover our range of authentic South Indian appalams, vathals, vadagams, semiya, and household essentials.
              </p>
              <button className="btn-primary" onClick={() => navigateTo('shop')} style={{ padding: '0.85rem 2rem' }}>
                <ArrowLeft size={18} /> Continue Shopping
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem' }} className="cart-page-grid">
              
              {/* Left Column: Cart Items List */}
              <div>
                <div className="cart-items-table-header" style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '2px solid var(--border-light)', marginBottom: '1rem', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span>PRODUCT DETAILS</span>
                  <span>SUBTOTAL</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {cart.map((item, idx) => (
                    <div 
                      key={`${item.product.id}-${item.selectedWeight}-${idx}`}
                      style={{ 
                        display: 'flex', 
                        gap: '1.25rem', 
                        padding: '1.25rem', 
                        background: 'var(--bg-card)', 
                        borderRadius: 'var(--radius-md)', 
                        border: '1px solid var(--border-light)',
                        alignItems: 'center'
                      }}
                      className="cart-page-item-card"
                    >
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} 
                      />

                      <div style={{ flexGrow: 1 }}>
                        <span className="brand-micro-label">SHIVALA</span>
                        <h3 
                          onClick={() => navigateTo('product-detail', item.product.slug)}
                          style={{ fontSize: '1.05rem', color: 'var(--primary)', margin: '0 0 0.25rem 0', cursor: 'pointer' }}
                        >
                          {item.product.name}
                        </h3>

                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                          Pack Size: <strong>{item.selectedWeight}</strong> • Unit Price: ₹{item.product.price}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                          <div className="qty-control" style={{ padding: '0.35rem 0.65rem' }}>
                            <button className="qty-btn" onClick={() => updateQuantity(item.product.id, item.selectedWeight, -1)}>-</button>
                            <span style={{ fontWeight: 700, padding: '0 0.5rem', fontSize: '0.9rem' }}>{item.quantity}</span>
                            <button className="qty-btn" onClick={() => updateQuantity(item.product.id, item.selectedWeight, 1)}>+</button>
                          </div>

                          <button 
                            onClick={() => {
                              toggleWishlist(item.product.id);
                              removeFromCart(item.product.id, item.selectedWeight);
                            }}
                            style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}
                          >
                            <Heart size={14} /> Save for later
                          </button>

                          <button 
                            onClick={() => removeFromCart(item.product.id, item.selectedWeight)}
                            style={{ fontSize: '0.8rem', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '4px' }}
                          >
                            <Trash2 size={14} /> Remove
                          </button>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right', fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)' }}>
                        ₹{item.product.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button className="btn-secondary" onClick={() => navigateTo('shop')}>
                    <ArrowLeft size={16} /> Continue Shopping
                  </button>
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div>
                <div style={{ background: 'var(--bg-warm)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', position: 'sticky', top: '100px' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1.25rem', borderBottom: '2px solid var(--secondary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                    Order Summary
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Bag Subtotal</span>
                      <strong style={{ color: 'var(--text-main)' }}>₹{cartSubtotal}</strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Estimated Delivery Charge</span>
                      <strong style={{ color: shippingFee === 0 ? 'var(--primary)' : 'var(--text-main)' }}>
                        {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                      </strong>
                    </div>
                  </div>

                  <div style={{ borderTop: '2px solid var(--primary)', paddingTop: '1rem', marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)' }}>
                    <span>Total Amount</span>
                    <span>₹{cartGrandTotal}</span>
                  </div>

                  <button 
                    className="btn-primary" 
                    onClick={handleProceedToCheckout} 
                    style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
                  >
                    Proceed to Checkout <ArrowRight size={18} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.25rem', fontSize: '0.78rem', color: 'var(--text-light)', textAlign: 'center' }}>
                    <ShieldCheck size={16} style={{ color: 'var(--primary)', shrink: 0 }} />
                    Secure Direct Dispatch • Hygienic Packaging
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      <style>{`
        @media (max-width: 850px) {
          .cart-page-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
