import Header from "../components/ui/Header";
import ImageSection from "../components/ui/ImageSection";
import Invoice from "../components/ui/Invoice";
import ScrollableVideoSection from "../components/ui/ScrollableVideoSection";
import SearchProduct from "../components/ui/SearchProduct";
import ServicesSection from "../components/ui/ServicesSection";
import VideoSection from "../components/ui/VideoSection";



export default function Home() {
  return (
    <main className="bg-#FFDBDB">
      <VideoSection/>
      <ScrollableVideoSection/>
      <ImageSection/>
      <SearchProduct/>
      <Header/>
      <ServicesSection/>
      <Invoice />

    </main>
  );
}
