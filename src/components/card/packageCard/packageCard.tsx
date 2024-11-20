"use client";
import { PackageModel } from "@/models/package";
import { useOrderContext } from "@/provider/orderProvider";
import Image from "next/image";
//define props
type PackageCardProps = {
    onClick: () => void;
    pack: PackageModel;
}

export default function PackageCard({onClick, pack}: PackageCardProps) {
    const {order} = useOrderContext();

    const getPrice = () => {
        const rentPrice = pack.options?.find(option => option.type === "rent")?.rentPrice?.[0]?.price;
        const buyPrice = pack.options?.find(option => option.type === "buy")?.buyPrice;
        return rentPrice ?? buyPrice ?? 'Pris ikke tilgængelig';
    }

   const isSelected = order.package.id === pack.id;
    
    return (
        <div 
        className=
        {`border border-white/20 flex-1 rounded-lg p-4 relative overflow-hidden cursor-pointer lg:hover:scale-105 lg:transition-all lg:duration-300 h-56
            ${isSelected && 'border-2 border-[#1c4eff]'}
        `} 
        onClick={onClick}>
            <Image 
            className="object-cover -z-10 opacity-20" 
            src={pack.images[0]} 
            alt={pack.title} 
            fill
            draggable={false}
            />
            <h3 className="font-bold uppercase mb-2 text-xl" style={{textShadow: "rgba(255, 255, 255, 0.6) 0px 0px 6px"}}>{pack.title}</h3>
            <p className="text-xs md:text-sm mb-4">{pack.shortDescription}</p>
            <div className="flex flex-wrap gap-2">
                {pack.features?.map((feature) => (
                    <div 
                    key={feature} 
                    className="p-2 bg-[var(--secondary)] rounded-lg inline-block"
                    >
                        <p className="text-xs md:text-sm">{feature}</p>
                    </div>
                ))}
            </div>
                <div className="pt-4 w-full absolute bottom-4 left-4">
                    <p className="text-xs">fra {getPrice()}</p>
                </div>
        </div>
    );
}