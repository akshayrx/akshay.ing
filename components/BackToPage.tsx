// import React from 'react'
// import Link from 'next/link'
// import ClipboardCopy from '@/components/ClipboardCopy';

// function BackToPage() {
//   return (
//     <>
//         <div className="flex items-center justify-between w-full pb-8">
//         <div className="cursor-pointer">
//           <Link href="/projects" prefetch={false} className='underline text-zinc-500 dark:text-zinc-500'>Back to Projects
//           </Link>
//         </div>
//         <div className="cursor-pointer">
//           <ClipboardCopy baseUrl="https://akshay.ing" />
//         </div>
//       </div>
//     </>
//   )
// }

// export default BackToPage
import React from 'react';
import Link from 'next/link';
import ClipboardCopy from '@/components/ClipboardCopy';

interface BackToPageProps {
  href: string;
  linkText: string;
  //baseUrl?: string; // Optional prop for ClipboardCopy
}

function BackToPage({ href, linkText = 'https://akshay.ing' }: BackToPageProps) {
  return (
    <>
      <div className="flex items-center justify-between w-full pb-8">
        <div className="cursor-pointer">
          <Link href={href} prefetch={false} className="underline text-zinc-500 dark:text-zinc-500">
            {linkText}
          </Link>
        </div>
        <div className="cursor-pointer">
          <ClipboardCopy baseUrl="https://akshay.ing" />
        </div>
      </div>
    </>
  );
}

export default BackToPage;