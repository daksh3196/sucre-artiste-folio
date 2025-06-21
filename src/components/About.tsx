
export const About = () => {
  return (
    <section id="about" className="section-padding bg-champagne/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            My Story
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-playfair text-2xl font-semibold text-burgundy mb-4">
              A unique journey from academia to artistry
            </h3>
            
            <p className="text-lg text-charcoal/80 leading-relaxed">
              My path to pastry began with a solid foundation in International Studies 
              and Law from Jindal Global University. This academic background instilled 
              in me the precision and attention to detail that now defines my approach 
              to pastry arts.
            </p>
            
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Professionally trained at APCA Malaysia in Gurugram, I discovered my true 
              passion lies in creating extraordinary desserts that tell stories through 
              flavors, textures, and artistic presentation.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 elegant-border bg-cream/50">
                <div className="font-playfair text-3xl font-bold text-gold mb-2">3+</div>
                <div className="text-charcoal/70">Years Experience</div>
              </div>
              <div className="text-center p-4 elegant-border bg-cream/50">
                <div className="font-playfair text-3xl font-bold text-gold mb-2">200+</div>
                <div className="text-charcoal/70">Unique Creations</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pastry chef creating artisanal desserts"
                className="w-full h-full object-cover hover-lift"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-2xl shadow-xl">
              <div className="text-burgundy font-playfair text-lg font-semibold">
                "Precision meets<br />passion"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
