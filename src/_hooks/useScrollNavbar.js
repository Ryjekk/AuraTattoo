"use client";
import { useState, useCallback, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { usePathname, useSearchParams } from "next/navigation";

function useScrollNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const params = useSearchParams();
  const searchParams = useSearchParams();
  const [isTransparent, setIsTransparent] = useState(
    pathname === "/" || pathname === "/booking" ? false : true
  );
  const [url, setURL] = useState("");
  useEffect(() => {
    const update = () => {
      // set url from path in forward.
      if (typeof window !== "undefined") {
        setURL(
          window.location.href.substring(window.location.href.indexOf("/", 9))
        );
      }
    };
    window.addEventListener("hashchange", update);
    update(); // Initial fetch
    if (url === "/#residents") {
      setIsVisible(true);
    }
    setMobileMenuIsOpen(false);
    return () => window.removeEventListener("hashchange", update);
  }, [params]);

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
    [scrollY, pathname, params]
  );

  useEffect(() => {
    if (mobileMenuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    updateScroll(scrollY.get());
  }, [searchParams, mobileMenuIsOpen]);

  useMotionValueEvent(scrollY, "change", updateScroll);

  const getBackgroundColor = () => {
    switch (pathname) {
      case "/":
        return "#000";
      case "/booking":
        return "rgba(238, 233, 221, 1)";
      case "/vacancy":
        return "rgba(238, 233, 221, 1)";
      case "/our-story":
        return "#000";
      case "/faq":
        return "rgba(64, 70, 61, 1)";
      case "/privacy":
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
      case "/privacy":
        return "#fff";
      default:
        return "#000";
    }
  };

  return {
    pathname: url,
    setMobileMenuIsOpen,
    mobileMenuIsOpen,
    isVisible,
    isTransparent,
    backgroundColor: getBackgroundColor(),
    textColor: getTextColor(),
  };
}

export default useScrollNavbar;
