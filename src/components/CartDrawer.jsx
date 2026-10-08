import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartSubtotal, 
    cartItemCount,
    shippingFee,
    cartGrandTotal,
    setIsCheckoutOpen,
    navigateTo
  } = useShop();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 499;
  const neededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)} />

      {/* Cart Panel Drawer */}
      <div className="cart-drawer">
        {/* Header */}
        <div className="cart-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={22} style={{ color: 'var(--primary)' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', margin: 0 }}>Your Shopping Bag</h3>
            <span className="badge-gold">({cartItemCount} items)</span>
          </div>
          <button className="nav-icon-btn" onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{ padding: '0.85rem 1.5rem', background: 'var(--bg-warm)', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', marginBottom: '0.4rem', fontWeight: 600 }}>
            <Truck size={16} style={{ color: 'var(--secondary)' }} />
            {neededForFreeShipping > 0 ? (
              <span>Add <strong>₹{neededForFreeShipping}</strong> more to unlock <strong>FREE Doorstep Shipping!</strong></span>
            ) : (
              <span style={{ color: 'var(--primary)' }}>🎉 Congratulations! You have unlocked <strong>FREE Shipping!</strong></span>
            )}
          </div>
          <div style={{ height: '6px', background: 'rgba(15, 56, 44, 0.12)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${freeShippingPercent}%`, height: '100%', background: 'var(--secondary)', transition: 'width 0.4s ease' }} />
          </div>
        </div>

        {/* Cart Item Body */}
        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
              <ShoppingBag size={48} style={{ color: 'var(--text-light)', marginBottom: '1rem', strokeWidth: 1.5 }} />
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Your bag is empty</h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '1.5rem' }}>Explore our authentic Tamil Nadu family products and start shopping.</p>
              <button 
                className="btn-primary" 
                onClick={() => {
                  setIsCartOpen(false);
                  navigateTo('shop');
                }}
              >
                Explore Products
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.product.id}-${item.selectedWeight}-${idx}`} className="cart-item">
                <img src={item.product.image} alt={item.product.name} className="cart-item-img" />
                
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.product.name}</h4>
                  <div className="cart-item-meta">
                    Net Weight: {item.selectedWeight} • ₹{item.product.price} each
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => updateQuantity(item.product.id, item.selectedWeight, -1)}>-</button>
                      <span style={{ fontWeight: 700, padding: '0 0.4rem', fontSize: '0.85rem' }}>{item.quantity}</span>
                      <button className="qty-btn" onClick={() => updateQuantity(item.product.id, item.selectedWeight, 1)}>+</button>
                    </div>

                    <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.95rem' }}>
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.product.id, item.selectedWeight)}
                  style={{ color: 'var(--text-light)', padding: '4px' }}
                  title="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Summary */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <span>Bag Subtotal:</span>
              <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>₹{cartSubtotal}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <span>Standard Shipping Fee:</span>
              <span style={{ fontWeight: 700, color: shippingFee === 0 ? 'var(--primary)' : 'var(--text-main)' }}>
                {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
              </span>
            </div>

            <div style={{ borderTop: '1px dashed var(--border-light)', paddingTop: '0.75rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary)' }}>
              <span>Grand Total:</span>
              <span>₹{cartGrandTotal}</span>
            </div>

            <button className="btn-primary" style={{ width: '100%', padding: '0.9rem' }} onClick={handleProceedToCheckout}>
              Proceed to Checkout <ArrowRight size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-light)' }}>
              <ShieldCheck size={14} style={{ color: 'var(--primary)' }} />
              100% Safe & Hygienically Sealed Consumer Packaging
            </div>
          </div>
        )}
      </div>
    </>
  );
};
