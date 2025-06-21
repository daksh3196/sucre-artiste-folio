
export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Let's create your exceptional moments together. 
            Custom orders and advice for your special events.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-burgundy mb-6">
                Practical Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-burgundy font-semibold">📍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-burgundy mb-1">Workshop</h4>
                    <p className="text-charcoal/70">12 Rue de la Patisserie<br />75001 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-burgundy font-semibold">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-burgundy mb-1">Phone</h4>
                    <p className="text-charcoal/70">+33 1 42 36 78 90</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-burgundy font-semibold">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-burgundy mb-1">Email</h4>
                    <p className="text-charcoal/70">contact@atelier-patisserie.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-burgundy font-semibold">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-burgundy mb-1">Hours</h4>
                    <p className="text-charcoal/70">
                      Tuesday - Saturday: 8:00 AM - 7:00 PM<br />
                      Sunday: 8:00 AM - 2:00 PM<br />
                      Closed Mondays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 elegant-border bg-champagne/30">
              <h4 className="font-playfair text-xl font-semibold text-burgundy mb-3">
                Special Orders
              </h4>
              <p className="text-charcoal/70 mb-4">
                For your events (weddings, birthdays, corporate), 
                please contact me at least 48 hours in advance.
              </p>
              <button className="bg-burgundy text-cream px-6 py-3 rounded-lg font-medium hover:bg-burgundy/90 transition-colors duration-200">
                Request a Quote
              </button>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pastry workshop"
                className="w-full h-full object-cover hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
