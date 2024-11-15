"use client";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { PackageModel } from "@/models/package";
import { ProductModel } from "@/models/product";
import { AccessoryModel } from "@/models/accessory";

interface EventContextType {
  isVisible: boolean;
  
  setIsVisible: (visible: boolean) => void;
}

const EventContext = createContext<EventContextType | null>(null);

export function EventProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    isVisible: false,
  });

  const value = useMemo(() => ({
    ...state,
    setIsVisible: (visible: boolean) =>
      setState(prev => ({ ...prev, isVisible: visible })),
  }), [state]);

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
}

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
}; 