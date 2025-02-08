"use client";
import React, { useEffect, useState } from "react";
import { EventModel } from "@/internal/models/event";
import SwiperCarousel from "@/components/selection/carousel/swiper-carousel";
import PackageCard from "@/components/card/package-card";
import { PackageModel } from "@/internal/models/package";
import { useOrderProvider } from "@/provider/order-provider";

export default function Selection({ event }: { event: EventModel }) {
    const {bookingCreation, setBookingCreation } = useOrderProvider();

    function handleSelectPackage(pack: PackageModel): void {
        setBookingCreation({
            package: pack,
            event: parseInt(event.ID),
        });
    }

    useEffect(() => {
        console.log(bookingCreation);
    }, [bookingCreation]);

    
    return (
        <div>
        {/* CHOOSE PACKAGE */}
        <h2 className="mb-4 pl-10 text-xl uppercase">Vælg pakke</h2>
         {event?.packages && (
                <SwiperCarousel>
                    {event.packages.map((pack) => (
                        <PackageCard key={pack.ID} item={pack} onClick={() => handleSelectPackage(pack)} />
                    ))}
                </SwiperCarousel>
            )}
        {/* CHOOSE PRODUCT */}
        {bookingCreation?.package && (
            <h2 className="mb-4 pl-10 text-xl uppercase">Vælg produkt</h2>
            
        )}
        </div>
    );
}