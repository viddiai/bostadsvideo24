"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "md" | "lg";
};

export function Modal({ open, onClose, children, size = "md" }: ModalProps) {
  // Lock body scroll while open & close on Esc
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const maxWidth = size === "lg" ? "max-w-2xl" : "max-w-lg";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className={`relative bg-bone border border-ink/15 w-full ${maxWidth} my-8 sm:my-0 grain`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
          >
            {/* Brass corner accent */}
            <div className="absolute top-0 right-0 w-10 h-10 bg-brass z-10" />

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Stäng"
              className="absolute top-4 left-4 z-20 w-9 h-9 flex items-center justify-center text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <div className="relative p-7 pt-14 sm:p-10 sm:pt-14">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
