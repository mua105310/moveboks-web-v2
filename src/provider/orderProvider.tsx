"use client";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { PackageModel } from "@/models/package";
import { ProductModel } from "@/models/product";
import { AccessoryModel } from "@/models/accessory";

interface OrderContextType {
  // Selected items
  selectedPackage: PackageModel | null;
  selectedProduct: ProductModel | null;
  selectedAccessories: Array<AccessoryModel & { quantity: number }>;
  
  // Actions
  setSelectedPackage: (pkg: PackageModel | null) => void;
  setSelectedProduct: (product: ProductModel | null) => void;
  addAccessory: (accessory: AccessoryModel) => void;
  removeAccessory: (accessoryId: string) => void;
  updateAccessoryQuantity: (accessoryId: string, quantity: number) => void;
  
  // Helper functions
  clearOrder: () => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    selectedPackage: null as PackageModel | null,
    selectedProduct: null as ProductModel | null,
    selectedAccessories: [] as Array<AccessoryModel & { quantity: number }>,
  });

  const value = useMemo(() => ({
    ...state,
    setSelectedPackage: (pkg: PackageModel | null) => 
      setState(prev => ({ ...prev, selectedPackage: pkg })),
    setSelectedProduct: (product: ProductModel | null) => 
      setState(prev => ({ ...prev, selectedProduct: product })),
    addAccessory: (accessory: AccessoryModel) =>
      setState(prev => ({
        ...prev,
        selectedAccessories: [...prev.selectedAccessories, { ...accessory, quantity: 1 }]
      })),
    removeAccessory: (accessoryId: string) =>
      setState(prev => ({
        ...prev,
        selectedAccessories: prev.selectedAccessories.filter(a => a.id !== accessoryId)
      })),
    updateAccessoryQuantity: (accessoryId: string, quantity: number) =>
      setState(prev => ({
        ...prev,
        selectedAccessories: prev.selectedAccessories.map(a => 
          a.id === accessoryId 
            ? { ...a, quantity } 
            : a
        )
      })),
    clearOrder: () => 
      setState(prev => ({
        ...prev,
        selectedPackage: null,
        selectedProduct: null,
        selectedAccessories: []
      }))
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