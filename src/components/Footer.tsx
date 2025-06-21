import { cn } from "@/lib/utils";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn("bg-burgundy text-cream py-12", className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Sweet Artistry</h3>
            <p className="text-cream/80">
              Crafting extraordinary desserts with passion and precision.
            </p>
          </div>
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Contact</h4>
            <p className="text-cream/80">Email: contact@sweetartistry.com</p>
            <p className="text-cream/80">Phone: +91 98765 43210</p>
          </div>
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/80 hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="text-cream/80 hover:text-gold transition-colors">Facebook</a>
              <a href="#" className="text-cream/80 hover:text-gold transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cream/20 text-center text-cream/60">
          <p>&copy; {new Date().getFullYear()} Sweet Artistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
