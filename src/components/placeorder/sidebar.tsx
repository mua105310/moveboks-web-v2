"use client";

import { useDialog } from "@/provider/dialog-provider";
import { useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useOrder } from "@/provider/provider-business-order";
import Form from "./form";
import Card from "./card";

export default function Sidebar() {
    const { isOpen, closeDialog } = useDialog();
    const [isClosing, setIsClosing] = useState(false);
    const { order } = useOrder();

    useEffect(() => {
        // Freeze the screen by adding inline styles to the body
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        // Cleanup to restore scrolling on unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true); // Trigger spin animation
        setTimeout(() => {
            setIsClosing(false); // Reset animation state
            closeDialog();
        }, 300); // Match the duration of the spin animation
    };

    return (
        <div>
            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#151515] bg-opacity-50 z-[120]" onClick={handleClose}></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-screen w-[700px] shadow-lg transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                    zIndex: 120,
                }}
            >

                {/* Basket Header */}
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-5 border-b border-gray-300 flex flex-row items-center  sticky top-0 z-10">
                        <div
                            onClick={handleClose}
                            className={`cursor-pointer transition-transform duration-500 text-3xl ${
                                isClosing ? "rotate-180" : ""
                            }`}
                        >
                            <HiOutlineX />
                        </div>
                        <h1 className="text-2xl font-semibold ml-4 text-white">Basket</h1>
                    </div>

                    <div className="p-5 overflow-y-auto">
                        {/* Chosen product and chosen packages */}
                        <div className="">
                            <h2 className="text-xl font-semibold mb-4">Chosen Package</h2>
                            <Card product={order?.selected_options!} />
                        </div>
                        <div className="">
                            <h2 className="text-xl font-semibold mb-4 mt-4">Chosen Products</h2>
                        </div> 
                        {/* Form */}
                        <Form />
                    </div>

                </div>


                {/* Check Out Button */}
                <button
                    className="w-full z-10 py-6 text-center text-white bg-[#1c4eff] hover:opacity-80 transition duration-300 fixed bottom-0 left-0 shadow-lg" onClick={() => alert("Check out button clicked!")}>
                    Place order
                </button>
            </div>
        </div>
    );
}
