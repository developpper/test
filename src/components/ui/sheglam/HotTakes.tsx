import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Rating } from 'react-simple-star-rating';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
const HOT_TAKES_MOBILE_SLIDES = [{ id: 1, image: "/review.webp" },{ id: 2, image: "/review2.webp" },{ id: 3, image: "/review3.webp" }];

export const HotTakes = () => {
  const [hotTakesRef, hotTakesApi] = useEmblaCarousel({ loop: true });
  const [hotIndex, setHotIndex] = useState(0);

  useEffect(() => {
    if (!hotTakesApi) return;
    const onSelect = () => setHotIndex(hotTakesApi.selectedScrollSnap());
    hotTakesApi.on('select', onSelect);
    const intervalId = setInterval(() => hotTakesApi.scrollNext(), 4000);
    return () => { hotTakesApi.off('select', onSelect); clearInterval(intervalId); };
  }, [hotTakesApi]);

  return (
    <section className="py-12 md:py-24 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-black text-center mb-10 uppercase tracking-tight">Your Hot Takes</h2>
      <div className="block md:hidden w-full overflow-visible" ref={hotTakesRef}>
        <div className="flex touch-pan-y items-center">
          {HOT_TAKES_MOBILE_SLIDES.map((slide, index) => (
            <div key={slide.id} className="flex-[0_0_88%] min-w-0 px-2">
              <motion.div animate={{ scale: index === hotIndex ? 1 : 0.88, opacity: index === hotIndex ? 1 : 0.4 }} transition={{ duration: 0.4 }} className="relative aspect-[1.1/1] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                <Image src={slide.image} alt="Review" fill className="object-cover" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:grid container mx-auto px-4 grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div whileHover={{ scale: 1.02 }} className="rounded-[4rem] overflow-hidden relative shadow-xl aspect-square"><Image src="/hottakes.webp" alt="Model" fill className="object-cover" /></motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#ffb7d5] rounded-[4rem] p-12 flex flex-col items-center justify-between text-center text-white">
           <Rating initialValue={5} readonly size={32} fillColor="#ff00a0" emptyColor="#ffffff" className="flex flex-row" SVGclassName="inline-block" />
           <p className="text-[17px] font-bold italic">&ldquo;Sooo easy! This magic in a bottle has transformed my contour game.&rdquo;</p>
           <button className="bg-[#ff00a0] text-white px-10 py-4 rounded-full font-black text-sm uppercase">Shop Now</button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#ff00a0] rounded-[4rem] p-12 flex flex-col items-center justify-between text-center text-white">
           <Rating initialValue={5} readonly size={32} fillColor="#ffffff" emptyColor="rgba(255,255,255,0.3)" className="flex flex-row" SVGclassName="inline-block" />
           <p className="text-[17px] font-bold italic">&ldquo;I absolutely loved the products! The eyeshadow primer was so effective.&rdquo;</p>
           <button className="bg-white text-[#ff00a0] px-10 py-4 rounded-full font-black text-sm uppercase">Shop Now</button>
        </motion.div>
      </div>
    </section>
  );
};