export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  role: string;
  year: string;
  description: string;
  assets: {
    logo: string;
    cover: string;
    video: string;
    poster: string;
    image: string;
  };
};

export const projects: Record<string, Project> = {
  azura: {
    slug: 'azura',
    title: 'Azura',
    subtitle: 'NFT marketplace',
    type: 'Personal',
    role: 'Frontend',
    year: '2025',
    description:
      'Azura is an NFT marketplace where users can buy, sell, and trade digital assets in a secure and user-friendly environment. The platform offers wallet integration, auction systems, and social sharing options.',
    assets: {
      logo: '/projects/azura/logo.png',
      cover: '/projects/azura/cover1.png',
      video: '/videos/azura',
      poster: '/projects/azura/frame1.png',
      image: '/projects/azura/cover.png',
    },
  },
  weecomtask: {
    slug: 'weecomtask',
    title: 'Weecom Task',
    subtitle: 'Job Task',
    type: 'Job Task',
    role: 'Frontend',
    year: '2025',
    description:
      'This was a job task for Weecom. The task involved creating a responsive web application that showcases a list of products with filtering and sorting capabilities. The application had to use TanStack query.',
    assets: {
      logo: '/projects/weecom/logo.png',
      cover: '/projects/weecom/cover1.png',
      video: '/videos/weecom',
      poster: '/projects/weecom/cover.png',
      image: '/projects/weecom/cover1.png',
    },
  },
  matchapply: {
    slug: 'matchapply',
    title: 'MatchApply',
    subtitle: 'AI Job Application',
    type: 'Personal',
    role: 'Frontend',
    year: '2025',
    description:
      'This is a UI for a job application platform where users can leverage AI to assist in applying for jobs. The platform features user profiles, job listings, and an AI-powered application assistant to streamline the job application process.',
    assets: {
      logo: '/projects/matchapply/logo.png',
      cover: '/projects/matchapply/cover1.png',
      video: '/videos/matchapply',
      poster: '/projects/matchapply/cover.png',
      image: '/projects/matchapply/cover.png',
    },
  },
  gamingwithme: {
    slug: 'gamingwithme',
    title: 'GamingWitMe',
    subtitle: 'Booking Platform for Gamers',
    type: 'Freelance',
    role: 'Frontend',
    year: '2025',
    description:
      'A booking platform for gamers and creators that includes user profiles, service listings, payment processing, and admin tools to manage bookings and user interactions.',
    assets: {
      logo: '/projects/gamingwithme/logo.png',
      cover: '/projects/gamingwithme/cover1.png',
      video: '/videos/gamingwithme',
      poster: '/projects/gamingwithme/cover.png',
      image: '/projects/gamingwithme/cover.png',
    },
  },
  skillstack: {
    slug: 'skillstack',
    title: 'SkillStack',
    subtitle: 'Social Media for Developers',
    type: 'Personal',
    role: 'Frontend',
    year: '2025',
    description:
      'This is a social media platform for developers where they can share code snippets, discuss problems, and collaborate on projects. The platform includes features like user profiles, code sharing, and discussion forums.',
    assets: {
      logo: '/projects/skillstack/logo.png',
      cover: '/projects/skillstack/cover1.png',
      video: '/videos/skillstack',
      poster: '/projects/skillstack/cover.png',
      image: '/projects/skillstack/cover.png',
    },
  },
  codearc: {
    slug: 'codearc',
    title: 'CodeArc',
    subtitle: 'Developer Team Platform',
    type: 'Personal',
    role: 'Frontend',
    year: '2025',
    description:
      'This is a platform for developer teams that allows them to create Kanban boards, manage API routes, and plan databases with a user-friendly interface. The platform aims to streamline project management and collaboration for development teams.',
    assets: {
      logo: '/projects/codearc/logo.svg',
      cover: '/projects/codearc/cover1.png',
      video: '/videos/codearc',
      poster: '/projects/codearc/cover.png',
      image: '/projects/codearc/cover.png',
    },
  },
  cinemaview: {
    slug: 'cinemaview',
    title: 'CinemaView',
    subtitle: 'Application for employees and users.',
    type: 'School Exam',
    role: 'Frontend',
    year: '2023',
    description:
      'This is an application for our exam. The project can allow employees to select their shifts online. Managers can add screenings and movies.',
    assets: {
      logo: '/projects/CinemaView/logo.svg',
      cover: '/projects/CinemaView/cover1.png',
      video: '/videos/cinemaview',
      poster: '/projects/CinemaView/cover.png',
      image: '/projects/CinemaView/cover.png',
    },
  },
  projecthub: {
    slug: 'projecthub',
    title: 'ProjectHub',
    subtitle: 'Job posting and applying',
    type: 'Personal',
    role: 'Frontend',
    year: '2025',
    description:
      'This is a platform where you can create job postings and you can apply for jobs. The application has a seperate for you section that shows jobs based on your profile settings.',
    assets: {
      logo: '/projects/projecthub/logo.png',
      cover: '/projects/projecthub/cover1.png',
      video: '/videos/projecthub',
      poster: '/projects/projecthub/cover.png',
      image: '/projects/projecthub/cover.png',
    },
  },
};
