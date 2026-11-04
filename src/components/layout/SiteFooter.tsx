import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Brand } from "./SiteHeader";
import { activities, organization } from "../../data/content";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-identity">
          <Brand footer />
          <p>{organization}</p>
          <span>
            Rooted in co-operation.
            <br />
            Growing beyond boundaries.
          </span>
        </div>
        <div className="footer-links">
          <span className="footer-label">Explore</span>
          <Link to="/about">Our story</Link>
          <Link to="/projects">Proposed initiatives</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/governance">Leadership & governance</Link>
          <Link to="/news">News & insights</Link>
        </div>
        <div className="footer-links">
          <span className="footer-label">Our focus</span>
          {activities.map((a) => (
            <Link key={a.id} to={`/activities/${a.id}`}>
              {a.shortTitle}
            </Link>
          ))}
        </div>
        <div className="footer-connect">
          <span className="footer-label">A conversation starts here</span>
          <Link to="/contact" className="footer-contact-link">
            Let’s grow
            <br />
            <em>together.</em>
            <ArrowUpRight size={30} strokeWidth={1} />
          </Link>
          <p>
            Operational scope
            <br />
            <span>Kerala & Tamil Nadu, India</span>
          </p>
          <p className="footer-pending">
            Official contact and registered-office details
            <br />
            are awaiting verification.
          </p>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        SURABHI<span>↗</span>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Surabhi. A shared future.</span>
        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/legal">Legal & content notice</Link>
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              })
            }
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
