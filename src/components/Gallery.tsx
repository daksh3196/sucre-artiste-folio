import { useState } from 'react';
import { useGallery } from '../hooks/useGallery';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

export function Gallery() {
  const { images, categories, isLoading, error } = useGallery();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (isLoading) return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-burgundy"></div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-[400px] flex items-center justify-center text-red-600">
      Error loading creations
    </div>
  );
  
  if (!categories?.length) return null;

  const filteredImages = selectedCategory
    ? images.filter(image => image.categories.some(cat => cat.id === selectedCategory))
    : [];

  const selectedCategoryData = selectedCategory 
    ? categories.find(cat => cat.id === selectedCategory)
    : null;

  const handlePrevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1);
  };

  const handleNextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0);
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-playfair text-burgundy mb-2 text-center"
        >
          Creations
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-dancing text-2xl text-gold mb-12 text-center"
        >
          Sweet Artistry in Every Detail
        </motion.div>

        {!selectedCategory ? (
          // Categories Grid
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white group hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    {/* Show first image from category as cover */}
                    {images.find(img => img.categories.some(cat => cat.id === category.id))?.media.url && (
                      <img
                        src={images.find(img => img.categories.some(cat => cat.id === category.id))?.media.url}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-dancing text-burgundy mb-3">{category.name}</h3>
                    <p className="text-charcoal/70 line-clamp-2">{category.description}</p>
                    <div className="mt-4 flex items-center text-burgundy font-medium">
                      View Collection
                      <motion.span
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          // Category Items View
          <div>
            <div className="mb-12 flex items-center justify-between">
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center text-burgundy hover:text-gold transition-colors"
              >
                <ArrowLeft className="mr-2" />
                Back to Categories
              </button>
              <h3 className="text-3xl font-playfair text-burgundy">{selectedCategoryData?.name}</h3>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(index)}
                    className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.media.url}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-playfair text-burgundy mb-2">{image.title}</h3>
                      <p className="text-charcoal/70 line-clamp-2">{image.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-cream p-2"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-cream p-2"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-cream p-2"
              >
                <ChevronRight size={32} />
              </button>

              <div className="max-w-7xl max-h-[90vh] mx-auto p-4">
                <img
                  src={filteredImages[selectedImage].media.url}
                  alt={filteredImages[selectedImage].title}
                  className="w-auto h-auto max-w-full max-h-[80vh] object-contain mx-auto"
                />
                <div className="mt-4 text-center text-white">
                  <h3 className="text-2xl font-playfair mb-2">{filteredImages[selectedImage].title}</h3>
                  <p className="text-cream/80">{filteredImages[selectedImage].description}</p>
                </div>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </section>
  );
}
