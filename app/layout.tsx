import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
//import Script from 'next/script'; // Import Script component
import { ScrollProgress } from '@/components/ui/scroll-progress'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fdfdfd',
}

export const metadata: Metadata = {
  title: {
    default: 'AI Agents & SaaS Developer | Akshay Ravikant', // Default title for the site
    template: '%s | Akshay Ravikant', // Template for dynamic pages (e.g., /blogs)
  },
  description: 'A minimal design modern portfolio showcasing Akshay Ravikant’s work experience, current projects, tech skills, certifications as a frontend developer.', // Under 160 characters
  keywords: ['minimal portfolio', 'frontend developer', 'Akshay Ravikant', 'Next.js', 'saas developer', 'ai agents developer'], // Relevant keywords
  authors: [{ name: 'Akshay Ravikant', url: 'https://akshay.ing' }], // Your name and site URL
  creator: 'Akshay Ravikant', // Author/creator of the site
//   publisher: 'Vercel', // Hosting platform or publisher
//   openGraph: {
//     title: 'Akshay Ravikant’s Portfolio', // Social media title
//     description: 'Explore Akshay’s portfolio, featuring selected projects, tech skills, certifications and recent blogs.', // Under 300 characters
//     url: 'https://akshay.ing', // Your site’s URL (replace with your Vercel URL)
//     siteName: 'Akshay Ravikant’s Portfolio',
//     images: [
//       {
//         url: '/social-share-arx.png', // Path to your social share image in `public/`
//         width: 1200, // Recommended OpenGraph image width
//         height: 630, // Recommended OpenGraph image height
//         alt: 'Akshay’s Portfolio Social Share Image',
//       },
//     ],
//     locale: 'en_US', // Language and region
//     type: 'website', // Page type (e.g., website, article)
//   },
//   twitter: {
//     card: 'summary_large_image', // Twitter card type
//     title: 'Akshay Ravikant’s Portfolio', // Twitter title
//     description: 'Check out Akshay’s portfolio for frontend development, saas development, ai agents and more.', // Under 200 characters
//     images: ['/social-share-arx.png'], // Twitter image (same as OpenGraph)
//     creator: '@akshayravikant', // Your Twitter handle (replace with your actual handle)
//   },
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
  icons: {
    icon: '/favicon.ico', // Path to favicon in `public/`
    shortcut: '/favicon.ico', // Shortcut icon
    apple: '/profile-akshay-ravikant.png', // Apple touch icon
  },
  // manifest: '/manifest.json', // Web app manifest (optional, create in `public/`)
  category: 'technology', // Optional category for the site
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        {/* <Script
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
        /> */}
        <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
        <ScrollProgress
          className="fixed top-0 z-20 h-0.5 bg-gray-900 dark:bg-zinc-200"
          springOptions={{
            bounce: 0,
          }}
        />

        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
