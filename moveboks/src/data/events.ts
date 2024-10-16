import { EventModel } from "@/models/event";

export const roskilde2024: EventModel = {
    id: "roskilde-2024",
    title: "Roskilde Festival 2024",
    path: "lej-soundboks-til-roskilde-festival-2024",
    description: "Lej en soundboks til Roskilde Festival 2024",
    color: "#FF0000",
    packagesID: ['ros-basis', 'ros-plus', 'ros-premium'],
    images: [],
    dateInfo: {
        fromDate: new Date("2024-06-29"),
        toDate: new Date("2024-07-06"),
        showDate: new Date("2024-06-29"),
    },
    meta: {
        title : "Lej en soundboks til Roskilde Festival 2024",
        description: "Lej en soundboks til Roskilde Festival 2024",
        keywords: "Roskilde Festival, Soundboks, lej, 2024",
    }
}

export const smukfest2024: EventModel = {
    id: "smukfest-2024",
    title: "Smukfest 2024",
    path: "lej-soundboks-til-smukfest-2024",
    description: "Lej en soundboks til Smukfest 2024",
    color: "#FF0000",
    packagesID: ['smuk-basis', 'smuk-plus', 'smuk-premium'],
    images: [],
    dateInfo: {
        fromDate: new Date("2024-08-07"),
        toDate: new Date("2024-08-11"),
        showDate: new Date("2024-08-07"),
    },
    meta: {
        title : "Lej en soundboks til Smukfest 2024",
        description: "Lej en soundboks til Smukfest 2024",
        keywords: "Smukfest, Soundboks, lej, 2024",
    }
}

export const events: EventModel[] = [   
    roskilde2024,
    smukfest2024,
]
