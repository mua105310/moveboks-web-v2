import { EventModel } from "@/models/event"

export const roskilde2025: EventModel = {
    id: "roskilde-2025",
    title: "Roskilde Festival 2025",
    path: "lej-soundboks-til-roskilde-festival-2025",
    description: "Lej en SOUNDBOKS til Roskilde Festival 2025 med tyveri- og skadesforsikring. Så længe lager haves",
    color: "#FF0000",
    packagesID: ['ros-basis', 'ros-plus', 'ros-premium'],
    images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/84add849-e7fc-4af9-8eae-5210c6936c00/public"],
    dateInfo: {
        fromDate: new Date("2025-06-29"),
        toDate: new Date("2025-07-06"),
        showDate: new Date("2025-06-29"),
    },
    meta: {
        title : "Lej en soundboks til Roskilde Festival 2025",
        description: "Lej en soundboks til Roskilde Festival 2025",
        keywords: "Roskilde Festival, Soundboks, lej, 2025",
    }
}

export const smukfest2025: EventModel = {
    id: "smukfest-2025",
    title: "Smukfest 2025",
    path: "lej-soundboks-til-smukfest-2025",
    description: "Lej en SOUNDBOKS til Smukfest 2025 med tyveri- og skadesforsikring. Så længe lager haves",
    color: "#FF0000",
    packagesID: ['smuk-basis', 'smuk-plus', 'smuk-premium'],
    images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/5a386a59-d1db-4545-cd4e-f067b1baea00/public"],
    dateInfo: {
        fromDate: new Date("2025-08-07"),
        toDate: new Date("2025-08-11"),
        showDate: new Date("2025-08-07"),
    },
    meta: {
        title : "Lej en soundboks til Smukfest 2025",
        description: "Lej en soundboks til Smukfest 2025",
        keywords: "Smukfest, Soundboks, lej, 2025",
    }
}

export const events: EventModel[] = [
    roskilde2025,
    smukfest2025,
    // roskilde2025,
    // smukfest2025,
]