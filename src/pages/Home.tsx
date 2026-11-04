import { Leaf } from "lucide-react";
import { ArrowLink, Eyebrow, Photo, NewsCard } from "../components/ui/Elements";
import HeroSection from "../components/sections/HeroSection";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import { RevealHeading } from "../components/ui/RevealHeading";
import ActivityShowcase from "../components/sections/ActivityShowcase";
import Timeline from "../components/sections/Timeline";
import FinalCTA from "../components/sections/FinalCTA";
import { images, articles, organization } from "../data/content";
import { usePageMotion } from "../hooks/usePageMotion";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  const ref = usePageMotion();
  usePageMeta(
    "Growing Together. Beyond Boundaries.",
    "Advancing dairy development, supporting farming communities, and exploring a more sustainable future through co-operation in Kerala and Tamil Nadu.",
  );
  return (
    <div ref={ref} className="home-page">
      <HeroSection />

      <section id="who-we-are" className="intro-section section-pad">
        <div className="intro-label">
          <Eyebrow>01 / Who we are</Eyebrow>
          <span className="intro-small">
            One society.
            <br />
            Many possibilities.
          </span>
        </div>
        <div className="intro-main">
          <RevealHeading
            lines={[
              { text: "Progress begins" },
              { text: "when we grow" },
              { text: "together.", emphasis: true },
            ]}
          />
          <div className="intro-bottom">
            <Photo
              src={images.landscape}
              alt="A person walking among the tea gardens of Munnar"
              className="intro-photo"
            />
            <div className="intro-copy" data-reveal>
              <p>
                {organization} is established around the principles of
                co-operation, dairy development, and the advancement of farming
                communities across Kerala and Tamil Nadu.
              </p>
              <p className="muted">
                Bringing people, ideas, and opportunities together, with a
                belief that meaningful progress is always a shared endeavour.
              </p>
              <ArrowLink to="/about">The story behind Surabhi</ArrowLink>
            </div>
          </div>
        </div>
        <div className="intro-margin-note">CO-OPERATION IS OUR FOUNDATION</div>
      </section>

      <section className="purpose-section">
        <div className="purpose-photo-wrap" data-image-reveal>
          <Photo
            src={images.people}
            alt="An Indian farmer tending a field in soft evening light"
            className="purpose-photo"
            parallax
          />
          <span className="photo-caption">
            A future shaped by the people who grow it.
          </span>
        </div>
        <div className="purpose-content">
          <Eyebrow light>Our core purpose</Eyebrow>
          <RevealHeading
            lines={[
              { text: "Rooted in people." },
              { text: "Driven by purpose.", emphasis: true },
            ]}
          />
          <p data-reveal>
            Our focus extends beyond dairy. It is about the lives connected to
            it: the farmers, their animals, the land, and the communities that
            grow around them.
          </p>
          <div className="purpose-values">
            {[
              {
                number: "01",
                title: "Collective progress",
                text: "Moving forward through participation and shared purpose.",
              },
              {
                number: "02",
                title: "Responsible development",
                text: "Considering people, resources, and the long term.",
              },
              {
                number: "03",
                title: "Lasting impact",
                text: "Building a foundation for the generations to come.",
              },
            ].map((value) => (
              <div key={value.number} data-reveal>
                <span>{value.number}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}
          </div>
          <ArrowLink to="/about#purpose" variant="line">
            Discover what guides us
          </ArrowLink>
        </div>
      </section>

      <ActivityShowcase />

      <section className="visual-interlude">
        <Photo
          src={images.fields}
          alt="Soft evening light over open, green agricultural fields"
          parallax
        />
        <div className="interlude-shade" />
        <div className="interlude-top">
          <span>Looking beyond today</span>
          <Leaf size={24} strokeWidth={1} />
        </div>
        <RevealHeading
          lines={[
            { text: "Building possibilities" },
            { text: "for generations.", emphasis: true },
          ]}
        />
        <span className="interlude-bottom">
          The land connects us. Our purpose moves us forward.
        </span>
      </section>

      <FeaturedProjects />

      <section className="animal-section">
        <div className="animal-story">
          <Eyebrow light>04 / Animal wellbeing</Eyebrow>
          <RevealHeading
            lines={[
              { text: "Care beyond" },
              { text: "the farm.", emphasis: true },
            ]}
          />
          <p data-reveal>
            From animal health to responsible breeding support, better livestock
            care is an important part of sustainable dairy development.
          </p>
          <div className="animal-topics" data-reveal>
            {[
              "Veterinary care objectives",
              "Animal health awareness",
              "Nutrition & breeding support",
              "Modern livestock management",
            ].map((topic, i) => (
              <span key={topic}>
                <span>0{i + 1}</span>
                {topic}
              </span>
            ))}
          </div>
          <ArrowLink to="/activities/animal-healthcare" variant="light">
            A closer look at care
          </ArrowLink>
        </div>
        <div className="animal-photo" data-image-reveal>
          <Photo
            src={images.cattle}
            alt="A gentle close view of a black and white dairy cow"
            parallax
          />
          <span className="animal-photo-note">
            Their wellbeing.
            <br />
            Our shared responsibility.
          </span>
        </div>
      </section>

      <section className="sustainability-section section-pad">
        <div className="sustainability-heading">
          <Eyebrow>Innovation & sustainability</Eyebrow>
          <RevealHeading
            lines={[
              { text: "Thinking forward." },
              { text: "Growing responsibly.", emphasis: true },
            ]}
          />
        </div>
        <div className="sustainability-grid">
          <div className="sustainability-visual" data-image-reveal>
            <Photo
              src={images.resources}
              alt="A tree standing above green tea gardens and layered hills in Munnar"
            />
            <div className="resource-caption">
              <span>01 / The land we share</span>
              <span>A longer view. ↗</span>
            </div>
          </div>
          <div className="sustainability-copy" data-reveal>
            <p className="large-body">
              The future of farming asks us to think differently. To see
              resources as possibilities. And to make progress with care.
            </p>
            <p>
              Resource-conscious development, modern dairy technologies, and
              responsible farming are part of our forward-looking perspective.
              Renewable energy remains a project concept to be explored with
              diligence.
            </p>
            <div className="sustainability-principles">
              <span>Respect for resources</span>
              <span>Appropriate technology</span>
              <span>Community at the centre</span>
            </div>
            <ArrowLink to="/projects/biogas-development">
              Explore the thinking
            </ArrowLink>
          </div>
        </div>
      </section>

      <Timeline />

      <section className="membership-section section-pad">
        <div className="membership-top">
          <Eyebrow>06 / Membership & co-operation</Eyebrow>
          <span>Many voices. One shared direction.</span>
        </div>
        <div className="membership-main">
          <RevealHeading
            lines={[
              { text: "Stronger" },
              { text: "together.", emphasis: true },
            ]}
          />
          <div className="membership-copy" data-reveal>
            <p>
              Co-operation begins with participation. Learn about the society’s
              membership framework, official bye-laws, and the conversations
              that come before joining.
            </p>
            <ArrowLink to="/membership" variant="solid">
              Explore membership
            </ArrowLink>
            <span className="membership-note">
              Eligibility and conditions are governed by the official registered
              bye-laws.
            </span>
          </div>
        </div>
      </section>

      <section className="news-section section-pad">
        <div className="section-heading">
          <div>
            <Eyebrow>07 / News & insights</Eyebrow>
            <RevealHeading
              lines={[
                { text: "Perspectives from" },
                { text: "our world.", emphasis: true },
              ]}
            />
          </div>
          <ArrowLink to="/news">Visit the journal</ArrowLink>
        </div>
        <div className="news-grid">
          {articles.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
