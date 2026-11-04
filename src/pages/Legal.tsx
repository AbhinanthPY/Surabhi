import { useLocation } from "react-router-dom";
import { PageHero, ArrowLink } from "../components/ui/Elements";
import { usePageMotion } from "../hooks/usePageMotion";
import { usePageMeta } from "../hooks/usePageMeta";
export default function Legal() {
  const privacy = useLocation().pathname === "/privacy";
  const ref = usePageMotion();
  usePageMeta(
    privacy ? "Privacy Notice" : "Legal & Content Notice",
    privacy
      ? "How this demonstration website handles enquiry information and browser data."
      : "Content status, proposed initiatives, imagery, and verification information for the Surabhi website.",
  );
  return (
    <div ref={ref}>
      <PageHero
        label="A transparent perspective"
        title={privacy ? "Your information." : "Clarity in"}
        italic={privacy ? "Handled with clarity." : "every claim."}
        description={
          privacy
            ? "The current site is an informational demonstration. Its enquiry form works only within the page."
            : "Understanding verified context, organizational objectives, conceptual projects, and demonstration content."
        }
      />
      <section className="legal-copy section-pad">
        {privacy ? (
          <>
            <section>
              <h2>The enquiry form</h2>
              <p>
                Form entries remain in the current page’s memory. The form does
                not submit information to a server, send an email, or save
                entries in local storage. Reloading or leaving the page clears
                them. Choosing “Copy enquiry text” writes the reviewed text to
                your own clipboard.
              </p>
            </section>
            <section>
              <h2>Assets and third-party services</h2>
              <p>
                Site photography and fonts are served from the website’s own
                asset directory. No analytics, advertising, account
                registration, or marketing trackers are included in the
                application. The hosting service may process ordinary connection
                and access information as part of serving the website.
              </p>
            </section>
            <section>
              <h2>Before a live enquiry service</h2>
              <p>
                A production contact service will need its own verified contact
                identity, privacy notice, retention policy, and delivery
                integration. The current demonstration should not be used to
                transmit private or sensitive information.
              </p>
            </section>
          </>
        ) : (
          <>
            <section>
              <h2>Organizational information</h2>
              <p>
                Surabhi Multi State Co-operative Dairy Society Ltd. is presented
                using the supplied client brief. Its registered operational
                scope is stated as Kerala and Tamil Nadu. The registration date
                of 12 October 2023 comes from that brief; the original
                certificate was not attached for independent review.
              </p>
            </section>
            <section>
              <h2>Objectives and proposed initiatives</h2>
              <p>
                Areas of activity describe organizational objectives summarized
                in the client brief. Project concepts are not representations of
                operating, approved, funded, or completed facilities.
                Feasibility, details, and applicable approvals remain to be
                confirmed.
              </p>
            </section>
            <section>
              <h2>Demonstration content</h2>
              <p>
                Journal articles are illustrative demonstration content. No
                unverified officeholders, testimonials, impact statistics,
                contact channels, membership fees, or application rules have
                been added. Leadership profiles and document downloads await
                verified source material.
              </p>
            </section>
            <section>
              <h2>Branding and photography</h2>
              <p>
                The official logo was not supplied. The marked temporary text
                wordmark should be replaced with the official asset before
                public launch. Stock photographs illustrate themes and
                landscapes; they are not photographs of confirmed Surabhi
                facilities, projects, members, or staff. Image sources and font
                licensing notes are included with the project documentation.
              </p>
            </section>
          </>
        )}
        <ArrowLink to="/contact">Contact information</ArrowLink>
      </section>
    </div>
  );
}
