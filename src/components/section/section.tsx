"use client"
import { SectionModel } from "@/models/section";
import Cardd from "../card/card";
import { EventModel } from "@/models/event";
import { PackageModel } from "@/models/package";
import { getPackages, getProducts } from "@/controller/eventController";
import { useEffect, useState } from "react";
import { ProductModel } from "@/models/product";
import { AccessoryModel } from "@/models/accessory";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Dialog } from "primereact/dialog";
        
type SectionProps = {
    packages: string[],
    category: string,
}

export default function Section({packages, category}: SectionProps) {
    const [pack, setPack] = useState<PackageModel[]>([]);
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [selectedPackage, setSelectedPackage] = useState<PackageModel | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchPackages = async () => {
            setPack(await getPackages(packages));
        };
        fetchPackages();
    }, []);


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

    const productTemplate = (item: ProductModel) => (
        <div 
            key={item.id}
            className={`
                shadow-lg hover:shadow-xl 
                transition-all duration-1000 ease-out 
                border border-white/20
                text-white
                transform h-[450px]
                overflow-hidden rounded-lg
                ${isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-10 opacity-0'
                }
            `}
        >
            <div className="flex flex-col h-full bg-[#151515] ">
                <div className="px-4 pt-2 flex-shrink-0 ">
                    <h2 className='text-[24px] font-bold' style={{textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'}}>{item.title}</h2>
                    <p className='text-[12px]'>{item.shortDescription}</p>
                </div>
                <div className="relative flex-grow w-40 mx-auto">
                    <Image 
                        src={item.images[0]} 
                        alt={item.title} 
                        fill
                        className="object-contain rounded-md p-2 hover:scale-105 transition-transform"
                        priority
                        draggable={false}
                    />
                </div>
                <div className="w-full p-4 flex justify-between items-center bg-[#1E1E1E]">
                    <span className="font-medium text-white text-[10px] sm:text-[12px] lg:text-[10px]">fra 3099 kr.</span>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-[12px]">
                        Tilføj til
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="p-10 flex flex-col gap-10">
            <p className="uppercase text-xl font-semibold">
                {category}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {pack.map((item) => (
                    <Cardd
                        key={item.id}
                        item={item}
                        onClick={() => handlePackageClick(item)}
                    />
                ))}
            </div>

            {/* Show products section when a package is selected */}
            {selectedPackage && (
                <div className="mt-8 products-section">
                    <h3 className="text-lg font-semibold mb-4 ">
                        Produkter i {selectedPackage.title}
                    </h3>
                    <div className="block md:hidden -mx-10"> {/* Added negative margin to counteract parent padding */}
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView={1.2}
                            spaceBetween={20}
                            className="!px-10" /* Added padding to maintain inner spacing */
                        >
                            {products.map((item) => (
                                <SwiperSlide key={item.id}>
                                    {productTemplate(item)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Desktop view */}
                        {products.map((item, index) => productTemplate(item))}
                    </div>
                </div>
            )}

        </div>
    )   
}