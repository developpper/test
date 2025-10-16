"use client"

import Image from "next/image";

const MakeUp = () => {
    const products = [
        {
            id: 1,
            title: "HD SKIN",
            description:
                "This undetectable liquid foundation blurs and covers imperfections for 24 hours, powered by a micro-skin system that syncs with the skin for a true-to-skin finish.",
            image: "https://www.makeupforever.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwc277b4f2/marque-cfe/HD%20SKIN%20FOUNDATION-LA-MARQUE.jpg",
        },
        {
            id: 2,
            title: "ROUGE ARTIST",
            description:
                "40 shades of ultra-pigmented color, from intense reds to soft nudes, with a choice of matte, satin or glossy finishes, to find your ideal lipstick.",
            image: "https://www.makeupforever.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwbf10beb9/marque-cfe/PerfRA.jpg",
        },
        {
            id: 3,
            title: "AQUA RESIST",
            description:
                "Discover the Aqua Resist range of high-performance eye makeup products. Take your look to the next level using eyeshadows, eyeliners, and brow products with intense color payoff and maximum resistance.",
            image: "https://www.makeupforever.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw09e08f04/marque-cfe/BTSVISUAL-AQUARESISTCOLORINKSHADEEXTENSION2024-AMBIANCE-2-4x5.jpg",
        },
        {
            id: 4,
            title: "BRUSHES",
            description:
                "Nothing is more essential to an artist than their brush, whether they’re a painter or makeup artist. Discover our handcrafted artisan brushes, co-created with our pros to uniquely serve and adapt to all your makeup needs.",
            image: "https://www.makeupforever.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw4efe57b8/marque-cfe/PerfBrushes.jpg",
        },
    ];

    return (
        <div className="w-full bg-white">
            {/* Hero Section - Collective of Artists */}
                        <img src="https://www.makeupforever.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw65589760/marque-cfe/Collectif-mobile2.jpg" alt="" className="h-60 md:h-96 object-cover w-full lg:hidden" />
            <section className="  w-full   bg-gray-100 flex items-center justify-center ">
                <div className="hero-bg  w-full flex justify-end items-center">
                    

                    {/* Text Content */}
                    <div className="max-w-xl  lg:py-60 flex flex-col justify-center space-y-7   text-left">
                        <h1 className="text-5xl md:text-3xl p-5 font-bold italic leading-10 md:leading-6  md:text-nowrap   tracking-tighter uppercase ">
                            WE ARE A COLLECTIVE OF
                             <br className="md:block hidden" />
                            MAKEUP ARTISTS
                        </h1>
                        <div className="bg-black md:bg-transparent flex flex-col gap-5 sm:px-16 p-5">
                            <p className="text-xs text-gray-50  md:text-gray-700 max-w-xl mx-auto lg:mx-0">
                                At MAKE UP FOR EVER, we celebrate your unique beauty. That's why  <br className="md:block hidden" /> we've made the expertise of our collective of makeup artists available to <br className="md:block hidden" /> you, to offer you the most innovative and efficient products and tips. Our <br className="md:block hidden" /> goal? To help you unleash your creativity and express your inner artist.
                            </p>
                            <div className="flex  justify-start">
                                <button className="md:bg-black md:text-white bg-white text-black px-8 py-3 rounded-sm hover:bg-gray-800 transition-colors text-xs font-medium">
                                    LEARN MORE
                                </button>
                            </div>
                      </div>
                    </div>
                </div>
            </section>

            {/* Products Co-Created Section */}
            <section className="  w-full   bg-black text-white   ">
                <div className="flex flex-col-reverse   w-full md:grid  lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center space-y-6 p-5  sm:pl-20     ">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic leading-7 md:leading-10 md:text-nowrap">
                            PRODUCTS CO-CREATED BY
                            <br className="md:block hidden" />
                            OUR PROS, FOR YOU
                        </h2>
                        <p className="leading-4 text-base text-gray-300 max-w-xl mx-auto lg:mx-0 sm:px-16">
                            40 of our top makeup artists work hand-in-hand to  <br className="md:block hidden" /> dream up the most efficient products possible. We  <br className="md:block hidden" /> develop products at the forefront of technological and  <br className="md:block hidden" /> artistic advances in texture, color and performance.
                        </p>
                    </div>

                    {/* Image placeholder */}
                    <div className=" ">
                        <img src="https://www.makeupforever.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw9b66e78a/marque-cfe/Produits-Pro.jpg" alt="" />
                    </div>
                </div>
            </section>

            {/* High-Performance Products Section */}
            <section className="w-full bg-white  ">
                <div className=" ">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold italic   m-5 ">
                        HIGH-PERFORMANCE PRODUCTS
                    </h2>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  ">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex flex-col   group cursor-pointer"
                            >
                                {/* Product Image */}
                                <div className="  bg-gray-200   overflow-hidden">
                                   <img src={product.image} alt="" className="h-96 w-full sm:h-auto object-cover"/>
                                </div>

                                {/* Product Info */}
                                <div className="flex flex-col justify-between gap-5 md:gap-8 p-5 md:p-8">
                                    <h3 className="text-lg md:text-3xl tracking-tighter font-bold italic">
                                        {product.title}
                                    </h3>
                                    <p className="text-xs md:text-sm  text-gray-900   md:h-28">
                                        {product.description}
                                    </p>
                                    <button className="bg-black text-white px-6 py-2 md:px-10 md:py-3 rounded-sm hover:bg-gray-800 transition-colors text-xs md:text-sm font-medium w-fit">
                                        DISCOVER
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Expertise Section */}
            <section className="  w-full min-h-screen bg-gray-100 flex items-center justify-center  ">
                <div className="flex flex-col-reverse  w-full md:grid grid-cols-1 lg:grid-cols-2 items-center">
                    {/* Image placeholder */}
                    <div className="  bg-gray-300   overflow-hidden">
                        <img src="https://www.makeupforever.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dwfb060370/marque-cfe/Heritage.jpg" alt="" />
                    </div>

                    {/* Text Content */}
                    <div className="  w-full h-full bg-black text-white  flex items-center justify-center  ">
                        <div className="space-y-6  p-5 lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight tracking-tighter">
                                MORE THAN 20 YEARS
                                 <br className="md:block hidden" />
                                OF TRAINING EXPERTISE
                            </h2>
                            <p className="text-sm md:text-base text-gray-300 sm:px-20">
                                The MAKE UP FOR EVER ACADEMY celebrates more  <br className="md:block hidden" />
                                than 20 years of education. Moving our unique  <br className="md:block hidden" />
                                Parisian tradition forward and the future of makeup  <br className="md:block hidden" />
                                is at the heart of everything we do. Each, and the  <br className="md:block hidden" />
                                shambleau, our community of passionate instructors  <br className="md:block hidden" />
                                supports the development of tomorrow through  <br className="md:block hidden" />
                                intensive training in the next generation of professional  <br className="md:block hidden" />
                                training recognized worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="  w-full   bg-gray-100 flex items-center justify-center  ">
                   
                    {/* Text Content */}
                    <div className="  w-full h-full bg-black text-white  flex items-center justify-center  ">
                        <div className="space-y-6  p-5 lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight tracking-tighter">
                            DISCOVER A BRAND WITH 
                                 <br className="md:block hidden" />
                            40 YEARS OF HISTORY​
                            </h2>
                            <p className="text-sm md:text-base text-gray-300 sm:px-20">
                            Make Up For Ever celebrates 40 years of rich history in<br className="md:block hidden" />
                             creativity and innovation in the world of makeup,<br className="md:block hidden" />
                             embodying the passion and expertise that have<br className="md:block hidden" />
                             shaped the industry for four decades. <br  />

                            <h1 className="mb-7"></h1>
                            "The products are serious, but makeup is still a game. I <br className="md:block hidden" />wanted to open a universe of freedom, imagining an<br className="md:block hidden" /> infinity of colors, with ultra sharp and simple products,<br className="md:block hidden" /> with ultra long-lasting results. I wanted makeup to<br className="md:block hidden" /> become a source of<br className="md:block hidden" /> inspiration, a real field of possibilities."
                            </p>
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default MakeUp;
