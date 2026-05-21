"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { ProvfilmModal } from "./ProvfilmModal";

type Ctx = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const ProvfilmCtx = createContext<Ctx | null>(null);

export function ProvfilmProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ProvfilmCtx.Provider value={{ open, close, isOpen }}>
      {children}
      <ProvfilmModal open={isOpen} onClose={close} />
    </ProvfilmCtx.Provider>
  );
}

export function useProvfilm() {
  const ctx = useContext(ProvfilmCtx);
  if (!ctx) {
    throw new Error("useProvfilm must be used inside <ProvfilmProvider>");
  }
  return ctx;
}
