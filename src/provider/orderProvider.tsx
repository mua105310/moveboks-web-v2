"use client";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { PackageModel } from "@/models/package";
import { ProductModel } from "@/models/product";

interface OrderContextType {
  // Selected items
  selectedPackage: PackageModel | null;
  selectedProduct: ProductModel | null;
  
  // Actions
  setSelectedPackage: (pkg: PackageModel | null) => void;
  setSelectedProduct: (product: ProductModel | null) => void;
  
  // Helper functions
  clearOrder: () => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    selectedPackage: null as PackageModel | null,
    selectedProduct: null as ProductModel | null,
  });

  const value = useMemo(() => ({
    ...state,
    setSelectedPackage: (pkg: PackageModel | null) => 
      setState(prev => ({ ...prev, selectedPackage: pkg })),
    setSelectedProduct: (product: ProductModel | null) => 
      setState(prev => ({ ...prev, selectedProduct: product })),
    clearOrder: () => 
      setState(prev => ({ ...prev, selectedPackage: null, selectedProduct: null }))
  }), [state]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
}; 