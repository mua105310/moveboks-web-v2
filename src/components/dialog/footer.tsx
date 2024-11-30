"use client";
import { useOrderContext } from "@/provider/orderProvider";
import AccessorySelector from "@/template/event/components/accessorySelector";

export default function Footer() {
    const { order } = useOrderContext();
    return (
        <div className="w-full pt-5 bg-white/5">
            {/* Accessory Section */}
            <div className="pl-5 pr-5">
                <p className="text-sm pb-3">Tilføj også</p>
            </div>
            <div className="flex items-center justify-center mb-5">
                <AccessorySelector />
            </div>
            {/* Order Button */}
            <button 
                className={`${
                    order?.package && order?.selectedOptions
                        ? "bg-[var(--secondary)]"
                        : "bg-[var(--secondary)] opacity-20"
                } text-white uppercase font-bold w-full transition-all duration-300 p-4 md:hover:opacity-75`}
                disabled={!order?.package || !order?.selectedOptions}
            >
                Betal
            </button>
        </div>
    );
}
