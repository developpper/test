"use client"

const ContactUs = () => {
    return (
        <div className="w-full bg-white">
            {/* Header Section */}
            <section
                style={{
                    backgroundImage: `linear-gradient(to right, rgb(229, 189, 189),rgba(250, 210, 220, 0.8)), url(https://beauty.ksensesworld.com/media/bg_ptrn.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    
                }}
                className="w-full p-10  md:p-32 md:px-48">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl    font-bold text-white">
                        Contact Us
                    </h1>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="w-full bg-gray-50 py-12 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {/* Call & WhatsApp */}
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-[#C59D5F] rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 text-white"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                Call & Whats App
                            </h3>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <p className="text-gray-700">+971 55 567 8604</p>
                                <p className="text-gray-700">+971 4 565 5272</p>
                            </div>
                        </div>

                        {/* Email & Website */}
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-[#C59D5F] rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 text-white"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                Email & Website
                            </h3>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <p className="text-gray-700 break-all">
                                    info@keeneesworld.com
                                </p>
                                <p className="text-gray-700 break-all">
                                    beauty.keeneesworld.com
                                </p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-[#C59D5F] rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 text-white"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Address</h3>
                            <div className="flex flex-wrap gap-1 justify-center">
                                <p className="text-gray-700">
                                    Fashion Entrance P4 Retail 007,Dubai Hills Mall, Dubai - UAE
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map Section */}
            <section className="w-full bg-white py-12 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
                        Google Map Direction
                    </h2>

                    {/* Map Container */}
                    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14451.983615101728!2d55.237123!3d25.102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f779daf8af7%3A0xb6efb3ef0d2f2a4b!2sKsenses%20World%20Ladies%20Salon!5e0!3m2!1sen!2sus!4v1760640347751!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
