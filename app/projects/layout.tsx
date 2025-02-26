'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import Connect from '@/components/Connect'
//import Link from 'next/link'
//import { usePathname } from 'next/navigation';
//import ClipboardCopy from '@/components/ClipboardCopy';

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  
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
      <main className="mt-16 pb-2">
        {/* <div className={pathname.startsWith('/projects/') && pathname !== '/projects' ? 'flex items-center py-4' : 'hidden'}>
          <div className="flex items-center justify-between w-full">
            <div className="cursor-pointer">
              <Link href="/projects" className='underline'>Back to Projects
              </Link>
            </div>
            <div className="cursor-pointer">
              <ClipboardCopy baseUrl="https://akshay.ing" />
            </div>
          </div>
        </div> */}
        {children}
        <Connect />
      </main>
    </>
  )
}
