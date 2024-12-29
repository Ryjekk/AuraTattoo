"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
export default function GalleryCard({ instagramSnap }) {
  const { alt, image, instagramLink, withVideo, videoPlaceholder } =
    instagramSnap;
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className='gallery__card'
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <Link
        href={instagramLink}
        target='_blank'
        aria-label={`View on Instagram: ${alt}`}
      >
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className='gallery__overlay-container'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <div className='gallery__overlay-bg' />
              <motion.p
                className='gallery__overlay-text'
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: 20 }}
              >
                View on Instagram
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        {withVideo ? (
          <div className='gallery__video-container'>
            <motion.video
              src={image.url}
              poster={videoPlaceholder.url}
              alt={alt}
              width={800}
              height={600}
              className='gallery__video'
              autoPlay={true}
              playsInline={true}
              loop={true}
              muted={true}
            />
          </div>
        ) : (
          <Image
            src={withVideo ? videoPlaceholder.url : image.url}
            alt={alt}
            width={500}
            height={500}
            className='gallery__image'
          />
        )}
      </Link>
    </motion.div>
  );
}
