import { AccessoryConstraints } from "./accessory";
import { PickupPoint } from "./event";
import { ProductModel } from "./product";

export type PackageModel = {
    ID: string;
    archived: boolean;
    title: string;
    parent_business_id: string;
    pickup_points?: PickupPoint[];
    predefined_location_and_time: boolean;
    short_description: string;
    features?: string[];
    long_description: string;
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
    buy_price?: number;
    rent_prices?: RentPriceModel[];
    available_quantity: number;
    allowed_quantity: number;
    accessories: AccessoryConstraints[];
    type: "rent" | "buy";
  }
  
export type RentPriceModel = {
    hours: number;
    price: number;
  }