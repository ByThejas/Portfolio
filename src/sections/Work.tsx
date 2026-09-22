import { Reveal } from "../components/Reveal";
import "./Work.css";

const projects = [
  {
    number: "01",
    title: "PRODUCTIVITY-116",
    year: "2026",
    category: "PRODUCTIVITY SYSTEM",
    description:
      "A personal productivity journey tracker built around goals, daily commitments, focus, planning and visual progress.",
    tags: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "LocalStorage",
    ],
    image: "/projects/productivity-116-preview.png",
    liveUrl: "https://productivity-116.vercel.app/",
    githubUrl: "https://github.com/ByThejas/Productivity-116",
  },
  {
    number: "02",
    title: "KAIZEN",
    year: "2026",
    category: "DEVELOPER PRODUCTIVITY",
    description:
      "A browser-based toolkit that brings PDF, document, image and everyday file workflows together into one consistent interface.",
    tags: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
    ],
    image: "/projects/kaizen-preview.png",
    liveUrl: "https://kaizen-online.vercel.app/",
    githubUrl: "https://github.com/sumeethofficial-svg/KAIZEN",
  },
];

export function Work() {
  return (
    <section id="work" className="work-section">
      <Reveal className="work-header">
        <div className="work-index">
          <span>02</span>
          <span>SELECTED WORK</span>
        </div>

        <div className="work-header-line" />

        <span className="work-count">02 PROJECTS</span>
      </Reveal>

      <Reveal className="work-intro" delay={0.05}>
        <div>
          <h2>
            SELECTED
            <br />
            <span>PROJECTS.</span>
          </h2>
        </div>

        <div className="work-intro-meta">
          <span>BUILT / DESIGNED / SHIPPED</span>

          <p>
            A collection of software projects,
            experiments
            <br />
            and systems I've built along the way.
          </p>
        </div>
      </Reveal>

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            className="project-card"
            delay={0.08 + index * 0.12}
            y={45}
          >
            <div className="project-preview">
              <div className="preview-background" />

              <div className="preview-meta">
                <span className="live-badge">
                  <span className="live-dot" />
                  LIVE
                </span>

                <span className="featured-badge">
                  FEATURED
                </span>
              </div>

              <div className="browser-window">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="browser-address">
                    {project.title === "PRODUCTIVITY-116"
                      ? "productivity-116.vercel.app"
                      : "kaizen-online.vercel.app"}
                  </div>

                  <span className="browser-menu">
                    •••
                  </span>
                </div>

                <div className="browser-screen">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                  />
                </div>
              </div>

              <span className="preview-mark preview-mark-top">
                +
              </span>

              <span className="preview-mark preview-mark-bottom">
                +
              </span>
            </div>

            <div className="project-info">
              <div className="project-title-row">
                <div>
                  <div className="project-number">
                    {project.number}
                  </div>

                  <h3>{project.title}</h3>
                </div>

                <span className="project-year">
                  {project.year}
                </span>
              </div>

              <div className="project-category">
                {project.category}
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="engineering-details">
                <span>LIVE PROJECT</span>
                <span>↗</span>
              </div>

              <div className="project-bottom">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live project`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18" />
                      <path d="M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21" />
                      <path d="M12 3c-2.4 2.4-3.6 5.4-3.6 9S9.6 18.6 12 21" />
                    </svg>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.87 10.94.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="work-footer" delay={0.1}>
        <span>02 / 02</span>

        <span>
          MORE PROJECTS
          <span className="coming">COMING SOON</span>
        </span>

        <span>↓ SCROLL</span>
      </Reveal>
    </section>
  );
}