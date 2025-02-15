"use client";
import { getEventById } from "@/controller/controller-service";
import { AccessoryConstraints } from "@/internal/models/accessory";
import { EventModel } from "@/internal/models/event";
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
      },
    })
  }
// Set intial event id
async function setEvent(event: EventModel) {
    if (!event) return
    // Empty the order before setting the new event
    emptyOrder()
    const fetchedEvent = await getEventById(event.ID)
    setBookingCreation({
      event: fetchedEvent!,
    })
  }
// Used to set a package in the booking creation
async function setPackage(pack: PackageModel) {
    if (!pack) return;
    setBookingCreation({
        ...bookingCreation,
        package: pack,
    });
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
    // Check if the accessory is already in the bookingCreation constraint
    if (bookingCreation.selected_option.accessories?.some((acc) => acc.product?.ID === accessory.product.ID)) return;
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
                        quantity: Math.min(Math.max(quantity, 0), acc.constraint?.allowed_quantity!),
                    }
                }
                return acc;
            })
        }
    });

}
//remove the accessory from the bookingCreation constraint
function removeAccessory(accessory: ProductModel) {
    if (!bookingCreation || !bookingCreation.selected_option) return;
    setBookingCreation({
        ...bookingCreation,
        selected_option: {
            ...bookingCreation.selected_option,
            accessories: bookingCreation.selected_option.accessories?.filter((acc) => acc.product?.ID !== accessory.ID),
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
    removeAccessory
};
}