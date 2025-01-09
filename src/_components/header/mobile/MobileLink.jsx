import { motion } from "motion/react";
import { mobileLinkVariants } from "@components/header/animations";
import { useRouter } from "next/navigation";
import Link from "next/link";
const MobileLink = ({ name, href, isSelected }) => {
  const router = useRouter();

  return isSelected ? (
    <motion.li className="nav__link" variants={mobileLinkVariants}>
      {name}
      <motion.div
        className="nav__link__active-indicator--mobile"
        layoutId="indicator-mobile"
      ></motion.div>
    </motion.li>
  ) : (
    <motion.li className="nav__link" variants={mobileLinkVariants}>
      <Link href={href}>{name}</Link>
    </motion.li>
  );
};

export default MobileLink;
