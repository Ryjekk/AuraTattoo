import * as React from "react";
import { motion } from "framer-motion";
import { navLinks } from "@utils/navLinks";
import Link from "next/link";

export const Navigation = () => (
  <motion.ul className='nav__links'>
    {navLinks.map((link) => (
      <motion.li key={link.name} className='nav__link'>
        <Link href={link.href}>{link.name}</Link>
      </motion.li>
    ))}
  </motion.ul>
);
