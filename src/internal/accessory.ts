import { RentPriceModel} from "./package";
import { ProductModel } from "./product";

export type AccessoryConstraints = {
  product_id: string,
  product: ProductModel,
  selection_typeype: "toggle" | "quantity";
  rent_price?: RentPriceModel[],
  buy_price?: number,
  available_quantity: number,
  allowed_quantity: number,
  type: "rent" | "buy",
}