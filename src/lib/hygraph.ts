import { GraphQLClient } from 'graphql-request';

// Initialize the GraphQL client
const hygraphClient = new GraphQLClient(
  import.meta.env.VITE_HYGRAPH_API_URL || '',
  {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_AUTH_TOKEN}`,
    },
  }
);

// Log only in development environment
if (import.meta.env.DEV) {
  console.log('Hygraph API URL:', import.meta.env.VITE_HYGRAPH_API_URL);
}

export { hygraphClient }; 