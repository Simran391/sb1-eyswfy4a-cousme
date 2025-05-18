import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ChevronDown, User, Heart, Search } from 'lucide-react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  toggleCart: () => void;
  cartItemsCount: number;
}

const Header: React.FC<HeaderProps> = ({ toggleCart, cartItemsCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || !isHomePage 
          ? 'bg-white text-black shadow-md py-2' 
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold">
            <Link to="/" className="flex items-center">
              ROYAL COUSME
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <div className="dropdown group">
              <Link to="/products" className="nav-link flex items-center">
                WOMEN <ChevronDown size={16} className="ml-1" />
              </Link>
              <div className="dropdown-menu">
                <div className="p-4">
                  <Link to="/products?category=women-dresses" className="block py-2 hover:text-[#d4af37]">Dresses</Link>
                  <Link to="/products?category=women-tops" className="block py-2 hover:text-[#d4af37]">Tops</Link>
                  <Link to="/products?category=women-bottoms" className="block py-2 hover:text-[#d4af37]">Bottoms</Link>
                  <Link to="/products?category=women-outerwear" className="block py-2 hover:text-[#d4af37]">Outerwear</Link>
                </div>
              </div>
            </div>
            <div className="dropdown group">
              <Link to="/products" className="nav-link flex items-center">
                MEN <ChevronDown size={16} className="ml-1" />
              </Link>
              <div className="dropdown-menu">
                <div className="p-4">
                  <Link to="/products?category=men-shirts" className="block py-2 hover:text-[#d4af37]">Shirts</Link>
                  <Link to="/products?category=men-pants" className="block py-2 hover:text-[#d4af37]">Pants</Link>
                  <Link to="/products?category=men-outerwear" className="block py-2 hover:text-[#d4af37]">Outerwear</Link>
                  <Link to="/products?category=men-accessories" className="block py-2 hover:text-[#d4af37]">Accessories</Link>
                </div>
              </div>
            </div>
            <Link to="/products?collection=new" className="nav-link">NEW</Link>
            <Link to="/products?collection=featured" className="nav-link">FEATURED</Link>
            <Link to="/products?collection=sale" className="nav-link">SALE</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block">
              <Search size={20} />
            </button>
            <button className="hidden md:block">
              <User size={20} />
            </button>
            <button className="hidden md:block">
              <Heart size={20} />
            </button>
            <button 
              className="relative" 
              onClick={toggleCart}
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden" 
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;