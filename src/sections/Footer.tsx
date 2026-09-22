import { useEffect, useState } from "react";
import "./Footer.css";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

      setTime(formatted);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-index">
          <span>05</span>
          <span>END OF PAGE</span>
        </div>

        <div className="footer-line" />

        <span className="footer-system">
          THEJAS.OS / 2026
        </span>
      </div>

      <div className="footer-main">
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
      </div>

      <div className="footer-grid">
        <div className="footer-cell footer-credit">
          <span>DESIGNED &amp; DEVELOPED BY</span>
          <strong>THEJAS</strong>
        </div>

        <div className="footer-cell footer-location">
          <span>LOCATION</span>
          <strong>BENGALURU, INDIA</strong>
        </div>

        <div className="footer-cell footer-clock">
          <span>LOCAL TIME</span>
          <strong>{time}</strong>
        </div>

        <div className="footer-cell footer-links">
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
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 THEJAS</span>

        <div className="footer-mark">
          <span />
          <span />
          <span />
        </div>

        <span>KEEP BUILDING.</span>
      </div>
    </footer>
  );
}