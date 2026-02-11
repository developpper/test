import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';

const TWILIGHT_PRODUCTS = [{ id: 't1', name: "Vamp Skin Highlighter", price: "$ 5,240", rating: 5, image: "/twillight.jpg" },{ id: 't2', name: "Immortality Lip Oil", price: "$ 5,240", rating: 5, image: "/twillight2.jpg" },{ id: 't3', name: "Forever Setting Spray", price: "$ 6,989", rating: 5, image: "/twillight3.jpg" },{ id: 't4', name: "Body Glitter", price: "$ 4,100", rating: 4, image: "/twillight4.jpg" },{ id: 't5', name: "Sparkle Lube", price: "$ 3,240", rating: 5, image: "/twillight5.jpg" }];

export const TwilightCollection = () => {
  const [twilightRef, twilightApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', dragFree: true });
  return (
    <>
      <section className="py-12 md:py-24 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-8 uppercase tracking-tight">Iconic Original Collections</h2>
        <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-xl group border border-gray-100">
           <div className="hidden md:block relative aspect-[2/1] w-full">
              <Image src="/iconicoriginal.webp" alt="Twilight" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-8 right-8 z-20"><button className="bg-white/90 backdrop-blur-md text-slate-900 px-6 py-2 rounded-full font-black text-xs uppercase shadow-lg">Shop Collection</button></div>
           </div>
           <div className="block md:hidden relative aspect-[4/5] w-full"><Image src="/iconicorignalphone.webp" alt="Twilight" fill className="object-cover" /></div>
        </div>
      </section>
      <section className="pb-24 pt-8 container mx-auto px-4 relative">
        <div className="relative group">
          <div className="overflow-hidden px-4 md:px-10" ref={twilightRef}>
            <div className="flex -ml-6">{TWILIGHT_PRODUCTS.map((p) => (<div key={p.id} className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] pl-6"><ProductCard product={p} /></div>))}</div>
          </div>
          <button onClick={() => twilightApi?.scrollPrev()} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-all"><ChevronLeft size={28}/></button>
          <button onClick={() => twilightApi?.scrollNext()} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-all"><ChevronRight size={28}/></button>
        </div>
      </section>
    </>
  );
};