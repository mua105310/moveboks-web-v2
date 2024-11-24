import { AccessoryModel } from "@/models/accessory";

export const accessories: AccessoryModel[] = [
    {
        id: "sb-batteri-roskilde",
        title: "Soundboks Batteri",
        shortDescription: "Ekstra batteri til din Soundboks.",
        longDescription: "Ekstra batteri til din Soundboks, så du kan spille musik i endnu længere tid.",
        images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/43e14fa5-267f-4d0d-8bb7-edd13e6f5a00/public"],
        availableQuantity: 10,
        rentPrice: [
            { hours: 24, "price": 50 }
        ],
        type: "rent",
        selectionType: "quantity"
    },
    {
        id: "mikrofon",
        title: "Mikrofon",
        shortDescription: "Ekstra batteri til din Soundboks.",
        longDescription: "Ekstra batteri til din Soundboks, så du kan spille musik i endnu længere tid.",
        images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/43e14fa5-267f-4d0d-8bb7-edd13e6f5a00/public"],
        availableQuantity: 10,
        rentPrice: [
            { hours: 24, "price": 50 }
        ],
        type: "rent",
        selectionType: "quantity"
    },
    {
        id: "stativer",
        title: "Stativer",
        shortDescription: "Ekstra batteri til din Soundboks.",
        longDescription: "Ekstra batteri til din Soundboks, så du kan spille musik i endnu længere tid.",
        images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/43e14fa5-267f-4d0d-8bb7-edd13e6f5a00/public"],
        availableQuantity: 10,
        rentPrice: [
            { hours: 24, "price": 50 }
        ],
        type: "rent",
        selectionType: "quantity"
    }
];
