import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageMotion() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          mobile: "(max-width: 899px)",
          desktop: "(min-width: 900px)",
        },
        (scope) => {
          if (scope.conditions?.reduce) return;
          const mobile = !!scope.conditions?.mobile;
          root
            .querySelectorAll<HTMLElement>("[data-reveal-lines]")
            .forEach((heading) => {
              gsap.from(heading.querySelectorAll(".reveal-line-content"), {
                yPercent: mobile ? 80 : 108,
                rotation: mobile ? 0 : 0.65,
                transformOrigin: "left bottom",
                duration: mobile ? 0.7 : 1.15,
                stagger: mobile ? 0.055 : 0.11,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: heading,
                  start: mobile ? "top 96%" : "top 91%",
                  once: true,
                },
              });
            });
          root
            .querySelectorAll<HTMLElement>("[data-reveal]")
            .forEach((element) => {
              gsap.from(element, {
                y: mobile ? 18 : 32,
                opacity: 0,
                duration: mobile ? 0.6 : 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 94%",
                  once: true,
                },
              });
            });
          root
            .querySelectorAll<HTMLElement>("[data-image-reveal]")
            .forEach((element) => {
              gsap.from(element, {
                clipPath: mobile ? "inset(0 0 7% 0)" : "inset(0 0 18% 0)",
                duration: mobile ? 0.75 : 1.25,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 93%",
                  once: true,
                },
              });
            });
          const hero = root.querySelector(".hero");
          if (hero) {
            gsap
              .timeline({ defaults: { ease: "power4.out" } })
              .from(
                hero.querySelectorAll(".hero-line > span"),
                {
                  yPercent: 105,
                  rotation: mobile ? 0 : 1,
                  duration: mobile ? 0.95 : 1.35,
                  stagger: 0.12,
                },
                0.08,
              )
              .from(
                hero.querySelectorAll(".hero-detail"),
                {
                  opacity: 0,
                  y: mobile ? 10 : 17,
                  duration: 0.85,
                  stagger: 0.07,
                },
                0.25,
              )
              .fromTo(
                hero.querySelector(".hero-image"),
                { scale: 1.045 },
                { scale: 1, duration: 1.9, ease: "power2.out" },
                0,
              );
            if (!mobile) {
              gsap.to(hero.querySelector(".hero-content"), {
                y: 95,
                opacity: 0.25,
                ease: "none",
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "bottom top",
                  scrub: 0.65,
                },
              });
              gsap.to(hero.querySelector(".hero-image img"), {
                yPercent: 9,
                scale: 1.07,
                ease: "none",
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "bottom top",
                  scrub: 0.8,
                },
              });
            }
          }
          if (!mobile)
            root
              .querySelectorAll<HTMLElement>("[data-parallax]")
              .forEach((element) => {
                // <picture> uses display:contents; its .photo parent supplies real geometry.
                gsap.fromTo(
                  element,
                  { yPercent: -5 },
                  {
                    yPercent: 5,
                    ease: "none",
                    scrollTrigger: {
                      trigger: element.closest(".photo"),
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.7,
                    },
                  },
                );
              });
          const timeline = root.querySelector(".timeline");
          const track = root.querySelector(".timeline-progress");
          if (timeline && track)
            gsap.fromTo(
              track,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: timeline,
                  start: "top 72%",
                  end: "bottom 65%",
                  scrub: 0.4,
                },
              },
            );
        },
      );
    }, root);
    let mounted = true;
    let frame = 0;
    const refresh = () => {
      if (mounted) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          if (mounted) ScrollTrigger.refresh();
        });
      }
    };
    const images = root.querySelectorAll("img");
    images.forEach((img) => img.addEventListener("load", refresh));
    document.fonts.ready.then(refresh);
    return () => {
      mounted = false;
      cancelAnimationFrame(frame);
      images.forEach((img) => img.removeEventListener("load", refresh));
      media.revert();
      context.revert();
    };
  }, []);
  return ref;
}
