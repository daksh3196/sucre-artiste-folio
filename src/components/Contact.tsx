
export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            Let's Create Together
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Ready to bring your dessert vision to life? 
            Let's collaborate on creating unforgettable sweet experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-burgundy mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-burgundy font-semibold">📍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-burgundy mb-1">Location</h4>
                    <p className="text-charcoal/70">Gurugram, Delhi NCR<br />India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-burgundy font-semibold">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-burgundy mb-1">Email</h4>
                    <p className="text-charcoal/70">hello@sweetartistry.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-burgundy font-semibold">💼</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-burgundy mb-1">Services</h4>
                    <p className="text-charcoal/70">
                      Custom Desserts • Event Catering<br />
                      Dessert Consulting • Recipe Development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 elegant-border bg-champagne/30">
              <h4 className="font-playfair text-xl font-semibold text-burgundy mb-3">
                Collaboration Opportunities
              </h4>
              <p className="text-charcoal/70 mb-4">
                From custom celebrations to restaurant collaborations, 
                I'm always excited to explore new creative partnerships.
              </p>
              <button className="bg-burgundy text-cream px-6 py-3 rounded-lg font-medium hover:bg-burgundy/90 transition-colors duration-200">
                Start a Project
              </button>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Artisanal dessert creation workspace"
                className="w-full h-full object-cover hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
