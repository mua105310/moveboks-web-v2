'use client'

import PackageCard from "@/components/card/packageCard/packageCard";
import { getPackages } from "@/controller/eventController";
import { PackageModel } from "@/models/package";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useOrderContext } from "@/provider/orderProvider";
import LoadingPackageCard from "@/components/card/packageCard/loadingPackageCard";

export default function PackageSelector({packagesIds}: {packagesIds: string[]}) {

    const [packages, setPackages] = useState<PackageModel[]>([]);
    const {order, setOrder} = useOrderContext();
    const [isLoading, setIsLoading] = useState(true);
    // fetch packages
    useEffect(() => {
        const fetchPackages = async () => {
            setIsLoading(true);
            const packages = await getPackages(packagesIds);
            setPackages(packages);
            setIsLoading(false);
        };
        fetchPackages();
    }, [packagesIds]);
    // handle package click
    const handleClick = (pack: PackageModel) => {
        setOrder({...order,eventId: pack.id, package: pack});
            // Scroll to the 'products' section
            document.getElementById('products')?.scrollIntoView();

            
    }

    return (
        <div>
            {/* Desktop */}
            <div className="hidden lg:block">
                <div className="flex flex-row gap-10">
                    {isLoading ? (
                        <>
                        <LoadingPackageCard />
                        <LoadingPackageCard />
                        <LoadingPackageCard />
                        </>
                    ) : (
                        packages.map((pack) => (
                            <PackageCard 
                        key={pack.id}
                        pack={pack} 
                        onClick={() => {handleClick(pack)}} 
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
                    {packages.map((pack) => (
                        <SwiperSlide key={pack.id}>
                            <PackageCard 
                                pack={pack} 
                                onClick={() => handleClick(pack)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}