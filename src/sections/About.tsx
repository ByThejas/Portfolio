import { useState } from "react";
import { Reveal } from "../components/Reveal";
import "./About.css";

type StackCategory =
  | "All"
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "DevOps & Tools";

type Tech = {
  name: string;
  category: StackCategory;
  icon: string;
  accent?: string;
};

const categories: {
  name: StackCategory;
  icon: string;
}[] = [
  { name: "All", icon: "▱" },
  { name: "Languages", icon: "</>" },
  { name: "Frontend", icon: "▣" },
  { name: "Backend", icon: "▤" },
  { name: "Databases", icon: "◉" },
  { name: "DevOps & Tools", icon: "›_" },
];

const technologies: Tech[] = [
  {
    name: "TypeScript",
    category: "Languages",
    icon: "TS",
    accent: "typescript",
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: "JS",
    accent: "javascript",
  },
  {
    name: "Java",
    category: "Languages",
    icon: "☕",
    accent: "java",
  },
  {
    name: "Python",
    category: "Languages",
    icon: "PY",
    accent: "python",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "⚛",
    accent: "react",
  },
  {
    name: "Vite",
    category: "Frontend",
    icon: "V",
    accent: "vite",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "≈",
    accent: "tailwind",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "JS",
    accent: "node",
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: "API",
    accent: "api",
  },
  {
    name: "MongoDB",
    category: "Databases",
    icon: "M",
    accent: "mongodb",
  },
  {
    name: "Firebase",
    category: "Databases",
    icon: "F",
    accent: "firebase",
  },
  {
    name: "Git",
    category: "DevOps & Tools",
    icon: "◆",
    accent: "git",
  },
  {
    name: "GitHub",
    category: "DevOps & Tools",
    icon: "GH",
    accent: "github",
  },
  {
    name: "Vercel",
    category: "DevOps & Tools",
    icon: "▲",
    accent: "vercel",
  },
  {
    name: "Postman",
    category: "DevOps & Tools",
    icon: "P",
    accent: "postman",
  },
  {
    name: "Docker",
    category: "DevOps & Tools",
    icon: "D",
    accent: "docker",
  },
];

const currently = [
  {
    label: "BUILDING",
    value: "Digital products",
  },
  {
    label: "LEARNING",
    value: "Systems & architecture",
  },
  {
    label: "EXPLORING",
    value: "Creative technology",
  },
];

export function About() {
  const [activeCategory, setActiveCategory] =
    useState<StackCategory>("All");

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter(
          (technology) =>
            technology.category === activeCategory
        );

  return (
    <section id="about" className="about-section">
      <Reveal className="about-header">
        <div className="about-index">
          <span>03</span>
          <span>ABOUT ME</span>
        </div>

        <div className="about-header-line" />

        <span className="about-header-label">
          SOFTWARE ENGINEER
        </span>
      </Reveal>

      <Reveal className="about-intro" delay={0.05}>
        <div>
          <h2>
            I BUILD
            <br />
            <span>THINGS.</span>
          </h2>
        </div>

        <div className="about-intro-copy">
          <span className="about-kicker">
            CODE / DESIGN / SYSTEMS
          </span>

          <p>
            I'm a software engineer who enjoys turning
            ideas into digital products that are
            functional, thoughtful and actually nice
            to use.
          </p>

          <p>
            I care about the details — from how a system
            works underneath to how it feels when someone
            interacts with it.
          </p>
        </div>
      </Reveal>

      <Reveal className="about-grid" delay={0.08} y={45}>
        <div className="identity-card">
          <div className="identity-photo">
            <img
              src="/profile.png"
              alt="Thejas"
              draggable="false"
            />
          </div>

          <div className="identity-overlay" />

          <div className="identity-top">
            <span>THEJAS.OS</span>

            <span className="identity-status">
              <span />
              ONLINE
            </span>
          </div>

          <div className="identity-profile">
            <strong>THEJAS U</strong>
            <span>SOFTWARE ENGINEER</span>
          </div>
        </div>

        <div className="about-description">
          <div className="about-description-label">
            <span>01</span>
            <span>THE SHORT VERSION</span>
          </div>

          <p className="about-large-text">
            I like building things from zero.
          </p>

          <p className="about-small-text">
            Whether it's a productivity system, a
            developer tool or an experiment that started
            as a random idea at 2 AM — I enjoy the process
            of taking something from concept to a working
            product.
          </p>
        </div>
      </Reveal>

      <Reveal
        className="experience-section"
        delay={0.05}
        y={40}
      >
        <div className="experience-heading">
          <div className="experience-heading-left">
            <span>02</span>
            <strong>EXPERIENCE</strong>
          </div>

          <span>PROFESSIONAL / 2026</span>
        </div>

        <article className="experience-card">
          <div className="experience-role">
            <h3>
              Software Engineer
              <br />
              Intern
            </h3>

            <div className="experience-company">
              <strong>Edutainer</strong>

              <span>
                JAN 2026 — MAY 2026
              </span>
            </div>
          </div>

          <div className="experience-content">
            <p className="experience-summary">
              Worked across the full stack to build,
              deploy and maintain production-ready
              product features.
            </p>

            <ul>
              <li>
                Built and shipped full-stack product
                features across the <strong>MERN</strong>{" "}
                stack, developing reusable React
                interfaces and RESTful backend services.
              </li>

              <li>
                Implemented <strong>JWT authentication</strong>{" "}
                and Context API-based state management,
                while optimizing MongoDB schemas and
                backend queries for better performance.
              </li>

              <li>
                Deployed and maintained production
                applications on <strong>Render</strong>,
                troubleshooting live issues and improving
                overall application stability.
              </li>
            </ul>
          </div>
        </article>
      </Reveal>

      <Reveal
        className="tech-stack-section"
        delay={0.05}
        y={40}
      >
        <div className="tech-stack-heading">
          <div>
            <span className="tech-stack-number">
              03
            </span>

            <h3>Tech Stack</h3>
          </div>

          <span className="tech-stack-hint">
            ( SELECT TAB TO FILTER )
          </span>
        </div>

        <div className="tech-stack-panel">
          <div className="tech-tabs">
            {categories.map((category) => {
              const isActive =
                activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  className={`tech-tab ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(category.name)
                  }
                >
                  <span className="tech-tab-icon">
                    {category.icon}
                  </span>

                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          <div className="tech-list">
            {filteredTechnologies.map(
              (technology) => (
                <div
                  className="tech-pill"
                  key={technology.name}
                >
                  <span
                    className={`tech-icon ${
                      technology.accent ?? ""
                    }`}
                  >
                    {technology.icon}
                  </span>

                  <span className="tech-name">
                    {technology.name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </Reveal>

      <Reveal
        className="currently-section"
        delay={0.05}
        y={35}
      >
        <div className="currently-heading">
          <span>04</span>
          <span>CURRENTLY</span>
        </div>

        <div className="currently-grid">
          {currently.map((item, index) => (
            <Reveal
              key={item.label}
              className="currently-item"
              delay={index * 0.08}
              y={20}
            >
              <span>{item.label}</span>

              <strong>{item.value}</strong>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal className="about-footer" delay={0.05}>
        <span>THEJAS / ABOUT</span>

        <span>KEEP BUILDING.</span>

        <span>03 / 04</span>
      </Reveal>
    </section>
  );
}