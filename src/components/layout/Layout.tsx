import { Suspense, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout() {
  const { pathname, hash, key } = useLocation();
  const smoothScroll = useRef<Lenis | undefined>(undefined);
  useLayoutEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 900px) and (pointer: fine)");
    let lenis: Lenis | undefined;
    const tick = (time: number) => lenis?.raf(time * 1000);
    const configure = () => {
      lenis?.destroy();
      lenis = undefined;
      smoothScroll.current = undefined;
      gsap.ticker.remove(tick);
      if (!query.matches && desktop.matches) {
        lenis = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          syncTouch: false,
          anchors: true,
        });
        smoothScroll.current = lenis;
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);
      }
    };
    configure();
    query.addEventListener("change", configure);
    desktop.addEventListener("change", configure);
    return () => {
      query.removeEventListener("change", configure);
      desktop.removeEventListener("change", configure);
      lenis?.destroy();
      smoothScroll.current = undefined;
      gsap.ticker.remove(tick);
    };
  }, []);
  useLayoutEffect(() => {
    if (!hash) {
      if (smoothScroll.current)
        smoothScroll.current.scrollTo(0, { immediate: true, force: true });
      else window.scrollTo({ top: 0, behavior: "instant" });
    }
    let frame = 0;
    let observer: MutationObserver | undefined;
    const findAnchor = () => {
      const target = hash && document.getElementById(hash.slice(1));
      if (!target) return false;
      observer?.disconnect();
      frame = window.requestAnimationFrame(() => {
        if (smoothScroll.current) {
          smoothScroll.current.resize();
          // Lenis already respects the document's scroll-padding-top.
          smoothScroll.current.scrollTo(target, { offset: 0, force: true });
        } else
          window.scrollTo({
            top: window.scrollY + target.getBoundingClientRect().top - 100,
            behavior: "instant",
          });
        ScrollTrigger.refresh();
      });
      return true;
    };
    if (hash && !findAnchor()) {
      observer = new MutationObserver(findAnchor);
      observer.observe(document.getElementById("main-content")!, {
        childList: true,
        subtree: true,
      });
    }
    ScrollTrigger.refresh();
    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [pathname, hash, key]);
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="route-loading" role="status">
              <span className="eyebrow">Surabhi</span>
              <p>Opening a new perspective…</p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
