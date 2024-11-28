import { RentPriceModel, ProductConstraintModel } from "./package";
import { ProductModel } from "./product";

export type AccessoryConstraints = {
  productId: string,
  product: ProductModel,
  selectionType: "toggle" | "quantity";
  rentPrice?: RentPriceModel[],
  buyPrice?: number,
  availableQuantity: number,
  allowedQuantity: number,
  type: "rent" | "buy",
}