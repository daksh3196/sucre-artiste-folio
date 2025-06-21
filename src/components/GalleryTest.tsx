import { useEffect, useState } from 'react';
import { hygraphClient } from '../lib/hygraph';
import { GET_CATEGORIES } from '../lib/queries';
import { gql } from 'graphql-request';

const INTROSPECTION_QUERY = gql`
  query IntrospectionQuery {
    __schema {
      queryType {
        fields {
          name
          description
        }
      }
    }
  }
`;

export function GalleryTest() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [data, setData] = useState<any>(null);
  const [schemaData, setSchemaData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function testConnection() {
      try {
        // Log the API URL being used
        console.log('Testing Hygraph connection with URL:', import.meta.env.VITE_HYGRAPH_API_URL);
        
        // Try to get schema info first
        try {
          const schemaResult = await hygraphClient.request(INTROSPECTION_QUERY);
          console.log('Schema Info:', schemaResult);
          setSchemaData(schemaResult);
        } catch (schemaErr) {
          console.log('Schema introspection not available:', schemaErr);
        }

        // Test if we can fetch categories
        const result = await hygraphClient.request(GET_CATEGORIES);
        console.log('Hygraph Response:', result);
        setData(result);
        setStatus('success');
      } catch (err) {
        console.error('Hygraph Error:', err);
        // Enhanced error logging
        if (err instanceof Error) {
          console.error('Error details:', {
            message: err.message,
            name: err.name,
            stack: err.stack
          });
          setError(`${err.name}: ${err.message}`);
        } else {
          setError('Unknown error occurred');
        }
        setStatus('error');
      }
    }

    testConnection();
  }, []);

  return (
    <div className="p-4 m-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Hygraph Connection Test</h2>
      
      <div className="mb-4">
        <strong>Status: </strong>
        <span className={
          status === 'loading' ? 'text-yellow-600' :
          status === 'success' ? 'text-green-600' :
          'text-red-600'
        }>
          {status.toUpperCase()}
        </span>
      </div>

      {error && (
        <div className="text-red-600 mb-4">
          <strong>Error: </strong>
          {error}
          <div className="mt-2 text-sm">
            <p>Please check:</p>
            <ul className="list-disc list-inside">
              <li>Your Hygraph API URL is correct</li>
              <li>Your authentication token is valid</li>
              <li>The schema matches the queries</li>
            </ul>
          </div>
        </div>
      )}

      {schemaData && (
        <div className="mb-4">
          <strong>Available Query Fields:</strong>
          <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto">
            {JSON.stringify(schemaData.__schema.queryType.fields.map((f: any) => f.name), null, 2)}
          </pre>
        </div>
      )}

      {data && (
        <div>
          <strong>Categories Data:</strong>
          <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 