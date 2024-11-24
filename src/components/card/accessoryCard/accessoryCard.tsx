'use client';

import { AccessoryModel } from "@/models/accessory";
import { useOrderContext } from "@/provider/orderProvider";
import Image from "next/image";
import { use, useEffect } from "react";
import { RiArrowUpWideFill } from "react-icons/ri";

interface AccessoryCardProps {
    accessory: AccessoryModel;
    type: "quantity" | "add";
}

export default function AccessoryCard({ accessory, type }: AccessoryCardProps) {
    const { order, setOrder } = useOrderContext();
    if (!accessory) return null;

    const handleAdd = (accessory: AccessoryModel) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            product: prevOrder.product.map((prod, index) => 
                index === 0 ? { 
                    ...prod,
                    accessories: [
                        ...prod.accessories,
                        {
                            accessory: accessory,
                            quantity: 1
                        }
                    ]
                } : prod
            )
        }));
    };

    useEffect(() => {
        console.log(order);
    }, [order]);
    
    return (
        <div>
            <div className="flex flex-row border border-white/20 rounded-lg h-20 gap-2 overflow-hidden w-full">
                {/* Image */}
                <div className="flex items-center justify-center p-2 bg-white/5 rounded-l-md w-16">
                    {accessory.images?.[0] && (
                        <Image
                            src={accessory.images[0]}
                            alt={accessory.title || 'Accessory image'}
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                    )}
                </div>
                {/* Title and subtitle */}
                <div className="flex-grow flex flex-col justify-center">
                    <p className="text-xs lg:text-md font-semibold uppercase line-clamp-1">{accessory.title}</p>
                    <p className="text-xs lg:text-xs line-clamp-2">{accessory.shortDescription}</p>
                </div>
                {/* Quantity and Actions */}
                {type === 'quantity' && (
                <div className="flex items-center justify-center gap-2 px-4 ">
                    {/* Decrement Button */}
                    <div
                        className="w-8 px-2 py-1 text-sm bg-[var(--secondary)] text-white rounded hover:opacity-70 transition text-center cursor-pointer"
                    >
                        -
                    </div>
                    {/* Quantity */}
                    <span className="text-white font-semibold">{order.product[0].accessories[0].quantity}</span>
                    {/* Increment Button */}
                    <div
                        className="w-8 px-2 py-1 text-sm bg-[var(--secondary)] text-white rounded hover:opacity-70 transition text-center cursor-pointer"
                    >
                        +
                        </div>  
                    </div>
                )}
                {/* Add and action */}
                {type == 'add' &&(
                <div className="flex justify-center items-center p-2" onClick={() => handleAdd(accessory)}>
                    <div className="p-2 rounded-md cursor-pointer bg-[var(--secondary)] hover:opacity-70 transition-all duration-500 ease-in-out">
                        <p className="text-xs tracking-wide">Add</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}