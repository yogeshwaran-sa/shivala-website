import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle, Package, Truck, ArrowRight } from 'lucide-react';

export const OrderConfirmationModal = () => {
  const { 
    isOrderSuccessOpen, 
    setIsOrderSuccessOpen, 
    lastOrderDetails,
    navigateTo 
  } = useShop();

  if (!isOrderSuccessOpen || !lastOrderDetails) return null;

  const handleContinue = () => {
    setIsOrderSuccessOpen(false);
    navigateTo('shop');
  };

  return (
    <div className="modal-overlay" onClick={() => setIsOrderSuccessOpen(false)}>
      <div className="modal-content" style={{ maxWidth: '600px', textAlign: 'center', padding: '2.5rem 2rem' }} onClick={(e) => e.stopPropagation()}>
        
        {/* Animated Check Icon */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(15, 56, 44, 0.1)',
          color: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
          border: '2px solid var(--secondary)'
        }}>
          <CheckCircle size={44} style={{ color: 'var(--primary)' }} />
        </div>

        <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>ORDER CONFIRMED</span>
        <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
          Thank you for choosing SHIVALA.
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
          Your order has been placed with our family warehouse team and is being prepared with standard hygiene protocols.
        </p>

        {/* Order Info Card */}
        <div style={{ background: 'var(--bg-warm)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--border-light)', textAlign: 'left', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-light)', paddingBottom: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
            <span>Order Reference: <strong style={{ color: 'var(--primary)' }}>{lastOrderDetails.id}</strong></span>
            <span>Date: {lastOrderDetails.date}</span>
          </div>

          <div style={{ textAlign: 'left', fontSize: '0.88rem', marginBottom: '0.75rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>Delivery Address:</span>
            <div style={{ color: 'var(--text-muted)' }}>
              {lastOrderDetails.shipping?.name}<br />
              {lastOrderDetails.shipping?.address}, {lastOrderDetails.shipping?.city}, {lastOrderDetails.shipping?.state} - {lastOrderDetails.shipping?.pincode}<br />
              Mobile: {lastOrderDetails.shipping?.phone}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#FFFFFF', padding: '0.65rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 600 }}>
            <Truck size={18} style={{ color: 'var(--secondary)' }} />
            <span>Estimated Delivery: 3 to 5 Business Days across India</span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-primary" onClick={handleContinue} style={{ width: '100%' }}>
            Continue Shopping <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};
