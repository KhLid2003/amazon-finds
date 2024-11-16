import React from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";

export default function CategoryBar() {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 overflow-x-auto hide-scrollbar">
          {categories.slice(0, 6).map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => navigate(`/category/${category.slug}`)}
                className="flex flex-col items-center min-w-[100px] px-4 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                <Icon className="h-6 w-6 text-indigo-600" />
                <span className="mt-1 text-sm text-gray-600">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
