import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Article, Project } from "../../types/content";

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span className="label-dot" />
      {children}
    </p>
  );
}
export function ArrowLink({
  to,
  children,
  variant = "line",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: "line" | "solid" | "light" | "outline";
  className?: string;
}) {
  return (
    <Link to={to} className={`arrow-link arrow-link-${variant} ${className}`}>
      <span>{children}</span>
      <span className="link-arrow">
        <ArrowUpRight size={17} strokeWidth={1.5} />
      </span>
    </Link>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  parallax = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  parallax?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={`photo ${className} ${failed ? "photo-failed" : ""}`}
      role={failed ? "img" : undefined}
      aria-label={failed ? alt : undefined}
    >
      {!failed && (
        <picture>
          {src.endsWith("/hero.jpg") && (
            <>
              <source
                media="(max-width: 640px)"
                type="image/webp"
                srcSet="/assets/images/hero-mobile.webp"
              />
              <source
                media="(max-width: 640px)"
                srcSet="/assets/images/hero-mobile.jpg"
              />
            </>
          )}
          <source
            type="image/webp"
            srcSet={`${src.replace(".jpg", "-small.webp")} 640w, ${src.replace(".jpg", ".webp")} 1400w`}
            sizes={
              className.includes("hero-image")
                ? "100vw"
                : "(max-width: 640px) 100vw, (max-width: 1000px) 80vw, 60vw"
            }
          />
          <img
            src={src}
            srcSet={`${src.replace(".jpg", "-small.jpg")} 640w, ${src} 1400w`}
            sizes={
              className.includes("hero-image")
                ? "100vw"
                : "(max-width: 640px) 100vw, (max-width: 1000px) 80vw, 60vw"
            }
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onError={() => setFailed(true)}
            data-parallax={parallax ? "" : undefined}
          />
        </picture>
      )}
      {failed && (
        <span className="photo-fallback">
          A shared future, rooted in nature.
        </span>
      )}
    </div>
  );
}
export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className={`project-card project-card-${index % 2}`} data-reveal>
      <Link
        to={`/projects/${project.id}`}
        className="project-image-link"
        aria-label={`Explore ${project.title}`}
      >
        <Photo src={project.image} alt={project.alt} />
        <span className="image-index">/{project.number}</span>
        <span className="image-status">{project.status}</span>
        <span className="image-open">
          <ArrowUpRight size={24} strokeWidth={1.3} />
        </span>
      </Link>
      <div className="card-meta">
        <span>{project.category}</span>
        <span>Project concept</span>
      </div>
      <h3>
        <Link to={`/projects/${project.id}`}>{project.title}</Link>
      </h3>
      <p>{project.summary}</p>
    </article>
  );
}
export function NewsCard({ article }: { article: Article }) {
  return (
    <article className="news-card" data-reveal>
      <Link
        to={`/news/${article.id}`}
        className="news-image-link"
        aria-label={`Read ${article.title}`}
      >
        <Photo src={article.image} alt={article.alt} />
        <span className="image-open">
          <ArrowUpRight size={22} />
        </span>
      </Link>
      <div className="card-meta">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h3>
        <Link to={`/news/${article.id}`}>{article.title}</Link>
      </h3>
      <p>{article.excerpt}</p>
      <span className="demo-label">
        Demonstration article <ArrowRight size={13} />
      </span>
    </article>
  );
}
export function PageHero({
  label,
  title,
  italic,
  description,
  image,
  imageAlt = "Green agricultural hills and rural landscapes",
}: {
  label: string;
  title: string;
  italic?: string;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`page-hero ${image ? "page-hero-with-image" : ""}`}>
      <div className="page-hero-content">
        <Eyebrow>{label}</Eyebrow>
        <h1 data-reveal>
          {title}
          {italic && (
            <>
              <br />
              <em>{italic}</em>
            </>
          )}
        </h1>
        <p className="page-hero-description" data-reveal>
          {description}
        </p>
      </div>
      {image && (
        <Photo
          src={image}
          alt={imageAlt}
          className="page-hero-image"
          priority
        />
      )}
      <div className="page-hero-bottom">
        <span>Surabhi · A co-operative perspective</span>
        <span>
          Kerala & Tamil Nadu <ArrowRight size={14} />
        </span>
      </div>
    </section>
  );
}
export function ContentNotice({ children }: { children: ReactNode }) {
  return (
    <aside className="content-notice">
      <span className="notice-symbol">i</span>
      <p>{children}</p>
    </aside>
  );
}
