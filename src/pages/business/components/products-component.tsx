"use client";
import React, {useEffect} from 'react';
import { ProductModel } from '@/internal/models/product';
import ProductCardComponent  from './product-card-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useOrder } from '@/provider/provider-business-order';
import { ProductConstraintModel } from '@/internal/models/package';
import { BookingCreation } from '@/internal/models/bookingcreation-model';

export default function ProductsComponent({ products }: { products: ProductConstraintModel[] }) {
    if (!products) {
        return 
    }  
    const { order, setOrder } = useOrder();

    function handleClick(product: ProductModel): void {
        setOrder({
          ...order,
          selected_options: {
            product: product,
            quantity: 1,
          },
        } as BookingCreation);
      }

      useEffect(() => {
        console.log("product selcted: ", order);
        }, [order]);


    return (
        <div className=''>
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
            {products.map((option, index) => (
                <SwiperSlide key={index}>
                    <ProductCardComponent product={option.product} onClick={() => handleClick(option.product)} />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
}