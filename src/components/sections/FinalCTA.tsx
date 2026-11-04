import { ArrowLink, Eyebrow } from "../ui/Elements";
export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-top">
        <Eyebrow light>There is more we can grow</Eyebrow>
        <span>People. Purpose. Possibility.</span>
      </div>
      <div className="cta-main">
        <h2 data-reveal>
          The future
          <br />
          <em>grows together.</em>
        </h2>
        <div className="cta-copy" data-reveal>
          <p>
            Discover the possibilities of co-operation, innovation, and
            sustainable development.
          </p>
          <ArrowLink to="/contact" variant="light">
            Get in touch
          </ArrowLink>
        </div>
      </div>
      <div className="cta-bottom">
        <span>A shared ambition. A collective future.</span>
        <span>Let’s begin a conversation ↗</span>
      </div>
    </section>
  );
}
