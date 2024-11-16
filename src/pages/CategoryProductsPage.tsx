import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';

export default function CategoryProductsPage() {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => 
    p.category.toLowerCase() === category?.name.toLowerCase() ||
    category?.name.toLowerCase().includes(p.category.toLowerCase())
  );

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Category not found</p>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="h-8 w-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found in this category.</p>
      )}
    </div>
  );
}