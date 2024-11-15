"use client"
import { PackageModel } from "@/models/package";
import { getPackages, getProducts } from "@/controller/eventController";
import { useEffect, useState } from "react";
import { ProductModel } from "@/models/product";
import Card from "../card/card";
import ProductsSection from "./productSection";

type SectionProps = {
    packages: string[];
    category: string;
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

    return (
        <div className="p-10 flex flex-col gap-10">
            <p className="uppercase text-xl font-semibold">
                {category}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {pack.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                        onClick={() => handlePackageClick(item)}
                    />
                ))}
            </div>

            {selectedPackage && (
                <ProductsSection
                    products={products}
                    packageTitle={selectedPackage.title}
                    isVisible={isVisible}
                />
            )}
        </div>
    );
}