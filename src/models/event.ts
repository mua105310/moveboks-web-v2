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
    title: string;                  // Used for both <title> and og:title (can be the same)
    description: string;            // Used for both <meta description> and og:description (can be the same)
    keywords?: string;              // For SEO purposes (less important today)
};






