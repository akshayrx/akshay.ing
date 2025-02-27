import React from 'react'
import Link from 'next/link'

function Now() {
  return (
    <>
       <div className="flex flex-col space-y-0 gap-4">
        <p>I am building {` `}
        <Link href="/blog" className='underline text-zinc-800 dark:text-zinc-400'>
            Testimonials
        </Link>
        {` `}a feedback app that let's you collected reviews in text, video and image formats. The {` `}
        <Link href="/blog" className='underline text-zinc-800 dark:text-zinc-400'>
            Pro Version
        </Link>
        {` `}also includes feature to import your Google reviews and share on Shopify.
        </p>
        <p>I work as a freelance developer for startups to create customised AI & SaaS products. I also do consulting for businesses & brands to create new or improve existing websites, web apps with AI.</p>
        </div>
    </>
  )
}

export default Now