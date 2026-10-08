import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Building2, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppWholesaleLink } from '../config/businessConfig';

export const WholesaleModal = () => {
  const { isWholesaleModalOpen, setIsWholesaleModalOpen, wholesaleProduct, showToast } = useShop();

  if (!isWholesaleModalOpen) return null;

  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    businessType: 'Supermarket / Grocery Store',
    product: wholesaleProduct ? wholesaleProduct.name : 'SHIVALA Appalam (All Variants)',
    quantityRequired: '50 - 100 kg / Packs',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      showToast('Wholesale Enquiry sent successfully! Our sales manager will contact you within 4 hours.');
      setIsSubmitted(false);
      setIsWholesaleModalOpen(false);
    }, 1200);
  };

  const handleWhatsAppWholesale = () => {
    const url = getWhatsAppWholesaleLink(formData.product);
    window.open(url, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={() => setIsWholesaleModalOpen(false)}>
      <div className="modal-content" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={() => setIsWholesaleModalOpen(false)}>
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ padding: '1.5rem 2rem', background: 'var(--primary-dark)', color: '#FFFFFF', borderBottom: '3px solid var(--secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Building2 size={24} style={{ color: 'var(--secondary)' }} />
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-heading)' }}>
                B2B & Wholesale Order Enquiry
              </h2>
              <span style={{ fontSize: '0.8rem', color: 'var(--secondary-light)' }}>
                Direct factory supply for supermarkets, caterers, hotels, & regional distributors.
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Business / Shop Name *</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Sri Lakshmi Supermarket"
                value={formData.businessName}
                onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Contact Person Name *</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Mr. K. Rajan"
                value={formData.contactPerson}
                onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Phone / Mobile Number *</label>
              <input 
                type="tel" 
                required 
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Email Address *</label>
              <input 
                type="email" 
                required 
                placeholder="business@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>City / Location *</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Madurai / Chennai / Coimbatore"
                value={formData.city}
                onChange={e => setFormData({ ...formData, city: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Business Type *</label>
              <select 
                value={formData.businessType}
                onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
              >
                <option value="Supermarket / Grocery Store">Supermarket / Grocery Store</option>
                <option value="Wholesale Distributor / Stockist">Wholesale Distributor / Stockist</option>
                <option value="Restaurant / Hotel / Mess Caterer">Restaurant / Hotel / Mess Caterer</option>
                <option value="Wedding / Event Caterer">Wedding / Event Caterer</option>
                <option value="E-commerce Retailer">E-commerce Retailer</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Product Required</label>
              <input 
                type="text" 
                value={formData.product}
                onChange={e => setFormData({ ...formData, product: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Estimated Quantity Required</label>
              <input 
                type="text" 
                placeholder="e.g. 100 kg / 500 pouches"
                value={formData.quantityRequired}
                onChange={e => setFormData({ ...formData, quantityRequired: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Additional Message / Custom Requirements</label>
            <textarea 
              rows={2}
              placeholder="State any specific packaging sizes, transport requirements, or distribution terms..."
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button type="submit" className="btn-primary" disabled={isSubmitted} style={{ flex: 1, padding: '0.85rem' }}>
              <Send size={16} /> {isSubmitted ? 'Submitting Enquiry...' : 'Send Wholesale Enquiry'}
            </button>

            <button type="button" className="btn-whatsapp-full" onClick={handleWhatsAppWholesale} style={{ flex: 1, padding: '0.85rem' }}>
              <MessageCircle size={16} /> WhatsApp Wholesale
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
