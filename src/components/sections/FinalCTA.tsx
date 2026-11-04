import { ArrowLink, Eyebrow } from "../ui/Elements";
import { RevealHeading } from "../ui/RevealHeading";
export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-top">
        <Eyebrow light>There is more we can grow</Eyebrow>
        <span>People. Purpose. Possibility.</span>
      </div>
      <div className="cta-main">
        <RevealHeading
          lines={[
            { text: "The future" },
            { text: "grows together.", emphasis: true },
          ]}
        />
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
