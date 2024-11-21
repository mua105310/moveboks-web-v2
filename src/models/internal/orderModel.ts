import { AccessoryModel } from "../accessory"
import { PackageModel } from "../package"
import { ProductModel } from "../product"

export type OrderModel = {
    event_id: string,
    package: PackageModel,
    product:  {
        product: ProductModel,
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