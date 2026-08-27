"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui";

const row1Images = [
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
    alt: "Morning asana and alignment practice at The Hatha Yogashala Goa",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
    alt: "Sunrise beach yoga session on Querim beach with students from The Hatha Yogashala Goa",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp",
    alt: "Evening candlelit meditation and sound healing in the wooden shala",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
    alt: "Eco wooden cottages in lush tropical garden setting at The Hatha Yogashala in Arambol, Goa",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-01.webp",
    alt: "Wholesome vegetarian community dining at The Hatha Yogashala",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-havan-fire-puja-opening-ceremony-01.webp",
    alt: "Traditional havan fire puja ceremony performed at The Hatha Yogashala",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-01.webp",
    alt: "Wall-supported headstand alignment and posture mentoring during teacher training",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-graduation-group-photo-celebration-01.webp",
    alt: "Graduation celebration and group camaraderie of yoga students in Goa",
  },
];

const row2Images = [
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-flower-petal-om-mandala-ceremony-01.webp",
    alt: "Flower petal Om mandala made by students during opening ceremony",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-cottage-bedroom-interior-01.webp",
    alt: "Clean, comfortable residential campus rooms with peaceful surroundings",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ayurvedic-cooking-class-kitchen-01.webp",
    alt: "Students learning traditional Indian cooking and roti-making in the kitchen",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-beach-group-tree-pose-vrksasana-01.webp",
    alt: "Group tree pose Vrksasana practice along the sandy shore in Querim, Goa",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-garden-lounge-candid-portrait-01.webp",
    alt: "Students relaxing in the lush tropical garden lounge between sessions",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-certificate-presentation-teacher-training-01.webp",
    alt: "Certificate presentation and graduation at The Hatha Yogashala Goa",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
    alt: "Deep focus and posture practice in the open-air wooden yoga shala",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-coconut-palms-sunlight-02.webp",
    alt: "Tropical coconut palms and peaceful ashram environment in North Goa",
  },
];

export default function HomeGalleryMarquee() {
  const fullRow1 = [...row1Images, ...row1Images];
  const fullRow2 = [...row2Images, ...row2Images];

  return (
    <section
      className="py-5 md:py-7 bg-white overflow-hidden"
      id="gallery-preview"
      aria-label="Photo gallery preview"
    >
      <Container className="mb-3 md:mb-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[var(--coral-dark)]">
              Visual Journey
            </p>
            <h2 className="mt-1 text-[var(--brown)]">
              Life at The Hatha Yogashala
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--coral-dark)] hover:underline group"
          >
            <span>View Full Gallery</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>

      <div className="gallery-marquee-container space-y-2 md:space-y-2.5 xl:space-y-3">
        {/* Row 1 — scroll left (RTL) */}
        <div className="relative w-full overflow-hidden">
          <div className="gallery-marquee-rtl">
            {fullRow1.map((img, index) => (
              <div
                key={`r1-${index}`}
                className="relative shrink-0 w-[190px] sm:w-[230px] md:w-[270px] lg:w-[300px] xl:w-[345px] 2xl:w-[380px] aspect-[16/10] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 190px, (max-width: 768px) 230px, (max-width: 1024px) 270px, (max-width: 1280px) 300px, (max-width: 1536px) 345px, 380px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scroll right (LTR) — opposite direction */}
        <div className="relative w-full overflow-hidden">
          <div className="gallery-marquee-ltr">
            {fullRow2.map((img, index) => (
              <div
                key={`r2-${index}`}
                className="relative shrink-0 w-[190px] sm:w-[230px] md:w-[270px] lg:w-[300px] xl:w-[345px] 2xl:w-[380px] aspect-[16/10] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 190px, (max-width: 768px) 230px, (max-width: 1024px) 270px, (max-width: 1280px) 300px, (max-width: 1536px) 345px, 380px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
