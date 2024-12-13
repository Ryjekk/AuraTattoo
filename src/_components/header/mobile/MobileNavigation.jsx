"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MobileLink from "@components/header/mobile/MobileLink";
import {
  mobileListVariants,
  mobileMenuVariants,
} from "@components/header/animations";
import { navLinks } from "@utils/navLinks";

const MobileNavigation = ({ mobileMenuOpen }) => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);
  const isSelected = (link) => link.href === activePath;
  return (
    <motion.div
      className='mobile-menu'
      initial='closed'
      animate={mobileMenuOpen ? "open" : "closed"}
      exit='closed'
      variants={mobileMenuVariants}
    >
      <motion.ul className='nav__links' variants={mobileListVariants}>
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
