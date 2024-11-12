"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScrollTopDrawer } from "@hooks/useScrollTopDrawer";
import { Navigation } from "@components/header/Navigation";
import SocialLinks from "@components/shared/socialLinks/SocialLinks";
import { MobileNavigation } from "@components/header/mobile/MobileNavigation";

export default function Header() {
  const { hidden, mobileMenuOpen, setMobileMenuOpen } = useScrollTopDrawer();

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
