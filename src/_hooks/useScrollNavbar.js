import { useState, useCallback, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { usePathname } from "next/navigation";

function useScrollNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [isTransparent, setIsTransparent] = useState(
    pathname === "/" || pathname === "/booking" ? false : true
  );

  const updateScroll = useCallback(
    (latest) => {
      if (pathname === "/" || pathname === "/booking") {
        setIsVisible(latest < 150 || latest < scrollY.getPrevious());
        setIsTransparent(false);
        return;
      } else {
        setIsVisible(latest < 150 || latest < scrollY.getPrevious());
        setIsTransparent(latest < 100);
      }
    },
    [scrollY, pathname]
  );

  useEffect(() => {
    updateScroll(scrollY.get());
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", updateScroll);

  const getBackgroundColor = () => {
    switch (pathname) {
      case "/":
        return "#000";
      case "/booking":
        return "rgba(238, 233, 221, 1)";
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
