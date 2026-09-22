import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import "./Contact.css";

const email = "thejasnox12@gmail.com";

function openEmail() {
  window.location.href =
    `mailto:${email}?subject=Hello%20Thejas`;
}

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <div className="contact-index">
          <span>06</span>
          <span>CONTACT</span>
        </div>

        <div className="contact-header-line" />

        <span className="contact-header-label">
          OPEN TO GOOD IDEAS
        </span>
      </div>

      <div className="contact-main">
        <div className="contact-heading">
          <span className="contact-kicker">
            HAVE SOMETHING IN MIND?
          </span>

          <h2>
            LET'S
            <br />
            <span>BUILD IT.</span>
          </h2>
        </div>

        <div className="contact-side">
          <p>
            Whether it's a product, a collaboration or
            just an interesting idea, I'd love to hear
            about it.
          </p>

          <div className="contact-availability">
            <span className="contact-dot" />

            <div>
              <span>STATUS</span>
              <strong>OPEN TO OPPORTUNITIES</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-email-block">
        <span className="contact-email-label">
          DROP ME A LINE
        </span>

        <div className="contact-email-row">
          <a
            href={`mailto:${email}`}
            className="contact-email"
          >
            {email}
          </a>

          <button
            type="button"
            className="contact-copy"
            onClick={openEmail}
            aria-label="Open default email application"
          >
            <Mail size={18} />
            EMAIL ME
          </button>
        </div>
      </div>

      <div className="contact-social-section">
        <div className="contact-social-heading">
          <span>ELSEWHERE</span>
          <span>01 — 03</span>
        </div>

        <div className="contact-social-links">
          <a
            href="https://github.com/ByThejas"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-button"
          >
            <div className="contact-social-icon">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.87 10.94.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>
            </div>

            <span>GITHUB</span>
            <strong>@BYTHEJAS</strong>

            <ArrowUpRight size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/thejasumesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-button"
          >
            <div className="contact-social-icon linkedin-icon">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm6.5 0h3.83v2.05h.05c.53-1.01 1.84-2.48 3.79-2.48 4.05 0 4.8 2.67 4.8 6.15V23h-4v-8.23c0-1.96-.04-4.48-2.73-4.48-2.73 0-3.15 2.13-3.15 4.34V23H7V8Z"
                />
              </svg>
            </div>

            <span>LINKEDIN</span>
            <strong>/THEJASUMESH</strong>

            <ArrowUpRight size={16} />
          </a>

          <a
            href="https://x.com/ByThejas"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-button"
          >
            <div className="contact-social-icon contact-x">
              X
            </div>

            <span>X</span>
            <strong>@BYTHEJAS</strong>

            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="contact-bottom-left">
          <span className="contact-big-mark">
            T
          </span>

          <div>
            <span>THEJAS.OS</span>
            <small>READY WHEN YOU ARE.</small>
          </div>
        </div>

        <div className="contact-bottom-right">
          <span>BASED IN</span>
          <strong>BENGALURU, INDIA</strong>
        </div>
      </div>

      <div className="contact-footer">
        <span>THEJAS / CONTACT</span>

        <div className="contact-footer-mark">
          <span />
          <span />
          <span />
        </div>

        <span>06 / 06</span>
      </div>
    </section>
  );
}