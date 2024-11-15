"use client";
import { ProductModel } from "@/models/product";
import Image from "next/image";
import { useState } from "react";
import Card from "../card/card";
import { useOrderContext } from "@/provider/orderProvider";
import { useEventContext } from "@/provider/eventProvider";
import AccessoryCard from "../card/accessoryCard";
import { useEffect } from "react";
import SelectedProductCard from "../card/selectedProductCard";

type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function FormDialog({ isOpen, onClose }: DialogProps) {
    const { selectedPackage, selectedProduct, addAccessory, selectedAccessories, removeAccessory, updateAccessoryQuantity } = useOrderContext();
    const { accessories } = useEventContext();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    //log accessories
    useEffect(() => {
        console.log(selectedAccessories);
    }, [selectedAccessories]);
    
    
    if (!isOpen || !selectedProduct || !selectedPackage) return null;

    // Add this function to handle quantity changes
    const handleQuantityChange = (accessoryId: string, newQuantity: number) => {
        if (newQuantity === 0) {
            removeAccessory(accessoryId);
        }
        // If you need to track quantities, you'll need to modify your OrderContext
        // to handle quantity updates
    };

    return (
        <div className="fixed inset-0 bg-[#1e1e1e] bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#151515] p-6 rounded-lg max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-grow flex-row items-center gap-2">
                        <h2 className="text-xl font-semibold">Kurv</h2>
                        <span className="text-gray-500">•</span>
                        <p className="text-gray-400">{selectedPackage.title}</p>
                    </div>  
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-300">
                        ✕
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Product Details */}
                    <div className="flex flex-col h-full relative">
                        {/* Selected Package */}
                        <div className="flex flex-col gap-4">
                            {/* Selected Product */}
                            {selectedProduct && (
                                <SelectedProductCard
                                    product={selectedProduct}
                                    quantity={1}
                                    onQuantityChange={(quantity) => updateAccessoryQuantity(selectedProduct.id, quantity)}
                                />
                            )}
        
                                {/* Selected Accessories */}
                            {selectedAccessories.length > 0 && (
                                <div>
                                    <div>
                                        {selectedAccessories.map((accessory) => (
                                            <AccessoryCard
                                                key={accessory.id}
                                                item={accessory}
                                                mode="quantity"
                                                quantity={accessory.quantity}
                                                onQuantityChange={(quantity) => updateAccessoryQuantity(accessory.id, quantity)}
                                                onRemove={() => removeAccessory(accessory.id)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* Add Accessories Footer */}
                        {accessories.length > 0 && 
                         accessories.some(acc => !selectedAccessories.some(selected => selected.id === acc.id)) && (
                            <div className="mt-auto pt-6">
                                <h3 className="text-lg font-semibold mb-3">Tilføj tilbehør</h3>
                                <div className="space-y-3">
                                    {accessories
                                        .filter(acc => !selectedAccessories.some(selected => selected.id === acc.id))
                                        .map((accessory) => (
                                            <AccessoryCard
                                                key={accessory.id}
                                                item={accessory}
                                                mode="add"
                                                onAdd={() => addAccessory(accessory)}
                                            />
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
    

                    {/* Right Column - Order Form */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Information</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg p-2.5"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Gentag email</label>
                                <input
                                    type="tel"
                                    className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg p-2.5"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                            Betal
                        </button>
                        
                        <p className="text-sm text-gray-400 text-center">
                           Ved at du betaler, accepterer du vores vilkår og betingelser
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 