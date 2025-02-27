// components/RecentBlogsServer.tsx
//import type { Metadata } from 'next';

interface Post {
  id: string;
  link: string;
  title: {
    rendered: string;
  };
  date: string;
  slug: string;
}

export async function getRecentPosts() {
  const response = await fetch('https://unitechinternet.in/wp-json/wp/v2/posts?per_page=3&order=desc&orderby=date', {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 2 }, //keeps the fetched posts from wordpress data in cache for 1 hour
    //meaning - any new posts created in wordpress will not be fetched until 1 hour cached is completed
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recent blog posts');
  }

  return await response.json() as Post[];
}