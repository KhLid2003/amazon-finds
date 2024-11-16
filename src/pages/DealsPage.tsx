import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Tag } from 'lucide-react';

export default function DealsPage() {
  const dealsProducts = products.filter(product => product.discount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Tag className="h-8 w-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">Today's Best Deals</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dealsProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}