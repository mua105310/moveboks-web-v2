import { ProductModel } from "@/models/product";
import Image from "next/image";

interface SelectedProductCardProps {
    product: ProductModel;
    quantity: number;
    onQuantityChange: (quantity: number) => void;
    minQuantity?: number;
    maxQuantity?: number;
}

export default function SelectedProductCard({ 
    product, 
    quantity,
    onQuantityChange,
    minQuantity = 1,
    maxQuantity = 99,
}: SelectedProductCardProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 p-3 sm:p-4 bg-[#1e1e1e] rounded-lg w-full">
            <div className="flex items-center gap-3 sm:gap-4 w-full">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        sizes="(max-width: 640px) 64px, 80px"
                        className="object-contain rounded-md"
                        priority
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-base sm:text-lg truncate">{product.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2">{product.shortDescription}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-3 sm:mt-0">
                <button 
                    onClick={() => onQuantityChange(Math.max(minQuantity, quantity - 1))}
                    className="px-3 py-2 sm:px-2 sm:py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    disabled={quantity <= minQuantity}
                >
                    -
                </button>
                <span className="w-10 sm:w-8 text-center">{quantity}</span>
                <button 
                    onClick={() => onQuantityChange(Math.min(maxQuantity, quantity + 1))}
                    className="px-3 py-2 sm:px-2 sm:py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    disabled={quantity >= maxQuantity}
                >
                    +
                </button>
            </div>
        </div>
    );
} 