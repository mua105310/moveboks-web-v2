"use client";
import { AccessoryConstraints } from "@/internal/models/accessory";
import { PackageModel, ProductConstraintModel } from "@/internal/models/package";
import { ProductModel } from "@/internal/models/product";
import { useOrderProvider } from "@/provider/order-provider";

export function useOrderHook(){
const { bookingCreation, setBookingCreation, isOrderOpen, setIsOrderOpen } = useOrderProvider();

function toggleOrder(){
    setIsOrderOpen(!isOrderOpen);
}

// Used to empty the order
function emptyOrder() {
    setBookingCreation({
        event: undefined,
        package: undefined,
        selected_option: {
            product: undefined,
            quantity: 0,
            constraint: undefined,
            accessories: [],
        }
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
    });
    //open order
    toggleOrder();
}
// setProductQuantity
function setProductQuantity(quantity: number) {
    if (!bookingCreation || !bookingCreation.selected_option) return;
    setBookingCreation({
        ...bookingCreation,
        selected_option: {
            ...bookingCreation.selected_option, 
            quantity: Math.min(Math.max(quantity, 1), bookingCreation.selected_option.constraint?.allowed_quantity!), 
        }
    });
}
// Remove product from order
function removeProduct() {
    setBookingCreation({
        ...bookingCreation,
        selected_option: {
            product: undefined,
            quantity: 0,
            constraint: undefined,
            accessories: [],
        }
    });
    toggleOrder();
}
// setAccessory 
function setAccessory(accessory: AccessoryConstraints) {
    if (!bookingCreation || !bookingCreation.selected_option) return;
    setBookingCreation({
        ...bookingCreation,
        selected_option: {
            ...bookingCreation.selected_option,
            accessories: [
                ...(bookingCreation.selected_option.accessories || []),
                {
                    product: accessory.product,
                    constraint: accessory,
                    quantity: 1,
                }
            ],
        }
    });
}
// setAccessoryQuantity
function setAccessoryQuantity(accessory: ProductModel, quantity: number) {
    if (!bookingCreation || !bookingCreation.selected_option) return;
    setBookingCreation({
        ...bookingCreation,
        selected_option: {
            ...bookingCreation.selected_option,
            accessories: bookingCreation.selected_option.accessories?.map((acc) => {
                if (acc.product?.ID === accessory.ID) {
                    return {
                        ...acc,
                        quantity: Math.min(Math.max(quantity, 1), acc.constraint?.allowed_quantity!),
                    }
                }
                return acc;
            })
        }
    });
}

return { 
    setPackage, 
    setProduct, 
    emptyOrder, 
    setEvent,
    setProductQuantity, 
    toggleOrder, 
    removeProduct,
    setAccessory,
    setAccessoryQuantity,
};
}