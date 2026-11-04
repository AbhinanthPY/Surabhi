import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, MoveDown } from "lucide-react";
import { images, organization } from "../../data/content";
import { Photo, ArrowLink } from "../ui/Elements";

export default function HeroSection() {
  return (
    <>
      <section className="hero hero-editorial" aria-labelledby="hero-heading">
        <Photo
          src={images.hero}
          mobileSrc="/assets/images/cinematic-mobile"
          alt="Morning mist rising between the tea gardens and mountain ridges of Munnar, Kerala"
          className="hero-image"
          sizes="100vw"
          priority
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-eyebrow hero-detail">
            <span className="hero-cross" aria-hidden="true" />
            <span>Rooted in co-operation</span>
            <span className="eyebrow-rule" />
          </div>
          <h1
            id="hero-heading"
            aria-label="Growing Together. Beyond Boundaries."
          >
            <span className="hero-line" aria-hidden="true">
              <span>
                Growing <span className="hero-together">Together.</span>
              </span>
            </span>
            <span className="hero-line hero-line-editorial" aria-hidden="true">
              <span>
                <em>Beyond Boundaries.</em>
              </span>
            </span>
          </h1>
          <div className="hero-lower hero-detail">
            <p>
              Advancing dairy development, supporting farming communities, and
              shaping a more sustainable future through collective progress.
            </p>
            <div className="hero-actions">
              <ArrowLink to="/activities" variant="light">
                Explore our world
              </ArrowLink>
              <Link to="/#who-we-are" className="hero-secondary">
                Discover our purpose <ArrowDown size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <aside className="hero-chapter hero-detail">
          <span>Our shared landscape</span>
          <span>
            People.
            <br />
            Land.
            <br />
            <em>Possibility.</em>
          </span>
          <Link to="/about" aria-label="Discover the Surabhi story">
            <ArrowUpRight size={18} strokeWidth={1.25} />
          </Link>
        </aside>
        <div className="hero-bottom hero-detail">
          <Link to="/#who-we-are" className="scroll-cue">
            <span className="scroll-cue-circle">
              <MoveDown size={17} strokeWidth={1.2} aria-hidden="true" />
            </span>
            <span>Scroll to discover</span>
          </Link>
          <span className="hero-location">
            Kerala & Tamil Nadu, India
            <span>Rooted in the land. Open to possibility.</span>
          </span>
          <span className="hero-edition">
            A co-operative perspective <span aria-hidden="true">↗</span>
          </span>
        </div>
      </section>
      <div className="hero-footnote">
        <span>{organization}</span>
        <span>
          A shared purpose. A wider horizon.
          <span className="footnote-plus" aria-hidden="true">
            +
          </span>
        </span>
      </div>
    </>
  );
}
