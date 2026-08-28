/**
 * components/JsonLd.jsx — Dedicated JSON-LD structured data injector
 * The Hatha Yogashala
 *
 * Renders one <script type="application/ld+json"> tag per schema object,
 * pretty-printed for readability in page source.
 *
 * Usage (single schema):
 *   <JsonLd data={courseSchema(course)} />
 *
 * Usage (multiple schemas in one call):
 *   <JsonLd data={[breadcrumbSchema(items), faqSchema(faqs)]} />
 *
 * Note: There is also a compact JsonLd export in ui.jsx used by existing
 * components — this dedicated file is the canonical import for new code and
 * for page-level schema injection.
 */

export function JsonLd({ data }) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas
        .filter(Boolean) // drop any null/undefined (e.g. faqSchema returns null when empty)
        .map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema, null, 2).replace(/</g, "\\u003c"),
            }}
          />
        ))}
    </>
  );
}

export default JsonLd;
