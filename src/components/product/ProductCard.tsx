import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/productTypes';
import { formatPrice } from '../../utils/formatters';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="product-card relative overflow-hidden mb-4">
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="product-card-overlay"></div>
        <button 
          className="quick-add flex items-center justify-center space-x-2"
          onClick={handleQuickAdd}
          aria-label="Add to cart"
        >
          <ShoppingBag size={16} />
          <span>ADD TO CART</span>
        </button>
        {product.salePrice && (
          <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 text-xs">
            SALE
          </div>
        )}
      </div>
      <h3 className="font-medium mb-1 text-sm transition-colors duration-300 group-hover:text-[#d4af37]">{product.name}</h3>
      <div className="flex items-center">
        {product.salePrice ? (
          <>
            <span className="text-sm font-semibold mr-2">{formatPrice(product.salePrice)}</span>
            <span className="text-sm text-gray-500 line-through">{formatPrice(product.price)}</span>
          </>
        ) : (
          <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;