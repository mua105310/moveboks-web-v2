import { AccessoryModel } from "@/models/accessory";


export const accessories: AccessoryModel[] = [
    {
        id: "sb-batteri-roskilde",
        title: "Soundboks Batteri",
        shortDescription: "Ekstra batteri til din Soundboks.",
        longDescription: "Ekstra batteri til din Soundboks, så du kan spille musik i endnu længere tid.",
        images: [],
        availableQuantity: 10,
        rentPrice: [
            { hours: 24, "price": 50 }
        ],
        type: "rent"
    },
    {
        id: "mikrofon",
        title: "Mikrofon",
        shortDescription: "Ekstra batteri til din Soundboks.",
        longDescription: "Ekstra batteri til din Soundboks, så du kan spille musik i endnu længere tid.",
        images: [],
        availableQuantity: 10,
        rentPrice: [
            { hours: 24, "price": 50 }
        ],
        type: "rent"
    },
    {
        id: "stativer",
        title: "Mikrofon",
        shortDescription: "Ekstra batteri til din Soundboks.",
        longDescription: "Ekstra batteri til din Soundboks, så du kan spille musik i endnu længere tid.",
        images: [],
        availableQuantity: 10,
        rentPrice: [
            { hours: 24, "price": 50 }
        ],
        type: "rent"
    }
];
