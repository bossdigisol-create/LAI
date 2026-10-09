"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import { ButtonLink } from "./button";
import { ArrowRight, ChevronDown, Close, Mail, Menu, ServiceIcon } from "./icons";

// `services` is a trimmed list (slug, title, summary, icon) passed from the server layout so the
// full service copy never ships to the browser.
export default function SiteHeader({ nav, services, speaking, email, emailDisplay }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef(null);
  const hoverTimer = useRef(null);

  // Solid background once the page scrolls.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 12));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Escape closes any open menu; clicking outside closes the services panel.
  useEffect(() => {
    if (!menuOpen && !mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMobileOpen(false);
      }
    };
    const onPointer = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menuOpen, mobileOpen]);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    window.__lenis?.stop();
    return () => {
      root.style.overflow = previous;
      window.__lenis?.start();
    };
  }, [mobileOpen]);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  const openWithIntent = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setMenuOpen(true), 80);
  };
  const closeWithIntent = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setMenuOpen(false), 180);
  };
  const closeAll = () => {
    clearTimeout(hoverTimer.current);
    setMenuOpen(false);
    setMobileOpen(false);
  };

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));
  const solid = scrolled || menuOpen;

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50" style={{ viewTransitionName: "site-header" }}>
      <div
        className={`border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
          mobileOpen
            ? "border-ink/[0.06] bg-pearl"
            : solid
              ? "border-ink/[0.06] bg-pearl shadow-[0_10px_30px_-20px_rgb(23_26_24/0.25)]"
              : "border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link
            href="/"
            onClick={closeAll}
            className="relative z-10 -m-2 shrink-0 rounded-lg p-2 text-brand-500 transition-opacity hover:opacity-85"
            aria-label="LAI Healthcare Solutions, home"
          >
            <Logo className="h-7 w-auto sm:h-8" title="LAI Healthcare Solutions" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.hasMenu ? (
                <div
                  key={item.href}
                  className="relative flex items-center"
                  onPointerEnter={(e) => e.pointerType === "mouse" && openWithIntent()}
                  onPointerLeave={(e) => e.pointerType === "mouse" && closeWithIntent()}
                >
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className={`rounded-full py-2 pl-4 pr-1 text-[0.94rem] font-medium transition-colors hover:text-brand-600 ${
                      isActive(item.href) ? "text-brand-600" : "text-ink/80"
                    }`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-expanded={menuOpen}
                    aria-controls="services-menu"
                    className="mr-2 grid h-8 w-8 place-items-center rounded-full text-ink/70 transition-colors hover:bg-brand-50 hover:text-brand-600"
                  >
                    <span className="sr-only">{menuOpen ? "Hide" : "Show"} services menu</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeAll}
                  className={`relative rounded-full px-4 py-2 text-[0.94rem] font-medium transition-colors hover:text-brand-600 ${
                    isActive(item.href) ? "text-brand-600" : "text-ink/80"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="/contact" size="sm" onClick={closeAll}>
              Book a consultation
            </ButtonLink>
          </div>

          <button
            type="button"
            className="relative z-10 -mr-2 grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-brand-50 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop services panel */}
      <div
        id="services-menu"
        onPointerEnter={(e) => e.pointerType === "mouse" && openWithIntent()}
        onPointerLeave={(e) => e.pointerType === "mouse" && closeWithIntent()}
        className={`absolute inset-x-0 top-full hidden transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:block ${
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="container-x">
          <div className="mt-3 grid grid-cols-[1.6fr_1fr] gap-3 rounded-[1.75rem] border border-ink/[0.06] bg-white p-3 shadow-lift">
            <ul className="grid grid-cols-2 gap-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    onClick={closeAll}
                    className="group flex h-full gap-4 rounded-2xl p-4 transition-colors hover:bg-brand-50"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      <ServiceIcon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-medium leading-snug text-ink">{s.title}</span>
                      <span className="mt-1 line-clamp-2 block text-sm leading-relaxed text-mist-600">
                        {s.summary}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-brand-950 p-6 text-pearl">
              <div aria-hidden="true" className="band-azure opacity-20" />
              <div className="relative">
                <p className="text-eyebrow text-azure-300">{speaking.shortTitle}</p>
                <p className="mt-3 font-display text-2xl leading-tight">{speaking.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-pearl/75">{speaking.summary}</p>
              </div>
              <div className="relative mt-6 flex flex-col gap-2">
                <Link
                  href="/speaking"
                  onClick={closeAll}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-azure-300 hover:text-white"
                >
                  Explore speaking topics
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  onClick={closeAll}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-pearl/80 hover:text-white"
                >
                  View all services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        data-lenis-prevent
        inert={!mobileOpen}
        className={`fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto overscroll-contain bg-pearl transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          mobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex min-h-full flex-col pb-10 pt-4">
          <ul className="divide-y divide-ink/[0.07] border-b border-ink/[0.07]">
            {nav.map((item) =>
              item.hasMenu ? (
                <li key={item.href} className="py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className="py-4 font-display text-[1.75rem] leading-none text-ink"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services"
                      className="grid h-11 w-11 place-items-center rounded-full bg-brand-50 text-brand-600"
                    >
                      <span className="sr-only">{mobileServicesOpen ? "Hide" : "Show"} services</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  <ul
                    id="mobile-services"
                    hidden={!mobileServicesOpen}
                    className="mb-4 grid gap-1 rounded-2xl bg-white p-2 shadow-soft"
                  >
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={closeAll}
                          className="flex items-center gap-3 rounded-xl p-3 text-[0.95rem] font-medium text-ink hover:bg-brand-50"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                            <ServiceIcon name={s.icon} className="h-[1.1rem] w-[1.1rem]" />
                          </span>
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className={`block py-5 font-display text-[1.75rem] leading-none ${
                      isActive(item.href) ? "text-brand-600" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <ButtonLink href="/contact" size="lg" onClick={closeAll}>
              Book a consultation
            </ButtonLink>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 py-3 text-sm font-medium text-mist-600"
            >
              <Mail className="h-4 w-4" />
              {emailDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
