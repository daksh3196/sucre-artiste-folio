
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Specialties } from "@/components/Specialties";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <About />
      <Specialties />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
