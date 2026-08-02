import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
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
    Icon: SiInstagram,
    color: "#E4405F",
  },
  {
    label: "Facebook",
    href: site.social.facebook,
    Icon: SiFacebook,
    color: "#1877F2",
  },
  {
    label: "YouTube",
    href: site.social.youtube,
    Icon: SiYoutube,
    color: "#FF0000",
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
      <section className="relative z-10 ">
        {/* glowing background mark — the one flourish, everything else stays quiet */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
          aria-hidden="true"
        >
          <div className="relative -mt-16 size-[26rem] md:size-[30rem]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.18)_0%,rgba(201,169,97,0.08)_42%,transparent_68%)] blur-lg" />
            <Image
              src="/images/logo2.png"
              alt="The_hatha_Yogashala_logo_Best_ypgashala_Goa"
              fill
              unoptimized
              className="object-contain opacity-[0.22]"
            />
          </div>
        </div>

        <Container>
          <div className="relative flex flex-col items-center gap-3 py-6 text-center md:py-8">
            <p className="font-mono text-[10.9px] uppercase tracking-[0.32em] text-[var(--gold)]">
              Breathe · Move · Awaken
            </p>
            <h2 className="max-w-xl font-serif text-[clamp(22px,2.6vw,32px)] font-normal leading-[1.05] tracking-[-0.02em] text-[var(--brown)]">
              Begin your yoga journey in Goa
            </h2>

            <div className="mt-1 flex flex-col items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brown)]/15 bg-[var(--brown)]/[0.03] px-3.5 py-1.5 font-mono text-[10.4px] uppercase tracking-[0.2em] text-[var(--brown)]/70">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1f9d55] opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[#1f9d55]" />
                </span>
                Confirm dates & availability · Goa, IN
              </span>

              <Link
                href="/pricing"
                className="group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-md border border-[var(--brown)]/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brown)] transition duration-200 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cream)]"
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
          <Reveal className="grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:gap-6">
            <FooterColumn>
              <Link
                href="/"
                className="mb-4 inline-flex items-center"
                aria-label={`${site.name} home`}
              >
                <Image
                  src="/images/logo.png"
                  alt="Hatha Yogashala"
                  width={180}
                  height={72}
                  unoptimized
                  className="h-14 w-auto object-contain"
                />
              </Link>

              <p className="max-w-xs text-[13px] leading-5 text-[var(--brown)]/55">
                Traditional Hatha yoga teacher training and mindful residential
                retreats in Goa, India.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map(({ label, href, Icon, color }) =>
                  typeof href === "string" && href.startsWith("https://") ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="grid size-9 place-items-center rounded-md border border-[var(--brown)]/15 transition duration-200 hover:border-[var(--brown)]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                    >
                      <Icon
                        className="size-4"
                        color={color}
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <span
                      key={label}
                      aria-label={`${label} link pending`}
                      title={`${label} link pending`}
                      className="grid size-9 place-items-center rounded-md border border-[var(--brown)]/15 text-[var(--brown)]/35"
                    >
                      <Icon className="size-4" aria-hidden="true" />
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
              <ul className="m-0 list-none space-y-1.5 p-0">
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
                className="group mt-3 inline-flex items-center gap-2 font-mono text-[11.2px] uppercase tracking-[0.14em] text-[var(--gold)] transition hover:text-[var(--brown)]"
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
          <div className="flex flex-col gap-2 border-t border-[var(--brown)]/10 py-3 font-mono text-[10.4px] uppercase tracking-[0.14em] text-[var(--brown)]/70 md:flex-row md:items-center md:justify-between">
            <p>
              {site.name} <span className="text-[var(--brown)]/45">·</span> ©{" "}
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
              className="group inline-flex items-center gap-2 transition hover:text-[var(--brown)]"
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
    <h3 className="mb-2 font-mono text-[10.9px] uppercase tracking-[0.2em] text-[var(--gold)]">
      {children}
    </h3>
  );
}

function FooterLinkList({ links }) {
  return (
    <ul className="m-0 list-none space-y-1 p-0">
      {links.map(([label, href]) => (
        <li key={href}>
          <Link
            href={href}
            className="group inline-flex items-center gap-2 text-[13px] leading-5 text-[var(--brown)]/58 transition duration-150 hover:text-[var(--brown)]"
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
    <li className="grid grid-cols-[1.1rem_1fr] items-start gap-3 text-[13px] leading-5 text-[var(--brown)]/58">
      <Icon
        className="mt-0.5 size-4 stroke-[1.7] text-[var(--gold)]"
        aria-hidden="true"
      />
      {children}
    </li>
  );
}

function FooterPolicyLink({ href, children }) {
  return (
    <Link href={href} className="transition hover:text-[var(--brown)]">
      {children}
    </Link>
  );
}
