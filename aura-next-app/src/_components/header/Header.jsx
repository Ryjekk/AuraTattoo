"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScrollTopDrawer } from "@hooks/useScrollTopDrawer";
import { Navigation } from "@components/header/Navigation";
import SocialLinks from "@components/shared/socialLinks/SocialLinks";
import { MobileNavigation } from "@components/header/mobile/MobileNavigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { HamburgerToggle } from "./mobile/HamburgerToggle";
import Logo from "./Logo";
export default function Header() {
  const { hidden, mobileMenuOpen, setMobileMenuOpen } = useScrollTopDrawer();
  const pathname = usePathname();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  return (
    <AnimatePresence>
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
        <Logo />
        <Navigation />
        <SocialLinks />
        <MobileNavigation mobileMenuOpen={mobileMenuOpen} />
        <HamburgerToggle
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </motion.nav>
    </AnimatePresence>
  );
}
