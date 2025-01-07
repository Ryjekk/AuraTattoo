"use client";

import { motion, AnimatePresence } from "motion/react";
import useScrollNavbar from "@hooks/useScrollNavbar";
import { Navigation } from "@components/header/Navigation";
import SocialLinks from "@components/shared/socialLinks/SocialLinks";
import { HamburgerToggle } from "./mobile/HamburgerToggle";
import dynamic from "next/dynamic";
import Logo from "./Logo";
const MobileNavigation = dynamic(() => import("./mobile/MobileNavigation"), {
  ssr: false,
});
export default function Header() {
  const {
    setMobileMenuIsOpen,
    mobileMenuIsOpen,
    isVisible,
    isTransparent,
    backgroundColor,
    textColor,
  } = useScrollNavbar();

  return (
    <AnimatePresence>
      <motion.nav
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className='nav'
        style={{
          backgroundColor: isTransparent ? "transparent" : backgroundColor,
          color: textColor,
        }}
      >
        <Logo />
        <Navigation />
        {/*<SocialLinks />*/}
        <MobileNavigation mobileMenuOpen={mobileMenuIsOpen} />
        <HamburgerToggle
          mobileMenuOpen={mobileMenuIsOpen}
          setMobileMenuOpen={setMobileMenuIsOpen}
          color={textColor}
        />
      </motion.nav>
    </AnimatePresence>
  );
}
