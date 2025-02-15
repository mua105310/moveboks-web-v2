"use client";
import React, { use, useEffect, useState } from "react";
import SwiperCarousel from "@/components/carousel/swiper-carousel";
import { EventModel } from "@/internal/models/event";
import PackageCardComponent from "./card/package-card-component";
import { getEventById } from "@/controller/controller-service";
import SectionComponent from "./section/section-component";
import  useOrderHook  from "../hooks/use-order-hook";
import { useOrderProvider } from "@/provider/order-provider";
import ProductCardComponent from "./card/product-card-component";
import { getMinimumPrice } from "@/utils/pricing/price.calculating";

export default function EventContentComponent({event}: {event: EventModel}) {
    // Provider
    const {bookingCreation, setIsOrderOpen, isOrderOpen} = useOrderProvider();
    // Hook
    const { setPackage, setProduct, setEvent } = useOrderHook();
    // Variables
    const actualEvent = bookingCreation?.event;

    useEffect(() => {
        if(!event) return;
        setEvent(event);
        setIsOrderOpen(false);
    }, [event]);

    return(
        <div className="lg:pl-32 lg:pr-32 2xl:pl-96 2xl:pr-96">
            {/* Cover when sidemenu are open */}
            <div className={`w-full h-svh fixed bg-black top-0 left-0 transition opacity-0 ${isOrderOpen && "opacity-80 z-50" }`}/>
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