"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { easeLuxury } from "@/lib/motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Dismiss loader once the DOM is interactive (don't wait for all images/videos)
    const dismiss = () => setVisible(false);

    if (document.readyState === "interactive" || document.readyState === "complete") {
      // DOM is already parsed — show content after a brief brand moment
      const t = setTimeout(dismiss, 400);
      return () => clearTimeout(t);
    } else {
      const onReady = () => setTimeout(dismiss, 400);
      document.addEventListener("DOMContentLoaded", onReady);
      // Fallback: dismiss after 1.5s max regardless
      const fallback = setTimeout(dismiss, 1500);
      return () => {
        document.removeEventListener("DOMContentLoaded", onReady);
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
