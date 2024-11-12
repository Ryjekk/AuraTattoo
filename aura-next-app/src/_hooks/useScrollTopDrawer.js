import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export const useScrollTopDrawer = () => {
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(
    scrollY,
    "change",
    (latestScrollY) => {
      const prevScrollY = scrollY.getPrevious();
      if (
        latestScrollY > prevScrollY &&
        latestScrollY > 150 &&
        !mobileMenuOpen
      ) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    },
    [setHidden]
  );

  return { hidden, mobileMenuOpen, setMobileMenuOpen };
};
