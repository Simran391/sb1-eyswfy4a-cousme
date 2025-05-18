import { Product } from '../types/productTypes';

export const featuredProducts: Product[] = [
  {
    id: 'fp1',
    name: 'Classic Tailored Blazer',
    sku: 'RC-BLZ-001',
    price: 199.99,
    description: 'A timeless tailored blazer crafted from premium wool blend fabric. Features a modern fit with a single-breasted design, notched lapels, and two-button closure. Perfect for elevating any outfit from casual to formal.',
    images: [
      'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6069701/pexels-photo-6069701.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6069692/pexels-photo-6069692.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    collections: ['featured', 'new'],
    tags: ['blazer', 'formal', 'office'],
    colors: ['Black', 'Navy', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    hasVariants: true
  },
  {
    id: 'fp2',
    name: 'Silk Button-Up Shirt',
    sku: 'RC-SHT-002',
    price: 149.99,
    salePrice: 119.99,
    description: 'Luxurious silk button-up shirt with a relaxed fit. Features a classic collar, button-front closure, and long sleeves with button cuffs. The perfect versatile piece for your wardrobe.',
    images: [
      'https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5935747/pexels-photo-5935747.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5935754/pexels-photo-5935754.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    collections: ['featured', 'sale'],
    tags: ['shirt', 'silk', 'elegant'],
    colors: ['White', 'Black', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    hasVariants: true
  },
  {
    id: 'fp3',
    name: 'Premium Denim Jeans',
    sku: 'RC-DNM-003',
    price: 179.99,
    description: 'High-quality denim jeans with a perfect fit. Made from premium stretch denim for comfort and durability. Features a classic five-pocket design and straight leg silhouette.',
    images: [
      'https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    collections: ['featured', 'bestsellers'],
    tags: ['jeans', 'denim', 'casual'],
    colors: ['Blue', 'Black', 'Gray'],
    sizes: ['30', '32', '34', '36', '38'],
    hasVariants: true
  },
  {
    id: 'fp4',
    name: 'Leather Ankle Boots',
    sku: 'RC-FTW-004',
    price: 249.99,
    description: 'Sophisticated leather ankle boots crafted from premium quality leather. Features a sleek silhouette with side zipper closure, pointed toe, and comfortable stacked heel.',
    images: [
      'https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6046188/pexels-photo-6046188.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    collections: ['featured', 'accessories'],
    tags: ['boots', 'shoes', 'leather'],
    colors: ['Black', 'Brown', 'Beige'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    hasVariants: true
  }
];

export const trendingProducts: Product[] = [
  {
    id: 'tp1',
    name: 'Cashmere Oversized Sweater',
    sku: 'RC-SWT-005',
    price: 299.99,
    salePrice: 249.99,
    description: 'Luxuriously soft cashmere oversized sweater with a relaxed fit. Features a ribbed crew neckline, dropped shoulders, and ribbed cuffs and hem. The perfect cozy piece for cooler weather.',
    images: [
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311154/pexels-photo-6311154.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311600/pexels-photo-6311600.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    collections: ['trending', 'sale'],
    tags: ['sweater', 'cashmere', 'winter'],
    colors: ['Beige', 'Gray', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    hasVariants: true
  },
  {
    id: 'tp2',
    name: 'Structured Shoulder Bag',
    sku: 'RC-BAG-006',
    price: 349.99,
    description: 'Elegant structured shoulder bag crafted from premium leather. Features a rectangular silhouette, gold-tone hardware, adjustable shoulder strap, and multiple interior compartments.',
    images: [
      'https://images.pexels.com/photos/5120343/pexels-photo-5120343.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/13889227/pexels-photo-13889227.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    collections: ['trending', 'accessories'],
    tags: ['bag', 'leather', 'accessory'],
    colors: ['Black', 'Beige', 'Brown'],
    sizes: ['One Size'],
    hasVariants: true
  },
  {
    id: 'tp3',
    name: 'Tailored Wool Coat',
    sku: 'RC-COT-007',
    price: 399.99,
    description: 'Sophisticated tailored coat crafted from premium wool blend. Features a classic silhouette with notched lapels, double-breasted button closure, and side pockets. The perfect statement piece for colder months.',
    images: [
      'https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    collections: ['trending', 'new'],
    tags: ['coat', 'winter', 'formal'],
    colors: ['Black', 'Navy', 'Camel'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    hasVariants: true
  },
  {
    id: 'tp4',
    name: 'Pleated Midi Skirt',
    sku: 'RC-SKT-008',
    price: 159.99,
    description: 'Elegant pleated midi skirt with a flowing silhouette. Features an elastic waistband for comfort and a sophisticated midi length. Perfect for both casual and formal occasions.',
    images: [
      'https://images.pexels.com/photos/6765164/pexels-photo-6765164.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6765174/pexels-photo-6765174.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6765191/pexels-photo-6765191.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    collections: ['trending', 'bestsellers'],
    tags: ['skirt', 'elegant', 'versatile'],
    colors: ['Black', 'Beige', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    hasVariants: true
  }
];

// Function to get all products combined
export const getAllProducts = (): Product[] => {
  // This would typically fetch from an API or database
  // Here we're just combining our sample product arrays
  return [
    ...featuredProducts,
    ...trendingProducts,
    {
      id: 'p1',
      name: 'Linen Button-Down Shirt',
      sku: 'RC-SHT-009',
      price: 129.99,
      description: 'Premium linen shirt with a relaxed fit. Features a button-down collar, chest pocket, and rounded hem. Perfect for casual yet sophisticated looks.',
      images: [
        'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'men',
      collections: ['new', 'casual'],
      tags: ['shirt', 'linen', 'summer'],
      colors: ['White', 'Blue', 'Beige'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      hasVariants: true
    },
    {
      id: 'p2',
      name: 'Structured Mini Dress',
      sku: 'RC-DRS-010',
      price: 199.99,
      salePrice: 159.99,
      description: 'Elegant mini dress with a structured silhouette. Features a round neckline, short sleeves, and a fitted waist. Perfect for special occasions.',
      images: [
        'https://images.pexels.com/photos/6765089/pexels-photo-6765089.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6765092/pexels-photo-6765092.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6765094/pexels-photo-6765094.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'women',
      collections: ['sale', 'party'],
      tags: ['dress', 'elegant', 'party'],
      colors: ['Black', 'Red', 'Navy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      hasVariants: true
    },
    {
      id: 'p3',
      name: 'Premium Leather Belt',
      sku: 'RC-BLT-011',
      price: 89.99,
      description: 'Sophisticated leather belt crafted from premium quality leather. Features a classic square buckle and clean lines. Perfect for completing any look.',
      images: [
        'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6638078/pexels-photo-6638078.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'accessories',
      collections: ['accessories', 'bestsellers'],
      tags: ['belt', 'leather', 'accessory'],
      colors: ['Black', 'Brown', 'Tan'],
      sizes: ['85cm', '90cm', '95cm', '100cm'],
      hasVariants: true
    },
    {
      id: 'p4',
      name: 'Cropped Denim Jacket',
      sku: 'RC-JKT-012',
      price: 179.99,
      description: 'Classic cropped denim jacket with a modern twist. Features a button front closure, chest pockets, and a cropped silhouette. Perfect for layering over any outfit.',
      images: [
        'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'women',
      collections: ['casual', 'denim'],
      tags: ['jacket', 'denim', 'casual'],
      colors: ['Blue', 'Light Blue', 'Black'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      hasVariants: true
    },
    {
      id: 'p5',
      name: 'Slim Fit Chino Pants',
      sku: 'RC-PNT-013',
      price: 129.99,
      description: 'Classic slim fit chino pants crafted from premium cotton twill. Features a comfortable waistband with belt loops, side pockets, and a tapered leg.',
      images: [
        'https://images.pexels.com/photos/3735633/pexels-photo-3735633.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3782794/pexels-photo-3782794.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'men',
      collections: ['casual', 'essentials'],
      tags: ['pants', 'chino', 'casual'],
      colors: ['Beige', 'Navy', 'Olive'],
      sizes: ['30', '32', '34', '36', '38'],
      hasVariants: true
    },
    {
      id: 'p6',
      name: 'Oversized Sunglasses',
      sku: 'RC-SNG-014',
      price: 149.99,
      description: 'Statement oversized sunglasses with a modern silhouette. Features UV-protective lenses and a premium acetate frame. The perfect accessory to complete any look.',
      images: [
        'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'accessories',
      collections: ['accessories', 'summer'],
      tags: ['sunglasses', 'accessory', 'summer'],
      colors: ['Black', 'Tortoise', 'Clear'],
      sizes: ['One Size'],
      hasVariants: true
    },
    {
      id: 'p7',
      name: 'Cashmere Beanie',
      sku: 'RC-HAT-015',
      price: 89.99,
      salePrice: 69.99,
      description: 'Luxuriously soft cashmere beanie with a ribbed design. Features a cozy fit and a classic silhouette. Perfect for adding a touch of luxury to cold-weather outfits.',
      images: [
        'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'accessories',
      collections: ['sale', 'winter'],
      tags: ['beanie', 'cashmere', 'winter'],
      colors: ['Gray', 'Black', 'Beige'],
      sizes: ['One Size'],
      hasVariants: true
    },
    {
      id: 'p8',
      name: 'Wide-Leg Trousers',
      sku: 'RC-TRS-016',
      price: 159.99,
      description: 'Elegant wide-leg trousers with a high waist. Features a flattering silhouette, side pockets, and a clean front. Perfect for both casual and formal occasions.',
      images: [
        'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7691150/pexels-photo-7691150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6311386/pexels-photo-6311386.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'women',
      collections: ['formal', 'essentials'],
      tags: ['trousers', 'elegant', 'versatile'],
      colors: ['Black', 'Navy', 'Beige'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      hasVariants: true
    }
  ];
};