import { AccessoryConstraints } from "../models/accessory"
import { DateTime, EventModel, PickupPoint } from "../models/event"
import { PackageModel, ProductConstraintModel } from "../models/package"
import { ProductModel } from "../models/product"


export type BookingCreation = {
    event?: string
    package?: PackageModel | undefined
    reserved_dates?: DateTime[]
    duration?: number 
    start_date?: DateTime
    // selectedOptions?: ProductionSelection[]
    selected_option?: ProductionSelection
    pickup_point?: PickupPoint
    dropoff_Point?: PickupPoint
}   

export type ProductionSelection = {
    product?: ProductModel,
    quantity: number,
    constraint?: ProductConstraintModel
    accessories?: AccesorySelection[],
}

export type AccesorySelection = {
    product: ProductModel,
    constraint: AccessoryConstraints,
    quantity: number
}