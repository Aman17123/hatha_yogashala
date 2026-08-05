"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Search,
  UserRound,
  X,
} from "lucide-react";

export function Reveal({ children, className = "" }) {
  const [visible, setVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      node.getBoundingClientRect().top < window.innerHeight * 0.92
    ) {
      return;
    }
    setVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8%" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} data-visible={visible}>
      {children}
    </div>
  );
}

function RichText({ text }) {
  if (typeof text !== "string" || !text.includes("**")) return text;
  return text
    .split("**")
    .map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part,
    );
}

export function Accordion({ items, initialOpen = 0 }) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = open === index;
        const id =
          `accordion-panel-${index}-${item.question || item.title}`.replace(
            /\W+/g,
            "-",
          );
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
            <div
              id={id}
              className="accordion-panel"
              data-open={isOpen}
              aria-hidden={!isOpen}
            >
              <div>
                <p>
                  <RichText text={item.answer || item.content} />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function WhyChooser({ items, children }) {
  const [active, setActive] = useState(0);
  const buttons = useRef([]);

  function handleKeyDown(event, index) {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const direction =
      event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const next = (index + direction + items.length) % items.length;
    setActive(next);
    buttons.current[next]?.focus();
  }

  return (
    <div className="why-chooser">
      <div>
        {children}
        <div className="accordion">
          {items.map((item, index) => {
            const isActive = active === index;
            const id = `why-panel-${index}`;
            return (
              <div className="accordion-item" key={item.title}>
                <h3>
                  <button
                    ref={(node) => {
                      buttons.current[index] = node;
                    }}
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={id}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  >
                    {item.title}
                    <ChevronDown aria-hidden="true" size={20} />
                  </button>
                </h3>
                <div
                  id={id}
                  className="accordion-panel"
                  data-open={isActive}
                  aria-hidden={!isActive}
                >
                  <div>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="why-visual" aria-live="polite">
        {items.map((item, index) => (
          <div key={item.image} className="absolute inset-0">
            <Image
              src={item.image}
              alt={index === active ? item.alt : ""}
              fill
              sizes="(max-width: 820px) 100vw, 42vw"
              data-active={index === active}
            />
          </div>
        ))}
      </div>
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
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label={`Previous ${label}`}
        >
          <ArrowLeft aria-hidden="true" size={19} />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label={`Next ${label}`}
        >
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

  const visible =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

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
    setSelected(
      (current) => (current + offset + visible.length) % visible.length,
    );
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
            <Image
              src={item.src}
              alt={item.alt || item.caption}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
            />
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
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelected(null)}
              aria-label="Close image"
            >
              <X aria-hidden="true" />
            </button>
            <div className="lightbox-image">
              <Image
                src={visible[selected].src}
                alt={visible[selected].alt || visible[selected].caption}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <p>{visible[selected].caption}</p>
            <div className="lightbox-controls">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous image"
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next image"
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

export function BlogCard({ post }) {
  const formatDate = (value) =>
    new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(value));
  return (
    <article className="blog-card group flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--coral-dark)]/40 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
        <div className="blog-card-image relative overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50" />
          <span className="blog-card-category">{post.category}</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-lg font-bold leading-snug text-black transition-colors group-hover:text-[var(--coral-dark)]">
            {post.title}
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-black/70 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="blog-card-meta mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-[var(--border)] pt-4 text-[11px] font-medium text-[var(--muted)]">
            <span className="flex items-center gap-1.5">
              <UserRound size={13} aria-hidden="true" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays size={13} aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 size={13} aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
          <span className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-bold uppercase tracking-[0.1em] text-[var(--coral-dark)]">
            Read article
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function BlogExplorer({ posts, perPage = 6 }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const results = useMemo(
    () =>
      posts.filter(
        (post) =>
          (category === "All" || post.category === category) &&
          `${post.title} ${post.excerpt}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, posts, query],
  );
  const totalPages = Math.max(1, Math.ceil(results.length / perPage));
  const safePage = Math.min(page, totalPages);
  const visible = results.slice((safePage - 1) * perPage, safePage * perPage);

  function applyFilters(next) {
    setQuery(next.query);
    setCategory(next.category);
    setPage(1);
  }

  return (
    <>
      <div className="blog-tools">
        <label>
          <span className="sr-only">Search articles</span>
          <Search aria-hidden="true" size={18} />
          <input
            type="search"
            value={query}
            onChange={(event) =>
              applyFilters({ query: event.target.value, category })
            }
            placeholder="Search articles"
          />
        </label>
        <div className="filter-row">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              data-active={category === item}
              onClick={() => applyFilters({ query, category: item })}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="blog-results-count" aria-live="polite">
        {results.length} {results.length === 1 ? "article" : "articles"}
        {query && <> matching “{query}”</>}
      </p>

      <div className="blog-grid">
        {visible.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>

      {!results.length && (
        <p className="empty-state">No articles match this search.</p>
      )}

      {totalPages > 1 && (
        <nav className="blog-pagination" aria-label="Blog pagination">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={safePage === 1}
            aria-label="Previous page"
          >
            <ArrowLeft size={16} aria-hidden="true" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (num) => (
              <button
                type="button"
                key={num}
                data-active={num === safePage}
                onClick={() => setPage(num)}
                aria-label={`Page ${num}`}
                aria-current={num === safePage ? "page" : undefined}
              >
                {num}
              </button>
            ),
          )}
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={safePage === totalPages}
            aria-label="Next page"
          >
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </nav>
      )}
    </>
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
      <button
        type="button"
        className="contents-trigger"
        onClick={() => setOpen(true)}
      >
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
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close contents"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Course page sections">
            {items.map((item) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </dialog>
    </>
  );
}
