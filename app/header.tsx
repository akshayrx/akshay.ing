'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <Link href="/" className="font-medium text-black dark:text-white flex items-center flex-start gap-4">
      <div>
        {/* profile picture here */}
        <Image
          src="/profile-akshay-ravikant.png"
          alt="Akshay Ravikant"
          width={72}
          height={72}
          className="rounded-full"
        />
      </div>
      <div>
        <h1>
          Akshay Ravikant
        </h1>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          AI & SaaS Developer
        </TextEffect>
      </div>
      </Link>
      
        <nav className="items-center gap-4 text-zinc-600 dark:text-zinc-500 hidden">
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      
    </header>
  )
}
