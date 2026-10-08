import React from 'react';
import { useShop } from '../context/ShopContext';
import { Home, Package, Search, ShoppingBag, User } from 'lucide-react';

export const MobileBottomNav = () => {
  const { currentPage, navigateTo, cartItemCount, setIsCartOpen, setIsSearchOpen } = useShop();

  return (
    <div className="mobile-bottom-nav">
      <button 
        className={`mobile-nav-item ${currentPage === 'home' ? 'active' : ''}`}
        onClick={() => navigateTo('home')}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button 
        className={`mobile-nav-item ${currentPage === 'products' || currentPage === 'shop' ? 'active' : ''}`}
        onClick={() => navigateTo('shop')}
      >
        <Package size={20} />
        <span>Shop</span>
      </button>

      <button 
        className="mobile-nav-item"
        onClick={() => setIsSearchOpen(true)}
      >
        <Search size={20} />
        <span>Search</span>
      </button>

      <button 
        className="mobile-nav-item"
        onClick={() => setIsCartOpen(true)}
      >
        <div style={{ position: 'relative' }}>
          <ShoppingBag size={20} />
          {cartItemCount > 0 && (
            <span className="nav-badge" style={{ top: '-6px', right: '-8px' }}>{cartItemCount}</span>
          )}
        </div>
        <span>Cart</span>
      </button>

      <button 
        className={`mobile-nav-item ${currentPage === 'account' ? 'active' : ''}`}
        onClick={() => navigateTo('account')}
      >
        <User size={20} />
        <span>Account</span>
      </button>
    </div>
  );
};
