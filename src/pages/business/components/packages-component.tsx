"use client";
import { PackageModel } from "@/internal/models/package";
import React, { use, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import PackageCardComponent from "./package-card-component";
import { useOrder } from "@/provider/provider-business-order";
import { getItemByID } from "@/controller/controller-service";
import { BookingCreation } from "@/internal/models/bookingcreation-model";

export default function PackagesComponent({ packages }: { packages: PackageModel[] }) {
  if (!packages) {
    return 
  }
  const { order, setOrder } = useOrder();

  async function handleClick(pkg: PackageModel): Promise<void> {
    // Fetch the selected package details
    const selectedPackage = await getItemByID(pkg.ID, "packages");
   
    setOrder({
      package: selectedPackage,
    } as BookingCreation);
  }

  return (
    <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesOffsetBefore={40}
            slidesOffsetAfter={40}
            grabCursor
            breakpoints={{
                // For small screens
                0: {
                slidesPerView: 1.2, // Show 1.2 slides
                },
                // For medium screens
                768: {
                slidesPerView: 2.4, // Show 2.4 slides
                },
                // For large screens
                1700: {
                slidesPerView: 4.4, // Show 4.4 slides
                },
            }}
            >
            {packages.map((pkg, index) => (
                <SwiperSlide key={index}>
                    <PackageCardComponent package={pkg} onClick={() => handleClick(pkg)} />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
  );
}
