'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full relative z-50 p-4">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-white text-xs md:text-sm px-4 md:px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>STORES</span>
        </div>
        <div className="text-center font-medium">
          LOG IN FOR FREE SHIPPING AND EXCLUSIVE SAMPLES
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <span>❓ HELP</span>
          <span>AE | EN</span>
          <span>🇦🇪</span>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="bg-white px-4 md:px-6 py-4 flex justify-between items-center border-b">
        {/* Mobile: Menu Icon */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleMenu}>
            <Menu size={28} className="text-gray-800" />
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search a product ..."
          className="border px-4 py-2 w-2/3 md:w-1/3 rounded-md focus:outline-none text-sm"
        />

        {/* Logo */}
        <div className="text-xl font-bold hidden md:block">Logo</div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-lg">
          <span>👤</span>
          <span>❤️</span>
          <span>🛒</span>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="bg-pink-100 text-sm font-semibold text-gray-800 hidden md:flex justify-center space-x-6 px-6 py-3">
        <a href="#">NEW</a>
        <a href="#">LAST CHANCE</a>
        <a href="#">MAKEUP</a>
        <a href="#">FRAGRANCES</a>
        <a href="#">SUNCARE</a>
        <a href="#">HAIR CARE</a>
        <a href="#">SKINCARE</a>
        <a href="#">KITS</a>
        <a href="#">OFFERS</a>
        <a href="#">ONLINE EXCLUSIVE</a>
        <a href="#">ACCESSORIES</a>
        <a href="#">BEAUTY TIPS</a>
      </div>

      {/* Mobile Fullscreen Menu */}
     {menuOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm md:bg-white z-10 overflow-y-auto transition-all duration-300 animate-slide-down">
    <div className="space-y-2">

      {/* Search Box with Close Button */}
     <div className="relative w-full">
  <div className="flex items-center gap-4 rounded-xl bg-white px-4 py-2">
    <div className="relative w-full">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        🔍
      </span>
      <input
        type="text"
        placeholder="Search a product ..."
        className="w-full pl-9 pr-3 py-2 text-sm border shadow rounded border-gray-200 focus:outline-none"
      />
    </div>
    <button
      onClick={toggleMenu}
      className="ml-2 border p-2 shadow rounded border-gray-200"
    >
      <X size={20} className="text-gray-500" />
    </button>
  </div>
</div>


      {/* Menu List */}
      <div className="bg-white rounded-xl shadow px-4 py-2">
        {[
          'NEW',
          'LAST CHANCE',
          'MAKEUP',
          'FRAGRANCES',
          'SUNCARE',
          'HAIR CARE',
          'SKINCARE',
          'KITS',
          'OFFERS',
          'ONLINE EXCLUSIVE',
          'ACCESSORIES',
        ].map((item) => (
          <a key={item} href="#" className="flex justify-between items-center py-3 text-sm font-medium text-gray-800">
            {item}
            <span className="text-black font-bold">{'>'}</span>
          </a>
        ))}
      </div>

      {/* Beauty Tips Section */}
      <div className="rounded-xl px-4 py-3 bg-gradient-to-r from-pink-100 to-purple-100 shadow text-sm font-semibold text-gray-800 flex justify-between items-center">
        <span>BEAUTY TIPS</span>
        <span className="text-gray-500">{'>'}</span>
      </div>

      {/* Bottom Grid Buttons */}
      <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
        <div className="flex items-center gap-2 p-3 rounded-xl border shadow">
          <span>👤</span> <span>My account</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl border shadow">
          <span>📦</span> <span>Track your order</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl border shadow">
          <span>❤️</span> <span>Wishlist</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl border shadow">
          <span>❓</span> <span>Need help?</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl border shadow">
          <span>🎁</span> <span>KIKO Me</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-xl border shadow">
          <span>📍</span> <span>Stores</span>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Header;
