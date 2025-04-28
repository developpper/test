"use client";

import React, { useRef, useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa"; 

const images = [
  { src: "/file.svg" },
  { src: "/file.svg" },
  { src: "/file.svg" },
  { src: "/file.svg" },
  { src: "/file.svg" },
  { src: "/file.svg" },
  { src: "/file.svg" },
];

const ImageSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", handleScroll);
      return () => {
        current.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="w-full py-10 bg-white relative">
      {/* Images Scroll Area */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-4 pb-6 relative scroll-smooth"
        style={{ scrollbarWidth: "none" }} // Firefox
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group w-44 md:w-52 aspect-[9/16] overflow-hidden rounded-xl bg-gray-200 shadow-lg shrink-0"
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Instagram Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30">
              <FaInstagram className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar + Buttons */}
      <div className="flex items-center px-4 gap-4 mt-4">
        {/* Scrollbar */}
        <div className="flex-1 h-[2px] bg-gray-300 overflow-hidden rounded-full relative">
          <div
            className="absolute left-0 top-0 h-full bg-black"
            style={{
              width: `${scrollProgress}%`,
              transition: "width 0.1s",
            }}
          />
        </div>

        {/* Left and Right Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-300)}
            className="p-2 bg-black text-white rounded-full"
          >
            ←
          </button>
          <button
            onClick={() => scroll(300)}
            className="p-2 bg-black text-white rounded-full"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
