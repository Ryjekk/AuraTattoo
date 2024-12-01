import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@utils/navLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navigation = () => {
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const [activePath, setActivePath] = useState(pathname);
  console.log("activePath", activePath);
  console.log("pathname", pathname);
  const isSelected = (link) => link.href === activePath;

  return (
    <motion.ul className='nav__links'>
      {navLinks.map((link) => (
        <motion.div key={link.name} className='nav__link'>
          <Link href={link.href}>{link.name}</Link>
          {isSelected(link) && (
            <motion.div
              className='nav__link__active-indicator'
              layoutId='indicator'
            ></motion.div>
          )}
        </motion.div>
      ))}
    </motion.ul>
  );
};
