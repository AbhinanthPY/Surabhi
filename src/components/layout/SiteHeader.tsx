import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import gsap from "gsap";

export const navigation = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/activities", label: "Our Activities" },
  { to: "/projects", label: "Projects" },
  { to: "/membership", label: "Membership" },
  { to: "/news", label: "News & Insights" },
];
export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link to="/" className={`brand brand-official ${footer ? 'brand-footer' : ''}`} aria-label="Surabhi home">
      <img src="/assets/surabhi-logo-transparent.png" alt="Surabhi Multi State Co-operative Dairy Society Ltd." width={1437} height={1094} decoding="async"/>
    </Link>
  );
}
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  useEffect(() => {
    let frame = 0;
    let last = window.scrollY > 35;
    setScrolled(last);
    const update = () => {
      const next = window.scrollY > 35;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
      const progress =
        window.scrollY /
        Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${Math.min(1, Math.max(0, progress))}`,
      );
      frame = 0;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    let animation: gsap.Context | undefined;
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        animation = gsap.context(() => {
          gsap.fromTo(
            "nav a",
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              stagger: 0.055,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
          );
        }, dialog);
      }
    } else {
      dialog.current?.close();
    }
    return () => {
      animation?.revert();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1100px)");
    const closeDesktop = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", closeDesktop);
    return () => query.removeEventListener("change", closeDesktop);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""} ${isHome ? "header-home" : "header-inner"}`}
      >
        <div className="header-inner-container">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <NavLink to="/contact" className="header-contact">
            Let’s connect <ArrowUpRight size={16} aria-hidden="true" />
          </NavLink>
          <button
            ref={menuButton}
            className="menu-toggle"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open navigation"
          >
            <Menu size={25} strokeWidth={1.4} />
          </button>
        </div>
      </header>
      <dialog
        id="mobile-menu"
        className="mobile-menu"
        ref={dialog}
        onCancel={() => setOpen(false)}
        onClose={() => {
          setOpen(false);
          menuButton.current?.focus({ preventScroll: true });
        }}
      >
        <div className="mobile-menu-top">
          <Brand />
          <button
            className="menu-close"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <X size={28} strokeWidth={1.3} />
          </button>
        </div>
        <span className="eyebrow">Explore our world</span>
        <nav aria-label="Mobile navigation">
          {[...navigation, { to: "/contact", label: "Contact" }].map(
            (item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
              >
                <span className="menu-number">0{i + 1}</span>
                {item.label}
                <ArrowUpRight size={24} />
              </NavLink>
            ),
          )}
        </nav>
        <div className="mobile-menu-bottom">
          Rooted in co-operation.
          <br />
          <span>Kerala & Tamil Nadu, India</span>
        </div>
      </dialog>
    </>
  );
}
