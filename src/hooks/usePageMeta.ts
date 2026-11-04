import { useEffect } from "react";
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} — Surabhi`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", `${title} — Surabhi`);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://surabhi-collective-future.abhinanth1.chatgpt.site${window.location.pathname}`;
  }, [title, description]);
}
