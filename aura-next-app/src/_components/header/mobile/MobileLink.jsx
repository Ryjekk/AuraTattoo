import { motion } from "framer-motion";
import { mobileLinkVariants } from "@components/header/animations";
import Link from "next/link";
const MobileLink = ({ name, href }) => {
  return (
    <motion.li className='nav__link' variants={mobileLinkVariants}>
      <Link href={href}>{name}</Link>
    </motion.li>
  );
};

export default MobileLink;
