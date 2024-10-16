export type EventModel = {
    id: string,
    title: string,
    description: string,
    color: string,
    packagesID: string[],
    dateInfo: datesModel,
    images: string[],
}

export type datesModel = {
    fromDate: Date,
    toDate: Date,
    showDate?: Date,
}





