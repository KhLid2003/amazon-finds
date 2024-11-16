import React from 'react';
import { Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function WishlistPage() {
  // For demo purposes, showing some random products as wishlist items
  const wishlistProducts = products.slice(2, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Heart className="h-8 w-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}