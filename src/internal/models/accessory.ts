import { RentPriceModel} from "./package";
import { ProductModel } from "./product";

export type AccessoryConstraints = {
  product_Id: string,
  product: ProductModel,
  selection_type: "toggle" | "quantity";
  rent_prices?: RentPriceModel[],
  buy_price?: number,
  available_quantity: number,
  allowed_quantity: number,
  type: "rent" | "buy",
}