import { ProductConstraintModel } from "./package";

export type CardModel = {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    images: string[];
    features?: string[];
    options?: ProductConstraintModel[];
}