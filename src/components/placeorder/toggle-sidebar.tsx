"use client";

import React from "react";
import { useDialog } from "@/provider/dialog-provider";
import { ShoppingCart } from "lucide-react"; // Import the basket icon

export default function ToggleSidebar() {
    const { isOpen, openDialog } = useDialog();

    return (
        <div
            onClick={openDialog}
            className="fixed bottom-10 right-10 flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ zIndex: 9999 }}
        >
            <ShoppingCart size={24} /> 
        </div>
    );
}
