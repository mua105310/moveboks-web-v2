"use client";
import { BookingCreation } from '@/internal/models/bookingcreation-model';
import { useState, createContext, useContext, ReactNode } from 'react';

type OrderContextType = {
  order: BookingCreation | undefined;
  setOrder: React.Dispatch<React.SetStateAction<BookingCreation | undefined>>;
};

const OrderContext = createContext<OrderContextType | null>(null);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<BookingCreation | undefined>(undefined);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
