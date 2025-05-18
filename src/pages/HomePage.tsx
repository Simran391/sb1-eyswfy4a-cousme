import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { featuredProducts, trendingProducts } from '../data/productData';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 hero-image"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl animate-slide-in-bottom">
            <h1 className="text-white font-bold mb-6">ELEGANCE REDEFINED</h1>
            <p className="text-white text-lg md:text-xl mb-8">Discover our latest collection of timeless designs for the bold and the beautiful</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/products?category=women" className="btn btn-primary min-w-40">SHOP WOMEN</Link>
              <Link to="/products?category=men" className="btn btn-secondary min-w-40">SHOP MEN</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-center mb-16">FEATURED COLLECTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="relative h-96 md:h-128 overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Women's Collection" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                <div className="text-center">
                  <h3 className="text-white text-3xl font-semibold mb-4">WOMEN</h3>
                  <Link 
                    to="/products?category=women" 
                    className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-128 overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Men's Collection" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                <div className="text-center">
                  <h3 className="text-white text-3xl font-semibold mb-4">MEN</h3>
                  <Link 
                    to="/products?category=men" 
                    className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="mb-4">NEW ARRIVALS</h2>
              <p className="mb-6 text-neutral-600">Discover our latest styles designed for the modern trendsetter. Bold designs that make a statement.</p>
              <Link to="/products?collection=new" className="btn btn-primary flex items-center space-x-2">
                <span>SHOP NEW ARRIVALS</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="New Arrivals" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2>FEATURED PRODUCTS</h2>
            <Link 
              to="/products?collection=featured" 
              className="flex items-center text-[#d4af37] hover:underline"
            >
              <span className="mr-2">View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2>TRENDING NOW</h2>
            <Link 
              to="/products?collection=trending" 
              className="flex items-center text-[#d4af37] hover:underline"
            >
              <span className="mr-2">View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trendingProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.pexels.com/photos/7691063/pexels-photo-7691063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Story" 
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-16">
              <h2 className="mb-6">OUR STORY</h2>
              <p className="mb-4 text-neutral-700">
                Founded on the principles of timeless elegance and bold expression, Royal Cousme creates clothing that empowers individuals to showcase their unique style with confidence.
              </p>
              <p className="mb-6 text-neutral-700">
                Each piece in our collection is crafted with attention to detail, using premium materials that ensure both comfort and durability. We believe in fashion that stands the test of time, both in quality and design.
              </p>
              <Link to="/about" className="btn btn-secondary">LEARN MORE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-16">FOLLOW US ON INSTAGRAM</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <a 
                href="https://instagram.com" 
                key={index}
                className="relative overflow-hidden group aspect-square"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src={`https://images.pexels.com/photos/${[6069552, 5559986, 1043474, 10679171, 7691063, 935985][index]}/pexels-photo-${[6069552, 5559986, 1043474, 10679171, 7691063, 935985][index]}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">@royalcousme</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4">JOIN OUR NEWSLETTER</h2>
          <p className="mb-8 max-w-2xl mx-auto text-neutral-400">
            Subscribe to our newsletter to receive exclusive updates, special offers, and early access to new collections.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 focus:outline-none bg-neutral-800 border-none"
                required
              />
              <button 
                type="submit" 
                className="bg-[#d4af37] text-white px-6 py-3 font-medium hover:bg-[#c8a52b] transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;