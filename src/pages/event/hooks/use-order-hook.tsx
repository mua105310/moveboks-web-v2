"use client";
import { PackageModel, ProductConstraintModel } from "@/internal/models/package";
import { ProductModel } from "@/internal/models/product";
import { useOrderProvider } from "@/provider/order-provider";

export function useOrderHook(){
const { bookingCreation, setBookingCreation } = useOrderProvider();

// Used to empty the order
function emptyOrder() {
    setBookingCreation({
        event: undefined,
        package: undefined,
        reserved_dates: [],
        duration: undefined,
        start_date: undefined,
        selected_option: undefined,
        pickup_point: undefined,
        dropoff_Point: undefined,
    });
}
// Set intial event id
function setEvent(event: string) {
    setBookingCreation({
        ...bookingCreation,
        event: event,
    })
}
// Used to set a package in the booking creation
function setPackage(pack: PackageModel) {
    if (!pack) return;
  setBookingCreation({
    ...bookingCreation,
    package: pack,
  })
}
// Used to set a product in the booking creation
function setProduct(constraint: ProductConstraintModel) {
    if (!constraint.product) return;
    setBookingCreation({
        ...bookingCreation,
        selected_option: {
            product: constraint.product,
            quantity: 1,
            constraint: constraint,
            accessories: [],
        }
    })
}

return { setPackage, setProduct, emptyOrder, setEvent };
}


