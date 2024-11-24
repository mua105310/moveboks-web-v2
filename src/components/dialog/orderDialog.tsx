'use client';

import { useOrderContext } from "@/provider/orderProvider";
import { useState, useEffect } from "react";
import { BsCart, BsX } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { preventScroll } from "@/controller/appController";
import ProductCard from "../card/productCard/productCard";
import Card from "../card/accessoryCard/accessoryCard";
import PackageCard from "../card/packageCard/packageCard";
import AccessorySelector from "@/template/event/components/accessorySelector";
import { getProductWithAccessories } from "@/controller/eventController";
import { AccessoryModel } from "@/models/accessory";
import AccessoryCard from "../card/accessoryCard/accessoryCard";

export default function OrderDialog() {
    const { isDialogVisible, setIsDialogVisible } = useOrderContext();
    const { isDialogOpen, setIsDialogOpen } = useOrderContext();
    const { order } = useOrderContext();
    const [accessories, setAccessories] = useState<AccessoryModel[]>();

    const toggleDialog = () => {
        setIsDialogOpen(!isDialogOpen);
    }

    useEffect(() => {
        preventScroll(isDialogOpen);
    }, [isDialogOpen]);

    useEffect(() => {
        if (!order.product[0]?.product.id) return;

        const fetchAccessories = async () => {
            const accessories  = await getProductWithAccessories(
                order.product[0]?.product.id,
                order.package.options
            )
            setAccessories(accessories.accessories);
        }
        fetchAccessories();
    
    }, [order.product[0]?.product.id]);

    return (
        <>
        {/* Layer */}
        <div className={`fixed top-0 h-screen bg-black/50 z-50 transition-all duration-300 ${isDialogOpen ? 'lg:w-full opacity-100' : 'w-0 opacity-0'} hidden lg:block`} 
             style={{zIndex: 10000, visibility: isDialogVisible ? 'visible' : 'hidden'}}>
        </div>
        
        {/* Cart Icon - Only visible on desktop */}
        <div className={`fixed hidden lg:flex lg:bottom-10 lg:right-10 w-16 h-16 bg-white rounded-full justify-center items-center z-20 cursor-pointer hover:scale-105 transition-all duration-300`}
             style={{visibility: isDialogVisible ? 'visible' : 'hidden'}}
             onClick={toggleDialog}>
            <BsCart size={24} className="text-black"/>
        </div>

        {/* Desktop Dialog */}
        <div className={`fixed right-0 top-0 bg-[var(--background)] w-[500px] h-full transition-all duration-300 hidden lg:block p-10 ${isDialogOpen ? 'translate-x-0 border-l border-white opacity-100' : 'translate-x-full border-transparent opacity-0'}`}
             style={{zIndex: 10000, visibility: isDialogVisible ? 'visible' : 'hidden'}}>
            <div className="-left-5 top-1/2 -translate-y-1/2 absolute w-10 h-10 rounded-full bg-white flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300">
                <BsX size={24} className="text-black" onClick={toggleDialog}/>
            </div>
            <div className="border-b border-white/20 flex items-center pb-3">
                <p className="text-2xl font-bold">Kurv</p>
            </div>
            {/* Content */}
            <Content/>
            <Footer accessories={accessories}/>
        </div>

        {/* Mobile Dialog */}
        <div className={`fixed bottom-0 lg:hidden bg-[var(--background)] w-full flex flex-col transition-all duration-300 ${isDialogOpen ? 'z-[10000] h-dvh rounded-t-[0px] border-transparent' : 'z-40 h-[5vh] rounded-t-[50px] border-t border-white/40'} p-5`}
             style={{visibility: isDialogVisible ? 'visible' : 'hidden'}}>

                {isDialogOpen &&
                    <div className="w-full">
                        <div className="border-b border-white/20 flex items-center justify-between pb-3">
                            <p className="text-2xl font-bold">Kurv</p>
                            <AiOutlineClose 
                                size={24}
                                onClick={toggleDialog}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                }

                {!isDialogOpen &&
                    <div 
                    className={`absolute left-1/2 -translate-x-1/2 h-8 p-3 bg-white text-black -my-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg`} 
                    onClick={toggleDialog}>
                        <IoBagOutline size={14} className="text-black fz"/>
                    </div>
                }

                <Content/>
                <Footer accessories={accessories}/>
        </div>
        </>
    )
}

function Content() {
    const { order } = useOrderContext();

    return (
        <div className="flex flex-col gap-5 mt-5">
            <div>
                {order.package.id &&
                    <PackageCard pack={order.package} card={true}/>
                }
            </div>
            <div className="">
                {order.product.map((item, index) => (
                    <ProductCard key={index} product={item.product} card={true}/>
                ))}
            </div>
            <div>
                {order.product[0]?.accessories?.map((accessory, index) => (
                    <AccessoryCard key={index} accessory={accessory.accessory} type="quantity"/>
                ))}
            </div>
        </div>
    )
}

function Footer({ accessories }: { accessories?: AccessoryModel[] }) {
    const { order } = useOrderContext();
    return (
        <div className="absolute bottom-0 left-0 w-full bg-white/5 p-10">
            <div className="flex items-center justify-center">
                <AccessorySelector accessories={accessories || []} type="add"/>
            </div>
        </div>
    )
}