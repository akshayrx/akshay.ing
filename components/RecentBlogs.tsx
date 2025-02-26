'use client';

import { useState, useEffect } from 'react';
import { getRecentPosts } from './RecentBlogsServer';
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'

// to list out the recent 3 blogs on the home page

interface Post {
  id: string;
  link: string;
  title: {
    rendered: string;
  };
  date: string;
}

export default function RecentBlogs() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getRecentPosts();
        setPosts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    }
    fetchPosts();
  }, []);

  if (error) {
    return (
      <section className="container mx-auto p-4 py-8">
        <p>
          {error}. Please try again later.
        </p>
      </section>
    );
  }

  return (

    <section className="flex flex-col space-y-0">
      <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
        {posts.map((post) => (
        
            
            <Link
                  key={post.id}
                  className="rounded-xl py-2 px-2 -mx-2"
                  href={post.link}
                  data-id={post.id}
                  target='_blank'
                >
                  <div className="flex flex-col space-y-1">
                    <h4>
                      {post.title.rendered}
                    </h4>
                    <small>
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </small>
                  </div>
                </Link>
        
        ))}
        </AnimatedBackground>
        {posts.length === 0 && <p>No recent blogs found.</p>}
      
    </section>
  );
}