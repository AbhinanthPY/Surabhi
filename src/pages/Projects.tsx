import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  PageHero,
  ProjectCard,
  ContentNotice,
  Eyebrow,
  ArrowLink,
} from "../components/ui/Elements";
import FinalCTA from "../components/sections/FinalCTA";
import { projects, conceptNote } from "../data/content";
import { usePageMotion } from "../hooks/usePageMotion";
import { usePageMeta } from "../hooks/usePageMeta";
import NotFound from "./NotFound";

export default function Projects() {
  const ref = usePageMotion();
  const [category, setCategory] = useState("All initiatives");
  const categories = [
    "All initiatives",
    ...new Set(projects.map((p) => p.category)),
  ];
  const filtered =
    category === "All initiatives"
      ? projects
      : projects.filter((p) => p.category === category);
  usePageMeta(
    "Proposed Initiatives",
    "Explore Surabhi’s proposed concepts in biogas, farm tourism, veterinary healthcare, and dairy infrastructure. All projects are subject to confirmation.",
  );
  return (
    <div ref={ref}>
      <PageHero
        label="03 / Proposed initiatives"
        title="Ideas for a"
        italic="better tomorrow."
        description="Thoughtful possibilities across dairy, agriculture, animal welfare, and rural development. A portfolio of ambition, with room to grow."
      />
      <section className="project-directory section-pad">
        <ContentNotice>
          {conceptNote} No operational, funding, or approval status is implied.
        </ContentNotice>
        <div
          className="filter-bar"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={category === c ? "is-active" : ""}
            >
              {c}
              {c === "All initiatives" && <sup>04</sup>}
            </button>
          ))}
        </div>
        <p className="results-count" role="status">
          {filtered.length}{" "}
          {filtered.length === 1 ? "initiative" : "initiatives"} to explore
        </p>
        <div className="projects-grid projects-filtered" key={category}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const ref = usePageMotion();
  usePageMeta(
    project?.title ?? "Project not found",
    project?.summary ?? "Explore Surabhi’s proposed initiatives.",
  );
  if (!project) return <NotFound />;
  return (
    <div ref={ref}>
      <PageHero
        label={`Project ${project.number} / ${project.category}`}
        title={project.title}
        description={project.summary}
        image={project.image}
        imageAlt={project.alt}
      />
      <section className="detail-body section-pad">
        <aside>
          <Eyebrow>Project at a glance</Eyebrow>
          <dl className="project-facts">
            <dt>Category</dt>
            <dd>{project.category}</dd>
            <dt>Current status</dt>
            <dd>
              <span className="status-badge">{project.status}</span>
            </dd>
            <dt>Approach</dt>
            <dd>Exploratory / conceptual</dd>
          </dl>
          <Link className="text-link" to="/projects">
            All initiatives <ArrowUpRight size={15} />
          </Link>
        </aside>
        <div>
          <Eyebrow>Exploring the possibility</Eyebrow>
          <h2 data-reveal>
            A considered idea.
            <br />
            <em>A longer horizon.</em>
          </h2>
          <p className="large-body">{project.vision}</p>
          <h3 className="detail-subheading">What exploration would involve</h3>
          <ol className="numbered-list">
            {project.considerations.map((c, i) => (
              <li key={c}>
                <span>0{i + 1}</span>
                {c}
              </li>
            ))}
          </ol>
          <ContentNotice>{conceptNote}</ContentNotice>
          <ArrowLink to="/contact?topic=projects" variant="solid">
            Start a conversation
          </ArrowLink>
        </div>
      </section>
      <section className="related-projects section-pad">
        <div className="section-heading">
          <div>
            <Eyebrow>The wider perspective</Eyebrow>
            <h2>
              Other possibilities
              <br />
              <em>to explore.</em>
            </h2>
          </div>
          <ArrowLink to="/projects">All initiatives</ArrowLink>
        </div>
        <div className="projects-grid">
          {projects
            .filter((p) => p.id !== id)
            .slice(0, 2)
            .map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
