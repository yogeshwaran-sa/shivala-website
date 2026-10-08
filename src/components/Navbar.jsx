import React from 'react';
import { useShop } from '../context/ShopContext';
import { Search, ShoppingBag, Heart, User, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const { 
    currentPage, 
    navigateTo, 
    cartItemCount, 
    wishlist, 
    setIsCartOpen, 
    setIsSearchOpen,
    user 
  } = useShop();

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span className="top-bar-text-left">
            🌿 Traditional Tamil Nadu Heritage • Authentic Family FMCG Brand
          </span>
          <span>
            ✨ <strong>Free Delivery</strong> on orders above ₹499 • Bulk Wholesale Available
          </span>
          <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('wholesale')}>
            Partner with Us →
          </span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          {/* Logo & Brand Name */}
          <div className="brand-logo-container" onClick={() => navigateTo('home')}>
            <img 
              src="/assets/full logo.png" 
              alt="SHIVALA Brand Logo" 
              className="brand-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="brand-title-group">
              <span className="brand-main-name">SHIVALA</span>
              <span className="brand-sub-tag">ஷிவாலா • Trusted Products for Every Home</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <button 
                className={`nav-link-item ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => navigateTo('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-item ${currentPage === 'our-story' ? 'active' : ''}`}
                onClick={() => navigateTo('our-story')}
              >
                Our Story
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-item ${currentPage === 'products' ? 'active' : ''}`}
                onClick={() => navigateTo('products')}
              >
                Products
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-item ${currentPage === 'shop' ? 'active' : ''}`}
                onClick={() => navigateTo('shop')}
              >
                Shop
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-item ${currentPage === 'wholesale' ? 'active' : ''}`}
                onClick={() => navigateTo('wholesale')}
              >
                Wholesale
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-item ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => navigateTo('contact')}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Right Nav Action Buttons */}
          <div className="nav-actions">
            {/* Search Trigger */}
            <button 
              className="nav-icon-btn" 
              onClick={() => setIsSearchOpen(true)}
              title="Search SHIVALA products"
            >
              <Search size={20} />
            </button>

            {/* Wishlist Link */}
            <button 
              className="nav-icon-btn" 
              onClick={() => navigateTo('wishlist')}
              title="My Wishlist"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="nav-badge">{wishlist.length}</span>
              )}
            </button>

            {/* Cart Drawer Trigger */}
            <button 
              className="nav-icon-btn" 
              onClick={() => setIsCartOpen(true)}
              title="View Shopping Cart"
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="nav-badge">{cartItemCount}</span>
              )}
            </button>

            {/* Account Dashboard Link */}
            <button 
              className="nav-icon-btn" 
              onClick={() => navigateTo('account')}
              title={user.isLoggedIn ? user.name : 'Account Login'}
            >
              <User size={20} />
            </button>

            {/* Primary CTA */}
            <button 
              className="btn-primary desktop-cta-btn" 
              onClick={() => navigateTo('shop')}
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
            >
              Shop Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
