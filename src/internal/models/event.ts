import { PackageModel } from "./package";

export type EventModel = {
    ID: string,
    title: string,
    path: string,
    description: string,
    short_description: string,
    long_description: string,
    color: string,
    packages: PackageModel[],
    dateInfo: DatesModel,
    image_url: string,
    start_date: Date,
    pickup_points: PickupPoint[],
    return_points: PickupPoint[],
}

type DatesModel = {
    from_datate: Date,
    to_date: Date,
    show_date?: Date,
}

export type MetaModel = {
    meta_title: string;                 
    meta_description: string;            
    meta_keywords?: string;          
};

export type PickupPoint = {
    address: string,
    city: string,
    country: string,
    postal_code: string,
    image_url: string,
    latitude: number,
    longitude: number,
}

export type DateTime = {
    date: Date,
    time: string,
}