import { delay, motion } from "framer-motion";
import Link from "next/link";
const MobileLink = ({ name, href }) => {
  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        y: { stiffness: 1000, velocity: -300 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.li className='nav__link' variants={linkVariants}>
      <Link href={href}>{name}</Link>
    </motion.li>
  );
};

export default MobileLink;
