"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import BrandLogo from "@/components/BrandLogos";

function Stars({ count = 5, className = "h-3.5 w-3.5", colorClass }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          strokeWidth={0}
          className={`${className} ${
            i < count
              ? colorClass || "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function Avatar({ name, image, gradientClass }) {
  const initial = (name || "?").trim().charAt(0).toUpperCase();
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={`${name} avatar`}
        className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
      />
    );
  }
  return (
    <span
      className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-black text-white ${
        gradientClass ||
        "bg-gradient-to-br from-[var(--coral)] to-[var(--sage)]"
      }`}
    >
      {initial}
    </span>
  );
}

function GoogleG({ className = "h-12 w-12" }) {
  return (
    <svg
      viewBox="0 0 18 18"
      className={className}
      role="img"
      aria-label="Google"
    >
      <path
        fill="#4285F4"
        d="M17.64 9.205c0-.64-.057-1.255-.164-1.846H9v3.492h4.844a4.14 4.14 0 0 1-1.796 2.716v2.266h2.909c1.703-1.568 2.683-3.88 2.683-6.628Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.468-.806 5.957-2.18l-2.909-2.265c-.806.54-1.836.86-3.048.86-2.344 0-4.328-1.585-5.036-3.714H.957v2.336A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.7A5.41 5.41 0 0 1 3.682 9c0-.59.101-1.164.282-1.7V4.964H.957A9 9 0 0 0 0 9c0 1.45.347 2.822.957 4.036L3.964 10.7Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.322 0 2.51.454 3.445 1.345l2.581-2.582C13.464.891 11.426 0 9 0A9 9 0 0 0 .957 4.964L3.964 7.3C4.672 5.17 6.656 3.58 9 3.58Z"
      />
    </svg>
  );
}

function TripAdvisorLogo({ className = "h-12 w-12" }) {
  return (
    <BrandLogo name="tripadvisor" alt="TripAdvisor" className={className} />
  );
}

function ReviewGrid({
  visibleTestimonials,
  trackRef,
  scroll,
  cardBorderClass,
  starColorClass,
  avatarGradientClass,
  arrowColorClass,
}) {
  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:snap-none lg:overflow-visible lg:pb-0"
      >
        {visibleTestimonials.map((review) => (
          <article
            key={review.name}
            className={` flex h-[300px] min-w-[340px] snap-center flex-col rounded-2xl border ${cardBorderClass} bg-white p-6 shadow-sm transition-all hover:shadow-md md:min-w-0`}
          >
            <div className="mb-1 flex items-start justify-between">
              <div className="flex items-center gap-3 ">
                <Avatar
                  name={review.name}
                  image={review.avatar}
                  gradientClass={avatarGradientClass}
                />
                <div>
                  <h3 className="text-[16px] font-semibold leading-tight text-gray-900">
                    {review.name}
                  </h3>
                  <span className="text-[11px] font-bold uppercase tracking-tight text-gray-500">
                    {review.date}
                  </span>
                </div>
              </div>
              <div className="mt-1">
                <Stars count={review.rating} colorClass={starColorClass} />
              </div>
            </div>
            <h4 className="mb-2 text-[15px] font-bold leading-snug text-gray-900">
              {review.headline || review.platform || "Review"}
            </h4>
            <div className="custom-scroll flex-grow overflow-y-auto whitespace-pre-line pr-1 text-sm leading-relaxed text-gray-800">
              {review.excerpt}
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        aria-label="Scroll reviews left"
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow lg:hidden"
      >
        <ChevronLeft className={`h-[18px] w-[18px] ${arrowColorClass}`} />
      </button>
      <button
        type="button"
        aria-label="Scroll reviews right"
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow lg:hidden"
      >
        <ChevronRight className={`h-[18px] w-[18px] ${arrowColorClass}`} />
      </button>
    </div>
  );
}

export default function ReviewsSection({
  testimonials = [],
  reviewProfile = {},
  title = "Student Reviews",
  subtitle = "Verified 5.0 Rating in Goa",
  tripadvisorTestimonials = [],
  tripadvisorProfile = {},
  tripadvisorTitle = "Student Reviews",
  tripadvisorSubtitle = "Verified 5.0 Rating in Goa",
}) {
  const trackRef = useRef(null);
  const tripTrackRef = useRef(null);

  const visibleTestimonials = testimonials.slice(0, 4);
  const visibleTripTestimonials = tripadvisorTestimonials.slice(0, 4);

  function scroll(direction) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * 320, behavior: "smooth" });
  }

  function scrollTrip(direction) {
    const track = tripTrackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * 320, behavior: "smooth" });
  }

  const rating = reviewProfile.rating ?? 5.0;
  const googleUrl = reviewProfile.googleBusinessUrl || "";

  const tripRating = tripadvisorProfile.rating ?? 5.0;
  const tripUrl = tripadvisorProfile.tripadvisorUrl || "";

  return (
    <>
      {/* ============ GOOGLE SECTION ============ */}
      <section
        className="section-tight overflow-hidden border-t border-[var(--border)] bg-[var(--cream)]"
        id="google-reviews"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-8 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <GoogleG className="h-8 w-8 md:h-10 md:w-10" />
              <h2 className="text-2xl font-black tracking-tighter text-gray-800 md:text-4xl">
                Google — <span className="text-[#4285F4]">{title}</span>
              </h2>
            </div>
            <div className="mx-auto mb-2 flex h-1 w-24 overflow-hidden rounded-full">
              <span className="h-full w-1/4 bg-[#4285F4]" />
              <span className="h-full w-1/4 bg-[#EA4335]" />
              <span className="h-full w-1/4 bg-[#FBBC05]" />
              <span className="h-full w-1/4 bg-[#34A853]" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 md:text-xs">
              {subtitle}
            </p>
          </div>

          {visibleTestimonials.length ? (
            <ReviewGrid
              visibleTestimonials={visibleTestimonials}
              trackRef={trackRef}
              scroll={scroll}
              cardBorderClass="border-[var(--border)]"
              starColorClass="fill-yellow-400 text-yellow-400"
              avatarGradientClass="bg-gradient-to-br from-[var(--coral)] to-[var(--sage)]"
              arrowColorClass="text-[var(--coral-dark)]"
            />
          ) : (
            <div className="rounded-2xl border border-[var(--border)] bg-white p-4 text-center shadow-sm">
              <h3 className="text-sm font-black text-gray-800">
                No verified public reviews are linked yet
              </h3>
              <p className="mt-2 text-xs text-gray-600">
                Reviews populate only from approved platform sources.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-white px-4 py-4 shadow-sm md:flex-row">
            <div className="flex items-center gap-3 text-center md:text-left">
              <GoogleG className="h-12 w-12" />
              <div>
                <h3 className="text-[14px] font-black leading-tight text-gray-900 md:text-[16px]">
                  Excellent on Google
                </h3>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <span className="text-sm font-black text-gray-900">
                    {rating}
                  </span>
                  <Stars count={Math.round(rating)} />
                </div>
              </div>
            </div>
            {googleUrl ? (
              <a
                href={googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#4285F4] px-6 py-3 text-center text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-[#357ae8] md:w-auto"
              >
                Review Us on Google
              </a>
            ) : (
              <a
                href="https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#4285F4] px-6 py-3 text-center text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-[#357ae8] md:w-auto"
              >
                Open Google Profile
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ============ TRIPADVISOR SECTION ============ */}
      <section
        className="section-tight overflow-hidden border-t border-[var(--border)] bg-[var(--cream)]"
        id="tripadvisor-reviews"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-8 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <TripAdvisorLogo className="h-8 w-8 md:h-10 md:w-10" />
              <h2 className="text-2xl font-black tracking-tighter text-gray-800 md:text-4xl">
                TripAdvisor —{" "}
                <span className="text-[#00af87]">{tripadvisorTitle}</span>
              </h2>
            </div>
            <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-[#00af87]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 md:text-xs">
              {tripadvisorSubtitle}
            </p>
          </div>

          {visibleTripTestimonials.length ? (
            <ReviewGrid
              visibleTestimonials={visibleTripTestimonials}
              trackRef={tripTrackRef}
              scroll={scrollTrip}
              cardBorderClass="border-[var(--border)]"
              starColorClass="fill-[#00af87] text-[#00af87]"
              avatarGradientClass="bg-gradient-to-br from-[#00af87] to-[#34e0a1]"
              arrowColorClass="text-[#00af87]"
            />
          ) : (
            <div className="rounded-2xl border border-[var(--border)] bg-white p-4 text-center shadow-sm">
              <h3 className="text-sm font-black text-gray-800">
                No verified public reviews are linked yet
              </h3>
              <p className="mt-2 text-xs text-gray-600">
                Reviews populate only from approved platform sources.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-white px-4 py-4 shadow-sm md:flex-row">
            <div className="flex items-center gap-3 text-center md:text-left">
              <TripAdvisorLogo className="h-12 w-12" />
              <div>
                <h3 className="text-[14px] font-black leading-tight text-gray-900 md:text-[16px]">
                  Excellent on TripAdvisor
                </h3>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <span className="text-sm font-black text-gray-900">
                    {tripRating}
                  </span>
                  <Stars
                    count={Math.round(tripRating)}
                    colorClass="fill-[#00af87] text-[#00af87]"
                  />
                </div>
              </div>
            </div>
            {tripUrl ? (
              <a
                href={tripUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#00af87] px-6 py-3 text-center text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-[#008f6f] md:w-auto"
              >
                Review Us on TripAdvisor
              </a>
            ) : (
              <a
                href="https://www.tripadvisor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#00af87] px-6 py-3 text-center text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-[#008f6f] md:w-auto"
              >
                Open TripAdvisor Profile
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
