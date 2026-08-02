"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sun, Thermometer, Users, Compass } from "lucide-react";

const seasonStyles = {
  high: { label: "High season", className: "bg-[var(--cream)] text-[var(--terracotta)]" },
  shoulder: { label: "Shoulder season", className: "bg-[var(--cream)] text-[var(--gold)]" },
  monsoon: { label: "Monsoon", className: "bg-[var(--cream)] text-[#3a6cb0]" },
};

export default function MonthGuide({ months }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="month-guide">
      <div className="month-guide-grid">
        {months.map((month, index) => {
          const isOpen = open === index;
          const season = seasonStyles[month.season] || seasonStyles.shoulder;
          return (
            <div className="month-card" data-open={isOpen} key={month.month}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`month-${index}`}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span className="month-name">{month.month}</span>
                <span className={`month-season ${season.className}`}>
                  {season.label}
                </span>
                <span className="month-one-line">{month.rec}</span>
                <ChevronDown
                  className={`month-chevron ${isOpen ? "rotate-180" : ""}`}
                  size={18}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`month-${index}`}
                    className="month-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ul>
                      <li>
                        <Thermometer size={15} aria-hidden="true" />
                        <span>
                          <strong>Weather</strong>
                          {month.weather}
                        </span>
                      </li>
                      <li>
                        <Users size={15} aria-hidden="true" />
                        <span>
                          <strong>Crowd level</strong>
                          {month.crowd}
                        </span>
                      </li>
                      <li>
                        <Sun size={15} aria-hidden="true" />
                        <span>
                          <strong>Retreat experience</strong>
                          {month.experience}
                        </span>
                      </li>
                      <li>
                        <Compass size={15} aria-hidden="true" />
                        <span>
                          <strong>Travel recommendation</strong>
                          {month.rec}
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
