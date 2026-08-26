import Image from "next/image";

export default function TeacherCard({ teacher }) {
  return (
    <article className="teacher-card group flex h-full flex-col items-center rounded-[24px] border border-[var(--border)] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="teacher-avatar-card relative w-32 h-32 rounded-full overflow-hidden shadow-inner">
        <Image
          src={teacher.image}
          alt={teacher.imageAlt || teacher.name}
          fill
          sizes="130px"
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 font-serif text-[16px] font-bold leading-[20px] text-[var(--brown)]">
        {teacher.name}
      </h3>

      <p className="mt-1.5 text-[13.5px] font-semibold leading-[20px] text-[var(--coral-dark)]">
        {teacher.specialty}
      </p>

      <p className="mt-1 text-[13.5px] leading-[18px] text-[var(--muted)]">
        {teacher.experience}
      </p>
    </article>
  );
}
