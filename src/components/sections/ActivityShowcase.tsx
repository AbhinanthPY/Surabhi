import { useEffect, useRef, useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { activities } from "../../data/content";
import { Eyebrow, Photo } from "../ui/Elements";

export default function ActivityShowcase() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!window.matchMedia("(min-width: 900px)").matches) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(
              Number((entry.target as HTMLElement).dataset.activityIndex),
            );
        });
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: 0 },
    );
    root.current
      ?.querySelectorAll("[data-activity-index]")
      .forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return (
    <section className="activities-section section-pad" ref={root}>
      <div className="section-heading">
        <div>
          <Eyebrow>02 / What we do</Eyebrow>
          <h2 data-reveal>
            Different fields.
            <br />
            <em>One shared future.</em>
          </h2>
        </div>
        <p className="section-heading-aside" data-reveal>
          Connected by purpose.
          <br />
          Working towards possibilities
          <br />
          across the rural landscape.
        </p>
      </div>
      <div className="activity-showcase">
        <div className="activity-visual">
          <div className="activity-visual-inner">
            {activities.map((a, i) => (
              <div
                key={a.id}
                className={`activity-slide ${i === active ? "is-active" : ""}`}
                aria-hidden={i !== active}
              >
                <Photo src={a.image} alt={a.alt} />
              </div>
            ))}
            <div className="activity-visual-overlay">
              <span>Our areas of focus</span>
              <span className="activity-big-number">
                0{active + 1}
                <span>/ 06</span>
              </span>
              <p>{activities[active].summary}</p>
            </div>
            <div className="activity-image-label">
              A connected approach to development <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
        <div className="activity-list">
          {activities.map((a, i) => (
            <article
              key={a.id}
              className={`activity-item ${active === i ? "is-active" : ""}`}
              data-activity-index={i}
            >
              <h3>
                <button
                  className="activity-trigger"
                  onClick={() => setActive(i)}
                  aria-expanded={active === i}
                  aria-controls={`activity-body-${a.id}`}
                >
                  <span className="activity-index">{a.number}</span>
                  <span className="activity-title">{a.title}</span>
                  <span className="activity-toggle">
                    {active === i ? <Minus size={17} /> : <Plus size={17} />}
                  </span>
                </button>
              </h3>
              <div
                id={`activity-body-${a.id}`}
                className="activity-body"
                hidden={active !== i}
              >
                <Photo
                  src={a.image}
                  alt={a.alt}
                  className="activity-mobile-image"
                />
                <p>{a.summary}</p>
                <Link to={`/activities/${a.id}`} className="text-link">
                  Discover this field <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
          <p className="activity-note">
            These are organizational objectives. Individual services and
            operational status are subject to confirmation.
          </p>
          <Link className="text-link" to="/activities">
            Explore all our activities <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
