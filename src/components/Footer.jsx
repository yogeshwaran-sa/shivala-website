import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Instagram, Facebook, Youtube, MessageCircle, Mail, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  const { navigateTo, showToast } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      showToast('Thank you for joining the SHIVALA family newsletter!');
      setNewsletterEmail('');
    }
  };

  return (
    <footer style={{ background: 'var(--primary-dark)', color: 'rgba(255, 255, 255, 0.85)', paddingTop: '4.5rem', paddingBottom: '2.5rem', borderTop: '3px solid var(--secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img src="/assets/text logo.png" alt="SHIVALA Logo" style={{ height: '42px', width: 'auto' }} />
              <div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', margin: 0, fontFamily: 'var(--font-heading)' }}>SHIVALA</h3>
                <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontFamily: 'var(--font-tamil)' }}>ஷிவாலா</span>
              </div>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              “Trusted Products for Every Home.” <br />
              Rooted in Tamil Nadu tradition. Packed with utmost care. Made for modern everyday family living.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#" className="nav-icon-btn" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF' }} title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="nav-icon-btn" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF' }} title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="nav-icon-btn" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF' }} title="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="nav-icon-btn" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF' }} title="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              Company Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li><button onClick={() => navigateTo('home')} style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Home Page</button></li>
              <li><button onClick={() => navigateTo('our-story')} style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Our Heritage & Story</button></li>
              <li><button onClick={() => navigateTo('products')} style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Product Discovery</button></li>
              <li><button onClick={() => navigateTo('shop')} style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Shop D2C Store</button></li>
              <li><button onClick={() => navigateTo('wholesale')} style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Wholesale & B2B Supply</button></li>
              <li><button onClick={() => navigateTo('contact')} style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Customer Contact & FAQ</button></li>
            </ul>
          </div>

          {/* Customer Support Info */}
          <div>
            <h4 style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              Customer Support
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={16} style={{ color: 'var(--secondary)' }} />
                <span>+91 XXXXX XXXXX (Mon-Sat 9AM-7PM)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={16} style={{ color: 'var(--secondary)' }} />
                <span>hello@shivalabrand.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={16} style={{ color: 'var(--secondary)', marginTop: '3px' }} />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
            <div style={{ marginTop: '1.25rem', padding: '0.75rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>
              <ShieldCheck size={14} style={{ color: 'var(--secondary)', verticalAlign: 'middle', marginRight: '4px' }} />
              Demo store placeholders used for customer support contact info.
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              Join the SHIVALA Family
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>
              Subscribe to receive updates on new product launches, authentic traditional recipes, and exclusive family offers.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                style={{
                  flexGrow: 1,
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ padding: '0.75rem 1.25rem', minWidth: 'auto' }}
                title="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.6)' }}>
          <p>© {new Date().getFullYear()} SHIVALA. All rights reserved. Master Consumer Products Brand.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Terms & Conditions</a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Shipping Policy</a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
