"use client";
import { PackageModel } from "@/models/package";
import { useOrderContext } from "@/provider/orderProvider";
import Image from "next/image";
//define props
type PackageCardProps = {
    onClick?: () => void;
    pack: PackageModel;
    card?: boolean;
}

export default function PackageCard({onClick, pack, card}: PackageCardProps) {
    const {order} = useOrderContext();


    const getPrice = () => {
        const rentPrice = pack.options?.find(option => option.type === "rent")?.rentPrice?.[0]?.price;
        const buyPrice = pack.options?.find(option => option.type === "buy")?.buyPrice;
        return rentPrice ?? buyPrice ?? 'Pris ikke tilgængelig';
    }

   const isSelected = order?.package.id === pack.id;
    
    return (
        <div 
        className=
        {` flex-1 rounded-lg p-4 relative overflow-hidden lg:transition-all lg:duration-300
            ${isSelected && !card ? 'border-2 border-[#1c4eff]' : 'border border-white/20'}
            ${card ? 'h-24' : 'h-56 lg:hover:scale-105 cursor-pointer'}
        `} 
        onClick={onClick}>
            <Image 
            className="object-cover -z-10 opacity-20" 
            src={pack.images[0]} 
            alt={pack.title} 
            fill
            draggable={false}
            />
            <h3 className={`font-bold uppercase ${card ? 'text-sm' : 'text-xl mb-2'}`} style={{textShadow: "rgba(255, 255, 255, 0.6) 0px 0px 6px"}}>{pack.title}</h3>
            <p className={`${card ? 'text-[10px] mb-2' : 'text-xs md:text-sm mb-4'}`}>{pack.shortDescription}</p>
            <div className="flex flex-wrap gap-2">
                {pack.features?.map((feature) => (
                    <div 
                    key={feature} 
                    className={` bg-[var(--secondary)] rounded-lg inline-block ${card ? 'p-1' : 'p-2'}`}
                    >
                        <p className={`${card ? 'text-[10px]' : 'text-xs md:text-sm'}`}>{feature}</p>
                    </div>
                ))}
            </div>
                <div className="pt-4 w-full absolute bottom-0 left-0 p-4">
                    <p className={`text-xs ${card ? 'text-right' : ''}`}>fra {getPrice()}</p>
                </div>
        </div>
    );
}