"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import type { ProductModel } from "@/internal/models/product"
import { useOrderProvider } from "@/provider/order-provider"

interface ProductCardProps {
  product: ProductModel
  onClick?: () => void
  price?: number
  isDelete?: boolean
}

export default function ProductCard({ product, onClick, price, isDelete }: ProductCardProps) {
  const { bookingCreation, setBookingCreation } = useOrderProvider()
  
  function handleQuantityChange(value: number) {
    if (!bookingCreation?.selected_option) return
 
    if (bookingCreation.selected_option.quantity + value > 5) {
      alert("Max 5 stk. pr. booking")
      return
    }

    setBookingCreation({
      ...bookingCreation,
      selected_option: {
        ...bookingCreation.selected_option,
        quantity: Math.max(1, bookingCreation.selected_option.quantity + value),
      },
    })
  }

  return (
    <div
      className={`bg-[#151515] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-white/10 flex flex-col w-full h-full min-h-[500px] cursor-pointer ${bookingCreation?.selected_option?.product.ID === product.ID && "scale-95 border-blue-500"} hover:scale-95 border`}
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
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
          {/* Quick View button removed as per original code */}
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
          <span className="text-2xl font-bold text-white">
            {bookingCreation?.selected_option?.product.ID === product.ID
              ? price && bookingCreation?.selected_option?.quantity && price * bookingCreation.selected_option.quantity
              : price}
          </span>
            {bookingCreation?.selected_option?.product.ID === product.ID && (
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
                <span className="px-2 py-1 text-center w-12 font-medium text-white">
                  {bookingCreation.selected_option.quantity}
                </span>
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
                : bookingCreation?.selected_option?.product.ID === product.ID
                ? "bg-blue-600 text-white" 
                : "bg-white text-[#151515] hover:bg-white/90" 
            }`}
            onClick={isDelete ? onClick : undefined}
          >
            {isDelete ? (
              "Fjern fra kurv"
            ) : bookingCreation?.selected_option?.product.ID === product.ID ? (
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