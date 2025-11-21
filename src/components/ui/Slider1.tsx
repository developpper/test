"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Slider1() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const banners = [
    { id: 1, src: "/banner1.jpg", alt: "Slide 1" },
    { id: 2, src: "/banner2.jpg", alt: "Slide 2" },
    { id: 3, src: "/banner2.jpg", alt: "Slide 3" },
  ];

  return (
    <div className="relative group w-full">

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={10}
        className="w-full"
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-24 overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT ARROW */}
      <button
        ref={prevRef}
        className="prevArrow absolute top-1/2 left-2 -translate-y-1/2 z-50 
        bg-black w-8 h-8 rounded-full shadow-md flex items-center justify-center
        opacity-0 group-hover:opacity-50 transition-opacity duration-300 cursor-pointer"
      >
        <span className="text-xl font-bold text-white">&#10094;</span>
      </button>

      {/* RIGHT ARROW */}
      <button
        ref={nextRef}
        className="nextArrow absolute top-1/2 right-2 -translate-y-1/2 z-50 
        bg-black w-8 h-8 rounded-full shadow-md flex items-center justify-center
        opacity-0 group-hover:opacity-50 transition-opacity duration-300 cursor-pointer"
      >
        <span className="text-xl font-bold  text-white">&#10095;</span>
      </button>
    </div>
  );
}
