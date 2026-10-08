import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Store, Building2, UtensilsCrossed, Hotel, Truck, ShieldCheck, DollarSign, PackageCheck, Send, MessageCircle, ArrowRight } from 'lucide-react';

export const WholesalePage = () => {
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    businessType: 'Supermarket / Grocery Store',
    productsInterested: 'Appalam & Vathal Bulk Packs',
    monthlyRequirement: '50kg - 200kg',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast('Wholesale Enquiry Submitted! Our B2B partnership team will contact you within 24 hours.');
  };

  return (
    <div className="wholesale-page">
      
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>B2B & BULK SUPPLY PARTNERSHIPS</span>
          <h1 style={{ fontSize: '3.4rem', color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Partner with SHIVALA
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-light)', lineHeight: '1.7', marginBottom: '2rem' }}>
            Bring trusted Tamil Nadu products to your customers. High-margin retail packages, consistent bulk supply, and dedicated local support.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#enquiry-form" 
              className="btn-primary"
            >
              Request Wholesale Quote <ArrowRight size={18} />
            </a>

            <a 
              href="https://wa.me/+919876543210?text=Hello%20SHIVALA%20Wholesale%20Team" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={18} /> WhatsApp Business Team
            </a>
          </div>
        </div>
      </section>

      {/* Target Business Partners */}
      <section className="section-padding" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">WHO WE SERVE</span>
            <h2 className="section-title">Designed for Modern Retail & Commercial Food Service</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {[
              { title: 'Grocery Stores', desc: 'Hygienic retail barcode packs ready for shelf display.', icon: Store },
              { title: 'Supermarkets', desc: 'Standardized net weights & export-quality aesthetic pouches.', icon: Building2 },
              { title: 'Hotels & Resorts', desc: 'Bulk appalam & sun-dried vathals for traditional thali dining.', icon: Hotel },
              { title: 'Mess & Canteens', desc: 'Consistent large-scale supplies with predictable pricing.', icon: UtensilsCrossed },
              { title: 'Distributors', desc: 'Regional exclusive territory rights and distributor margins.', icon: Truck },
              { title: 'Wedding Caterers', desc: 'Traditional South Indian taste loved by guests.', icon: PackageCheck }
            ].map((p, i) => {
              const IconComp = p.icon;
              return (
                <div key={i} className="shivala-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <IconComp size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.4rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE SHIVALA ADVANTAGE</span>
            <h2 className="section-title">Why Businesses Partner With Us</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="shivala-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '0.75rem' }}><Truck size={30} /></div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Reliable Direct Supply</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Direct family warehouse dispatch eliminating middleman delays and ensuring fresh stock.</p>
            </div>

            <div className="shivala-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '0.75rem' }}><DollarSign size={30} /></div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Competitive Pricing</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Tiered volume discount brackets designed to maximize retail shop profit margins.</p>
            </div>

            <div className="shivala-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '0.75rem' }}><PackageCheck size={30} /></div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Professional Packaging</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Airtight moisture-proof barrier pouches with retail-ready barcode and MRP print.</p>
            </div>

            <div className="shivala-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '0.75rem' }}><ShieldCheck size={30} /></div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Local Support</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Dedicated account representative in Tamil Nadu to assist with quick stock replenishment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Flow */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">SIMPLE ONBOARDING</span>
            <h2 className="section-title">How Wholesale Partnership Works</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {[
              { step: '1', title: 'Submit Enquiry', desc: 'Fill out the form below with your monthly requirements.' },
              { step: '2', title: 'Team Contact', desc: 'Our B2B manager reaches out within 24 hours.' },
              { step: '3', title: 'Sample Evaluation', desc: 'We dispatch product samples to your business.' },
              { step: '4', title: 'Order Confirmation', desc: 'Finalize invoice pricing & order quantities.' },
              { step: '5', title: 'Regular Supply', desc: 'Enjoy scheduled replenishment & dedicated support.' }
            ].map((s, idx) => (
              <div key={idx} className="shivala-card" style={{ padding: '1.75rem 1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'var(--secondary-light)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  {s.step}
                </div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '0.4rem' }}>{s.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Enquiry Form */}
      <section id="enquiry-form" className="section-padding" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <span className="section-subtitle">GET IN TOUCH</span>
            <h2 className="section-title">Wholesale Enquiry Form</h2>
            <p className="section-desc">Submit your details to receive our product catalog and business price list.</p>
          </div>

          {isSubmitted ? (
            <div style={{ background: 'var(--secondary-light)', border: '2px solid var(--secondary)', padding: '2.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank You for Your Partnership Interest!</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                We have received your wholesale enquiry for <strong>{formData.businessName}</strong>. Our commercial supply team will contact you shortly via phone/WhatsApp at {formData.phone}.
              </p>
              <button className="btn-primary" onClick={() => setIsSubmitted(false)}>
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'var(--bg-warm)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Business Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Sri Lakshmi Supermarket"
                    value={formData.businessName}
                    onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Contact Person *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. K. Sundaram (Proprietor)"
                    value={formData.contactPerson}
                    onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Business Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="wholesale@yourbusiness.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>City / Location *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Madurai"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Business Type</label>
                  <select 
                    value={formData.businessType}
                    onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', background: '#FFFFFF' }}
                  >
                    <option>Supermarket / Grocery Store</option>
                    <option>Hotel / Restaurant / Mess</option>
                    <option>Regional Distributor</option>
                    <option>Catering & Events</option>
                    <option>E-Commerce Retailer</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Monthly Volume</label>
                  <select 
                    value={formData.monthlyRequirement}
                    onChange={e => setFormData({ ...formData, monthlyRequirement: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', background: '#FFFFFF' }}
                  >
                    <option>Under 50kg</option>
                    <option>50kg - 200kg</option>
                    <option>200kg - 500kg</option>
                    <option>Above 500kg (Bulk)</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Specific Product Requirements / Message</label>
                <textarea 
                  rows={3}
                  placeholder="Mention target products (e.g. 200g Urad Dal Appalam, Sundakkai Vathal), preferred delivery frequency..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                />
              </div>

              <button className="btn-primary" style={{ width: '100%', padding: '0.9rem' }} type="submit">
                <Send size={18} /> Request Wholesale Information
              </button>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};
