import { AccessoryModel } from "../accessory"
import { PackageModel } from "../package"

export type OrderModel = {
    event_id: string,
    package: PackageModel,
    product:  {
        id: string,
        quantity: number
        accessories: {
            id: string,
            quantity: number
        }[],
    }[],
    form: {
        email: string,
        location: string,
        date: string,
        duration: number,
    }
}