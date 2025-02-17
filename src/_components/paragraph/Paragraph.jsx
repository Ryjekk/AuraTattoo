"use client";
import { useInView } from "motion/react";
import { useRef } from "react";
export default function Paragraph({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <p
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </p>
  );
}
