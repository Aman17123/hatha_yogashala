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

    let raf = 0;
    let lastRevealedId = "";

    // Keep the active link visible inside the horizontally scrollable bar.
    // Scrolls instantly and only when the link is not already fully in view,
    // so it never causes the page/jitter that `scrollIntoView` with smooth
    // behavior used to introduce.
    const revealActiveInNav = (activeId) => {
      if (activeId === lastRevealedId) return;
      const navContainer = navContainerRef.current;
      if (!navContainer) return;
      const activeEl = navContainer.querySelector(`a[href="#${activeId}"]`);
      if (!activeEl) return;

      const containerRect = navContainer.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();

      if (elRect.left < containerRect.left || elRect.right > containerRect.right) {
        const offset =
          elRect.left -
          containerRect.left -
          (containerRect.width - elRect.width) / 2;
        navContainer.scrollBy({ left: offset, behavior: "auto" });
        requestAnimationFrame(checkScrollability);
      }
      lastRevealedId = activeId;
    };

    const computeActive = () => {
      if (isClickingRef.current) return;

      const viewportMid = window.innerHeight / 2;
      const scrollPosition = window.scrollY + viewportMid;

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

      // If at the bottom of the page, always activate the last item
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        currentId = links[links.length - 1]?.id || currentId;
      }

      if (lastRevealedId !== currentId) revealActiveInNav(currentId);
      setActiveId((prev) => (prev === currentId ? prev : currentId));
    };

    const handleScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        computeActive();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    computeActive();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [links, checkScrollability]);

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

    // Scroll ONLY the inner nav container horizontally without affecting window scroll
    const navContainer = navContainerRef.current;
    if (navContainer) {
      const activeEl = navContainer.querySelector(`a[href="#${id}"]`);
      if (activeEl) {
        const containerRect = navContainer.getBoundingClientRect();
        const elRect = activeEl.getBoundingClientRect();
        const offset =
          elRect.left -
          containerRect.left -
          (containerRect.width - elRect.width) / 2;
        navContainer.scrollBy({ left: offset, behavior: "smooth" });
        setTimeout(checkScrollability, 300);
      }
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
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
