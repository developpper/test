"use client";
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FloatingBadge } from './FloatingBadge';
import { HeroSlider } from './HeroSlider';
import { CategoryGrid } from './CategoryGrid';
import { WorthTheHype } from './WorthTheHype';
import { MoreToLove } from './MoreToLove';
import { TwilightCollection } from './TwilightCollection';
import { HarryPotterCollection } from './HarryPotterCollection';
import { HotTakes } from './HotTakes';
import { BeliefsSection } from './BeliefsSection';
import { BrandValues } from './BrandValues';
import { PressGlam } from './PressGlam';

export default function SheglamLanding() {
  return (
    <div className="min-h-screen bg-[#fffafa] text-slate-900 selection:bg-[#ff4d6d] selection:text-white pb-10">
      <FloatingBadge />
      <main className="overflow-x-hidden">
        <HeroSlider />
        <CategoryGrid />
        <WorthTheHype />
        <MoreToLove />
        <TwilightCollection />
        <HarryPotterCollection />
        <HotTakes />
        <BeliefsSection />
        <BrandValues />
        <PressGlam />
      </main>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-10 right-10 z-50 bg-white p-5 rounded-full shadow-2xl border border-pink-100 text-[#ff4d6d] hover:scale-110 transition-transform"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}