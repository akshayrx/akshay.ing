// app/blogs/page.tsx
import type { Metadata } from 'next';
import Blogposts from '@/components/Blogposts';

export const metadata: Metadata = {
  title: 'Blog | Your Portfolio',
  description: 'Latest blog posts from my portfolio, synced from WordPress.',
  openGraph: {
    title: 'Blog | Your Portfolio',
    description: 'Read my latest blog posts on technology, design, and more.',
    url: 'https://yourportfolio.vercel.app/blogs', // Replace with your Vercel URL
    siteName: 'Your Portfolio',
    images: [
      {
        url: '/social-share-image.jpg', // Path to your social share image
        width: 1200,
        height: 630,
        alt: 'Your Portfolio Blog Social Share Image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Your Portfolio',
    description: 'Read my latest blog posts on technology, design, and more.',
    images: ['/social-share-image.jpg'],
  },
};

interface Post {
  id: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

export default async function BlogsPage() {
  try {
    const response = await fetch('https://unitechinternet.in/wp-json/wp/v2/posts', {
      headers: {
        'Content-Type': 'application/json',
      },
      // Optional: Add caching or revalidation
      next: { revalidate: 36000 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data: Post[] = await response.json();

    return (
      <div className="container mx-auto p-4">
        <h1 className="mb-5 text-lg font-medium">Recent Blog Posts</h1>
        <Blogposts data={data} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return (
      <div className="container mx-auto p-4">
        Error loading blog posts. Please try again later.
      </div>
    );
  }
}