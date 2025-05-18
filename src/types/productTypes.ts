export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  salePrice?: number;
  description: string;
  images: string[];
  category: string;
  collections: string[];
  tags: string[];
  colors?: string[];
  sizes?: string[];
  hasVariants: boolean;
}