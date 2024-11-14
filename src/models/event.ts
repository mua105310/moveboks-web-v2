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






