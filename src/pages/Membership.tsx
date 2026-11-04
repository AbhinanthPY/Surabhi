import {
  ArrowUpRight,
  BookOpen,
  UsersRound,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  PageHero,
  Eyebrow,
  ArrowLink,
  ContentNotice,
  Photo,
} from "../components/ui/Elements";
import FinalCTA from "../components/sections/FinalCTA";
import { images } from "../data/content";
import { usePageMotion } from "../hooks/usePageMotion";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Membership() {
  const ref = usePageMotion();
  usePageMeta(
    "Membership & Co-operation",
    "Learn how to enquire about Surabhi membership, official eligibility, rights, responsibilities, and the registered bye-laws.",
  );
  return (
    <div ref={ref}>
      <PageHero
        label="04 / Membership & co-operation"
        title="Many voices."
        italic="Stronger together."
        description="A co-operative is built on participation. Understand the official framework and begin an informed conversation about membership."
        image={images.farmer}
        imageAlt="Indian agricultural workers tending a cultivated field"
      />
      <section className="membership-intro section-pad">
        <Eyebrow>Participation with purpose</Eyebrow>
        <div>
          <h2 data-reveal>
            A shared future starts
            <br />
            <em>with understanding.</em>
          </h2>
          <p className="large-body">
            Membership connects individuals with the society’s co-operative
            purpose. Eligibility, categories, admission, rights, and
            responsibilities are governed by the official registered bye-laws
            and applicable requirements.
          </p>
          <ContentNotice>
            The registered bye-laws were not attached to this project. Exact
            eligibility categories, fees, admission rules, voting rights, and
            application requirements are therefore not reproduced or inferred
            here. Please request the verified provisions before applying.
          </ContentNotice>
        </div>
      </section>
      <section className="membership-steps section-pad">
        <div className="section-heading">
          <div>
            <Eyebrow>Before you take the next step</Eyebrow>
            <h2>
              A clear path
              <br />
              <em>to a conversation.</em>
            </h2>
          </div>
        </div>
        <div className="steps-grid">
          {[
            {
              icon: BookOpen,
              title: "Read the official framework",
              text: "Request the registered bye-laws and current membership information. Confirm that you have the applicable, verified version.",
            },
            {
              icon: UsersRound,
              title: "Understand eligibility",
              text: "Ask the society to explain the eligible membership categories and conditions relevant to your circumstances.",
            },
            {
              icon: MessageSquare,
              title: "Discuss the next steps",
              text: "Confirm the current procedure, required documents, rights, responsibilities, and any applicable fees directly with the society.",
            },
          ].map((s, i) => (
            <article key={s.title} data-reveal>
              <div className="step-top">
                <s.icon size={30} strokeWidth={1} />
                <span>0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <p className="fine-print">
          This is an information pathway, not an official admission procedure or
          application portal.
        </p>
      </section>
      <section className="membership-questions section-pad">
        <div>
          <Eyebrow>Good questions to begin with</Eyebrow>
          <h2>
            Clarity at
            <br />
            <em>every step.</em>
          </h2>
          <Photo
            src={images.landscape}
            alt="Tea fields in a rural Kerala landscape"
          />
        </div>
        <div className="faq-list">
          {[
            {
              q: "Who is eligible to become a member?",
              a: "The eligible categories and conditions must be confirmed against the society’s registered bye-laws. No category is assumed on this demonstration website.",
            },
            {
              q: "What are the rights and responsibilities?",
              a: "Membership rights, participation, voting provisions, and responsibilities depend on the official bye-laws and applicable requirements. Request the verified text and any current explanatory guidance from the society.",
            },
            {
              q: "Is there a membership fee?",
              a: "No fee or share amount is stated here because verified financial conditions were not provided. Ask the society for current, official information.",
            },
            {
              q: "Can I apply through this website?",
              a: "This website does not accept registrations or membership payments. Its enquiry form is a local demonstration and does not send or store information.",
            },
            {
              q: "Where can I read the official documents?",
              a: "The governance page identifies the documents awaiting publication. Verified copies should be requested from the society; this website does not fabricate document downloads.",
            },
          ].map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span>+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
          <ArrowLink to="/contact?topic=membership" variant="solid">
            Enquire about membership
          </ArrowLink>
          <Link to="/governance#documents" className="text-link">
            Official documents area <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
