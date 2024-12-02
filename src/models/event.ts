export type EventModel = {
    id: string,
    title: string,
    subtitle?: string,
    path: string,
    description: string,
    color: string,
    packagesID: string[],
    dateInfo: DatesModel,
    images: string[],
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






