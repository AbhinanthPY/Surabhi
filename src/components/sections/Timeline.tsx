import { milestones } from "../../data/content";
import { Eyebrow } from "../ui/Elements";
export default function Timeline({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  return (
    <section
      className={`timeline-section section-pad ${standalone ? "timeline-standalone" : ""}`}
    >
      <div className="timeline-intro">
        <Eyebrow>05 / Our journey</Eyebrow>
        <h2 data-reveal>
          A journey of
          <br />
          <em>collective ambition.</em>
        </h2>
        <p>
          Every shared future begins with a first step.
          <br />
          Ours is a story still being written.
        </p>
        <span className="timeline-caption">
          One registration milestone.
          <br />A horizon of possibilities.
        </span>
      </div>
      <div className="timeline">
        {milestones.map((m, i) => (
          <article className="timeline-item" key={m.label} data-reveal>
            <span
              className={`timeline-dot ${i === 0 ? "timeline-dot-solid" : ""}`}
            />
            <div className="timeline-label">
              <span>{m.label}</span>
              <span className="timeline-status">{m.status}</span>
            </div>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
