"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Navigation } from "./Navigation";
import SocialLinks from "@components/shared/socialLinks/SocialLinks";
import { MobileNavigation } from "./MobileNavigation";

export default function Header() {
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(
    scrollY,
    "change",
    (latestScrollY) => {
      const prevScrollY = scrollY.getPrevious();
      if (
        latestScrollY > prevScrollY &&
        latestScrollY > 150 &&
        !mobileMenuOpen
      ) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    },
    [setHidden]
  );

  return (
    <motion.nav
      initial={false}
      animate={hidden ? "hidden" : "visible"}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className='nav'
    >
      <div>Logo placeholder</div>
      <Navigation />
      <SocialLinks />
      <AnimatePresence>
        {mobileMenuOpen && <MobileNavigation />}
      </AnimatePresence>
      <div
        className='nav__mobile-toggle'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        Menu
      </div>
    </motion.nav>
  );
}
