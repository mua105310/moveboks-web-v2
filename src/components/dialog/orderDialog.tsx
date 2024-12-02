'use client';

import { useOrderContext } from "@/provider/orderProvider";
import { useState, useEffect } from "react";
import { BsCart, BsX } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { preventScroll } from "@/controller/appController";
import Footer from "./footer";
import Content from "./content";
import Form from "./form";

export default function OrderDialog() {
    const { isDialogVisible, setIsDialogVisible } = useOrderContext();
    const { isDialogOpen, setIsDialogOpen } = useOrderContext();
    const { order } = useOrderContext();

    useEffect(() => {
        document.documentElement.classList.toggle("no-doc-scroll", isDialogOpen);
        return () => document.documentElement.classList.remove("no-doc-scroll");
      }, [isDialogOpen]);
    
      const toggleDialog = () => setIsDialogOpen((prev) => !prev);
      
    return (
        <>
        {/* Layer */}
        <div className={`fixed top-0 h-screen bg-black/50 z-50 transition-all duration-300 ${isDialogOpen ? 'lg:w-full opacity-100' : 'w-0 opacity-0'} hidden lg:block`} 
             style={{zIndex: 10000, visibility: isDialogVisible ? 'visible' : 'hidden'}}>
        </div>
        
        {/* Cart Icon - Only visible on desktop */}
        <div className={`fixed hidden lg:flex lg:bottom-10 lg:right-10 w-16 h-16 bg-white rounded-full justify-center items-center z-20 cursor-pointer hover:scale-105 transition-all duration-300`}
             style={{visibility: isDialogVisible ? 'visible' : 'hidden'}}
             onClick={toggleDialog}>
            <BsCart size={24} className="text-black"/>
        </div>

        {/* Desktop Dialog */}
        <div className={`fixed right-0 top-0 bg-[var(--background)] w-[500px] h-full transition-all duration-300 hidden lg:block ${isDialogOpen ? 'translate-x-0 border-l border-white/50 opacity-100' : 'translate-x-full border-transparent opacity-0'}`}
            style={{zIndex: 10000, visibility: isDialogVisible ? 'visible' : 'hidden'}}>

            {/* Flex container for dialog content */}
            <div className="flex flex-col h-full relative">

                {/* Close button */}
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 z-10">
                    <BsX size={24} className="text-black" onClick={toggleDialog} />
                </div>

                {/* Header Section */}
                <div className="p-10 flex-shrink-0 border-b border-white/20">
                    <div className="flex items-center">
                        <p className="text-2xl font-bold">Kurv</p>
                    </div>
                </div>

                {/* Content Section (scrollable) */}
                <div className="flex-grow overflow-y-auto px-10">
                    <Content />
                </div>

                {/* Footer Section */}
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </div>

        {/* Mobile Dialog */}
        <div className={`fixed bottom-0 lg:hidden bg-[var(--background)] w-full flex flex-col transition-all duration-500 ${isDialogOpen ? 'z-[10000] h-dvh rounded-t-[0px] border-transparent' : 'z-40 h-[5vh] rounded-t-[50px] border-t border-white/40'}`}
            style={{ visibility: isDialogVisible ? 'visible' : 'hidden' }}>
            <div className="flex flex-col h-full">
                {/* Header section with padding */}
                <div className="p-5">
                    {isDialogOpen && (
                        <div className="w-full">
                            <div className="border-b border-white/20 flex items-center justify-between pb-3">
                                <p className="text-2xl font-bold">Kurv</p>
                                <AiOutlineClose 
                                    size={24}
                                    onClick={toggleDialog}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    )}

                    {!isDialogOpen && (
                        <div 
                        className={`absolute left-1/2 -translate-x-1/2 h-8 p-3 bg-white text-black -my-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg`} 
                        onClick={toggleDialog}>
                            <IoBagOutline size={14} className="text-black fz"/>
                        </div>
                    )}
                </div>

                {/* Content section scrollable with padding */}
                <div className="flex-grow overflow-y-auto px-5">
                    <Content />
                </div>
                
                <Footer />
            </div>
        </div>
        </>
    )
}