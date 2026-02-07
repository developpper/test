import ContactUs from "../components/ui/ContactUs";
import Header from "../components/ui/Header";
import ImageSection from "../components/ui/ImageSection";
import Invoice from "../components/ui/Invoice";
import MakeUp from "../components/ui/MakeUp";
import ScrollableVideoSection from "../components/ui/ScrollableVideoSection";
import SearchProduct from "../components/ui/SearchProduct";
import ServicesSection from "../components/ui/ServicesSection";
import Slider1 from "../components/ui/Slider1";
import Slider2 from "../components/ui/Slider2";
import VideoSection from "../components/ui/VideoSection";

// Import the new Landing Page
import SheglamLanding from "../components/ui/SheglamLanding";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      
      {/* 
        NOTE: The following components are commented out because they rely on 'swiper'.
        'swiper' is not in your allowed dependencies list. Uncommenting them will cause build errors.
      */}

      {/* <VideoSection/> */}
      {/* <ScrollableVideoSection/> */}
      {/* <ImageSection/> */}
      {/* <SearchProduct/> */}
      {/* <Header/> */}
      {/* <ServicesSection/> */}
      {/* <Invoice /> */}
      {/* <MakeUp /> */}
      {/* <ContactUs /> */}
      {/* <Slider1/> */}
      {/* <Slider2/> */}

      {/* --- NEW LANDING PAGE --- */}
      <SheglamLanding />

    </main>
  );
}