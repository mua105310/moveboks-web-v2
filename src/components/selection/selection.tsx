"use client";
import React, { useState } from "react";
import { EventModel } from "@/internal/models/event";
import SwiperCarousel from "@/components/selection/carousel/swiper-carousel";
import PackageCard from "@/components/card/package-card";
import { PackageModel } from "@/internal/models/package";

export default function Selection({ event }: { event: EventModel }) {

    function handleSelectPackage(pack: PackageModel): void {
        console.log("Selected package", pack);
    }
    
    return (
        <div>
        <h2 className="mb-4 pl-10 text-xl uppercase">Vælg pakke</h2>
         {event?.packages && (
                <SwiperCarousel>
                    {event.packages.map((pack) => (
                        <PackageCard key={pack.ID} item={pack} onClick={() => handleSelectPackage(pack)} />
                    ))}
                </SwiperCarousel>
            )}
        </div>
    );
}