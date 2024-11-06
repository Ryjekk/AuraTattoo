export const mobileMenuVariants = {
  open: {
    scaleY: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: [0.12, 0, 0.39, 1],
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const mobileListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const mobileLinkVariants = {
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
