import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import {
  PageHero,
  Photo,
  Eyebrow,
  ArrowLink,
  ContentNotice,
} from "../components/ui/Elements";
import FinalCTA from "../components/sections/FinalCTA";
import { activities } from "../data/content";
import { usePageMotion } from "../hooks/usePageMotion";
import { usePageMeta } from "../hooks/usePageMeta";
import NotFound from "./NotFound";

export default function Activities() {
  const ref = usePageMotion();
  usePageMeta(
    "Our Activities",
    "Explore six connected areas of Surabhi’s organizational objectives, from dairy development and farmer welfare to animal healthcare and innovation.",
  );
  return (
    <div ref={ref}>
      <PageHero
        label="02 / What we do"
        title="Different fields."
        italic="One shared future."
        description="Six connected areas of focus. One co-operative vision for the people, animals, and environments that sustain rural life."
      />
      <section className="activities-directory section-pad">
        <ContentNotice>
          These are registered organizational objectives summarized in the
          client brief. A listed activity does not indicate that a service or
          facility is currently operational.
        </ContentNotice>
        {activities.map((a) => (
          <article className="directory-activity" key={a.id} data-reveal>
            <Link to={`/activities/${a.id}`} className="directory-image">
              <Photo src={a.image} alt={a.alt} />
              <span className="image-open">
                <ArrowUpRight size={26} />
              </span>
            </Link>
            <div className="directory-copy">
              <span className="eyebrow">{a.number} / Area of focus</span>
              <h2>
                <Link to={`/activities/${a.id}`}>{a.title}</Link>
              </h2>
              <p>{a.description}</p>
              <ArrowLink to={`/activities/${a.id}`}>
                Explore this field
              </ArrowLink>
            </div>
          </article>
        ))}
      </section>
      <FinalCTA />
    </div>
  );
}
export function ActivityDetail() {
  const { id } = useParams();
  const activity = activities.find((a) => a.id === id);
  const ref = usePageMotion();
  usePageMeta(
    activity?.title ?? "Activity not found",
    activity?.summary ?? "Explore Surabhi’s areas of focus.",
  );
  if (!activity) return <NotFound />;
  const next =
    activities[(activities.indexOf(activity) + 1) % activities.length];
  return (
    <div ref={ref}>
      <PageHero
        label={`${activity.number} / Area of focus`}
        title={activity.title}
        description={activity.summary}
        image={activity.image}
        imageAlt={activity.alt}
      />
      <section className="detail-body section-pad">
        <aside>
          <Eyebrow>Our perspective</Eyebrow>
          <span className="status-badge">Organizational objective</span>
          <Link className="text-link" to="/activities">
            All activities <ArrowUpRight size={15} />
          </Link>
        </aside>
        <div>
          <h2 data-reveal>
            A connected approach
            <br />
            <em>to development.</em>
          </h2>
          <p className="large-body">{activity.description}</p>
          <h3 className="detail-subheading">Relevant objectives</h3>
          <ul className="objective-checklist">
            {activity.objectives.map((o) => (
              <li key={o}>
                <Check size={17} />
                <span>{o}</span>
              </li>
            ))}
          </ul>
          <ContentNotice>
            This page outlines organizational objectives. Specific programmes,
            locations, facilities, and availability require confirmation. It
            does not offer a currently available service.
          </ContentNotice>
          <ArrowLink to={`/contact?topic=activities`} variant="solid">
            Enquire about this area
          </ArrowLink>
        </div>
      </section>
      <section className="next-activity section-pad">
        <span className="eyebrow">The next connected field</span>
        <Link to={`/activities/${next.id}`}>
          <span>{next.title}</span>
          <ArrowRight size={40} strokeWidth={1} />
        </Link>
      </section>
      <FinalCTA />
    </div>
  );
}
