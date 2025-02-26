// app/[category]/[projectName]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/app/projects/projects.json' assert { type: 'json' };

interface Project {
  id: number;
  projectName: string;
  category: string;
  description: string;
  techStack: string;
  liveUrl: string;
  image: string;
}

export async function generateMetadata({ params }: { params: { category: string; projectName: string } }): Promise<Metadata> {
  const project = projects.find(
    (p) => p.category.toLowerCase() === params.category.toLowerCase() && p.projectName.toLowerCase() === params.projectName.toLowerCase()
  );
  return {
    title: project ? `${project.projectName} | Akshay Ravikant’s Projects` : 'Projects | Akshay Ravikant’s Portfolio',
    description: project?.description || 'Explore Akshay’s project portfolio.',
    openGraph: {
      title: project?.projectName || 'Project | Akshay’s Portfolio',
      description: project?.description || 'View this project from Akshay Ravikant’s portfolio.',
      url: `https://akshay.ing/${params.category}/${params.projectName}`,
      siteName: 'Akshay Ravikant Portfolio',
      images: [
        {
          url: project?.image || 'https://akshay.ing/social-share-arx.png',
          width: 1200,
          height: 630,
          alt: project?.projectName || 'Akshay’s Project Image',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: project?.projectName || 'Project | Akshay’s Portfolio',
      description: project?.description || 'Check out this project from Akshay’s portfolio.',
      images: [project?.image || 'https://akshay.ing/social-share-arx.png'],
    },
  };
}

export default function ProjectPage({ params }: { params: { category: string; projectName: string } }) {
  const project = projects.find(
    (p) => p.category.toLowerCase() === params.category.toLowerCase() && p.projectName.toLowerCase() === params.projectName.toLowerCase()
  );

  if (!project) {
    return <div className="container mx-auto p-4">Project not found.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <article className="max-w-2xl mx-auto">
        <div className="mb-6 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.projectName}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
          />
        </div>
        <h1 className="mb-4">{project.projectName}</h1>
        <p>
          Category: {project.category}
        </p>
        <p>
          Tech Stack: {project.techStack}
        </p>
        <h4>Brief</h4>
        <p className=" mb-4">{project.description}</p>
        <h4>Use Case</h4>
        <p className=" mb-4">{project.description}</p>
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Visit Live Site
        </Link>
      </article>
    </div>
  );
}