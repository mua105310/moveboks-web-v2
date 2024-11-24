'use client'
import { OrderModel } from '@/models/internal/orderModel';
import { useState, createContext, useContext, Context, useEffect } from 'react';

const OrderContext = createContext<OrderContextType | null>(null);

interface OrderContextType {
    order: OrderModel,
    setOrder: React.Dispatch<React.SetStateAction<OrderModel>>,
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
                product: {
                    id: '',
                    title: '',
                    shortDescription: '',
                    longDescription: '',
                    images: []
                },
                quantity: 0,
                accessories: [
                    {
                        accessory: {
                            id: '',
                            title: '',
                            shortDescription: '',
                            longDescription: '',
                            images: [],
                            availableQuantity: 0,
                            type: undefined!,
                            selectionType: undefined!,
                        }, 
                        quantity: 0,
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
        <OrderContext.Provider value={{order, setOrder, isDialogVisible, setIsDialogVisible, isDialogOpen, setIsDialogOpen}}>
            {children}
        </OrderContext.Provider>
    )
}
