import { projects, conceptNote } from "../../data/content";
import { Eyebrow, ArrowLink, ProjectCard } from "../ui/Elements";
import { RevealHeading } from "../ui/RevealHeading";

export default function FeaturedProjects() {
  return (
    <section
      className="projects-section section-pad projects-editorial"
      aria-labelledby="initiatives-heading"
    >
      <div className="section-heading">
        <div>
          <Eyebrow>03 / Our initiatives</Eyebrow>
          <RevealHeading
            id="initiatives-heading"
            lines={[
              { text: "Ideas for a" },
              { text: "better tomorrow.", emphasis: true },
            ]}
          />
        </div>
        <div className="section-heading-aside" data-reveal>
          <p>
            Exploring opportunities across dairy, agriculture, animal welfare,
            and sustainable rural development.
          </p>
          <ArrowLink to="/projects">All proposed initiatives</ArrowLink>
        </div>
      </div>
      <div className="projects-curated">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            layout={index === 0 ? "feature" : "compact"}
          />
        ))}
      </div>
      <p className="project-disclaimer">
        <span className="label-dot" />
        {conceptNote}
      </p>
    </section>
  );
}
