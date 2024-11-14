"use client"
import { SectionModel } from "@/models/section";
import Cardd from "../card/card";
import { EventModel } from "@/models/event";
import { PackageModel } from "@/models/package";
import { getPackages, getProducts } from "@/controller/eventController";
import { useEffect, useState } from "react";
import { Dialog } from 'primereact/dialog';
import { ProductModel } from "@/models/product";
import { AccessoryModel } from "@/models/accessory";
import { Card } from 'primereact/card';
import Image from 'next/image';
import { Carousel } from 'primereact/carousel';
        
type SectionProps = {
    packages: string[],
    category: string,
}

export default function Section({packages, category}: SectionProps) {
    const [visible, setVisible] = useState(false);
    const [pack, setPack] = useState<PackageModel[]>([]);
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [accessories, setAccessories] = useState<AccessoryModel[]>([]);



    useEffect(() => {
        const fetchPackages = async () => {
            setPack(await getPackages(packages));
        };
        fetchPackages();
    }, []);

    useEffect(() => {
        console.log("Packages", pack);
    }, [pack]);

    const toggleDialog = (item: PackageModel) => {
        const fetchProducts = async () => {
            if (!item.options) return;
            // Get all products from options
            const productIds = item.options.map(option => option.productId);
            const fetchedProducts = await getProducts(productIds);
            setProducts(fetchedProducts);

            // // Get all accessories from options
            // const accessoryIds = item.options
            //     .flatMap(option => option.accessoryIds || []);
            // if (accessoryIds.length > 0) {
            //     const fetchedAccessories = await getProducts(accessoryIds);
            //     setAccessories(fetchedAccessories);
            // }
        };

        fetchProducts();
        setVisible(true);
    };

    useEffect(() => {
        console.log("Products", products);
    }, [products]);

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
                        onClick={() => toggleDialog(item)}
                    />
                ))}
            </div>
            <Dialog 
                header="Valgt pakke" 
                visible={visible} 
                draggable={false} 
                style={{ width: 'min(90vw, 600px)' }}
                onHide={() => {if (!visible) return; setVisible(false); }}
                className="dark-dialog"
                contentClassName="bg-[#151515]"
                headerClassName="bg-[#151515] text-white border-none"
            >
                <div className="flex flex-col gap-2">
                    {products.map((item: ProductModel) => (
                        <Card 
                            key={item.id}
                            className="shadow-lg border-none bg-[#1E1E1E] text-white p-2"
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                                <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <h2 className="text-base font-semibold">{item.title}</h2>
                                    <p className="text-gray-400 text-sm">{item.shortDescription}</p>
                                    <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm font-semibold hover:bg-blue-600 transition-colors w-fit mt-2">
                                        Tilføj til ordre
                                    </button>
                                </div>
                                <div className="relative h-[100px] w-full sm:w-[100px] flex-shrink-0 sm:ml-4">
                                    <Image 
                                        src={item.images[0]} 
                                        alt={item.title} 
                                        fill
                                        className="object-contain rounded-lg"
                                        priority
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Dialog>
        </div>
    )   
}