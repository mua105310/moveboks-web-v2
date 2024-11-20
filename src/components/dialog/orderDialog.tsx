'use client';

import { useOrderContext } from "@/provider/orderProvider";
import { useState, useEffect } from "react";
import { BsCart, BsX } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { preventScroll } from "@/controller/appController";

export default function OrderDialog() {
    const { isDialogVisible, setIsDialogVisible } = useOrderContext();
    const { isDialogOpen, setIsDialogOpen } = useOrderContext();
    const { order } = useOrderContext();

    const toggleDialog = () => {
        setIsDialogOpen(!isDialogOpen);
    }

    useEffect(() => {
        preventScroll(isDialogOpen);
    }, [isDialogOpen]);


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
        <div className={`fixed right-0 top-0 bg-[var(--background)] w-[500px] h-full transition-all duration-300 hidden lg:block ${isDialogOpen ? 'translate-x-0 border-l border-white opacity-100' : 'translate-x-full border-transparent opacity-0'}`}
             style={{zIndex: 10000, visibility: isDialogVisible ? 'visible' : 'hidden'}}>
            <div className="-left-5 top-1/2 -translate-y-1/2 absolute w-10 h-10 rounded-full bg-white flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300">
                <BsX size={24} className="text-black" onClick={toggleDialog}/>
                
            </div>
        </div>

        {/* Mobile Dialog */}
        <div className={`fixed bottom-0 lg:hidden bg-[var(--background)] w-full flex justify-center transition-all duration-300 ${isDialogOpen ? 'z-[10000] h-dvh rounded-t-[0px] border-transparent' : 'z-40 h-[5vh] rounded-t-[50px] border-t border-white/40'}`}
             style={{visibility: isDialogVisible ? 'visible' : 'hidden'}}>
            {isDialogOpen ? (
                <div 
                onClick={toggleDialog}
                className=" absolute right-5 top-5 opacity-90"><AiOutlineClose size={24}/></div>
            ) : (
                <div 
                className={`h-8 p-3 bg-white text-black -my-10 rounded-full flex flex-row gap-1 justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg`} 
                onClick={toggleDialog} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IoBagOutline size={14} className="text-black"/>
                </div>
            )}

        </div>
        </>
    )
}