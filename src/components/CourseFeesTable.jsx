"use client";

import { Container } from "./ui";

const DEFAULT_FEE_ROWS = [
  { facility: "Mixed AC Dorm", price: "€799" },
  { facility: "Twin Sharing AC", price: "€899" },
  { facility: "Private Room Non-AC", price: "€1,099" },
  { facility: "Private Room AC", price: "€1,199" },
  { facility: "Private AC Room (2 Pax)", price: "€1,699" },
];

export default function CourseFeesTable({
  programName = "200-Hour Yoga Teacher Training",
  heading,
  subHeading,
  feeRows = DEFAULT_FEE_ROWS,
  hideOuterContainer = false,
}) {
  const displayHeading =
    heading ||
    (programName.includes("100-Hour")
      ? "Fees for the 100-Hour Yoga Teacher Training in Goa"
      : programName.includes("200-Hour")
        ? "Fees for the 200-Hour Yoga Teacher Training in Goa"
        : `Fees for the ${programName}`);

  const displaySubHeading =
    subHeading || `${programName} — Room Options & All-Inclusive Fees`;

  const content = (
    <div>
      {/* Heading with accent */}
      <div className="text-center mb-6">
        <span className="text-[11.5px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
          Course Fees
        </span>
        <h2 className="mt-1 text-[var(--brown)] font-philosopher">
          {displayHeading}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] max-w-xl mx-auto">
          Includes full tuition, Yoga Alliance certification, accommodation,
          and 3 fresh sattvic vegetarian meals daily.
        </p>
      </div>

      {/* Structured Fee Table matching website theme */}
      <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center">
            <thead>
              {/* Full-width Subheading Row */}
              <tr className="bg-[var(--surface)] border-b border-[var(--border)]">
                <th
                  colSpan={2}
                  className="py-3 px-4 text-center font-heading text-xs sm:text-sm font-normal text-[var(--coral-dark)]"
                >
                  {displaySubHeading}
                </th>
              </tr>
              {/* Table Column Headers */}
              <tr className="bg-[var(--coral-dark)] text-white">
                <th className="py-3.5 px-6 text-center font-sans font-bold text-xs sm:text-sm border-r border-white/20">
                  Room &amp; Accommodation Type
                </th>
                <th className="py-3.5 px-6 text-center font-sans font-bold text-xs sm:text-sm">
                  All-Inclusive Fee
                </th>
              </tr>
            </thead>
            <tbody>
              {feeRows.map((row, index) => (
                <tr
                  key={row.facility}
                  className={`border-b border-[var(--border)] transition-colors hover:bg-[var(--surface)]/50 ${
                    index % 2 === 1 ? "bg-[var(--cream)]" : "bg-white"
                  }`}
                >
                  <td className="py-3.5 px-6 text-center font-medium text-xs sm:text-sm text-[var(--brown)] border-r border-[var(--border)]">
                    {row.facility}
                  </td>
                  <td className="py-3.5 px-6 text-center font-bold text-xs sm:text-sm text-[var(--coral-dark)]">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  if (hideOuterContainer) {
    return content;
  }

  return (
    <div id="course-fees-table">
      {content}
    </div>
  );
}
