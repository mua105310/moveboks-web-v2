"use client";
import { BookingCreation } from '@/internal/models/bookingcreation-model';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define intial state
interface OrderState {
    bookingCreation: BookingCreation | undefined;
    setBookingCreation: (bookingCreation: BookingCreation) => void;
    isOrderOpen: boolean;
    setIsOrderOpen: (isOrderOpen: boolean) => void;
}

// Create context
const OrderContext = createContext<OrderState | undefined>(undefined);

// Create provider
export const OrderProvider = ({ children }: { children: ReactNode }) => {
    const [bookingCreation, setBookingCreation] = useState<BookingCreation | undefined>(undefined);
    const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);

    if(isOrderOpen) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'auto';
    }

    return (
        <OrderContext.Provider value={{ bookingCreation, setBookingCreation, isOrderOpen, setIsOrderOpen }}>
            {children}
        </OrderContext.Provider>
    );
};

// Create custom hook
export const useOrderProvider = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within a OrderProvider');
    }
    return context;
};
