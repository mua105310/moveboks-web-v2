"use client";

import React, { useRef, useState } from 'react';
import { EventModel } from "@/models/event";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './style.css'; 

interface ImageCarouselProps {
  events: EventModel[];
}

const ImageCarousel = ({ events }: ImageCarouselProps) => {
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
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className='absolute z-10 top-0 bg-black w-full h-svh opacity-40'></div>
            <div className="flex-none w-full relative h-svh z-0">
              <Image
                src={event.images[0]}
                alt={event.title}
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
            <div>
              <div className="w-[95%] sm:w-auto h-auto p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col text-center items-center justify-center z-10">
                <div className='tracking-[3px] text-white opacity-65'>MOVEBOKS</div>
                <p className='text-[40px] sm:text-[90px] min-[2000px]:text-[120px] font-bold italic leading-[50px] sm:leading-none mt-8 mb-8 uppercase' style={{textShadow: '0 0 12px rgba(255, 255, 255, 0.8)'}} dangerouslySetInnerHTML={{ __html: event.title }}></p>
                <div className='h-1 w-32 bg-[var(--secondary)] border-0 mx-auto mb-8'></div>
                <div className='text-xs sm:text-sm leading-4 w-auto mx-auto'>
                    <p>{event.description}</p>
                </div>
                <div className='mt-8'>
                    <a href={event.path}>
                        <button>Lej nu</button>
                    </a>
                    {/*  */}
                </div>
              </div>
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
                  className="w-full p-3 border flex items-center justify-center gap-2 text-xs tracking-widest uppercase"
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
                  className="w-full p-3 border flex items-center justify-center gap-2 text-xs uppercase"
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

export default ImageCarousel;
