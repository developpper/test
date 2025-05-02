"use client";

import React, { useRef, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

const images = [
  { src: "https://haneenalsaify.com/cdn/shop/files/IMG_8004_380x506_crop_center.jpg?v=1654814408" },
  { src: "https://haneenalsaify.com/cdn/shop/files/CA7A3F00-8AE6-4461-AF5B-250A90E64A18_380x506_crop_center.jpg?v=1654814174" },
  { src: "https://haneenalsaify.com/cdn/shop/files/IMG_8006_db9e34da-860d-4f35-90a6-958853e494d3_380x506_crop_center.jpg?v=1654814408" },
  { src: "https://haneenalsaify.com/cdn/shop/files/IMG_8005_380x506_crop_center.jpg?v=1654814408" },
  { src: "https://haneenalsaify.com/cdn/shop/files/IMG_8007_380x506_crop_center.jpg?v=1654814409" },
];

const ImageSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.5;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += speed;

      // Reset scroll if near end (to beginning of duplicated content)
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Tripling the images to ensure seamless infinite scroll
  const extendedImages = [...images, ...images, ...images];

  return (
    <div className="w-full bg-[#FFEDFA] py-10 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 px-4 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="relative group w-44 md:w-52 p-2 shrink-0 rounded bg-gray-200 shadow-lg"
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30">
              <FaInstagram className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
