import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function usePageMotion() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            y: 38,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 93%", once: true },
          });
        });
        gsap.utils
          .toArray<HTMLElement>("[data-image-reveal]")
          .forEach((element) => {
            gsap.from(element, {
              clipPath: "inset(12% 0% 0% 0%)",
              opacity: 0.35,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 92%", once: true },
            });
          });
        const heroLines = ref.current?.querySelectorAll(".hero-line > span");
        const heroDetails = ref.current?.querySelectorAll(".hero-detail");
        if (heroLines?.length)
          gsap.from(heroLines, {
            yPercent: 110,
            rotate: 2,
            duration: 1.2,
            stagger: 0.16,
            ease: "power4.out",
            delay: 0.15,
          });
        if (heroDetails?.length)
          gsap.from(heroDetails, {
            opacity: 0,
            y: 15,
            duration: 1,
            stagger: 0.12,
            delay: 0.65,
          });
        const hero = ref.current?.querySelector(".hero-image");
        if (hero)
          gsap.fromTo(
            hero,
            { scale: 1.08 },
            { scale: 1, duration: 2.5, ease: "power2.out" },
          );
      });
      media.add(
        "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.utils
            .toArray<HTMLElement>("[data-parallax]")
            .forEach((element) => {
              gsap.fromTo(
                element,
                { yPercent: -6 },
                {
                  yPercent: 6,
                  ease: "none",
                  scrollTrigger: {
                    trigger: element.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                },
              );
            });
        },
      );
    }, ref);
    let mounted = true;
    const refresh = () => {
      if (mounted) ScrollTrigger.refresh();
    };
    const imgs = ref.current?.querySelectorAll("img");
    imgs?.forEach((img) =>
      img.addEventListener("load", refresh, { once: true }),
    );
    document.fonts.ready.then(refresh);
    return () => {
      mounted = false;
      imgs?.forEach((img) => img.removeEventListener("load", refresh));
      media.revert();
      context.revert();
    };
  }, []);
  return ref;
}
