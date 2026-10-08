export const BUSINESS_CONFIG = {
  BUSINESS_NAME: "SHIVALA",
  TAGLINE: "Trusted Products for Every Home",
  SUB_TAGLINE: "Traditional South Indian FMCG & Consumer Brand",
  PHONE_NUMBER: "+91 98400 12345",
  WHATSAPP_NUMBER: "+919840012345",
  EMAIL: "hello@shivalabrand.com",
  WHOLESALE_EMAIL: "wholesale@shivalabrand.com",
  INSTAGRAM: "https://instagram.com/shivalabrand",
  FACEBOOK: "https://facebook.com/shivalabrand",
  YOUTUBE: "https://youtube.com/shivalabrand",
  ADDRESS: "No. 42, Temple Grain Street, West Car Street, Madurai, Tamil Nadu 625001",
  ESTABLISHED_YEAR: "1994",
  FREE_SHIPPING_THRESHOLD: 499,
  STANDARD_SHIPPING_FEE: 40
};

export const getWhatsAppOrderLink = (productName, weight, quantity = 1) => {
  const message = `Hello ${BUSINESS_CONFIG.BUSINESS_NAME},\n\nI would like to order:\n\nProduct: ${productName}\nPack Size: ${weight || 'Standard'}\nQuantity: ${quantity}\n\nPlease share the total price and delivery details.\n\nThank you.`;
  return `https://wa.me/${BUSINESS_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppCartLink = (cartItems, totalAmount) => {
  const itemsText = cartItems.map((item, index) => 
    `${index + 1}. ${item.product.name} (${item.selectedWeight}) - Qty: ${item.quantity} - ₹${item.product.price * item.quantity}`
  ).join('\n');

  const message = `Hello ${BUSINESS_CONFIG.BUSINESS_NAME},\n\nI would like to place an order for the following items:\n\n${itemsText}\n\nTotal Estimated Amount: ₹${totalAmount}\n\nPlease confirm order availability and dispatch timeline.\n\nThank you.`;
  return `https://wa.me/${BUSINESS_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppWholesaleLink = (productName = '') => {
  const message = `Hello ${BUSINESS_CONFIG.BUSINESS_NAME},\n\nI am interested in WHOLESALE / BULK ordering for my shop/business.${productName ? `\nProduct of interest: ${productName}` : ''}\n\nPlease share your wholesale catalog and price list.\n\nThank you.`;
  return `https://wa.me/${BUSINESS_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
};

export const getEmailEnquiryLink = (productName) => {
  const subject = `SHIVALA Product Enquiry – ${productName}`;
  const body = `Hello SHIVALA Team,\n\nI would like to inquire about ${productName}.\n\nPlease send me more details regarding product specs, pricing, and availability.\n\nRegards,`;
  return `mailto:${BUSINESS_CONFIG.EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
