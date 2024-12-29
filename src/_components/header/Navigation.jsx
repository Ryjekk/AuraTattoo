import { motion } from "motion/react";
import { navLinks } from "@utils/navLinks";
import Link from "next/link";
import useScrollNavbar from "@hooks/useScrollNavbar";
export const Navigation = () => {
  const { pathname, textColor } = useScrollNavbar();
  const isSelected = (link) => link.href === pathname;

  return (
    <motion.ul className='nav__links'>
      {navLinks.map((link) => (
        <motion.li key={link.name} className='nav__link'>
          <Link href={link.href}>{link.name}</Link>
          {isSelected(link) && (
            <motion.div
              className='nav__link__active-indicator'
              layoutId='indicator'
              style={{ backgroundColor: textColor }}
            ></motion.div>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};
