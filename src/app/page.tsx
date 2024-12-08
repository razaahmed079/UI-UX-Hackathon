import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "../components/hero";
import Products from "../components/products";
import Slides from "../components/slides";
import SubHero from "../components/subhero";

export default function Home() {
  return (
    <>
      <Header /> {/* Un-commented to include Header */}
      <Hero />
      <SubHero />
      <Products />
      <Slides />
      <Footer /> {/* Un-commented to include Footer */}
    </>
  );
}
