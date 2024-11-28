import { AccessoryConstraints } from "../accessory"
import { PackageModel, ProductConstraintModel } from "../package"
import { ProductModel } from "../product"


export type BookingCreation = {
    eventId: string
    package: PackageModel
    //reservedDates: List<DateTime>
    //duration: int (int hours) ˇ
    //startDate: DateTime?
    selectedOptions?: ProductionSelection[]
    //pickupPoint: PickupPoint
    //dropoffPoint: PickupPoint
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