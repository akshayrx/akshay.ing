// app/blog/[slug]/page.tsx
//'use client'
import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';
//import ClipboardCopy from '@/components/ClipboardCopy';
import BackToPage from '@/components/BackToPage';
// import Link from 'next/link';
// import ClipboardCopy from '@/components/ClipboardCopy';
// import { useEffect, useState } from 'react'
// import { TextMorph } from '@/components/ui/text-morph'

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  excerpt: {
    rendered: string;
  };
  featuredImage?: {
    node: {
      mediaDetails: {
        file: string;
      };
    };
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  return {
    title: post ? `${post.title.rendered} | Akshay Ravikant Portfolio` : 'Blog Post | Akshay Ravikant Portfolio',
    description: post?.excerpt.rendered.slice(0, 160).replace(/<[^>]+>/g, '') || 'Read this insightful blog post on my portfolio.',
    keywords: post?.title.rendered.split(' ').concat(['blog', 'Akshay Ravikant','ai agents', 'portfolio', 'web development']) || ['blog', 'portfolio', 'web development'],
    authors: [{ name: 'Akshay Ravikant', url: 'https://akshay.ing' }],
    openGraph: {
      title: post?.title.rendered || 'Blog Post | Akshay Ravikant Portfolio',
      description: post?.excerpt.rendered.slice(0, 300).replace(/<[^>]+>/g, '') || 'Explore this blog post on Akshay’s portfolio.',
      url: `https://akshay.ing/blog/${params.slug}`,
      siteName: 'Akshay Ravikant Portfolio',
      images: [
        {
          url: 'https://www.akshay.ing/social-share-arx.png', // Default social share image (ensure it’s in `public/`)
          width: 1200,
          height: 630,
          alt: post?.title.rendered || 'Akshay’s Blog Post Image',
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post?.date || new Date().toISOString(),
      authors: ['Akshay Ravikant'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title.rendered || 'Blog Post | Akshay Ravikant Portfolio',
      description: post?.excerpt.rendered.slice(0, 200).replace(/<[^>]+>/g, '') || 'Read this blog post on Akshay’s portfolio.',
      images: ['https://www.akshay.ing/social-share-arx.png'],
      creator: '@akshayravikant', // Replace with your Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}



export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    return (
    <>
      <BackToPage href='/blog' linkText='Back to Blog' />
      <div className="container mx-auto p-4">Blog post not found.</div>
    </>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <BackToPage href='/blog' linkText='Back to Blog' />
      <article>
      <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title.rendered,
              description: post.excerpt.rendered.slice(0, 160).replace(/<[^>]+>/g, ''),
              author: {
                "@type": "Person",
                name: "Akshay Ravikant",
                url: "https://akshay.ing",
              },
              datePublished: post.date,
              url: `https://akshay.ing/blog/${params.slug}`,
              image: `https://unitechinternet.in/wp-content/uploads/2025/02/${post.featuredImage?.node.mediaDetails.file || 'social-share-arx.png'}`, // Use featured image if available
              publisher: {
                "@type": "Organization",
                name: "Akshay Ravikant",
                url: "https://akshay.ing",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://akshay.ing/blog/${params.slug}`,
              },
            }),
          }}
        />
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{post.title.rendered}</h1>
        <small className="text-gray-600 dark:text-gray-300 mb-4">
          Published on: {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </small>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
          {post.excerpt.rendered.replace(/<[^>]+>/g, '').replace(/\n/g, '')}
          {/* {post.excerpt.rendered} */}
        </p>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </div>
  );
}

async function fetchPost(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`https://unitechinternet.in/wp-json/wp/v2/posts?slug=${slug}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour (adjust as needed)
    });

    if (!response.ok) {
      return null;
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}