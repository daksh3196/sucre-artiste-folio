import { Cake } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Specialties = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      id="specialties" 
      ref={elementRef}
      className={cn(
        "section-padding bg-cream",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            My Signature Creations
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Each creation reflects my journey from law to pastry arts, 
            combining precision with artistic flair and innovative techniques.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              variants={item}
              className={cn(
                "group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500",
                "hover:shadow-2xl hover:-translate-y-2",
                specialty.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              )}
            >
              <div className={cn(
                "aspect-square",
                specialty.featured ? 'lg:aspect-[4/5]' : ''
              )}>
                <motion.img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-gold/20 p-2 rounded-full">
                    <Cake className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold">
                    {specialty.title}
                  </h3>
                </div>
                <p className="text-cream/90 text-sm leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-burgundy text-cream px-8 py-4 rounded-lg font-medium text-lg hover:bg-burgundy/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View My Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
