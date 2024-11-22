'use client';

import { ProductModel } from "@/models/product";
import { useOrderContext } from "@/provider/orderProvider";
import Image from "next/image";

interface ProductCardProps {
    product: ProductModel;
    onClick?: () => void;
    card?: boolean;
}

export default function ProductCard({ product, onClick, card }: ProductCardProps) {
    const { order } = useOrderContext();

    const isSelected = order.product.some(p => p.product.id === product.id);

    return (
        <div
            onClick={onClick}
            className={`border flex-1rounded-lg flex flex-col w-full cursor-pointer transition-transform duration-300 overflow-hidden z-10 rounded-lg overflow-hidden ${
                isSelected && !card ? 'border-[var(--secondary)]' : 'border-white/20'
            }
             ${card ? 'h-[300px]' : 'h-[400px] lg:hover:scale-[1.02]'}`}
             >
            <div className="p-4 flex-1 flex flex-col">
                <h3
                    className={`font-bold uppercase mb-2 ${card ? 'text-sm' : 'text-xl'}`}
                    style={{ textShadow: "rgba(255, 255, 255, 0.6) 0px 0px 6px" }}
                >
                    {product.title}
                </h3>
                <p className={`${card ? 'text-xs mb-2' : 'text-xs md:text-sm mb-4'}`}>{product.shortDescription}</p>
                <div className="flex-1 flex justify-center items-center p-5">
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={card ? 80 : 110}
                        height={card ? 80 : 110}
                        draggable={false}
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
            <div className="w-full bg-[#1e1e1e] p-4 flex justify-center items-center h-20">
                {/* <p className="text-xs">fra 3099</p> */}
                {!card && (
                    isSelected ? (
                        <button className="p-2 bg-green-500 rounded-md text-xs uppercase tracking-wider text-[#151515] font-bold">
                            Valgt
                        </button>
                    ) : (
                        <button className="p-2 bg-[var(--secondary)] rounded-md text-xs uppercase tracking-wider font-bold">
                            Book
                        </button>
                    )
                )}
                {card && (
                    <div className="flex items-center gap-4">
                        <div className="w-8 px-2 py-1 text-sm bg-[#151515] text-white rounded hover:opacity-70 transition text-center cursor-pointer">
                            -
                        </div>
                        {/* Quantity */}
                        <span className="text-white font-semibold">{order.product[0].quantity}</span>
                        {/* Increment Button */}
                        <div className="w-8 px-2 py-1 text-sm bg-[#151515] text-white rounded hover:opacity-70 transition text-center cursor-pointer">
                            +
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
