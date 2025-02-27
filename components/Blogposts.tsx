'use client';
import React from 'react';
import { AnimatedBackground } from '@/components/ui/animated-background';
import Link from 'next/link';


// to list out the recent 3 blogs on the nav Blog page
// this CSR component shows the results on app/blogs/page.tsx for Blog nav menu

interface Post {
  id: string;
  link: string;
  slug: string;
  title: {
    rendered: string;
  };
  date: string;
  excerpt: {
    rendered: string;
  };
}

interface BlogpostsProps {
  data: Post[];
}

export default function Blogposts({ data }: BlogpostsProps) {
  return (
    <div className="flex flex-col space-y-0">
      <AnimatedBackground
        enableHover
        className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
      >
        {data.map((post) => (
          <Link
            key={post.id}
            className="-mx-3 rounded-xl px-3 pb-4 no-underline"
            href={`/blog/${post.slug}`}
            data-id={post.id}
            // target='_blank'
          >
            <div className="flex flex-col space-y-1">
              <h4 className="dark:text-zinc-100">
                {post.title.rendered}
              </h4>
              <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2 not-prose">
                {post.excerpt.rendered.replace(/<[^>]+>/g, '')} {/* Remove HTML tags from excerpt */}
              </p>
              <small className="text-zinc-500 dark:text-zinc-400">
                Published on: {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </small>
            </div>
          </Link>
        ))}
      </AnimatedBackground>
    </div>
  );
}