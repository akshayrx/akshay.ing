// lib/postsManager.tsx
import graphqlRequest from '@/lib/graphqlRequest';

export async function fetchPostById(id: string): Promise<any> {
  const query = `
    query PostById($id: ID!) {
      post(id: $id, idType: DATABASE_ID) {
        id
        title
        date
        excerpt
        content
        featuredImage {
          node {
            mediaDetails {
              file
              sizes {
                width
                height
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;

  const variables = { id };
  const json = await graphqlRequest(query, variables);

  if (!json.data || !json.data.post) {
    console.error('GraphQL response error or no post found:', json);
    throw new Error('Failed to fetch post: Invalid response structure or post not found');
  }

  return json.data.post;
}