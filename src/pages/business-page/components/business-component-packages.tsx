"use client";
import React, {use, useContext, useEffect, useState} from 'react';
import { PackageModel } from "@/internal/models/package";
import BusinessComponentPackageCard from './busniess-component-package-card';
import { useOrder } from '@/provider/provider-business-order';
import { BookingCreation } from '@/internal/models/bookingcreation-model';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default function BusinessComponentPackages({ packages }: { packages: PackageModel[] }) {
    if (!packages) {
        return 
    }
    const { order, setOrder } = useOrder();

    function handleClick(pkg: PackageModel) {
        console.log('package clicked', pkg);
        setOrder({
          package: pkg,
        } as BookingCreation);
      }

    //   useEffect(() => {
    //     console.log('packages', packages);
    //   }, [order]);

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
                    <BusinessComponentPackageCard package={pkg} onClick={() => handleClick(pkg)} />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
}
