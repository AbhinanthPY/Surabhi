import {
  FileText,
  UsersRound,
  Landmark,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  PageHero,
  Eyebrow,
  ContentNotice,
  ArrowLink,
} from "../components/ui/Elements";
import FinalCTA from "../components/sections/FinalCTA";
import { organization } from "../data/content";
import { usePageMotion } from "../hooks/usePageMotion";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Governance() {
  const ref = usePageMotion();
  usePageMeta(
    "Leadership & Governance",
    "Institutional information, leadership publication status, and the official documents area for Surabhi Multi State Co-operative Dairy Society Ltd.",
  );
  return (
    <div ref={ref}>
      <PageHero
        label="Institutional foundations"
        title="Purpose, guided"
        italic="by accountability."
        description="A clear place for governance, leadership, and the documents that define the society’s institutional framework."
      />
      <section className="governance-overview section-pad">
        <Eyebrow>The society</Eyebrow>
        <div>
          <h2 data-reveal>
            A co-operative
            <br />
            <em>institution.</em>
          </h2>
          <p className="large-body">
            {organization} has a registered operational scope in Kerala and
            Tamil Nadu. Its governance and membership framework should be
            understood through the official registered bye-laws and verified
            institutional records.
          </p>
          <ContentNotice>
            Leadership names, board composition, designations, biographies, and
            portraits have not been supplied. No officeholder or board structure
            is asserted on this website.
          </ContentNotice>
        </div>
      </section>
      <section className="leadership-section section-pad">
        <div className="section-heading">
          <div>
            <Eyebrow>Leadership & structure</Eyebrow>
            <h2>
              Information with
              <br />
              <em>integrity.</em>
            </h2>
          </div>
          <p className="section-heading-aside">
            Verified profiles belong here.
            <br />
            Publication follows confirmation.
          </p>
        </div>
        <div className="leadership-grid">
          {[
            {
              icon: UsersRound,
              title: "Society leadership",
              text: "Names, designations, and verified profiles will be published after confirmation.",
            },
            {
              icon: Landmark,
              title: "Board & governance structure",
              text: "Composition, roles, and governance provisions await verification against official records.",
            },
            {
              icon: ShieldCheck,
              title: "Institutional accountability",
              text: "Applicable governance policies and reporting information will be added after review.",
            },
          ].map((v) => (
            <article key={v.title} data-reveal>
              <span className="leadership-placeholder">
                <v.icon size={42} strokeWidth={1} />
              </span>
              <span className="status-badge">Awaiting verification</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="documents" className="documents-section section-pad">
        <div>
          <Eyebrow>Official documents</Eyebrow>
          <h2>
            Our foundations,
            <br />
            <em>in writing.</em>
          </h2>
          <p>
            Documents will be available here once verified copies are provided
            and approved for publication.
          </p>
          <ArrowLink to="/contact?topic=documents">
            Request document information
          </ArrowLink>
        </div>
        <div className="documents-list">
          {[
            {
              title: "Society registration certificate",
              detail:
                "Registration date stated in the client brief: 12 October 2023. Original file not attached.",
            },
            {
              title: "Registered bye-laws",
              detail:
                "Full text not attached. Required for exact membership and governance provisions.",
            },
            {
              title: "Governance & policy documents",
              detail:
                "Publication depends on the availability and verification of official records.",
            },
          ].map((d) => (
            <article key={d.title}>
              <FileText size={26} strokeWidth={1} />
              <div>
                <h3>{d.title}</h3>
                <p>{d.detail}</p>
                <span>Verified copy pending</span>
              </div>
              <Link
                to="/contact?topic=documents"
                aria-label={`Enquire about ${d.title}`}
              >
                <ArrowUpRight size={21} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
