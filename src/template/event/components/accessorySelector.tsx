"use client";

import Card from "@/components/card/card/card";
import { useOrderContext } from "@/provider/orderProvider";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect, useState } from "react";

export default function AccessorySelector() {
    const { order } = useOrderContext();
    const swiperRef = useRef<any>(null); // To access the Swiper instance

    // Filtered accessories with quantity === 0
    const accessories = order?.selectedOptions?.[0]?.accessories?.filter(
        (accessory) => accessory.quantity === 0
    ) || [];

    // Automatically slide to the next available accessory
    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;

        if (swiperInstance) {
            const activeIndex = swiperInstance.activeIndex;

            // Check if the current slide is valid
            if (accessories[activeIndex] === undefined) {
                // Find the next available slide
                const nextIndex = accessories.findIndex((_, index) => index > activeIndex);

                if (nextIndex !== -1) {
                    swiperInstance.slideTo(nextIndex);
                } else if (activeIndex >= accessories.length) {
                    // If no valid slides are left, move to the last valid slide
                    swiperInstance.slideTo(accessories.length - 1);
                }
            }
        }
    }, [accessories]);

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1.2}
                slidesOffsetBefore={20}
                slidesOffsetAfter={20}
                spaceBetween={10}
                grabCursor
                ref={swiperRef}
            >
                {accessories.map((accessory, index) => (
                    <SwiperSlide key={index}>
                        <Card item={accessory} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
