"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function Stars({ count = 5, className = "h-3 w-3", colorClass }) {
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
        className="h-9 w-9 flex-shrink-0 rounded-full object-cover"
      />
    );
  }
  return (
    <span
      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-black text-white ${
        gradientClass ||
        "bg-gradient-to-br from-[var(--terracotta)] to-[#ffb38a]"
      }`}
    >
      {initial}
    </span>
  );
}

function GoogleG({ className = "h-16 w-16" }) {
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

function TripAdvisorLogo({ className = "h-17 w-17" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="TripAdvisor"
    >
      <circle cx="24" cy="24" r="24" fill="#34E0A1" />
      <circle cx="15" cy="26" r="8" fill="#000" />
      <circle cx="33" cy="26" r="8" fill="#000" />
      <circle cx="15" cy="26" r="4.2" fill="#34E0A1" />
      <circle cx="33" cy="26" r="4.2" fill="#34E0A1" />
      <circle cx="15" cy="26" r="1.6" fill="#000" />
      <circle cx="33" cy="26" r="1.6" fill="#000" />
      <path
        d="M14 15.5c3.2-1.7 6.6-2.6 10-2.6s6.8.9 10 2.6l2.3-2.4H31.7C29.4 11.9 26.8 11 24 11s-5.4.9-7.7 2.1H11.7L14 15.5Z"
        fill="#000"
      />
    </svg>
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
            className={`review-card flex h-[280px] min-w-[260px] snap-center flex-col rounded-2xl border ${cardBorderClass} bg-white p-4 shadow-sm transition-all hover:shadow-md md:min-w-0`}
          >
            <div className="mb-3 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar
                  name={review.name}
                  image={review.avatar}
                  gradientClass={avatarGradientClass}
                />
                <div>
                  <h3 className="text-[13px] font-black leading-tight text-gray-800">
                    {review.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-tight text-gray-400">
                    {review.date}
                    {review.platform ? ` · ${review.platform}` : ""}
                  </span>
                </div>
              </div>
              <div className="mt-1">
                <Stars count={review.rating} colorClass={starColorClass} />
              </div>
            </div>
            <h4 className="mb-2 text-[13px] font-bold leading-snug text-gray-900">
              {review.headline || review.platform || "Review"}
            </h4>
            <div className="custom-scroll flex-grow overflow-y-auto whitespace-pre-line pr-1 text-[12px] leading-relaxed text-gray-600">
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
        className="section overflow-hidden border-t border-orange-50 bg-[var(--cream)]"
        id="google-reviews"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-black tracking-tighter text-gray-800 md:text-4xl">
              Google — <span className="text-[var(--terracotta)]">{title}</span>
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 md:text-xs">
              {subtitle}
            </p>
          </div>

          {visibleTestimonials.length ? (
            <ReviewGrid
              visibleTestimonials={visibleTestimonials}
              trackRef={trackRef}
              scroll={scroll}
              cardBorderClass="border-orange-50"
              starColorClass="fill-yellow-400 text-yellow-400"
              avatarGradientClass="bg-gradient-to-br from-[var(--terracotta)] to-[#ffb38a]"
              arrowColorClass="text-[var(--terracotta)]"
            />
          ) : (
            <div className="rounded-2xl border border-orange-50 bg-white p-4 text-center shadow-sm">
              <h3 className="text-sm font-black text-gray-800">
                No verified public reviews are linked yet
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Reviews populate only from approved platform sources.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-orange-100/50 bg-white px-4 py-4 shadow-sm md:flex-row">
            <div className="flex items-center gap-3 text-center md:text-left">
              <GoogleG />
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
        className="section overflow-hidden border-t border-emerald-50 bg-[var(--cream)]"
        id="tripadvisor-reviews"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-black tracking-tighter text-gray-800 md:text-4xl">
              TripAdvisor —{" "}
              <span className="text-[#00af87]">{tripadvisorTitle}</span>
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 md:text-xs">
              {tripadvisorSubtitle}
            </p>
          </div>

          {visibleTripTestimonials.length ? (
            <ReviewGrid
              visibleTestimonials={visibleTripTestimonials}
              trackRef={tripTrackRef}
              scroll={scrollTrip}
              cardBorderClass="border-emerald-50"
              starColorClass="fill-[#00af87] text-[#00af87]"
              avatarGradientClass="bg-gradient-to-br from-[#00af87] to-[#34e0a1]"
              arrowColorClass="text-[#00af87]"
            />
          ) : (
            <div className="rounded-2xl border border-emerald-50 bg-white p-4 text-center shadow-sm">
              <h3 className="text-sm font-black text-gray-800">
                No verified public reviews are linked yet
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Reviews populate only from approved platform sources.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-emerald-100/50 bg-white px-4 py-4 shadow-sm md:flex-row">
            <div className="flex items-center gap-3 text-center md:text-left">
              <TripAdvisorLogo />
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
