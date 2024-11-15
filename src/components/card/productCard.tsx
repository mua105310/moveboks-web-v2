import Image from 'next/image';
import { ProductModel } from "@/models/product";

type ProductCardProps = {
    product: ProductModel;
    isVisible: boolean;
}

export default function ProductCard({ product, isVisible }: ProductCardProps) {
    return (
        <div 
            key={product.id}
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
            <div className="flex flex-col h-full bg-[#151515]">
                <div className="px-4 pt-2 flex-shrink-0">
                    <h2 className='text-[24px] font-bold' style={{textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'}}>{product.title}</h2>
                    <p className='text-[12px]'>{product.shortDescription}</p>
                </div>
                <div className="relative flex-grow w-40 mx-auto">
                    <Image 
                        src={product.images[0]} 
                        alt={product.title} 
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
}