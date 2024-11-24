"use client";

import AccessoryCard from "@/components/card/accessoryCard/accessoryCard";
import { AccessoryModel } from "@/models/accessory";
import { useOrderContext } from "@/provider/orderProvider";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface AccessorySelectorProps {
    accessories: AccessoryModel[];
    type: "quantity" | "add";
}


export default function AccessorySelector({accessories, type}: AccessorySelectorProps) {
    const { order } = useOrderContext();
    
    // Filter accessories before passing to Swiper
    const availableAccessories = accessories.filter(acc => 
        !order.product[0]?.accessories.some(existingAcc => 
            existingAcc.accessory.id === acc.id
        )
    );

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1.2}
                spaceBetween={10}
                slidesOffsetBefore={10}
                slidesOffsetAfter={10}
                grabCursor
            >
                {availableAccessories.map((acc) => (
                    <SwiperSlide key={acc.id}>
                        <AccessoryCard accessory={acc} type={type} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}