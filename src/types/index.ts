export interface Product {
  id: string;
  title: string;
  image: string;
  price: string;
  rating: number;
  category: string;
  description: string;
  discount?: string;
  originalPrice?: string;
  features?: string[];
}

export interface Category {
  name: string;
  icon: React.ComponentType;
  slug: string;
}