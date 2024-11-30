"use client";

import LoadingProductCard from "@/components/card/productCard/loadingProductCard";
import ProductCard from "@/components/card/productCard/productCard";
import { getProducts } from "@/controller/eventController";
import { ProductConstraintModel } from "@/models/package";
import { ProductModel } from "@/models/product";
import { useOrderContext } from "@/provider/orderProvider";
import { use, useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductSelector() {
    const {order, setOrder} = useOrderContext();
    const {setIsDialogOpen,setIsDialogVisible} = useOrderContext();
    const [isLoading, setIsLoading] = useState(false);

    // handle product click
    const handleProductClick = (productConstraint: ProductConstraintModel) => {
        if (!order) return;
        
        setOrder({
            ...order,
            selectedOptions: [
                { 
                    product: productConstraint.product, 
                    quantity: 1, 
                    constraint:productConstraint,
                    accessories: productConstraint.accessories?.map(accessory => ({
                        ...accessory,
                        constraint: accessory,
                        product: accessory.product,
                        quantity: 0
                    }))
                }
            ]
        });
    
        // Open the dialog
        setIsDialogVisible(true);
        setIsDialogOpen(true);
    };

    return (
        <div>
            {/* Desktop */}
            <div className="hidden lg:block">
                <div className="flex flex-row gap-10">
                    {isLoading ? (
                        <>
                        <LoadingProductCard/>
                        <LoadingProductCard/>
                        <LoadingProductCard/>
                        </>
                    ) : (
                        order?.package.options?.map((productConstraint,index) => (
                            <ProductCard
                                key={productConstraint.product.id}
                                product={productConstraint.product} 
                                onClick={() => handleProductClick(productConstraint)} 
                            />
                        ))
                    )}
                    
                </div>
            </div>
            {/* Mobile */}
            <div className="lg:hidden">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1.2}
                    spaceBetween={10}
                    slidesOffsetBefore={40}
                    slidesOffsetAfter={40}
                    grabCursor
                >
                    {order?.package.options?.map((productConstraint) => (
                        <SwiperSlide key={productConstraint.product.id}>
                            <ProductCard
                                key={productConstraint.product.id}
                                product={productConstraint.product} 
                                onClick={() => handleProductClick(productConstraint)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}