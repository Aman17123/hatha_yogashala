"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, Quote, Star } from "lucide-react";

export default function TestimonialCarousel({ testimonials = [] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const count = testimonials.length;

  useEffect(() => {
    if (paused || count < 2) return;
    timer.current = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 6000);
    return () => clearInterval(timer.current);
  }, [paused, count]);

  // Guard: nothing to render if there are no testimonials
  if (count === 0) return null;

  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  const current = testimonials[index];
  const prev = testimonials[prevIndex];
  const next = testimonials[nextIndex];

  const slides = [
    { item: prev, position: 0 },
    { item: current, position: 1 },
    { item: next, position: 2 },
  ];

  return (
    <div
      className="testimonial-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="testimonial-stage">
        {slides.map(({ item, position }) => {
          const isActive = position === 1;
          return (
            <motion.figure
              key={`${item.name}-${position}-${index}`}
              className="testimonial-slide"
              data-active={isActive}
              animate={{
                opacity: isActive ? 1 : 0.35,
                scale: isActive ? 1 : 0.92,
                x: isActive ? "0%" : position === 0 ? "4%" : "-4%",
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden={!isActive}
              style={{ zIndex: isActive ? 2 : 1 }}
            >
              <Quote className="testimonial-quote-mark" aria-hidden="true" />
              <div
                className="testimonial-stars"
                aria-label={`${item.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${i < item.rating ? "fill-[var(--gold)] text-[var(--gold)]" : "text-[var(--border)]"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote>{item.text}</blockquote>
              <figcaption>
                <span className="testimonial-avatar">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.name || "Guest"} testimonial avatar`}
                      fill
                      sizes="72px"
                    />
                  ) : (
                    <span
                      className="testimonial-avatar-fallback"
                      aria-hidden="true"
                    >
                      {item.name ? item.name.charAt(0).toUpperCase() : "?"}
                    </span>
                  )}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>
                    {item.country} · {item.tag}
                  </small>
                </span>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>

      <div className="testimonial-controls">
        <button
          type="button"
          onClick={() => setIndex(prevIndex)}
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <div
          className="testimonial-dots"
          role="tablist"
          aria-label="Testimonials"
        >
          {testimonials.map((item, i) => (
            <button
              type="button"
              key={`${item.name}-${i}`}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${item.name}`}
              data-active={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIndex(nextIndex)}
          aria-label="Next testimonial"
        >
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function VideoTestimonials({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <div className="video-testimonial-grid">
      {items.map((item, i) => (
        <button
          type="button"
          className="video-testimonial"
          key={`${item.name}-${i}`}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={`Video testimonial from ${item.name}`}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          ) : (
            <span className="video-testimonial-fallback" aria-hidden="true" />
          )}
          <span className="video-play">
            <Play size={20} fill="currentColor" aria-hidden="true" />
          </span>
          <span className="video-caption">
            <strong>{item.name}</strong>
            <small>{item.country}</small>
          </span>
        </button>
      ))}
    </div>
  );
}
