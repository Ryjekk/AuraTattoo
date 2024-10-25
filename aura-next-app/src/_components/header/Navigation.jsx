import * as React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Residents", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => (
  <motion.ul className='nav__links'>
    {navLinks.map((i) => (
      <motion.li key={i.name} className='nav__link'>
        {i.name}
      </motion.li>
    ))}
  </motion.ul>
);
