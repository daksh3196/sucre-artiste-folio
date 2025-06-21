
export const About = () => {
  return (
    <section id="about" className="section-padding bg-champagne/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            Art & Passion
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-playfair text-2xl font-semibold text-burgundy mb-4">
              A family tradition spanning three generations
            </h3>
            
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Trained in the most prestigious patisseries of Paris and Lyon, 
              I perpetuate the ancestral art of French pastry-making with a 
              modern and creative approach.
            </p>
            
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Each creation is the result of a rigorous selection of the finest 
              ingredients: AOP butter from Normandy, Grand Cru chocolate, Madagascar 
              vanilla, and carefully chosen seasonal fruits.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 elegant-border bg-cream/50">
                <div className="font-playfair text-3xl font-bold text-gold mb-2">15+</div>
                <div className="text-charcoal/70">Years of Experience</div>
              </div>
              <div className="text-center p-4 elegant-border bg-cream/50">
                <div className="font-playfair text-3xl font-bold text-gold mb-2">500+</div>
                <div className="text-charcoal/70">Unique Creations</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pastry chef at work"
                className="w-full h-full object-cover hover-lift"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-2xl shadow-xl">
              <div className="text-burgundy font-playfair text-lg font-semibold">
                "Perfection in<br />every detail"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
