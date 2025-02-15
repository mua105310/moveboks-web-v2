"use client";
import React, { use, useEffect, useState } from "react";
import SwiperCarousel from "@/components/carousel/swiper-carousel";
import { EventModel } from "@/internal/models/event";
import PackageCardComponent from "./package-card-component";
import { getEventById } from "@/controller/controller-service";
import SectionComponent from "./section-component";
import { useOrderHook } from "../hooks/use-order-hook";
import { useOrderProvider } from "@/provider/order-provider";
import ProductCardComponent from "./product-card-component";
import { getMinimumPrice } from "@/utils/pricing/price.calculating";

export default function EventContentComponent({event}: {event: EventModel}) {
    // Provider
    const {bookingCreation} = useOrderProvider();
    // Hook
    const { setPackage, setProduct, emptyOrder, setEvent } = useOrderHook();
    // Variables
    const actualEvent = bookingCreation?.event;

    useEffect(() => {
        if(!event) return;
        setEvent(event);
    }, [event]);

    return(
        <div>
            {/* Show packages */}
            <SectionComponent key={`packages-${actualEvent?.ID}`} title="Vælg pakke">
                    <SwiperCarousel>
                        {actualEvent?.packages.map((pack, index) => (
                            <PackageCardComponent key={index} item={pack} isImage={false} onClick={() => setPackage(pack)}/>
                        ))}
                    </SwiperCarousel>
            </SectionComponent>
            {/* Show Products */}
            {bookingCreation?.package && (
                <SectionComponent key={bookingCreation.package.ID}title='Vælg Produkt'>
                    <SwiperCarousel>
                        {bookingCreation.package.options?.map((option, index) => (
                            <ProductCardComponent key={index} product={option.product} onClick={() => setProduct(option)} price={getMinimumPrice(option)} />
                        ))}
                    </SwiperCarousel>
                </SectionComponent>
            )}
        </div>
    )
}