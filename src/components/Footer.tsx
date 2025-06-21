
export const Footer = () => {
  return (
    <footer className="bg-burgundy text-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-playfair text-3xl font-bold mb-4">
            Atelier Patisserie
          </div>
          <p className="text-cream/80 mb-6 max-w-2xl mx-auto">
            The excellence of French patisserie, 
            passed down with passion and creativity for three generations.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-cream/70 hover:text-gold transition-colors duration-200">
              Instagram
            </a>
            <a href="#" className="text-cream/70 hover:text-gold transition-colors duration-200">
              Facebook
            </a>
            <a href="#" className="text-cream/70 hover:text-gold transition-colors duration-200">
              Pinterest
            </a>
          </div>
          
          <div className="border-t border-cream/20 pt-8">
            <p className="text-cream/60 text-sm">
              © 2024 Atelier Patisserie. All rights reserved. Created with passion in Paris.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
