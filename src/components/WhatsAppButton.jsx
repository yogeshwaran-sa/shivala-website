import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappNumber = "+919876543210"; // Placeholder for demonstration
  const defaultMsg = encodeURIComponent("Hello SHIVALA team! I would like to inquire about your consumer products / wholesale orders.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Chat with SHIVALA on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};
