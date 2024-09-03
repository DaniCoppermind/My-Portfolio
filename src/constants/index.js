import {
  web,
  mobile,
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  nestJS,
  nextJS,
  postgresql,
  venezuelaHelp,
  netflix,
  godot,
  jscambios,
  github,
  linkedin,
  x,
  whatsapp,
  telegram,
} from '../assets';

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
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Nest | Express Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'NextJS',
    icon: nextJS,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'nestJS',
    icon: nestJS,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Frontend Contributor',
    company_name: 'Anonymous Company',
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
    company_name: 'J&S Cambios',
    icon: jscambios,
    iconBg: '#383E56',
    date: 'February 2023 - April 2024',
    points: [
      "Managed financial data and customer activity records using Excel, ensuring accurate tracking and reporting for the company's operations.",
      'Developed internal web interfaces using React to visualize financial data and improve decision-making processes for company owners.',
      'Streamlined administrative processes, enhancing the efficiency of financial operations and contributing to the company’s growth.',
    ],
  },
];

const testimonials = [
  {
    testimonial: '',
    name: '',
    designation: '',
    company: '',
    image: '',
  },
];

const projects = [
  {
    name: '',
    description: '',
    tags: [
      {
        name: '',
        color: 'blue-text-gradient',
      },
      {
        name: '',
        color: 'green-text-gradient',
      },
      {
        name: '',
        color: 'pink-text-gradient',
      },
    ],
    image: '',
    source_code_link: 'https://github.com/',
  },
];

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
      url: 'https://x.com/DaniCoppermind',
    },
  ],
  contact: [
    {
      name: 'WhatsApp',
      icon: whatsapp,
      url: 'https://wa.me/123456789',
    },
    {
      name: 'Telegram',
      icon: telegram,
      url: 'https://t.me/DaniCoppermind',
    },
  ],
};

export { services, technologies, experiences, testimonials, projects, footerIcons };
