"use client";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { PackageModel } from "@/models/package";
import { ProductModel } from "@/models/product";
import { AccessoryModel } from "@/models/accessory";

interface OrderData {
  package: PackageModel | null;
  product: ProductModel | null;
  accessory: AccessoryModel | null;
}

interface OrderContextType {
  order: OrderData;
  updateOrder: (partialOrder: Partial<OrderData>) => void;
  clearOrder: () => void;
  isOrderComplete: boolean;
}

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<OrderData>({
    package: null,
    product: null,
    accessory: null,
  });

  const value = useMemo(() => ({
    order,
    updateOrder: (partialOrder: Partial<OrderData>) => 
      setOrder(prev => ({ ...prev, ...partialOrder })),
    clearOrder: () => setOrder({ package: null, product: null, accessory: null }),
    isOrderComplete: Boolean(order.package && order.product && order.accessory)
  }), [order]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
}; 