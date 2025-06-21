import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={elementRef}
      className={cn(
        "section-padding bg-champagne/30",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            My Story
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-playfair text-2xl font-semibold text-burgundy mb-4"
            >
              A unique journey from academia to artistry
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-charcoal/80 leading-relaxed"
            >
              My path to pastry began with a solid foundation in International Studies 
              and Law from Jindal Global University. This academic background instilled 
              in me the precision and attention to detail that now defines my approach 
              to pastry arts.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-charcoal/80 leading-relaxed"
            >
              Professionally trained at APCA Malaysia in Gurugram, I discovered my true 
              passion lies in creating extraordinary desserts that tell stories through 
              flavors, textures, and artistic presentation.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 elegant-border bg-cream/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="font-playfair text-3xl font-bold text-gold mb-2">3+</div>
                <div className="text-charcoal/70">Years Experience</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 elegant-border bg-cream/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="font-playfair text-3xl font-bold text-gold mb-2">200+</div>
                <div className="text-charcoal/70">Unique Creations</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={isVisible ? { scale: 1 } : { scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src="https://ap-south-1.graphassets.com/cmc4r40nr0eww06o9aphl1syd/cmc5pkaa41zeq07o8weu0x180"
                alt="Pastry chef creating artisanal desserts"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-2xl shadow-xl"
            >
              <div className="text-burgundy font-playfair text-lg font-semibold">
                "Precision meets<br />passion"
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
