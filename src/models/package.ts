import { AccessoryConstraints } from "./accessory";
import { ProductModel } from "./product";

export type PackageModel = {
    id: string;
    parentEventId?: string;
    actived: boolean;
    title: string;
    predefinedLocationAndTime: boolean;
    shortDescription: string;
    features?: string[];
    longDescription: string;
    images: string[];
    options?: ProductConstraintModel[];
  }
  
  export enum PackageOptionType {
    PrimarySingle = "primarySingle",
    PrimaryMultiple = "primaryMultiple",
    AccessoryQuantity = "accessoryQuantity",
    AccessoryToggle = "accessoryToggle",
  }
  
export type  ProductConstraintModel = {
    product: ProductModel;
    required: boolean;
    buyPrice?: number;
    rentPrice?: RentPriceModel[];
    availableQuantity: number;
    allowedQuantity: number;
    accessories: AccessoryConstraints[];
    type: "rent" | "buy";
  }
  
export type RentPriceModel = {
    hours: number;
    price: number;
  }
  