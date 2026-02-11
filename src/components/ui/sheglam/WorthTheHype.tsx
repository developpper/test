"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ProductCard } from './ProductCard';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const HYPE_MOBILE_SLIDES = [
  { id: 1, image: "/poster1.webp" },
  { id: 2, image: "/poster2.webp" },
  { id: 3, image: "/poster3.webp" },
  { id: 4, image: "/poster4.webp" },
  { id: 5, image: "/poster5.webp" },
  { id: 6, image: "/poster6.webp" },
];

const WORTH_THE_HYPE_PRODUCTS = [
  { id: 'w1', name: "Lashlighter Mascara", price: "$ 5,240", rating: 5, image: "/worththehype1.jpg" },
  { id: 'w2', name: "Insta-Ready Powder", price: "$ 7,427", rating: 4, image: "/worththehype2.jpg" },
  { id: 'w3', name: "Sun Sculpt Contour", price: "$ 5,240", rating: 5, image: "/worththehype3.jpg" },
  { id: 'w4', name: "Glow Bloom Highlighter", price: "$ 5,240", rating: 5, image: "/worththehype4.jpg" }
];

export const WorthTheHype = () => {
  const [hypeMobileRef, hypeMobileApi] = useEmblaCarousel({ loop: true });
  const [hypeIndex, setHypeIndex] = useState(0);

  useEffect(() => {
    if (!hypeMobileApi) return;
    const onSelect = () => setHypeIndex(hypeMobileApi.selectedScrollSnap());
    hypeMobileApi.on('select', onSelect);
    
    const intervalId = setInterval(() => {
      hypeMobileApi.scrollNext();
    }, 3000);

    return () => {
      clearInterval(intervalId);
      hypeMobileApi.off('select', onSelect);
    };
  }, [hypeMobileApi]);

  return (
    <section className="py-12 md:py-24 container mx-auto px-4">
      <h2 className="md:hidden text-center text-3xl font-black mb-8 uppercase tracking-tighter text-slate-900">Worthvvvthe Hype</h2>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 flex flex-col">
          
          {/* 1. CAROUSEL AREA (Mobile Only) */}
          <div className="block lg:hidden w-full overflow-hidden" ref={hypeMobileRef}>
            <div className="flex touch-pan-y">
              {HYPE_MOBILE_SLIDES.map((slide) => (
                <div key={slide.id} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <Image src={slide.image} alt="Bestseller" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. THE DOTS AREA (Now placed OUTSIDE and BELOW the carousel) */}
          <div className="flex lg:hidden justify-center mt-8">
            <div className="bg-black/5 backdrop-blur-md px-5 py-2.5 rounded-full flex gap-2.5 items-center border border-black/5">
              {HYPE_MOBILE_SLIDES.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    dotIdx === hypeIndex
                      ? "w-10 bg-gray-900"      // Active pill
                      : "w-2 bg-gray-300/60"    // Inactive small dots
                  )}
                />
              ))}
            </div>
          </div>

          {/* 3. DESKTOP IMAGE (Hidden on Mobile) */}
          <div className="hidden lg:flex relative w-full h-full min-h-[600px] rounded-[4rem] overflow-hidden bg-[#f8b4c0] shadow-xl">
            <Image 
              src="/worththehype.webp" 
              alt="Bestsellers" 
              fill 
              className="object-cover mix-blend-multiply opacity-90" 
            />
            <div className="relative p-12 z-10 mt-auto">
              <h3 className="text-white text-6xl font-black uppercase tracking-tighter">Best Sellers</h3>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Product Grid */}
        <div className="lg:w-1/2">
          <h2 className="hidden md:block text-[#ff4d6d] text-5xl font-black mb-12 italic lowercase" style={{ fontFamily: 'Dancing Script, cursive' }}>Worth the Hype</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
            {WORTH_THE_HYPE_PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};