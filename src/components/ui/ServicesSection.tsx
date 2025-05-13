import Image from "next/image";

const services = [
  {
    title: "FOUNDATION FINDER",
    button: "FIND MY SHADE PRECISELY",
    images: ["/image1.jpg", "/image2.jpg"],
  },
  {
    title: "SKINCARE PRO ADVISOR",
    button: "DEFINE YOUR ROUTINE",
    images: ["/makeup1.jpg", "/makeup2.jpg"],
  },
  {
    title: "FOUNDATION FINDER",
    button: "FIND MY SHADE PRECISELY",
    images: ["/image1.jpg", "/image2.jpg"],
  },
  {
    title: "SKINCARE PRO ADVISOR",
    button: "DEFINE YOUR ROUTINE",
    images: ["/makeup1.jpg", "/makeup2.jpg"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-10 bg-pink-50">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-light">
          Our <span className="font-bold">services</span> for you
        </h2>
      </div>

      {/* Wrapper for responsive layout */}
      <div className="px-4">
        <div
          className="
            flex md:grid 
            md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            gap-6 
            overflow-x-auto md:overflow-visible 
            whitespace-nowrap md:whitespace-normal 
            scroll-smooth
            no-scrollbar
          "
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                inline-block md:inline-block 
                w-80 md:w-auto 
                 p-4 
                flex-shrink-0
              "
            >
              <div className="flex gap-2 mb-4">
                {service.images.map((imgSrc, imgIdx) => (
                  <div key={imgIdx} className="w-1/2 h-24 relative">
                    <Image
                      src={imgSrc}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-center font-semibold text-sm mb-2">{service.title}</h3>
              <button className="bg-white border border-gray-200 shadow text-black text-xs py-1 px-4 rounded-lg w-full">
                {service.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
