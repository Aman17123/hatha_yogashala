import Image from "next/image";

export default function TeacherCard({ teacher }) {
  return (
    <article className="teacher-card group flex h-full flex-col items-center rounded-[24px] border border-[var(--border)] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="teacher-card-avatar relative size-[120px] shrink-0 overflow-hidden rounded-full border-[3px] border-[var(--surface)] bg-[var(--cream)] ring-1 ring-[#c9a961]/30 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={teacher.image}
          alt={teacher.imageAlt || teacher.name}
          fill
          sizes="88px"
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 font-serif text-[16px]  font-normal leading-[24px] text-[var(--brown)]">
        {teacher.name}
      </h3>

      <p className="mt-1.5 text-[13px] font-semibold leading-[20px] text-[var(--terracotta)]">
        {teacher.specialty}
      </p>

      <p className="mt-1 text-[12.5px] leading-[18px] text-[var(--muted)]">
        {teacher.experience}
      </p>
    </article>
  );
}
