import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Clock } from "lucide-react";

export default function TeacherCard({ teacher }) {
  return (
    <article className="group flex flex-col h-full rounded-[24px] bg-white border border-[#f0d9cf] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#cf5b50]/60 hover:-translate-y-1">
      {/* Photograph Container — Fixed Aspect Ratio */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#fdf0e7]">
        <Image
          src={teacher.image}
          alt={teacher.imageAlt || teacher.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Specialization Badge */}
        <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#cf5b50] shadow-sm">
          {teacher.specialty}
        </span>

        {/* Name & Role Overlay */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="text-lg font-serif font-bold text-white leading-tight">
            {teacher.name}
          </h3>
          <p className="text-xs text-white/80 font-medium">
            {teacher.role}
          </p>
        </div>
      </div>

      {/* Card Content Body — Flex column for alignment */}
      <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
        {/* Bio */}
        <p className="text-xs sm:text-sm text-[#746d69] leading-relaxed line-clamp-3">
          {teacher.bio}
        </p>

        {/* Facts Row */}
        <div className="flex items-center justify-between border-t border-[#f0d9cf]/60 pt-3 text-[11px] text-[#4e4946]">
          <span className="flex items-center gap-1 font-semibold text-[#2c1a0e]">
            <Award size={13} className="text-[#cf5b50]" />
            {teacher.qualifications}
          </span>
          <span className="flex items-center gap-1 text-[#746d69]">
            <Clock size={13} className="text-[#cf5b50]" />
            {teacher.experience}
          </span>
        </div>

        {/* Button Action */}
        <Link
          href={`/teachers#${teacher.id}`}
          className="mt-auto inline-flex items-center justify-between w-full rounded-xl bg-[#fff0eb] px-4 py-2.5 text-xs font-bold text-[#cf5b50] transition-colors group-hover:bg-[#cf5b50] group-hover:text-white"
        >
          <span>View Profile</span>
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
