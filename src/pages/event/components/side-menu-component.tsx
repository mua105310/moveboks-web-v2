"use client"

import { useOrderProvider } from "@/provider/order-provider";
import { useOrderHook } from "../hooks/use-order-hook";

export default function SideMenuComponent() {
    const { bookingCreation, setBookingCreation, isOrderOpen, setIsOrderOpen } = useOrderProvider();
    const { toggleOrder } = useOrderHook();

    return (
        <div
        className={`fixed bg-[#151515] h-full w-full lg:w-1/2 sm:w-64 top-0 right-0 transform transition-transform duration-300 ease-in-out z-40 ${
          !isOrderOpen
            ? 'translate-x-0 sm:translate-y-0'
            : 'translate-x-full sm:translate-y-full'
        }`}
        style={{zIndex: 9999}}
      >
        {/* Header */}
        <div className="flex flex-row justify-between p-5 lg:p-12 bg-white/10">
            <p className="text-2xl">Kurv</p>
            <p className="text-2xl cursor-pointer" onClick={toggleOrder}>X</p>
        </div>
        </div>
    );
}