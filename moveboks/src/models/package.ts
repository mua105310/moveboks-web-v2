export type PackageModel = {
    id: string;
    parentEventId?: string;
    title: string;
    predefinedLocationAndTime: boolean;
    shortDescription: string;
    features?: string[];
    longDescription: string;
    images: string[];
    options?: PackageOptionModel[];
  }
  
  export enum PackageOptionType {
    PrimarySingle = "primarySingle",
    PrimaryMultiple = "primaryMultiple",
    AccessoryQuantity = "accessoryQuantity",
    AccessoryToggle = "accessoryToggle",
  }
  
export type PackageOptionModel = {
    flowOrder: number;
    title: string;
    required: boolean;
    type: PackageOptionType;
    helperText?: string;
    products: ProductConstraintModel[];
  }
  
export type  ProductConstraintModel = {
    productId: string;
    prices: DurationPriceModel[];
    availableQuantity: number;
  }
  
export type DurationPriceModel = {
    hours: number;
    price: number;
  }
  