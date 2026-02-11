import React from 'react';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';

// Define the shape of your product for better code safety
interface ProductProps {
  product: {
    id: string | number;
    name: string;
    price: string;
    rating: number;
    image: string;
  };
}

export const ProductCard = ({ product }: ProductProps) => (
  <div className="flex flex-col bg-white rounded-[2rem] p-3 h-full group border border-gray-50 shadow-sm transition-all hover:shadow-md">
    {/* Image Container */}
    <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-[#fdf2f4]">
      <Image 
        src={product.image} 
        alt={product.name} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110" 
      />
    </div>

    {/* Info Container */}
    <div className="flex flex-col flex-grow space-y-1 items-start px-1">
      {/* Name - line-clamp-1 is great here */}
      <h3 className="text-[13px] md:text-sm font-bold text-slate-800 leading-tight line-clamp-1">
        {product.name}
      </h3>

      {/* Rating - pointer-events-none is perfect */}
      <div className="flex flex-row items-center pointer-events-none">
        <Rating 
          initialValue={product.rating} 
          readonly 
          size={14} 
          fillColor="#f9bf15" 
          emptyColor="#e5e7eb" 
          className="flex flex-row" 
          SVGclassName="inline-block" 
        />
      </div>

      {/* Price & Add Button */}
      <div className="flex items-center justify-between w-full pt-1 mt-auto">
        <p className="text-sm md:text-base font-black text-slate-900">
          {product.price}
        </p>
        <button 
          className="bg-slate-900 text-white rounded-full px-5 py-1.5 text-[11px] md:text-[12px] font-black uppercase tracking-wider hover:bg-[#ff4d6d] active:scale-95 transition-all shadow-sm"
          aria-label={`Add ${product.name} to cart`}
        >
          Add
        </button>
      </div>
    </div>
  </div>
);