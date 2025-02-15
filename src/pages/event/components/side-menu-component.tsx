"use client"

import { useOrderProvider } from "@/provider/order-provider"
import { useOrderHook } from "../hooks/use-order-hook"
import SectionComponent from "./section-component"
import PackageCardComponent from "./package-card-component"
import ProductCardComponent from "./product-card-component"
import { getMinimumPrice } from "@/utils/pricing/price.calculating"

export default function SideMenuComponent() {
  const { bookingCreation, setBookingCreation, isOrderOpen, setIsOrderOpen } = useOrderProvider()
  const { toggleOrder, removeProduct, setAccessory } = useOrderHook()

  return (
    <div
      className={`fixed bg-[#151515] h-screen w-full lg:w-1/2 sm:w-64 top-0 right-0 transform transition-transform duration-300 ease-in-out z-40 ${
        isOrderOpen ? "translate-x-0" : "translate-x-full"
      } flex flex-col`}
      style={{ zIndex: 9999 }}
    >
      {/* Header */}
      <div className="flex flex-row justify-between p-5 lg:p-12 bg-white/10">
        <p className="text-2xl">Kurv</p>
        <button className="text-2xl cursor-pointer" onClick={toggleOrder}>
          X
        </button>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <SectionComponent title="Valgt pakke">
          {bookingCreation?.package && <PackageCardComponent item={bookingCreation.package} />}
        </SectionComponent>
        <SectionComponent title="Valgt Produkt">
          {bookingCreation?.selected_option?.product && (
            <ProductCardComponent
              product={bookingCreation.selected_option.product}
              isDelete={true}
              price={getMinimumPrice(bookingCreation.selected_option.constraint!)}
              onClick={removeProduct}
            />
          )}
        </SectionComponent>
        <SectionComponent title="Tilbehør">
          {bookingCreation?.selected_option?.constraint?.accessories?.map((accessory) => (
            <ProductCardComponent
                product={accessory.product} 
                key={accessory.product.ID} 
                isAccessory={true}
                price={getMinimumPrice(accessory)}
                onClick={() => setAccessory(accessory)}
            />
            ))}
        </SectionComponent>
      </div>
    </div>
  )
}