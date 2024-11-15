"use client";
import { ProductModel } from "@/models/product";
import Image from "next/image";
import { useState } from "react";
import Card from "../card/card";
import { useOrderContext } from "@/provider/orderProvider";
import { useEventContext } from "@/provider/eventProvider";
import { useEffect } from "react";

type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function FormDialog({ isOpen, onClose }: DialogProps) {
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[#1e1e1e] bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#151515] p-6 rounded-lg max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-grow flex-row items-center gap-2">
                        <h2 className="text-xl font-semibold">Kurv</h2>
                        <span className="text-gray-500">•</span>
                        <p className="text-gray-400">Title</p>
                    </div>  
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-300">
                        ✕
                    </button>
                </div>
            </div>
        </div>
    );
} 