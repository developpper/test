import React, { useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const HERO_SLIDES = [
  { id: 1, desktopImage: "/herobanner.webp", mobileImage: "/herobannerphone.webp" },
  { id: 2, desktopImage: "/herobanner2.webp", mobileImage: "/herobanner2phone.webp" },
  { id: 3, desktopImage: "/herobanner3.webp", mobileImage: "/herobanner3phone.webp" }
];

export const HeroSlider = () => {
  const [heroRef, heroApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (!heroApi) return;
    const intervalId = setInterval(() => heroApi.scrollNext(), 3000);
    return () => clearInterval(intervalId);
  }, [heroApi]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white" ref={heroRef}>
      <div className="flex h-full">
        {HERO_SLIDES.map((slide) => (
          <div key={slide.id} className="relative flex-[0_0_100%] h-full overflow-hidden">
            <div className="hidden md:block absolute inset-0 w-full h-full"><Image src={slide.desktopImage} alt="Hero" fill className="object-cover" priority /></div>
            <div className="block md:hidden absolute inset-0 w-full h-full"><Image src={slide.mobileImage} alt="Hero" fill className="object-cover" priority /></div>
            <div className="absolute inset-0 bg-black/5" />
          </div>
        ))}
      </div>
    </section>
  );
};