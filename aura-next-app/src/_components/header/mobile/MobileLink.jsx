import { motion } from "framer-motion";
import { mobileLinkVariants } from "@components/header/animations";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const MobileLink = ({ name, href }) => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);
  const isSelected = (link) => link.href === activePath;
  return (
    <motion.li className='nav__link' variants={mobileLinkVariants}>
      <Link href={href} aria-disabled={isSelected({ href }) ? true : false}>
        {name}
      </Link>
    </motion.li>
  );
};

export default MobileLink;
