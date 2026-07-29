import Link from "next/link";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { MessageCircle } from "lucide-react";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { JsonLd } from "@/components/ui";
import { site } from "@/data/siteData";

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
    default: "The Hatha Yogashala | Yoga Teacher Training in Goa",
    template: "%s | The Hatha Yogashala",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Yoga education",
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Hatha Yogashala | Yoga Teacher Training in Goa",
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/course-goa-yoga.png",
        width: 1792,
        height: 896,
        alt: "Yoga teacher training in Goa — editorial placeholder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hatha Yogashala | Yoga Teacher Training in Goa",
    description: site.description,
    images: ["/images/course-goa-yoga.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    url: site.url,
    description: site.description,
    areaServed: { "@type": "AdministrativeArea", name: "Goa" },
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
      <body>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <div className="floating-actions" aria-label="Quick actions">
          <Link href="/apply">Apply now</Link>
          <Link href="/contact#whatsapp" aria-label="Ask on WhatsApp">
            <MessageCircle aria-hidden="true" size={21} />
            <span>WhatsApp</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
