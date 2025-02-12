"use client";
import React, {useEffect} from "react";
import { EventModel } from "@/internal/models/event";
import SwiperCarousel from "@/components/carousel/swiper-carousel";
import PackageCard from "@/components/card/package-card";
import { PackageModel, ProductConstraintModel } from "@/internal/models/package";
import { useOrderProvider } from "@/provider/order-provider";
import ProductCard from "../card/product-card";
import { getMinimumPrice } from "@/utils/pricing/price.calculating";
import { FaBasketShopping } from "react-icons/fa6";

export default function Selection({ event }: { event: EventModel }) {
    const {bookingCreation, setBookingCreation } = useOrderProvider();
    const { isOrderOpen, setIsOrderOpen } = useOrderProvider();

    useEffect(() => {
        if (!bookingCreation) {
          setBookingCreation({
            package: undefined,
            event: parseInt(event.ID),
          });
        }
      }, [bookingCreation, setBookingCreation, event.ID]);

    function handleSelectPackage(pack: PackageModel): void {
        setBookingCreation({
            package: pack,
            event: parseInt(event.ID),
        });
    }
    
    function handleSelectProduct(option: ProductConstraintModel): void {
        if (!bookingCreation) return;
        //if it is the same product jut return
        if (bookingCreation.selected_option?.product.ID === option.product.ID) return;
        setBookingCreation({
            ...bookingCreation,
            selected_option: {
                product: option.product,
                quantity: 1,
                constraint: option,
            }
        })
        setIsOrderOpen(true);
    }

    function openMenu(){
        setIsOrderOpen(!isOrderOpen);
    }

    return (
        <div>
        {/* CHOOSE PACKAGE */}
        <h2 className="mb-6 mt-6 text-2xl sm:text-3xl font-bold tracking-wide uppercase text-white/90 border-l-4 border-[var(--primary)] pl-4 ml-10">
            Vælg pakke
        </h2>
         {event?.packages && (
                <SwiperCarousel>
                    {event.packages.map((pack) => (
                        <PackageCard key={pack.ID} item={pack} onClick={() => handleSelectPackage(pack)} />
                    ))}
                </SwiperCarousel>
            )}
        {/* CHOOSE PRODUCT */}
        {bookingCreation?.package && (
            <div 
                key={bookingCreation.package.ID}
                className="opacity-0 translate-y-[-20px] animate-slide-fade-in transition"
            >
                <h2 className="mb-10 mt-10 text-2xl sm:text-3xl font-bold tracking-wide uppercase text-white/90 border-l-4 border-[var(--primary)] pl-4 ml-10">
                    Vælg produkt
                </h2>
                <SwiperCarousel>
                    {bookingCreation.package.options?.map((option) => (
                        <ProductCard 
                            key={option.product.ID} 
                            product={option.product} 
                            onClick={() => handleSelectProduct(option)} 
                            price={(getMinimumPrice(option))} 
                        />
                    ))}
                </SwiperCarousel>
            </div>
        )}
        {/* PlaceOrder */}
        {bookingCreation?.selected_option && !isOrderOpen && (
            <div
            onClick={openMenu}
            className="bottom-5 right-5 p-4 bg-white text-black  fixed rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:scale-95 hover:text-blue-600 transition z-30">
                <p className="font-bold tracking-wide text-2xl"><FaBasketShopping /></p>
            </div>
        )}
        </div>
    );
}