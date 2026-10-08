import React from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES, PRODUCTS, TESTIMONIALS } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Award, Star, ChevronRight, ChevronLeft } from 'lucide-react';

export const HomePage = () => {
  const { navigateTo } = useShop();

  const bestsellers = PRODUCTS.filter(p => p.isBestseller);

  return (
    <div className="homepage-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          
          <div className="animate-fade-in">
            <span className="hero-tag">
              <Sparkles size={16} style={{ color: 'var(--secondary)' }} />
              EMERGING INDIAN CONSUMER BRAND
            </span>

            <h1 className="hero-title">
              Trusted Products for Every Home.
            </h1>

            <p className="hero-subtitle">
              Rooted in tradition. Packed with care. Made for everyday living. From Tamil Nadu family heritage to your dining table.
            </p>

            <div className="hero-btns">
              <button 
                className="btn-primary"
                onClick={() => navigateTo('products')}
              >
                Explore Products <ArrowRight size={18} />
              </button>

              <button 
                className="btn-secondary"
                onClick={() => navigateTo('shop')}
              >
                Shop SHIVALA
              </button>
            </div>

            {/* Scroll Indicator */}
            <div style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-light)', fontSize: '0.82rem' }}>
              <div style={{ width: '20px', height: '32px', border: '2px solid var(--border-light)', borderRadius: '10px', position: 'relative' }}>
                <div style={{ width: '4px', height: '6px', background: 'var(--secondary)', borderRadius: '2px', position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)' }} className="animate-float" />
              </div>
              <span>Scroll down to discover our story & categories</span>
            </div>
          </div>

          <div className="hero-media-wrapper animate-fade-in">
            <img 
              src="/assets/hero_banner.jpg" 
              alt="SHIVALA Consumer Products Display" 
              className="hero-img"
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              background: 'rgba(15, 56, 44, 0.88)',
              backdropFilter: 'blur(8px)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.25rem',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid var(--border-gold)'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  AUTHENTIC TAMIL HERITAGE
                </span>
                <h4 style={{ fontSize: '1rem', color: '#FFFFFF', margin: 0 }}>SHIVALA Quality Promise</h4>
              </div>
              <span className="font-tamil" style={{ fontSize: '1.2rem', color: 'var(--secondary-light)' }}>
                ஷிவாலா
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHY SHIVALA SECTION */}
      <section className="section-padding" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">FOUNDATION OF TRUST</span>
            <h2 className="section-title">From Our Family to Your Home</h2>
            <p className="section-desc">
              SHIVALA began with a simple family business built on trust, quality and direct relationships with customers. Today, we are bringing that same care into a modern consumer brand.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div className="shivala-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <HeartHandshake size={30} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Family Heritage</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                Decades of direct hands-on experience in sourcing, weighing, and serving local communities in Tamil Nadu with honest values.
              </p>
            </div>

            <div className="shivala-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <Award size={30} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Carefully Selected</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                We inspect raw pulses, sun-dried berries, and grains directly at origin to ensure uncompromised taste and natural aroma.
              </p>
            </div>

            <div className="shivala-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <ShieldCheck size={30} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Quality & Hygiene</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                Modern automated repacking, moisture-proof barrier pouches, and rigorous sanitation standards for every item.
              </p>
            </div>

            <div className="shivala-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <Sparkles size={30} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Trusted by Communities</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                Expanding from neighborhood grocery relationships into nationwide retail and digital e-commerce distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOP BY CATEGORY */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">EXPLORE THE PRODUCT RANGE</span>
            <h2 className="section-title">Shop By Category</h2>
            <p className="section-desc">
              From crisp traditional appalams to everyday household products, discover SHIVALA quality across categories.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. BESTSELLERS CAROUSEL */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
            <div>
              <span className="section-subtitle">CUSTOMER FAVORITES</span>
              <h2 className="section-title" style={{ margin: 0 }}>SHIVALA Bestsellers</h2>
            </div>
            <button 
              className="btn-outline" 
              onClick={() => navigateTo('products')}
            >
              View All Products <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.75rem' }}>
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR PROMISE SECTION */}
      <section className="section-padding" style={{ background: 'var(--primary-dark)', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, background: 'radial-gradient(circle at 50% 50%, var(--secondary) 0%, transparent 70%)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>OUR CORE COMMITMENT</span>
          <h2 style={{ fontSize: '2.8rem', color: '#FFFFFF', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
            “Good products. Honest value. Family trust.”
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto 2.5rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 155, 39, 0.3)' }}>
              <div style={{ color: 'var(--secondary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>✓</div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', margin: 0 }}>Carefully Selected</h4>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 155, 39, 0.3)' }}>
              <div style={{ color: 'var(--secondary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>✓</div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', margin: 0 }}>Hygienically Packed</h4>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 155, 39, 0.3)' }}>
              <div style={{ color: 'var(--secondary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>✓</div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', margin: 0 }}>Quality Focused</h4>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 155, 39, 0.3)' }}>
              <div style={{ color: 'var(--secondary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>✓</div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', margin: 0 }}>Customer First</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAMILY STORY BANNER */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="/assets/family_story.jpg" alt="SHIVALA Family Business Heritage" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            </div>

            <div>
              <span className="section-subtitle">HERITAGE & VISION</span>
              <h2 className="section-title">Built by Family. Growing with You.</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                For years, our family worked on the ground—sourcing ingredients in bulk, ensuring precise weighments, and personally serving households in Tamil Nadu. Now we are scaling those values into an iconic national FMCG brand.
              </p>
              <button className="btn-primary" onClick={() => navigateTo('our-story')}>
                Read Our Story <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS */}
      <section className="section-padding" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">COMMUNITY VOICE</span>
            <h2 className="section-title">Loved by Families Across Tamil Nadu</h2>
            <p className="section-desc">
              Real feedback from households who enjoy SHIVALA products on their daily dining tables.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="shivala-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', color: 'var(--secondary)', marginBottom: '0.75rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#C59B27" color="#C59B27" />
                  ))}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontStyle: 'italic', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  "{t.text}"
                </p>
                <div style={{ borderTop: '1px dashed var(--border-light)', paddingTop: '0.75rem' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--primary)', display: 'block' }}>{t.name}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.city}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.78rem', color: 'var(--text-light)' }}>
            * Note: Demonstration reviews structured for brand presentation.
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM / SOCIAL GRID */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-header">
            <span className="section-subtitle">GET INSPIRED</span>
            <h2 className="section-title">Follow the SHIVALA Journey</h2>
            <p className="section-desc">Tag @shivalabrand on Instagram to share your authentic family dining moments.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            <img src="/assets/appalam.jpg" alt="SHIVALA Appalam moments" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
            <img src="/assets/vathal.jpg" alt="SHIVALA Vathal preparation" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
            <img src="/assets/hero_banner.jpg" alt="SHIVALA Semiya dish" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
            <img src="/assets/family_story.jpg" alt="SHIVALA Packing care" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
          </div>

          <button className="btn-secondary" style={{ margin: '0 auto' }}>
            Follow @shivalabrand
          </button>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Bring SHIVALA Home.
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--secondary-light)', marginBottom: '2rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
            Experience authentic taste, crisp appalams, and traditional family products delivered straight to your door.
          </p>
          <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }} onClick={() => navigateTo('shop')}>
            Shop Now <ArrowRight size={20} />
          </button>
        </div>
      </section>

    </div>
  );
};
