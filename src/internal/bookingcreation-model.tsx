import { AccessoryConstraints } from "./accessory"
import { DateTime, EventModel, PickupPoint } from "./event"
import { PackageModel, ProductConstraintModel } from "./package"
import { ProductModel } from "./product"


export type BookingCreation = {
    event: EventModel
    package: PackageModel
    reserved_dates?: DateTime[]
    duration?: number 
    start_date?: DateTime
    // selectedOptions?: ProductionSelection[]
    selected_options?: ProductionSelection
    pickup_point?: PickupPoint
    dropoff_Point?: PickupPoint
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