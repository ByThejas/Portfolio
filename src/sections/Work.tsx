import "./Work.css";

const projects = [
  {
    number: "01",
    title: "NADI",
    year: "2026",
    category: "NETWORK ANALYZER",
    description:
      "A smart network analysis tool designed to visualize network environments, inspect connectivity and surface network dead zones.",
    tags: ["JavaScript", "HTML", "CSS"],
    image:
      "/projects/smart-network-mapper-preview.png",
    liveUrl:
      "https://smart-network-mapper.vercel.app/",
    githubUrl:
      "https://github.com/ByThejas/Smart-Network-Mapper",
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
    liveUrl:
      "https://kaizen-online.vercel.app/",
    githubUrl:
      "https://github.com/sumeethofficial-svg/KAIZEN",
  },

  {
    number: "03",
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
    image:
      "/projects/productivity-116-preview.png",
    liveUrl:
      "https://productivity-116.vercel.app/",
    githubUrl:
      "https://github.com/ByThejas/Productivity-116",
  },
];

export function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-header">
        <div className="work-index">
          <span>02</span>
          <span>SELECTED WORK</span>
        </div>

        <div className="work-header-line" />

        <span className="work-count">
          03 PROJECTS
        </span>
      </div>

      <div className="work-intro">
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
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
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
                    {project.title === "NADI"
                      ? "smart-network-mapper.vercel.app"
                      : project.title === "KAIZEN"
                        ? "kaizen-online.vercel.app"
                        : "productivity-116.vercel.app"}
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
                    <span key={tag}>
                      {tag}
                    </span>
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
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                      />

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
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22 0 0-1.01-.32 3.3 1.23a11.48 11.48 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.22.69.83.57C20.56 21.79 24 17.31 24 12 24 5.37 18.63 0 12 0Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="work-footer">
        <span>03 / 03</span>

        <span>
          MORE PROJECTS
          <span className="coming">
            COMING SOON
          </span>
        </span>

        <span>↓ SCROLL</span>
      </div>
    </section>
  );
}