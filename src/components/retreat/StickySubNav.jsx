"use client";

import { useEffect, useState, useRef } from "react";

export default function StickySubNav({ links = [], ariaLabel = "Section navigation" }) {
  const [activeId, setActiveId] = useState(links[0]?.id || "");
  const navContainerRef = useRef(null);
  const isClickingRef = useRef(false);

  useEffect(() => {
    if (!links || links.length === 0) return;

    const handleScroll = () => {
      if (isClickingRef.current) return;

      const headerOffset = 160; // main header (76px) + subnav (~50px) + breathing buffer
      const scrollPosition = window.scrollY + headerOffset;

      let currentId = links[0]?.id || "";

      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
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
          // Auto-scroll the active pill into view inside the horizontal nav bar
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
    // Run once on mount
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
      targetEl.scrollIntoView({ behavior: "smooth" });
      if (history.pushState) {
        history.pushState(null, "", `#${id}`);
      }
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <nav className="retreat-stickynav" aria-label={ariaLabel}>
      <div className="container retreat-stickynav-inner" ref={navContainerRef}>
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
    </nav>
  );
}
