import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { getAllProducts } from '../data/productData';
import { Product } from '../types/productTypes';

const ProductsPage: React.FC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const categoryParam = queryParams.get('category');
  const collectionParam = queryParams.get('collection');
  
  const allProducts = getAllProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [activeFilters, setActiveFilters] = useState<{
    category: string | null;
    collection: string | null;
    price: string | null;
    color: string | null;
    size: string | null;
  }>({
    category: categoryParam,
    collection: collectionParam,
    price: null,
    color: null,
    size: null,
  });
  
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    color: true,
    size: true,
  });
  
  // Filter products based on active filters
  useEffect(() => {
    let results = [...allProducts];
    
    if (activeFilters.category) {
      results = results.filter(product => 
        product.category.toLowerCase().includes(activeFilters.category!.toLowerCase())
      );
    }
    
    if (activeFilters.collection) {
      results = results.filter(product => 
        product.collections.includes(activeFilters.collection!)
      );
    }
    
    if (activeFilters.price) {
      const [min, max] = activeFilters.price.split('-').map(Number);
      results = results.filter(product => {
        const price = product.salePrice || product.price;
        return price >= min && (max ? price <= max : true);
      });
    }
    
    if (activeFilters.color) {
      results = results.filter(product => 
        product.colors && product.colors.includes(activeFilters.color!)
      );
    }
    
    if (activeFilters.size) {
      results = results.filter(product => 
        product.sizes && product.sizes.includes(activeFilters.size!)
      );
    }
    
    setFilteredProducts(results);
  }, [activeFilters, allProducts]);
  
  // Handle filter change
  const handleFilterChange = (filterType: keyof typeof activeFilters, value: string | null) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value === prev[filterType] ? null : value,
    }));
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({
      category: null,
      collection: null,
      price: null,
      color: null,
      size: null,
    });
  };
  
  // Toggle section expansion
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  
  return (
    <div className="pt-20">
      <div className="container-custom py-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">
            {activeFilters.category ? 
              `${activeFilters.category.toUpperCase()} COLLECTION` : 
              activeFilters.collection ? 
                `${activeFilters.collection.toUpperCase()} COLLECTION` : 
                'ALL PRODUCTS'
            }
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of bold, elegant pieces designed to elevate your wardrobe. Each item embodies the Royal Cousme philosophy of refined luxury with a modern edge.
          </p>
        </div>
        
        {/* Active Filters */}
        {(activeFilters.category || activeFilters.collection || activeFilters.price || activeFilters.color || activeFilters.size) && (
          <div className="flex flex-wrap items-center mb-6 gap-2">
            <span className="text-sm font-medium">Active Filters:</span>
            {Object.entries(activeFilters).map(([key, value]) => 
              value && (
                <button
                  key={key}
                  onClick={() => handleFilterChange(key as keyof typeof activeFilters, null)}
                  className="flex items-center bg-black text-white text-xs px-3 py-1"
                >
                  {key}: {value} <X size={12} className="ml-2" />
                </button>
              )
            )}
            <button
              onClick={clearAllFilters}
              className="text-sm text-[#d4af37] ml-2 hover:underline"
            >
              Clear All
            </button>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center justify-center w-full py-2 border border-gray-300"
            >
              <Filter size={16} className="mr-2" />
              {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          {/* Filters Sidebar */}
          <div className={`md:w-1/4 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div className="border-b pb-4">
                <button
                  className="flex items-center justify-between w-full font-semibold mb-4"
                  onClick={() => toggleSection('category')}
                >
                  <span>Category</span>
                  {expandedSections.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedSections.category && (
                  <div className="space-y-2">
                    {['women', 'men', 'accessories'].map(category => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.category === category}
                          onChange={() => handleFilterChange('category', category)}
                          className="mr-2 h-4 w-4"
                        />
                        <span className="capitalize">{category}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Price Range */}
              <div className="border-b pb-4">
                <button
                  className="flex items-center justify-between w-full font-semibold mb-4"
                  onClick={() => toggleSection('price')}
                >
                  <span>Price</span>
                  {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedSections.price && (
                  <div className="space-y-2">
                    {['0-50', '50-100', '100-200', '200-500', '500-'].map(range => (
                      <label key={range} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.price === range}
                          onChange={() => handleFilterChange('price', range)}
                          className="mr-2 h-4 w-4"
                        />
                        <span>
                          {range === '500-' ? '$500+' : `$${range.replace('-', ' - $')}`}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Colors */}
              <div className="border-b pb-4">
                <button
                  className="flex items-center justify-between w-full font-semibold mb-4"
                  onClick={() => toggleSection('color')}
                >
                  <span>Color</span>
                  {expandedSections.color ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedSections.color && (
                  <div className="space-y-2">
                    {['Black', 'White', 'Beige', 'Blue', 'Red'].map(color => (
                      <label key={color} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.color === color}
                          onChange={() => handleFilterChange('color', color)}
                          className="mr-2 h-4 w-4"
                        />
                        <span>{color}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Sizes */}
              <div className="pb-4">
                <button
                  className="flex items-center justify-between w-full font-semibold mb-4"
                  onClick={() => toggleSection('size')}
                >
                  <span>Size</span>
                  {expandedSections.size ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedSections.size && (
                  <div className="space-y-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                      <label key={size} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.size === size}
                          onChange={() => handleFilterChange('size', size)}
                          className="mr-2 h-4 w-4"
                        />
                        <span>{size}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="md:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl mb-4">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or browse our categories</p>
                <button
                  onClick={clearAllFilters}
                  className="btn btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;