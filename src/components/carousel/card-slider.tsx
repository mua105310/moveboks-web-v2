import { Swiper, SwiperSlide } from 'swiper/react';
import React, { JSX } from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface CardSliderProps<T> {
    items: T[];
    renderItem: (item: T) => JSX.Element;
}

export default function CardSlider<T>({ items, renderItem }: CardSliderProps<T>) {
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesOffsetBefore={40}
                slidesOffsetAfter={40}
                grabCursor
                slidesPerView={1.2}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
