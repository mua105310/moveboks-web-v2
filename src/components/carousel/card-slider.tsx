"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { JSX } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import PackageCard from "../card/package-card";
import { PackageModel } from "@/internal/models/package";

interface CardSliderProps<T> {
  items: PackageModel[];
}

export default function CardSlider<T>({ items }: CardSliderProps<T>) {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesOffsetBefore={40}
        slidesOffsetAfter={40}
        grabCursor
        breakpoints={{
          0: { slidesPerView: 1.3 }, 
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}><PackageCard pack={item}/></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
