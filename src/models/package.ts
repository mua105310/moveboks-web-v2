export type PackageModel = {
    id: string;
    parentEventId?: string;
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
    productId: string;
    required: boolean;
    buyPrice?: number;
    rentPrice?: RentPriceModel[];
    availableQuantity: number;
    accessoryIds?: string[];
    type: "rent" | "buy";
  }
  
export type RentPriceModel = {
    hours: number;
    price: number;
  }
  