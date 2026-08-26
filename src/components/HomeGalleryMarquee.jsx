"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui";

const row1Images = [
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-01.webp",
    alt: "Morning asana and alignment practice at The Hatha Yogashala Goa",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-02.webp",
    alt: "Students exploring cultural heritage landmarks near the ashram in North Goa",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-03.webp",
    alt: "Teacher providing alignment adjustments during yoga training session",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-04.webp",
    alt: "Wholesome vegetarian community dining at The Hatha Yogashala",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-05.webp",
    alt: "Students sharing tea break and yogic discussions between classes",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-06.webp",
    alt: "Peaceful yoga shala practice hall and nature setting in North Goa",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-07.webp",
    alt: "Asana alignment and body awareness practice in open-air shala",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-08.webp",
    alt: "Hands-on posture adjustments and mentoring during teacher training",
  },
];

const row2Images = [
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-09.webp",
    alt: "Graduation celebration and group camaraderie of yoga students in Goa",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-10.webp",
    alt: "Students in mindful meditation and breathwork in serene tropical gardens",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-11.webp",
    alt: "Clean, comfortable residential campus rooms with peaceful surroundings",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-12.webp",
    alt: "Student performing seated meditation and namaste posture",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-13.webp",
    alt: "Tropical campus pathways and peaceful ashram environment",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-14.webp",
    alt: "Sunset yoga and meditation on the coast of North Goa",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-15.webp",
    alt: "Deep focus and posture practice in the wooden yoga shala",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-16.webp",
    alt: "Certificate presentation and graduation at The Hatha Yogashala Goa",
  },
];

export default function HomeGalleryMarquee() {
  const fullRow1 = [...row1Images, ...row1Images];
  const fullRow2 = [...row2Images, ...row2Images];

  return (
    <section
      className="py-10 md:py-14 bg-white overflow-hidden"
      id="gallery-preview"
      aria-label="Student and school photo gallery"
    >
      {/* Title */}
      <Container className="mb-6 md:mb-8 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-[var(--brown)]">
          Beautiful Moments of Our{" "}
          <span className="text-[var(--coral-dark)] font-medium">
            School &amp; Students
          </span>
        </h2>
        <div className="w-14 h-1 bg-[var(--coral-dark)]/30 mx-auto mt-2.5 rounded-full" />
      </Container>

      {/* Marquee Rows Container */}
      <div className="gallery-marquee-container flex flex-col gap-3 sm:gap-4 w-full">
        {/* Row 1: Left to Right */}
        <div className="overflow-hidden w-full flex">
          <div className="gallery-marquee-ltr">
            {fullRow1.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="relative w-[210px] sm:w-[270px] md:w-[320px] aspect-[16/10] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-black/5 bg-[var(--surface)] group cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 270px, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="overflow-hidden w-full flex">
          <div className="gallery-marquee-rtl">
            {fullRow2.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="relative w-[210px] sm:w-[270px] md:w-[320px] aspect-[16/10] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-black/5 bg-[var(--surface)] group cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 270px, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[var(--coral-dark)] hover:underline"
        >
          <span>View Full Photo Gallery</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
