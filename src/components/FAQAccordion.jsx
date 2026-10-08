import React, { useState } from 'react';
import { FAQS } from '../data/productsData';
import { ChevronDown } from 'lucide-react';

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--primary)'
              }}
            >
              <span>{faq.q}</span>
              <ChevronDown 
                size={20} 
                style={{ 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s ease',
                  color: 'var(--secondary)'
                }} 
              />
            </button>

            {isOpen && (
              <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', borderTop: '1px dashed var(--border-light)', paddingTop: '0.9rem' }}>
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
