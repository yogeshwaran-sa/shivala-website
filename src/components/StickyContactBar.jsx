import React from 'react';
import { useShop } from '../context/ShopContext';
import { MessageCircle, Phone, Mail, ShoppingBag } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const StickyContactBar = () => {
  const { cartItemCount, setIsCartOpen, navigateTo } = useShop();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${BUSINESS_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello SHIVALA, I would like to inquire about your products.')}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${BUSINESS_CONFIG.PHONE_NUMBER.replace(/[^0-9+]/g, '')}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${BUSINESS_CONFIG.EMAIL}?subject=${encodeURIComponent('SHIVALA General Customer Inquiry')}`;
  };

  return (
    <>
      {/* DESKTOP FLOATING STACK (Bottom Right) */}
      <div className="desktop-floating-contact-stack">
        <button className="floating-btn whatsapp" onClick={handleWhatsApp} title="Chat on WhatsApp">
          <MessageCircle size={22} />
          <span className="tooltip">WhatsApp Us</span>
        </button>

        <button className="floating-btn phone" onClick={handleCall} title="Call SHIVALA Hotline">
          <Phone size={20} />
          <span className="tooltip">Call {BUSINESS_CONFIG.PHONE_NUMBER}</span>
        </button>

        <button className="floating-btn email" onClick={handleEmail} title="Email SHIVALA Support">
          <Mail size={20} />
          <span className="tooltip">Email Us</span>
        </button>
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="mobile-sticky-contact-bar">
        <button className="mobile-bar-item whatsapp" onClick={handleWhatsApp}>
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </button>

        <button className="mobile-bar-item phone" onClick={handleCall}>
          <Phone size={18} />
          <span>Call</span>
        </button>

        <button className="mobile-bar-item cart" onClick={() => setIsCartOpen(true)}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <ShoppingBag size={18} />
            {cartItemCount > 0 && <span className="mobile-cart-badge">{cartItemCount}</span>}
          </div>
          <span>Cart</span>
        </button>
      </div>
    </>
  );
};
