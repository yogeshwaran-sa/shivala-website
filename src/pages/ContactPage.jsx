import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { FAQAccordion } from '../components/FAQAccordion';
import { Phone, Mail, MapPin, MessageCircle, Send, ShieldAlert, Clock, HelpCircle } from 'lucide-react';

export const ContactPage = () => {
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Customer Support',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    showToast('Message sent! Our customer care team will respond shortly.');
  };

  return (
    <div className="contact-page">
      
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)', padding: '3.5rem 0 2.5rem', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <span className="section-subtitle">WE ARE HERE FOR YOU</span>
          <h1 className="section-title">Let’s Connect</h1>
          <p className="section-desc">
            Have a question about our traditional products, direct doorstep delivery, or retail partnership? Reach out to our family team.
          </p>
        </div>
      </section>

      {/* Support Cards */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            
            <div className="shivala-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <Phone size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Customer Support</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                For order status, product feedback & delivery help.
              </p>
              <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1rem' }}>+91 XXXXX XXXXX</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>hello@shivalabrand.com</div>
            </div>

            <div className="shivala-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <Mail size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Wholesale Enquiries</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Bulk orders for supermarkets, hotels & mess facilities.
              </p>
              <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1rem' }}>wholesale@shivalabrand.com</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Direct B2B Desk</div>
            </div>

            <div className="shivala-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <MapPin size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Headquarters</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Family Processing & Distribution Center.
              </p>
              <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1rem' }}>Tamil Nadu, India</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Mon – Sat (9:00 AM – 7:00 PM IST)</div>
            </div>

          </div>

          {/* Business Rules Disclaimer Note */}
          <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', padding: '1rem 1.5rem', borderRadius: 'var(--radius-md)', maxWidth: '800px', margin: '0 auto 4rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#92400E' }}>
            <ShieldAlert size={20} style={{ flexShrink: 0 }} />
            <span>
              <strong>Demonstration Notice:</strong> Contact phone numbers, email addresses, and physical locations use clearly marked placeholders until official registered business credentials are finalized.
            </span>
          </div>

          {/* Contact Form */}
          <div style={{ maxWidth: '750px', margin: '0 auto 5rem', background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.5rem', textAlign: 'center' }}>
              Send Us a Message
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center' }}>
              We value direct communication with families and business partners.
            </p>

            {isSent ? (
              <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--secondary-light)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Thank You for Reaching Out!</h3>
                <p style={{ color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                  We have received your message regarding <strong>{formData.subject}</strong> and will get back to you shortly.
                </p>
                <button className="btn-primary" onClick={() => setIsSent(false)}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Your Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Ananya M."
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Mobile Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Subject</label>
                    <select 
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', background: '#FFFFFF' }}
                    >
                      <option>General Customer Support</option>
                      <option>Order & Delivery Inquiry</option>
                      <option>Wholesale & Retail Supply</option>
                      <option>New Product Suggestion</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Your Message *</label>
                  <textarea 
                    required 
                    rows={4}
                    placeholder="How can our family team help you today?"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>

                <button className="btn-primary" style={{ width: '100%', padding: '0.9rem' }} type="submit">
                  <Send size={18} /> Send Message
                </button>

              </form>
            )}
          </div>

          {/* FAQ Accordion Section */}
          <div style={{ marginTop: '4rem' }}>
            <div className="section-header">
              <span className="section-subtitle">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="section-title">Common Questions</h2>
            </div>

            <FAQAccordion />
          </div>

        </div>
      </section>

    </div>
  );
};
