"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";

export default function Slider2() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const smallSlides = [
    { id: 1, src: "/banner1.jpeg" },
    { id: 2, src: "/banner2.jpeg" },
    { id: 3, src: "/banner3.jpeg" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row overflow-hidden mt-2">

      {/* LEFT — slider */}
      <div className="group relative w-full md:w-2/3">

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="h-full"
        >
          {smallSlides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-40 md:h-60">
                <Image
                  src={item.src}
                  alt="Small Slide"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT Arrow */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black text-white
          w-8 h-8 flex items-center justify-center rounded-full shadow-md z-50
          opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        >
          &#10094;
        </button>

        {/* RIGHT Arrow */}
        <button
          ref={nextRef}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black text-white
          w-8 h-8 flex items-center justify-center rounded-full shadow-md z-50
          opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        >
          &#10095;
        </button>
      </div>

      {/* RIGHT — static image */}
      <div className="hidden md:block w-1/3 relative h-60 ml-3">
        <Image
          src="/banner3.jpeg"
          alt="Large Banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
