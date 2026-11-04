import { Eyebrow, ArrowLink } from "../components/ui/Elements";
import { usePageMeta } from "../hooks/usePageMeta";
export default function NotFound() {
  usePageMeta(
    "Page not found",
    "This page could not be found. Explore Surabhi’s story, objectives, and proposed initiatives.",
  );
  return (
    <section className="not-found section-pad">
      <Eyebrow>404 / A different path</Eyebrow>
      <h1>
        There’s more
        <br />
        <em>to explore.</em>
      </h1>
      <p>
        This page could not be found. Let’s return to a familiar place and
        continue from there.
      </p>
      <ArrowLink to="/" variant="solid">
        Back to Surabhi
      </ArrowLink>
      <ArrowLink to="/projects">Explore our initiatives</ArrowLink>
    </section>
  );
}
