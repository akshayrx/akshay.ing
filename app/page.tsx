'use client'
import { motion } from 'motion/react'
//import Blogposts from '@/components/Blogposts'
import Projects from '@/components/Projects'
import Works from '@/components/Works'
import Connect from '@/components/Connect'
import About from '@/components/About'
import Now from '@/components/Now'
import RecentBlogs from '@/components/RecentBlogs';
import Skills from '@/components/Skills'
import SectionTitle from '@/components/content/SectionTitle'
//import RecentBlogs from '@/components/RecentBlogs'; // Now a Client Component
import Certifications from '@/components/Certifications';
import { Metadata } from 'next'
import Script from 'next/script'; // Import Script component

const metadata: Metadata = {
  title: {
    default: 'AI Agents & SaaS Developer | Akshay Ravikant', // Default title for the site
    template: '%s | Akshay Ravikant', // Template for dynamic pages (e.g., /blogs)
  },
  description: 'A minimal design modern portfolio showcasing Akshay Ravikant’s work experience, current projects, tech skills, certifications as a frontend developer.', // Under 160 characters
  keywords: ['minimal portfolio', 'frontend developer', 'Akshay Ravikant', 'Next.js', 'saas developer', 'ai agents developer'], // Relevant keywords
  authors: [{ name: 'Akshay Ravikant', url: 'https://akshay.ing' }], // Your name and site URL
  creator: 'Akshay Ravikant', // Author/creator of the site
  publisher: 'Vercel', // Hosting platform or publisher
  openGraph: {
    title: 'Akshay Ravikant’s Portfolio', // Social media title
    description: 'Explore Akshay’s portfolio, featuring selected projects, tech skills, certifications and recent blogs.', // Under 300 characters
    url: 'https://akshay.ing', // Your site’s URL (replace with your Vercel URL)
    siteName: 'Akshay Ravikant’s Portfolio',
    images: [
      {
        url: '/social-share-arx.png', // Path to your social share image in `public/`
        width: 1200, // Recommended OpenGraph image width
        height: 630, // Recommended OpenGraph image height
        alt: 'Akshay’s Portfolio Social Share Image',
      },
    ],
    locale: 'en_US', // Language and region
    type: 'website', // Page type (e.g., website, article)
  },
  twitter: {
    card: 'summary_large_image', // Twitter card type
    title: 'Akshay Ravikant’s Portfolio', // Twitter title
    description: 'Check out Akshay’s portfolio for frontend development, saas development, ai agents and more.', // Under 200 characters
    images: ['/social-share-arx.png'], // Twitter image (same as OpenGraph)
    creator: '@akshayravikant', // Your Twitter handle (replace with your actual handle)
  },
  robots: {
    index: true, // Allow search engines to index the site
    follow: true, // Allow search engines to follow links
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // icons: {
  //   icon: '/favicon.ico', // Path to favicon in `public/`
  //   shortcut: '/favicon.ico', // Shortcut icon
  //   apple: '/profile-akshay-ravikant.png', // Apple touch icon
  // },
  // manifest: '/manifest.json', // Web app manifest (optional, create in `public/`)
  category: 'technology', // Optional category for the site
};

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.2,
}

export default function Personal() {
  return (
    <>
    <div className="hidden">
       <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive" // Ensures script loads before hydration
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akshay Ravikant",
              url: "https://akshay.ing",
              sameAs: [
                "https://x.com/akshayravikant", // Replace with your social media profiles
                "https://linkedin.com/in/akshayravikant", // Replace with your LinkedIn or other profiles
              ],
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance AI Agents & SaaS Developer",
                url: "https://start.akshay.ing",
              },
              description: "Akshay Ravikant is a skilled frontend developer specializing in Next.js, TypeScript, and AI-driven solutions, with extensive freelancing experience.",
              knowsAbout: ["SaaS Development", "Frontend Development", "AI Chatbots", "AI Agents", "UI/UX Design"],
              image: "https://akshay.ing/social-share-arx.png", // Use your profile or share image
            }),
          }}
        />
    </div>
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className='mt-16 py-2'
      >
        <SectionTitle title="About" />
        <About />
      </motion.section>
     
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <SectionTitle title="Now" />
        <Now />
      </motion.section>
      
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <SectionTitle title="Technical Skills" />
        <Skills />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
      <SectionTitle title="Selected Projects" />
        <Projects />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <SectionTitle title="Work Experience" />
        <Works />
      </motion.section>
      
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <SectionTitle title="Certifications" />
        <Certifications />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <SectionTitle title="Blog" />
        {/* <Blogposts /> */}
        <RecentBlogs />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        {/* <SectionTitle title="Connect" /> */}
        <Connect />
      </motion.section>
    </motion.main>

    </>
  )
}
