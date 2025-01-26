import { AccessoryConstraints } from "./accessory";
import { PickupPoint } from "./event";
import { ProductModel } from "./product";

export type PackageModel = {
    ID: string;
    parentEventId?: string;
    archived: boolean;
    title: string;
    pickupPoints?: PickupPoint[];
    predefinedLocationAndTime: boolean;
    shortDescription: string;
    features?: string[];
    longDescription: string;
    image_url: string;
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