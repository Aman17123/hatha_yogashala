import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Star, ArrowRight, Check } from "lucide-react";
import { holidays } from "@/data/holidaysData";
import { pageMetadata, absoluteUrl } from "@/data/siteData";
import { Container, FinalCTA, PageHero, SectionHeading, JsonLd } from "@/components/ui";

export const metadata = {
  title: "Yoga Holidays in Goa — 3, 5 & 7 Day Authentic Breaks | The Hatha Yogashala",
  description:
    "Take an authentic yoga break by the ocean in Goa at The Hatha Yogashala. Explore 3, 5, and 7-day yoga holidays with daily Hatha asanas, Ayurvedic spa massages, sattvic buffet meals, and beachside relaxation.",
};

const holidaysHubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Yoga Holidays in Goa | The Hatha Yogashala",
  description:
    "Explore 3, 5, and 7-day authentic yoga holidays in Goa at The Hatha Yogashala with daily asana, Ayurvedic massage, and sattvic meals near Querim Beach.",
  url: absoluteUrl("/holidays"),
};

export default function HolidaysPage() {
  return (
    <>
      <JsonLd data={holidaysHubSchema} />
      <PageHero
        eyebrow="Authentic Yogic Breaks"
        title="Yoga Holidays in Goa"
        text="Take a rejuvenating break from your busy life by the magnificent ocean in Goa. Choose a 3, 5, or 7-day holiday designed to restore and realign."
        image="/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp"
        loading="eager"
      />

      <section className="section bg-[#FAF7F2]">
        <Container>
          <SectionHeading
            eyebrow="Holiday Pathways"
            title="Choose Your Duration"
            text="Every yoga holiday includes daily Hatha asana, pranayama, full body Ayurvedic massage, delicious vegan/vegetarian meals, and peaceful beach accommodation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {holidays.map((h) => (
              <article
                key={h.slug}
                className="group flex flex-col h-full overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--coral-dark)]/40"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={h.image}
                    alt={h.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[var(--coral-dark)] shadow-sm">
                      {h.days} Days
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
                      <Star className="size-3 fill-[var(--gold)] text-[var(--gold)]" />
                      4.9
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-bold text-black group-hover:text-[var(--coral-dark)] transition-colors leading-snug">
                    <Link href={`/holidays/${h.slug}`}>{h.name}</Link>
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-black/70 line-clamp-3 leading-relaxed">
                    {h.tagline}
                  </p>

                  <div className="mt-4 space-y-1.5 text-xs font-medium text-black/80">
                    <div className="flex items-center gap-1.5">
                      <Check size={14} className="text-[var(--coral-dark)]" />
                      <span>Daily Asana &amp; Pranayama</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check size={14} className="text-[var(--coral-dark)]" />
                      <span>Ayurvedic Full Body Massage</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check size={14} className="text-[var(--coral-dark)]" />
                      <span>All Sattvic Meals &amp; Stay</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-6 border-t border-[var(--border)] flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]">
                        All-Inclusive / person
                      </span>
                      <strong className="text-lg font-bold text-[var(--coral-dark)]">
                        {h.price}
                      </strong>
                    </div>
                    <Link
                      href={`/holidays/${h.slug}`}
                      className="button button-primary !py-2.5 !px-4 !text-xs font-bold"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Ready to disconnect and realign?"
        text="Reserve your yoga holiday in Goa today. Flexible dates available throughout the month."
      />
    </>
  );
}
