'use client';

import Image from "next/image";
import { useEffect } from "react";
import { RiArrowUpWideFill } from "react-icons/ri";

interface CardProps {
    item: any;
}

export default function AccessoryCard({ item }: any) {
    
    if (!item.length) return null;
    
    return (
        <div>
            <div className="flex flex-row border border-white/20 rounded-lg card h-full gap-2 overflow-hidden w-full">
                {/* Image */}
                <div className="h-full flex items-center justify-center p-2 bg-white/5 rounded-l-md">
                    {item[0]?.product?.images?.[0] && (
                        <Image
                            src={item[0].product.images[0]}
                            alt={item[0].product.title || 'Product image'}
                            width={50}
                            height={50}
                        />
                    )}
                </div>
                {/* Title and subtitle */}
                <div className="flex-grow flex flex-col pt-2">
                    <p className="text-sm lg:text-md font-semibold uppercase">{item[0].product.title}</p>
                    <p className="text-[9px] lg:text-xs">{item[0].product.shortDescription}</p>
                </div>
                {/* Quantity and Actions */}
                <div className="flex items-center justify-center gap-2 px-4 ">
                    {/* Decrement Button */}
                    <div
                        className="w-8 px-2 py-1 text-sm bg-[#151515] text-white rounded hover:opacity-70 transition text-center cursor-pointer"
                    >
                        -
                    </div>
                    {/* Quantity */}
                    <span className="text-white font-semibold">{item[0].quantity}</span>
                    {/* Increment Button */}
                    <div
                        className="w-8 px-2 py-1 text-sm bg-[#151515] text-white rounded hover:opacity-70 transition text-center cursor-pointer"
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    )
}