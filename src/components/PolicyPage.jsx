import { Container, PageHero } from "./ui";

export default function PolicyPage({ title, eyebrow, description, sections }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} text={description} />
      <section className="section">
        <Container className="policy-page">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </Container>
      </section>
    </>
  );
}
