import Link from "next/link";
import { Gotu, Manrope, Quicksand, Philosopher } from "next/font/google";
import { ClipboardList } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import "./tailwind.css";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { JsonLd } from "@/components/ui";
import { site, whatsappLink } from "@/data/siteData";
import { siteIdentityGraphSchema } from "@/lib/schema";

const heading = Gotu({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
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
    default:
      "Yoga School in Goa | Teacher Training & Retreats – The Hatha Yogashala",
    template: "%s | The Hatha Yogashala",
  },
  description:
    "Yoga Alliance-registered yoga school in Goa offering 100–300-hour teacher training and 3–7 day wellness retreats near Querim beach, North Goa. Book now.",
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
    title:
      "Yoga School in Goa | Teacher Training & Retreats – The Hatha Yogashala",
    description:
      "Yoga Alliance-registered yoga school in Goa offering 100–300-hour teacher training and 3–7 day wellness retreats near Querim beach, North Goa. Book now.",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yoga students practicing teacher training alignment at The Hatha Yogashala in Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hathayogashala",
    title:
      "Yoga School in Goa | Teacher Training & Retreats – The Hatha Yogashala",
    description:
      "Yoga Alliance-registered yoga school in Goa offering 100–300-hour teacher training and 3–7 day wellness retreats near Querim beach, North Goa. Book now.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${heading.variable} ${philosopher.variable} ${body.variable} ${quicksand.variable}`}
      suppressHydrationWarning
    >
      <body id="top" suppressHydrationWarning>
        <JsonLd data={siteIdentityGraphSchema()} />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <div className="floating-actions" aria-label="Quick actions">
          <Link href="/apply">
            <ClipboardList aria-hidden="true" size={22} />
            <span>Apply now</span>
          </Link>
          <a
            href={whatsappLink(
              "Hi The Hatha Yogashala, I would like to know more about your Yoga Teacher Training courses, retreats, and upcoming batch availability.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="fa-wa"
            aria-label="Chat with us on WhatsApp"
          >
            <SiWhatsapp aria-hidden="true" size={34} />
            <span className="fa-tooltip" role="tooltip">
              Chat with us
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}
