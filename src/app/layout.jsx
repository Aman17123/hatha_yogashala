import Link from "next/link";
import { Gotu, Manrope, Quicksand } from "next/font/google";
import { ClipboardList } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import "./globals.css";
import "../styles/main.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { JsonLd } from "@/components/ui";
import { absoluteUrl, pageSeo, reviewProfile, site } from "@/data/siteData";

const heading = Gotu({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp",
        width: 1792,
        height: 896,
        alt: "Hatha Yogashala yoga school campus in Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: ["/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp"],
  },
  robots: { index: true, follow: true },
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
    telephone: site.contact.phone,
    email: site.contact.email,
    areaServed: { "@type": "AdministrativeArea", name: "Goa" },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Goa",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewProfile.rating,
      reviewCount: reviewProfile.reviewCount,
      bestRating: 5,
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
    dateModified: "2026-07-20",
  };

  return (
    <html lang="en-IN" className={`${heading.variable} ${body.variable} ${quicksand.variable}`}>
      <body id="top">
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <div className="floating-actions" aria-label="Quick actions">
          <Link href="/apply">
            <ClipboardList aria-hidden="true" size={22} />
            <span>Apply now</span>
          </Link>
          <Link href="/contact#whatsapp" className="fa-wa" aria-label="Chat with us on WhatsApp">
            <SiWhatsapp aria-hidden="true" size={34} />
            <span className="fa-tooltip" role="tooltip">Chat with us</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
