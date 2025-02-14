"use client"
import Image from "next/image"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { ProductModel } from "@/internal/models/product"
import { useOrderProvider } from "@/provider/order-provider"

interface ProductCardProps {
  product: ProductModel
  onClick?: () => void
  price?: number
  isDelete?: boolean
}

export default function ProductCardComponent({ product, onClick, price, isDelete }: ProductCardProps) {
  // Provider
  const { bookingCreation } = useOrderProvider()
  //Variables
  const isSelected = bookingCreation?.selected_option?.product.ID === product.ID
  const quantity = bookingCreation?.selected_option?.quantity
  //Settings for buttons state
  function getButtonProps(isSelected: boolean, isDelete: boolean) {
    switch (true) {
      case isDelete:
        return { 
          color: "bg-red-600 text-white hover:bg-red-700",
          text: "Fjern fra kurv" 
        };
      case isSelected:
        return { 
          color: "bg-blue-600 text-white", 
          text: "Valgt" 
        };
      default:
        return { 
          color: "bg-white text-[#151515] hover:bg-white/90", 
          text: "Tilføj til kurv" 
        };
    }
  }
  
  const { color, text } = getButtonProps(isSelected, !!isDelete);
  return (
    <div
      className={`bg-[#151515] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-white/10 flex flex-col w-full h-full min-h-[400px] cursor-pointer hover:scale-95
        ${isSelected ? "border-2 border-solid scale-95" : ""}`}
      onClick={!isDelete ? onClick : undefined}
    >
      <div className="relative w-full aspect-square overflow-hidden group flex-shrink-0 max-h-[220px]">
        <Image
          src={product.image_url || "/placeholder.svg?height=256&width=256"}
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className="group-hover:scale-105 transition ease-in-out p-4"
        />
      </div>
      <div className="w-4/5 bg-white/20 h-[1px] mx-auto my-6" />
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div>
          <h2 className="font-semibold text-lg mb-2 text-white line-clamp-1">{product.title}</h2>
          <p className="text-gray-300 text-sm mb-4 line-clamp-1 text-ellipsis">{product.short_description}</p>
        </div>
        <div>

          <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-white">{price}</span>
              {isSelected && (
                <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                  {/* Decrease quantity button */}
                  <button className="p-2 hover:bg-white/10 transition-colors duration-200">
                    <Minus size={16} className="text-white" />
                  </button>
                  
                  {/* Quantity Display */}
                  <span className="px-2 py-1 text-center w-12 font-medium text-white">{quantity}</span>
                  
                  {/* Increase quantity button */}
                  <button className="p-2 hover:bg-white/10 transition-colors duration-200">
                    <Plus size={16} className="text-white" />
                  </button>
                </div>
              )}
            </div>

          <div className="flex gap-2">
            <button className={`flex-1 font-medium py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out flex items-center justify-center ${color}`}>
              {isDelete ? text : <>
                <ShoppingCart size={18} className="mr-2" />
                {text}
              </>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
