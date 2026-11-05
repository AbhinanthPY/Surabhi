import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { activities } from "../../data/content";
import { Eyebrow, Photo } from "../ui/Elements";
import { RevealHeading } from "../ui/RevealHeading";

gsap.registerPlugin(ScrollTrigger);

export default function ActivityShowcase() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const scroll = useRef<ScrollTrigger | null>(null);
  const activity = activities[active];

  useLayoutEffect(() => {
    const section = root.current;
    const panel = stage.current;
    if (!section || !panel) return;
    const media = gsap.matchMedia();
    // Short screens and reduced-motion readers retain the ordinary accordion.
    media.add("(min-height: 620px) and (prefers-reduced-motion: no-preference)", () => {
      section.classList.add("activity-scroll-enabled");
      const update = (self: ScrollTrigger) => {
        const index = Math.min(activities.length - 1, Math.floor(self.progress * activities.length));
        setActive((previous) => (previous === index ? previous : index));
      };
      const trigger = ScrollTrigger.create({
        trigger: panel,
        start: () => `top ${window.innerWidth < 900 ? 94 : 110}px`,
        end: () => `+=${Math.round(window.innerHeight * 0.8 * activities.length)}`,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        onUpdate: update,
        onRefresh: update,
      });
      scroll.current = trigger;
      const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => {
        cancelAnimationFrame(frame);
        scroll.current = null;
        section.classList.remove("activity-scroll-enabled");
        setActive(0);
      };
    });
    return () => media.revert();
  }, []);

  const selectActivity = (index: number) => {
    const trigger = scroll.current;
    if (trigger) {
      // Seek to the middle of a field's interval, leaving a full final interval
      // before releasing the pin. Native scrolling keeps wheel and touch usable.
      trigger.scroll(trigger.start + ((index + 0.5) / activities.length) * (trigger.end - trigger.start));
      ScrollTrigger.update();
    }
    setActive(index);
  };

  return (
    <section
      ref={root}
      id="our-fields"
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
          <p className="activity-manual-hint">Choose a field. Explore the wider perspective.</p>
          <p className="activity-scroll-hint">Six fields. A shared direction.<br />Scroll to explore them all.</p>
        </div>
      </div>
      <div ref={stage} className="activity-scroll-stage">
        <div className="activity-scroll-navigation">
          <span className="activity-scroll-cue">Scroll to explore <span aria-hidden="true">↓</span></span>
          <div className="activity-scroll-steps" role="group" aria-label="Choose an area of focus">
            {activities.map((a, i) => (
              <button key={a.id} onClick={() => selectActivity(i)} aria-label={`${a.number}: ${a.title}`} aria-pressed={active === i}>
                <span>{a.number}</span>
              </button>
            ))}
          </div>
          <a href="#activity-end" className="activity-skip">Continue below <span aria-hidden="true">↘</span></a>
        </div>
        <div className="activity-showcase">
          <div className="activity-visual">
            <div className="activity-visual-inner">
              {activities.map((a, i) => (
              <div className={`activity-slide ${active === i ? "is-active" : ""}`} key={a.id} aria-hidden={active !== i}>
                <Photo
                  src={a.image}
                  alt={a.alt}
                  position={a.imagePosition}
                  sizes="(min-width: 900px) 48vw, 100vw"
                />
              </div>
              ))}
              <div className="activity-visual-overlay" key={activity.id}>
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
                    onClick={() => selectActivity(i)}
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
          </div>
        </div>
      </div>
      <div id="activity-end" className="activity-end" tabIndex={-1}>
          <p className="activity-note">
            These are organizational objectives. Individual services and
            operational status are subject to confirmation.
          </p>
          <Link className="text-link" to="/activities">
            Explore all our activities{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
      </div>
    </section>
  );
}
