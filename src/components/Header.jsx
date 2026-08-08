"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, ClipboardList, Menu, X } from "lucide-react";
import { navigation, site } from "@/data/siteData";
import { Container } from "@/components/shared/SiteUI";

const normalizeLabel = (label = "") =>
  label.toLowerCase().replace(/[^a-z0-9]/g, "");

const findHref = (labels, fallback) => {
  const targets = labels.map(normalizeLabel);
  const queue = [...navigation];

  while (queue.length) {
    const item = queue.shift();
    if (targets.includes(normalizeLabel(item.label))) {
      return item.href || fallback;
    }
    if (item.children) queue.push(...item.children);
  }

  return fallback;
};

const aboutColumns = [
  {
    title: "About Us",
    links: [
      {
        label: "Hatha Yogashala",
        href: findHref(["About", "About Us"], "/about"),
      },
      {
        label: "Our Founder",
        href: "/founder",
      },
      {
        label: "Our Teachers",
        href: findHref(["Our Teachers", "Our Team"], "/teachers"),
      },
      {
        label: "Our Certification",
        href: findHref(["Certification"], "/certification"),
      },
      {
        label: "Our Accommodation",
        href: findHref(["Accommodation"], "/accommodation"),
      },
      { label: "Payment", href: "/payment-policy" },
    ],
  },
  {
    title: "Extras",
    links: [
      { label: "Gallery", href: findHref(["Gallery"], "/gallery") },
      { label: "Blogs", href: findHref(["Blog", "Blogs"], "/blog") },
      { label: "Contact & Travel", href: "/contact#travel" },
    ],
  },
];

const yogaTtcColumns = [
  {
    title: "Yoga TTC",
    links: [
      {
        label: "100 Hour Yoga TTC",
        href: "/courses/100-hour-yoga-teacher-training-goa",
      },
      {
        label: "200 Hour Yoga TTC",
        href: "/courses/200-hour-yoga-teacher-training-goa",
      },
      {
        label: "300 Hour Yoga TTC",
        href: "/courses/300-hour-yoga-teacher-training-goa",
      },
    ],
  },
];

const hiddenMainItems = new Set([
  "home",
  "about",
  "aboutus",
  "yogattc",
  "yttc",
  "yogateachertraining",
  "yogateachertrainingcourse",
  "yogateachertrainingcourses",
  "gallery",
  "contact",
  "contactus",
]);

const navbarNavigation = [
  { label: "Home", href: "/" },
  { label: "About", columns: aboutColumns },
  { label: "Yoga TTC", columns: yogaTtcColumns },
  ...navigation.filter(
    (item) => !hiddenMainItems.has(normalizeLabel(item.label)),
  ),
];

const contactHref = findHref(["Contact", "Contact Us"], "/contact");

// Dropdown child link styling — "Blogs" matches the top-level navbar
// button styling (text-sm font-medium text-[var(--coral-dark)]/75),
// every other dropdown item keeps the muted sub-link styling.
const childLinkClass = (label) =>
  `group/link flex items-center gap-2 whitespace-nowrap rounded-lg px-2 py-2 transition-[color,background-color,transform] duration-300 ease-out hover:translate-x-1 hover:bg-[var(--cream)] hover:text-[var(--coral-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral-dark)]/30 motion-reduce:transform-none ${
    label === "Blogs"
      ? "text-[15px] font-medium text-[var(--coral-dark)]/75"
      : "text-[15px] text-[var(--muted)]"
  }`;

// Renders a dropdown child as a <button> when it's the Blogs entry,
// and as a normal <Link> (anchor) for everything else. Navigation for
// the button is handled with router.push since a <button> has no href.
function ChildLink({ child, onNavigate, router }) {
  const className = childLinkClass(child.label);
  const dot = (
    <span
      aria-hidden="true"
      className="size-1.5 shrink-0 rounded-full bg-[var(--muted)]/40 transition-all duration-300 ease-out group-hover/link:scale-0 group-hover/link:opacity-0"
    />
  );
  const underline = (
    <span
      className="h-px w-0 bg-[var(--coral-dark)] transition-[width] duration-300 ease-out group-hover/link:w-3"
      aria-hidden="true"
    />
  );

  if (child.label === "Blogs") {
    return (
      <button
        type="button"
        onClick={() => {
          onNavigate?.();
          router.push(child.href);
        }}
        className={`w-full text-left ${className}`}
      >
        {dot}
        {underline}
        {child.label}
      </button>
    );
  }

  return (
    <Link href={child.href} onClick={onNavigate} className={className}>
      {dot}
      {underline}
      {child.label}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [openGroup, setOpenGroup] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    let scrollFrame = null;
    const updateScrollState = () => {
      setScrolled(window.scrollY > 12);
      scrollFrame = null;
    };
    const onScroll = () => {
      if (scrollFrame !== null) return;
      scrollFrame = window.requestAnimationFrame(updateScrollState);
    };
    const onPointer = (event) => {
      if (!navRef.current?.contains(event.target)) setOpenGroup(null);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setOpenGroup(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (mobileOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!mobileOpen && dialog.open) {
      dialog.close();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileGroup(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 relative transition-all duration-300 ${
          scrolled
            ? "bg-[var(--cream)]/95 shadow-[0_2px_12px_rgba(0,0,0,0.05)] backdrop-blur-xl"
            : "bg-[var(--cream)]"
        }`}
      >
        {/* Thin scroll line */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[var(--coral-dark)]/15 transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-[var(--brown)]/20 focus:bg-[var(--cream)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--brown)]"
          href="#main-content"
        >
          Skip to content
        </a>

        <Container>
          <div
            ref={navRef}
            className="flex h-16 items-center justify-between gap-6 md:h-[76px] xl:gap-10"
          >
            <Link
              className="inline-flex shrink-0 items-center rounded-xl xl:mr-6 2xl:mr-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral-dark)]/35"
              href="/"
              aria-label={`${site.name} home`}
            >
              <Image
                src="/images/logo.png"
                alt={`${site.name} logo`}
                width={175}
                height={70}
                preload
                className="h-12 w-auto object-contain md:h-14"
              />
            </Link>

            <nav
              className="hidden items-center gap-0.5 xl:flex"
              aria-label="Main navigation"
            >
              {navbarNavigation.map((item) =>
                item.columns || item.children ? (
                  <div
                    className="group relative"
                    key={item.label}
                    onMouseEnter={() => setOpenGroup(item.label)}
                    onMouseLeave={() => setOpenGroup(null)}
                    onFocus={() => setOpenGroup(item.label)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setOpenGroup(null);
                      }
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={openGroup === item.label}
                      aria-controls={`menu-${item.label.replaceAll(" ", "-")}`}
                      onClick={() =>
                        setOpenGroup(
                          openGroup === item.label ? null : item.label,
                        )
                      }
                      className="relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2.5 font-sans text-[15px] font-medium leading-none text-black/85 transition duration-200 after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--sage)] after:transition-transform after:duration-200 hover:bg-[var(--cream)] hover:text-black hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]/40"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        size={15}
                        className={`transition-transform duration-200 ${
                          openGroup === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      id={`menu-${item.label.replaceAll(" ", "-")}`}
                      className={`absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2 origin-top rounded-2xl border border-[var(--coral-dark)]/10 bg-white p-7 shadow-[0_18px_45px_rgba(37,57,44,0.14)] transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:-top-2 before:left-0 before:h-3 before:w-full motion-reduce:transition-none ${
                        openGroup === item.label
                          ? "visible pointer-events-auto translate-y-0 scale-100 opacity-100"
                          : "invisible pointer-events-none translate-y-2 scale-[0.98] opacity-0"
                      }`}
                    >
                      {item.columns ? (
                        <div
                          className={`grid ${
                            item.columns.length > 1
                              ? "min-w-[560px] grid-cols-2 gap-x-14"
                              : "min-w-[280px] grid-cols-1"
                          }`}
                        >
                          {item.columns.map((column) => (
                            <div key={column.title}>
                              <p className="mb-3 whitespace-nowrap text-[13.5px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                                {column.title}
                              </p>
                              <div className="space-y-0.5">
                                {column.links.map((child) => (
                                  <ChildLink
                                    key={child.href}
                                    child={child}
                                    router={router}
                                    onNavigate={() => setOpenGroup(null)}
                                  />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="min-w-56">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenGroup(null)}
                              className="group/link flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-[15px] text-[var(--muted)] transition-[color,background-color,transform] duration-300 ease-out hover:translate-x-1 hover:bg-[var(--cream)] hover:text-[var(--coral-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral-dark)]/30 motion-reduce:transform-none"
                            >
                              <span
                                aria-hidden="true"
                                className="size-1.5 shrink-0 rounded-full bg-[var(--muted)]/40 transition-all duration-300 ease-out group-hover/link:scale-0 group-hover/link:opacity-0"
                              />
                              <span
                                className="h-px w-0 bg-[var(--coral-dark)] transition-[width] duration-300 ease-out group-hover/link:w-3"
                                aria-hidden="true"
                              />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative whitespace-nowrap rounded-full px-3 py-2.5 font-sans text-[15px] font-medium leading-none text-black/85 transition duration-200 after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--sage)] after:transition-transform after:duration-200 hover:bg-[var(--cream)] hover:text-black hover:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href={contactHref}
                className="relative isolate hidden items-center justify-center overflow-hidden whitespace-nowrap rounded-full border border-[var(--coral-dark)] px-4 py-2.5 text-[13.5px] font-semibold uppercase tracking-[0.12em] text-[var(--coral-dark)] transition-[color,border-color,transform] duration-300 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-[var(--coral-dark)] before:transition-transform before:duration-300 before:ease-out hover:-translate-y-0.5 hover:border-[var(--coral-dark)] hover:text-white hover:before:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral-dark)]/30 motion-reduce:transform-none xl:inline-flex"
              >
                Contact
              </Link>
              <Link
                href="/apply"
                aria-label="Reserve your spot"
                className="group relative isolate hidden items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-[var(--coral)] bg-[var(--coral)] px-5 py-2.5 text-[13.5px] font-semibold uppercase tracking-[0.12em] !text-white shadow-[0_8px_20px_rgba(47,79,62,0.24)] transition-all duration-300 ease-out before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:rounded-full before:bg-white before:transition-transform before:duration-300 before:ease-out hover:-translate-y-0.5 hover:!text-black hover:border-white hover:shadow-[0_12px_26px_rgba(0,0,0,0.18)] hover:before:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--coral)]/40 focus-visible:ring-offset-2 xl:inline-flex"
              >
                <ClipboardList
                  aria-hidden="true"
                  strokeWidth={1.9}
                  className="size-4 shrink-0 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110"
                />

                <span className="relative transition-transform duration-300 group-hover:translate-x-0.5">
                  Reserve Your Spot
                </span>
              </Link>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full border border-[var(--coral-dark)]/15 bg-[var(--cream)] text-[var(--coral-dark)] transition duration-200 hover:border-[var(--sage)] hover:bg-[var(--cream)] hover:text-[var(--sage)] xl:hidden"
                aria-label="Open navigation"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
              >
                <Menu aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </Container>

        <dialog
          ref={dialogRef}
          className="m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-[var(--brown)]/30 backdrop:backdrop-blur-sm open:animate-none"
          onClose={closeMobile}
          onCancel={(event) => {
            event.preventDefault();
            closeMobile();
          }}
        >
          <div className="flex h-dvh flex-col bg-[var(--cream)] text-[var(--brown)]">
            <div className="flex items-center justify-between border-b border-[var(--brown)]/10 px-5 py-4">
              <Image
                src="/images/logo.png"
                alt={`${site.name} logo`}
                width={130}
                height={52}
                className="h-11 w-auto object-contain"
              />
              <button
                type="button"
                aria-label="Close navigation"
                onClick={closeMobile}
                className="grid size-9 place-items-center rounded-md border border-[var(--brown)]/15 text-[var(--brown)]/70 transition duration-150 hover:border-[var(--sage)] hover:text-[var(--sage)]"
              >
                <X className="size-4.5" />
              </button>
            </div>

            <nav
              className="flex-1 overflow-y-auto px-3 py-4"
              aria-label="Mobile navigation"
            >
              {navbarNavigation.map((item) =>
                item.columns || item.children ? (
                  <div className="mb-1" key={item.label}>
                    <button
                      type="button"
                      aria-expanded={mobileGroup === item.label}
                      onClick={() =>
                        setMobileGroup(
                          mobileGroup === item.label ? null : item.label,
                        )
                      }
                      className="flex w-full items-center justify-between whitespace-nowrap rounded-xl px-3 py-3 text-left text-[15px] text-[var(--brown)] transition hover:bg-[var(--cream)]"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-4 transition-transform duration-200 ${
                          mobileGroup === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileGroup === item.label && (
                      <div className="ml-3 border-l border-[var(--coral-dark)]/20 py-1 pl-3">
                        {item.columns
                          ? item.columns.map((column) => (
                              <div className="mb-3" key={column.title}>
                                <p className="px-3 pb-1 pt-2 text-[13.5px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                                  {column.title}
                                </p>
                                {column.links.map((child) => (
                                  <ChildLink
                                    key={child.href}
                                    child={child}
                                    router={router}
                                    onNavigate={closeMobile}
                                  />
                                ))}
                              </div>
                            ))
                          : item.children.map((child) => (
                              <Link
                                href={child.href}
                                key={child.href}
                                onClick={closeMobile}
                                className="block whitespace-nowrap rounded-lg px-3 py-2.5 text-[15px] text-[var(--brown)]/70 transition duration-150 hover:bg-[var(--cream)] hover:text-[var(--coral-dark)]"
                              >
                                {child.label}
                              </Link>
                            ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    key={item.href}
                    onClick={closeMobile}
                    className="block whitespace-nowrap rounded-xl px-3 py-3 text-[15px] text-[var(--brown)] transition hover:bg-[var(--cream)]"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="flex flex-col gap-2.5 border-t border-[var(--brown)]/10 p-4">
              <Link
                className="inline-flex items-center justify-center rounded-full border border-[var(--coral-dark)] px-4 py-3 text-[13.5px] font-semibold uppercase tracking-[0.12em] text-[var(--coral-dark)] transition duration-200 hover:border-[var(--coral-dark)] hover:bg-[var(--cream)]"
                href={contactHref}
                onClick={closeMobile}
              >
                Contact
              </Link>
              <Link
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-4 py-3 text-[13.5px] font-semibold uppercase tracking-[0.12em] text-white transition duration-200 hover:bg-[var(--coral-dark)] hover:text-black"
                href="/apply"
                onClick={closeMobile}
              >
                <ClipboardList
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-300 group-hover:-rotate-3"
                  strokeWidth={1.9}
                />
                Reserve Your Spot
              </Link>
            </div>
          </div>
        </dialog>
      </header>
    </>
  );
}
