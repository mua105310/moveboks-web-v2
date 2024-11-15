"use client";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { PackageModel } from "@/models/package";
import { ProductModel } from "@/models/product";
import { AccessoryModel } from "@/models/accessory";

interface EventContextType {
  // Loading states
  isLoading: boolean;
  isVisible: boolean;
  
  // Actions
  setIsLoading: (loading: boolean) => void;
  setIsVisible: (visible: boolean) => void;
  accessories: AccessoryModel[];
  setAccessories: (accessories: AccessoryModel[]) => void;
}

const EventContext = createContext<EventContextType | null>(null);

export function EventProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    isLoading: false,
    isVisible: false,
    accessories: [] as AccessoryModel[]
  });

  const value = useMemo(() => ({
    ...state,
    setIsLoading: (loading: boolean) => 
      setState(prev => ({ ...prev, isLoading: loading })),
    setIsVisible: (visible: boolean) =>
      setState(prev => ({ ...prev, isVisible: visible })),
    setAccessories: (accessories: AccessoryModel[]) =>
      setState(prev => ({ ...prev, accessories }))
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