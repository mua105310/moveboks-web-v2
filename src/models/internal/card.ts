import { ProductConstraintModel } from "../package";

export type CardModel = {
    item: {
        title: string;
        longDescription: string;
        badge?: string;
        status?: string;
        images?: string[];
      };
      onClick: () => void;
}