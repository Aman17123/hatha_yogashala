import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/siteData";
import { Container } from "@/components/shared/SiteUI";
import { Reveal } from "@/components/Interactive";
import BrandLogo from "@/components/BrandLogos";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Founder", "/founder"],
  ["Our Teachers", "/teachers"],
  ["Accommodation & Food", "/accommodation-goa"],
  ["Contact Us", "/contact"],
  ["Blog & Journal", "/blog"],
  ["Photo Gallery", "/gallery"],
];

const ttcLinks = [
  ["Yoga TTC Overview", "/yoga-teacher-training-goa"],
  ["100 Hour Yoga TTC", "/courses/100-hour-yoga-teacher-training-goa"],
  ["200 Hour Yoga TTC", "/courses/200-hour-yoga-teacher-training-goa"],
  [
    "22-Day 200-Hr Flexible TTC",
    "/courses/22-day-200-hour-flexible-yoga-teacher-training-goa",
  ],
  [
    "200-Hr Ashtanga Vinyasa",
    "/courses/200-hour-ashtanga-vinyasa-yoga-teacher-training-goa",
  ],
  ["300 Hour Yoga TTC", "/courses/300-hour-yoga-teacher-training-goa"],
  ["Aerial Yoga TTC", "/courses/aerial-yoga-teacher-training-goa"],
];

const retreatLinks = [
  ["Yoga Retreats Overview", "/yoga-retreats-goa"],
  ["3-Day Yoga Retreat", "/retreats/3-day-yoga-retreat-goa"],
  ["5-Day Yoga Retreat", "/retreats/5-day-yoga-retreat-goa"],
  ["7-Day Yoga Retreat", "/retreats/7-day-yoga-retreat-goa"],
  [
    "5-Day Awaken & Align",
    "/retreats/5-day-awaken-and-align-yoga-retreat-goa",
  ],
  ["Aerial Yoga Retreat", "/retreats/aerial-yoga-retreat-goa"],
  [
    "Ayurvedic Massage Therapy",
    "/retreats/ayurvedic-massage-therapy-goa",
  ],
  ["Yoga Festival in Goa", "/retreats/yoga-festivals-goa"],
];

const socialLinks = [
  {
    label: "Instagram",
    name: "instagram",
    href: site.social.instagram,
  },
  {
    label: "Facebook",
    name: "facebook",
    href: site.social.facebook,
  },
  {
    label: "YouTube",
    name: "youtube",
    href: site.social.youtube,
  },
  {
    label: "Google Maps",
    name: "google-maps",
    href: site.contact.map,
  },
  {
    label: "WhatsApp",
    name: "whatsapp",
    href: whatsappLink(
      "Hi The Hatha Yogashala, I'd like to know more about your courses, retreats, and upcoming batch dates in Goa.",
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative isolate overflow-hidden bg-[var(--cream)] text-[var(--brown)]"
    >
      {/* faint 1px grid — quiet texture, no glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(20,21,26,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(20,21,26,0.6)_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden="true"
      />

      {/* top band: glowing logo watermark behind eyebrow + heading + status badge + cta */}
      <section className="relative z-10">
        {/* glowing background mark — the one flourish, everything else stays quiet */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
          aria-hidden="true"
        >
          <div className="relative -mt-6 size-[15rem] sm:-mt-8 sm:size-[18rem] md:size-[20rem] lg:size-[24rem] xl:size-[26rem]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.18)_0%,rgba(201,169,97,0.08)_42%,transparent_68%)] blur-lg" />
            <Image
              src="/images/The-Hatha-Yogashala-hand-logo.png"
              alt="The_hatha_Yogashala_logo_Best_ypgashala_Goa"
              fill
              sizes="(max-width: 768px) 260px, 450px"
              className="object-contain opacity-[0.20]"
            />
          </div>
        </div>

        <Container>
          <div className="relative flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-3 py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 text-center">
            <p className="font-mono text-[11px] sm:text-xs lg:text-[13.5px] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-[var(--gold)]">
              Breathe · Move · Awaken
            </p>
            <h2 className="max-w-xl text-[var(--brown)] tracking-[-0.02em]">
              Begin your yoga journey in Goa
            </h2>

            <div className="mt-0.5 sm:mt-1 flex flex-col items-center gap-2">
              <Link
                href="/yoga-teacher-training-goa"
                className="group inline-flex min-h-9 sm:min-h-9.5 lg:min-h-10.5 items-center justify-center gap-2 rounded-md border border-[var(--brown)]/20 px-3.5 py-1.5 sm:px-4 sm:py-1.5 lg:px-4.5 lg:py-2 text-xs sm:text-[12.5px] lg:text-[13.5px] font-semibold uppercase tracking-[0.14em] text-[var(--brown)] transition duration-200 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cream)]"
              >
                Explore YTTC & retreats
                <ArrowUpRight
                  className="size-3.5 lg:size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* link columns */}
      <section className="relative z-10 -mt-3 sm:-mt-4 lg:-mt-3">
        <Container>
          <Reveal className="grid gap-5 py-4 sm:gap-6 sm:py-5 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.3fr_1.05fr_1.05fr_1fr_1.2fr] lg:gap-7 lg:py-8 xl:py-10">
            <FooterColumn>
              <Link
                href="/"
                className="mb-2 sm:mb-2.5 inline-flex items-center justify-center sm:justify-start"
                aria-label={`${site.name} home`}
              >
                <Image
                  src="/images/The-Hatha-Yogashala-logo.png"
                  alt="The Hatha Yogashala"
                  width={170}
                  height={68}
                  className="h-10 sm:h-11 lg:h-12.5 w-auto object-contain"
                />
              </Link>

              <p className="text-body mx-auto max-w-xs sm:mx-0 text-[11.5px] sm:text-xs md:text-[12.5px] lg:text-[14px] leading-relaxed">
                Yoga Alliance certified 100/200/300-hour teacher training and
                mindful residential retreats in Querim, North Goa.
              </p>

              <div className="mx-auto mt-2 sm:mt-2.5 lg:mt-3 flex items-center justify-center gap-2.5 sm:gap-3 lg:gap-3 sm:mx-0 sm:justify-start">
                {socialLinks.map(({ label, name, href }) =>
                  typeof href === "string" &&
                  (href.startsWith("https://") ||
                    href.startsWith("mailto:")) ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-115 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                    >
                      <BrandLogo
                        name={name}
                        alt={label}
                        className="size-5 sm:size-5.5 lg:size-6 transition-opacity hover:opacity-80"
                      />
                    </a>
                  ) : (
                    <span
                      key={label}
                      role="img"
                      aria-label={`${label} link pending`}
                      title={`${label} link pending`}
                      className="inline-flex items-center justify-center opacity-40"
                    >
                      <BrandLogo name={name} className="size-5 sm:size-5.5 lg:size-6" />
                    </span>
                  ),
                )}
              </div>
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Teacher Training</FooterHeading>
              <FooterLinkList links={ttcLinks} />
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Yoga Retreats</FooterHeading>
              <FooterLinkList links={retreatLinks} />
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Quick Links</FooterHeading>
              <FooterLinkList links={quickLinks} />
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Contact Us</FooterHeading>
              <ul className="m-0 list-none space-y-1 sm:space-y-1.5 lg:space-y-2 p-0 text-[11.5px] sm:text-xs md:text-[12.5px] lg:text-[13.5px]">
                <ContactItem Icon={MapPin}>
                  <span>{site.contact.address}</span>
                </ContactItem>
                <ContactItem Icon={Phone}>
                  <span>{site.contact.phone}</span>
                </ContactItem>
                <ContactItem Icon={Mail}>
                  <span className="break-all">{site.contact.email}</span>
                </ContactItem>
              </ul>

              <Link
                href="/contact"
                className="group mt-2 sm:mt-2.5 lg:mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-[12px] lg:text-[13px] uppercase tracking-[0.14em] text-[var(--gold)] transition hover:text-[var(--brown)]"
              >
                Send an enquiry
                <ArrowUpRight
                  className="size-3 lg:size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </FooterColumn>
          </Reveal>

          {/* bottom bar */}
          <div className="flex flex-col items-center gap-2 border-t border-[var(--brown)]/10 py-2.5 sm:py-2.5 lg:py-3.5 xl:py-4.5 text-center font-mono text-[11px] sm:text-[11.5px] lg:text-[13px] uppercase tracking-[0.14em] text-[var(--brown)] md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              {site.name} <span className="text-[var(--brown)]/60">·</span> ©{" "}
              {new Date().getFullYear()}
            </p>

            <nav
              className="flex flex-wrap justify-center gap-x-4 sm:gap-x-5 lg:gap-x-6 gap-y-1.5 sm:gap-y-2 md:justify-start"
              aria-label="Legal links"
            >
              <FooterPolicyLink href="/privacy-policy">
                Privacy
              </FooterPolicyLink>
              <FooterPolicyLink href="/terms">Terms</FooterPolicyLink>
              <FooterPolicyLink href="/payment-policy">
                Payment
              </FooterPolicyLink>
            </nav>

            <Link
              href="#top"
              className="group inline-flex items-center gap-1.5 sm:gap-2 transition hover:text-[var(--brown)]"
            >
              Back to top
              <ArrowUp
                className="size-2.5 sm:size-3 lg:size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Container>
      </section>
    </footer>
  );
}

function FooterColumn({ children }) {
  return (
    <div className="flex flex-col items-center sm:items-start">{children}</div>
  );
}

function FooterHeading({ children }) {
  return (
    <div className="mb-2 sm:mb-2.5 lg:mb-3 flex flex-col items-center sm:items-start">
      <h3 className="font-mono text-xs sm:text-[13px] lg:text-[14px] xl:text-[14.5px] font-bold uppercase tracking-wider text-[var(--gold)]">
        {children}
      </h3>
      <span
        aria-hidden="true"
        className="block h-px w-[80%] bg-[var(--border)]"
      />
    </div>
  );
}

function FooterLinkList({ links }) {
  return (
    <ul className="m-0 list-none space-y-0.5 sm:space-y-1 lg:space-y-1.5 p-0">
      {links.map(([label, href]) => (
        <li key={href}>
          <Link
            href={href}
            className="group inline-flex items-center gap-1.5 sm:gap-2 font-medium text-[11.5px] sm:text-[12.5px] md:text-[13px] lg:text-[14px] xl:text-[14.5px] leading-snug sm:leading-5 lg:leading-6 text-[var(--text)] transition duration-150 hover:text-[var(--coral-dark)]"
          >
            <span>{label}</span>
            <ArrowUpRight
              className="size-2.5 sm:size-3 lg:size-3.5 -translate-x-1 opacity-0 transition duration-150 group-hover:translate-x-0 group-hover:opacity-100"
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactItem({ Icon, children }) {
  return (
    <li className="grid grid-cols-[1rem_1fr] sm:grid-cols-[1.1rem_1fr] lg:grid-cols-[1.2rem_1fr] items-start gap-2 sm:gap-2.5 text-left text-[11.5px] sm:text-[12.5px] md:text-[13px] lg:text-[14px] xl:text-[14.5px] leading-snug sm:leading-5 lg:leading-6 text-[var(--text)]">
      <Icon
        className="mt-0.5 size-3.5 sm:size-4 lg:size-4.5 stroke-[1.7] text-[var(--coral-dark)]"
        aria-hidden="true"
      />
      {children}
    </li>
  );
}

function FooterPolicyLink({ href, children }) {
  return (
    <Link href={href} className="transition hover:text-[var(--coral-dark)]">
      {children}
    </Link>
  );
}
