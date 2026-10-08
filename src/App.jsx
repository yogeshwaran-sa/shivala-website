import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';
import { WholesaleModal } from './components/WholesaleModal';
import { StickyContactBar } from './components/StickyContactBar';

// Pages
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { ProductsPage } from './pages/ProductsPage';
import { ShopPage } from './pages/ShopPage';
import { WholesalePage } from './pages/WholesalePage';
import { ContactPage } from './pages/ContactPage';
import { AccountPage } from './pages/AccountPage';
import { CartPage } from './pages/CartPage';
import { WishlistPage } from './pages/WishlistPage';
import { ProductDetailPage } from './pages/ProductDetailPage';

import './App.css';

const MainRouter = () => {
  const { currentPage } = useShop();

  const renderPage = () => {
    switch (currentPage) {
      case 'our-story':
        return <StoryPage />;
      case 'products':
        return <ProductsPage />;
      case 'shop':
        return <ShopPage />;
      case 'wholesale':
        return <WholesalePage />;
      case 'contact':
        return <ContactPage />;
      case 'account':
        return <AccountPage />;
      case 'cart':
        return <CartPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>
      <Footer />
      <MobileBottomNav />
      <StickyContactBar />

      {/* Global Modals & Drawers */}
      <ProductQuickViewModal />
      <CartDrawer />
      <CheckoutModal />
      <OrderConfirmationModal />
      <WholesaleModal />
      <SearchModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainRouter />
    </ShopProvider>
  );
}
