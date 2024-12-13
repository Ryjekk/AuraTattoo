import { motion } from "framer-motion";

export const HamburgerToggle = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  color,
}) => {
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
        style={{ backgroundColor: mobileMenuOpen ? "white" : color }}
      />
      <motion.div
        className='nav__mobile-toggle__line'
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 0 },
          closed: { opacity: 1 },
        }}
        style={{ backgroundColor: mobileMenuOpen ? "white" : color }}
      />
      <motion.div
        className='nav__mobile-toggle__line'
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { rotate: -45, y: -6 },
          closed: { rotate: 0, y: 0 },
        }}
        style={{
          backgroundColor: mobileMenuOpen ? "white" : color,
          transition: 0.4,
        }}
      />
    </motion.div>
  );
};
