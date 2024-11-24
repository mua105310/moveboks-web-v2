import { RentPriceModel } from "./package";
import { ProductModel } from "./product";

export type AccessoryModel = ProductModel & {
  rentPrice?: RentPriceModel[];
  longDescription: string;
  shortDescription: string;
  buyPrice?: number;
  availableQuantity: number;
  type: "rent" | "buy";
  selectionType: "toggle" | "quantity";
};