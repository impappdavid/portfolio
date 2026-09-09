// data.ts

export interface DocumentationItem {
  title: string;
  content: string;
  codeSnippet?: string;
  image?: string;
}

export interface ChallengeItem {
  issue: string;
  solution: string;
  codeSnippet?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  description: string;
  aspectRatio: string;
  position?: { top: string; left: string; rotate: string };
}

export interface ProjectDoc {
  title: string;
  subtitle: string;
  metadata: {
    date: string;
    role: string;
    demoUrl: string;
    sourceUrl: string;
  };
  description: string[];
  stack: string[];
  howToStart: {
    prerequisites: string[];
    commands: string;
  };
  documentation: DocumentationItem[];
  challenges: ChallengeItem[];
  gallery: GalleryItem[];
}

export const PROJECTS_DATA: Record<string, ProjectDoc> = {
  noda: {
    title: "Noda",
    subtitle: "Job Board",
    metadata: {
      date: "2026",
      role: "Frontend Engineer / Designer",
      demoUrl: "",
      sourceUrl: "https://github.com/example/portfolio",
    },
    description: [
      "After experiencing the frustrations of a prolonged job search firsthand, I built Noda to address systemic flaws in existing recruitment platforms.",
      "Noda fixes these friction points through automated pipeline state machines, built-in application tracking, verified company reviews, and strict employer response timers.",
    ],
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "React Router",
      "shadcn",
      "CMDK",
      "Recharts",
      "Framer Motion",
    ],
    howToStart: {
      prerequisites: ["Node.js 20.x or higher", "npm package manager"],
      commands: `git clone https://github.com/example/noda.git\ncd noda\nnpm install\nnpm run dev`,
    },
    documentation: [
      {
        title: "1.0 Anonymous Mode",
        content:
          "Job seekers often hesitate to leave honest feedback on existing job boards for fear of professional retaliation. Anonymous Mode enables candidates to post candid company reviews without sacrificing privacy.",
        image: "/projects/Noda/features/anonymus.jpg",
      },
      {
        title: "1.1 Role Match Score",
        content:
          "Replaces traditional uninformative listing cards with essential metrics at a glance—including clear compensation bands, core tech requirements, and an instant profile match percentage.",
        image: "/projects/Noda/features/jobmatch.jpg",
      },
      {
        title: "1.2 Application Tracker",
        content:
          "Eliminates manual application logging. On-site applications automatically enter the candidate pipeline board, with options to track external roles seamlessly in one place.",
        image: "/projects/Noda/features/tracker.jpg",
      },
      {
        title: "1.3 Multi-Source Aggregation",
        content:
          "Integrates external job board APIs to pull available opportunities into a single interface, reducing cross-platform navigation overhead.",
      },
      {
        title: "1.4 Verified Reviews",
        content:
          "Ensures review authenticities by restricting interview reviews to candidate applicants who passed system verification, while employee reviews require verified organizational team membership.",
        image: "/projects/Noda/features/reviews.jpg",
      },
      {
        title: "1.5 Anti-Ghosting Protocol",
        content:
          "Enforces employer accountability. Listings allow up to 30 days of active candidate collection, followed by a mandatory 14-day response period. Non-responsive postings are automatically delisted and issued profile penalties.",
      },
      {
        title: "2.0 Two-Way Verification",
        content:
          "Protects both parties by verifying applicant identities to eliminate bots/trolls, while auditing posting employers to eliminate data-farming ghost companies.",
      },
      {
        title: "2.1 Batch Pipeline Actions",
        content:
          "Streamlines recruiter workflows with automated downstream notifications when candidate selections are finalized, avoiding repetitive manual rejections.",
      },
      {
        title: "2.2 Stealth Candidate Filters",
        content:
          "Enables recruiters to apply specific qualification criteria that candidates cannot view or manipulate, ensuring objective evaluation.",
      },
      {
        title: "2.3 Candidate Ranking Matrix",
        content:
          "Ranks applicants based on deep skill-set alignments, experience markers, and verified side-project activity on Launchpad.",
      },
      {
        title: "2.4 Automated Scheduling",
        content:
          "Reduces scheduling friction by allowing recruiters to define available interview slots. Accepted candidates automatically receive prompt links to select an available time.",
        image: "/projects/Noda/features/interview.jpg",
      },
    ],
    challenges: [
      {
        issue: "Standard multi-category search widgets artificially cap search results per category (e.g., max 3 items each) to prevent UI overflow, hiding relevant data and conflicting with historical search suggestions.",
        solution:
          "Designed a command-driven UI pattern (/user, /job, /company) that transforms the input dynamically into a focused, scoped query interface with context-aware autocomplete matching.",
        codeSnippet: `const suggestions = useMemo(() => {

  if (query === "/") return COMMANDS;

  const currentVal = activeParam === "role" ? query : locValue;

  if (activeCommand && currentVal.length > 0) {

    const cmdObj = COMMANDS.find((c) => c.id === activeCommand);

    return cmdObj?.data?.filter((item: any) =>
      item.name.toLowerCase().includes(currentVal.toLowerCase())
    ).slice(0, 5) || [];
  }

  return [];
}, [activeCommand, activeParam, query, locValue]);`,
      },
    ],
    gallery: [
      {
        id: "fig-1",
        src: "/projects/Noda/images/noda_home.png",
        alt: "Candidate Dashboard",
        caption: "Home page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "10%", left: "5%", rotate: "-6deg" },
      },
      {
        id: "fig-2",
        src: "/projects/Noda/images/noda_jobs_COVER.png",
        alt: "Candidate Dashboard",
        caption: "Jobs page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "52%", left: "10%", rotate: "6deg" },
      },
      {
        id: "fig-3",
        src: "/projects/Noda/images/noda_cobuild.png",
        alt: "CoBuild page",
        caption: "CoBuild page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "2%", left: "25%", rotate: "-16deg" },
      },
      {
        id: "fig-4",
        src: "/projects/Noda/images/noda_communities.png",
        alt: "Communities page",
        caption: "Communities page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "60%", left: "32%", rotate: "-9deg" },
      },
       {
        id: "fig-5",
        src: "/projects/Noda/images/noda_companies.png",
        alt: "Companies page",
        caption: "Companies page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "3%", left: "58%", rotate: "-6deg" },
      },
       {
        id: "fig-6",
        src: "/projects/Noda/images/noda_tracker.png",
        alt: "Tracker page",
        caption: "Tracker page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "54%", left: "59%", rotate: "6deg" },
      },
      {
        id: "fig-7",
        src: "/projects/Noda/images/noda_calendar.png",
        alt: "Calendar page",
        caption: "Calendar page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "15%", left: "80%", rotate: "-24deg" },
      },
      {
        id: "fig-8",
        src: "/projects/Noda/images/noda_network.png",
        alt: "Network page",
        caption: "Network page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "10%", left: "5%", rotate: "-6deg" },
      },
      {
        id: "fig-9",
        src: "/projects/Noda/images/noda_settings.png",
        alt: "Settings Modal",
        caption: "Settings Modal",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "10%", left: "5%", rotate: "-6deg" },
      },
      {
        id: "fig-10",
        src: "/projects/Noda/images/noda_userprofile.png",
        alt: "Profile page",
        caption: "Profile page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "10%", left: "5%", rotate: "-6deg" },
      },
      {
        id: "fig-11",
        src: "/projects/Noda/images/noda_message.png",
        alt: "Message page",
        caption: "Message page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "10%", left: "5%", rotate: "-6deg" },
      },
      {
        id: "fig-12",
        src: "/projects/Noda/images/noda_login.png",
        alt: "Login page",
        caption: "Login page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "10%", left: "5%", rotate: "-6deg" },
      },
      {
        id: "fig-13",
        src: "/projects/Noda/images/noda_jobs_applicationquestion.png",
        alt: "Job Questions Modal",
        caption: "Job Questions Modal",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "10%", left: "5%", rotate: "-6deg" },
      },
       {
        id: "fig-14",
        src: "/projects/Noda/images/noda_company_dashboard.png",
        alt: "Company Dashboard page",
        caption: "Company Dashboard page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "10%", left: "5%", rotate: "-6deg" },
      },
       {
        id: "fig-15",
        src: "/projects/Noda/images/noda_company_jobs.png",
        alt: "Company Jobs page",
        caption: "Company Jobs page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "10%", left: "5%", rotate: "-6deg" },
      },
      {
        id: "fig-16",
        src: "/projects/Noda/images/noda_company_teammembers.png",
        alt: "Company Team page",
        caption: "Company Team page",
        description:
          "",
        aspectRatio: "aspect-video",
        position: { top: "10%", left: "5%", rotate: "-6deg" },
      },
    ],
  },
  revalo: {
    title: "Revalo",
    subtitle: "",
    metadata: {
      date: "",
      role: "",
      demoUrl: "",
      sourceUrl: "",
    },
    description: [ ],
    stack: [ ],
    howToStart: {
      prerequisites: [],
      commands: ``,
    },
    documentation: [
      
    ],
    challenges: [
     
    ],
    gallery: [
      
    ],
  },
};
