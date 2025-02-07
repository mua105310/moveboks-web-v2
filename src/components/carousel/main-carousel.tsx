
"use client";

import React, { useRef, useState } from 'react';
import { EventModel } from "@/internal/models/event";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { baseConfig } from "@/config/base-config"
import './style.css'; 
import Button from '../../button/button';

interface MainCarouselProps {
    events: EventModel[];
}

const MainCarousel = ({ events }: MainCarouselProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const autoplayDelay = 7000; // Autoplay delay in ms
  const [slideChangeKey, setSlideChangeKey] = useState(0); // Key to restart animation

  return (
    <div className="relative">
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        if (
          swiper.params.navigation &&
          typeof swiper.params.navigation !== "boolean"
        ) {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }
        swiper.navigation.update();
      }}
      onSlideChange={() => setSlideChangeKey(prev => prev + 1)} // Increment key on slide change
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      loop={true}
    >
{events.map((business, index) => (
  <SwiperSlide key={`${business.ID}_${index}`}>
          <div className='absolute z-10 top-0 bg-black w-full h-svh opacity-50'></div>
          <div className="flex-none w-full relative h-svh z-0">
            <Image
              src={business.image_url}
              alt={business.title}
              fill
              priority={false}
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
          <div>
            <div className="w-[95%] sm:w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10">
              <div className="tracking-[3px] text-white opacity-65">{baseConfig.company}</div>
              <p
                className="text-[40px] sm:text-[90px] min-[2000px]:text-[120px] font-bold italic leading-[50px] sm:leading-none mt-10 mb-10 uppercase text-shadow-lg lightning-text "
                dangerouslySetInnerHTML={{ __html: business.title }}
              ></p>
              <div className="h-1 w-32 bg-[var(--primary)] mx-auto mb-8"></div>
              <div className="text-xs sm:text-sm leading-4 w-auto mx-auto">
                <p>{business.long_description}</p>
              </div>
              <div className="mt-8">
                <Button path={business.path} label='BOOK' />
              </div>
          </div>
        </div>
        <div className="absolute left-0 top-1/2 -rotate-90 transform ml-10 tracking-[3px] text-[12px] hidden sm:block z-10" style={{ transform: 'rotate(-90deg) translate(-50%, 0%)', transformOrigin: '0 0' }}>
            <p>{business.short_description}</p>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {events.length > 1 && (
      <div>
        <div className="absolute bottom-0 w-full p-10 z-10">
          <div className="flex flex-row justify-between gap-10 sm:tracking-[2px]">
            <div className="w-[200px] hidden md:block">
              <button
                ref={prevRef} 
                className="w-full p-3 border flex items-center justify-center gap-2 text-xs tracking-widest uppercase transition hover:text-black hover:bg-white"
              >
                <CgArrowLongLeft className="text-2xl" /> Prev
              </button>
            </div>
            <div className="relative flex flex-1 items-center">
              <div className="w-full h-[3px] bg-white opacity-30"></div>
              {/* Progress bar */}
              <div
                key={slideChangeKey} // Key to restart animation
                className="progress-bar"
                style={{
                  animationDuration: `${autoplayDelay}ms`,
                }}
              ></div>
            </div>
            <div className="justify-end w-[200px] hidden md:block">
              <button
                ref={nextRef}
                className="w-full p-3 border flex items-center justify-center gap-2 text-xs uppercase transition hover:text-black hover:bg-white"
              >
                Next <CgArrowLongRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    )}
  </div>
  );
};
export default MainCarousel;