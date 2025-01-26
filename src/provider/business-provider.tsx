"use client";

import { EventModel } from "@/internal/models/event";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type correctly using `BusinessProviderProps`
interface BusinessProviderProps {
    business: EventModel | null; // Assuming business follows the EventModel structure
    setBusiness: (business: EventModel | null) => void;
}

// Create the context with the correct type
const BusinessContext = createContext<BusinessProviderProps | null>(null);

// Custom hook for using the business context
export const useBusinessProvider = () => {
    const context = useContext(BusinessContext);
    if (!context) {
        throw new Error("useBusinessProvider must be used within a BusinessProvider");
    }
    return context;
};

// Provider component
export const BusinessProvider = ({ children }: { children: ReactNode }) => {
    const [business, setBusiness] = useState<EventModel | null>(null);

    return (
        <BusinessContext.Provider value={{ business, setBusiness }}>
            {children}
        </BusinessContext.Provider>
    );
};
