"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
export default function Hero({
  children,
  backgroundType,
  backgroundSrc,
  fallbackImageSrc,
  priority = false,
  mini = false,
  withOverlay = false,
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const heroClasses = mini ? "hero hero--mini" : "hero hero--full";
  const contentClasses = withOverlay
    ? "hero__content hero__content--overlay"
    : "hero__content";

  return (
    <section className={heroClasses}>
      {backgroundType === "image" && (
        <Image
          src={backgroundSrc}
          alt='Section background'
          fill
          priority={priority && true}
          className='hero__bg'
        />
      )}
      {backgroundType === "video" && !prefersReducedMotion ? (
        <video
          src={backgroundSrc}
          autoPlay
          loop
          muted
          className='hero__bg hero__bg--video'
        ></video>
      ) : (
        <Image
          src={fallbackImageSrc || backgroundSrc}
          alt='Section background'
          fill
          priority={priority && true}
          className='hero__bg'
        />
      )}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className={contentClasses}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
