"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionProps = {
  question: string;
  answer: string;
  index: number;
};

export function Accordion({ question, answer, index }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-ink/15">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-start justify-between w-full gap-6 py-6 text-left"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-[11px] tracking-widest text-fog uppercase pt-1.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-xl md:text-[22px] text-ink leading-tight transition-colors duration-300 group-hover:text-brass-deep">
            {question}
          </span>
        </div>
        <div
          className={`flex-shrink-0 mt-1 transition-transform duration-500 ease-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <Plus size={22} strokeWidth={1.4} className="text-ink" />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-12 pr-12 max-w-2xl">
              <p className="text-fog leading-relaxed text-[15px]">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
