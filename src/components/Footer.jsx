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
    label: "TripAdvisor",
    name: "tripadvisor",
    href: site.social.tripadvisor,
  },
  {
    label: "Email",
    name: "gmail",
    href: `mailto:${site.contact.email}`,
  },
  {
    label: "WhatsApp",
    name: "whatsapp",
    href: whatsappLink(),
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
            <h2 className="max-w-xl font-serif text-[22px] md:text-[26px] lg:text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-[var(--brown)]">
              Begin your yoga journey in Goa
            </h2>

            <div className="mt-1 flex flex-col items-center gap-3">
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
      <section className="relative z-10 -mt-10">
        <Container>
          <Reveal className="grid gap-6 py-6 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:gap-6">
            <FooterColumn>
              <Link
                href="/"
                className="mb-4 inline-flex items-center justify-center sm:justify-start"
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

              <p className="mx-auto max-w-xs text-[13px] leading-5 text-[var(--brown)] sm:mx-0">
                Traditional Hatha yoga teacher training and mindful residential
                retreats in Goa, India.
              </p>

              <div className="mx-auto mt-3 grid w-fit grid-cols-4 gap-2 sm:mx-0">
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
                      className="grid size-9 place-items-center rounded-md border border-[var(--brown)]/15 bg-white transition duration-200 hover:border-[var(--brown)]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                    >
                      <BrandLogo name={name} alt={label} className="size-5" />
                    </a>
                  ) : (
                    <span
                      key={label}
                      role="img"
                      aria-label={`${label} link pending`}
                      title={`${label} link pending`}
                      className="grid size-9 place-items-center rounded-md border border-[var(--brown)]/15 text-[var(--brown)]/60"
                    >
                      <BrandLogo name={name} className="size-5 opacity-40" />
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
          <div className="flex flex-col items-center gap-2 border-t border-[var(--brown)]/10 py-3 text-center font-mono text-[10.4px] uppercase tracking-[0.14em] text-[var(--brown)] md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              {site.name} <span className="text-[var(--brown)]/60">·</span> ©{" "}
              {new Date().getFullYear()}
            </p>

            <nav
              className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start"
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
  return (
    <div className="flex flex-col items-center sm:items-start">{children}</div>
  );
}

function FooterHeading({ children }) {
  return (
    <div className="mb-3 flex flex-col items-center sm:items-start">
      <h3 className=" font-mono text-[25px] uppercase  ">{children}</h3>
      <span aria-hidden="true" className="block h-px w-[80%] bg-[#2A2A22]" />
    </div>
  );
}

function FooterLinkList({ links }) {
  return (
    <ul className="m-0 list-none space-y-1 p-0">
      {links.map(([label, href]) => (
        <li key={href}>
          <Link
            href={href}
            className="group inline-flex items-center gap-2 font-medium text-[13px] leading-5 text-[#2A2A22] transition duration-150 hover:text-[#2C7F74]"
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
    <li className="grid grid-cols-[1.1rem_1fr] items-start gap-3 text-left text-[13px] leading-5 text-[#2A2A22]">
      <Icon
        className="mt-0.5 size-4 stroke-[1.7] text-[#2C7F74]"
        aria-hidden="true"
      />
      {children}
    </li>
  );
}

function FooterPolicyLink({ href, children }) {
  return (
    <Link href={href} className="transition hover:text-[#2C7F74]">
      {children}
    </Link>
  );
}
