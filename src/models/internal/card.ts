import { ProductConstraintModel } from "../package";

export interface CardModel {
    item: {
        title: string;
        longDescription: string;
        badge?: string;
        status?: string;
        images?: string[];
        features?: string[];
      };
      onClick?: () => void;
      isSelected?: boolean;
}