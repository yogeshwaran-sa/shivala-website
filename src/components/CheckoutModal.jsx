import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, CheckCircle2, ShieldAlert, CreditCard, Smartphone, Landmark, Banknote, ArrowRight } from 'lucide-react';

export const CheckoutModal = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cart, 
    cartSubtotal, 
    shippingFee, 
    cartGrandTotal,
    placeOrder,
    user 
  } = useShop();

  if (!isCheckoutOpen) return null;

  const [formData, setFormData] = useState({
    name: user.name || '',
    phone: user.phone || '',
    email: user.email || '',
    address: user.addresses?.[0]?.line1 || '',
    city: user.addresses?.[0]?.city || 'Madurai',
    state: user.addresses?.[0]?.state || 'Tamil Nadu',
    pincode: user.addresses?.[0]?.pincode || '625001',
    paymentMethod: 'upi',
    upiId: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      placeOrder(formData);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsCheckoutOpen(false)}>
      <div className="modal-content" style={{ maxWidth: '850px' }} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={() => setIsCheckoutOpen(false)}>
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ padding: '1.5rem 2rem', background: 'var(--bg-warm)', borderBottom: '1px solid var(--border-light)' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', margin: 0 }}>SHIVALA Express Checkout</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
            Complete your delivery information for direct family dispatch.
          </p>
        </div>

        {/* Demo Disclaimer Banner */}
        <div style={{ background: '#FFFBEB', borderBottom: '1px solid #FCD34D', padding: '0.65rem 2rem', fontSize: '0.8rem', color: '#92400E', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldAlert size={16} />
          <span><strong>Demo Store Mode:</strong> Payment gateway options are simulated for visual & functional verification. No real money will be charged.</span>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem' }} className="checkout-grid">
            
            {/* Left Column: Form Fields */}
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--secondary)', paddingBottom: '0.4rem', display: 'inline-block' }}>
                1. Delivery & Contact Details
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem', color: 'var(--text-main)' }}>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Sundaram S."
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem', color: 'var(--text-main)' }}>Mobile Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem', color: 'var(--text-main)' }}>Email Address *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem', color: 'var(--text-main)' }}>House / Street Address *</label>
                <textarea 
                  required 
                  rows={2}
                  placeholder="Door No, Street name, Area landmark..."
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>City *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>State *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.state}
                    onChange={e => setFormData({ ...formData, state: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>PIN Code *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.pincode}
                    onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                  />
                </div>
              </div>

              <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--secondary)', paddingBottom: '0.4rem', display: 'inline-block' }}>
                2. Select Payment Method
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div 
                  onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: formData.paymentMethod === 'upi' ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                    background: formData.paymentMethod === 'upi' ? 'var(--secondary-light)' : 'var(--bg-card)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <Smartphone size={20} style={{ color: 'var(--primary)' }} />
                  <div>
                    <strong style={{ fontSize: '0.88rem', display: 'block' }}>Instant UPI / QR</strong>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>GPay, PhonePe, PayTM</span>
                  </div>
                </div>

                <div 
                  onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: formData.paymentMethod === 'cod' ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                    background: formData.paymentMethod === 'cod' ? 'var(--secondary-light)' : 'var(--bg-card)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <Banknote size={20} style={{ color: 'var(--primary)' }} />
                  <div>
                    <strong style={{ fontSize: '0.88rem', display: 'block' }}>Cash on Delivery</strong>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Pay cash upon arrival</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary Box */}
            <div style={{ background: 'var(--bg-warm)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                Order Summary ({cart.length} Items)
              </h3>

              <div style={{ flexGrow: 1, overflowY: 'auto', maxHeight: '220px', marginBottom: '1rem', borderBottom: '1px dashed var(--border-light)', paddingBottom: '0.75rem' }}>
                {cart.map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.6rem' }}>
                    <div>
                      <strong style={{ color: 'var(--primary)' }}>{item.product.name}</strong>
                      <div style={{ color: 'var(--text-muted)' }}>{item.selectedWeight} × {item.quantity}</div>
                    </div>
                    <span style={{ fontWeight: 700 }}>₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span>Subtotal:</span>
                <span>₹{cartSubtotal}</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span>Shipping Charge:</span>
                <span style={{ color: shippingFee === 0 ? 'var(--primary)' : 'var(--text-main)', fontWeight: 700 }}>
                  {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                </span>
              </div>

              <div style={{ borderTop: '2px solid var(--primary)', paddingTop: '0.75rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>
                <span>Total Amount:</span>
                <span>₹{cartGrandTotal}</span>
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', padding: '0.9rem' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing Order...' : `Confirm Order (₹${cartGrandTotal})`} <ArrowRight size={18} />
              </button>

            </div>

          </div>
        </form>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
