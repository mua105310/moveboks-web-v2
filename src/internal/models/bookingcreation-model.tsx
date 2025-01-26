import { AccessoryConstraints } from "../models/accessory"
import { DateTime, EventModel, PickupPoint } from "../models/event"
import { PackageModel, ProductConstraintModel } from "../models/package"
import { ProductModel } from "../models/product"


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