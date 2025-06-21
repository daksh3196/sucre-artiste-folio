
import { Cake } from "lucide-react";

const specialties = [
  {
    title: "Artisanal Dessert Bars",
    description: "Crafting unique dessert experiences that combine visual appeal with extraordinary flavors.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    title: "Contemporary Pastries",
    description: "Modern interpretations of classic pastries with innovative techniques and presentation.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fusion Desserts",
    description: "Blending international techniques with local flavors to create unique dessert experiences.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Signature Cakes",
    description: "Custom celebration cakes that tell stories through layers of flavor and artistic design.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cloud Kitchen Specials",
    description: "Desserts designed for delivery without compromising on quality or presentation.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Experiential Treats",
    description: "Interactive desserts that engage all senses for memorable dining experiences.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export const Specialties = () => {
  return (
    <section id="specialties" className="section-padding bg-cream">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            My Signature Creations
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Each creation reflects my journey from law to pastry arts, 
            combining precision with artistic flair and innovative techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift animate-fade-in ${
                specialty.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`aspect-square ${specialty.featured ? 'lg:aspect-[4/5]' : ''}`}>
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-burgundy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Cake className="w-5 h-5 text-gold" />
                  <h3 className="font-playfair text-xl font-semibold">
                    {specialty.title}
                  </h3>
                </div>
                <p className="text-cream/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {specialty.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-burgundy text-cream px-8 py-4 rounded-lg font-medium text-lg hover:bg-burgundy/90 transition-colors duration-200 hover-lift">
            View My Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};
