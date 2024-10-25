import * as React from "react";
import { motion } from "framer-motion";
import MobileLink from "./MobileLink";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Residents", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: [0.12, 0, 0.39, 1],
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MobileNavigation = () => (
  <motion.div
    className='mobile-menu'
    initial='closed'
    animate='open'
    exit='closed'
    variants={menuVariants}
  >
    <motion.ul className='nav__links' variants={listVariants}>
      {navLinks.map((i) => (
        <MobileLink key={i.name} name={i.name} href={i.href} />
      ))}
    </motion.ul>
  </motion.div>
);
