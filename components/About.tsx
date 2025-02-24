import React from 'react'
import { ABOUT_ME } from '../app/data'

function About() {
  return (
    <>
      <div className="flex flex-col space-y-0">
        <div className="relative h-full w-fullbg-white dark:bg-zinc-950">
          <div className="flex flex-col gap-4">
            {ABOUT_ME.map((about) => (
              <p key={about.id} className="text-zinc-600 dark:text-zinc-400">
                {about.paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default About