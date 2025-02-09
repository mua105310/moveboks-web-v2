"use client";

import { useOrderProvider } from "@/provider/order-provider";
import PackageCard from "../card/package-card";
import ProductCard from "../card/product-card";
import { getMinimumPrice } from "@/utils/pricing/price.calculating";
import { ProductConstraintModel } from "@/internal/models/package";

export default function PlaceOrder() {
  const { bookingCreation, setBookingCreation } = useOrderProvider();

  function handleDeleteProduct(): void {
    if (!bookingCreation) return;
    setBookingCreation({
        ...bookingCreation,
        selected_option: undefined
    })
}

  return (
    <div>
      {/* <div className="top-0 right-0 w-full h-svh bg-black opacity-50 z-30 fixed"></div> */}
      <div
        className="h-svh fixed w-1/2 top-0 right-0 bg-[#151515] p-8 overflow-y-auto border-l-1 border-white/20"
        style={{ zIndex: 9999 }}
      >
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl font-bold tracking-wide mb-6">Kurv</h2>
          <h2 className="text-3xl cursor-pointer">x</h2>
        </div>

        {/* Divider */}
        <div className="border-b border-white/20 my-4"></div>

        <div className="space-y-5">
          {/* Chosen Package */}
          {bookingCreation?.package && (
          <div>
            <h3 className="text-2xl font-semibold tracking-wide mb-4">
              Valgt Pakke
            </h3>
            <PackageCard item={bookingCreation?.package!} />
          </div>
          )}

          {/* Chosen Product */}
            {bookingCreation?.selected_option && (
              <div>
                <h3 className="text-2xl font-semibold tracking-wide mb-4">
                  Valgt Produkt      
                </h3>
                <ProductCard product={bookingCreation?.selected_option?.product!} price={getMinimumPrice(bookingCreation.selected_option.constraint!)} isDelete={true} onClick={() => handleDeleteProduct()} />
              </div>
            )}
        </div>
          {/* Accessories */}
          {bookingCreation?.selected_option && ( 
          <div>
            {/* Divider */}
            <div className="border-b border-white/20 my-8"></div>
            <h2 className="text-3xl font-bold tracking-wide mb-6">Tilbehør</h2>
            {bookingCreation?.selected_option?.constraint?.accessories.map((accessory) => (
                      <ProductCard key={accessory.product.ID} product={accessory.product} />
            ))}
          </div>
            )}
      </div>
    </div>
  );
}
