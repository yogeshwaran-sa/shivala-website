import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight } from 'lucide-react';

export const CategoryCard = ({ category }) => {
  const { navigateTo } = useShop();

  const handleCategoryClick = () => {
    navigateTo('products');
  };

  return (
    <div className="category-card" onClick={handleCategoryClick}>
      <div className="category-img-container">
        <img 
          src={category.image || '/assets/appalam.jpg'} 
          alt={category.name} 
          className="category-img" 
          loading="lazy"
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 40%, rgba(15, 56, 44, 0.7) 100%)'
        }}></div>
      </div>

      <div className="category-content">
        <h3 className="category-title">{category.name}</h3>
        <p className="category-desc">{category.description}</p>
        <span className="category-link">
          Explore Range <ArrowRight size={15} />
        </span>
      </div>
    </div>
  );
};
