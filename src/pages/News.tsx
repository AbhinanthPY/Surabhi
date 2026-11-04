import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search, ArrowLeft, ArrowUpRight, X } from "lucide-react";
import {
  PageHero,
  NewsCard,
  ContentNotice,
  Photo,
  Eyebrow,
} from "../components/ui/Elements";
import FinalCTA from "../components/sections/FinalCTA";
import { articles } from "../data/content";
import { usePageMotion } from "../hooks/usePageMotion";
import { usePageMeta } from "../hooks/usePageMeta";
import NotFound from "./NotFound";

export default function News() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All perspectives");
  const ref = usePageMotion();
  usePageMeta(
    "News & Insights",
    "Explore demonstration perspectives on dairy development, animal welfare, and responsible rural development.",
  );
  const categories = [
    "All perspectives",
    ...new Set(articles.map((a) => a.category)),
  ];
  const filtered = articles.filter(
    (a) =>
      (category === "All perspectives" || a.category === category) &&
      `${a.title} ${a.excerpt} ${a.category}`
        .toLowerCase()
        .includes(search.toLowerCase().trim()),
  );
  return (
    <div ref={ref}>
      <PageHero
        label="05 / News & insights"
        title="Perspectives from"
        italic="our world."
        description="Ideas, observations, and conversations around dairy, farming communities, and the future of rural development."
      />
      <section className="journal-section section-pad">
        <ContentNotice>
          All articles shown here are demonstration content. They are
          illustrative perspectives, not published news, programme
          announcements, or reports of completed work.
        </ContentNotice>
        <div className="journal-controls">
          <div
            className="filter-bar"
            role="group"
            aria-label="Filter articles by category"
          >
            {categories.map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                className={category === c ? "is-active" : ""}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="search-box">
            <Search size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search articles"
              placeholder="Find a perspective…"
              type="search"
            />
            {search && (
              <button onClick={() => setSearch("")} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        <p className="results-count" role="status">
          {filtered.length}{" "}
          {filtered.length === 1 ? "perspective" : "perspectives"} found
        </p>
        {filtered.length ? (
          <div className="news-grid" key={`${category}-${search}`}>
            {filtered.map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        ) : (
          <div className="empty-results">
            <Search size={35} strokeWidth={1} />
            <h2>No matching perspectives.</h2>
            <p>Try another subject or explore all demonstration articles.</p>
            <button
              className="text-link"
              onClick={() => {
                setSearch("");
                setCategory("All perspectives");
              }}
            >
              Show all perspectives <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </section>
      <FinalCTA />
    </div>
  );
}
export function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);
  const ref = usePageMotion();
  usePageMeta(
    article?.title ?? "Article not found",
    article?.excerpt ?? "Explore Surabhi’s journal.",
  );
  if (!article) return <NotFound />;
  return (
    <div ref={ref}>
      <section className="article-header section-pad">
        <Link to="/news" className="text-link">
          <ArrowLeft size={15} /> Back to the journal
        </Link>
        <Eyebrow>{article.category} / Demonstration article</Eyebrow>
        <h1 data-reveal>{article.title}</h1>
        <p>{article.excerpt}</p>
        <div className="article-meta">
          <span>Editorial demonstration</span>
          <span>{article.readTime}</span>
        </div>
      </section>
      <Photo
        src={article.image}
        alt={article.alt}
        className="article-feature-image"
        priority
      />
      <section className="article-body section-pad">
        <aside>
          <Eyebrow>A perspective</Eyebrow>
          <span>{article.category}</span>
          <span>{article.readTime}</span>
          <Link className="text-link" to="/news">
            All perspectives <ArrowUpRight size={15} />
          </Link>
        </aside>
        <div>
          <ContentNotice>
            This is an illustrative demonstration article, not an official
            announcement or evidence of an operating programme.
          </ContentNotice>
          {article.sections.map((s) => (
            <section
              className="article-copy-section"
              key={s.heading}
              data-reveal
            >
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}
          <div className="article-end">
            <span className="label-dot" />A shared future begins with thoughtful
            conversation.
          </div>
        </div>
      </section>
      <section className="related-news section-pad">
        <div className="section-heading">
          <div>
            <Eyebrow>Keep exploring</Eyebrow>
            <h2>
              Another
              <br />
              <em>perspective.</em>
            </h2>
          </div>
        </div>
        <div className="news-grid related-news-grid">
          {articles
            .filter((a) => a.id !== id)
            .map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
