// components/MobileMenu.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

const links = ["HOME", "SERVICES", "PRICING", "PORTFOLIO", "CONTACT"];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <nav className="mobile-menu-nav">
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={onClose}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
              >
                <span className="mobile-menu-number">0{i + 1}</span>
                {link}
              </motion.a>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <span>hello@zynex.studio</span>
            <span>© 2025 ZYNEX STUDIO</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
