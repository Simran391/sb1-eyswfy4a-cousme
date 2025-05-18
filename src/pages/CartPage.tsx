import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-24 min-h-screen pt-24">
        <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Your Cart</h1>
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center mb-6">
            <ShoppingBag size={64} className="text-gray-300" />
          </div>
          <h2 className="text-xl mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-12 min-h-screen pt-24">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="border-b pb-4 mb-4 hidden md:flex">
            <div className="w-1/2 font-medium">Product</div>
            <div className="w-1/6 font-medium">Price</div>
            <div className="w-1/6 font-medium">Quantity</div>
            <div className="w-1/6 font-medium text-right">Total</div>
          </div>
          
          {cartItems.map(item => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="border-b py-6 flex flex-col md:flex-row">
              {/* Product Info */}
              <div className="flex md:w-1/2 mb-4 md:mb-0">
                <div className="w-24 h-32 bg-gray-100 mr-4">
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">SKU: {item.sku}</p>
                  {item.size && <p className="text-sm text-gray-600 mb-1">Size: {item.size}</p>}
                  {item.color && <p className="text-sm text-gray-600 mb-1">Color: {item.color}</p>}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-black text-sm flex items-center mt-2"
                  >
                    <Trash2 size={14} className="mr-1" /> Remove
                  </button>
                </div>
              </div>
              
              {/* Price */}
              <div className="md:w-1/6 flex items-center">
                <div className="md:hidden font-medium mr-2">Price:</div>
                <div>{formatPrice(item.salePrice || item.price)}</div>
              </div>
              
              {/* Quantity */}
              <div className="md:w-1/6 flex items-center mt-2 md:mt-0">
                <div className="md:hidden font-medium mr-2">Quantity:</div>
                <div className="flex items-center border border-gray-300">
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
              </div>
              
              {/* Total */}
              <div className="md:w-1/6 flex items-center justify-between md:justify-end mt-2 md:mt-0">
                <div className="md:hidden font-medium mr-2">Total:</div>
                <div className="font-semibold">
                  {formatPrice((item.salePrice || item.price) * item.quantity)}
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-8">
            <Link 
              to="/products" 
              className="flex items-center text-gray-600 hover:text-black"
            >
              <ChevronLeft size={16} className="mr-2" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
            </div>
            
            <button className="btn btn-primary w-full mb-4">
              PROCEED TO CHECKOUT
            </button>
            
            {/* Promo Code */}
            <div className="mt-6">
              <label className="block font-medium mb-2">Promo Code</label>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Enter promo code" 
                  className="flex-grow px-4 py-2 border border-r-0 focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button className="bg-black text-white px-4 py-2">
                  APPLY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;