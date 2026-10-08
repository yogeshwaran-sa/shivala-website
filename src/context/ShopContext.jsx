import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/productsData';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Navigation & URL Routing state
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home';
    if (path.startsWith('product/')) return 'product-detail';
    return ['our-story', 'products', 'shop', 'wholesale', 'contact', 'account', 'cart', 'wishlist'].includes(path) ? path : 'home';
  });

  const [activeProductSlug, setActiveProductSlug] = useState(() => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (path.startsWith('product/')) {
      return path.split('product/')[1] || PRODUCTS[0].slug;
    }
    return PRODUCTS[0].slug;
  });

  // Shopping state (Cart)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('shivala_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[0], selectedWeight: '200g', quantity: 2 },
        { product: PRODUCTS[1], selectedWeight: '150g', quantity: 1 }
      ];
    } catch {
      return [
        { product: PRODUCTS[0], selectedWeight: '200g', quantity: 2 }
      ];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('shivala_wishlist');
      return saved ? JSON.parse(saved) : [PRODUCTS[0].id, PRODUCTS[2].id];
    } catch {
      return [PRODUCTS[0].id];
    }
  });

  // Recently Viewed state
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      const saved = localStorage.getItem('shivala_recently_viewed');
      return saved ? JSON.parse(saved) : [PRODUCTS[0].id, PRODUCTS[1].id, PRODUCTS[2].id];
    } catch {
      return [PRODUCTS[0].id];
    }
  });

  // Dynamic Products state (supports adding customer reviews live)
  const [productsList, setProductsList] = useState(PRODUCTS);

  // Modals & UI States
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [lastOrderDetails, setLastOrderDetails] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Wholesale Modal State
  const [isWholesaleModalOpen, setIsWholesaleModalOpen] = useState(false);
  const [wholesaleProduct, setWholesaleProduct] = useState(null);

  // User Account State
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('shivala_user');
      return saved ? JSON.parse(saved) : {
        isLoggedIn: true,
        name: 'Sundaram & Family',
        phone: '+91 98400 12345',
        email: 'family@shivalabrand.com',
        addresses: [
          {
            id: 1,
            title: 'Home Address',
            name: 'Sundaram S.',
            line1: 'No. 42, Temple Grain Street, West Car Street',
            city: 'Madurai',
            state: 'Tamil Nadu',
            pincode: '625001',
            isDefault: true
          }
        ],
        orders: [
          {
            id: 'SHV-94821',
            date: '2026-10-02',
            total: 310,
            status: 'Delivered',
            items: [
              { name: 'SHIVALA Special Urad Dal Appalam (200g)', qty: 2, price: 130 },
              { name: 'SHIVALA Sun-Dried Sundakkai Vathal (150g)', qty: 1, price: 95 },
              { name: 'SHIVALA Small Onion Seasoning Vadagam (100g)', qty: 1, price: 85 }
            ]
          }
        ]
      };
    } catch {
      return { isLoggedIn: false };
    }
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('shivala_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('shivala_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('shivala_recently_viewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  useEffect(() => {
    localStorage.setItem('shivala_user', JSON.stringify(user));
  }, [user]);

  // Track recently viewed products
  const addRecentlyViewed = (productId) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(id => id !== productId);
      return [productId, ...filtered].slice(0, 8);
    });
  };

  // Route Navigation
  const navigateTo = (page, param = null) => {
    if (page === 'product-detail' || page === 'product') {
      setCurrentPage('product-detail');
      const slug = typeof param === 'string' ? param : (param?.slug || PRODUCTS[0].slug);
      setActiveProductSlug(slug);
      const targetProd = productsList.find(p => p.slug === slug || p.id === param?.id);
      if (targetProd) addRecentlyViewed(targetProd.id);
      window.history.pushState({}, '', `/product/${slug}`);
    } else {
      setCurrentPage(page);
      const url = page === 'home' ? '/' : `/${page}`;
      window.history.pushState({}, '', url);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home';
      if (path.startsWith('product/')) {
        setCurrentPage('product-detail');
        setActiveProductSlug(path.split('product/')[1] || PRODUCTS[0].slug);
      } else {
        setCurrentPage(['our-story', 'products', 'shop', 'wholesale', 'contact', 'account', 'cart', 'wishlist'].includes(path) ? path : 'home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Toast Handler
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Cart Operations
  const addToCart = (product, selectedWeight = null, qty = 1) => {
    const weight = selectedWeight || product.weight;
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedWeight === weight
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += qty;
        return updated;
      } else {
        return [...prev, { product, selectedWeight: weight, quantity: qty }];
      }
    });
    showToast(`Added ${product.name} (${weight}) to Cart!`);
  };

  // Buy Now Operation
  const buyNow = (product, selectedWeight = null, qty = 1) => {
    addToCart(product, selectedWeight, qty);
    setIsCheckoutOpen(true);
  };

  const removeFromCart = (productId, selectedWeight) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedWeight === selectedWeight)));
    showToast('Item removed from Cart', 'info');
  };

  const updateQuantity = (productId, selectedWeight, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === productId && item.selectedWeight === selectedWeight) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  // Wishlist Operations
  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      const updated = exists ? prev.filter(id => id !== productId) : [...prev, productId];
      showToast(exists ? 'Removed from Wishlist' : 'Saved to Wishlist!', exists ? 'info' : 'success');
      return updated;
    });
  };

  // Open Wholesale Enquiry
  const openWholesaleModal = (product = null) => {
    setWholesaleProduct(product);
    setIsWholesaleModalOpen(true);
  };

  // Add Product Review
  const addReview = (productId, reviewObj) => {
    setProductsList(prev => prev.map(p => {
      if (p.id === productId) {
        const newReviews = [reviewObj, ...(p.reviews || [])];
        return {
          ...p,
          reviews: newReviews,
          reviewsCount: (p.reviewsCount || 0) + 1
        };
      }
      return p;
    }));
    showToast('Thank you for submitting your review!');
  };

  // Calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const shippingFee = cartSubtotal >= 499 || cartSubtotal === 0 ? 0 : 40;
  const cartGrandTotal = cartSubtotal + shippingFee;

  // Checkout & Order Placement
  const placeOrder = (customerDetails) => {
    const newOrder = {
      id: `SHV-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      total: cartGrandTotal,
      status: 'Confirmed',
      items: cart.map(i => ({
        name: `${i.product.name} (${i.selectedWeight})`,
        qty: i.quantity,
        price: i.product.price * i.quantity
      })),
      shipping: customerDetails
    };

    setLastOrderDetails(newOrder);
    setCart([]);
    setIsCheckoutOpen(false);
    setIsOrderSuccessOpen(true);

    if (user.isLoggedIn) {
      setUser(prev => ({
        ...prev,
        orders: [newOrder, ...prev.orders]
      }));
    }
  };

  const loginUser = (name, phone, email) => {
    setUser({
      isLoggedIn: true,
      name: name || 'Valued Customer',
      phone: phone || '+91 98765 43210',
      email: email || 'customer@shivalabrand.com',
      addresses: [
        {
          id: 1,
          title: 'Home Address',
          name: name || 'Valued Customer',
          line1: 'No. 15, Lakeview Main Road',
          city: 'Chennai',
          state: 'Tamil Nadu',
          pincode: '600028',
          isDefault: true
        }
      ],
      orders: user.orders || []
    });
    showToast('Successfully Logged In! Welcome to SHIVALA.');
  };

  const logoutUser = () => {
    setUser({ isLoggedIn: false });
    showToast('Logged out successfully', 'info');
  };

  // Get active product details
  const currentProduct = productsList.find(p => p.slug === activeProductSlug) || productsList[0];

  return (
    <ShopContext.Provider value={{
      currentPage,
      activeProductSlug,
      currentProduct,
      productsList,
      navigateTo,
      cart,
      addToCart,
      buyNow,
      removeFromCart,
      updateQuantity,
      cartSubtotal,
      cartItemCount,
      shippingFee,
      cartGrandTotal,
      wishlist,
      toggleWishlist,
      recentlyViewed,
      addRecentlyViewed,
      quickViewProduct,
      setQuickViewProduct,
      isCartOpen,
      setIsCartOpen,
      isSearchOpen,
      setIsSearchOpen,
      isCheckoutOpen,
      setIsCheckoutOpen,
      isOrderSuccessOpen,
      setIsOrderSuccessOpen,
      lastOrderDetails,
      isWholesaleModalOpen,
      setIsWholesaleModalOpen,
      wholesaleProduct,
      openWholesaleModal,
      addReview,
      toasts,
      showToast,
      user,
      loginUser,
      logoutUser,
      placeOrder
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
