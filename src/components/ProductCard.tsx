import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
  rating: number;
  category: string;
  description: string;
}

export default function ProductCard({ title, image, price, rating, category, description }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="relative group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">{price}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          View on Amazon
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}