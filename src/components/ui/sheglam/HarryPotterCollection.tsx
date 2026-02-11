"use client";
import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';

const HARRY_PRODUCTS = [
  { id: 'h1', name: "Vamp Skin Highlighter", price: "$ 5,240", rating: 5, image: "/harry1.webp" },
  { id: 'h2', name: "Immortality Lip Oil", price: "$ 5,240", rating: 5, image: "/harry2.webp" },
  { id: 'h3', name: "Forever Setting Spray", price: "$ 6,989", rating: 5, image: "/harry3.jpg" },
  { id: 'h4', name: "Vampire Skin Body Glitter", price: "$ 4,100", rating: 4, image: "/harry4.jpg" },
  { id: 'h5', name: "Edward's Sparkle Lube", price: "$ 3,240", rating: 5, image: "/harry5.jpg" }
];

export const HarryPotterCollection = () => {
  const [harryRef, harryApi] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps', 
    dragFree: true 
  });

  return (
    <>
      <section className="py-12 md:py-24 container mx-auto px-4">
        <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-xl group border border-gray-100">
           <div className="hidden md:block relative aspect-[2/1] w-full">
              <Image src="/harry.webp" alt="Harry Potter" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-8 right-8 z-20">
                <button className="bg-white/90 backdrop-blur-md text-slate-900 px-6 py-2 rounded-full font-black text-xs uppercase shadow-lg">Shop Collection</button>
              </div>
           </div>
           <div className="block md:hidden relative aspect-[4/5] w-full">
              <Image src="/harryphone.webp" alt="Harry Potter Mobile" fill className="object-cover" />
           </div>
        </div>
      </section>

      <section className="pb-24 pt-8 container mx-auto px-4 relative">
        <div className="relative group">
          <div className="overflow-hidden px-4 md:px-10" ref={harryRef}>
            <div className="flex -ml-6">
              {HARRY_PRODUCTS.map((p) => (
                <div key={p.id} className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] pl-6">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => harryApi?.scrollPrev()} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-all active:scale-95"
          >
            <ChevronLeft size={28}/>
          </button>
          
          <button 
            onClick={() => harryApi?.scrollNext()} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-all active:scale-95"
          >
            <ChevronRight size={28}/>
          </button>
        </div>
      </section>
    </>
  );
};