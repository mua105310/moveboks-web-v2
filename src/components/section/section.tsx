"use client"
import { PackageModel } from "@/models/package";
import { getPackages, getProducts } from "@/controller/eventController";
import { useEffect, useState } from "react";
import { ProductModel } from "@/models/product";
import Card from "../card/card";
import ProductsSection from "./productSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type SectionProps = {
    packages: string[];
    category: string;
}

export default function Section({packages, category}: SectionProps) {
    const [pack, setPack] = useState<PackageModel[]>([]);
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [selectedPackage, setSelectedPackage] = useState<PackageModel | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductModel | undefined>(undefined);

    useEffect(() => {
        const fetchPackages = async () => {
            setPack(await getPackages(packages));
        };
        fetchPackages();
        console.log(packages);
        console.log(pack);
    }, [packages]);

    const handlePackageClick = async (item: PackageModel) => {
        if (!item.options) return;
        
        setIsVisible(false);
        
        const productIds = item.options.map(option => option.productId);
        const fetchedProducts = await getProducts(productIds);
        setProducts(fetchedProducts);
        setSelectedPackage(item);
        
        setTimeout(() => {
            setIsVisible(true);
            const productsSection = document.querySelector('.products-section');
            if (productsSection) {
                const windowHeight = window.innerHeight;
                const elementTop = productsSection.getBoundingClientRect().top + window.pageYOffset;
                const elementCenter = elementTop - (windowHeight / 2) + (productsSection.clientHeight / 2);
                
                window.scrollTo({
                    top: elementCenter,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    const handleProductSelect = (product: ProductModel) => {
        setIsVisible(false);
        
        setTimeout(() => {
            setSelectedProduct(product);
            setIsVisible(true);
        }, 100);
    };

    return (
        <div className="p-10 flex flex-col gap-10">
            <p className="uppercase text-xl font-semibold">
                {category}
            </p>
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                {pack.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                        onClick={() => handlePackageClick(item)}
                        isSelected={selectedPackage?.id === item.id}
                    />
                ))}
            </div>
            <div className="block lg:hidden -mx-10">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    className="!px-10"
                >
                    {pack.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card
                                item={item}
                                onClick={() => handlePackageClick(item)}
                                isSelected={selectedPackage?.id === item.id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {selectedPackage && (
                <ProductsSection
                    products={products}
                    packageTitle={selectedPackage.title}
                    isVisible={isVisible}
                    selectedProduct={selectedProduct}
                    onProductSelect={handleProductSelect}
                />
            )}
        </div>
    );
}