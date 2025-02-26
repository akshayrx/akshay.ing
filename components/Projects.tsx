import React from 'react'
import { Fullscreen, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
  PROJECTS
} from '../app/data'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

type ProjectVideoProps = {
  src: string
}

type ProjectImageProps = {
  src: string
  alt: string
}

function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <Image
          src={src}
          alt={alt}
          priority={true}
          width={685} // Adjust based on container max-width or design
          height={0}   // Auto height will scale proportionally
          className="rounded-xl w-full h-auto grayscale hover:grayscale-0"
          style={{ objectFit: 'contain' }}
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <Image
            src={src}
            alt={alt}
            priority={true}
            width={685} // Adjust based on container max-width or design
            height={0}   // Auto height will scale proportionally
            className="rounded-xl w-full h-auto"
            style={{ objectFit: 'contain' }}
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}


function Projects() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div key={project.id} className="flex flex-col space-y-2">
            <div className="relative rounded-2xl bg-zinc-50/40 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectImage src={project.image} alt={project.name} />
            </div>
            <div className="px-1">
              <Link
                className="group relative w-full flex flex-col gap-1"
                href={project.link}
                target="_blank"
              >
                <h4>{project.name}</h4>
                {/* <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span> */}
                <small>
                  {project.description}
                </small>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects