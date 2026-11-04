import { ArrowUpRight, FileText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PageHero,
  Eyebrow,
  Photo,
  ArrowLink,
  ContentNotice,
} from "../components/ui/Elements";
import Timeline from "../components/sections/Timeline";
import FinalCTA from "../components/sections/FinalCTA";
import { images, organization } from "../data/content";
import { usePageMotion } from "../hooks/usePageMotion";
import { usePageMeta } from "../hooks/usePageMeta";

export default function About() {
  const ref = usePageMotion();
  usePageMeta(
    "Our Story",
    "Meet Surabhi Multi State Co-operative Dairy Society Ltd. and explore its purpose, objectives, values, and direction across Kerala and Tamil Nadu.",
  );
  return (
    <div ref={ref}>
      <PageHero
        label="01 / Our story"
        title="One society."
        italic="A shared horizon."
        description="A co-operative vision built around dairy development, farming communities, and the possibilities we can explore together."
        image={images.landscape}
      />
      <section className="about-intro section-pad" id="purpose">
        <Eyebrow>Purpose before everything</Eyebrow>
        <div>
          <h2 data-reveal>
            Rooted in the land.
            <br />
            <em>Connected by people.</em>
          </h2>
          <div className="two-column-copy" data-reveal>
            <p>
              {organization} is a multi-state co-operative society with a
              registered operational scope across Kerala and Tamil Nadu. Its
              focus brings dairy-sector development and farmer welfare into one
              institutional vision.
            </p>
            <p>
              The society’s objectives encompass milk production and processing,
              animal healthcare, nutrition, breeding support, research,
              education, and training. These describe the intended scope of the
              organization; they are not a list of confirmed operating services.
            </p>
          </div>
        </div>
      </section>
      <section className="mission-band">
        <div data-reveal>
          <span className="eyebrow">Our intended mission</span>
          <h3>
            To bring progress
            <br />
            <em>closer to the farm.</em>
          </h3>
          <p>
            Support dairy-sector development and farming communities through
            co-operation, practical knowledge, and responsible exploration of
            new opportunities.
          </p>
        </div>
        <div data-reveal>
          <span className="eyebrow">Our long-term vision</span>
          <h3>
            A future that
            <br />
            <em>grows with everyone.</em>
          </h3>
          <p>
            A connected rural landscape in which farmers, animal welfare,
            technology, and local resources are considered together. This is a
            statement of ambition, not a claim of achieved outcomes.
          </p>
        </div>
      </section>
      <section className="objectives-section section-pad">
        <div className="section-heading">
          <div>
            <Eyebrow>Our development objectives</Eyebrow>
            <h2 data-reveal>
              Many ways
              <br />
              <em>to move forward.</em>
            </h2>
          </div>
          <ArrowLink to="/activities">Explore our focus areas</ArrowLink>
        </div>
        <div className="objectives-list">
          {[
            "Dairy farming, farmer welfare, and relevant modern dairy technologies.",
            "Milk collection, chilling, processing, distribution, and product development.",
            "Animal health, nutrition, cattle-feed development, and breeding support.",
            "Research, education, training, and veterinary infrastructure development.",
            "Farmer support and facilitation of relevant government schemes.",
          ].map((s, i) => (
            <div key={s} data-reveal>
              <span>0{i + 1}</span>
              <p>{s}</p>
              <ArrowUpRight size={23} strokeWidth={1} />
            </div>
          ))}
        </div>
        <ContentNotice>
          Objectives are summarized from the client-provided brief’s account of
          the registered bye-laws. The underlying documents were not attached to
          this build and should be reviewed before relying on exact provisions.
        </ContentNotice>
      </section>
      <section className="values-section section-pad">
        <Photo src={images.farmer} alt="People working in the fields" />
        <div>
          <Eyebrow light>What guides us</Eyebrow>
          <h2 data-reveal>
            Shared values.
            <br />
            <em>Lasting direction.</em>
          </h2>
          {[
            {
              title: "Collective progress",
              text: "Participation, a shared voice, and a belief in moving forward together.",
            },
            {
              title: "Responsible development",
              text: "Considering local needs, appropriate technology, and the resources that sustain us.",
            },
            {
              title: "Lasting impact",
              text: "Keeping the long term in view, with care for the next generation.",
            },
          ].map((v, i) => (
            <article key={v.title} data-reveal>
              <span>0{i + 1}</span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Timeline standalone />
      <section className="governance-preview section-pad">
        <div>
          <Eyebrow>Built on institutional foundations</Eyebrow>
          <h2 data-reveal>
            Trust begins
            <br />
            <em>with clarity.</em>
          </h2>
          <p>
            Leadership information, governance details, and official documents
            will be published after verification.
          </p>
          <ArrowLink to="/governance">Leadership & governance</ArrowLink>
        </div>
        <div className="document-preview">
          <ShieldCheck size={40} strokeWidth={1} />
          <h3>
            Accountability.
            <br />
            Participation. Transparency.
          </h3>
          <p>A place for verified institutional information.</p>
          <Link to="/governance#documents" className="document-link">
            <FileText size={20} />
            <span>
              Official documents
              <br />
              <small>Publication pending verification</small>
            </span>
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
