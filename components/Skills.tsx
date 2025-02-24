import React from 'react'
import { TECH_SKILLS } from '../app/data'

function Skills() {
    return (
        <div className="flex flex-col space-y-0">
            {TECH_SKILLS.map((skills) => (

                <div key={skills.id} className="relative h-full w-full rounded-[15px] bg-white pb-4 dark:bg-zinc-950">
                    <div className="relative flex w-full flex-row justify-between">
                        <div className='flex flex-col gap-1'>
                            <h4 className="dark:text-zinc-100">
                                {skills.topics}
                            </h4>
                            <small className="text-zinc-500 dark:text-zinc-400">
                                {skills.category}
                            </small>
                        </div>
                        <small className="hidden text-zinc-500 dark:text-zinc-400">
                            {/* {skills.category} */}Something
                        </small>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Skills