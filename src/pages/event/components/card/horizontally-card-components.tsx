"use client"

import type React from "react"
import Image from "next/image"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import type { ProductModel } from "@/internal/models/product"
import { useOrderProvider } from "@/provider/order-provider"
import  useOrderHook  from "../../hooks/use-order-hook"

interface ProductAccessoryCardProps {
  product: ProductModel
  onClick?: () => void
  price?: number
  isProduct?: boolean
}

export default function HorizontallyCardComponent({
  product,
  onClick,
  price,
  isProduct,
}: ProductAccessoryCardProps) {
  const { bookingCreation } = useOrderProvider()
  const { setAccessoryQuantity, removeAccessory, setProductQuantity, removeProduct } = useOrderHook()

  const isSelected = isProduct
    ? bookingCreation?.selected_option?.product?.ID === product.ID
    : !!bookingCreation?.selected_option?.accessories?.find((acc) => acc.product?.ID === product.ID)

  const quantity = isProduct
    ? bookingCreation?.selected_option?.quantity || 0
    : bookingCreation?.selected_option?.accessories?.find((acc) => acc.product?.ID === product.ID)?.quantity || 0

  const totalPrice = price! * (quantity || 1)

  function getButtonProps(isSelected: boolean) {
    return isSelected
      ? {
          color: "bg-blue-600 text-white",
          text: "Valgt",
        }
      : {
          color: "bg-white text-[#151515] hover:bg-white/90",
          text: isProduct ? "Tilføj til kurv" : "Tilføj",
        }
  }

  function handleIncreaseQuantity(event: React.MouseEvent) {
    event.stopPropagation()
    isProduct ? setProductQuantity(quantity + 1) : setAccessoryQuantity(product, quantity + 1)
  }

  function handleDecreaseQuantity(event: React.MouseEvent) {
    event.stopPropagation()
    isProduct ? setProductQuantity(quantity - 1) : setAccessoryQuantity(product, quantity - 1)
  }

  function handleRemove(event: React.MouseEvent) {
    event.stopPropagation()
    isProduct ? removeProduct() : removeAccessory(product)
  }

  const { color, text } = getButtonProps(isSelected)

  return (
    <div
      className={`bg-[#151515] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-white/10 flex w-full h-24 cursor-pointer hover:scale-98
        ${isSelected ? "scale-98" : ""}`}
      style={{ border: isSelected ? "solid var(--primary)" : undefined }}
      onClick={onClick}
    >
      <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center p-2">
        <Image
          src={product.image_url || "/placeholder.svg?height=96&width=96"}
          alt={product.title}
          width={96}
          height={96}
          className="object-contain max-w-full max-h-full group-hover:scale-105 transition ease-in-out"
        />
      </div>
      <div className="flex flex-col justify-between p-2 flex-grow">
        <div>
          <h2 className="font-semibold text-sm text-white line-clamp-1">{product.title}</h2>
          <p className="text-gray-300 text-xs line-clamp-1 text-ellipsis">{product.short_description}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-white">{isSelected ? totalPrice : price},-</span>
          {isSelected ? (
            <div className="flex items-center space-x-5">
              <div className="flex items-center border border-white/20 rounded-md overflow-hidden p-0.5 ">
                <button
                  className="p-1 hover:bg-white/10 transition-colors duration-200"
                  onClick={handleDecreaseQuantity}
                >
                  <Minus size={12} className="text-white" />
                </button>
                <span className="px-2 text-center w-8 font-medium text-white text-sm">{quantity}</span>
                <button
                  className="p-1 hover:bg-white/10 transition-colors duration-200"
                  onClick={handleIncreaseQuantity}
                >
                  <Plus size={16} className="text-white" />
                </button>
              </div>
              <button
                className="bg-red-600 text-white hover:bg-red-700 p-1 cursor-pointer rounded-md transition-colors duration-200"
                onClick={handleRemove}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ) : (
            <button
              className={`font-medium py-1 px-2 rounded-md transition-colors duration-200 ease-in-out flex items-center justify-center text-sm ${color}`}
              onClick={onClick}
            >
              <ShoppingCart size={14} className="mr-1" />
              {text}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}