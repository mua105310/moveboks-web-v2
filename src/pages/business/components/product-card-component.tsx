"use client";
import { ProductModel } from '@/internal/models/product';
import { useOrder } from '@/provider/provider-business-order';

interface ProductCardComponentProps {
    product: ProductModel;
    onClick: () => void;
}

export default function ProductCardComponent({ product, onClick }: ProductCardComponentProps) {
    if (!product) {
        return;
    }
    const { order, setOrder } = useOrder();

    return (
        <div 
        className={`p-5
        relative rounded-lg h-auto overflow-hidden cursor-pointer flex flex-col justify-between items-center hover:scale-95 transition-all duration-500 ease-in-out"
        ${product.ID === order?.selected_options?.product.ID ? "border-2 border-blue-500 " : "border-2 border-white/30"}
        `}>
          {/* Title at the top */}
          <h2 className="text-lg font-bold text-white mb-4">{product.title}</h2>
    
          {/* Image in the center */}
          <div className="flex-1 w-full flex justify-center items-center">
            <img
              src={product.image_url}
              alt={product.title}
              className="object-cover h-80 rounded-lg"
            />
          </div>
    
          {/* Button at the bottom */}
          <button
          onClick={onClick} 
          className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all duration-500 ease-in-out uppercase font-bold">
            {product.ID === order?.selected_options?.product.ID ? "Selected" : "BOOK"}
          </button>
        </div>
      );
}