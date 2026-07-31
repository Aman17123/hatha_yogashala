import Link from "next/link";
import { Sparkles, Users } from "lucide-react";
import { teachersData } from "@/data/siteContentData";
import TeacherCard from "@/components/TeacherCard";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";

export default function TeachersPreview({ teachers = teachersData }) {
  return (
    <section className="section bg-[#fffcf8]" id="teachers-preview">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Expert Faculty"
            title="Meet Our Teachers"
            text="Experienced lead teachers, anatomy specialists, and meditation masters assigned to guide your practice in Goa."
          />
          <div className="shrink-0">
            <ButtonLink href="/teachers" variant="primary">
              <span>Meet the Whole Team</span>
            </ButtonLink>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </Container>
    </section>
  );
}
