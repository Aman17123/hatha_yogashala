"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Search,
  X,
} from "lucide-react";

export function Accordion({ items, initialOpen = 0 }) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = open === index;
        const id = `accordion-panel-${index}-${item.question || item.title}`.replace(/\W+/g, "-");
        return (
          <div className="accordion-item" key={item.question || item.title}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                {item.question || item.title}
                <ChevronDown aria-hidden="true" size={20} />
              </button>
            </h3>
            <div id={id} className="accordion-panel" data-open={isOpen} hidden={!isOpen}>
              <div>
                <p>{item.answer || item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function HorizontalScroller({ children, label = "items" }) {
  const rowRef = useRef(null);

  function scroll(direction) {
    rowRef.current?.scrollBy({
      left: direction * Math.min(rowRef.current.clientWidth * 0.85, 720),
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="scroller-controls">
        <button type="button" onClick={() => scroll(-1)} aria-label={`Previous ${label}`}>
          <ArrowLeft aria-hidden="true" size={19} />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label={`Next ${label}`}>
          <ArrowRight aria-hidden="true" size={19} />
        </button>
      </div>
      <div className="horizontal-scroller" ref={rowRef} tabIndex="0">
        {children}
      </div>
    </div>
  );
}

export function Gallery({ items, filters = true }) {
  const categories = ["All", ...new Set(items.map((item) => item.category))];
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);

  const visible = category === "All" ? items : items.filter((item) => item.category === category);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected !== null && !dialog.open) dialog.showModal();
    if (selected === null && dialog.open) dialog.close();
    document.body.style.overflow = selected === null ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  function move(offset) {
    setSelected((current) => (current + offset + visible.length) % visible.length);
  }

  return (
    <>
      {filters && (
        <div className="filter-row" aria-label="Gallery categories">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              data-active={category === item}
              onClick={() => {
                setCategory(item);
                setSelected(null);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="gallery-grid">
        {visible.map((item, index) => (
          <button
            type="button"
            key={`${item.caption}-${index}`}
            className="gallery-item"
            onClick={() => setSelected(index)}
            aria-label={`Open image: ${item.caption}`}
          >
            <Image src={item.src} alt={item.caption} fill sizes="(max-width: 768px) 50vw, 33vw" />
            <span>{item.caption}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setSelected(null)}
        onCancel={(event) => {
          event.preventDefault();
          setSelected(null);
        }}
      >
        {selected !== null && (
          <div>
            <button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image">
              <X aria-hidden="true" />
            </button>
            <div className="lightbox-image">
              <Image
                src={visible[selected].src}
                alt={visible[selected].caption}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p>{visible[selected].caption} · Editorial placeholder</p>
            <div className="lightbox-controls">
              <button type="button" onClick={() => move(-1)} aria-label="Previous image">
                <ArrowLeft aria-hidden="true" />
              </button>
              <button type="button" onClick={() => move(1)} aria-label="Next image">
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

export function BlogExplorer({ posts }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const results = useMemo(
    () =>
      posts.filter(
        (post) =>
          (category === "All" || post.category === category) &&
          `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [category, posts, query],
  );

  return (
    <>
      <div className="blog-tools">
        <label>
          <span className="sr-only">Search articles</span>
          <Search aria-hidden="true" size={18} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
          />
        </label>
        <div className="filter-row">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              data-active={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="blog-grid">
        {results.map((post) => (
          <article className="card overflow-hidden" key={post.slug}>
            <div className="blog-card-image">
              <Image src={post.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" />
              <span className="placeholder-badge">Editorial placeholder</span>
            </div>
            <div className="card-body">
              <p className="eyebrow plain">{post.category} · {post.readingTime}</p>
              <h2 className="text-2xl">{post.title}</h2>
              <p className="mt-3 text-muted">{post.excerpt}</p>
              <Link className="button button-text mt-5" href={`/blog/${post.slug}`}>
                Read article <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      {!results.length && <p className="empty-state">No articles match this search.</p>}
    </>
  );
}

export function PricingTabs() {
  const [year, setYear] = useState("2026");
  const rows = ["100-Hour Yoga Teacher Training", "200-Hour Yoga Teacher Training", "300-Hour Yoga Teacher Training"];

  return (
    <div>
      <div className="filter-row" role="tablist" aria-label="Pricing year">
        {["2026", "2027"].map((item) => (
          <button
            type="button"
            key={item}
            role="tab"
            aria-selected={year === item}
            data-active={year === item}
            onClick={() => setYear(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="pricing-table-wrap">
        <table className="pricing-table">
          <caption className="sr-only">{year} yoga course pricing</caption>
          <thead>
            <tr>
              <th>Program</th>
              <th>Batch dates</th>
              <th>Shared room</th>
              <th>Private room</th>
              <th>Schedule</th>
              <th><span className="sr-only">Apply</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((name) => (
              <tr key={name}>
                <td data-label="Program">{name}</td>
                <td data-label="Batch dates">[Add {year} dates]</td>
                <td data-label="Shared room">[Add fee]</td>
                <td data-label="Private room">[Add fee]</td>
                <td data-label="Schedule">Awaiting confirmation</td>
                <td data-label="Action"><Link className="button button-text" href="/apply">Apply</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="placeholder-note mt-4">
        No discounts, availability labels, or savings are shown until verified batch data is supplied.
      </p>
    </div>
  );
}

export function CourseContents({ items }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" className="contents-trigger" onClick={() => setOpen(true)}>
        Contents
      </button>
      <dialog
        ref={dialogRef}
        className="contents-dialog"
        onClose={() => setOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
      >
        <div>
          <div className="contents-top">
            <h2>On this page</h2>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close contents">
              <X aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Course page sections">
            {items.map((item) => (
              <a href={`#${item.id}`} key={item.id} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </dialog>
    </>
  );
}
