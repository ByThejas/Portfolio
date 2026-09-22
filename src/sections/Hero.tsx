import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import "../styles/character-hero.css";

const characters = [
  {
    number: "01",
    name: "NARUTO UZUMAKI",
    shortName: "NARUTO",
    role: "SHINOBI / NEVER GIVE UP",
    image: "/characters/naruto.png",
    quote:
      "Hard work is worthless for those that don't believe in themselves.",
  },
  {
    number: "02",
    name: "TONY STARK",
    shortName: "TONY STARK",
    role: "INVENTOR / BUILDER",
    image: "/characters/tony-stark.png",
    quote:
      "Genius, billionaire, playboy, philanthropist.",
  },
  {
    number: "03",
    name: "ITACHI UCHIHA",
    shortName: "ITACHI",
    role: "SHINOBI / SELF-AWARENESS",
    image: "/characters/itachi.png",
    quote:
      "Growth occurs when one goes beyond one's limits.",
  },
  {
    number: "04",
    name: "LEVI ACKERMAN",
    shortName: "LEVI",
    role: "SOLDIER / DISCIPLINE",
    image: "/characters/levi.png",
    quote:
      "Give up on your dreams and die.",
  },
];

const terminalLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "thejas" },
  { prompt: true, text: "location" },
  { prompt: false, text: "bengaluru, india" },
  { prompt: true, text: "focus" },
  {
    prompt: false,
    text: "software / products / growth",
  },
  { prompt: true, text: "status" },
  { prompt: false, text: "building..." },
];

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  const topbarClicks = useRef(0);

  const topbarTimer = useRef<number | null>(null);

  const [characterIndex, setCharacterIndex] =
    useState(0);

  const [terminalOpen, setTerminalOpen] =
    useState(false);

  const [cursorVisible, setCursorVisible] =
    useState(true);

  const [cardOffset, setCardOffset] = useState({
    x: 0,
    y: 0,
  });

  const [cursor, setCursor] = useState({
    x: -100,
    y: -100,
    label: "",
    visible: false,
  });

  const character =
    characters[characterIndex];

  /* =========================================================
     BLINKING CURSOR
  ========================================================= */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCursorVisible((value) => !value);
    }, 500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /* =========================================================
     CHARACTER AUTO ROTATION
  ========================================================= */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCharacterIndex((current) => {
        return (
          (current + 1) %
          characters.length
        );
      });
    }, 7000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /* =========================================================
     KEYBOARD
  ========================================================= */

  useEffect(() => {
    const handleKeyboard = (
      event: KeyboardEvent
    ) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();

        setTerminalOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setTerminalOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, []);

  /* =========================================================
     CUSTOM CURSOR
  ========================================================= */

  useEffect(() => {
    const handleMouseMove = (
      event: MouseEvent
    ) => {
      setCursor((current) => ({
        ...current,
        x: event.clientX,
        y: event.clientY,
        visible: true,
      }));

      if (!visualRef.current) {
        return;
      }

      const rect =
        visualRef.current.getBoundingClientRect();

      const relativeX =
        event.clientX - rect.left;

      const relativeY =
        event.clientY - rect.top;

      const centerX = rect.width / 2;

      const centerY = rect.height / 2;

      const moveX =
        (relativeX - centerX) / 45;

      const moveY =
        (relativeY - centerY) / 45;

      setCardOffset({
        x: Math.max(
          -12,
          Math.min(12, moveX)
        ),
        y: Math.max(
          -12,
          Math.min(12, moveY)
        ),
      });
    };

    const handleMouseOut = (
      event: MouseEvent
    ) => {
      const target =
        event.target as HTMLElement;

      const interactive =
        target.closest(
          "a, button, .interactive-identity"
        );

      if (!interactive) {
        return;
      }

      setCursor((current) => ({
        ...current,
        label: "",
      }));
    };

    const handleMouseOver = (
      event: MouseEvent
    ) => {
      const target =
        event.target as HTMLElement;

      const interactive =
        target.closest(
          "a, button, .interactive-identity"
        );

      if (!interactive) {
        setCursor((current) => ({
          ...current,
          label: "",
        }));

        return;
      }

      const cursorLabel =
        interactive.getAttribute(
          "data-cursor"
        ) || "VIEW";

      setCursor((current) => ({
        ...current,
        label: cursorLabel,
        visible: true,
      }));
    };

    const handleMouseLeave = () => {
      setCursor((current) => ({
        ...current,
        visible: false,
      }));
    };

    const handleMouseEnter = (
      event: MouseEvent
    ) => {
      setCursor((current) => ({
        ...current,
        x: event.clientX,
        y: event.clientY,
        visible: true,
      }));
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseover",
      handleMouseOver
    );

    window.addEventListener(
      "mouseout",
      handleMouseOut
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      window.removeEventListener(
        "mouseout",
        handleMouseOut
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, []);

  /* =========================================================
     CHARACTER CARD
  ========================================================= */

  const cycleCharacter = () => {
    setCharacterIndex((current) => {
      return (
        (current + 1) %
        characters.length
      );
    });
  };

  /* =========================================================
     SECRET TERMINAL
  ========================================================= */

  const handleTopbarClick = () => {
    topbarClicks.current += 1;

    if (topbarTimer.current) {
      window.clearTimeout(
        topbarTimer.current
      );
    }

    topbarTimer.current =
      window.setTimeout(() => {
        topbarClicks.current = 0;
      }, 1000);

    if (topbarClicks.current >= 3) {
      setTerminalOpen(true);
      topbarClicks.current = 0;
    }
  };

  return (
    <>
      {/* =====================================================
          CUSTOM CURSOR
      ===================================================== */}

      <div
        className={`custom-cursor ${
          cursor.visible
            ? "cursor-visible"
            : ""
        } ${
          cursor.label
            ? "cursor-expanded"
            : ""
        }`}
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      >
        {cursor.label && (
          <span className="cursor-label">
            {cursor.label}
          </span>
        )}
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-section">
        <div
          className="hero-grid"
          aria-hidden="true"
        />

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <header className="hero-nav">
          <a
            href="/"
            className="brand"
            data-cursor="HOME"
          >
            <span className="brand-mark">
              &lt;/&gt;
            </span>

            <span>THEJAS</span>
          </a>

          <nav className="nav-links">
            <a
              href="#work"
              data-cursor="WORK"
            >
              WORK
            </a>

            <a
              href="#about"
              data-cursor="ABOUT"
            >
              ABOUT
            </a>
          </nav>

          <a
            href="#contact"
            className="nav-contact"
            data-cursor="CONTACT"
          >
            CONTACT ME
            <span>↗</span>
          </a>
        </header>

        {/* ===================================================
            MAIN
        =================================================== */}

        <div className="hero-main">
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="hero-copy">
            <motion.div
              className="hero-label"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <span className="hero-number">
                01
              </span>

              <span className="hero-label-text">
                INTRODUCTION
              </span>
            </motion.div>

            <motion.div
              className="hero-heading"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >
              <p className="hello-text">
                HEY, I'M
              </p>

              <h1>
                THEJAS<span>.</span>
              </h1>

              <p className="role-text">
                SOFTWARE ENGINEER
              </p>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
            >
              I build digital products and
              software
              <br className="desktop-break" />
              with an eye for detail.
            </motion.p>

            {/* ACTIONS */}

            <motion.div
              className="hero-actions"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
            >
              <a
                href="#work"
                className="primary-button"
                data-cursor="WORK"
              >
                <span>
                  VIEW MY WORK
                </span>

                <span>↗</span>
              </a>

              <a
                href="#about"
                className="secondary-button"
                data-cursor="ABOUT"
              >
                <span>ABOUT ME</span>

                <span>↓</span>
              </a>
            </motion.div>

            {/* SOCIALS */}

            <motion.div
              className="social-section"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
            >
              <span className="social-label">
                CONNECT WITH ME
              </span>

              <div className="social-links">
                {/* GITHUB */}

                <a
                  href="https://github.com/ByThejas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  data-cursor="GITHUB"
                >
                  <span className="social-logo github-logo">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.87 10.94.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                      />
                    </svg>
                  </span>

                  <span className="social-name">
                    GITHUB
                  </span>

                  <span className="social-arrow">
                    ↗
                  </span>
                </a>

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/thejasumesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  data-cursor="LINKEDIN"
                >
                  <span className="social-logo linkedin-logo">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="3"
                        fill="currentColor"
                      />

                      <path
                        fill="white"
                        d="M6.2 8.3H3.7V20h2.5V8.3ZM5 4.2C4.2 4.2 3.6 4.8 3.6 5.6S4.2 7 5 7s1.4-.6 1.4-1.4S5.8 4.2 5 4.2ZM20.3 13.3c0-3.5-1.9-5.2-4.5-5.2-2.1 0-3 1.2-3.5 2v-1.8H9.8V20h2.5v-5.8c0-1.5.3-3 2.2-3 1.8 0 1.8 1.7 1.8 3.1V20h2.5v-6.7Z"
                      />
                    </svg>
                  </span>

                  <span className="social-name">
                    LINKEDIN
                  </span>

                  <span className="social-arrow">
                    ↗
                  </span>
                </a>

                {/* X */}

                <a
                  href="https://x.com/ByThejas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  data-cursor="X"
                >
                  <span className="social-logo x-logo">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                      />
                    </svg>
                  </span>

                  <span className="social-name">
                    X
                  </span>

                  <span className="social-arrow">
                    ↗
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            ref={visualRef}
            className="hero-visual"
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            {/* TOP BAR */}

            <button
              className="visual-topbar"
              onClick={handleTopbarClick}
              data-cursor="THEJAS.OS"
              aria-label="Open THEJAS OS"
            >
              <span>
                THEJAS / 001
              </span>

              {/* CTRL + K IS NOW INSIDE THE TOP BAR */}
              <div className="os-hint">
                <span>CTRL</span>
                <span>+</span>
                <span>K</span>
                <small>OPEN OS</small>
              </div>

              <span>2026</span>
            </button>

            {/* CHARACTER CARD */}

            <button
              className="interactive-identity character-card"
              onClick={cycleCharacter}
              data-cursor="CHANGE"
              aria-label={`Change character. Current: ${character.name}`}
            >
              <div
                className="identity-lime-frame"
                style={{
                  transform: `translate(${cardOffset.x}px, ${cardOffset.y}px)`,
                }}
              />

              <div
                className="portrait-placeholder character-portrait"
                style={{
                  transform: `translate(${
                    cardOffset.x * 0.55
                  }px, ${
                    cardOffset.y * 0.55
                  }px)`,
                }}
              >
                {/* CHARACTER IMAGE */}

                <div className="character-image-wrap">
                  <motion.img
                    key={character.image}
                    src={character.image}
                    alt={character.name}
                    className="character-image"
                    draggable="false"
                    initial={{
                      opacity: 0,
                      scale: 1.06,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                  />
                </div>

                {/* BLACK TINT */}

                <div className="character-overlay" />

                {/* CHARACTER CONTENT */}

                <div className="portrait-content">
                  <div className="character-top">
                    <span className="portrait-small">
                      THEJAS / MOTIVATION
                    </span>

                    <span className="character-number">
                      {character.number}
                    </span>
                  </div>

                  {/* QUOTE */}

                  <motion.div
                    key={`${character.number}-quote`}
                    className="character-quote"
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.1,
                    }}
                  >
                    <span className="quote-mark">
                      "
                    </span>

                    <p>
                      {character.quote}
                    </p>
                  </motion.div>

                  {/* CHARACTER META */}

                  <div className="identity-bottom character-meta">
                    <span>
                      {character.name}
                    </span>

                    <span>
                      {character.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* CHARACTER DOTS */}

              <div className="character-dots">
                {characters.map(
                  (item, index) => (
                    <span
                      key={item.number}
                      className={
                        index ===
                        characterIndex
                          ? "active"
                          : ""
                      }
                    />
                  )
                )}
              </div>
            </button>

            {/* VISUAL NOTES */}

            <div className="visual-note note-left">
              BUILDING USEFUL THINGS.
              <span />
            </div>

            {/* NOTE-RIGHT REMOVED */}

          </motion.div>
        </div>

        {/* ===================================================
            HERO FOOTER
        =================================================== */}

        <motion.footer
          className="hero-footer"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.75,
          }}
        >
          <div className="footer-block">
            <span className="footer-label">
              BASED IN
            </span>

            <span className="footer-value">
              BENGALURU, INDIA
            </span>
          </div>

          <div className="footer-block">
            <span className="footer-label">
              CURRENTLY
            </span>

            <span className="footer-value">
              <span className="status-dot" />
              BUILDING DIGITAL PRODUCTS
            </span>
          </div>

          <div className="footer-block footer-scroll">
            <span className="footer-label">
              SCROLL TO EXPLORE
            </span>

            <span className="scroll-arrow">
              ↓
            </span>
          </div>
        </motion.footer>
      </section>

      {/* =====================================================
          THEJAS.OS TERMINAL
      ===================================================== */}

      {terminalOpen && (
        <motion.div
          className="terminal-overlay"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <motion.div
            className="terminal-window"
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className="terminal-header">
              <span>
                THEJAS.OS
              </span>

              <div className="terminal-controls">
                <span />
                <span />

                <button
                  onClick={() =>
                    setTerminalOpen(false)
                  }
                  aria-label="Close terminal"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="terminal-body">
              <div className="terminal-intro">
                THEJAS OPERATING SYSTEM
                <br />
                VERSION 1.0.26
              </div>

              <div className="terminal-output">
                {terminalLines.map(
                  (line, index) => (
                    <div
                      className={`terminal-line ${
                        line.prompt
                          ? "terminal-prompt"
                          : "terminal-response"
                      }`}
                      key={`${line.text}-${index}`}
                    >
                      {line.prompt && (
                        <span className="terminal-symbol">
                          &gt;
                        </span>
                      )}

                      <span>
                        {line.text}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="terminal-bottom">
                <span>&gt;</span>

                <span className="terminal-blink">
                  {cursorVisible
                    ? "_"
                    : " "}
                </span>

                <span className="terminal-shortcut">
                  ESC TO EXIT
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}