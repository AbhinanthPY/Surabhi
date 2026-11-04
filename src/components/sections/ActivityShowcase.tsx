import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { activities } from "../../data/content";
import { Eyebrow, Photo } from "../ui/Elements";
import { RevealHeading } from "../ui/RevealHeading";

export default function ActivityShowcase() {
  const [active, setActive] = useState(0);
  const activity = activities[active];
  return (
    <section
      className="activities-section section-pad activity-editorial"
      aria-labelledby="activities-heading"
    >
      <div className="section-heading">
        <div>
          <Eyebrow>02 / What we do</Eyebrow>
          <RevealHeading
            id="activities-heading"
            lines={[
              { text: "Different fields." },
              { text: "One shared future.", emphasis: true },
            ]}
          />
        </div>
        <div className="section-heading-aside">
          <span className="field-count">
            06{" "}
            <span>
              connected areas
              <br />
              of shared ambition
            </span>
          </span>
          <p>Choose a field. Explore the wider perspective.</p>
        </div>
      </div>
      <div className="activity-showcase">
        <div className="activity-visual">
          <div className="activity-visual-inner">
            <div className="activity-selected-image" key={activity.id}>
              <Photo
                src={activity.image}
                alt={activity.alt}
                position={activity.imagePosition}
                sizes="(min-width: 900px) 48vw, 100vw"
              />
            </div>
            <div className="activity-visual-overlay">
              <span>Our areas of focus</span>
              <span className="activity-big-number">
                {activity.number}
                <span>/ 06</span>
              </span>
              <p>{activity.summary}</p>
            </div>
            <div className="activity-image-label">
              <span>{activity.shortTitle}</span>
              <span className="activity-steps" aria-hidden="true">
                {activities.map((a, i) => (
                  <span
                    key={a.id}
                    className={i === active ? "is-active" : ""}
                  />
                ))}
              </span>
            </div>
          </div>
        </div>
        <div className="activity-list">
          {activities.map((a, i) => (
            <article
              key={a.id}
              className={`activity-item ${active === i ? "is-active" : ""}`}
            >
              <h3>
                <button
                  id={`activity-trigger-${a.id}`}
                  className="activity-trigger"
                  onClick={() => setActive(i)}
                  aria-expanded={active === i}
                  aria-controls={`activity-body-${a.id}`}
                >
                  <span className="activity-index">{a.number}</span>
                  <span className="activity-title">{a.title}</span>
                  <span className="activity-toggle" aria-hidden="true">
                    {active === i ? <Minus size={17} /> : <Plus size={17} />}
                  </span>
                </button>
              </h3>
              <div
                id={`activity-body-${a.id}`}
                className="activity-body"
                hidden={active !== i}
                role="region"
                aria-labelledby={`activity-trigger-${a.id}`}
              >
                <Photo
                  src={a.image}
                  alt={a.alt}
                  position={a.imagePosition}
                  className="activity-mobile-image"
                  sizes="(max-width:899px) 90vw, 1px"
                />
                <p>{a.summary}</p>
                <Link to={`/activities/${a.id}`} className="text-link">
                  Discover this field{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
          <p className="activity-note">
            These are organizational objectives. Individual services and
            operational status are subject to confirmation.
          </p>
          <Link className="text-link" to="/activities">
            Explore all our activities{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
