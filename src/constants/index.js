import {
  web,
  mobile,
  backend,
  mongoDB,
  reactjs,
  tailwind,
  nodejs,
  astro,
  nextJS,
  venezuelaHelp,
  netflix,
  godot,
  jscambios,
  github,
  linkedin,
  x,
  whatsapp,
  telegram,
  mockup,
  libreriaDeLasTormentas,
  javitoPortfolio,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Full-Stack Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Node.JS Developer',
    icon: backend,
  },
]

const technologies = [
  {
    name: 'ReactJS',
    icon: reactjs,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'TailwindCSS',
    icon: tailwind,
  },
  {
    name: 'Astro',
    icon: astro,
  },
  {
    name: 'Nextjs',
    icon: nextJS,
  },
  {
    name: 'MongoDB',
    icon: mongoDB,
  },
]

const experiences = [
  {
    title: 'Frontend Contributor',
    company_name: 'venezuelahelp.org',
    icon: venezuelaHelp,
    iconBg: '#E6DEDD',
    date: 'August 2024 - Present',
    points: [
      'Contributed to the development of a humanitarian website that received positive feedback from donors and professionals such as psychologists, doctors, and lawyers.',
      'Utilized React, Tailwind, Git/Github, Astro, and Cloudflare to optimize UI components, reduce load times, and develop intereactive forms.',
      "Learned advanced coding techniques, particularly in Astro and TypeScript, to enhance the project's persomance and maintainability.",
    ],
  },
  {
    title: 'FullStack Developer',
    company_name: 'Freelancer',
    icon: netflix,
    iconBg: '#383E56',
    date: 'August 2024 - September 2024',
    points: [
      'Collaborating directly with a client to develop a web application for purchasing Netflix accounts using criptocurrency payments',
      'Responsible for creating and integrating frontend components with a custom API for Binance Pay, enabling secure and efficient cryptocurrency transactions using stripe.',
      'Implementation of modern technologies including React for the frontend.',
    ],
  },
  {
    title: 'Game Developer',
    company_name: 'Gamesjan (Team Participation)',
    icon: godot,
    iconBg: '#E6DEDD',
    date: 'july 2024 - August 2024',
    points: [
      'Contributed to game development by implementing logic, scenes, and animations in Godot, collaborating closely with a team of senior and mid-level developers',
      'Gained valuable experience and mentorship from experienced developers, which enhanced my skills in code development and team collaboration.',
    ],
  },
  {
    title: 'Treasurer and Data Administrator',
    company_name: '@_jscambios',
    icon: jscambios,
    iconBg: '#383E56',
    date: 'February 2023 - April 2024',
    points: [
      "Managed financial data and customer activity records using Excel, ensuring accurate tracking and reporting for the company's operations.",
      'Developed internal web interfaces using React to visualize financial data and improve decision-making processes for company owners.',
      'Streamlined administrative processes, enhancing the efficiency of financial operations and contributing to the company’s growth.',
    ],
  },
]

const testimonials = [
  {
    testimonial: '',
    name: '',
    designation: '',
    company: '',
    image: '',
  },
]

const projects = [
  {
    name: 'Mockup Landing Page',
    description: 'Mockup for a client',
    tags: [
      {
        name: 'Astro',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Shadcn',
        color: 'pink-text-gradient',
      },
    ],
    deploy: 'https://mockup-client.vercel.app/',
    image: mockup,
    source_code_link: 'https://github.com/DaniCoppermind/mockup-client',
    codePrivate: false,
  },
  {
    name: 'Libreria de las Tormentas',
    description:
      'Personal Bookshelf of my favorites writers and a personal challenge by learning NextJS | Typescript',
    tags: [
      {
        name: 'Next.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'black-text-gradient',
      },
      {
        name: 'Node.JS',
        color: 'text-yellow-300',
      },
      {
        name: 'Cloudinary',
        color: 'text-amber-500',
      },
    ],
    deploy: 'https://libreria-de-las-tormentas.vercel.app',
    image: libreriaDeLasTormentas,
    source_code_link: '#',
    codePrivate: true,
  },
  {
    name: 'Editor Videos Portfolio',
    description: 'Freelance Personal Portfolio for a Client.',
    tags: [
      {
        name: 'React.JS',
        color: 'pink-text-gradient',
      },
      {
        name: 'React Query',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'black-text-gradient',
      },
      {
        name: 'Node.JS',
        color: 'text-yellow-300',
      },
      {
        name: 'i18next',
        color: 'text-amber-500',
      },
    ],
    deploy: 'https://javito-portafolio-frontend.onrender.com/es',
    image: javitoPortfolio,
    source_code_link: 'https://github.com/DaniCoppermind/javito-portafolio',
    codePrivate: false,
  },
]

const footerIcons = {
  social_media: [
    {
      name: 'github',
      icon: github,
      url: 'https://github.com/DaniCoppermind',
    },
    {
      name: 'linkedin',
      icon: linkedin,
      url: 'https://www.linkedin.com/in/danigarciadev/',
    },
    {
      name: 'x',
      icon: x,
      url: 'https://x.com/DanielG.',
    },
  ],
  contact: [
    {
      name: 'WhatsApp',
      icon: whatsapp,
      url: 'https://wa.me/33621237260',
    },
    {
      name: 'Telegram',
      icon: telegram,
      url: 'https://t.me/dani_coppermind',
    },
  ],
}

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  footerIcons,
}
