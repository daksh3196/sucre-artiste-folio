export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  media: {
    url: string;
    width: number;
    height: number;
  };
  categories: Category[];
}

export interface GallerySection {
  _id: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export interface GalleryData {
  images: GalleryImage[];
  sections: GallerySection[];
  categories: Category[];
} 