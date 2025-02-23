import React from 'react'
import { ABOUT } from '../app/data'

function About() {
  return (
    <>
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            {ABOUT}
          </p>
        </div>
    </>
  )
}

export default About