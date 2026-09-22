import { useState } from "react";
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
  {
    name: "All",
    icon: "▱",
  },
  {
    name: "Languages",
    icon: "</>",
  },
  {
    name: "Frontend",
    icon: "▣",
  },
  {
    name: "Backend",
    icon: "▤",
  },
  {
    name: "Databases",
    icon: "◉",
  },
  {
    name: "DevOps & Tools",
    icon: "›_",
  },
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
          (tech) => tech.category === activeCategory
        );

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <div className="about-index">
          <span>03</span>
          <span>ABOUT ME</span>
        </div>

        <div className="about-header-line" />

        <span className="about-header-label">
          SOFTWARE ENGINEER
        </span>
      </div>

      <div className="about-intro">
        <h2>
          I BUILD
          <br />
          <span>THINGS.</span>
        </h2>

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
      </div>

      <div className="about-grid">
        <div className="identity-card">
          <div className="identity-top">
            <span>THEJAS.OS</span>

            <span className="identity-status">
              <span />
              ONLINE
            </span>
          </div>

          <div className="identity-center">
            <div className="identity-symbol">
              T
            </div>

            <div className="identity-name">
              THEJAS
            </div>

            <div className="identity-role">
              SOFTWARE ENGINEER
            </div>
          </div>

          <div className="identity-bottom">
            <span>BUILD / SHIP / REPEAT</span>

            <span>v.2026</span>
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
      </div>

      <div className="tech-stack-section">
        <div className="tech-stack-heading">
          <div>
            <span className="tech-stack-number">02</span>

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
                    className={`tech-icon ${technology.accent}`}
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
      </div>

      <div className="currently-section">
        <div className="currently-heading">
          <span>03</span>
          <span>CURRENTLY</span>
        </div>

        <div className="currently-grid">
          {currently.map((item) => (
            <div
              className="currently-item"
              key={item.label}
            >
              <span>{item.label}</span>

              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="about-footer">
        <span>THEJAS / ABOUT</span>

        <span>KEEP BUILDING.</span>

        <span>03 / 03</span>
      </div>
    </section>
  );
}