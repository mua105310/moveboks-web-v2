"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define Dialog Context and its type
interface DialogContextType {
    isOpen: boolean;
    toggleDialog: () => void;
    closeDialog: () => void;
    openDialog: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

// Provider Component
export const DialogProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => setIsOpen((prev) => !prev);
    const closeDialog = () => setIsOpen(false);
    const openDialog = () => setIsOpen(true);

    return (
        <DialogContext.Provider value={{ isOpen, toggleDialog, closeDialog, openDialog }}>
            {children}
        </DialogContext.Provider>
    );
};

// Custom Hook to use the Dialog Context
export const useDialog = () => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error("useDialog must be used within a DialogProvider");
    }
    return context;
};
