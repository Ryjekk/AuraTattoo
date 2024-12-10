import { motion } from "framer-motion";

export const HamburgerToggle = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <motion.div
      className='nav__mobile-toggle'
      onClick={() => {
        setMobileMenuOpen(!mobileMenuOpen);
      }}
    >
      <motion.div
        className='nav__mobile-toggle__line'
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { rotate: 45, y: 8 },
          closed: { rotate: 0, y: 0 },
        }}
      />
      <motion.div
        className='nav__mobile-toggle__line'
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 0 },
          closed: { opacity: 1 },
        }}
      />
      <motion.div
        className='nav__mobile-toggle__line'
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { rotate: -45, y: -6 },
          closed: { rotate: 0, y: 0 },
        }}
      />
    </motion.div>
  );
};
