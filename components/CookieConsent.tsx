"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const COOKIE_CONSENT_KEY = "cookie-consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set(COOKIE_CONSENT_KEY, "true", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 text-center sm:text-left">
          🍪 Ce site utilise des cookies nécessaires à son fonctionnement.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-[#4ECDC4] text-white px-6 py-2 rounded-full hover:bg-[#45B8B0] transition-colors"
        >
          D&apos;accord !
        </button>
      </div>
    </motion.div>
  );
}
