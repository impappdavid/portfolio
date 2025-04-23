export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: any;
  challenges: string[];
  isVideo: Boolean;
  demoOrSource: Boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "azura",
    title: "Azura",
    description: "Azura is an AI-powered NFT platform where users can create, customize, and trade unique digital collectibles. Featuring a sleek marketplace and advanced rarity optimization, Azura blends creativity and technology for a next-gen Web3 experience.",
    date: "15 Feb, 2025 • Crypto",
    isVideo: true,
    image: "/projects/azura/azura.mp4",
    technologies: ["Svelte", "TypeScript", "Tailwind CSS", "Git", "GitHub", "D3 Chart", "shadcn/ui"],
    demoOrSource: true,
    githubUrl: "https://github.com/impappdavid/Azura",
    liveUrl: "https://azura-neon.vercel.app/",
    features: [
      {
        title: "NFT types"
      },
      {
        title: "Rarity based"
      },
      {
        title: "Marketplace"
      },
      {
        title: "Auction"
      },
      {
        title: "Investment"
      },
      {
        title: "Upgrade"
      },
      {
        title: "Merge"
      },
    ],
    challenges: ["The designing was hard to make sure its easy to understand and that its not overdesigned.","This was my first time using d3 charts it was not easy to understand. The most challenging was the hover tooltip."]
  },
  
  {
    id: "2",
    slug: "cinemaview",
    title: "CinemaView",
    description: "A full-featured e-commerce platform with product management and payment processing",
    date: "",
    isVideo: false,
    image: "/projects/cinemaview/login.png",
    technologies: ["Svelte", "TypeScript", "Tailwind CSS", "JSON Web Token"],
    demoOrSource: false,
    githubUrl: "",
    liveUrl: "",
    features: [
      {
        title: "Authentication"
      },
      {
        title: "2FA"
      },
      {
        title: "Create shifts"
      },
      {
        title: "Select shifts"
      },
      {
        title: "Screenings"
      },
      {
        title: "Booking"
      },
      {
        title: "Tickets"
      },
    ],
    challenges: ["I learned a lot of new things during this project because this was my first experience working with a team on a real project. I learned how to communicate with my team members and how to manage a project.","Using jsonwebtoken to create the JWT was a bit challenging because I had to make sure that the JWT was valid and that the user was authorized to access the app. I also had to make sure that the unauthorized users are redirected to the login page.", "The 2fa was a bit challenging because I never worked with qr codes before. I had to learn how to generate the qr code and the secret key. I also had to learn how to validate the qr code and the secret key.", "Managing the dates was a bit challenging because I had to make sure that the dates were valid and that the dates were not in the past. I also had to make sure that the dates were in the correct format."]
  },

];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
} 