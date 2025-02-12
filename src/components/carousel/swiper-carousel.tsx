"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import LoadingCard from "@/components/card/loading-card";

interface SwiperCarouselProps {
  children: React.ReactNode;
  slidesPerView?: number; // Optional prop
}

export default function SwiperCarousel({ children, slidesPerView }: SwiperCarouselProps) {
  const childrenArray = React.Children.toArray(children);
  const isSingleSlide = childrenArray.length === 1;

  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesOffsetBefore={isSingleSlide ? 0 : 40}
        slidesOffsetAfter={isSingleSlide ? 0 : 40}
        grabCursor
        slidesPerView={isSingleSlide ? 1 : slidesPerView ?? undefined}
        breakpoints={
          !isSingleSlide && slidesPerView === undefined
            ? {
                0: { slidesPerView: 1.3 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }
            : undefined
        }
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide key={index} className={isSingleSlide ? "w-full flex justify-center" : ""}>
            {child ? child : <LoadingCard />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
