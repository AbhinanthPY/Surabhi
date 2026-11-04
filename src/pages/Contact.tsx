import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero, Eyebrow, Photo } from "../components/ui/Elements";
import ContactForm from "../components/sections/ContactForm";
import { images, organization } from "../data/content";
import { usePageMotion } from "../hooks/usePageMotion";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Contact() {
  const ref = usePageMotion();
  usePageMeta(
    "Get in Touch",
    "Begin a conversation about Surabhi, membership, development objectives, and proposed initiatives. Demo enquiry form with no sending or storage.",
  );
  return (
    <div ref={ref}>
      <PageHero
        label="06 / Contact"
        title="Every possibility"
        italic="starts with a conversation."
        description="A question, an idea, a shared ambition. There is always a place to begin."
      />
      <section className="contact-section section-pad">
        <div className="contact-info">
          <Eyebrow>Let’s connect</Eyebrow>
          <h2 data-reveal>
            Rooted here.
            <br />
            <em>Open to possibility.</em>
          </h2>
          <p>{organization}</p>
          <div className="contact-details">
            <div>
              <MapPin size={20} strokeWidth={1.3} />
              <div>
                <h3>Our operational scope</h3>
                <p>Kerala & Tamil Nadu, India</p>
                <small>Registered-office address pending verification.</small>
              </div>
            </div>
            <div>
              <Mail size={20} strokeWidth={1.3} />
              <div>
                <h3>Official email</h3>
                <p>To be published after verification</p>
              </div>
            </div>
            <div>
              <Phone size={20} strokeWidth={1.3} />
              <div>
                <h3>Telephone</h3>
                <p>To be published after verification</p>
              </div>
            </div>
          </div>
          <Photo
            src={images.hills}
            alt="Misty agricultural hills in Kerala"
            className="contact-photo"
          />
          <Link to="/governance#documents" className="text-link">
            Looking for official information? <ArrowUpRight size={16} />
          </Link>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
