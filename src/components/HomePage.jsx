import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bus,
  Check,
  Compass,
  Heart,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Plane,
  ShieldCheck,
  Sparkles,
  Sprout,
  Train,
  Users,
} from "lucide-react";
import {
  courses,
  retreats,
  shortPrograms,
  teacherTrainings,
} from "@/data/coursesData";
import { facilities, faqs, galleryItems, site, teachers } from "@/data/siteData";
import {
  ButtonLink,
  Container,
  Eyebrow,
  FinalCTA,
  JsonLd,
  Media,
  PlaceholderBadge,
  ProgramCard,
  RetreatCard,
  SectionHeading,
} from "./ui";
import { Accordion, Gallery, HorizontalScroller } from "./Interactive";

const whyItems = [
  {
    title: "A curriculum you can inspect",
    content:
      "Every program page separates proposed learning areas from details that still need verification, making it easier to compare scope before applying.",
  },
  {
    title: "Transparent booking information",
    content:
      "Fees, dates, accommodation, and certification are never filled with assumptions. Confirmed information can be added to one shared data source.",
  },
  {
    title: "A grounded Goa setting",
    content:
      "The content helps students plan for coastal weather, travel, rest, and residential study without turning the destination into a marketing cliché.",
  },
  {
    title: "A conversation before payment",
    content:
      "The application flow is designed to collect suitability and accessibility details before any reservation is treated as confirmed.",
  },
];

const comparisonRows = [
  ["Best for", ...teacherTrainings.map((course) => course.bestFor)],
  ["Experience level", ...teacherTrainings.map((course) => course.level)],
  ["Duration", ...teacherTrainings.map((course) => course.duration)],
  ["Outcome", ...teacherTrainings.map((course) => course.outcome)],
  ["Certification", ...teacherTrainings.map((course) => course.certification)],
  ["Starting fee", ...teacherTrainings.map((course) => course.price)],
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="home-hero">
        <Container className="hero-grid">
          <div className="hero-copy">
            <Eyebrow>Yoga study in Goa, India</Eyebrow>
            <h1>
              Yoga teacher training shaped by <em>practice, place & presence.</em>
            </h1>
            <p>
              Explore a calm, residential path to Hatha yoga study at The Hatha
              Yogashala in Goa. Course dates, fees, faculty, and credentials remain
              clearly marked until verified.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/apply">Reserve your spot</ButtonLink>
              <ButtonLink href="/courses" variant="secondary">Explore courses</ButtonLink>
            </div>
            <p className="hero-note">Programs in preparation · Confirmed batch information coming soon</p>
          </div>
          <div className="hero-visual">
            <div className="hero-sun" aria-hidden="true" />
            <div className="hero-image">
              <Image
                src="/images/hero-goa-yoga.png"
                alt="Editorial placeholder of morning meditation at a coastal yoga shala in Goa"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <PlaceholderBadge />
            </div>
            <div className="hero-stats" aria-label="School details awaiting verification">
              {[
                ["[Add]", "Years teaching"],
                ["[Add]", "Graduates"],
                ["[Add]", "Countries"],
                ["[Add]", "Verified rating"],
              ].map(([value, label]) => (
                <div key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="trust-strip" aria-label="Verification summary">
        <Container>
          {[
            ["[Certification Name]", "Verification link pending"],
            ["[Review Profile]", "Verified rating pending"],
            ["[Teaching Experience]", "Years to be confirmed"],
            ["[Graduate Count]", "Approved figure pending"],
            ["Goa, India", "Confirmed location"],
          ].map(([title, text]) => (
            <div key={title} tabIndex="0"><strong>{title}</strong><span>{text}</span></div>
          ))}
        </Container>
      </section>

      <section className="section" id="about">
        <Container className="split-layout">
          <div className="image-collage">
            <Media
              src="/images/course-goa-yoga.png"
              alt="Editorial placeholder of a small yoga class in Goa"
              className="collage-main"
            />
            <Media
              src="/images/accommodation-goa.png"
              alt="Editorial placeholder for yoga school accommodation in Goa"
              className="collage-small"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="The school"
              title="A quieter way to study yoga in Goa"
              text="The Hatha Yogashala is being shaped as a clear, welcoming home for residential learning. This website deliberately separates the experience we are designing from the facts the school still needs to approve."
            />
            <div className="prose-compact">
              <p>
                Goa offers a distinctive rhythm for focused practice: warm coastal mornings,
                layered local culture, and space to slow down between sessions. The learning
                should be just as grounded—structured, transparent, and respectful of each student.
              </p>
            </div>
            <ul className="icon-list">
              {[
                ["Clear course pathways", BookOpen],
                ["Verified claims only", ShieldCheck],
                ["Goa-specific travel guidance", Compass],
                ["Accessible enquiry process", Heart],
              ].map(([label, Icon]) => (
                <li key={label}><Icon aria-hidden="true" size={19} />{label}</li>
              ))}
            </ul>
            <div className="inline-links">
              {teacherTrainings.map((course) => (
                <Link key={course.slug} href={`/courses/${course.slug}`}>{course.hours}</Link>
              ))}
            </div>
            <ButtonLink href="/about" variant="text" className="mt-6">Learn more about us</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section section-peach" id="courses">
        <Container>
          <SectionHeading
            eyebrow="Teacher training"
            title="Choose the depth that fits your path"
            text="Three course frameworks make comparison simple. Final dates, fees, teachers, and certification information remain pending school approval."
          />
          <div className="stacked-programs">
            {teacherTrainings.map((course) => (
              <ProgramCard key={course.slug} course={course} horizontal />
            ))}
          </div>
        </Container>
      </section>

      <section className="partner-strip" aria-label="Credentials and partner placeholders">
        <Container>
          <p>Verification area</p>
          <div className="marquee">
            <div className="marquee-track">
              {["[Certification]", "[Registration]", "[Review profile]", "[Travel partner]"].map((item) => (
                <span key={item}>{item}</span>
              ))}
              <div aria-hidden="true" className="contents">
                {["[Certification]", "[Registration]", "[Review profile]", "[Travel partner]"].map((item) => (
                  <span key={`copy-${item}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section" id="retreats">
        <Container>
          <SectionHeading
            eyebrow="Coastal retreats"
            title="Make room for practice—and for rest"
            text="Compare four retreat lengths without relying on unverified popularity, availability, or pricing claims."
          />
          <div className="retreat-grid">
            {retreats.map((retreat) => <RetreatCard key={retreat.slug} retreat={retreat} />)}
          </div>
        </Container>
      </section>

      <section className="section section-peach" id="short-courses">
        <Container>
          <SectionHeading
            eyebrow="Short programs"
            title="Focused study for a smaller window"
            text="Each outline is ready for an approved syllabus, duration, facilitator, and certification status."
          />
          <div className="short-course-grid">
            {shortPrograms.map((course) => (
              <ProgramCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="split-layout split-reverse">
          <Media
            src="/images/hero-goa-yoga.png"
            alt="Editorial placeholder showing a meditative yoga practice in Goa"
            className="why-image"
          />
          <div>
            <SectionHeading
              eyebrow="A clearer choice"
              title="What should earn your trust"
              text="Rather than publishing claims before they are approved, the site is designed around the questions a careful student should ask."
            />
            <Accordion items={whyItems} />
          </div>
        </Container>
      </section>

      <section className="section section-cream">
        <Container>
          <SectionHeading
            eyebrow="Course comparison"
            title="100, 200, or 300 hours?"
            text="Use the learning goal first. Confirm prerequisites and credentials before applying."
          />
          <div className="comparison">
            <div className="comparison-desktop">
              <div className="comparison-head">
                <span>Compare</span>
                {teacherTrainings.map((course) => (
                  <div key={course.slug} data-featured={course.featured}>
                    {course.featured && <small>Suggested starting point</small>}
                    <strong>{course.hours}</strong>
                  </div>
                ))}
              </div>
              {comparisonRows.map((row) => (
                <div className="comparison-row" key={row[0]}>
                  {row.map((cell, index) => <div key={`${row[0]}-${index}`}>{cell}</div>)}
                </div>
              ))}
            </div>
            <div className="comparison-mobile">
              {teacherTrainings.map((course, courseIndex) => (
                <article className="card card-body" key={course.slug}>
                  <h3>{course.hours}</h3>
                  <dl>
                    {comparisonRows.map((row) => (
                      <div key={row[0]}><dt>{row[0]}</dt><dd>{row[courseIndex + 1]}</dd></div>
                    ))}
                  </dl>
                  <ButtonLink href={`/courses/${course.slug}`} variant="text">Explore program</ButtonLink>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section" id="certification">
        <Container className="certification-grid">
          <div>
            <SectionHeading
              eyebrow="Credentials"
              title="Certification should be easy to verify"
              text="No registration, international recognition, or teaching credential is claimed until the school provides the exact certification name and a public verification source."
            />
            <div className="credential-cards">
              {["[Certification Name]", "[Registration Number]", "[Verification URL]"].map((item) => (
                <div className="card" key={item}><ShieldCheck aria-hidden="true" /><strong>{item}</strong><span>Awaiting verification</span></div>
              ))}
            </div>
            <ButtonLink href="/certification" variant="text" className="mt-7">View credentials page</ButtonLink>
          </div>
          <div className="certificate-placeholder">
            <span>Certificate preview</span>
            <strong>[Add approved certificate image]</strong>
            <p>No sample certificate is displayed as a genuine credential.</p>
          </div>
        </Container>
      </section>

      <section className="section section-peach">
        <Container className="split-layout">
          <div>
            <SectionHeading
              eyebrow="Why Goa"
              title="Coastal energy, cultural depth, practical access"
              text="Goa can support a slower residential rhythm while still offering connections by air, rail, and road. Exact school transfer details remain to be confirmed."
            />
            <div className="location-benefits">
              {[
                ["Natural environment", Leaf],
                ["Living local culture", Sprout],
                ["Time for reflection", Sparkles],
                ["Travel connections", Compass],
              ].map(([label, Icon]) => (
                <div key={label}><Icon aria-hidden="true" /><strong>{label}</strong></div>
              ))}
            </div>
            <ButtonLink href="/contact#travel" variant="text" className="mt-7">Explore arrival planning</ButtonLink>
          </div>
          <div className="location-collage">
            <Media src="/images/hero-goa-yoga.png" alt="Editorial Goa yoga placeholder" className="location-tall" />
            <Media src="/images/accommodation-goa.png" alt="Editorial Goa stay placeholder" className="location-wide" />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="founder-card">
            <Media
              src="/images/hero-goa-yoga.png"
              alt="Founder photograph placeholder"
              className="founder-image"
            />
            <div>
              <Eyebrow>Meet the founder</Eyebrow>
              <h2>{teachers[0].name}</h2>
              <p className="founder-role">{teachers[0].role} · {teachers[0].qualifications}</p>
              <p>{teachers[0].bio}</p>
              <blockquote>“[Add an approved teaching philosophy quote.]”</blockquote>
              <ButtonLink href="/about#founder" variant="text">Read the full story</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section-peach">
        <Container>
          <SectionHeading
            eyebrow="Teaching team"
            title="Learn who will guide your batch"
            text="Teacher names, portraits, biographies, experience, and qualifications remain placeholders until approved."
          />
          <HorizontalScroller label="teachers">
            {teachers.map((teacher, index) => (
              <article className="teacher-card card" key={`${teacher.name}-${index}`}>
                <div className="teacher-avatar"><Users aria-hidden="true" /><PlaceholderBadge /></div>
                <div className="card-body">
                  <h3>{teacher.name}</h3>
                  <p className="teacher-role">{teacher.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((item, specialtyIndex) => (
                      <span className="pill" key={`${item}-${specialtyIndex}`}>{item}</span>
                    ))}
                  </div>
                  <p className="mt-4 text-muted">{teacher.bio}</p>
                  <Link href="/teachers" className="button button-text mt-4">
                    Meet the teachers <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </HorizontalScroller>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Residential experience"
            title="The spaces around the practice matter"
            text="These editorial placeholders show the intended content categories, not the school’s current facilities."
          />
          <div className="facility-grid">
            {facilities.map((facility) => (
              <article key={facility.title}>
                <Image src={facility.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" />
                <div><h3>{facility.title}</h3><p>{facility.text}</p></div>
                <PlaceholderBadge />
              </article>
            ))}
          </div>
          <ButtonLink href="/accommodation" variant="text" className="mt-7">Explore accommodation</ButtonLink>
        </Container>
      </section>

      <section className="section section-cream">
        <Container>
          <SectionHeading
            eyebrow="Student voices"
            title="Verified reviews will live here"
            text="No student names, ratings, countries, quotes, or review platforms have been invented."
          />
          <div className="review-grid">
            {["[Verified review 01]", "[Verified review 02]", "[Verified review 03]"].map((item) => (
              <article className="card card-body" key={item}>
                <p className="eyebrow plain">Review placeholder</p>
                <h3>{item}</h3>
                <p>Add an approved excerpt, student name, course, country, rating, and source link.</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="A glimpse of Goa"
            title="Moments from practice, rest, and the coast"
            text="Generated editorial placeholders are used until original school photography is supplied."
          />
          <Gallery items={galleryItems.slice(0, 6)} filters={false} />
          <ButtonLink href="/gallery" variant="text" className="mt-7">View full gallery</ButtonLink>
        </Container>
      </section>

      <section className="section section-peach" id="faq">
        <Container className="faq-layout">
          <SectionHeading
            eyebrow="Planning support"
            title="Questions worth asking before you enrol"
            text="Answers remain careful where school-specific details have not been verified."
          />
          <Accordion items={faqs} />
        </Container>
      </section>

      <section className="section" id="location">
        <Container>
          <SectionHeading
            eyebrow="Find your way"
            title="Planning your arrival in Goa"
            text="The exact address, map pin, station distances, and transfer services are pending confirmation."
          />
          <div className="contact-location-grid">
            <div className="contact-card">
              <MapPin aria-hidden="true" />
              <div><strong>{site.name}</strong><p>{site.contact.address}</p></div>
            </div>
            <div className="contact-card" id="whatsapp">
              <MessageCircle aria-hidden="true" />
              <div><strong>WhatsApp</strong><p>{site.contact.whatsapp}</p></div>
            </div>
            <div className="contact-card">
              <Mail aria-hidden="true" />
              <div><strong>Email</strong><p>{site.contact.email}</p></div>
            </div>
          </div>
          <div className="travel-grid" id="travel">
            {[
              ["Air", Plane, "[Nearest airport and transfer time]"],
              ["Train", Train, "[Nearest station and transfer time]"],
              ["Bus", Bus, "[Recommended bus arrival point]"],
              ["Car", Mountain, "[Road and parking information]"],
            ].map(([label, Icon, text]) => (
              <div className="card card-body" key={label}><Icon aria-hidden="true" /><h3>{label}</h3><p>{text}</p></div>
            ))}
          </div>
          <div className="map-placeholder">
            <MapPin aria-hidden="true" />
            <strong>Google Map embed pending</strong>
            <p>Add the verified school pin before launch.</p>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
