"use client";
import { motion } from "motion/react";
import MobileLink from "@components/header/mobile/MobileLink";
import {
  mobileListVariants,
  mobileMenuVariants,
} from "@components/header/animations";
import useScrollNavbar from "@hooks/useScrollNavbar";
import { navLinks } from "@utils/navLinks";

const MobileNavigation = ({ mobileMenuOpen }) => {
  const { pathname } = useScrollNavbar();
  const isSelected = (link) => link.href === pathname;
  return (
    <motion.div
      className="mobile-menu"
      initial="closed"
      animate={mobileMenuOpen ? "open" : "closed"}
      exit="closed"
      variants={mobileMenuVariants}
    >
      <motion.ul className="nav__links" variants={mobileListVariants}>
        {navLinks.map((i) => (
          <MobileLink
            key={i.name}
            name={i.name}
            href={i.href}
            isSelected={isSelected(i)}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MobileNavigation;
