"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

const PRESS_GLAM_IMAGES = ["/glam1.webp", "/glam2.webp", "/glam3.webp"];

export const PressGlam = () => {
  const [pressGlamRef, pressGlamApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [pressIndex, setPressIndex] = useState(0);

  useEffect(() => {
    if (!pressGlamApi) return;
    const onSelect = () => setPressIndex(pressGlamApi.selectedScrollSnap());
    pressGlamApi.on('select', onSelect);
    
    const intervalId = setInterval(() => pressGlamApi.scrollNext(), 3000);
    return () => { 
      pressGlamApi.off('select', onSelect); 
      clearInterval(intervalId); 
    };
  }, [pressGlamApi]);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-20 tracking-tighter uppercase">Press-Worthy Glam</h2>
        
        {/* DESKTOP VIEW: 3-Column Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {PRESS_GLAM_IMAGES.map((img, idx) => (
            <div key={idx} className="relative aspect-[1/1.2] w-full rounded-[4rem] overflow-hidden border border-gray-100 shadow-sm">
              <Image src={img} alt={`Press ${idx}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* MOBILE VIEW: Symmetrical Zoom Carousel */}
        <div className="md:hidden w-full overflow-visible" ref={pressGlamRef}>
          <div className="flex touch-pan-y items-center">
            {PRESS_GLAM_IMAGES.map((img, index) => (
              <div key={index} className="flex-[0_0_88%] min-w-0 px-2">
                <motion.div 
                  animate={{ 
                    scale: index === pressIndex ? 1 : 0.9, 
                    opacity: index === pressIndex ? 1 : 0.5 
                  }} 
                  transition={{ duration: 0.5 }} 
                  className="relative aspect-[1/1.3] w-full rounded-[3rem] overflow-hidden shadow-xl"
                >
                  <Image src={img} alt="Press Mobile" fill className="object-cover" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* INDICATOR: Dark Pill Bar BELOW the Carousel */}
        <div className="flex md:hidden justify-center mt-10 relative z-20">
          <div className="bg-black/10 backdrop-blur-md px-4 py-2 rounded-full flex gap-2 items-center border border-white/20">
            {PRESS_GLAM_IMAGES.map((_, dotIdx) => (
              <div
                key={dotIdx}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  dotIdx === pressIndex
                    ? "w-8 bg-gray-800"  // Dark active bar
                    : "w-1.5 bg-gray-400/50" // Small dots
                )}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};