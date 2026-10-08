import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, ShieldCheck, Heart, Award, TrendingUp, Users, Target, Compass } from 'lucide-react';

export const StoryPage = () => {
  const { navigateTo } = useShop();

  return (
    <div className="story-page">
      
      {/* Hero */}
      <section className="section-padding" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(197, 155, 39, 0.15) 0%, transparent 70%)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="hero-tag">THE SHIVALA HERITAGE</span>
          <h1 style={{ fontSize: '3.2rem', color: 'var(--primary)', marginBottom: '1.25rem' }}>
            From a Family Business to a Brand for Every Home.
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
            Rooted in Tamil Nadu tradition, SHIVALA was built on decades of direct customer trust, uncompromised raw material selection, and honest family values.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR EVOLUTION</span>
            <h2 className="section-title">The SHIVALA Journey</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', position: 'relative' }}>
            <div className="shivala-card" style={{ padding: '2rem', borderTop: '4px solid var(--secondary)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>STEP 1 • START</span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', margin: '0.5rem 0' }}>Family Bulk Sourcing</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Sourcing raw pulses, sun-dried berries, and grains in bulk directly at local farm origins with strict quality checks.
              </p>
            </div>

            <div className="shivala-card" style={{ padding: '2rem', borderTop: '4px solid var(--primary)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>STEP 2 • GROWTH</span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', margin: '0.5rem 0' }}>Community Trust</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Weighing, repacking, and directly supplying local families, neighborhood mess facilities, and community kitchens.
              </p>
            </div>

            <div className="shivala-card" style={{ padding: '2rem', borderTop: '4px solid var(--secondary)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>STEP 3 • TODAY</span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', margin: '0.5rem 0' }}>SHIVALA Brand Launch</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Transforming into a professional FMCG consumer brand with eco-friendly modern packaging, retail reach, and digital ordering.
              </p>
            </div>

            <div className="shivala-card" style={{ padding: '2rem', borderTop: '4px solid var(--accent-maroon)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-maroon)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>STEP 4 • FUTURE</span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', margin: '0.5rem 0' }}>Pan-India Distribution</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Expanding into a master consumer brand spanning multiple household food, pooja, and living product categories nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="section-padding" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-subtitle">PURPOSE & PASSION</span>
              <h2 className="section-title">Why We Started</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                For decades, Indian families relied on trusted local vendors who knew every grain, every harvest, and every recipe. As modern life accelerated, mass-market products often lost that personal care and authenticity.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                SHIVALA was born to bridge this gap: preserving the integrity of traditional Tamil Nadu preparations while delivering world-class packaging hygiene, reliability, and convenience to every dining room.
              </p>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="/assets/family_story.jpg" alt="SHIVALA Founders & Team" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Grid */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE PILLARS OF SHIVALA</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {[
              { title: 'Trust', desc: 'Honest weights, transparent pricing, and direct family accountability in every package.', icon: ShieldCheck },
              { title: 'Quality', desc: 'Rigorous ingredient selection without synthetic additives or artificial preservatives.', icon: Award },
              { title: 'Integrity', desc: 'Doing what is right for customer health and long-term community relationships.', icon: Heart },
              { title: 'Family', desc: 'Treating every customer like an extended member of the SHIVALA household.', icon: Users },
              { title: 'Consistency', desc: 'Ensuring identical crispness, taste, and freshness month after month.', icon: Target },
              { title: 'Growth', desc: 'Continuously innovating new consumer categories while honoring regional roots.', icon: TrendingUp }
            ].map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="shivala-card" style={{ padding: '1.75rem' }}>
                  <div style={{ color: 'var(--secondary)', marginBottom: '0.75rem' }}>
                    <IconComp size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* From Tamil Nadu With Care */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>HERITAGE ROOTED</span>
          <h2 className="section-title">From Tamil Nadu, With Care</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
            Tamil Nadu's culinary culture is celebrated for its sun-dried vathals, crisp papadums, and fragrant spices. We honor this rich culinary heritage through sustainable, hygienic packaging without compromising on traditional flavors.
          </p>
          <div className="font-tamil" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
            தமிழ்நாட்டின் சுவையும் தரமும் உங்கள் குடும்பத்திற்கு!
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding" style={{ background: 'var(--primary-dark)', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)' }}>
              <Compass size={36} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.7' }}>
                “To build a trusted Indian consumer brand that brings quality everyday products to homes across India.”
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)' }}>
              <Target size={36} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.7' }}>
                “To combine traditional business values with modern packaging, technology and customer experience.”
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
