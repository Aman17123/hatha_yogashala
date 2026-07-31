import Link from "next/link";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { SiWhatsapp } from "react-icons/si";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { JsonLd } from "@/components/ui";
import { absoluteUrl, pageSeo, site } from "@/data/siteData";

const heading = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pageSeo.home.title,
    template: "%s | Hatha Yogashala",
  },
  description: pageSeo.home.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Yoga education",
  alternates: { canonical: site.url },
  openGraph: {
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/course-goa-yoga.png",
        alt: "Yoga practice at Hatha Yogashala in Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: ["/images/course-goa-yoga.png"],
  },
  robots: site.hasProductionUrl
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true },
};

export default function RootLayout({ children }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/images/logo.png"),
    image: absoluteUrl(site.defaultImage),
    description: site.description,
    areaServed: { "@type": "AdministrativeArea", name: "Goa" },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Goa",
      addressCountry: "IN",
    },
    sameAs: Object.values(site.social).filter(
      (url) => typeof url === "string" && url.startsWith("https://"),
    ),
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "en-IN",
  };

  return (
    <html lang="en-IN" className={`${heading.variable} ${body.variable}`}>
      <body id="top">
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <div className="floating-actions" aria-label="Quick actions">
          <Link href="/apply">Apply now</Link>
          <Link href="/contact#whatsapp" aria-label="Ask about WhatsApp contact">
            <SiWhatsapp aria-hidden="true" size={21} />
            <span>WhatsApp</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
