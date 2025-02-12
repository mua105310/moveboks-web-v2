"use client"
import { useOrderProvider } from "@/provider/order-provider"
import PackageCard from "../card/package-card"
import ProductCard from "../card/product-card"
import { getMinimumPrice } from "@/utils/pricing/price.calculating"
import type { AccessoryConstraints } from "@/internal/models/accessory"
import SwiperCarousel from "../carousel/swiper-carousel"
import type { AccesorySelection } from "@/internal/models/bookingcreation-model"

export default function PlaceOrder() {
  const { bookingCreation, setBookingCreation, isOrderOpen, setIsOrderOpen } = useOrderProvider()

  function handleDeleteProduct(): void {
    if (!bookingCreation) return
    setBookingCreation({
      ...bookingCreation,
      selected_option: undefined,
    })
    setIsOrderOpen(false)
  }

  function closeMenu() {
    setIsOrderOpen(!isOrderOpen)
  }

  function handleAddAccessory(accessory: AccessoryConstraints): void {
    if (!bookingCreation || !bookingCreation.selected_option) return

    const newAccessory: AccesorySelection = {
      product: accessory.product,
      constraint: accessory,
      quantity: 1, // Default to 1, you can adjust this based on your requirements
    }

    setBookingCreation({
      ...bookingCreation,
      selected_option: {
        ...bookingCreation.selected_option,
        accessories: [...(bookingCreation.selected_option.accessories || []), newAccessory],
      },
    })
  }

  function handleRemoveAccessory(accessoryId: string): void {
    if (!bookingCreation || !bookingCreation.selected_option) return

    setBookingCreation({
      ...bookingCreation,
      selected_option: {
        ...bookingCreation.selected_option,
        accessories: bookingCreation.selected_option.accessories?.filter((acc) => acc.product.ID !== accessoryId),
      },
    })
  }

  return (
    <div>
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black opacity-50 z-30 ${isOrderOpen ? "block" : "hidden"}`}
      ></div>
      <div
        className={`fixed h-full w-full lg:w-1/2 top-0 right-0 bg-[#151515] flex flex-col transition-transform duration-300 ease-in-out ${
          isOrderOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Fixed Header */}
        <div className="p-8 border-b border-white/20">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-3xl font-bold tracking-wide">Kurv</h2>
            <button onClick={closeMenu} className="text-3xl cursor-pointer">
              &times;
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="space-y-8">
            {/* Chosen Package */}
            {bookingCreation?.package && (
              <div>
                <h3 className="text-2xl font-semibold tracking-wide mb-4">Valgt Pakke</h3>
                <PackageCard item={bookingCreation.package} />
              </div>
            )}

            {/* Chosen Product */}
            {bookingCreation?.selected_option && (
              <div>
                <h3 className="text-2xl font-semibold tracking-wide mb-4">Valgt Produkt</h3>
                <ProductCard
                  product={bookingCreation.selected_option.product!}
                  price={getMinimumPrice(bookingCreation.selected_option.constraint!)}
                  isDelete={true}
                  onClick={handleDeleteProduct}
                />
              </div>
            )}

            {/* Accessories */}
            {bookingCreation?.selected_option && (
              <div>
                <h2 className="text-3xl font-bold tracking-wide mb-6">Tilbehør</h2>
                <SwiperCarousel slidesPerView={1.2}>
                  {bookingCreation.selected_option.constraint?.accessories.map((accessory) => (
                    <ProductCard
                      key={accessory.product.ID}
                      product={accessory.product}
                      onClick={() => handleAddAccessory(accessory)}
                      price={accessory.rent_prices![0].price}
                      isDelete={bookingCreation.selected_option?.accessories?.some(
                        (acc) => acc.product.ID === accessory.product.ID,
                      )}
                    />
                  ))}
                </SwiperCarousel>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

