import { useEffect, useState } from "react";
import { Reveal } from "../components/Reveal";
import "./Footer.css";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Intl.DateTimeFormat(
        "en-IN",
        {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }
      ).format(new Date());

      setTime(formatted);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="site-footer">
      <Reveal className="footer-top">
        <div className="footer-index">
          <span>05</span>
          <span>END OF PAGE</span>
        </div>

        <div className="footer-line" />

        <span className="footer-system">
          THEJAS.OS / 2026
        </span>
      </Reveal>

      <Reveal className="footer-main" delay={0.05}>
        <div className="footer-statement">
          <span>THANKS FOR</span>

          <h2>
            STOPPING
            <br />
            <span>BY.</span>
          </h2>
        </div>

        <div className="footer-side">
          <span className="footer-label">
            DESIGNED / DEVELOPED / SHIPPED
          </span>

          <p>
            Built with curiosity,
            <br />
            caffeine and a lot of
            <br />
            unnecessary attention to detail.
          </p>

          <div className="footer-status">
            <span className="footer-status-dot" />
            <span>ALL SYSTEMS ONLINE</span>
          </div>
        </div>
      </Reveal>

      <div className="footer-grid">
        <Reveal
          className="footer-cell footer-credit"
          delay={0.04}
          y={25}
        >
          <span>DESIGNED &amp; DEVELOPED BY</span>
          <strong>THEJAS</strong>
        </Reveal>

        <Reveal
          className="footer-cell footer-location"
          delay={0.12}
          y={25}
        >
          <span>LOCATION</span>
          <strong>BENGALURU, INDIA</strong>
        </Reveal>

        <Reveal
          className="footer-cell footer-clock"
          delay={0.2}
          y={25}
        >
          <span>LOCAL TIME</span>
          <strong>{time}</strong>
        </Reveal>

        <Reveal
          className="footer-cell footer-links"
          delay={0.28}
          y={25}
        >
          <span>ELSEWHERE</span>

          <div>
            <a
              href="https://github.com/ByThejas"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/thejasumesh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN ↗
            </a>

            <a
              href="https://x.com/ByThejas"
              target="_blank"
              rel="noopener noreferrer"
            >
              X ↗
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal className="footer-bottom" delay={0.08}>
        <span>© 2026 THEJAS</span>

        <div className="footer-mark">
          <span />
          <span />
          <span />
        </div>

        <span>KEEP BUILDING.</span>
      </Reveal>
    </footer>
  );
}