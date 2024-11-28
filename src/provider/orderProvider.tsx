'use client'
import { BookingCreation } from '@/models/internal/orderModel';
import { useState, createContext, useContext, Context, useEffect } from 'react';

const OrderContext = createContext<OrderContextType | null>(null);

interface OrderContextType {
    order: BookingCreation| undefined,
    setOrder: React.Dispatch<React.SetStateAction<BookingCreation | undefined>>,
    isDialogVisible: boolean,
    setIsDialogVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isDialogOpen: boolean,
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrderContext must be used within an OrderProvider');
    }
    return context;
}

export default function OrderProvider({children}: {children: React.ReactNode}) {
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [order, setOrder] = useState<BookingCreation | undefined>(
     
    );

    return (
        <OrderContext.Provider value={{order, setOrder, isDialogVisible, setIsDialogVisible, isDialogOpen, setIsDialogOpen}}>
            {children}
        </OrderContext.Provider>
    )
}
