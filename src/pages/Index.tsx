import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Specialties } from "@/components/Specialties";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header className="smooth-transition" />
      <main className="space-y-16 lg:space-y-24">
        <section className="fade-in">
          <Hero />
        </section>
        <section className="slide-up">
          <About />
        </section>
        <section className="slide-up">
          <Experience />
        </section>
        {/* <section className="slide-up">
          <Specialties />
        </section> */}
        <section className="slide-up">
          <Gallery />
        </section>
        <section className="slide-up">
          <Contact />
        </section>
      </main>
      <Footer className="smooth-transition" />
    </div>
  );
};

export default Index;
