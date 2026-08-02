import Link from "next/link";
import {
  Activity,
  Award,
  Backpack,
  BadgeCheck,
  BookOpen,
  Brain,
  Check,
  ClipboardCheck,
  Compass,
  Feather,
  GraduationCap,
  Handshake,
  Heart,
  Home,
  Layers,
  MapPin,
  Moon,
  Music2,
  Network,
  NotebookText,
  PersonStanding,
  Plane,
  ReceiptText,
  Salad,
  Scale,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sunrise,
  Target,
  Timer,
  UserRound,
  Users,
  Wind,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { teacherTrainings } from "@/data/coursesData";
import {
  absoluteUrl,
  galleryItems,
  site,
  teachers,
  testimonials,
  whatsappLink,
} from "@/data/siteData";
import {
  Accordion,
  CourseContents,
  Gallery,
  Reveal,
} from "./Interactive";
import {
  ButtonLink,
  Container,
  FinalCTA,
  GoogleMark,
  JsonLd,
  Media,
  PageHero,
  PriceRow,
  ProgramCard,
  SectionHeading,
  Snapshot,
} from "./ui";

const segmentIcons = {
  sprout: Sprout,
  backpack: Backpack,
  user: UserRound,
  graduation: GraduationCap,
  heart: Heart,
  compass: Compass,
  users: Users,
  target: Target,
};

const whyIcons = {
  shield: ShieldCheck,
  award: Award,
  layers: Layers,
  map: MapPin,
  receipt: ReceiptText,
  network: Network,
  users: Users,
  graduation: GraduationCap,
  badge: BadgeCheck,
  feather: Feather,
  target: Target,
};

const moduleIcons = {
  asana: PersonStanding,
  breath: Wind,
  observation: NotebookText,
  sequencing: Layers,
  meditation: Brain,
  ethics: Scale,
  anatomy: Activity,
  adjustment: Handshake,
  feather: Feather,
  teaching: GraduationCap,
  target: Target,
};

const journeyIcons = {
  arrival: Plane,
  ceremony: Sunrise,
  foundation: BookOpen,
  rest: Moon,
  certification: Award,
  teaching: Users,
};

function formatDateRange(start, end) {
  if (
    !start ||
    !end ||
    String(start).startsWith("Available") ||
    String(start).startsWith("Confirm")
  ) {
    return null;
  }
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return null;
  }
  const monthDay = { month: "short", day: "numeric" };
  const withYear = { month: "short", day: "numeric", year: "numeric" };
  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  return `${new Intl.DateTimeFormat("en-IN", monthDay).format(startDate)} – ${new Intl.DateTimeFormat("en-IN", sameYear ? monthDay : withYear).format(endDate)}`;
}

const toc = [
  { id: "what-is", label: "What is it" },
  { id: "overview", label: "Introduction" },
  { id: "eligibility", label: "Who can join" },
  { id: "why-us", label: "Why choose us" },
  { id: "outcomes", label: "Learning outcomes" },
  { id: "teachers", label: "Teachers" },
  { id: "certification", label: "Certification" },
  { id: "journey", label: "Course journey" },
  { id: "schedule", label: "Daily schedule" },
  { id: "curriculum", label: "Detailed syllabus" },
  { id: "dates", label: "Dates & pricing" },
  { id: "package", label: "Included & what to bring" },
  { id: "stay", label: "Accommodation & food" },
  { id: "goa", label: "Goa experience" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQs" },
  { id: "directions", label: "Directions" },
];

function courseFaqs(course) {
  return course.faq.length
    ? course.faq
    : [
        {
          question: `Who can join ${course.name}?`,
          answer: `${course.bestFor}. Review the prerequisites and share relevant health, injury, pregnancy, accessibility, or support needs before booking.`,
        },
        {
          question: "What does the course fee include?",
          answer:
            "Use the itemised written offer as the source of truth for tuition, room, meals, materials, transfers, taxes, completion documents, and optional costs.",
        },
        {
          question: "When is a place confirmed?",
          answer:
            "A place is confirmed only after written acceptance, approved dates and price, agreed booking terms, and payment through the school’s official method.",
        },
      ];
}

export default function CourseTemplate({ course }) {
  const isTeacherTraining = course.hours !== "Short course";
  const publishedTeachers = teachers.filter(
    (teacher) => teacher.name && !teacher.name.startsWith("["),
  );
  const faqs = courseFaqs(course);
  const courseUrl = absoluteUrl(`/courses/${course.slug}`);
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: courseUrl,
    educationalLevel: course.level,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      url: site.url,
    },
    inLanguage: "en-IN",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Yoga courses",
        item: absoluteUrl("/courses"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.name,
        item: courseUrl,
      },
    ],
  };
  const related = teacherTrainings
    .filter((item) => item.slug !== course.slug)
    .slice(0, 3);
  const tocItems = toc.filter(
    (item) =>
      (item.id !== "why-us" || course.whyChoose) &&
      (item.id !== "journey" || course.journey),
  );
  const currency = course.pricing?.currency || "$";
  const batches = course.courseDates.length
    ? course.courseDates
    : [
        {
          id: "enquiry",
          start: "Available by enquiry",
          end: "Confirmed with start date",
          duration: course.duration,
          shared: course.price,
          private: course.privatePrice,
          availability: course.bookingStatus,
        },
      ];
  const learning = course.learningModules ||
    course.learningOutcomes.map((item) => [item, "Developed through guided practice, discussion, observation, and reflection."]);
  const schedule = course.dailySchedule || course.schedule.map(([time, item]) => [time, item]);
  const stay = course.accommodation || {
    overview: `${course.room}. Confirm occupancy, bathroom, cooling, Wi-Fi, housekeeping, accessibility, water, and price in writing.`,
    food: `${course.meals}. Confirm frequency, dietary requests, allergens, kitchen arrangements, and rest-day service.`,
    images: galleryItems.slice(0, 3).map((item) => ({
      src: item.src,
      alt: item.alt,
      caption: item.caption,
    })),
  };

  return (
    <>
      {isTeacherTraining && <JsonLd data={courseSchema} />}
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow={`${course.hours} · ${course.location}`}
        title={course.name}
        text={course.heroIntroduction || course.description}
        image={course.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Yoga courses", href: "/courses" },
          { label: course.name },
        ]}
        facts={[
          { label: "Duration", value: course.duration },
          { label: "Level", value: course.level },
          { label: "Yoga styles", value: course.yogaStyles.join(" · ") },
          { label: "Format", value: course.format },
          { label: "Location", value: course.location },
        ]}
        actions={[
          { label: "Reserve Your Spot", href: "/apply" },
          {
            label: "Ask on WhatsApp",
            href: "/contact#whatsapp",
            variant: "light",
            icon: <SiWhatsapp size={16} aria-hidden="true" />,
          },
        ]}
      />
      <CourseContents items={tocItems} />

      <section className="section section-tight">
        <Container>
          <SectionHeading
            eyebrow="Course at a glance"
            title="The essential details in one place"
            text="Unknown batch details remain neutral until the school supplies written confirmation."
          />
          <Snapshot
            items={[
              { label: "Duration", value: course.duration, icon: "clock" },
              { label: "Course level", value: course.level, icon: "clock" },
              {
                label: "Yoga styles",
                value: course.yogaStyles.join(", "),
                icon: "clock",
              },
              { label: "Batch size", value: course.batchSize, icon: "clock" },
              {
                label: "Teaching language",
                value: course.teachingLanguage,
                icon: "calendar",
              },
              { label: "Location", value: course.location, icon: "location" },
              { label: "Course dates", value: course.date, icon: "calendar" },
              { label: "Daily meals", value: course.meals, icon: "calendar" },
              {
                label: "Accommodation",
                value: course.room,
                icon: "location",
              },
              {
                label: "Shared-room price",
                value: course.price,
                icon: "calendar",
              },
              {
                label: "Private-room price",
                value: course.privatePrice,
                icon: "calendar",
              },
              {
                label: "Booking status",
                value: course.bookingStatus,
                icon: "calendar",
              },
            ]}
          />
        </Container>
      </section>

      {course.whatIs && (
        <section className="section" id="what-is">
          <Container className="content-narrow">
            <SectionHeading
              eyebrow="What it is"
              title={course.whatIs.heading}
            />
            <div className="prose-compact">
              {course.whatIs.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {course.whatIs.points?.length > 0 && (
              <ul className="check-list mt-6">
                {course.whatIs.points.map((point) => (
                  <li key={point}>
                    <Check aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </section>
      )}

      <section className="section" id="overview">
        <Container className="split-layout">
          <div>
            <SectionHeading
              eyebrow="Course introduction"
              title={`What the ${course.hours} course is—and is not`}
              text={course.description}
            />
            <div className="prose-compact">
              {course.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {course.slug === "100-hour-yoga-teacher-training-goa" && (
                <>
                  <p>
                    Beginners can join when the school confirms suitability.
                    Practice and theory support one another: a concept from
                    philosophy or anatomy returns to the mat, while a question
                    from practice becomes material for discussion.
                  </p>
                  <p>
                    Goa gives the residential course a coastal context, but the
                    learning remains the centre. Morning practice, classes,
                    meals, self-study, and recovery sit inside one routine.
                    Whether these hours form part of a longer pathway must be
                    confirmed in writing; no transfer is assumed.
                  </p>
                </>
              )}
            </div>
            <ButtonLink href="/apply" className="mt-6">
              Ask about this course
            </ButtonLink>
          </div>
          <Media
            src={course.image}
            alt={`Students learning during ${course.name}`}
            className="course-overview-image"
          />
        </Container>
      </section>

      <section className="section section-peach" id="eligibility">
        <Container>
          <SectionHeading
            eyebrow="Who can join"
            title="Choose by readiness and intention"
            text={course.bestFor}
          />
          <div className="feature-grid three">
            {(course.whoCanJoin ||
              course.designedFor.map((title) => ({
                title,
                content:
                  "Review the course scope and prerequisites, then share relevant experience and support needs before enrolment.",
              }))).map((item) => {
              const Icon = segmentIcons[item.icon] || Users;
              return (
                <article className="card card-body feature-card" key={item.title}>
                  <span className="feature-icon">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </article>
              );
            })}
          </div>
          <article className="card card-body mt-8">
            <h3 className="flex items-center gap-2">
              <ClipboardCheck aria-hidden="true" />
              Requirements and considerations
            </h3>
            <dl className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {(course.requirements ||
                course.prerequisites.map((value, index) => ({
                  label: `Requirement ${index + 1}`,
                  value,
                }))).map((item) => (
                <div className="border-t border-black/10 pt-3" key={item.label}>
                  <dt className="font-bold">{item.label}</dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        </Container>
      </section>

      {course.whyChoose && (
        <section className="section" id="why-us">
          <Container>
            <SectionHeading
              eyebrow="Why Hatha Yogashala"
              title="Practical reasons to look closer"
              text="Each benefit is explained without inventing a teacher, class limit, credential, price, or included activity."
            />
            <div className="feature-grid three">
              {course.whyChoose.map((item) => {
                const Icon = whyIcons[item.icon] || Sparkles;
                return (
                  <article className="card card-body feature-card" key={item.title}>
                    <span className="feature-icon">
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      <section className="section section-cream" id="outcomes">
        <Container>
          <SectionHeading
            eyebrow="Learning outcomes"
            title="What the course is designed to develop"
            text={course.outcome}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {learning.map(([title, text], index) => (
              <article className="card card-body" key={title}>
                <span className="pill">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" id="teachers">
        <Container>
          <SectionHeading
            eyebrow="Course teachers"
            title="Know who will teach your batch"
            text="Only faculty with an approved name, portrait, role, specialisation, experience, biography, and batch assignment are displayed."
          />
          {publishedTeachers.length ? (
            <div className="course-teacher-grid">
              {publishedTeachers.map((teacher) => (
                <article className="card overflow-hidden" key={teacher.name}>
                  <div className="course-teacher-media">
                    <Media
                      src={teacher.image || "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-portrait.webp"}
                      alt={teacher.name}
                      className="h-full w-full"
                    />
                    {teacher.experience && (
                      <span className="course-teacher-exp">
                        {teacher.experience}
                      </span>
                    )}
                  </div>
                  <div className="card-body">
                    <h3>{teacher.name}</h3>
                    <p className="teacher-role">{teacher.role}</p>
                    <div className="course-teacher-tags">
                      {(teacher.specialties || []).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <p className="mt-3">{teacher.bio}</p>
                    {teacher.qualifications && (
                      <p className="mt-3 text-sm text-muted">
                        {teacher.qualifications}
                      </p>
                    )}
                    {teacher.href && (
                      <Link
                        className="button button-text mt-4"
                        href={teacher.href}
                      >
                        View teacher profile
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="notice">
              <Users aria-hidden="true" />
              <p>
                <strong>Faculty assignments are not yet published.</strong>{" "}
                Request the teacher names, roles, qualifications, experience,
                biographies, and subject allocation for your batch before
                booking.
              </p>
            </div>
          )}
          <ButtonLink href="/teachers" variant="text" className="mt-7">
            Meet Our Teachers
          </ButtonLink>
        </Container>
      </section>

      <section className="section section-peach" id="certification">
        <Container className="certification-grid">
          <div>
            <SectionHeading
              eyebrow="Certification"
              title="Understand exactly what completion means"
              text={course.certification}
            />
            <div className="prose-compact">
              <p>
                The written offer should name the document, issuer, course
                designation, attendance and assessment conditions, issue date,
                verification route, and any external registration steps or
                fees.
              </p>
              <p>
                No Yoga Alliance, AYUSH, professional, international, or
                stacked-hour recognition is claimed unless the school provides
                a public source that supports the exact statement.
              </p>
            </div>
            <ButtonLink href="/certification" variant="text" className="mt-6">
              Review certification guidance
            </ButtonLink>
          </div>
          <div className="card card-body grid place-items-center text-center">
            <ShieldCheck aria-hidden="true" size={52} />
            <h3 className="mt-4">No unverified certification logo</h3>
            <p className="mt-2 text-muted">
              An approved logo or certificate sample will appear only with
              permission and a public verification source.
            </p>
          </div>
        </Container>
      </section>

      {course.journey && (
        <section className="section" id="journey">
          <Container>
            <SectionHeading
              eyebrow="Course journey"
              title="From arrival to check-out"
              text="The sequence is realistic; exact dates, times, ceremonies, and completion conditions remain batch-specific."
            />
            <div className="day-grid">
              {course.journey.map((day) => {
                const Icon = journeyIcons[day.icon] || Sparkles;
                return (
                  <Reveal key={day.label}>
                    <article className="card card-body day-card">
                      <span className="feature-icon">
                        <Icon aria-hidden="true" size={20} />
                      </span>
                      <div className="day-card-head">
                        <h3>{day.label}</h3>
                        <span>{day.time}</span>
                      </div>
                      <p>{day.text}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      <section className="section section-cream" id="schedule">
        <Container>
          <SectionHeading
            eyebrow="Daily schedule"
            title="A full day with room to recover"
            text="Every item comes from the central course data. Exact clock times, rest days, and subject rotation are supplied with the confirmed batch timetable."
          />
          <div className="schedule">
            {schedule.map(([time, event], index) => (
              <div key={`${event}-${index}`}>
                <time>{time || "Time confirmed with batch"}</time>
                <span>{event}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted">
            The school may adjust the schedule for faculty, weather, student
            safety, or learning needs. Material changes should be communicated
            clearly.
          </p>
        </Container>
      </section>

      <section className="section" id="curriculum">
        <Container>
          <SectionHeading
            eyebrow="Detailed syllabus"
            title={`Inside the ${course.hours} curriculum`}
            text="Module hours are confirmed with the batch timetable; each module shows what the study covers."
          />
          <div className="feature-grid">
            {course.curriculum.map((module) => {
              const Icon = moduleIcons[module.icon] || BookOpen;
              return (
                <article className="card card-body feature-card" key={module.title}>
                  <span className="feature-icon">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <h3>{module.title}</h3>
                  <p>{module.content}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section section-peach" id="dates">
        <Container>
          <SectionHeading
            eyebrow="Upcoming dates and pricing"
            title="Book from a complete written breakdown"
            text="Batch dates, availability, and room prices are shown for planning — the written offer remains the source of truth before you pay."
          />
          <div className="batch-grid">
            {batches.map((batch) => {
              const availability = String(batch.availability || "");
              const tagClass = availability.toLowerCase().includes("filling")
                ? "filling"
                : availability.toLowerCase().includes("available")
                  ? "open"
                  : "pending";
              const range = formatDateRange(batch.start, batch.end);
              return (
                <article className="card card-body batch-card" key={batch.id}>
                  <div className="batch-card-head">
                    <div>
                      <h3>{range || batch.label || "Batch dates"}</h3>
                      {!range && (
                        <p className="batch-dates">Dates confirmed with the batch</p>
                      )}
                    </div>
                    <span className={`availability-tag ${tagClass}`}>
                      {batch.availability}
                    </span>
                  </div>
                  <div className="batch-prices">
                    <PriceRow label="Shared room" price={batch.shared} currency={currency} />
                    <PriceRow label="Private room" price={batch.private} currency={currency} />
                  </div>
                  <div className="batch-card-actions">
                    <ButtonLink href="/apply">Reserve Spot</ButtonLink>
                    <a
                      className="program-wa"
                      href={whatsappLink(course.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ask about ${course.name} on WhatsApp`}
                      title="Ask on WhatsApp"
                    >
                      <SiWhatsapp aria-hidden="true" size={19} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section" id="package">
        <Container className="content-narrow">
          <SectionHeading
            eyebrow="Prepare for the course"
            title="Included, excluded, and what to bring"
            text="The component is complete, while the written booking offer remains the source of truth for every included item."
          />
          <Accordion
            items={
              course.packageGroups || [
                {
                  title: "What is included",
                  content: course.inclusions.join(". "),
                },
                {
                  title: "What is not included",
                  content: course.exclusions.join(". "),
                },
                {
                  title: "What to bring",
                  content:
                    "Bring suitable practice clothing, personal medication, toiletries, a reusable bottle, notebook, and season-appropriate sun or rain protection.",
                },
              ]
            }
          />
        </Container>
      </section>

      <section className="section section-cream" id="stay">
        <Container>
          <SectionHeading
            eyebrow="Accommodation and food"
            title="Rest and nourishment are part of the plan"
            text="Room and food statements remain precise about what is known and what still requires written confirmation."
          />
          <div className="split-layout">
            <div className="grid gap-4">
              <article className="card card-body">
                <Home aria-hidden="true" />
                <h3 className="mt-4">Private and shared rooms</h3>
                <p className="mt-2">{stay.overview}</p>
              </article>
              <article className="card card-body">
                <Salad aria-hidden="true" />
                <h3 className="mt-4">Vegetarian meals and dietary needs</h3>
                <p className="mt-2">{stay.food}</p>
              </article>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {stay.images.map((image, index) => (
                <figure className={`relative h-44 overflow-hidden rounded-3xl ${index === 0 ? "sm:col-span-2 sm:h-auto sm:aspect-[16/8]" : "sm:h-auto sm:aspect-square"}`} key={image.caption}>
                  <Media src={image.src} alt={image.alt} className="absolute inset-0 h-full" />
                  <figcaption className="absolute bottom-3 left-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <ButtonLink href="/accommodation" variant="text" className="mt-7">
            Review accommodation details
          </ButtonLink>
        </Container>
      </section>

      <section className="section section-peach" id="goa">
        <Container>
          <SectionHeading
            eyebrow="Goa experience"
            title="Coastal context without invented activities"
            text="Included activities are separated from independent free-time ideas so students know what the school is actually promising."
          />
          <div className="two-column-list">
            <article className="card card-body">
              <h3 className="flex items-center gap-2"><Check aria-hidden="true" /> Included school activities</h3>
              {course.includedActivities?.length ? (
                <ul className="check-list mt-4">
                  {course.includedActivities.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
                </ul>
              ) : (
                <p className="mt-4 text-muted">
                  No beach meditation, nature walk, cultural visit, excursion,
                  or sunset session is presented as included until it appears in
                  the written batch offer.
                </p>
              )}
            </article>
            <article className="card card-body">
              <h3 className="flex items-center gap-2"><Sparkles aria-hidden="true" /> Optional free-time ideas</h3>
              <ul className="check-list mt-4">
                {(course.optionalGoaIdeas || [
                  "Plan independent Goa activities around the confirmed timetable, weather, transport, cost, and safety.",
                ]).map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section className="section" id="reviews">
        <Container>
          <SectionHeading
            eyebrow="Student reviews"
            title="Every review needs an original source"
            text="No reviewer name, rating, date, quote, photograph, platform count, or review schema is invented."
          />
          {testimonials.length ? (
            <div className="review-grid">
              {testimonials.map((review) => (
                <article className="card card-body" key={review.name}>
                  <GoogleMark />
                  <h3 className="mt-4">{review.name}</h3>
                  <p>{review.rating}/5 · {review.date} · {review.platform}</p>
                  <p className="mt-3">{review.excerpt}</p>
                  <a className="button button-text mt-4" href={review.sourceUrl} target="_blank" rel="noopener noreferrer">Read original review</a>
                </article>
              ))}
            </div>
          ) : (
            <div className="notice">
              <GoogleMark />
              <p><strong>No verified course reviews are linked yet.</strong> The section will populate only from approved source URLs.</p>
            </div>
          )}
        </Container>
      </section>

      <section className="section section-cream" id="gallery">
        <Container>
          <SectionHeading
            eyebrow="Course gallery"
            title="Practice, stay, and Goa"
            text="Images use intentional aspect ratios, descriptive alternative text, and the existing lightweight dialog lightbox."
          />
          <Gallery items={galleryItems} filters={false} />
        </Container>
      </section>

      <section className="section section-peach" id="faq">
        <Container className="content-narrow">
          <SectionHeading
            eyebrow="Course FAQ"
            title="Useful answers before you apply"
          />
          <Accordion items={faqs} />
        </Container>
      </section>

      <section className="section" id="directions">
        <Container>
          <SectionHeading
            eyebrow="Directions"
            title="Goa, India"
            text="The exact address, nearest airport or station, transfer service, and arrival window are not published without confirmation."
          />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="card card-body">
              <MapPin aria-hidden="true" />
              <h3 className="mt-4">{site.name}</h3>
              <p className="mt-2">{site.contact.address}</p>
              <p className="mt-4 text-sm text-muted">
                Ask for the verified pin and suitable travel guidance before
                booking flights, trains, buses, or transfers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="button button-primary" href={site.contact.directionsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
                <ButtonLink href="/contact#whatsapp" variant="secondary">
                  <SiWhatsapp aria-hidden="true" size={17} />
                  WhatsApp
                </ButtonLink>
              </div>
            </article>
            <iframe
              className="map-frame"
              src={site.contact.mapEmbedUrl}
              title={`Map showing the public ${site.location} location`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Related study"
            title="Compare another pathway"
          />
          <div className="related-grid">
            {related.map((item) => (
              <ProgramCard course={item} key={item.slug} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title={`Ask about ${course.name}`}
        text="A place is reserved only after the school confirms suitability, dates, faculty, price, room, meals, completion details, policies, and payment instructions."
      />
    </>
  );
}
