type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Interaktive AI',
    description:
      'AI sales model to improvise Meta and Google ad campaign ROI.',
    link: 'https://interaktiveai.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  // {
  //   name: 'Motion Primitives',
  //   description: 'UI kit to make beautiful, animated interfaces.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project2',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  // {
  //   company: 'Interaktive AI',
  //   title: 'Tech Lead',
  //   start: 'Nov 2024',
  //   end: 'Present',
  //   link: 'https://akshay.ing',
  //   id: 'work1',
  // },
  {
    company: 'Freelance',
    title: 'AI Agents Developer',
    start: 'Oct 2023',
    end: 'Present',
    link: 'https://akshay.ing',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: 'Feb 2016',
    end: 'Present',
    link: 'https://akshay.ing',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/akshayrx',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/akshayravikant',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/akshayravikant',
  },
  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/akshayravikant_',
  // },
]

export const EMAIL: String = 'start@akshay.ing'

export const ABOUT: String = `I am a software developer specialising in AI voice & chat agents and SaaS applications. I am passionate about building products that solve real-world problems.`
