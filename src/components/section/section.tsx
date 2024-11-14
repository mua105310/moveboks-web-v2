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
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
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
        
        setTimeout(() => setIsVisible(true), 100);
    };

    const responsiveOptions = [
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (item: ProductModel) => (
        <Card 
            key={item.id}
            className={`
                shadow-lg hover:shadow-xl 
                transition-all duration-1000 ease-out 
                border-none card text-white
                transform 
                ${isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-10 opacity-0'
                }
            `}
        >
            <div className="flex flex-col gap-4">
                <div className="relative h-[200px] w-full">
                    <Image 
                        src={item.images[0]} 
                        alt={item.title} 
                        fill
                        className="object-contain rounded-md p-2 hover:scale-105 transition-transform"
                        priority
                        draggable={false}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <p className="text-gray-400 text-sm">{item.longDescription}</p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-fit mt-2">
                        Tilføj til
                    </button>
                </div>
            </div>
        </Card>
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
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">
                        Produkter i {selectedPackage.title}
                    </h3>
                    <div className="block md:hidden"> {/* Mobile view */}
                        <Carousel 
                            value={products} 
                            numVisible={1} 
                            numScroll={1}
                            showNavigators={false}
                            showIndicators={false}
                            responsiveOptions={responsiveOptions}
                            itemTemplate={productTemplate}
                            circular
                        />
                    </div>
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Desktop view */}
                        {products.map((item, index) => productTemplate(item))}
                    </div>
                </div>
            )}

        </div>
    )   
}