type Project = {
  name: string
  description: string
  link: string
  video: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  description: string
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

type TechSkills = {
  category: string
  topics: string
  id: number
}

type Introduction = {
  paragraph: string
  id: number
}

type Certificates = {
  issuedBy: string
  courseName: string
  completionDate: string
  category: string
  id: number
}

export const PROJECTS: Project[] = [
  {
    name: 'Interaktive AI',
    description:
      'AI sales model & chatbots to improvise Meta and Google ad campaign ROI.',
    link: 'https://interaktiveai.com',
    video: ``,
    image: '/start_akshay_ing.png',
    id: 'project1',
  },
  {
    name: 'ARX',
    description:
      'B2B Saas marketplace for jewellery manufacturers, wholesalers and retailers.',
    link: 'https://start.akshay.ing',
    video: '',
    image: '/start_akshay_ing.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Interaktive AI Solutions',
    title: 'Tech Lead',
    start: 'Nov 2024',
    end: 'Present',
    link: 'https://interaktiveai.com',
    id: 'work1',
    description: 'Interaktive AI focuses on improving performance of Meta and Google ad campaigns for their corporate clients. I lead the tech team to build high-performing AI Chat solutions that help the clients interact with leads & improve sales conversion.',
  },
  {
    company: 'Freelance',
    title: 'AI Agents Developer',
    start: 'Oct 2023',
    end: 'Present',
    link: 'https://start.akshay.ing',
    id: 'work2',
    description: 'I create customised AI Voice interfaces and Chatbots, leveraging advanced AI tools and workflow automations for seamless user experiences. I design, develop, and deploy scalable solutions tailored to client needs.',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: 'Feb 2016',
    end: 'Present',
    link: 'https://start.akshay.ing',
    id: 'work3',
    description: 'I specialise in creating Software as a Service (SaaS) applications, I build engaging, responsive web apps using modern frameworks like Next.js. I like to create high-performance, accessible web applications that meet diverse project goals.',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  // },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/akshayrx',
  },
  {
    label: 'X',
    link: 'https://x.com/akshayravikant',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/akshayravikant',
  },
  {
    label: 'WhatsApp',
    link: 'https://wa.me/919082767447?text=Hey%20Akshay',
  },
  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/akshayravikant_',
  // },
]

export const EMAIL: String = 'start@akshay.ing'

// export const ABOUT: String = `I am a software developer specialising in AI voice & chat agents and SaaS applications. I am passionate about building products that solve real-world problems. I am a software developer specialising in AI voice & chat agents and SaaS applications. I am passionate about building products that solve real-world problems. `

export const ABOUT_ME: Introduction[] = [
  // {
  //   paragraph: 'I am a software developer specialising in AI voice & chat agents and SaaS applications. I am passionate about building products that solve real-world problems.',
  //   id: 1
  // },
  // {
  //   paragraph: 'A passionate Frontend Developer with about a decade of freelancing experience, specializing in creating modern & scalable web applications that solves real problem for your businesses. I am proficient in working with Next.js, TypeScript, and Tailwind CSS, alongside AI-driven voice and chat solutions.',
  //   id: 2
  // },
  // {
  //   paragraph: 'Explore my portfolio, check out my latest projects and blogs, and let’s connect to discuss how I can bring your ideas to life!',
  //   id: 3
  // },
  {
    paragraph: 'A programmer with a passion for coding and problem-solving. Hi, my name is Akshay, my focus is on creating accessible tech products that impacts people beyond social and economic barrier.',
    id: 4
  },
  {
    paragraph: 'I am a self-taught developer with a strong foundation in JavaScript, ReactJs, and NextJs. I am proficient in working with modern AI tools and technologies to build scalable and efficient web applications that provides real-world solutions.',
    id: 5
  },
  {
    paragraph: 'I specialise in creating AI-driven voice & chat interface, and software as a service (SaaS) applications.',
    id: 6
  },
]

export const TECH_SKILLS: TechSkills[] = [
  {
    category: 'Programming',
    topics: 'JavaScript, ReactJs, NextJs',
    id: 1
  },
  // {
  //   category: 'Programming (Basics)',
  //   topics: 'Python',
  //   id: 2
  // },
  {
    category: 'Development/Production Tools',
    topics: 'Git, GitHub, Vercel, AWS, Replit, Netlify',
    id: 3
  },
  {
    category: 'UI/UX Design',
    topics: 'Figma',
    id: 4
  },
  {
    category: 'AI & Machine Learning',
    topics: 'Grok, OpenAI, Gemini',
    id: 5
  },
  {
    category: 'Automation Builders',
    topics: 'Make, N8N',
    id: 6
  },
  {
    category: 'CRM',
    topics: 'Notion, Airtable',
    id: 7
  },
]


export const CERTIFICATES: Certificates[] = [
  // {
  //   courseName: 'Full Stack Development Bootcamp by Angela Yu',
  //   issuedBy: 'Udemy',
  //   completionDate: '2021',
  //   category: 'Programming',
  //   id: 1
  // },
  // {
  //   courseName: 'Development Fundamentals',
  //   issuedBy: 'IBM',
  //   completionDate: '2021',
  //   category: 'Programming',
  //   id: 2
  // },
  // {
  //   courseName: 'UI/UX Fundamentals',
  //   issuedBy: 'IBM',
  //   completionDate: '2021',
  //   category: 'UI/UX Design',
  //   id: 3
  // },
  // {
  //   courseName: 'Critial Thinking Essentials',
  //   issuedBy: 'IBM',
  //   completionDate: '2021',
  //   category: 'Strategy',
  //   id: 4
  // },
  // {
  //   courseName: 'Full Stack Development Bootcamp by Angela Yu',
  //   issuedBy: 'Udemy',
  //   completionDate: '2021',
  //   category: 'Programming',
  //   id: 5
  // },
]