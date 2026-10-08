import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { User, Package, Heart, MapPin, PhoneCall, LogOut, CheckCircle2, Truck, Clock, MessageCircle, Mail, KeyRound, ArrowRight } from 'lucide-react';

export const AccountPage = () => {
  const { 
    user, 
    loginUser, 
    logoutUser, 
    wishlist, 
    addToCart,
    navigateTo 
  } = useShop();

  const [activeTab, setActiveTab] = useState('orders');

  // Login Simulator Form State
  const [loginPhone, setLoginPhone] = useState('');
  const [loginName, setLoginName] = useState('');
  const [otpStep, setOtpStep] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (loginPhone) {
      setOtpStep(true);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    loginUser(loginName || 'Family Member', loginPhone, 'family@shivalabrand.com');
  };

  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  // Render Login View if not logged in
  if (!user.isLoggedIn) {
    return (
      <div className="section-padding" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '480px' }}>
          
          <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <User size={32} />
            </div>

            <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>SHIVALA FAMILY CLUB</span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.4rem' }}>
              Customer Account Login
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Access your orders, saved addresses, and exclusive family discounts.
            </p>

            {!otpStep ? (
              <form onSubmit={handleSendOtp}>
                <div style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Full Name (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Sundaram S."
                    value={loginName}
                    onChange={e => setLoginName(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>

                <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Mobile Number or Email *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="+91 XXXXX XXXXX"
                    value={loginPhone}
                    onChange={e => setLoginPhone(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>

                <button className="btn-primary" style={{ width: '100%', padding: '0.85rem' }} type="submit">
                  Send OTP Code <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <div style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Enter 4-Digit OTP Code</label>
                  <input 
                    type="text" 
                    required 
                    maxLength={4}
                    placeholder="1234"
                    value={otpCode}
                    onChange={e => setOtpCode(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', textAlign: 'center', fontSize: '1.4rem', letterSpacing: '0.5em', fontWeight: 800, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)' }}
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block', marginTop: '4px' }}>
                    Demo mode: Enter any 4 digits (e.g. 1234)
                  </span>
                </div>

                <button className="btn-primary" style={{ width: '100%', padding: '0.85rem' }} type="submit">
                  Verify & Login <CheckCircle2 size={18} />
                </button>
              </form>
            )}

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--border-light)' }}>
              <button 
                onClick={() => loginUser('Guest Customer', '+91 98000 00000', 'guest@shivalabrand.com')}
                style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 700 }}
              >
                Continue as Guest Demo Account →
              </button>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // Logged-in Dashboard View
  return (
    <div className="account-dashboard-page">
      
      {/* Header Banner */}
      <section style={{ background: 'var(--bg-warm)', padding: '2.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge-gold">SHIVALA MEMBER</span>
            <h1 style={{ fontSize: '2.2rem', color: 'var(--primary)', margin: '0.2rem 0' }}>
              Welcome back, {user.name}
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              {user.phone} • {user.email}
            </p>
          </div>

          <button className="btn-outline" onClick={logoutUser} style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
            <LogOut size={16} /> Logout Account
          </button>
        </div>
      </section>

      {/* Main Dashboard Layout */}
      <section className="section-padding">
        <div className="container account-grid" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '2.5rem' }}>
          
          {/* Sidebar Tabs */}
          <aside style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', height: 'fit-content' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button 
                className={`nav-link-item ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: 'var(--radius-sm)', width: '100%', textAlign: 'left', background: activeTab === 'orders' ? 'var(--secondary-light)' : 'transparent', color: activeTab === 'orders' ? 'var(--primary)' : 'var(--text-main)' }}
              >
                <Package size={18} /> My Orders
              </button>

              <button 
                className={`nav-link-item ${activeTab === 'wishlist' ? 'active' : ''}`}
                onClick={() => setActiveTab('wishlist')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: 'var(--radius-sm)', width: '100%', textAlign: 'left', background: activeTab === 'wishlist' ? 'var(--secondary-light)' : 'transparent', color: activeTab === 'wishlist' ? 'var(--primary)' : 'var(--text-main)' }}
              >
                <Heart size={18} /> Wishlist ({wishlist.length})
              </button>

              <button 
                className={`nav-link-item ${activeTab === 'addresses' ? 'active' : ''}`}
                onClick={() => setActiveTab('addresses')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: 'var(--radius-sm)', width: '100%', textAlign: 'left', background: activeTab === 'addresses' ? 'var(--secondary-light)' : 'transparent', color: activeTab === 'addresses' ? 'var(--primary)' : 'var(--text-main)' }}
              >
                <MapPin size={18} /> Saved Addresses
              </button>

              <button 
                className={`nav-link-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: 'var(--radius-sm)', width: '100%', textAlign: 'left', background: activeTab === 'profile' ? 'var(--secondary-light)' : 'transparent', color: activeTab === 'profile' ? 'var(--primary)' : 'var(--text-main)' }}
              >
                <User size={18} /> Profile Info
              </button>

              <button 
                className={`nav-link-item ${activeTab === 'support' ? 'active' : ''}`}
                onClick={() => setActiveTab('support')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: 'var(--radius-sm)', width: '100%', textAlign: 'left', background: activeTab === 'support' ? 'var(--secondary-light)' : 'transparent', color: activeTab === 'support' ? 'var(--primary)' : 'var(--text-main)' }}
              >
                <PhoneCall size={18} /> Direct Support
              </button>
            </div>
          </aside>

          {/* Main Tab Content */}
          <main>
            
            {/* 1. MY ORDERS TAB */}
            {activeTab === 'orders' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                  My Orders
                </h2>

                {user.orders.length === 0 ? (
                  <div style={{ background: 'var(--bg-card)', padding: '3rem', textAlign: 'center', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <Package size={48} style={{ color: 'var(--text-light)', marginBottom: '1rem' }} />
                    <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>No orders placed yet</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Start exploring our authentic Tamil Nadu food range today.</p>
                    <button className="btn-primary" onClick={() => navigateTo('shop')}>Start Shopping</button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {user.orders.map((ord, idx) => (
                      <div key={idx} style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', overflow: 'hidden' }}>
                        <div style={{ padding: '1rem 1.25rem', background: 'var(--bg-warm)', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.88rem' }}>
                          <div>
                            <span style={{ color: 'var(--text-muted)' }}>Order ID:</span> <strong style={{ color: 'var(--primary)' }}>{ord.id}</strong>
                          </div>
                          <div>
                            <span style={{ color: 'var(--text-muted)' }}>Date:</span> <strong>{ord.date}</strong>
                          </div>
                          <div>
                            <span className="badge-green">{ord.status}</span>
                          </div>
                        </div>

                        <div style={{ padding: '1.25rem' }}>
                          <div style={{ marginBottom: '1rem' }}>
                            {ord.items.map((it, i) => (
                              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                                <span>{it.name} × {it.qty}</span>
                                <span style={{ fontWeight: 700 }}>₹{it.price}</span>
                              </div>
                            ))}
                          </div>

                          <div style={{ borderTop: '1px dashed var(--border-light)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>
                              Total: ₹{ord.total}
                            </span>
                            <button 
                              className="btn-secondary"
                              onClick={() => {
                                addToCart(PRODUCTS[0]);
                                navigateTo('shop');
                              }}
                              style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
                            >
                              Reorder Items
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 2. WISHLIST TAB */}
            {activeTab === 'wishlist' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                  Saved Wishlist Items
                </h2>

                {wishlistedProducts.length === 0 ? (
                  <div style={{ background: 'var(--bg-card)', padding: '3rem', textAlign: 'center', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <Heart size={48} style={{ color: 'var(--text-light)', marginBottom: '1rem' }} />
                    <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Your Wishlist is Empty</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Save products while exploring our catalog.</p>
                    <button className="btn-primary" onClick={() => navigateTo('products')}>Explore Products</button>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                    {wishlistedProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. SAVED ADDRESSES TAB */}
            {activeTab === 'addresses' && (
              <div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                  Saved Delivery Addresses
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {user.addresses?.map((addr) => (
                    <div key={addr.id} style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-gold)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                        <strong style={{ color: 'var(--primary)', fontSize: '1.05rem' }}>{addr.title}</strong>
                        {addr.isDefault && <span className="badge-gold">DEFAULT</span>}
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        <strong>{addr.name}</strong><br />
                        {addr.line1}<br />
                        {addr.city}, {addr.state} – {addr.pincode}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. PROFILE TAB */}
            {activeTab === 'profile' && (
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                  Profile Settings
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Full Name</label>
                    <input type="text" readOnly value={user.name} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', background: 'var(--bg-warm)' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Mobile Number</label>
                    <input type="text" readOnly value={user.phone} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', background: 'var(--bg-warm)' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>Email Address</label>
                  <input type="text" readOnly value={user.email} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', background: 'var(--bg-warm)' }} />
                </div>
              </div>
            )}

            {/* 5. SUPPORT TAB */}
            {activeTab === 'support' && (
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  Need Assistance with Your Order?
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  Our customer happiness team is available to assist you directly.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#25D366', border: 'none' }}>
                    <MessageCircle size={18} /> WhatsApp Customer Care
                  </a>
                  <button className="btn-secondary" onClick={() => navigateTo('contact')}>
                    <Mail size={18} /> Send Help Request
                  </button>
                </div>
              </div>
            )}

          </main>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .account-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
