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
    meta: MetaModel,
    fixedPackageInfo?: FixedPackageInfo,
}

type DatesModel = {
    fromDate: Date,
    toDate: Date,
    showDate?: Date,
}

export type MetaModel = {
    title: string;                 
    description: string;            
    keywords?: string;          
};

export type FixedPackageInfo = {
    pickupPoint?: PickupPoint,
    returnPoint?: PickupPoint,
    startDate?: DateTime,
    endTimeRemark?: String
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