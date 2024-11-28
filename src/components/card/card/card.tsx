import { AccesorySelection, ProductionSelection } from "@/models/internal/orderModel";
import { useOrderContext } from "@/provider/orderProvider";
import Image from "next/image";
import { use, useEffect } from "react";
import { RiArrowUpWideFill } from "react-icons/ri";

interface CardProps {
    item: ProductionSelection | AccesorySelection;
}

export default function Card({ item }: CardProps) {
    const { order, setOrder } = useOrderContext();

    if(!order) return

    if (!item) return null;


    const handleAdd = () => {
        console.log("item: ", item);
    
        // Extract the product id
        const id = item.product.id;
    
        // Map over `selectedOptions` to locate and update the accessory
        setOrder({
            ...order,
            selectedOptions: order.selectedOptions?.map((option) => {
                // Map over accessories to update the quantity
                const updatedAccessories = option.accessories?.map((accessory) => {
                    if (accessory.product.id === id) {
                        // Update quantity to 1 for the matched accessory
                        return { ...accessory, quantity: 1 };
                    }
                    return accessory;
                });
    
                // Return the updated option with the updated accessories
                return { ...option, accessories: updatedAccessories };
            }),
        });    
    };
    
    const handleQuantity = (item: ProductionSelection | AccesorySelection, type: "increment" | "decrement") => {
        const delta = type === "increment" ? 1 : -1;
    
        // Update order
        setOrder({
            ...order,
            selectedOptions: order.selectedOptions?.map((selectedOption) => {
                // Check if it's a ProductionSelection
                if (selectedOption.product.id === item.product.id) {
                    if ((item as ProductionSelection).accessories) {
                        // Update main product quantity
                        const { availableQuantity = 0, allowedQuantity = 0 } = selectedOption.constraint || {};
                        const maxQuantity = Math.min(availableQuantity, allowedQuantity);
                        const newQuantity = selectedOption.quantity + delta;
    
                        if (newQuantity > 0 && newQuantity <= maxQuantity) {
                            return { ...selectedOption, quantity: newQuantity };
                        }
                    }
                    return selectedOption; // If no update required, return as is
                }
    
                // Check if it's an AccessorySelection
                const updatedAccessories = selectedOption.accessories?.map((accessory) => {
                    if (accessory.product.id === item.product.id) {
                        const { availableQuantity = 0 } = accessory.constraint || {};
                        const newQuantity = accessory.quantity + delta;
    
                        if (newQuantity >= 0 && newQuantity <= availableQuantity) {
                            return { ...accessory, quantity: newQuantity };
                        }
                    }
                    return accessory; // Return the accessory unchanged
                });
    
                return { ...selectedOption, accessories: updatedAccessories };
            }),
        });
    };
    
    return (
        <div>
            <div className="flex flex-row border border-white/20 rounded-lg h-20 gap-2 overflow-hidden w-full">
                {/* Image */}
                <div className="flex items-center justify-center p-2 bg-white/5 rounded-l-md w-16">
                    {item.product.images?.[0] && (
                        <Image
                            src={item.product.images[0]}
                            alt={item.product.title || 'item image'}
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                    )}
                </div>
                {/* Title and subtitle */}
                <div className="flex-grow flex flex-col justify-center">
                    <p className="text-xs lg:text-md font-semibold uppercase line-clamp-1">{item.product.title}</p>
                    <p className="text-xs lg:text-xs line-clamp-2">{item.product.shortDescription}</p>
                </div>
                {/* Quantity and Actions */}
                {item.quantity > 0 && (
                <div className="flex items-center justify-center gap-2 px-4 ">
                    {/* Decrement Button */}
                    <div
                        className="w-8 px-2 py-1 text-sm bg-[var(--secondary)] text-white rounded hover:opacity-70 transition text-center cursor-pointer"
                        onClick={() => handleQuantity(item, "decrement")}
                    >
                        -
                    </div>
                    {/* Quantity */}
                    <span className="text-white font-semibold">{item.quantity}</span>
                    {/* Increment Button */}
                    <div
                        className="w-8 px-2 py-1 text-sm bg-[var(--secondary)] text-white rounded hover:opacity-70 transition text-center cursor-pointer"
                        onClick={() => handleQuantity(item, "increment")}
                    >
                        +
                        </div>  
                    </div>
                )}
                {/* Add and action */}
                {item.quantity == 0 &&(
                <div className="flex justify-center items-center p-2" onClick={() => handleAdd()}>
                    <div className="p-2 rounded-md cursor-pointer bg-[var(--secondary)] hover:opacity-70 transition-all duration-500 ease-in-out">
                        <p className="text-xs tracking-wide">Tilføj</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}