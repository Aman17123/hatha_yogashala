import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/siteData";
import { Container } from "@/components/shared/SiteUI";
import { Reveal } from "@/components/Interactive";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Founder", "/founder"],
  ["Our Teachers", "/teachers"],
  ["Blog", "/blog"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"],
  ["YTTC Pricing & Dates", "/pricing"],
];

const courseLinks = [
  ["100 Hour YTTC", "/courses/100-hour-yoga-teacher-training-goa"],
  ["200 Hour YTTC", "/courses/200-hour-yoga-teacher-training-goa"],
  ["300 Hour YTTC", "/courses/300-hour-yoga-teacher-training-goa"],
  ["3-Day Yoga Retreat", "/retreats/3-day-yoga-retreat-goa"],
  ["5-Day Yoga Retreat", "/retreats/5-day-yoga-retreat-goa"],
  ["7-Day Yoga Retreat", "/retreats/7-day-yoga-retreat-goa"],
  ["10-Day Yoga Retreat", "/retreats/10-day-yoga-retreat-goa"],
];

const socialLinks = [
  {
    label: "Instagram",
    href: site.social.instagram,
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: site.social.facebook,
    Icon: FacebookIcon,
  },
  {
    label: "YouTube",
    href: site.social.youtube,
    Icon: YouTubeIcon,
  },
];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative isolate overflow-hidden bg-[#f8f6f1] text-[#14151a]"
    >
      {/* faint 1px grid — quiet texture, no glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(20,21,26,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(20,21,26,0.6)_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden="true"
      />

      {/* top band: glowing logo watermark behind eyebrow + heading + status badge + cta */}
      <section className="relative z-10 overflow-hidden">
        {/* glowing background mark — the one flourish, everything else stays quiet */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
          aria-hidden="true"
        >
          <div className="relative -mt-16 size-[30rem] md:size-[38rem]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.18)_0%,rgba(201,169,97,0.08)_42%,transparent_68%)] blur-lg" />
            <Image
              src="/images/logo2.png"
              alt=""
              fill
              unoptimized
              className="object-contain opacity-[0.22]"
            />
          </div>
        </div>

        <Container>
          <div className="relative flex flex-col items-center gap-6 py-16 text-center md:py-20">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[#9c7a3d]">
              Breathe · Move · Awaken
            </p>
            <h2 className="max-w-xl font-serif text-[clamp(2rem,4.2vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.02em] text-[#0c0d12]">
              Begin your yoga journey in Goa
            </h2>

            <div className="mt-2 flex flex-col items-center gap-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#14151a]/15 bg-[#14151a]/[0.03] px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#14151a]/70">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1f9d55] opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[#1f9d55]" />
                </span>
                Confirm dates & availability · Goa, IN
              </span>

              <Link
                href="/pricing"
                className="group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-md border border-[#14151a]/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0c0d12] transition duration-200 hover:border-[#9c7a3d] hover:bg-[#9c7a3d]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9c7a3d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f6f1]"
              >
                Explore YTTC & retreats
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
          <Reveal className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:gap-10">
            <FooterColumn>
              <Link
                href="/"
                className="mb-6 inline-flex items-center"
                aria-label={`${site.name} home`}
              >
                <Image
                  src="/images/logo.png"
                  alt="The Hatha Yogashala"
                  width={180}
                  height={72}
                  unoptimized
                  className="h-16 w-auto object-contain"
                />
              </Link>

              <p className="max-w-xs text-sm leading-6 text-[#14151a]/55">
                Traditional Hatha yoga teacher training and mindful residential
                retreats in Goa, India.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {socialLinks.map(({ label, href, Icon }) =>
                  typeof href === "string" && href.startsWith("https://") ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="grid size-9 place-items-center rounded-md border border-[#14151a]/15 text-[#14151a]/60 transition duration-200 hover:border-[#9c7a3d] hover:text-[#9c7a3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9c7a3d]"
                    >
                      <Icon
                        className="size-4 stroke-[1.7]"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <span
                      key={label}
                      aria-label={`${label} link pending`}
                      title={`${label} link pending`}
                      className="grid size-9 place-items-center rounded-md border border-[#14151a]/15 text-[#14151a]/35"
                    >
                      <Icon
                        className="size-4 stroke-[1.7]"
                        aria-hidden="true"
                      />
                    </span>
                  ),
                )}
              </div>
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Quick Links</FooterHeading>
              <FooterLinkList links={quickLinks} />
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Course Links</FooterHeading>
              <FooterLinkList links={courseLinks} />
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Contact Us</FooterHeading>
              <ul className="m-0 list-none space-y-4 p-0">
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
                className="group mt-7 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[#9c7a3d] transition hover:text-[#0c0d12]"
              >
                Send an enquiry
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </FooterColumn>
          </Reveal>

          {/* bottom bar */}
          <div className="flex flex-col gap-4 border-t border-[#14151a]/10 py-6 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[#14151a]/70 md:flex-row md:items-center md:justify-between">
            <p>
              {site.name} <span className="text-[#14151a]/45">·</span> ©{" "}
              {new Date().getFullYear()}
            </p>

            <nav
              className="flex flex-wrap gap-x-5 gap-y-2"
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
              className="group inline-flex items-center gap-2 transition hover:text-[#0c0d12]"
            >
              Back to top
              <ArrowUp
                className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5"
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
  return <div>{children}</div>;
}

function FooterHeading({ children }) {
  return (
    <h3 className="mb-5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[#9c7a3d]">
      {children}
    </h3>
  );
}

function FooterLinkList({ links }) {
  return (
    <ul className="m-0 list-none space-y-3 p-0">
      {links.map(([label, href]) => (
        <li key={href}>
          <Link
            href={href}
            className="group inline-flex items-center gap-2 text-sm leading-6 text-[#14151a]/58 transition duration-150 hover:text-[#0c0d12]"
          >
            <span>{label}</span>
            <ArrowUpRight
              className="size-3 -translate-x-1 opacity-0 transition duration-150 group-hover:translate-x-0 group-hover:opacity-100"
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
    <li className="grid grid-cols-[1.1rem_1fr] items-start gap-3 text-sm leading-6 text-[#14151a]/58">
      <Icon
        className="mt-1 size-4 stroke-[1.7] text-[#9c7a3d]"
        aria-hidden="true"
      />
      {children}
    </li>
  );
}

function FooterPolicyLink({ href, children }) {
  return (
    <Link href={href} className="transition hover:text-[#0c0d12]">
      {children}
    </Link>
  );
}

function InstagramIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M13.7 21v-8h2.8l.42-3.1H13.7V7.92c0-.9.26-1.5 1.62-1.5h1.73V3.65c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.22 1.49-4.22 4.23V9.9H7.47V13h2.83v8h3.4Z" />
    </svg>
  );
}

function YouTubeIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M21.58 7.19a2.72 2.72 0 0 0-1.91-1.93C17.99 4.8 12 4.8 12 4.8s-5.99 0-7.67.46a2.72 2.72 0 0 0-1.91 1.93A28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .42 4.81 2.72 2.72 0 0 0 1.91 1.93c1.68.46 7.67.46 7.67.46s5.99 0 7.67-.46a2.72 2.72 0 0 0 1.91-1.93A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.42-4.81ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" />
    </svg>
  );
}
