"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CounterUpProps = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
};

export function CounterUp({
  value,
  suffix = "",
  label,
  duration = 2000,
}: CounterUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-sora font-bold text-navy">
        {count}
        {suffix}
      </div>
      <p className="text-sm text-slate mt-2">{label}</p>
    </div>
  );
}
