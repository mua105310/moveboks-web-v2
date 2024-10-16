import { EventModel } from "@/models/event";

const roskilde2024 = {
    id: "roskilde-2024",
    title: "Roskilde Festival 2024",
    description: "Lej en soundboks til Roskilde Festival 2024",
    color: "#FF0000",
    packagesID: ['ros-basis', 'ros-plus', 'ros-premium'],
    images: [],
    dateInfo: {
        fromDate: new Date("2024-06-29"),
        toDate: new Date("2024-07-06"),
        showDate: new Date("2024-06-29"),
    }
}

const smukfest2024 = {
    id: "smukfest-2024",
    title: "Smukfest 2024",
    description: "Lej en soundboks til Smukfest 2024",
    color: "#FF0000",
    packagesID: ['smuk-basis', 'smuk-plus', 'smuk-premium'],
    images: [],
    dateInfo: {
        fromDate: new Date("2024-08-07"),
        toDate: new Date("2024-08-11"),
        showDate: new Date("2024-08-07"),
    }
}

export const events: EventModel[] = [   
    roskilde2024,
    smukfest2024,
]
