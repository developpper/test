'use client';

import React, { useState } from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const popularSearches = ['Huda Beauty', 'Makeup By Mario', 'Yves Saint Laurent'];

const products = [
    {
        brand: 'DR DENNIS GROSS',
        name: 'Spectralite FaceWare Pro',
        price: 'AED 1,850.00',
        image: '/image1.jpg',
    },
    {
        brand: 'SHARK',
        name: 'FlexStyle 5-in-1 Air Styler & Hair Dryer',
        price: 'AED 1,400.00',
        image: '/image2.jpg',
    },
    {
        brand: 'MAKE UP FOR EVER',
        name: 'HD Skin Face Essentials Palette',
        price: 'AED 345.00',
        image: '/image3.jpg',
    },
];

function SearchProduct() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const filteredProducts = searchTerm
        ? products.filter(
            (product) =>
                product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    return (
        <div className="relative max-w-md mx-auto p-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search…"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="w-full py-2 pl-10 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {/* Search Icon */}
                {!searchTerm && (
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute top-2.5 left-3" />
                )}
                {/* Clear Icon */}
                {searchTerm && (
                    <XMarkIcon
                        className="w-5 h-5 text-gray-400 absolute top-2.5 right-3 cursor-pointer"
                        onClick={() => setSearchTerm('')}
                    />
                )}
            </div>

            {showSuggestions && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">

                    <div className="px-4 py-2 font-semibold text-gray-800">Suggested Products</div>
                    <ul>
                        {(searchTerm ? filteredProducts : products).map((product, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-3 px-4 py-2 border-t border-gray-100 hover:bg-gray-50"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                />
                                <div className="flex-grow">
                                    <div className="text-sm font-medium text-gray-900">{product.brand}</div>
                                    <div className="text-sm text-gray-500">{product.name}</div>
                                </div>
                                <div className="text-sm text-gray-700 whitespace-nowrap">{product.price}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchProduct;
