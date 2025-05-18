import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ArrowRight, ChevronLeft, Minus, Plus, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';
import { getAllProducts } from '../data/productData';
import { formatPrice } from '../utils/formatters';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const products = getAllProducts();
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  if (!product) {
    return (
      <div className="container-custom py-24 text-center">
        <h2 className="mb-6">Product Not Found</h2>
        <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (product.hasVariants && (!selectedSize || !selectedColor)) {
      alert('Please select a size and color');
      return;
    }
    
    addToCart(product, quantity, selectedSize, selectedColor);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // Get similar products, excluding the current one
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="pt-20">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex text-sm">
            <li className="mr-2">
              <Link to="/" className="text-gray-500 hover:text-black">Home</Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="mr-2">
              <Link 
                to={`/products?category=${product.category}`}
                className="text-gray-500 hover:text-black capitalize"
              >
                {product.category}
              </Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="text-gray-900 truncate">{product.name}</li>
          </ol>
        </nav>
        
        <div className="flex flex-col lg:flex-row -mx-4">
          {/* Product Images */}
          <div className="lg:w-2/3 px-4 mb-8 lg:mb-0">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="md:w-1/6 order-2 md:order-1">
                <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`product-gallery-thumbnail flex-shrink-0 w-16 h-20 ${
                        activeImage === index ? 'active' : ''
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Main Image */}
              <div className="md:w-5/6 order-1 md:order-2">
                <div className="zoom-image-container">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-auto zoom-image"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="lg:w-1/3 px-4">
            <div className="sticky top-24">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">{product.name}</h1>
              
              <div className="flex items-baseline mb-4">
                {product.salePrice ? (
                  <>
                    <span className="text-xl font-bold mr-3">
                      {formatPrice(product.salePrice)}
                    </span>
                    <span className="text-gray-500 line-through">
                      {formatPrice(product.price)}
                    </span>
                  </>
                ) : (
                  <span className="text-xl font-bold">{formatPrice(product.price)}</span>
                )}
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {product.hasVariants && (
                <>
                  {/* Size Selection */}
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <label className="font-medium">Size</label>
                      <button className="text-sm text-gray-500 underline">Size Guide</button>
                    </div>
                    <div className="flex flex-wrap gap-2 size-selector">
                      {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                        <div key={size}>
                          <input
                            type="radio"
                            id={`size-${size}`}
                            name="size"
                            className="sr-only"
                            value={size}
                            checked={selectedSize === size}
                            onChange={() => setSelectedSize(size)}
                          />
                          <label
                            htmlFor={`size-${size}`}
                            className={`flex items-center justify-center h-10 w-12 border cursor-pointer ${
                              selectedSize === size ? 'bg-black text-white' : 'hover:border-black'
                            }`}
                          >
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Color Selection */}
                  <div className="mb-6">
                    <label className="block font-medium mb-2">Color</label>
                    <div className="flex gap-3 color-selector">
                      {['Black', 'White', 'Beige', 'Navy'].map(color => (
                        <div key={color}>
                          <input
                            type="radio"
                            id={`color-${color}`}
                            name="color"
                            className="sr-only"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => setSelectedColor(color)}
                          />
                          <label
                            htmlFor={`color-${color}`}
                            className={`block h-8 w-8 rounded-full cursor-pointer transition-all duration-200 ${
                              selectedColor === color ? 'ring-2 ring-black ring-offset-2' : ''
                            }`}
                            style={{ 
                              backgroundColor: 
                                color.toLowerCase() === 'black' ? '#000' : 
                                color.toLowerCase() === 'white' ? '#fff' : 
                                color.toLowerCase() === 'navy' ? '#000080' : 
                                '#f5f5dc'
                            }}
                            title={color}
                          ></label>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <label className="block font-medium mb-2">Quantity</label>
                <div className="flex items-center border border-gray-300 w-32">
                  <button
                    onClick={decreaseQuantity}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="flex-grow text-center py-2">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Add to Cart & Wishlist */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-grow"
                >
                  ADD TO CART
                </button>
                <button
                  className="btn btn-secondary p-0 w-12 flex items-center justify-center"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>
              
              {/* Product Information */}
              <div className="border-t border-gray-200 py-4">
                <div className="flex flex-wrap justify-between text-sm">
                  <span className="mr-4 mb-2">SKU: {product.sku}</span>
                  <button
                    className="flex items-center text-gray-600 hover:text-black"
                    aria-label="Share product"
                  >
                    <Share2 size={16} className="mr-1" /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Features */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-3">Premium Materials</h3>
              <p className="text-gray-600">Crafted from high-quality, sustainable fabrics for comfort and durability.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-3">Timeless Design</h3>
              <p className="text-gray-600">Elegant silhouettes and refined details that never go out of style.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-3">Perfect Fit</h3>
              <p className="text-gray-600">Meticulously tailored to flatter all body types and ensure maximum comfort.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Products */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2>YOU MAY ALSO LIKE</h2>
            <Link 
              to="/products" 
              className="flex items-center text-[#d4af37] hover:underline"
            >
              <span className="mr-2">View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {similarProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Back to Category */}
      <div className="container-custom pb-16">
        <Link 
          to={`/products?category=${product.category}`} 
          className="flex items-center text-gray-600 hover:text-black"
        >
          <ChevronLeft size={16} className="mr-2" />
          <span>Back to {product.category}</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;