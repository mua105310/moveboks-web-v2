"use client"
import { PackageModel } from "@/models/package";
import { getPackages, getProducts } from "@/controller/eventController";
import { useEffect, useState, useCallback, useMemo } from "react";
import { ProductModel } from "@/models/product";
import Card from "../card/card";
import ProductsSection from "./productSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEventContext } from "@/provider/eventProvider";
import { useOrderContext } from "@/provider/orderProvider";
import { useLoading } from "@/provider/loadingProvider";
import LoadingCard from "../card/loading-card";

type SectionProps = {
    packages: string[];
    category: string;
}

export default function Section({packages, category}: SectionProps) {
    const [pack, setPack] = useState<PackageModel[]>([]);
    const [products, setProducts] = useState<ProductModel[]>([]);
    
    const { 
        setIsVisible,
        isVisible
    } = useEventContext();

    const {
        selectedPackage,
        selectedProduct,
        setSelectedPackage,
        setSelectedProduct
    } = useOrderContext();

    const { isLoading, setIsLoading } = useLoading();

    useEffect(() => {
        const fetchPackages = async () => {
            setIsLoading(true);
            try {
                setPack(await getPackages(packages));
            } finally {
                setIsLoading(false);
            }
        };
        fetchPackages();
    }, [packages, setIsLoading]);

    useEffect(() => {
        console.log(pack);
    }, [pack]);

    const handlePackageClick = useCallback(async (item: PackageModel) => {
        if (!item.options) return;
        
        setIsVisible(false);
        setIsLoading(true);
        
        try {
            const productIds = item.options.map(option => option.productId);
            const fetchedProducts = await getProducts(productIds);
            setProducts(fetchedProducts);
            
            setSelectedPackage(item.id === selectedPackage?.id ? null : item);
            setSelectedProduct(null);
            
            setTimeout(() => {
                setIsVisible(true);
                const productsSection = document.querySelector('.products-section');
                if (productsSection) {
                    const { top } = productsSection.getBoundingClientRect();
                    const scrollTo = top + window.pageYOffset - (window.innerHeight / 2);
                    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
                }
            }, 100);
        } finally {
            setIsLoading(false);
        }
    }, [setIsLoading, setSelectedPackage, setSelectedProduct]);

    const handleProductSelect = (product: ProductModel) => {
        setIsVisible(false);
        
        setTimeout(() => {
            if (selectedProduct?.id === product.id) {
                setSelectedProduct(null);
            } else {
                setSelectedProduct(product);
            }
            setIsVisible(true);
        }, 100);
    };

    const productsSection = useMemo(() => 
        selectedPackage && (
            <ProductsSection
                products={products}
                packageTitle={selectedPackage.title}
            />
        ), [selectedPackage, products]
    );

    return (
        <div className="p-10 flex flex-col gap-10">
            <p className="uppercase text-xl font-semibold">
                {category}
            </p>
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                {isLoading ? (
                    Array(3).fill(0).map((_, index) => (
                        <LoadingCard key={index} />
                    ))
                ) : (
                    pack.map((item) => (
                        <Card
                            key={item.id}
                            item={item}
                            onClick={() => handlePackageClick(item)}
                            isSelected={selectedPackage?.id === item.id}
                        />
                    ))
                )}
            </div>
            <div className="block lg:hidden -mx-10">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    className="!px-10"
                >
                    {isLoading ? (
                        Array(3).fill(0).map((_, index) => (
                            <SwiperSlide key={index}>
                                <LoadingCard />
                            </SwiperSlide>
                        ))
                    ) : (
                        pack.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Card
                                    item={item}
                                    onClick={() => handleProductSelect(item)}
                                    isSelected={selectedPackage?.id === item.id}
                                />
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
            {productsSection}
        </div>
    );
}