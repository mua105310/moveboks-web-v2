import { RentPriceModel } from "./package";
import { ProductModel } from "./product";

export type AccessoryModel = ProductModel & {
  rentPrice?: RentPriceModel[];
  buyPrice?: number;
  availableQuantity: number;
  type: "rent" | "buy";
};