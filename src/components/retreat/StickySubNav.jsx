"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StickySubNav({ links = [], ariaLabel = "Section navigation" }) {
  const [activeId, setActiveId] = useState(links[0]?.id || "");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const navContainerRef = useRef(null);
  const isClickingRef = useRef(false);

  const checkScrollability = useCallback(() => {
    const el = navContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScrollability();
    const el = navContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollability, { passive: true });
      window.addEventListener("resize", checkScrollability);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability, links]);

  useEffect(() => {
    if (!links || links.length === 0) return;

    const handleScroll = () => {
      if (isClickingRef.current) return;

      const headerOffset = 180; // main header + subnav + buffer
      const scrollPosition = window.scrollY + headerOffset;

      let currentId = links[0]?.id || "";

      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            currentId = link.id;
          }
        }
      }

      // Check if at bottom of page -> activate last item
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        currentId = links[links.length - 1]?.id || currentId;
      }

      setActiveId((prev) => {
        if (prev !== currentId) {
          if (navContainerRef.current) {
            const activeEl = navContainerRef.current.querySelector(
              `a[href="#${currentId}"]`
            );
            if (activeEl) {
              activeEl.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
              });
            }
          }
          return currentId;
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveId(id);
    isClickingRef.current = true;

    const targetEl = document.getElementById(id);
    if (targetEl) {
      const headerOffset = 140;
      const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });

      if (history.pushState) {
        history.pushState(null, "", `#${id}`);
      }
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  const scrollNav = (direction) => {
    const el = navContainerRef.current;
    if (!el) return;
    const scrollAmount = direction === "left" ? -240 : 240;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  if (!links || links.length === 0) return null;

  return (
    <nav className="retreat-stickynav" aria-label={ariaLabel}>
      <div className="retreat-stickynav-wrapper container">
        {canScrollLeft && (
          <button
            type="button"
            className="retreat-stickynav-arrow retreat-stickynav-arrow-left"
            onClick={() => scrollNav("left")}
            aria-label="Scroll navigation left"
          >
            <ChevronLeft size={16} aria-hidden="true" />
          </button>
        )}

        <div className="retreat-stickynav-inner" ref={navContainerRef}>
          {links.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={isActive ? "active" : ""}
                data-active={isActive ? "true" : "false"}
                aria-current={isActive ? "true" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {canScrollRight && (
          <button
            type="button"
            className="retreat-stickynav-arrow retreat-stickynav-arrow-right"
            onClick={() => scrollNav("right")}
            aria-label="Scroll navigation right"
          >
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        )}
      </div>
    </nav>
  );
}
