// components/SearchOverlay.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

const suggestions = ["Services", "Portfolio", "Pricing", "Contact", "About"];

export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="search-box"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Search Zynex Studio..."
              className="search-input"
            />
            <div className="search-suggestions">
              <span className="search-label">SUGGESTIONS</span>
              {suggestions.map((s) => (
                <a key={s} href={`#${s.toLowerCase()}`} onClick={onClose}>
                  {s}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
