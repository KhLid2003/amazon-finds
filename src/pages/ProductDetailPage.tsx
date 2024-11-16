import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Check, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full rounded-xl shadow-lg"
          />
          {product.discount && (
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {product.discount}
            </span>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{product.rating}</span>
            </div>
            <span className="text-gray-500">|</span>
            <span className="text-gray-600">{product.category}</span>
          </div>

          <div className="mb-8">
            <p className="text-2xl font-bold text-indigo-600 mb-2">
              {product.price}
              {product.originalPrice && (
                <span className="ml-2 text-lg text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              )}
            </p>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {product.features && (
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Key Features:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            View on Amazon
          </button>
        </div>
      </div>
    </div>
  );
}