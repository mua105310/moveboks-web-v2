"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import  LoadingCard  from "@/components/card/loading-card";

interface SwiperCarouselProps {
  children: React.ReactNode;
}

export default function SwiperCarousel({ children }: SwiperCarouselProps) {
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
        {React.Children.map(children, (child, index) => (
          //if child is null, return LoadingCard
          <SwiperSlide key={index}>{child ? child : <LoadingCard />}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
