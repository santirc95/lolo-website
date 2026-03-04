"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { easeLuxury } from "@/lib/motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismiss = () => setVisible(false);

    if (document.readyState === "complete") {
      // Page already fully loaded (e.g. back navigation)
      setTimeout(dismiss, 100);
    } else {
      // Wait for window.load — now that below-fold resources are lazy,
      // this mainly waits for the Hero video + fonts (the above-fold essentials)
      const onLoad = () => setTimeout(dismiss, 100);
      window.addEventListener("load", onLoad);
      // Safety fallback: never block longer than 3s
      const fallback = setTimeout(dismiss, 3000);
      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: easeLuxury }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-champagne"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: easeLuxury }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-display text-3xl tracking-wider text-charcoal sm:text-4xl">
              {SITE_CONFIG.name}
            </span>
            <div className="h-px w-12 overflow-hidden bg-gold/20">
              <motion.div
                className="h-full bg-gold"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: easeLuxury,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
