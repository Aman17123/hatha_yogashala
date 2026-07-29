import Link from "next/link";
import {
  BookOpen,
  Check,
  Clock3,
  Home,
  Salad,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { courses, teacherTrainings } from "@/data/coursesData";
import { site, teachers } from "@/data/siteData";
import { Accordion, CourseContents } from "./Interactive";
import {
  ButtonLink,
  Container,
  FinalCTA,
  JsonLd,
  Media,
  PageHero,
  ProgramCard,
  SectionHeading,
  Snapshot,
} from "./ui";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Who should join" },
  { id: "curriculum", label: "Curriculum" },
  { id: "schedule", label: "Daily schedule" },
  { id: "teachers", label: "Teachers" },
  { id: "stay", label: "Accommodation & meals" },
  { id: "dates", label: "Dates & pricing" },
  { id: "faq", label: "FAQs" },
];

const courseFaqs = [
  {
    question: "Is this course open for applications?",
    answer:
      "The program framework is published, but dates and availability are not yet verified. Submit an enquiry to receive confirmed information before making travel or payment plans.",
  },
  {
    question: "What certification is included?",
    answer:
      "Certification information is pending verification. The school must provide the exact registering body, course designation, and verification link before a credential is displayed.",
  },
  {
    question: "Does the fee include accommodation and meals?",
    answer:
      "Shared-room, private-room, meal, tuition, and material inclusions remain separate placeholders until the school approves the full fee schedule.",
  },
  {
    question: "Can I join with an injury or health condition?",
    answer:
      "Share relevant health information in your application and seek medical advice where appropriate. The school should confirm whether it can safely support your needs before enrolment.",
  },
];

function DetailCard({ icon: Icon, title, children }) {
  return (
    <article className="card card-body detail-card">
      <Icon aria-hidden="true" />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export default function CourseTemplate({ course }) {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    educationalLevel: course.level,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      url: site.url,
    },
    inLanguage: "en",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: courseFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const related = courses.filter((item) => item.slug !== course.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow={`${course.hours} · ${course.location}`}
        title={course.name}
        text={course.description}
        image={course.image}
      />
      <CourseContents items={toc} />

      <section className="section section-tight">
        <Container>
          <Snapshot
            items={[
              { label: "Duration", value: course.duration, icon: "clock" },
              { label: "Level", value: course.level, icon: "clock" },
              { label: "Location", value: course.location, icon: "location" },
              { label: "Certification", value: course.certification, icon: "calendar" },
            ]}
          />
          <div className="notice mt-6">
            <Sparkles aria-hidden="true" />
            <p><strong>Offers:</strong> No discount, free transfer, bonus course, or limited-seat claim is shown without verified offer data.</p>
          </div>
        </Container>
      </section>

      <section className="section" id="overview">
        <Container className="split-layout">
          <div>
            <SectionHeading
              eyebrow="Course overview"
              title={`A clear framework for ${course.hours} study`}
              text={course.description}
            />
            <div className="prose-compact">
              <p>
                The final course page is designed to publish a complete learning pathway:
                practice, theory, teaching methodology, supervised application, residential
                details, and transparent policies. Items awaiting approval are identified rather
                than filled with generic marketing copy.
              </p>
              <p>
                Before enrolling, ask for the approved syllabus, named teaching team, daily
                contact hours, assessment process, and exact credential issued on completion.
              </p>
            </div>
            <ButtonLink href="/apply" className="mt-6">Apply for this program</ButtonLink>
          </div>
          <Media
            src="/images/course-goa-yoga.png"
            alt={`${course.name} class editorial placeholder`}
            className="course-overview-image"
          />
        </Container>
      </section>

      <section className="section section-peach" id="eligibility">
        <Container>
          <SectionHeading
            eyebrow="Suitability"
            title="Who should join—and what to confirm"
            text={course.bestFor}
          />
          <div className="detail-grid">
            <DetailCard icon={Users} title="Best for">{course.bestFor}</DetailCard>
            <DetailCard icon={Clock3} title="Experience level">{course.level}</DetailCard>
            <DetailCard icon={ShieldCheck} title="Entry requirements">[Add approved age, experience, attendance, health, and language requirements.]</DetailCard>
          </div>
          <div className="two-column-list mt-8">
            <div className="card card-body">
              <h3>Proposed benefits</h3>
              <ul className="check-list">
                {course.focus.map((item, focusIndex) => (
                  <li key={`${item}-${focusIndex}`}><Check aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="card card-body">
              <h3>Important considerations</h3>
              <ul className="check-list">
                {["Confirm physical intensity", "Disclose relevant health conditions", "Verify attendance requirements", "Review cancellation terms"].map((item) => (
                  <li key={item}><Check aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section" id="curriculum">
        <Container className="content-narrow">
          <SectionHeading
            eyebrow="Complete curriculum"
            title="A syllabus built for careful review"
            text="Module content is an editorial framework until the school approves topics, practice details, learning outcomes, and contact hours."
          />
          <Accordion items={course.curriculum} />
          <div className="methodology-grid mt-10">
            {[
              ["Practice", "Guided asana and breathwork with approved modifications."],
              ["Study", "Lectures, discussion, reading, and reflective integration."],
              ["Application", "Observation, sequencing, cueing, and supervised teaching."],
              ["Assessment", "[Add the approved assessment and attendance method.]"],
            ].map(([title, text], index) => (
              <div className="card card-body" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-cream" id="schedule">
        <Container>
          <SectionHeading
            eyebrow="Daily rhythm"
            title="A sample structure—not a promised timetable"
            text="Replace these blocks with the approved daily schedule, breaks, self-study, and rest days."
          />
          <div className="schedule">
            {[
              ["06:00", "[Morning practice]"],
              ["08:00", "[Breakfast]"],
              ["09:30", "[Theory / anatomy]"],
              ["12:30", "[Lunch and rest]"],
              ["15:00", "[Teaching methodology]"],
              ["17:00", "[Evening practice]"],
              ["19:00", "[Dinner / reflection]"],
            ].map(([time, event]) => (
              <div key={time}><time>{time}</time><span>{event}</span></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" id="teachers">
        <Container>
          <SectionHeading
            eyebrow="Course faculty"
            title="Know who will be in the room"
            text="Names, qualifications, subjects, and batch assignments must be verified before launch."
          />
          <div className="teacher-grid">
            {teachers.slice(0, 3).map((teacher, index) => (
              <article className="card card-body" key={`${teacher.name}-${index}`}>
                <div className="teacher-avatar compact"><Users aria-hidden="true" /></div>
                <h3>{teacher.name}</h3>
                <p className="teacher-role">{teacher.role}</p>
                <p>{teacher.qualifications}</p>
              </article>
            ))}
          </div>
          <ButtonLink href="/teachers" variant="text" className="mt-7">Meet the teaching team</ButtonLink>
        </Container>
      </section>

      <section className="section section-peach" id="stay">
        <Container>
          <SectionHeading
            eyebrow="Residential details"
            title="Stay, meals, and time beyond class"
            text="Every inclusion below needs school approval before it becomes a booking promise."
          />
          <div className="detail-grid">
            <DetailCard icon={Home} title="Accommodation">[Add room categories, occupancy, amenities, cleaning, and check-in details.]</DetailCard>
            <DetailCard icon={Salad} title="Meals">[Add confirmed meal frequency, dietary options, allergens, and water information.]</DetailCard>
            <DetailCard icon={Sparkles} title="Excursions">[Add only included activities, transport, entry fees, and weather alternatives.]</DetailCard>
          </div>
          <div className="inclusion-grid mt-8">
            <div className="card card-body">
              <h3><Check aria-hidden="true" /> Included</h3>
              <ul>{["[Tuition details]", "[Room type]", "[Meal plan]", "[Study materials]", "[Verified certification fee]"].map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card card-body">
              <h3><X aria-hidden="true" /> Not included</h3>
              <ul>{["[Flights]", "[Visa]", "[Insurance]", "[Transfers]", "[Personal expenses]"].map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <ButtonLink href="/accommodation" variant="text" className="mt-7">View accommodation</ButtonLink>
        </Container>
      </section>

      <section className="section" id="dates">
        <Container>
          <SectionHeading
            eyebrow="Dates & investment"
            title="Book from confirmed information"
            text="No batch, room price, discount, savings percentage, deposit, or availability status has been supplied."
          />
          <div className="pricing-summary">
            <div className="card card-body">
              <span>Upcoming dates</span>
              <strong>[Add confirmed batch dates]</strong>
              <p>Applications should not be treated as confirmed until the school responds.</p>
            </div>
            <div className="card card-body">
              <span>Shared room</span>
              <strong>[Add confirmed fee]</strong>
              <p>[Add inclusions and taxes.]</p>
            </div>
            <div className="card card-body">
              <span>Private room</span>
              <strong>[Add confirmed fee]</strong>
              <p>[Add inclusions and taxes.]</p>
            </div>
          </div>
          <div className="policy-grid mt-8">
            <article><h3>Payment information</h3><p>[Add approved deposit, balance, payment method, currency, taxes, and receipt process.]</p><Link href="/payment-policy">Read payment policy</Link></article>
            <article><h3>Cancellation policy</h3><p>[Add approved cancellation, transfer, refund, and force-majeure terms.]</p><Link href="/terms">Read terms</Link></article>
            <article><h3>Certification</h3><p>{course.certification}</p><Link href="/certification">Verification details</Link></article>
          </div>
          <ButtonLink href="/apply" className="mt-8">Apply for confirmed dates</ButtonLink>
        </Container>
      </section>

      <section className="section section-cream">
        <Container>
          <SectionHeading
            eyebrow="Student reviews"
            title="Course testimonials pending verification"
            text="Approved student names, quotes, ratings, and source links can be added here without changing the template."
          />
          <div className="empty-state large">[Add verified testimonials for this course]</div>
        </Container>
      </section>

      <section className="section section-peach" id="faq">
        <Container className="content-narrow">
          <SectionHeading eyebrow="Course FAQ" title="Before you apply" />
          <Accordion items={courseFaqs} />
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading eyebrow="Related study" title="Continue exploring" />
          <div className="short-course-grid">
            {related.map((item) => <ProgramCard course={item} key={item.slug} />)}
          </div>
        </Container>
      </section>

      <FinalCTA
        title={`Ask about ${course.name}`}
        text="The form records your preferences, but a place is only reserved after the school confirms suitability, dates, price, and payment instructions."
      />
    </>
  );
}
