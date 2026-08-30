export interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string;
  image: string;
  description: string;
  link?: string;
  github?: string;
}

export interface Certificate {
  id: string | number;
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies?: string[];
}

export const config = {
  developer: {
    name: "Krishna",
    fullName: "Krishna Mall",
    primaryRole: "GAME DEVELOPER",
    secondaryRole: "COMPUTER SCIENCE STUDENT",
    title: "Game Developer & Computer Science Student",
    supportingText:
      "Building games, interactive experiences, and software while growing as a Computer Science developer.",
    tagline:
      "Computer Science student passionate about game development, programming, and building interactive software experiences.",
    location: "Punjab, India",
    university: "Lovely Professional University (LPU)",
    degree: "B.Tech Computer Science Engineering",
    cgpa: "7.77",
  },
  social: {
    github: "https://github.com/mallkrishna9614-sketch",
    linkedin: "https://www.linkedin.com/in/krishna-mall-80587b284/",
    twitter: "https://x.com/Krishna72064510",
    email: "mallkrishna9614@gmail.com",
    location: "Punjab, India",
  },
  about: {
    title: "About Me",
    description:
      "Hey, I'm Krishna Mall — a Computer Science Engineering student at Lovely Professional University with a strong interest in game development and software creation. I enjoy learning by building things, from small programming projects to interactive applications and web experiences. I'm currently focused on strengthening my programming fundamentals while exploring game development, problem solving, and modern development tools.",
  },
  whatIDo: {
    gameDev: {
      title: "GAME DEVELOPMENT",
      description:
        "Exploring game development, gameplay programming, interactive systems, and the technologies behind engaging digital experiences.",
      details:
        "I’m interested in understanding how games are built—from gameplay logic and programming to interaction, systems, and player experience.",
      tools: [
        "C++",
        "C",
        "Gameplay Programming",
        "Interactive Systems",
        "Game Mechanics",
        "Problem Solving",
      ],
    },
    softwareDev: {
      title: "SOFTWARE DEVELOPMENT",
      description:
        "Building practical software and web projects while strengthening my programming and problem-solving fundamentals.",
      details:
        "I enjoy turning ideas into working projects and continuously improving my understanding of programming, application logic, and development workflows.",
      tools: [
        "Python",
        "Java",
        "C",
        "C++",
        "HTML",
        "CSS",
        "Git",
        "GitHub",
      ],
    },
  },
  skills: {
    develop: {
      title: "GAME DEVELOPMENT",
      description: "Gameplay programming & interactive digital systems",
      details:
        "Exploring game development, gameplay programming, interactive systems, and the technologies behind engaging digital experiences. Interested in understanding how games are built—from gameplay logic to interaction, systems, and player experience.",
      tools: [
        "C++",
        "C",
        "Gameplay Logic",
        "Interactive Systems",
        "Game Mechanics",
        "Problem Solving",
      ],
    },
    design: {
      title: "SOFTWARE DEVELOPMENT",
      description: "Practical software & web projects",
      details:
        "Building practical software and web projects while strengthening programming and problem-solving fundamentals. Turning ideas into working projects and continuously improving application logic and development workflows.",
      tools: [
        "Python",
        "Java",
        "C",
        "C++",
        "HTML",
        "CSS",
        "Git",
        "GitHub",
      ],
    },
  },
  experiences: [
    {
      position: "B.Tech Computer Science Engineering",
      company: "Lovely Professional University",
      period: "2025 - Present",
      location: "Punjab, India",
      description:
        "Currently pursuing Computer Science Engineering (CGPA: 7.77) while developing stronger foundations in programming, problem solving, software development, and exploring game development.",
      technologies: ["C", "C++", "Java", "Python", "Data Structures", "Problem Solving"],
    },
    {
      position: "Game Development Exploration",
      company: "Gameplay & Interactive Systems",
      period: "Milestone",
      location: "Self-Driven",
      description:
        "Exploring gameplay programming, mechanics design, 2D/3D interactive logic, and player experience systems.",
      technologies: ["C++", "C", "Game Logic", "Interactive Systems"],
    },
    {
      position: "Project Building & Hackathons",
      company: "Winner — BuilderFest 2026 & ISRO Hackathon",
      period: "Milestone",
      location: "Projects",
      description:
        "Secured 1st Position at BuilderFest 2026 overnight hackathon with Team DUNCAN and participated in ISRO Bharatiya Antariksh Hackathon.",
      technologies: ["React", "HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    },
    {
      position: "Programming Fundamentals",
      company: "Core Computer Science",
      period: "Milestone",
      location: "Learning",
      description:
        "Strengthening core problem-solving capabilities, algorithms, data structures, and multi-language programming proficiency.",
      technologies: ["C", "C++", "Java", "Python", "Git", "GitHub"],
    },
  ] as Experience[],
  projects: [
    {
      id: 1,
      title: "Canteen",
      category: "Web Application",
      technologies: "React.js, Node.js, Express.js, MongoDB, Real-Time Ordering",
      image: "/images/canteen.png",
      description:
        "A full-stack smart canteen management platform created for Lovely Professional University with online food ordering, live order tracking, token-based pickup updates, and staff dashboards.",
      link: "https://canteen-sepia.vercel.app/",
    },
    {
      id: 2,
      title: "The Khao PiYo",
      category: "Web Application",
      technologies: "React, Web Development, Modern Frontend Design, UI/UX",
      image: "/images/thekhaopiyo.png",
      description:
        "A modern food-focused web application built to create a fast, interactive digital experience around discovering dishes, exploring curated menus, and enjoying delicious meals.",
      link: "https://vercel.com/mallkrishna9614-sketchs-projects/thekhaoopiyo-web",
    },
    {
      id: 3,
      title: "AgriSense",
      category: "Web Platform",
      technologies: "Next.js, React, TypeScript, AI/ML Analytics, Crop Intelligence",
      image: "/images/agrisense.png",
      description:
        "An AI-powered smart-farming platform designed to assist farmers with crop selection, disease detection, weather analysis, soil intelligence, and live commodity prices.",
      link: "https://agrisense-platform-bscl.vercel.app/",
    },
    {
      id: 4,
      title: "Rescue Mash",
      category: "Application / Hackathon Project",
      technologies: "Android Development, Firebase, Real-Time Communication, SOS Alerts",
      image: "/images/rescuemash.png",
      description:
        "An offline-first emergency assistance application designed to provide faster support during critical situations with SOS alerts, real-time location sharing, and bluetooth mesh communication.",
      link: "",
    },
  ] as Project[],
  certificates: [
    {
      id: 1,
      title: "Winner — BuilderFest 2026",
      issuer: "AWS Student Builder Group & Lovely Professional University",
      date: "JAN 2026",
      image: "/images/certificates/aws-builderfest-2026.png",
      credentialId: "Member of Team DUNCAN",
      verificationUrl: "/certificates/aws-builderfest-2026-winner.pdf",
    },
    {
      id: 2,
      title: "Bharatiya Antariksh Hackathon 2026",
      issuer: "Indian Space Research Organisation (ISRO) & Hack2Skill",
      date: "JUN 2026",
      image: "/images/certificates/isro-hackathon-2026.png",
      credentialId: "2026H2S06BAH-P05421",
      verificationUrl: "/certificates/isro-bharatiya-antariksh-hackathon-2026.pdf",
    },
  ] as Certificate[],
  resume: {
    title: "MY CV",
    subtitle: "A quick look at my journey, skills, projects, and experience.",
    file: "/cv/krishna-mall-cv.pdf",
    photo: "/images/krishna-mall.jpg",
    name: "Krishna Mall",
    role: "Game Developer & Computer Science Student",
    institution: "Lovely Professional University (LPU)",
    degree: "B.Tech Computer Science Engineering",
    cgpa: "7.77",
    location: "Punjab, India",
    skills: {
      languages: ["Java", "JavaScript", "C", "C++", "Python"],
      technologies: ["HTML", "CSS", "Bootstrap", "Node.js", "React", "Tailwind CSS", "Express.js"],
      tools: ["MySQL", "MongoDB", "Git", "GitHub", "Figma", "VS Code"],
      interests: ["Game Development", "Gameplay Programming", "Interactive Systems", "Problem Solving"],
    },
  },
  techStack: {
    programming: [
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: "Core Language" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: "Game & Systems" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: "OOP & Fundamentals" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Scripting & AI" },
    ],
    web: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: "Markup" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: "Styling" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Frontend & Logic" },
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: "Version Control" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: "Collaboration" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: "Primary IDE" },
    ],
    interests: [
      { name: "Game Development", desc: "Gameplay logic, mechanics, interactive systems" },
      { name: "Software Development", desc: "Building practical tools and applications" },
      { name: "Web Development", desc: "Modern, responsive web experiences" },
      { name: "Problem Solving", desc: "Algorithms and structured programming" },
    ],
  },
  contact: {
    headline: "Let's build something interesting.",
    description:
      "I'm always interested in learning, building, experimenting, and connecting with people who enjoy creating things with technology.",
    email: "mallkrishna9614@gmail.com",
    github: "https://github.com/mallkrishna9614-sketch",
    linkedin: "https://www.linkedin.com/in/krishna-mall-80587b284/",
    twitter: "https://x.com/Krishna72064510",
    location: "Punjab, India",
  },
  seo: {
    title: "Krishna Mall | Game Developer & Computer Science Student",
    description:
      "Portfolio of Krishna Mall, a Computer Science Engineering student at Lovely Professional University interested in game development, programming, software development, and building interactive digital experiences.",
    keywords:
      "Krishna Mall, Game Developer, Computer Science Student, Lovely Professional University, LPU, Portfolio, Software Developer, C++, Python, Game Programming",
    author: "Krishna Mall",
    url: "https://krishnamall.dev",
  },
};
