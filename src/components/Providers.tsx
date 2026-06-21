"use client";

import React, { createContext, useContext, useState } from "react";
import QuoteModal from "./QuoteModal";

type QuoteModalContextType = {
  isOpen: boolean;
  openModal: (product?: string) => void;
  closeModal: () => void;
  selectedProduct: string;
};

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function Providers({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const openModal = (product?: string) => {
    setSelectedProduct(product || "");
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal, selectedProduct }}>
      {children}
      <QuoteModal />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a Providers component");
  }
  return context;
}
