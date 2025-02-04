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
    fixed_package_info?: FixedPackageInfo,
}

type DatesModel = {
    from_date: Date,
    to_date: Date,
    show_date?: Date,
}

export type MetaModel = {
    title: string;                 
    description: string;            
    keywords?: string;          
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