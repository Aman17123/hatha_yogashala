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

const pranayamaLinks = [
  ["Online Pranayama", "/online-pranayama"],
  ["Pre-Pranayama Foundation", "/online-pranayama/pre-pranayama-foundation-course"],
  ["Beginner Pranayama", "/online-pranayama/beginner-pranayama-course"],
  ["Intermediate Pranayama", "/online-pranayama/intermediate-pranayama-course"],
  ["Advanced Pranayama", "/online-pranayama/advanced-pranayama-course"],
  ["Daily Pranayama Classes", "/online-pranayama/daily-pranayama-subscription"],
  ["Stress Relief Breathwork", "/online-pranayama/stress-relief-course"],
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
      <section className="relative z-10 border-b border-[var(--brown)]/10">
        {/* glowing background mark */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
          aria-hidden="true"
        >
          <div className="relative -mt-5 size-[14rem] sm:-mt-6 sm:size-[16rem] md:size-[18rem] lg:size-[20rem]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.18)_0%,rgba(201,169,97,0.08)_42%,transparent_68%)] blur-lg" />
            <Image
              src="/images/The-Hatha-Yogashala-hand-logo.png"
              alt=""
              fill
              sizes="(max-width: 768px) 240px, 400px"
              className="object-contain opacity-[0.18]"
            />
          </div>
        </div>

        <Container>
          <div className="relative flex flex-col items-center gap-1.5 sm:gap-2 py-4 sm:py-5 md:py-6 text-center">
            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Breathe · Move · Awaken
            </p>
            <h2 className="max-w-xl text-[var(--brown)] tracking-[-0.02em] text-[20px] sm:text-2xl lg:text-3xl font-bold font-philosopher">
              Book Your Course or Retreat
            </h2>

            <div className="mt-1 flex flex-col items-center">
              <Link
                href="/yoga-teacher-training-goa"
                className="group inline-flex min-h-8.5 sm:min-h-9 items-center justify-center gap-1.5 rounded-full border border-[var(--brown)]/25 px-4 py-1.5 text-xs sm:text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[var(--brown)] transition duration-200 hover:border-[var(--coral-dark)] hover:bg-[var(--coral-dark)] hover:text-white"
              >
                Explore YTTC &amp; Retreats
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* link columns */}
      <section className="relative z-10">
        <Container>
          <Reveal className="grid grid-cols-2 gap-x-5 gap-y-6 py-5 sm:py-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-6 lg:py-7 text-left">
            <FooterColumn className="col-span-2 items-center text-center sm:col-span-2 sm:items-start sm:text-left md:col-span-3 lg:col-span-1">
              <Link
                href="/"
                className="mb-2 inline-flex items-center justify-center sm:justify-start"
                aria-label={`${site.name} home`}
              >
                <Image
                  src="/images/The-Hatha-Yogashala-logo.png"
                  alt="The Hatha Yogashala"
                  width={145}
                  height={58}
                  className="h-8 w-auto object-contain sm:h-9 lg:h-10"
                />
              </Link>

              <p className="text-body mx-auto max-w-sm text-center text-[11.5px] sm:text-xs leading-relaxed sm:mx-0 sm:text-left text-[var(--muted)]">
                Yoga Alliance certified 100/200/300-hour teacher training, online pranayama, and
                residential retreats in Querim, North Goa.
              </p>

              <div className="mt-2.5 flex items-center justify-center gap-2.5 sm:justify-start sm:gap-3">
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
                      className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-110 focus-visible:outline-none"
                    >
                      <BrandLogo
                        name={name}
                        alt={label}
                        className="size-5 transition-opacity hover:opacity-80 sm:size-5.5"
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
                      <BrandLogo name={name} className="size-5 sm:size-5.5" />
                    </span>
                  ),
                )}
              </div>
            </FooterColumn>

            <FooterColumn className="items-start text-left">
              <FooterHeading>Teacher Training</FooterHeading>
              <FooterLinkList links={ttcLinks} />
            </FooterColumn>

            <FooterColumn className="items-start text-left">
              <FooterHeading>Yoga Retreats</FooterHeading>
              <FooterLinkList links={retreatLinks} />
            </FooterColumn>

            <FooterColumn className="items-start text-left">
              <FooterHeading>Online Pranayama</FooterHeading>
              <FooterLinkList links={pranayamaLinks} />
            </FooterColumn>

            <FooterColumn className="items-start text-left">
              <FooterHeading>Quick Links</FooterHeading>
              <FooterLinkList links={quickLinks} />
            </FooterColumn>

            <FooterColumn className="col-span-2 items-center text-center sm:col-span-1 sm:items-start sm:text-left">
              <FooterHeading className="items-center text-center sm:items-start sm:text-left">
                Contact Us
              </FooterHeading>
              <ul className="m-0 list-none space-y-1.5 p-0 text-[11.5px] sm:text-xs lg:text-[12.5px]">
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
                className="group mt-2 inline-flex items-center justify-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--gold)] transition hover:text-[var(--brown)] sm:text-[11.5px]"
              >
                Send an enquiry
                <ArrowUpRight
                  className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </FooterColumn>
          </Reveal>

          {/* bottom bar */}
          <div className="flex flex-col items-center gap-2 border-t border-[var(--brown)]/10 py-3 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--brown)] sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-[11.5px]">
            <p>
              {site.name} <span className="text-[var(--brown)]/60">·</span> ©{" "}
              {new Date().getFullYear()}
            </p>

            <nav
              className="flex flex-wrap justify-center gap-x-4 gap-y-1 sm:justify-start"
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
              className="group inline-flex items-center gap-1 transition hover:text-[var(--brown)]"
            >
              Back to top
              <ArrowUp
                className="size-2.5 transition-transform duration-200 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* designer credit */}
          <div className="border-t border-[var(--brown)]/10 px-4 py-3 text-center sm:px-0 sm:py-2.5">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase leading-relaxed tracking-[0.1em] text-[var(--muted)]">
              <span className="inline-block">All Rights Reserved</span>
              <span
                className="hidden sm:inline-block text-[var(--brown)]/40"
                aria-hidden="true"
              >
                {" "}
                ·{" "}
              </span>
              <span className="block sm:hidden" aria-hidden="true">
                <span className="mx-auto my-1.5 block h-px w-8 bg-[var(--brown)]/25" />
              </span>
              <span className="inline-block">
                Designed by{" "}
                <a
                  href="https://www.devbhoomiinfotech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--gold)] underline underline-offset-2 decoration-1 transition hover:text-[var(--coral-dark)]"
                >
                  Devbhoomi Infotech
                </a>
              </span>
            </p>
          </div>
        </Container>
      </section>
    </footer>
  );
}

function FooterColumn({ children, className = "" }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
}

function FooterHeading({ children, className = "items-start text-left" }) {
  return (
    <div className={`mb-2 sm:mb-2.5 lg:mb-3 flex flex-col ${className}`}>
      <h3 className="font-mono text-xs sm:text-[13px] lg:text-[14px] xl:text-[14.5px] font-bold uppercase tracking-wider text-[var(--gold)]">
        {children}
      </h3>
      <span
        aria-hidden="true"
        className="block h-px w-full max-w-[80px] sm:max-w-[100px] bg-[var(--border)] mt-1"
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
    <li className="flex items-center justify-center gap-2 text-center text-[11.5px] sm:grid sm:grid-cols-[1.1rem_1fr] lg:grid-cols-[1.2rem_1fr] sm:items-start sm:gap-2.5 sm:text-left sm:text-xs md:text-[12.5px] lg:text-[14px] xl:text-[14.5px] leading-snug sm:leading-5 lg:leading-6 text-[var(--text)]">
      <Icon
        className="shrink-0 size-3.5 sm:size-4 lg:size-4.5 sm:mt-0.5 stroke-[1.7] text-[var(--coral-dark)]"
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
