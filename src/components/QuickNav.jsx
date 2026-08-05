"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, Grid, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "courses", label: "TTC Courses" },
  { id: "retreats", label: "Retreats" },
  { id: "why-us", label: "Why Us" },
  { id: "residential-experience", label: "Accommodation" },
  { id: "google-reviews", label: "Reviews" },
  { id: "enrolment-questions", label: "FAQs" },
  { id: "location", label: "Location" },
];

export default function QuickNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(NAV_ITEMS[0].id);
  const rootRef = useRef(null);

  // Scroll-spy: highlight whichever section crosses the middle band of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-38% 0px -58% 0px", threshold: 0 },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close on Escape or outside click while the panel is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div className="quick-nav" data-open={open} ref={rootRef}>
      <button
        type="button"
        className="quick-nav-tab"
        aria-expanded={open}
        aria-controls="quick-nav-panel"
        aria-label={open ? "Close quick navigation" : "Open quick navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <Grid aria-hidden="true" />
        <span className="quick-nav-tab-label">Contents</span>
      </button>

      <nav
        id="quick-nav-panel"
        className="quick-nav-panel"
        aria-label="Quick navigation"
        aria-hidden={!open}
      >
        <div className="quick-nav-head">
          <span className="quick-nav-head-title">
            <Grid aria-hidden="true" />
            Quick Navigation
          </span>
          <button
            type="button"
            className="quick-nav-close"
            aria-label="Close quick navigation"
            onClick={() => setOpen(false)}
          >
            <X aria-hidden="true" />
          </button>
        </div>

        <ul className="quick-nav-list">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`quick-nav-link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="quick-nav-dot" aria-hidden="true" />
                  <span className="quick-nav-label">{item.label}</span>
                  <ChevronRight className="quick-nav-chevron" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
