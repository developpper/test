"use client";


// import Image from "next/image";

// const services = [
//   {
//     title: "FOUNDATION FINDER",
//     button: "FIND MY SHADE PRECISELY",
//     images: ["/image1.jpg", "/image2.jpg", "/makeup2.jpg"],
//   },
//   {
//     title: "SKINCARE PRO ADVISOR",
//     button: "DEFINE YOUR ROUTINE",
//     images: ["/makeup1.jpg", "/makeup2.jpg", "/image2.jpg"],
//   },
//   {
//     title: "FOUNDATION FINDER",
//     button: "FIND MY SHADE PRECISELY",
//     images: ["/image1.jpg", "/image2.jpg", "/makeup2.jpg"],
//   },
//   {
//     title: "SKINCARE PRO ADVISOR",
//     button: "DEFINE YOUR ROUTINE",
//     images: ["/makeup1.jpg", "/makeup2.jpg", "/image1.jpg"],
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-10 bg-pink-50">
//       <div className="text-center mb-6">
//         <h2 className="text-3xl font-light">
//           Our <span className="font-bold">services</span> for you
//         </h2>
//       </div>

//       <div className="px-4">
//         <div
//           className="
//             flex md:grid 
//             md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
//             gap-6 
//             overflow-x-auto md:overflow-visible 
//             whitespace-nowrap md:whitespace-normal 
//             scroll-smooth
//             no-scrollbar
//           "
//         >
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="inline-block md:inline-block w-80 md:w-auto p-4 flex-shrink-0"
//             >
//               {/* Image Layout */}
//               <div className="flex gap-2 mb-4 h-48">
//                 {/* Left large image */}
//                 <div className="relative w-2/3">
//                   <Image
//                     src={service.images[0]}
//                     alt={service.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                 </div>

//                 {/* Right - two small stacked images */}
//                 <div className="w-1/3 flex flex-col gap-2">
//                   {[service.images[1], service.images[2]].map((img, i) => (
//                     <div key={i} className="relative h-1/2">
//                       <Image
//                         src={img}
//                         alt={`${service.title} ${i + 2}`}
//                         layout="fill"
//                         objectFit="cover"
//                         className="rounded-lg"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Title and Button */}
//               <h3 className="text-center font-semibold text-sm mb-2">{service.title}</h3>
//               <button className="bg-white border border-gray-200 shadow text-black text-xs py-2 px-4 rounded-lg w-full font-semibold">
//                 {service.button}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }














import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSection() {
const services = [
  {
    title: "FOUNDATION FINDER",
    subtitle: "Discover your ideal match\nwith expert precision.",
    button: "FIND MY SHADE PRECISELY",
    img: "https://images.kikocosmetics.com/lf2wbbijeo86/3wNfpadW2CqTaFkIa5fYEp/b73d8403a4de0bac002a92f178c6cf66/VirtualTryOn_490x490.png?w=384&fm=webp",
  },
  {
    title: "SKINCARE PRO ADVISOR",
    subtitle: "Get a personalized skincare plan\nthat suits your skin type.",
    button: "DEFINE YOUR ROUTINE",
    img: "https://images.kikocosmetics.com/lf2wbbijeo86/2PqU21wP28QPsmKvEnLigy/9624169fe6d44695c849446b0fdd6c60/Info_BeautyServices_NEW-ServicesBox_BeautyServices.webp?w=384&fm=webp",
  },
  {
    title: "FOUNDATION FINDER",
    subtitle: "Let technology guide you\nto your perfect foundation.",
    button: "FIND MY SHADE PRECISELY",
    img: "https://images.kikocosmetics.com/lf2wbbijeo86/2RXtlOynzId4aY3qyxLItX/82d1e9050514221753ee95ee2e6df2ee/FoundationFInder_922x922.png?w=384&fm=webp",
  },
  {
    title: "SKINCARE PRO ADVISOR",
    subtitle: "Expert routines built just for you\nbased on your skin’s needs.",
    button: "DEFINE YOUR ROUTINE",
    img: "https://images.kikocosmetics.com/lf2wbbijeo86/eeNAPSZYEXD09lXKSxq1D/e6ebf740e45b6522b5a136644dcc77c9/VirtualSkincareAdvisor_922x922.png?w=384&fm=webp",
  },
  {
    title: "FOUNDATION FINDER",
    subtitle: "Discover your ideal match\nwith expert precision.",
    button: "FIND MY SHADE PRECISELY",
    img: "https://images.kikocosmetics.com/lf2wbbijeo86/3wNfpadW2CqTaFkIa5fYEp/b73d8403a4de0bac002a92f178c6cf66/VirtualTryOn_490x490.png?w=384&fm=webp",
  },
];


  return (
    <section className="py-10 bg-pink-50">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-light">
          Our <span className="font-bold">services</span> for you
        </h2>
      </div>

      <div className="px-4">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop  
          autoplay={{ delay: 2500, disableOnInteraction: false }}  
          pagination={{ clickable: true }}
          modules={[Autoplay]}  
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <div className="w-[280px]">
                  <h3 className="text-center font-semibold text-sm mb-2">
                    {service.title}
                  </h3>
                  <h3 className="text-center text-sm mb-2 whitespace-pre-line">
                    {service.subtitle}
                  </h3>
                  <button className="bg-white border border-gray-300 shadow text-black text-xs py-2 px-4 rounded-lg w-full font-semibold hover:bg-gray-50 transition">
                    {service.button}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
