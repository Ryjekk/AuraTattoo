import * as React from "react";
import { motion } from "framer-motion";
import MobileLink from "@components/header/mobile/MobileLink";
import {
  mobileListVariants,
  mobileMenuVariants,
} from "@components/header/animations";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Residents", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const MobileNavigation = () => (
  <motion.div
    className='mobile-menu'
    initial='closed'
    animate='open'
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
