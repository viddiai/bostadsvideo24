"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CounterUpProps = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  index?: number;
};

export function CounterUp({
  value,
  suffix = "",
  label,
  duration = 1800,
  index = 0,
}: CounterUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (value === 0) {
      setCount(0);
      return;
    }

    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="group relative pt-6 border-t border-ink/15">
      <span className="absolute -top-px left-0 h-px w-12 bg-brass transition-all duration-700 group-hover:w-24" />
      <span className="font-mono text-[10px] tracking-widest uppercase text-fog">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-display text-5xl md:text-6xl font-medium text-ink tabular-nums tracking-tight leading-none">
          {count}
        </span>
        <span className="font-display text-3xl md:text-4xl font-light text-brass leading-none">
          {suffix}
        </span>
      </div>
      <p className="mt-4 text-[13px] text-fog leading-snug max-w-[180px]">
        {label}
      </p>
    </div>
  );
}
