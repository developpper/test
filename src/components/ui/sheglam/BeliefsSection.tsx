import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
const BELIEFS_SLIDES = [{ id: 1, desktop: "/beliefs_desktop1.webp", mobile: "/beliefs_mobile1.webp" },{ id: 2, desktop: "/beliefs_desktop2.webp", mobile: "/beliefs_mobile2.webp" },{ id: 3, desktop: "/beliefs_desktop3.webp", mobile: "/beliefs_mobile3.webp" }];

export const BeliefsSection = () => {
  const [beliefsRef, beliefsApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [beliefsIndex, setBeliefsIndex] = useState(0);

  useEffect(() => {
    if (!beliefsApi) return;
    const onSelect = () => setBeliefsIndex(beliefsApi.selectedScrollSnap());
    beliefsApi.on('select', onSelect);
    const intervalId = setInterval(() => beliefsApi.scrollNext(), 5000);
    return () => { beliefsApi.off('select', onSelect); clearInterval(intervalId); };
  }, [beliefsApi]);

  return (
    <section className="py-12 md:py-20 overflow-hidden bg-white">
      <h2 className="text-2xl md:text-4xl font-black text-center mb-10 uppercase tracking-tighter">Built on Beliefs</h2>
      <div className="w-full" ref={beliefsRef}>
        <div className="flex touch-pan-y items-center">
          {BELIEFS_SLIDES.map((slide, index) => (
            <div key={slide.id} className="flex-[0_0_90%] md:flex-[0_0_94%] min-w-0 px-2 md:px-4">
              <motion.div animate={{ scale: index === beliefsIndex ? 1 : 0.94, opacity: index === beliefsIndex ? 1 : 0.5 }} transition={{ duration: 0.6 }} className="relative w-full aspect-square md:aspect-[2.4/1] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl bg-gray-50">
                <div className="hidden md:block absolute inset-0"><Image src={slide.desktop} alt="Beliefs" fill className="object-cover" /></div>
                <div className="block md:hidden absolute inset-0"><Image src={slide.mobile} alt="Beliefs" fill className="object-cover" /></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};