"use client"
import Image from "next/image"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import type { ProductModel } from "@/internal/models/product"
import { useOrderProvider } from "@/provider/order-provider"
import { use, useEffect } from "react"

interface ProductCardProps {
  product: ProductModel
  onClick?: () => void
  price?: number
  isDelete?: boolean
}

export default function ProductCard({ product, onClick, price, isDelete }: ProductCardProps) {
  const { bookingCreation, setBookingCreation } = useOrderProvider()
  const isChosenMainProduct = bookingCreation?.selected_option?.product?.ID === product.ID
  const isChosenAccessory = bookingCreation?.selected_option?.accessories?.some((acc) => acc.product.ID === product.ID) ?? false
  const isActive = isChosenMainProduct || isChosenAccessory
  const chosenAccessory = bookingCreation?.selected_option?.accessories?.find((acc) => acc.product.ID === product.ID)

  function handleQuantityChange(value: number) {
    if (!bookingCreation?.selected_option) return

    if (isChosenMainProduct) {
      const newQuantity = Math.max(1, bookingCreation.selected_option.quantity + value)
      if (newQuantity > 5) { return}

      setBookingCreation({
        ...bookingCreation,
        selected_option: {
          ...bookingCreation.selected_option,
          quantity: newQuantity,
        },
      })
    } else if (isChosenAccessory && chosenAccessory) {
      const newQuantity = Math.max(0, chosenAccessory.quantity + value)
      if (newQuantity > (chosenAccessory.constraint.allowed_quantity || 0)) {
        return
      }

      const updatedAccessories = bookingCreation.selected_option.accessories
        ?.map((acc) => (acc.product.ID === product.ID ? { ...acc, quantity: newQuantity } : acc))
        .filter((acc) => acc.quantity > 0)

      setBookingCreation({
        ...bookingCreation,
        selected_option: {
          ...bookingCreation.selected_option,
          accessories: updatedAccessories,
        },
      })
    }
  }

  const quantity = isChosenMainProduct ? bookingCreation?.selected_option?.quantity : chosenAccessory?.quantity
  const totalPrice = price && quantity ? price * quantity : price


  useEffect(() => {
    console.log("ProductCard mounted", bookingCreation)
  }, [bookingCreation])
  return (
    <div
      className={`bg-[#151515] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-white/10 flex flex-col w-full h-full min-h-[400px] cursor-pointer ${isActive && "scale-95 border-blue-500"} hover:scale-95 border`}
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
            <span className="text-2xl font-bold text-white">{totalPrice}</span>
            {isActive && (
              <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                <button
                  className="p-2 hover:bg-white/10 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleQuantityChange(-1)
                  }}
                >
                  <Minus size={16} className="text-white" />
                </button>
                <span className="px-2 py-1 text-center w-12 font-medium text-white">{quantity}</span>
                <button
                  className="p-2 hover:bg-white/10 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleQuantityChange(1)
                  }}
                >
                  <Plus size={16} className="text-white" />
                </button>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              className={`flex-1 font-medium py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out flex items-center justify-center ${
                isDelete
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : isActive
                    ? "bg-blue-600 text-white"
                    : "bg-white text-[#151515] hover:bg-white/90"
              }`}
              onClick={isDelete ? onClick : undefined}
            >
              {isDelete ? (
                "Fjern fra kurv"
              ) : isActive ? (
                "Valgt"
              ) : (
                <>
                  <ShoppingCart size={18} className="mr-2" />
                  Tilføj til kurv
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}