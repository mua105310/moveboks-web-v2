"use client";

import ProductCard from "@/components/card/productCard/productCard";
import { getProducts } from "@/controller/eventController";
import { ProductModel } from "@/models/product";
import { useOrderContext } from "@/provider/orderProvider";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductSelector() {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const {order, setOrder} = useOrderContext();
    // fetch the packages products
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts(order.package.options?.map(option => option.productId) ?? []);
            setProducts(products);
        }
        fetchProducts();
    }, [order.package.id]);
    // handle product click
    const handleProductClick = (product: ProductModel) => {
        setOrder({
            ...order,
            product: [{ id: product.id, quantity: 1, accessories: [] }]
        });
    };

    return (
        <div>
            {/* Desktop */}
            <div className="hidden md:block">
                <div className="flex flex-row gap-10">
                    {products.map((product) => (
                        <ProductCard
                        key={product.id}
                        product={product} 
                        onClick={() => {handleProductClick(product)}} 
                        />
                    ))}
                </div>
            </div>
            {/* Mobile */}
            <div className="md:hidden">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1.2}
                    spaceBetween={10}
                    slidesOffsetBefore={40}
                    slidesOffsetAfter={40}
                    grabCursor
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard
                                product={product} 
                                onClick={() => handleProductClick(product)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}