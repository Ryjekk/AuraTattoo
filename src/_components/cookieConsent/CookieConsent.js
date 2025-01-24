"use client";
import { useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import Cookies from "js-cookie";

export default function CookieConsent() {
  const [cookieState, setCookieState] = useState("not-answered");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  useEffect(() => {
    const state = Cookies.get("cookie-consent-state");
    if (state) setCookieState(state);
  }, []);

  const handleConsent = (state) => {
    Cookies.set("cookie-consent-state", state);
    setCookieState(state);
  };

  if (cookieState === "not-answered") {
    return (
      <div
        className="cookie-consent"
        ref={ref}
        style={{
          transform: isInView ? "none" : `translateX(-200px)`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <p>We use cookies to improve your experience. Do you accept?</p>
        <div className="cookie-consent__buttons">
          <button
            onClick={() => handleConsent("accepted")}
            className="btn btn__umber"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent("rejected")}
            className="btn btn__umber"
          >
            Reject
          </button>
        </div>
      </div>
    );
  }

  if (cookieState === "accepted") {
    return (
      <GoogleTagManager
        gtmId="
GTM-KD268FGV"
      />
    );
  }

  return (
    <button
      className="fixed bottom-4 right-4 p-2 bg-gray-200 rounded-full"
      onClick={() => setCookieState("not-answered")}
    >
      🍪
    </button>
  );
}
