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
import FormDialog from "@/components/dialog/formDialog";

type SectionProps = {
    packages: string[];
    category: string;
}

export default function Section({packages, category}: SectionProps) {
    const [pack, setPack] = useState<PackageModel[]>([]);
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogProduct, setDialogProduct] = useState<ProductModel | null>(null);
    
    const { setIsVisible } = useEventContext();
    const { order, updateOrder } = useOrderContext();
    const { isLoading: isCardLoading, setIsLoading: setIsCardLoading } = useLoading();

    useEffect(() => {
        const fetchPackages = async () => {
            setIsCardLoading(true);
            try {
                setPack(await getPackages(packages));
            } finally {
                setIsCardLoading(false);
            }
        };
        fetchPackages();
    }, [packages, setIsCardLoading]);

    useEffect(() => {
        if (isDialogOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isDialogOpen]);

    const handlePackageClick = useCallback(async (item: PackageModel) => {
        if (!item.options) return;
        
        setIsVisible(false);
        setIsCardLoading(true);
        
        try {
            const productIds = item.options.map(option => option.productId);
            const fetchedProducts = await getProducts(productIds);
            setProducts(fetchedProducts);
            
            updateOrder({ 
                package: item.id === order.package?.id ? null : item,
                product: null 
            });
            
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
            setIsCardLoading(false);
        }
    }, [setIsCardLoading, order.package, updateOrder]);

    const handleProductSelect = async (product: ProductModel) => {
        setIsVisible(false);
        setIsCardLoading(true);
        
        try {
            setDialogProduct(product);
            setIsDialogOpen(true);
        } finally {
            setIsCardLoading(false);
            setIsVisible(true);
        }
    };

    const productsSection = useMemo(() => 
        order.package && (
            <ProductsSection
                products={products}
                packageTitle={order.package.title}
                onProductSelect={handleProductSelect}
            />
        ), [order.package, products, handleProductSelect]
    );

    return (
        <div className="p-10 flex flex-col gap-10">
            <p className="uppercase text-xl font-semibold">
                {category}
            </p>
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                {isCardLoading ? (
                    Array(3).fill(0).map((_, index) => (
                        <LoadingCard key={index} />
                    ))
                ) : (
                    pack.map((item) => (
                        <Card
                            key={item.id}
                            item={item}
                            onClick={() => handlePackageClick(item)}
                            isSelected={order.package?.id === item.id}
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
                    {isCardLoading ? (
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
                                    onClick={() => handlePackageClick(item)}
                                    isSelected={order.package?.id === item.id}
                                />
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
            {productsSection}
            
            <FormDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            />
        </div>
    );
}