"use client";
import { useInView } from "motion/react";
import { useRef } from "react";
export default function Vision({ text, subText }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section
      className="section vision content-center"
      ref={ref}
      style={{
        transform: isInView ? "none" : `translateX(-200px)`,
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <blockquote className="vision__blockquote">
        <p>{text}</p>
        <p>{subText}</p>
      </blockquote>
    </section>
  );
}
