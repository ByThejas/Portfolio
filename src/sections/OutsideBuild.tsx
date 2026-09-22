import { Reveal } from "../components/Reveal";
import "./OutsideBuild.css";

const interests = [
  {
    number: "01",
    label: "MUSIC",
    title: "LOUD GUITARS.",
    description:
      "Metal, electric and rock. Apparently, silence was never an option.",
  },
  {
    number: "02",
    label: "CAFFEINE",
    title: "COFFEE FIRST.",
    description:
      "Runs on coffee, questionable sleep schedules and an unreasonable amount of caffeine.",
  },
  {
    number: "03",
    label: "MONSTER",
    title: "DEVELOPMENT FUEL.",
    description:
      "Monster isn't really a beverage at this point. It's part of the development environment.",
  },
  {
    number: "04",
    label: "LATE NIGHTS",
    title: "2 AM IDEAS.",
    description:
      "Most of my questionable ideas arrive after midnight. Some of them even make it into production.",
  },
  {
    number: "05",
    label: "HEADPHONES",
    title: "ONE MORE SONG.",
    description:
      "If I'm wearing headphones, there's probably a guitar solo involved. Interrupt at your own risk.",
  },
  {
    number: "06",
    label: "SIDE QUESTS",
    title: "CURIOUS BY DEFAULT.",
    description:
      "I collect hobbies like browser tabs — photography, fitness, music, random technical rabbit holes and things that seemed like a good idea at 2 AM.",
  },
];

export function OutsideBuild() {
  return (
    <section
      id="outside-build"
      className="outside-build-section"
    >
      <Reveal className="outside-build-header">
        <div className="outside-build-index">
          <span>04</span>
          <span>OUTSIDE THE BUILD</span>
        </div>

        <div className="outside-build-line" />

        <span className="outside-build-label">
          THE OTHER SIDE OF THE SCREEN
        </span>
      </Reveal>

      <Reveal
        className="outside-build-intro"
        delay={0.05}
      >
        <div>
          <span className="outside-build-kicker">
            MUSIC / CAFFEINE / SIDE QUESTS
          </span>

          <h2>
            WHEN I'M NOT
            <br />
            <span>BUILDING.</span>
          </h2>
        </div>

        <div className="outside-build-copy">
          <p>
            Software engineer by profession.
            <br />
            Professional overthinker by hobby.
          </p>

          <span>
            A few things that exist outside the
            terminal.
          </span>
        </div>
      </Reveal>

      <div className="outside-build-grid">
        {interests.map((item, index) => (
          <Reveal
            key={item.number}
            className="outside-interest"
            delay={0.04 + index * 0.07}
            y={35}
          >
            <div className="outside-interest-top">
              <span>{item.number}</span>
              <span>{item.label}</span>
            </div>

            <div className="outside-interest-body">
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>

            <div className="outside-interest-mark">
              +
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal
        className="outside-build-bottom"
        delay={0.08}
      >
        <span>
          CURRENT STATUS:
          <strong> PROBABLY LISTENING TO MUSIC.</strong>
        </span>

        <span>04 / 06</span>
      </Reveal>
    </section>
  );
}