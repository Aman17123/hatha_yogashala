import Image from "next/image";

export default function TeacherCard({ teacher }) {
  return (
    <article className="teacher-card group flex h-full flex-col items-center rounded-2xl sm:rounded-[24px] border border-[var(--border)] bg-white p-3.5 sm:p-5 md:p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="teacher-avatar-card relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-inner">
        <Image
          src={teacher.image}
          alt={teacher.imageAlt || teacher.name}
          fill
          sizes="(max-width: 640px) 90px, 130px"
          className="object-cover"
        />
      </div>

      <h3 className="mt-3 sm:mt-4 font-serif text-sm sm:text-[16px] font-bold leading-snug sm:leading-[20px] text-[var(--brown)]">
        {teacher.name}
      </h3>

      <p className="mt-1 sm:mt-1.5 text-xs sm:text-[13.5px] font-semibold leading-tight sm:leading-[20px] text-[var(--coral-dark)]">
        {teacher.specialty}
      </p>

      <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-[13.5px] leading-tight sm:leading-[18px] text-[var(--muted)]">
        {teacher.experience}
      </p>
    </article>
  );
}
