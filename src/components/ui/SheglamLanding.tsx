"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Rating } from 'react-simple-star-rating';
import { 
  ChevronRight, ChevronLeft, ArrowUp, Sparkles, Heart, Star, Zap, Leaf ,Rabbit, TreeDeciduous, Scale
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- UTILITIES ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- DATA ---
const HERO_SLIDES = [
  { 
    id: 1, 
    desktopImage: "/herobanner.webp", 
    mobileImage: "/herobannerphone.webp",
    align: "center" 
  },
  { 
    id: 2, 
    desktopImage: "/herobanner2.webp", 
    mobileImage: "/herobanner2phone.webp",
    align: "center",  
  },
  {
    id: 3,
    desktopImage: "/herobanner3.webp",
    mobileImage: "/herobanner3phone.webp",
    align: "center",
  }
];

const CATEGORIES = [
  { name: "Face", image: "/curate.webp", color: "border-[#fce3a1]" },
  { name: "Lips", image: "/curate2.webp", color: "border-[#f8b4c0]" },
  { name: "Eyes", image: "/curate3.webp", color: "border-[#b5d1f8]" },
  { name: "Brushes", image: "/curate4.webp", color: "border-[#d8b5f8]" },
];

const WORTH_THE_HYPE_PRODUCTS = [
  { id: 'w1', name: "Lashlighter Up & Out Mascara", price: "$ 5,240", rating: 5, image: "/worththehype1.jpg" },
  { id: 'w2', name: "Insta-Ready Ultra-Fine Powder", price: "$ 7,427", rating: 4, image: "/worththehype2.jpg" },
  { id: 'w3', name: "Sun Sculpt Liquid Contour", price: "$ 5,240", rating: 5, image: "/worththehype3.jpg" },
  { id: 'w4', name: "Glow Bloom Liquid Highlighter", price: "$ 5,240", rating: 5, image: "/worththehype4.jpg" }
];

// Simplified Mobile Slides: Images contain all info
const HYPE_MOBILE_SLIDES = [
  { id: 1, image: "/poster1.webp" },
  { id: 2, image: "/poster2.webp" },
  { id: 3, image: "/poster3.webp" },
  { id: 4, image: "/poster4.webp" },
  { id: 5, image: "/poster5.webp" },
  { id: 6, image: "/poster6.webp" },
];

const MORE_TO_LOVE_PRODUCTS = [
  { id: 'm1', name: "Putty Pocket Lip Pot", price: "$ 5,240", rating: 5, image: "/moretolove1.webp" },
  { id: 'm2', name: "Buttery Bliss Blush Stick", price: "$ 5,240", rating: 5, image: "/moretolove2.webp" },
  { id: 'm3', name: "Lashlighter Up & Out", price: "$ 5,240", rating: 5, image: "/moretolove3.webp" },
  { id: 'm4', name: "Lashlighter Infinite Tubing", price: "$ 5,240", rating: 5, image: "/moretolove4.webp" },
];

const TWILIGHT_PRODUCTS = [
  { id: 't1', name: "Vamp Skin Highlighter", price: "$ 5,240", rating: 5, image: "/twillight.jpg" },
  { id: 't2', name: "Immortality Lip Oil", price: "$ 5,240", rating: 5, image: "/twillight2.jpg" },
  { id: 't3', name: "Forever Setting Spray", price: "$ 6,989", rating: 5, image: "/twillight3.jpg" },
  { id: 't4', name: "Vampire Skin Body Glitter", price: "$ 4,100", rating: 4, image: "/twillight4.jpg" },
  { id: 't5', name: "Edward's Sparkle Lube", price: "$ 3,240", rating: 5, image: "/twillight5.jpg" },
];


const HARRY_PRODUCTS = [
  { id: 't1', name: "Vamp Skin Highlighter", price: "$ 5,240", rating: 5, image: "/harry1.webp" },
  { id: 't2', name: "Immortality Lip Oil", price: "$ 5,240", rating: 5, image: "/harry2.webp" },
  { id: 't3', name: "Forever Setting Spray", price: "$ 6,989", rating: 5, image: "/harry3.jpg" },
  { id: 't4', name: "Vampire Skin Body Glitter", price: "$ 4,100", rating: 4, image: "/harry4.jpg" },
  { id: 't5', name: "Edward's Sparkle Lube", price: "$ 3,240", rating: 5, image: "/harry5.jpg" },
];

const HOT_TAKES_MOBILE_SLIDES = [
  { id: 1, image: "/review.webp" },
  { id: 2, image: "/review2.webp" },
  { id: 3, image: "/review3.webp" },
];

const BRAND_VALUES = [
  {
    id: 1,
    title: "Cruelty Free",
    desc: "Approved as cruelty free under the Leaping Bunny Programme",
    icon: <Rabbit className="w-12 h-12" />,
    color: "text-[#f8b4c0]" // Pastel Pink
  },
  {
    id: 2,
    title: "Vegan",
    desc: "Over 90% of our products are vegan",
    icon: <Leaf className="w-12 h-12" />,
    color: "text-[#b5d1f8]" // Pastel Blue
  },
  {
    id: 3,
    title: "PureGlam",
    desc: "We elevate clean beauty with safe, tested, transparent products, excluding 1,700+ potentially unsafe ingredients and employing 50+ test verifications.",
    icon: <Sparkles className="w-12 h-12" />,
    color: "text-[#d8b5f8]" // Pastel Purple
  },
  {
    id: 4,
    title: "Sustainable Packaging",
    mobileTitle: "FSC",
    desc: "Our boxes are FSC-certified, made from responsibly sourced materials.",
    icon: <TreeDeciduous className="w-12 h-12" />,
    color: "text-[#c9e8a5]" // Pastel Green
  },
  {
    id: 5,
    title: "Work Ethics",
    desc: "Our manufacturing facilities are 100% certified for work ethics-related credentials, including SA8000, BSCI and SMETA.",
    icon: <Scale className="w-12 h-12" />,
    color: "text-[#fce3a1]" // Pastel Yellow
  }
];

const BELIEFS_SLIDES = [
  { id: 1, desktop: "/beliefs_desktop1.webp", mobile: "/beliefs_mobile1.webp" },
  { id: 2, desktop: "/beliefs_desktop2.webp", mobile: "/beliefs_mobile2.webp" },
  { id: 3, desktop: "/beliefs_desktop3.webp", mobile: "/beliefs_mobile3.webp" },
];

const PRESS_GLAM_IMAGES = [
  "/glam1.webp", // Replace with your actual image paths
  "/glam2.webp",
  "/glam3.webp",
];


const ProductCard = ({ product }: { product: any }) => (
  <div className="flex flex-col bg-white rounded-[2rem] p-3 h-full group border border-gray-50 shadow-sm transition-all hover:shadow-md">
    <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-[#fdf2f4]">
      <Image src={product.image} alt={product.name} fill className="object-cover transition-transform group-hover:scale-110" />
    </div>
    <div className="flex flex-col flex-grow space-y-1 items-start px-1">
      <h3 className="text-[12px] md:text-sm font-bold text-slate-800 leading-tight line-clamp-1">{product.name}</h3>
      <div className="flex flex-row items-center pointer-events-none">
        <Rating initialValue={product.rating} readonly size={14} fillColor="#f9bf15" emptyColor="#e5e7eb" className="flex flex-row" SVGclassName="inline-block" />
      </div>
      <div className="flex items-center justify-between w-full pt-1">
        <p className="text-xs md:text-sm font-black text-slate-900">{product.price}</p>
        <button className="bg-slate-900 text-white rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-wider hover:bg-[#ff4d6d] transition-all">Add</button>
      </div>
    </div>
  </div>
);

export default function SheglamLanding() {
  const [heroRef, heroApi] = useEmblaCarousel({ loop: true });
  const [moreLoveRef, moreLoveApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', dragFree: true });
  const [twilightRef, twilightApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', dragFree: true });
  const [harryRef, harryApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', dragFree: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const [hypeMobileRef, hypeMobileApi] = useEmblaCarousel({ loop: true });
  const [hypeIndex, setHypeIndex] = useState(0);
 
const [pressGlamRef, pressGlamApi] = useEmblaCarousel({ 
  loop: true, 
  align: 'center' 
});
const [pressIndex, setPressIndex] = useState(0);

useEffect(() => {
  if (!pressGlamApi) return;
  
  const onSelect = () => setPressIndex(pressGlamApi.selectedScrollSnap());
  pressGlamApi.on('select', onSelect);
  
  // Autoplay 3000ms
  const intervalId = setInterval(() => pressGlamApi.scrollNext(), 3000);
  
  return () => {
    pressGlamApi.off('select', onSelect);
    clearInterval(intervalId);
  };
}, [pressGlamApi]);


// 1. Add these hooks near your other carousel definitions
const [hotTakesRef, hotTakesApi] = useEmblaCarousel({ loop: true });
const [hotIndex, setHotIndex] = useState(0);

// 2. Add this effect for auto-playing the review images
useEffect(() => {
  if (!hotTakesApi) return;
  
  const onSelect = () => setHotIndex(hotTakesApi.selectedScrollSnap());
  hotTakesApi.on('select', onSelect);
  
  const intervalId = setInterval(() => {
    hotTakesApi.scrollNext();
  }, 4000); // Slides every 4 seconds
  
  return () => {
    hotTakesApi.off('select', onSelect);
    clearInterval(intervalId);
  };
}, [hotTakesApi]);

const [beliefsRef, beliefsApi] = useEmblaCarousel({ 
  loop: true, 
  align: 'center', 
  skipSnaps: false 
});
const [beliefsIndex, setBeliefsIndex] = useState(0);

useEffect(() => {
  if (!beliefsApi) return;
  const onSelect = () => setBeliefsIndex(beliefsApi.selectedScrollSnap());
  beliefsApi.on('select', onSelect);
  const intervalId = setInterval(() => beliefsApi.scrollNext(), 5000);
  return () => {
    beliefsApi.off('select', onSelect);
    clearInterval(intervalId);
  };
}, [beliefsApi]);

  // Autoplay Logic for Mobile Hype Carousel
  useEffect(() => {
    if (!hypeMobileApi) return;
    
    const intervalId = setInterval(() => {
      hypeMobileApi.scrollNext();
    }, 3000);

    const onSelect = () => setHypeIndex(hypeMobileApi.selectedScrollSnap());
    hypeMobileApi.on('select', onSelect);

    return () => {
      clearInterval(intervalId);
      hypeMobileApi.off('select', onSelect);
    };
  }, [hypeMobileApi]);

  useEffect(() => {
    if (!heroApi) return;
    const intervalId = setInterval(() => heroApi.scrollNext(), 3000);
    heroApi.on('select', () => setActiveIndex(heroApi.selectedScrollSnap()));
    return () => clearInterval(intervalId);
  }, [heroApi]);

  return (
    <div className="min-h-screen bg-[#fffafa] text-slate-900 selection:bg-[#ff4d6d] selection:text-white pb-10">
      
      <div className="fixed top-10 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-xl">
          <h1 className="text-2xl font-black tracking-tighter text-pink-500 uppercase flex items-center gap-2">
            GLOW<span className="text-gray-800">UP</span> <Sparkles className="w-5 h-5 fill-pink-400" />
          </h1>
        </motion.div>
      </div>

      <main className="overflow-x-hidden">
        
        <section className="relative h-screen w-full overflow-hidden bg-white" ref={heroRef}>
          <div className="flex h-full">
            {HERO_SLIDES.map((slide) => (
              <div key={slide.id} className="relative flex-[0_0_100%] h-full overflow-hidden">
                <div className="hidden md:block absolute inset-0 w-full h-full">
                  <Image src={slide.desktopImage} alt="Desktop Hero" fill className="object-cover" priority />
                </div>
                <div className="block md:hidden absolute inset-0 w-full h-full">
                  <Image src={slide.mobileImage} alt="Mobile Hero" fill className="object-cover" priority />
                </div>
                <div className="absolute inset-0 bg-black/5" />
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight uppercase">Curate Your Look</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="group cursor-pointer">
                <div className={`relative aspect-[3/4] rounded-[2.5rem] border-[12px] ${cat.color} overflow-hidden shadow-lg transition-transform group-hover:scale-[1.03]`}>
                  <Image src={cat.image} alt={cat.name} fill className="object-cover" />
                </div>
                <h3 className="mt-6 text-center text-2xl font-black uppercase text-[#ff4d6d]">{cat.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 4. WORTH THE HYPE */}
        <section className="py-12 md:py-24 container mx-auto px-4">
          <h2 className="md:hidden text-center text-3xl font-black mb-8">Worth the Hype</h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 min-h-[500px] flex flex-col">
              {/* Desktop View */}
              <div className="hidden lg:flex relative rounded-[4rem] overflow-hidden bg-[#f8b4c0] h-full flex-col justify-end shadow-xl">
                <Image src="/worththehype.webp" alt="Bestsellers" fill className="object-cover mix-blend-multiply opacity-90" />
                <div className="relative p-12 z-10">
                  <h3 className="text-white text-6xl font-black uppercase tracking-tighter">Best Sellers</h3>
                </div>
              </div>

              {/* Simplified Mobile Full-Image Carousel */}
              <div className="block lg:hidden w-full overflow-hidden" ref={hypeMobileRef}>
                <div className="flex touch-pan-y">
                  {HYPE_MOBILE_SLIDES.map((slide, idx) => (
                    <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative px-2">
                      <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-lg">
                        <Image src={slide.image} alt={`Poster ${idx + 1}`} fill className="object-cover" />
                        
                        {/* Dots Overlay */}
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                          {HYPE_MOBILE_SLIDES.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              onClick={() => hypeMobileApi?.scrollTo(dotIdx)}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                dotIdx === hypeIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/40'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="hidden md:block text-[#ff4d6d] text-5xl font-black mb-12 italic lowercase" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Worth the Hype
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12 mt-4 md:mt-0">
                {WORTH_THE_HYPE_PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4 relative">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8 bold uppercase tracking-tight">More To Love</h2>
          <div className="relative group">
            <div className="overflow-hidden px-4 md:px-10" ref={moreLoveRef}>
              <div className="flex -ml-6">
                {MORE_TO_LOVE_PRODUCTS.map((p) => (
                  <div key={p.id} className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] pl-6">
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => moreLoveApi?.scrollPrev()} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full shadow-xl border border-pink-50 text-[#ff4d6d] hover:bg-[#ff4d6d] hover:text-white opacity-0 group-hover:opacity-100 transition-all"><ChevronLeft size={28}/></button>
            <button onClick={() => moreLoveApi?.scrollNext()} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full shadow-xl border border-pink-50 text-[#ff4d6d] hover:bg-[#ff4d6d] hover:text-white opacity-0 group-hover:opacity-100 transition-all"><ChevronRight size={28}/></button>
          </div>
        </section>

        <section className="py-12 md:py-24 container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8 uppercase tracking-tight">
            Iconic Original Collections
          </h2>
          <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-xl transition-all hover:shadow-2xl group cursor-pointer border border-gray-100">
            <div className="hidden md:block relative aspect-[2/1] w-full">
              <Image src="/iconicoriginal.webp" alt="The Twilight Saga Collection" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" priority />
              <div className="absolute bottom-8 right-8 z-20">
                <button className="bg-white/90 backdrop-blur-md text-slate-900 border border-white/40 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg hover:bg-[#ff4d6d] hover:text-white hover:border-[#ff4d6d] transition-all transform hover:scale-105">
                  Shop Collection
                </button>
              </div>
            </div>
            <div className="block md:hidden relative aspect-[4/5] w-full">
              <Image src="/iconicorignalphone.webp" alt="Eternal Glam Collection" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="pb-24 pt-8 container mx-auto px-4 relative">
          <div className="relative group">
            <div className="overflow-hidden px-4 md:px-10" ref={twilightRef}>
              <div className="flex -ml-6">
                {TWILIGHT_PRODUCTS.map((p) => (
                  <div key={p.id} className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] pl-6">
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => twilightApi?.scrollPrev()} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full shadow-xl border border-pink-50 text-slate-800 hover:bg-slate-900 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
              <ChevronLeft size={28}/>
            </button>
            <button onClick={() => twilightApi?.scrollNext()} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full shadow-xl border border-pink-50 text-slate-800 hover:bg-slate-900 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
              <ChevronRight size={28}/>
            </button>
          </div>
        </section>


  <section className="py-12 md:py-24 container mx-auto px-4">
          <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-xl transition-all hover:shadow-2xl group cursor-pointer border border-gray-100">
            <div className="hidden md:block relative aspect-[2/1] w-full">
              <Image src="/harry.webp" alt="The Harry Potter Collection" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" priority />
              <div className="absolute bottom-8 right-8 z-20">
                <button className="bg-white/90 backdrop-blur-md text-slate-900 border border-white/40 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg hover:bg-[#ff4d6d] hover:text-white hover:border-[#ff4d6d] transition-all transform hover:scale-105">
                  Shop Collection
                </button>
              </div>
            </div>
            <div className="block md:hidden relative aspect-[4/5] w-full">
              <Image src="/harryphone.webp" alt="Eternal Glam Collection" fill className="object-cover" />
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
            <button onClick={() => twilightApi?.scrollPrev()} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full shadow-xl border border-pink-50 text-slate-800 hover:bg-slate-900 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
              <ChevronLeft size={28}/>
            </button>
            <button onClick={() => twilightApi?.scrollNext()} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-4 rounded-full shadow-xl border border-pink-50 text-slate-800 hover:bg-slate-900 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
              <ChevronRight size={28}/>
            </button>
          </div>
        </section>



<section className="py-12 md:py-24 overflow-hidden">
  <h2 className="text-2xl md:text-3xl font-black text-center mb-10 uppercase tracking-tight px-4">
    Your Hot Takes
  </h2>

  {/* --- MOBILE VERSION: Symmetrical Zoom --- */}
  <div className="block md:hidden w-full overflow-visible" ref={hotTakesRef}>
    <div className="flex touch-pan-y items-center">
      {HOT_TAKES_MOBILE_SLIDES.map((slide, index) => (
        <div 
          key={slide.id} 
          className="flex-[0_0_88%] min-w-0 px-2" // 88% allows side cards to show equally
        >
          <motion.div 
            animate={{ 
              // Zoom effect: active card is full size, others are smaller to show curves
              scale: index === hotIndex ? 1 : 0.88,
              opacity: index === hotIndex ? 1 : 0.4,
            }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="relative aspect-[1.1/1] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-white"
          >
            <Image 
              src={slide.image} 
              alt={`Review ${slide.id}`} 
              fill 
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        </div>
      ))}
    </div>
    
    {/* Pagination: Matches the screenshot bar style */}
    <div className="flex justify-center mt-6 relative z-20">
      <div className="bg-black/10 backdrop-blur-md px-4 py-2 rounded-full flex gap-2 items-center border border-white/20">
        {HOT_TAKES_MOBILE_SLIDES.map((_, dotIdx) => (
          <div
            key={dotIdx}
            className={cn(
              "h-1 rounded-full transition-all duration-500",
              dotIdx === hotIndex 
                ? "w-8 bg-gray-900" 
                : "w-1.5 bg-gray-400/50"
            )}
          />
        ))}
      </div>
    </div>
  </div>

  {/* --- DESKTOP VERSION --- */}
  {/* --- DESKTOP VERSION: Horizontal Stars & Zoom Effects --- */}
<div className="hidden md:grid container mx-auto px-4 grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
  
  {/* Left: Image Card */}
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="rounded-[4rem] overflow-hidden aspect-square md:aspect-auto relative shadow-xl"
  >
    <Image src="/hottakes.webp" alt="Model" fill className="object-cover" />
  </motion.div>
  
  {/* Center: Light Pink Card (Matches Review 1 screenshot) */}
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-[#ffb7d5] rounded-[4rem] p-12 flex flex-col items-center justify-between text-center space-y-6 shadow-sm border border-pink-200"
  >
    <div className="flex flex-col items-center space-y-6">
      {/* FORCE HORIZONTAL STARS HERE */}
      <div className="flex flex-row justify-center items-center w-full">
        <Rating 
          initialValue={5} 
          readonly 
          size={32} 
          fillColor="#ff00a0" 
          emptyColor="#ffffff"
          className="flex flex-row" // Ensures stars don't wrap
          SVGclassName="inline-block" // Ensures stars sit side-by-side
        />
      </div>
      
      <p className="text-[17px] font-bold leading-relaxed px-4 text-white italic">
        &ldquo;Sooo easy! This lovely little magic in a bottle has totally transformed my contour game.&rdquo;
      </p>
    </div>
    
    <button className="bg-[#ff00a0] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-colors shadow-lg">
      Shop Now
    </button>
  </motion.div>

  {/* Right: Dark Pink Card (Matches Review 2 screenshot) */}
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-[#ff00a0] rounded-[4rem] p-12 flex flex-col items-center justify-between text-center space-y-6 shadow-xl text-white"
  >
    <div className="flex flex-col items-center space-y-6">
      {/* FORCE HORIZONTAL STARS HERE */}
      <div className="flex flex-row justify-center items-center w-full">
        <Rating 
          initialValue={5} 
          readonly 
          size={32} 
          fillColor="#ffffff" 
          emptyColor="rgba(255,255,255,0.3)"
          className="flex flex-row"
          SVGclassName="inline-block"
        />
      </div>
      
      <p className="text-[17px] font-bold leading-relaxed px-4 italic">
        &ldquo;I absolutely loved the products I got from SHEGLAM! The eyeshadow primer was so effective.&rdquo;
      </p>
    </div>
    
    <button className="bg-white text-[#ff00a0] px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-lg">
      Shop Now
    </button>
  </motion.div>
</div>
</section>



<section className="py-12 md:py-20 overflow-hidden bg-white">
  <h2 className="text-2xl md:text-4xl font-black text-center mb-10 uppercase tracking-tighter">
    Built on Beliefs
  </h2>

  <div className="w-full" ref={beliefsRef}>
    <div className="flex touch-pan-y items-center">
      {BELIEFS_SLIDES.map((slide, index) => (
        <div 
          key={slide.id} 
          // Mobile: 90% width | Desktop: 94% width (Covers almost whole page)
          className="flex-[0_0_90%] md:flex-[0_0_94%] min-w-0 px-2 md:px-4"
        >
          <motion.div 
            animate={{ 
              scale: index === beliefsIndex ? 1 : 0.94,
              opacity: index === beliefsIndex ? 1 : 0.5,
            }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full aspect-square md:aspect-[2.4/1] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl bg-gray-50"
          >
            {/* Desktop Image - Cinematic Wide */}
            <div className="hidden md:block absolute inset-0">
              <Image 
                src={slide.desktop} 
                alt="Beliefs" 
                fill 
                className="object-cover"
                priority={index === 0}
              />
            </div>
            
            {/* Mobile Image - Square/Portrait */}
            <div className="block md:hidden absolute inset-0">
              <Image 
                src={slide.mobile} 
                alt="Beliefs" 
                fill 
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </motion.div>
        </div>
      ))}
    </div>

    {/* Symmetrical Pagination Indicator */}
    <div className="flex justify-center mt-10 md:mt-14">
      <div className="bg-black/5 backdrop-blur-sm px-5 py-2.5 rounded-full flex gap-2.5 items-center border border-black/5">
        {BELIEFS_SLIDES.map((_, dotIdx) => (
          <div
            key={dotIdx}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              dotIdx === beliefsIndex 
                ? "w-12 bg-gray-900" // Long bar like your screenshot
                : "w-2 bg-gray-300" // Subtle dots
            )}
          />
        ))}
      </div>
    </div>
  </div>
</section>


<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 max-w-7xl">
    
    {/* Heading matching your screenshot */}
    <h2 className="text-3xl md:text-5xl font-black text-center mb-16 md:mb-24 tracking-tighter text-slate-900">
      Passion Meets Purpose
    </h2>

    {/* DESKTOP VIEW: Single horizontal row of 5 */}
    <div className="hidden md:grid grid-cols-5 gap-8 items-start">
      {BRAND_VALUES.map((value) => (
        <div key={value.id} className="flex flex-col items-center text-center space-y-6 group">
          <div className={`${value.color} transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-sm`}>
            {value.icon}
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-xl tracking-tight">{value.title}</h3>
            <p className="text-[14px] leading-relaxed text-slate-500 font-medium px-2">
              {value.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* MOBILE VIEW: 3-2 Grid Pattern */}
    <div className="md:hidden">
      {/* Row 1: 3 items */}
      <div className="grid grid-cols-3 gap-x-2 gap-y-10 mb-12 items-start">
        {BRAND_VALUES.slice(0, 3).map((value) => (
          <div key={value.id} className="flex flex-col items-center text-center space-y-3">
            <div className={value.color}>{value.icon}</div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-[12px] leading-tight">
                {value.title}
              </h3>
              <p className="text-[9px] leading-tight text-slate-500 font-medium px-1">
                {value.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: 2 items centered */}
      <div className="grid grid-cols-2 gap-x-6 max-w-[85%] mx-auto items-start">
        {BRAND_VALUES.slice(3, 5).map((value) => (
          <div key={value.id} className="flex flex-col items-center text-center space-y-3">
            <div className={value.color}>{value.icon}</div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-[12px] leading-tight">
                {/* Specific mobile override for FSC title if needed */}
                {value.id === 4 ? "FSC" : value.title}
              </h3>
              <p className="text-[9px] leading-tight text-slate-500 font-medium px-1">
                {value.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


<section className="py-16 md:py-24 bg-white overflow-hidden">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-20 tracking-tighter">
      Press-Worthy Glam
    </h2>

    {/* --- DESKTOP VIEW: 3-Column Grid --- */}
    <div className="hidden md:grid grid-cols-3 gap-8">
      {PRESS_GLAM_IMAGES.map((img, idx) => (
        <div 
          key={idx} 
          className="relative aspect-[1/1.2] w-full rounded-[4rem] overflow-hidden shadow-sm border border-gray-100"
        >
          <Image 
            src={img} 
            alt={`Press Review ${idx + 1}`} 
            fill 
            className="object-cover"
          />
        </div>
      ))}
    </div>

    {/* --- MOBILE VIEW: Symmetrical Zoom Carousel --- */}
    <div className="md:hidden w-full overflow-visible" ref={pressGlamRef}>
      <div className="flex touch-pan-y items-center">
        {PRESS_GLAM_IMAGES.map((img, index) => (
          <div key={index} className="flex-[0_0_88%] min-w-0 px-2">
            <motion.div 
              animate={{ 
                scale: index === pressIndex ? 1 : 0.9,
                opacity: index === pressIndex ? 1 : 0.5
              }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative aspect-[1/1.3] w-full rounded-[3rem] overflow-hidden shadow-xl"
            >
              <Image 
                src={img} 
                alt={`Press Review Mobile ${index + 1}`} 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Dark Pill Indicator */}
      <div className="flex justify-center mt-10 relative z-20">
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
  </div>
</section>


















      </main>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-10 right-10 z-50 bg-white p-5 rounded-full shadow-2xl border border-pink-100 text-[#ff4d6d] hover:scale-110 transition-transform">
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