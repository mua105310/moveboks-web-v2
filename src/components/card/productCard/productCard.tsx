'use client';

import { ProductModel } from "@/models/product";
import { useOrderContext } from "@/provider/orderProvider";
import Image from "next/image";

interface ProductCardProps {
    product: ProductModel;
    onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
    const { order } = useOrderContext();

    const isSelected = order.product?.some(p => p.id === product.id);

    return (
        <div
            onClick={onClick}
            className={`border flex-1 h-[400px] rounded-lg flex flex-col cursor-pointer transition-transform duration-300 overflow-hidden lg:hover:scale-[1.02] z-10 ${
                isSelected ? 'border-[var(--secondary)]' : 'border-white/20'
            }`}
        >
            <div className="p-4 flex-1 flex flex-col">
                <h3
                    className="font-bold uppercase mb-2 text-xl"
                    style={{ textShadow: "rgba(255, 255, 255, 0.6) 0px 0px 6px" }}
                >
                    {product.title}
                </h3>
                <p className="text-xs md:text-sm mb-4">{product.shortDescription}</p>
                <div className="flex-1 flex justify-center items-center p-5">
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={110}
                        height={110}
                        draggable={false}
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
            <div className="w-full bg-[#1e1e1e] p-4 flex justify-between items-center h-20">
                <p className="text-xs">fra 3099</p>
                {isSelected ? (
                    <button className="p-2 bg-green-500 rounded-md text-xs uppercase tracking-wider text-[#151515] font-bold">
                        Valgt
                    </button>
                ) : (
                    <button className="p-2 bg-[var(--secondary)] rounded-md text-xs uppercase tracking-wider font-bold">
                        Book
                    </button>
                )}
            </div>
        </div>
    );
}
