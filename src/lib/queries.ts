import { gql } from 'graphql-request';

export const GET_SCHEMA = gql`
  query GetSchema {
    __schema {
      types {
        name
        kind
        fields {
          name
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    diksh_PortFolio_Categories(first: 100) {
      id
      name
      slug
      description
    }
  }
`;

export const GET_GALLERY_IMAGES = gql`
  query GetGalleryImages {
    galleryImages(first: 100) {
      id
      title
      description
      categories {
        id
        name
        slug
        description
      }
      media {
        url
        width
        height
      }
    }
  }
`; 