"use client";

import { useState } from "react";
import {
  Activity,
  Award,
  BookOpen,
  Check,
  ChevronDown,
  Compass,
  Flame,
  GraduationCap,
  Heart,
  Layers,
  PersonStanding,
  Sparkles,
  Sun,
  Wind,
} from "lucide-react";

const moduleIcons = {
  "01": Activity,
  "02": GraduationCap,
  "03": Wind,
  "04": Sparkles,
  "05": Compass,
  "06": Layers,
  "07": Heart,
  "08": BookOpen,
  "09": Award,
  "10": PersonStanding,
  "11": Flame,
  "12": Sun,
};

export default function SyllabusAccordion({ modules = [] }) {
  // Allow independent open/close state for all modules, first open by default
  const [openMap, setOpenMap] = useState({ 0: true });

  const toggleModule = (index) => {
    setOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!modules || modules.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Top Header */}
      <div className="flex items-center gap-2.5 pb-2 border-b border-[var(--border)]/60">
        <BookOpen size={20} className="text-[var(--coral-dark)] shrink-0" />
        <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--brown)]">
          12-Module Detailed Learning Curriculum
        </h3>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {modules.map((mod, index) => {
          const isOpen = Boolean(openMap[index]);
          const modNumber = mod.number || String(index + 1).padStart(2, "0");
          const Icon = moduleIcons[modNumber] || BookOpen;

          // Normalized content fields
          const paragraphs = Array.isArray(mod.paragraphs)
            ? mod.paragraphs
            : mod.description
              ? [mod.description]
              : mod.content
                ? [mod.content]
                : mod.text
                  ? [mod.text]
                  : [];

          const points = Array.isArray(mod.points)
            ? mod.points
            : Array.isArray(mod.topics)
              ? mod.topics
              : Array.isArray(mod.highlights)
                ? mod.highlights
                : [];

          const panelId = `syllabus-panel-${modNumber}`;

          return (
            <div
              key={modNumber || mod.title}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-[var(--coral-dark)]/50 bg-white shadow-md ring-1 ring-[var(--coral-dark)]/20"
                  : "border-[var(--border)] bg-white hover:border-[var(--coral-dark)]/30 hover:bg-[var(--surface)]/40"
              }`}
            >
              {/* Accordion Header Button */}
              <button
                type="button"
                onClick={() => toggleModule(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer select-none bg-transparent border-none focus:outline-hidden"
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 pointer-events-none">
                  {/* Number Badge with Icon */}
                  <span
                    className={`grid size-10 sm:size-11 place-items-center rounded-xl shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[var(--coral-dark)] text-white shadow-sm"
                        : "bg-[var(--cream)] text-[var(--coral-dark)] border border-[var(--border)]/70"
                    }`}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </span>

                  {/* Title & Short Tag */}
                  <div className="min-w-0">
                    <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[var(--coral-dark)]">
                      Module {modNumber}
                    </span>
                    <h4 className="font-heading text-[15px] sm:text-[17px] font-bold text-[var(--brown)] leading-snug">
                      {mod.title || mod.name}
                    </h4>
                    {mod.shortSummary && !isOpen && (
                      <p className="text-xs sm:text-[13px] text-[var(--muted)] truncate max-w-xl mt-0.5 hidden sm:block">
                        {mod.shortSummary}
                      </p>
                    )}
                  </div>
                </div>

                {/* Chevron Arrow */}
                <div
                  className={`grid size-8 place-items-center rounded-full shrink-0 transition-transform duration-300 pointer-events-none ${
                    isOpen
                      ? "rotate-180 bg-[var(--cream)] text-[var(--coral-dark)]"
                      : "bg-transparent text-[var(--muted)]"
                  }`}
                >
                  <ChevronDown size={18} aria-hidden="true" />
                </div>
              </button>

              {/* Accordion Content Panel */}
              {isOpen && (
                <div
                  id={panelId}
                  className="px-4 pb-5 pt-2 sm:px-6 sm:pb-6 border-t border-[var(--border)]/50 space-y-4 bg-white"
                >
                  {/* Narrative Description Paragraphs */}
                  {paragraphs.length > 0 && (
                    <div className="text-[13.5px] sm:text-[14.5px] text-[var(--text)] leading-relaxed space-y-3 pt-1">
                      {paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  )}

                  {/* Key Points / List */}
                  {points.length > 0 && (
                    <div className="rounded-xl bg-[var(--surface)] p-4 border border-[var(--border)]/70">
                      <ul className="space-y-2 text-xs sm:text-[13.5px] text-[var(--text)]">
                        {points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 leading-relaxed"
                          >
                            <span className="grid size-4 place-items-center rounded-full bg-[var(--coral-dark)]/15 text-[var(--coral-dark)] shrink-0 mt-1">
                              <Check size={10} strokeWidth={3} />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sub-Section (e.g. Yoga Types in Philosophy) */}
                  {mod.subSectionTitle && (
                    <div className="pt-2">
                      <p className="text-xs sm:text-[13.5px] font-bold text-[var(--brown)] mb-2">
                        {mod.subSectionTitle}
                      </p>
                      {mod.subPoints && mod.subPoints.length > 0 && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13.5px] text-[var(--text)]">
                          {mod.subPoints.map((sp) => (
                            <li
                              key={sp}
                              className="flex items-start gap-2 leading-snug"
                            >
                              <span className="grid size-4 place-items-center rounded-full bg-[var(--coral-dark)]/15 text-[var(--coral-dark)] shrink-0 mt-0.5">
                                <Check size={10} strokeWidth={3} />
                              </span>
                              <span>{sp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Concluding Note */}
                  {mod.note && (
                    <p className="text-xs sm:text-[13.5px] italic text-[var(--muted)] leading-relaxed pt-1 border-t border-[var(--border)]/40">
                      {mod.note}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
