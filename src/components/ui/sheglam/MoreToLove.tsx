import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';

const MORE_TO_LOVE_PRODUCTS = [
  { id: 'm1', name: "Putty Pocket Lip Pot", price: "$ 5,240", rating: 5, image: "/moretolove1.webp" },
  { id: 'm2', name: "Buttery Bliss Blush Stick", price: "$ 5,240", rating: 5, image: "/moretolove2.webp" },
  { id: 'm3', name: "Lashlighter Up & Out", price: "$ 5,240", rating: 5, image: "/moretolove3.webp" },
  { id: 'm4', name: "Lashlighter Infinite Tubing", price: "$ 5,240", rating: 5, image: "/moretolove4.webp" },
];

export const MoreToLove = () => {
  const [moreLoveRef, moreLoveApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', dragFree: true });
  return (
    <section className="py-24 container mx-auto px-4 relative">
      <h2 className="text-2xl md:text-3xl font-black text-center mb-8 bold uppercase tracking-tight">More To Love</h2>
      <div className="relative group">
        <div className="overflow-hidden px-4 md:px-10" ref={moreLoveRef}>
          <div className="flex -ml-6">
            {MORE_TO_LOVE_PRODUCTS.map((p) => (<div key={p.id} className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] pl-6"><ProductCard product={p} /></div>))}
          </div>
        </div>
        <button onClick={() => moreLoveApi?.scrollPrev()} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full shadow-xl text-[#ff4d6d] opacity-0 group-hover:opacity-100 transition-all"><ChevronLeft size={28}/></button>
        <button onClick={() => moreLoveApi?.scrollNext()} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full shadow-xl text-[#ff4d6d] opacity-0 group-hover:opacity-100 transition-all"><ChevronRight size={28}/></button>
      </div>
    </section>
  );
};