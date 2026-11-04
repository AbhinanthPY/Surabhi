import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { imageDimensions } from "../../data/imageDimensions";
import { RevealHeading } from "./RevealHeading";
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
      <span className="link-arrow" aria-hidden="true">
        <ArrowUpRight size={17} strokeWidth={1.5} />
        <ArrowUpRight className="arrow-echo" size={17} strokeWidth={1.5} />
      </span>
    </Link>
  );
}
interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  parallax?: boolean;
  position?: string;
  sizes?: string;
  mobileSrc?: string;
}
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  parallax = false,
  position,
  sizes = "(max-width: 899px) 100vw, 50vw",
  mobileSrc,
}: PhotoProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const [fallbackSource, setFallbackSource] = useState<string | null>(null);
  const failed = failedSource === src;
  const originalOnly = fallbackSource === src;
  const dimensions = imageDimensions[src];
  const responsive = !!dimensions && !originalOnly;
  const webp = src.replace(/\.jpg$/, ".webp");
  const small = src.replace(/\.jpg$/, "-small");
  return (
    <div
      className={`photo ${className} ${failed ? "photo-failed" : ""}`}
      role={failed ? "img" : undefined}
      aria-label={failed ? alt : undefined}
    >
      {!failed && (
        <picture>
          {responsive && (
            <>
              {mobileSrc && (
                <>
                  <source
                    media="(max-width: 640px)"
                    type="image/webp"
                    srcSet={`${mobileSrc}.webp`}
                  />
                  <source
                    media="(max-width: 640px)"
                    srcSet={`${mobileSrc}.jpg`}
                  />
                </>
              )}
              <source
                type="image/webp"
                srcSet={`${small}.webp ${dimensions.smallWidth}w, ${webp} ${dimensions.width}w`}
                sizes={sizes}
              />
            </>
          )}
          <img
            src={src}
            srcSet={
              responsive
                ? `${small}.jpg ${dimensions.smallWidth}w, ${src} ${dimensions.width}w`
                : undefined
            }
            sizes={responsive ? sizes : undefined}
            width={dimensions?.width}
            height={dimensions?.height}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            style={position ? { objectPosition: position } : undefined}
            onError={() => {
              if (responsive) setFallbackSource(src);
              else setFailedSource(src);
            }}
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
  layout = "default",
}: {
  project: Project;
  index?: number;
  layout?: "default" | "feature" | "compact";
}) {
  return (
    <article
      className={`project-card project-card-${index % 2} project-layout-${layout}`}
      data-reveal
    >
      <Link
        to={`/projects/${project.id}`}
        className="project-image-link"
        aria-label={`Explore ${project.title}`}
      >
        <Photo
          src={project.image}
          alt={project.alt}
          position={project.imagePosition}
          sizes={
            layout === "feature"
              ? "(min-width:900px) 65vw, 100vw"
              : layout === "compact"
                ? "(min-width:900px) 30vw, 100vw"
                : undefined
          }
        />
        <span className="image-index">/{project.number}</span>
        <span className="image-status">{project.status}</span>
        <span className="image-open" aria-hidden="true">
          <ArrowUpRight size={24} strokeWidth={1.3} />
        </span>
      </Link>
      <div className="project-card-copy">
        {layout === "feature" && (
          <span className="project-ordinal" aria-hidden="true">
            {project.number}
          </span>
        )}
        <div className="card-meta">
          <span>{project.category}</span>
          <span>
            {project.status === "Development Objective"
              ? "Organizational objective"
              : "Project concept"}
          </span>
        </div>
        <h3>
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        {layout === "feature" && (
          <ArrowLink to={`/projects/${project.id}`}>
            Explore the possibility
          </ArrowLink>
        )}
      </div>
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
        <RevealHeading
          as="h1"
          lines={[
            { text: title },
            ...(italic ? [{ text: italic, emphasis: true }] : []),
          ]}
        />
        <p className="page-hero-description" data-reveal>
          {description}
        </p>
      </div>
      {image && (
        <Photo
          src={image}
          alt={imageAlt}
          className="page-hero-image"
          sizes="100vw"
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
