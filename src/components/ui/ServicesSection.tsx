import Image from "next/image";

const services = [
  {
    title: "FOUNDATION FINDER",
    button: "FIND MY SHADE PRECISELY",
    images: ["/image1.jpg", "/image2.jpg", "/makeup2.jpg"],
  },
  {
    title: "SKINCARE PRO ADVISOR",
    button: "DEFINE YOUR ROUTINE",
    images: ["/makeup1.jpg", "/makeup2.jpg", "/image2.jpg"],
  },
  {
    title: "FOUNDATION FINDER",
    button: "FIND MY SHADE PRECISELY",
    images: ["/image1.jpg", "/image2.jpg", "/makeup2.jpg"],
  },
  {
    title: "SKINCARE PRO ADVISOR",
    button: "DEFINE YOUR ROUTINE",
    images: ["/makeup1.jpg", "/makeup2.jpg", "/image1.jpg"],
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
              className="inline-block md:inline-block w-80 md:w-auto p-4 flex-shrink-0"
            >
              {/* Image Layout */}
              <div className="flex gap-2 mb-4 h-48">
                {/* Left large image */}
                <div className="relative w-2/3">
                  <Image
                    src={service.images[0]}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                {/* Right - two small stacked images */}
                <div className="w-1/3 flex flex-col gap-2">
                  {[service.images[1], service.images[2]].map((img, i) => (
                    <div key={i} className="relative h-1/2">
                      <Image
                        src={img}
                        alt={`${service.title} ${i + 2}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Title and Button */}
              <h3 className="text-center font-semibold text-sm mb-2">{service.title}</h3>
              <button className="bg-white border border-gray-200 shadow text-black text-xs py-2 px-4 rounded-lg w-full font-semibold">
                {service.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
