 'use client'
import React from 'react'
import { ScrollProgress } from '@/components/ui/scroll-progress'
//import Link from 'next/link'
//import { usePathname } from 'next/navigation';
//import ClipboardCopy from '@/components/ClipboardCopy';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  //const pathname = usePathname();

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
        <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-900 dark:bg-zinc-200"
        springOptions={{
          bounce: 0,
        }}
      />
      <main  className="prose prose-gray mt-16 pb-2 prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        {/* <div className={pathname.startsWith('/blog/') && pathname !== '/blog' ? 'flex items-center py-4' : 'hidden'}>
          <div className="flex items-center justify-between w-full">
            <div className="cursor-pointer">
              <Link href="/blog" className='underline'>Back to Blog
              </Link>
            </div>
            <div className="cursor-pointer">
              <ClipboardCopy baseUrl="https://akshay.ing" />
            </div>
          </div>
        </div> */}
        {children}
      </main>
    </>
  );
}