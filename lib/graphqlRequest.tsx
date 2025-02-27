// // lib/graphRequest.tsx
// export default async function graphqlRequest(query: string, variables?: Record<string, any>) {
//     try {
//       const res = await fetch('https://unitechinternet.in/graphql', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ query, variables }),
//       });
  
//       if (!res.ok) {
//         const errorText = await res.text();
//         console.error('GraphQL request failed:', { status: res.status, error: errorText });
//         throw new Error(`GraphQL request failed with status ${res.status}: ${errorText}`);
//       }
  
//       const json = await res.json();
//       console.log('GraphQL response:', json); // Log response for debugging
  
//       if (json.errors) {
//         console.error('GraphQL errors:', json.errors);
//         throw new Error('GraphQL query failed: ' + json.errors.map((e: any) => e.message).join(', '));
//       }
  
//       return json.data || json; // Return json.data if it exists, otherwise return the full json
//     } catch (error) {
//       console.error('Fetch error in graphqlRequest:', error);
//       throw error;
//     }
//   }