import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ap-south-1.graphassets.com/cmc4r40nr0eww06o9aphl1syd/cmc5q6xcq1ys807o3w58xvsfp"
          alt="Pastry background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-20 relative z-10 text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mb-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="block"
          >
            Dikshita Nakra
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl text-gold mt-2 block font-cormorant"
          >
            Pastry Chef
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-charcoal/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate pastry chef crafting extraordinary desserts, 
          where precision meets creativity in every sweet creation.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-burgundy text-cream px-8 py-4 rounded-lg font-medium text-lg hover:bg-burgundy/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Explore My Creations
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-burgundy text-burgundy px-8 py-4 rounded-lg font-medium text-lg hover:bg-burgundy hover:text-cream transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div 
            className="animate-bounce cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg 
              className="w-6 h-6 text-burgundy"
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
