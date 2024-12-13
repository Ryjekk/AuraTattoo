import { useState, useCallback, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

function useScrollNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const updateScroll = useCallback(
    (latest) => {
      setIsVisible(latest < 150 || latest < scrollY.getPrevious());
      setIsTransparent(latest < 100);
    },
    [scrollY]
  );

  useEffect(() => {
    setMobileMenuIsOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", updateScroll);

  const getBackgroundColor = () => {
    switch (pathname) {
      case "/":
        return "#000";
      case "/our-story":
        return "#000";
      case "/faq":
        return "rgba(64, 70, 61, 1)";
      default:
        return "#fff";
    }
  };
  const getTextColor = () => {
    switch (pathname) {
      case "/":
        return "#fff";
      case "/our-story":
        return "#fff";
      case "/faq":
        return "#fff";
      default:
        return "#000";
    }
  };

  return {
    pathname,
    setMobileMenuIsOpen,
    mobileMenuIsOpen,
    isVisible,
    isTransparent,
    backgroundColor: getBackgroundColor(),
    textColor: getTextColor(),
  };
}

export default useScrollNavbar;
