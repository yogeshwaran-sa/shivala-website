import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

export const Toast = () => {
  const { toasts } = useShop();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className="toast">
          {t.type === 'info' ? (
            <Info size={18} style={{ color: 'var(--secondary)' }} />
          ) : (
            <CheckCircle2 size={18} style={{ color: 'var(--secondary)' }} />
          )}
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
};
