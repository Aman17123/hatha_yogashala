"use client";

import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];
export const DURATION = 0.65;

export function FadeIn({
  children,
  className = "",
  delay = 0,
  as = "div",
  startVisible = false,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  if (reduce || startVisible) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: DURATION, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className = "",
  gap = 0.08,
  startVisible = false,
}) {
  const reduce = useReducedMotion();
  if (reduce || startVisible) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", startVisible = false }) {
  const reduce = useReducedMotion();
  if (reduce || startVisible) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}