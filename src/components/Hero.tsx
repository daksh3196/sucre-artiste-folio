
export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-cream via-champagne to-gold/20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-burgundy mb-6">
          From Law to
          <span className="block text-gold">Sweet Artistry</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-charcoal/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Passionate pastry chef crafting extraordinary desserts, 
          where precision meets creativity in every sweet creation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-burgundy text-cream px-8 py-4 rounded-lg font-medium text-lg hover:bg-burgundy/90 transition-colors duration-200 hover-lift"
          >
            Explore My Creations
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-burgundy text-burgundy px-8 py-4 rounded-lg font-medium text-lg hover:bg-burgundy hover:text-cream transition-all duration-200 hover-lift"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
