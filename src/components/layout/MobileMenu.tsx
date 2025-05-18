import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight, Search, User, Heart } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'visible-menu' : 'hidden-menu'}`}>
      <div className="flex justify-end p-4 absolute top-0 right-0">
        <button onClick={onClose} aria-label="Close menu">
          <X size={24} />
        </button>
      </div>
      
      <div className="flex space-x-4 mb-8 justify-center">
        <button className="p-2">
          <Search size={20} />
        </button>
        <button className="p-2">
          <User size={20} />
        </button>
        <button className="p-2">
          <Heart size={20} />
        </button>
      </div>
      
      <nav className="flex flex-col space-y-4">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="font-bold text-lg mb-2">WOMEN</h3>
          <ul className="space-y-3 pl-4">
            <li><Link to="/products?category=women-dresses" className="flex items-center justify-between" onClick={onClose}>Dresses <ChevronRight size={16} /></Link></li>
            <li><Link to="/products?category=women-tops" className="flex items-center justify-between" onClick={onClose}>Tops <ChevronRight size={16} /></Link></li>
            <li><Link to="/products?category=women-bottoms" className="flex items-center justify-between" onClick={onClose}>Bottoms <ChevronRight size={16} /></Link></li>
            <li><Link to="/products?category=women-outerwear" className="flex items-center justify-between" onClick={onClose}>Outerwear <ChevronRight size={16} /></Link></li>
          </ul>
        </div>
        
        <div className="border-b border-gray-200 pb-4">
          <h3 className="font-bold text-lg mb-2">MEN</h3>
          <ul className="space-y-3 pl-4">
            <li><Link to="/products?category=men-shirts" className="flex items-center justify-between" onClick={onClose}>Shirts <ChevronRight size={16} /></Link></li>
            <li><Link to="/products?category=men-pants" className="flex items-center justify-between" onClick={onClose}>Pants <ChevronRight size={16} /></Link></li>
            <li><Link to="/products?category=men-outerwear" className="flex items-center justify-between" onClick={onClose}>Outerwear <ChevronRight size={16} /></Link></li>
            <li><Link to="/products?category=men-accessories" className="flex items-center justify-between" onClick={onClose}>Accessories <ChevronRight size={16} /></Link></li>
          </ul>
        </div>
        
        <Link to="/products?collection=new" className="font-bold py-2 border-b border-gray-200" onClick={onClose}>NEW</Link>
        <Link to="/products?collection=featured" className="font-bold py-2 border-b border-gray-200" onClick={onClose}>FEATURED</Link>
        <Link to="/products?collection=sale" className="font-bold py-2 border-b border-gray-200" onClick={onClose}>SALE</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;