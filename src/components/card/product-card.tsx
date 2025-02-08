"use client";
import Image from "next/image"
import { Minus, Plus, ShoppingCart, Eye } from "lucide-react"
import { ProductModel } from "@/internal/models/product"
import { useOrderProvider } from "@/provider/order-provider";

interface ProductCardProps {
  product: ProductModel
  onClick?: () => void
  price?: number
}

export default function ProductCard({ product, onClick, price }: ProductCardProps) {
  const { bookingCreation, setBookingCreation } = useOrderProvider();

  return (
    <div className="bg-[#151515] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out border border-white/10 flex flex-col w-full h-full min-h-[500px] cursor-pointer" onClick={onClick}>
      <div className="relative w-full aspect-square overflow-hidden group flex-shrink-0 max-h-[220px]">
        <Image
          src={product.image_url || "/placeholder.svg?height=256&width=256"}
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className="group-hover:scale-105 transition-transform duration-300 ease-in-out p-4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          {/* <button className="bg-white text-[#151515] px-4 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
            Quick View
          </button> */}
        </div>
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
            {bookingCreation?.selected_option && (
            <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
              <button className="p-2 hover:bg-white/10 transition-colors duration-200">
                <Minus size={16} className="text-white" />
              </button>
              <span className="px-4 py-2 text-center w-12 font-medium text-white">1</span>
              <button className="p-2 hover:bg-white/10 transition-colors duration-200">
                <Plus size={16} className="text-white" />
              </button>
            </div>
            )}
          </div>
          <div className="flex gap-2">
            {!bookingCreation?.selected_option && (
            <button className="flex-1 bg-white text-[#151515] hover:bg-white/90 font-medium py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out flex items-center justify-center">
              <ShoppingCart size={18} className="mr-2" />
              Tilføj til kurv
            </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
