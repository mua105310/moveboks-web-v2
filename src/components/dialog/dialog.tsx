'use client';

import { useOrderContext } from "@/provider/orderProvider";
import { useState } from "react";
import { BsCart, BsX } from "react-icons/bs";

export default function Dialog() {
    const [isOpen, setIsOpen] = useState(false);
    const { order } = useOrderContext();

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        {/* Cart Icon - Only visible on desktop */}
        <div className="fixed hidden lg:flex lg:bottom-10 lg:right-10 w-16 h-16 bg-white rounded-full justify-center items-center z-20 cursor-pointer hover:scale-105 transition-all duration-300">
            <BsCart size={24} className="text-black" onClick={toggleDialog} />
        </div>

        {/* Desktop Dialog */}
        <div className={`fixed inset-0 bg-black/50 transition-all duration-300 hidden lg:block ${isOpen ? 'opacity-100 z-[10000]' : 'opacity-0 z-0 pointer-events-none'}`}>
            <div className={`fixed right-0 top-0 bg-[var(--background)] w-[500px] h-full transition-transform duration-300 ${isOpen ? 'translate-x-0 border-l border-white' : 'translate-x-full border-transparent'}`}>
                <div className="-left-5 top-1/2 -translate-y-1/2 absolute w-10 h-10 rounded-full bg-white flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300">
                    <BsX size={24} className="text-black" onClick={toggleDialog}/>
                </div>
            </div>
        </div>

        {/* Mobile Dialog - Only visible below lg breakpoint */}
        <div className={`fixed bottom-0 lg:hidden bg-[var(--background)] w-full flex justify-center border-t border-white/40 rounded-t-[50px] transition-all duration-300 ${isOpen ? 'z-[10000] h-[90vh]' : 'z-[10000] h-[5vh]'}`}>
            <div className="w-24 h-6 bg-white text-black -my-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300" onClick={toggleDialog}>
                {isOpen ? <span className="uppercase text-sm tracking-wider">Luk</span> : <span className="uppercase text-sm tracking-wider">Tilbage</span>}
            </div>
        </div>
        </>
    )
}