'use client';

import React, { useState } from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = searchTerm
    ? products.filter(
        (product) =>
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <div className="relative mt-10">
      {/* Search Trigger */}
      <div className="w-full flex justify-center">
  <div
    onClick={() => setShowOverlay(true)}
    className="w-1/2 cursor-pointer relative px-4"
  >
    <input
      type="text"
      placeholder="Search…"
      readOnly
      className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none"
    />
    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute top-2.5 left-7" />
  </div>
</div>


      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-screen h-screen bg-white z-[9999] px-4 py-6 overflow-y-auto"
          >
            {/* Search Header */}
            <div className="relative w-full mb-6">
              <input
                type="text"
                placeholder="Search…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                className="w-full py-3 pl-12 pr-12 border border-pink-500 bg-pink-50 text-pink-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-pink-400 absolute top-4 left-5" />
              <XMarkIcon
                className="w-6 h-6 text-gray-600 absolute top-3.5 right-5 cursor-pointer"
                onClick={() => {
                  setSearchTerm('');
                  setShowOverlay(false);
                }}
              />
            </div>

            {/* Suggested Products */}
            <div className="w-full">
              <div className="text-lg font-semibold text-gray-800 mb-4">
                Suggested Products
              </div>
              <ul>
                {filteredProducts.map((product, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={50}
                      height={50}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchProduct;
