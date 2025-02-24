import React from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { WORK_EXPERIENCE } from '../app/data'
import Link from 'next/link'

function Works() {
  return (
    <>
      <div className="flex flex-col space-y-2 gap-2">
        {WORK_EXPERIENCE.map((job) => (
          <Link
            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            key={job.id}
          >
            <Spotlight
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <div className="relative flex flex-col gap-2 h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="relative flex w-full flex-row justify-between">
                <div className='flex flex-col gap-1'>
                  <h4 className="dark:text-zinc-100">
                    {job.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {job.company}
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-end justify-end">
                  <small className="text-zinc-500 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </small>
                  <small className="hidden text-zinc-500 dark:text-zinc-400">
                    Visit Website
                  </small>
                </div>
              </div>
              <div>
                <small className='text-zinc-500 dark:text-zinc-400 leading-1'>{job.description}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Works