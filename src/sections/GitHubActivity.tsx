import { GitHubCalendar } from "react-github-calendar";
import "./GitHubActivity.css";

export function GitHubActivity() {
  return (
    <section id="github" className="github-section">
      <div className="github-top">
        <div className="github-index">
          <span>04</span>
          <span>GITHUB ACTIVITY</span>
        </div>

        <div className="github-top-line" />

        <div className="github-status">
          <span className="github-status-dot" />
          <span>OPEN SOURCE / ACTIVE</span>
        </div>
      </div>

      <div className="github-intro">
        <div className="github-heading">
          <span className="github-kicker">
            CODE / CONSISTENCY / CONTRIBUTIONS
          </span>

          <h2>
            GITHUB
            <br />
            <span>ACTIVITY.</span>
          </h2>
        </div>

        <div className="github-intro-side">
          <p>
            A visual record of what I've been
            <br />
            building, experimenting with and
            <br />
            shipping over time.
          </p>

          <a
            href="https://github.com/ByThejas"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-button"
          >
            <span>@BYTHEJAS</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="github-meta-grid">
        <div className="github-meta-card">
          <span>01</span>
          <strong>CONTRIBUTIONS</strong>
          <small>LAST YEAR</small>
        </div>

        <div className="github-meta-card">
          <span>02</span>
          <strong>CODEBASE</strong>
          <small>BUILD / SHIP / REPEAT</small>
        </div>

        <div className="github-meta-card github-meta-card-accent">
          <span>03</span>
          <strong>STATUS</strong>
          <small>
            <i />
            CURRENTLY BUILDING
          </small>
        </div>
      </div>

      <div className="github-calendar-panel">
        <div className="github-panel-header">
          <div>
            <span className="github-panel-number">
              01 / ACTIVITY GRAPH
            </span>

            <h3>CONTRIBUTION HISTORY</h3>
          </div>

          <span className="github-panel-year">
            2026
          </span>
        </div>

        <div className="github-panel-line" />

        <div className="github-calendar-wrap">
          <GitHubCalendar
            username="ByThejas"
            colorScheme="dark"
            blockSize={13}
            blockMargin={4}
            blockRadius={2}
            fontSize={11}
            showMonthLabels
            showWeekdayLabels={false}
            showTotalCount
            showColorLegend
            theme={{
              dark: [
                "#161616",
                "#304018",
                "#587329",
                "#8cae3e",
                "#c9f052",
              ],
              light: [
                "#e7e5de",
                "#c7d69a",
                "#a8bf69",
                "#83a23e",
                "#c9f052",
              ],
            }}
            labels={{
              totalCount:
                "{{count}} contributions in the last year",
            }}
            errorMessage="Unable to load GitHub activity."
          />
        </div>

        <div className="github-panel-bottom">
          <span>
            LESS TALK.
            <br />
            MORE BUILD.
          </span>

          <span>github.com/ByThejas ↗</span>
        </div>
      </div>

      <div className="github-footer">
        <span>THEJAS / GITHUB</span>

        <div className="github-footer-mark">
          <span />
          <span />
          <span />
        </div>

        <span>04 / 05</span>
      </div>
    </section>
  );
}