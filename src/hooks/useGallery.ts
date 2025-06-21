import { useQuery } from '@tanstack/react-query';
import { hygraphClient } from '../lib/hygraph';
import { GET_GALLERY_IMAGES, GET_CATEGORIES } from '../lib/queries';
import type { GalleryData, GalleryImage, Category } from '../types/gallery';

export function useGallery() {
  const imagesQuery = useQuery({
    queryKey: ['gallery', 'images'],
    queryFn: async () => {
      const data = await hygraphClient.request<{ galleryImages: GalleryImage[] }>(
        GET_GALLERY_IMAGES
      );
      console.log('Gallery Images Response:', data); // Debug log
      return data.galleryImages || [];
    },
  });

  const categoriesQuery = useQuery({
    queryKey: ['gallery', 'categories'],
    queryFn: async () => {
      const data = await hygraphClient.request<{ diksh_PortFolio_Categories: Category[] }>(
        GET_CATEGORIES
      );
      console.log('Categories Response:', data); // Debug log
      return data.diksh_PortFolio_Categories || [];
    },
  });

  return {
    images: imagesQuery.data ?? [],
    categories: categoriesQuery.data ?? [],
    isLoading: imagesQuery.isLoading || categoriesQuery.isLoading,
    error: imagesQuery.error || categoriesQuery.error,
  };
} 