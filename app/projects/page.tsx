// app/projects/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import projects from './projects.json';
import { Spotlight } from '@/components/ui/spotlight'
//import { motion } from 'motion/react'
//import { usePathname } from 'next/navigation';
import ClipboardCopy from '@/components/ClipboardCopy';

interface Project {
    id: number;
    projectName: string;
    category: string;
    description: string;
    techStack: string;
    liveUrl: string;
    image: string;
}
export const metadata: Metadata = {
    title: 'Projects | Akshay’s Portfolio',
    description: 'Explore Akshay’s portfolio of projects across AI, Framer, Shopify, and more.',
  };

// export async function generateMetadata({ params }: { params: Promise<{ category: string; projectName: string }> }): Promise<Metadata> {
//     const resolvedParams = await params;
//     const project = projects.find(
//       (p) => p.category.toLowerCase() === resolvedParams.category.toLowerCase() && p.projectName.toLowerCase() === resolvedParams.projectName.toLowerCase()
//     );
//     return {
//       title: project ? `${project.projectName} | Akshay’s Projects` : 'Project | Akshay’s Portfolio',
//       description: project?.description || 'Explore Akshay’s project portfolio.',
//       openGraph: {
//         title: project?.projectName || 'Project | Akshay’s Portfolio',
//         description: project?.description || 'View this project from Akshay’s portfolio.',
//         url: `https://akshay.ing/${resolvedParams.category}/${resolvedParams.projectName}`,
//         siteName: 'Akshay’s Portfolio',
//         images: [
//           {
//             url: project?.image || 'https://akshay.ing/social-share-image.jpg',
//             width: 1200,
//             height: 630,
//             alt: project?.projectName || 'Akshay’s Project Image',
//           },
//         ],
//         type: 'website',
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title: project?.projectName || 'Project | Akshay’s Portfolio',
//         description: project?.description || 'Check out this project from Akshay’s portfolio.',
//         images: [project?.image || 'https://akshay.ing/social-share-image.jpg'],
//       },
//     };
//   }

// export default function ProjectsPage() {
//     // Group projects by category
//     const groupedProjects = projects.reduce((acc: { [key: string]: Project[] }, project) => {
//         acc[project.category] = acc[project.category] || [];
//         acc[project.category].push(project);
//         return acc;
//     }, {});
//export default async function ProjectPage({ params }: { params: Promise<{ category: string; projectName: string }> }) {
  //  const resolvedParams = await params;
  export default function ProjectsPage() {
    //const pathname = usePathname();
    // Group projects by category
    const groupedProjects = projects.reduce((acc: { [key: string]: Project[] }, project) => {
                acc[project.category] = acc[project.category] || [];
                acc[project.category].push(project);
                return acc;
            }, {});
    // const project = projects.find(
    //   (p) => p.category.toLowerCase() === resolvedParams.category.toLowerCase() && p.projectName.toLowerCase() === resolvedParams.projectName.toLowerCase()
    // );
  
    if (!groupedProjects) {
      return <div className="container mx-auto p-4">Project not found.</div>;
    }

    return (
        <div className="flex flex-col space-y-2 mx-auto py-4 gap-6 mb-16">
             
            {/* <h2 className="mb-6">Featured Projects</h2> */}
            {Object.entries(groupedProjects).map(([category, projectsList]) => (
                <div key={category} className="rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
                    <Spotlight
                        className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                        size={64}
                    />
                    <div className="relative flex flex-col gap-2 h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950 space-y-2">
                        <h2 className="mb-2 dark:text-zinc-100">{category}</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                            {projectsList.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`projects/${project.category.toLowerCase()}/${project.projectName.toLowerCase().replace(/ /g, '-')}`}
                                    className="block hover:scale-95 transition-transform"
                                >
                                    <div className='flex flex-col gap-1'>
                                        {project.image && (
                                        <div className="mb-2 overflow-hidden rounded-lg h-auto object-cover grayscale hover:grayscale-0" style={{ backgroundImage: `url('/social-share-arx.png')` }}>
                                            <Image
                                                src={project.image}
                                                alt={project.projectName}
                                                width={300}
                                                height={180}
                                                className="w-full h-auto max-h-[200] object-cover grayscale hover:grayscale-0"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                        <h4>{project.projectName}</h4>
                                        <small className="line-clamp-2">{project.description}</small>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>


                </div>
            ))}
            {Object.keys(groupedProjects).length === 0 && (
                <p className="text-gray-500 dark:text-gray-400">No projects found.</p>
            )}
        </div>
    );
}