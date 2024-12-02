import { AccessoryConstraints } from "../accessory"
import { DateTime, EventModel, PickupPoint } from "../event"
import { PackageModel, ProductConstraintModel } from "../package"
import { ProductModel } from "../product"


export type BookingCreation = {
    event: EventModel
    package: PackageModel
    reservedDates?: DateTime[]
    duration?: number 
    startDate?: DateTime
    selectedOptions?: ProductionSelection[]
    pickupPoint?: PickupPoint
    dropoffPoint?: PickupPoint
}   

export type ProductionSelection = {
    product: ProductModel,
    quantity: number,
    constraint?: ProductConstraintModel
    accessories?: AccesorySelection[],
}

export type AccesorySelection = {
    product: ProductModel,
    constraint: AccessoryConstraints,
    quantity: number
}

