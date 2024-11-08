import * as React from "react";
import { motion } from "framer-motion";
import { navLinks } from "@utils/navLinks";

export const Navigation = () => (
  <motion.ul className='nav__links'>
    {navLinks.map((i) => (
      <motion.li key={i.name} className='nav__link'>
        {i.name}
      </motion.li>
    ))}
  </motion.ul>
);
