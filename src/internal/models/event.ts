import { PackageModel } from "./package";

export type EventModel = {
    ID: string,
    title: string,
    subtitle?: string,
    path: string,
    description: string,
    short_description: string,
    long_description: string,
    lonm: string,
    color: string,
    packages: PackageModel[],
    dateInfo: DatesModel,
    image_url: string,
    meta_data: MetaModel,
    fixedPackageInfo?: FixedPackageInfo,
}

type DatesModel = {
    fromDate: Date,
    toDate: Date,
    showDate?: Date,
}

export type MetaModel = {
    meta_title: string;                 
    meta_description: string;            
    meta_keywords?: string;          
};

export type FixedPackageInfo = {
    pickup_point?: PickupPoint,
    return_point?: PickupPoint,
    start_date?: DateTime,
    end_time_remark?: String
    duration?: number,
}

export type PickupPoint = {
    address: string,
    city: string,
    zip: string,
}

export type DateTime = {
    date: Date,
    time: string,
}