import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { formatPrice } from '../../utils/formatters';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button 
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>
            
            {cartItems.length === 0 ? (
              <div className="flex-grow flex flex-col items-center justify-center p-8">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <p className="text-lg font-medium mb-2">Your cart is empty</p>
                <p className="text-gray-500 text-center mb-6">Looks like you haven't added anything to your cart yet</p>
                <button 
                  onClick={onClose} 
                  className="btn btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-grow overflow-y-auto p-4">
                  {cartItems.map(item => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex border-b py-4">
                      <div className="w-20 h-24 bg-gray-100 mr-4">
                        <img 
                          src={item.images[0]} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-500 hover:text-black"
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        
                        {item.size && <p className="text-sm text-gray-600 mb-1">Size: {item.size}</p>}
                        {item.color && <p className="text-sm text-gray-600 mb-1">Color: {item.color}</p>}
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border">
                            <button 
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-2 py-1 border-r"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-4 py-1">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 border-l"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-semibold">
                            {formatPrice(item.salePrice || item.price)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-bold">{formatPrice(getCartTotal())}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout</p>
                  <Link 
                    to="/checkout" 
                    className="btn btn-primary w-full mb-2"
                    onClick={onClose}
                  >
                    Checkout
                  </Link>
                  <button 
                    onClick={onClose}
                    className="btn btn-secondary w-full"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;