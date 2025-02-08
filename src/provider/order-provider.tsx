"use client";
import { BookingCreation } from '@/internal/models/bookingcreation-model';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define intial state
interface OrderState {
    bookingCreation: BookingCreation | undefined;
    setBookingCreation: (bookingCreation: BookingCreation) => void;
}

// Create context
const OrderContext = createContext<OrderState | undefined>(undefined);

// Create provider
export const OrderProvider = ({ children }: { children: ReactNode }) => {
    const [bookingCreation, setBookingCreation] = useState<BookingCreation | undefined>(undefined);

    return (
        <OrderContext.Provider value={{ bookingCreation, setBookingCreation }}>
            {children}
        </OrderContext.Provider>
    );
};

// Create custom hook
export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within a OrderProvider');
    }
    return context;
};
