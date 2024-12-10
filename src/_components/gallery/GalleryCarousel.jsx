"use client";
import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import GalleryCard from "./GalleryCard";
import useMeasure from "react-use-measure";
export default function GalleryCarousel({ instagramSnaps }) {
  const SLOW_DURATION = 50;
  const FAST_DURATION = 25;

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [duration, setDuration] = useState(FAST_DURATION);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width * 0.5 - 16;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setRerender(!rerender);
          setMustFinish(false);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls.stop();
  }, [width, xTranslation, duration, rerender]);

  return (
    <div className='gallery__carousel-container'>
      <motion.div
        className='gallery__carousel'
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...instagramSnaps, ...instagramSnaps].map((snap, idx) => (
          <GalleryCard key={snap.id + idx} instagramSnap={snap} />
        ))}
      </motion.div>
    </div>
  );
}
