'use client'
import { OrderModel } from '@/models/internal/orderModel';
import { useState, createContext, useContext, Context } from 'react';

const OrderContext = createContext<OrderContextType | null>(null);

interface OrderContextType {
    order: OrderModel,
    setOrder: React.Dispatch<React.SetStateAction<OrderModel>>
}

export const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrderContext must be used within an OrderProvider');
    }
    return context;
}

export default function OrderProvider({children}: {children: React.ReactNode}) {
    const [order, setOrder] = useState<OrderModel>({
        event_id: '',
        package: {
            id: '',
            title: '',
            predefinedLocationAndTime: false,
            shortDescription: '',
            longDescription: '',
            images: [],
            options: []
        },
        product: [
            {
                id: '',
                quantity: 0,
                accessories: [
                    {
                        id: '',
                        quantity: 0
                    },  
                ],
            }
        ],
        form: {
            email: '',
            location: '',
            date: '',
            duration: 0,
        }
    });

    return (
        <OrderContext.Provider value={{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}
