
export const Footer = () => {
  return (
    <footer className="bg-burgundy text-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-playfair text-3xl font-bold mb-4">
            Sweet Artistry
          </div>
          <p className="text-cream/80 mb-6 max-w-2xl mx-auto">
            Where precision meets passion, and every dessert tells a story 
            of creativity, dedication, and the sweet journey from law to artistry.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-cream/70 hover:text-gold transition-colors duration-200">
              Instagram
            </a>
            <a href="#" className="text-cream/70 hover:text-gold transition-colors duration-200">
              LinkedIn
            </a>
            <a href="#" className="text-cream/70 hover:text-gold transition-colors duration-200">
              WhatsApp
            </a>
          </div>
          
          <div className="border-t border-cream/20 pt-8">
            <p className="text-cream/60 text-sm">
              © 2024 Sweet Artistry. All rights reserved. Crafted with love in Gurugram, India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
