import * as React from "react";
import { motion } from "framer-motion";
import MobileLink from "@components/header/mobile/MobileLink";
import {
  mobileListVariants,
  mobileMenuVariants,
} from "@components/header/animations";
import { navLinks } from "@utils/navLinks";

export const MobileNavigation = ({ mobileMenuOpen }) => {
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
          <MobileLink key={i.name} name={i.name} href={i.href} />
        ))}
      </motion.ul>
    </motion.div>
  );
};
