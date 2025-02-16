"use client"

import { useOrderProvider } from "@/provider/order-provider"
import useOrderHook from "../hooks/use-order-hook"
import SectionComponent from "./section/section-component"
import PackageCardComponent from "./card/package-card-component"
import { getMinimumPrice } from "@/utils/pricing/price.calculating"
import SwiperCarousel from "@/components/carousel/swiper-carousel"
import HorizontallyCardComponent from "./card/horizontally-card-components"
import FormComponent from "./form/form-component"

export default function SideMenuComponent() {
  const { bookingCreation, isOrderOpen } = useOrderProvider()
  const { toggleOrder, setAccessory } = useOrderHook()

  return (
    <div
      className={`fixed bg-black h-screen w-full xl:max-w-[600px] top-0 right-0 transform transition-transform duration-300 ease-in-out z-40 ${
        isOrderOpen ? "translate-y-0 xl:translate-x-0" : "xl:translate-x-full translate-y-full"
      } flex flex-col`}
      style={{ zIndex: 50 }}
    >
      {/* Header */}
      <div className="flex flex-row justify-between p-10 sm:p-8 lg:p-12 border-b-2 mb-5">
        <p className="text-2xl sm:text-3xl font-bold">Kurv</p>
        <button className="text-2xl sm:text-3xl cursor-pointer font-bold" onClick={toggleOrder}>
          X
        </button>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <SectionComponent title="Valgt pakke">
          <SwiperCarousel slidesPerView={1.2}>
            {bookingCreation?.package && <PackageCardComponent item={bookingCreation.package} />}
          </SwiperCarousel>
        </SectionComponent>
        <SectionComponent title="Valgt Produkt">
          {bookingCreation?.selected_option?.product && (
            <SwiperCarousel slidesPerView={1.2}>
              <HorizontallyCardComponent
                key={bookingCreation.selected_option.product.ID}
                product={bookingCreation.selected_option.product}
                isProduct={true}
                price={getMinimumPrice(bookingCreation.selected_option.constraint!)}
              />
            </SwiperCarousel>
          )}
        </SectionComponent>
        <SectionComponent title="Tilbehør">
          {bookingCreation?.selected_option?.constraint?.accessories?.map((accessory) => (
            <SwiperCarousel key={accessory.product.ID} slidesPerView={1.2}>
              <HorizontallyCardComponent
                product={accessory.product}
                price={getMinimumPrice(accessory)}
                onClick={() => setAccessory(accessory)}
              />
            </SwiperCarousel>
          ))}
        </SectionComponent>
        <SectionComponent title="Dine informationer">
          <FormComponent/>
        </SectionComponent>
      </div>
    </div>
  )
}