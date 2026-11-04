import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const navigation = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/activities", label: "Our Activities" },
  { to: "/projects", label: "Projects" },
  { to: "/membership", label: "Membership" },
  { to: "/news", label: "News & Insights" },
];
const logoAssets = import.meta.glob("/public/assets/surabhi-logo.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const officialLogo = logoAssets["/public/assets/surabhi-logo.png"] as
  | string
  | undefined;
export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      to="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Surabhi home"
    >
      {officialLogo ? (
        <img
          src={officialLogo}
          alt="Surabhi Multi State Co-operative Dairy Society Ltd."
        />
      ) : (
        <>
          <span className="brand-name">
            SURABHI<span className="brand-period">.</span>
          </span>
          <span className="brand-caption">
            CO-OPERATION. CULTIVATING POSSIBILITY.
          </span>
          <span className="brand-placeholder">Temporary wordmark</span>
        </>
      )}
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
    const onScroll = () => {
      setScrolled(window.scrollY > 35);
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)}`,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
          <Link to="/contact" className="header-contact">
            Let’s connect <ArrowUpRight size={16} />
          </Link>
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
          menuButton.current?.focus();
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
