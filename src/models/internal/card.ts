import { ProductConstraintModel } from "../package";

export interface CardModel {
    item: {
        title: string;
        longDescription: string;
        badge?: string;
        status?: string;
        images?: string[];
        features?: string[];
        rentPrice?: {
            price: number;
            hours: number;
        }[];
      };
      onClick?: () => void;
      isSelected?: boolean;
}