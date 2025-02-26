'use client'
import { motion } from 'motion/react'
//import Blogposts from '@/components/Blogposts'
import Projects from '@/components/Projects'
import Works from '@/components/Works'
import Connect from '@/components/Connect'
import About from '@/components/About'
import RecentBlogs from '@/components/RecentBlogs';
import Skills from '@/components/Skills'
import SectionTitle from '@/components/content/SectionTitle'
//import RecentBlogs from '@/components/RecentBlogs'; // Now a Client Component
import Certifications from '@/components/Certifications';

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
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <About />
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
  )
}
