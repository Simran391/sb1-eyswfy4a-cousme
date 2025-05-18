import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-xl font-bold mb-6">ROYAL COUSME</h4>
            <p className="text-neutral-400 mb-6">
              Elegance redefined through bold, timeless fashion designed for the confident modern individual.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-[#d4af37] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-[#d4af37] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-[#d4af37] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">SHOP</h4>
            <ul className="space-y-3">
              <li><Link to="/products?category=women" className="text-neutral-400 hover:text-white transition-colors">Women</Link></li>
              <li><Link to="/products?category=men" className="text-neutral-400 hover:text-white transition-colors">Men</Link></li>
              <li><Link to="/products?collection=new" className="text-neutral-400 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/products?collection=featured" className="text-neutral-400 hover:text-white transition-colors">Featured</Link></li>
              <li><Link to="/products?collection=sale" className="text-neutral-400 hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">INFORMATION</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-neutral-400 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">NEWSLETTER</h4>
            <p className="text-neutral-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-neutral-800 border-none text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#d4af37] px-4 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Royal Cousme. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="American Express" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;