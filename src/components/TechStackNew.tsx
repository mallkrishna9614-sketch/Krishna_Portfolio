import { useEffect } from "react";
import "./styles/TechStackNew.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  name: string;
  icon: string;
  url?: string;
}

// Inverted Pyramid: 10 -> 8 -> 6 -> 4 -> 2 items
const techStackRows: TechItem[][] = [
  // Row 1 - 10 items (Core Languages & Web)
  [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://www.java.com" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org" },
  ],
  // Row 2 - 8 items (Tools & Core Concepts)
  [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
    { name: "Problem Solving", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" },
    { name: "Data Structures", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" },
    { name: "Algorithms", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" },
    { name: "OOP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" },
  ],
  // Row 3 - 6 items (Interactive & Game Development Systems)
  [
    { name: "Gameplay Logic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Interactive Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" },
    { name: "2D / 3D Logic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", url: "https://vitejs.dev" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
    { name: "Responsive UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
  ],
  // Row 4 - 4 items (Deployment & Workflow)
  [
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Software Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Clean Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  // Row 5 - 2 items (Core Focus - tip of pyramid)
  [
    { name: "Game Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Computer Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  ],
];

const TechStackNew = () => {
  useEffect(() => {
    const techTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".techstack-new",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    techTimeline.fromTo(
      ".techstack-content h2",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    techTimeline.fromTo(
      ".techstack-row",
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      techTimeline.kill();
    };
  }, []);

  return (
    <section className="techstack-new" id="techstack">
      <div className="techstack-glow-bg"></div>
      <div className="techstack-content">
        <h2>
          Skills <span>&amp; Tools</span>
        </h2>

        <div className="techstack-pyramid">
          {techStackRows.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => {
                if (tech.url) {
                  return (
                    <a
                      key={techIndex}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="techstack-item"
                      title={tech.name}
                      data-cursor="disable"
                    >
                      <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                      <span>{tech.name}</span>
                    </a>
                  );
                }
                return (
                  <div
                    key={techIndex}
                    className="techstack-item"
                    title={tech.name}
                    data-cursor="disable"
                  >
                    <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackNew;
