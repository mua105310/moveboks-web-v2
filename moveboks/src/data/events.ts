// /src/data/eventsData.ts

import { EventModel } from "@/models/event";


export const eventsData: EventModel[] = [
    {
        id: 1,
        name: "Roskilde Festival",
        description: "Danmarks største musik- og kunstfestival med internationale og lokale kunstnere.",
        image: "https://images.unsplash.com/photo-1560776033-3a05f3f50e0e",
        isActive: true,
        startDate: "2024-06-29",
        endDate: "2024-07-06",
        packages: [
            {
                id: 101,
                name: "Basis",
                description: "Ingen dækning",
                products: [
                    { id: 201, name: "Soundboks Go", price: 3099 },
                    { id: 202, name: "Soundboks 3", price: 3799 },
                    { id: 203, name: "Soundboks 4", price: 4499 }
                ]
            },
            {
                id: 102,
                name: "Plus",
                description: "Inkluder skadeforsikring",
                products: [
                    { id: 201, name: "Soundboks Go", price: 3099 },
                    { id: 202, name: "Soundboks 3", price: 3799 },
                    { id: 203, name: "Soundboks 4", price: 4499 }
                ]
            },
            {
                id: 103,
                name: "Premium",
                description: "Inkluder skadeforsikring og tyveriforsikring",
                products: [
                    { id: 201, name: "Soundboks Go", price: 3099 },
                    { id: 202, name: "Soundboks 3", price: 3799 },
                    { id: 203, name: "Soundboks 4", price: 4499 }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Smukfest",
        description: "En charmerende festival i Skanderborgs skove med et bredt udvalg af musikgenrer.",
        image: "https://images.unsplash.com/photo-1560776033-3a05f3f50e0e",
        isActive: true,
        startDate: "2024-08-03",
        endDate: "2024-08-07",
        packages: [
            {
                id: 104,
                name: "Basis",
                description: "Ingen dækning",
                products: [
                    { id: 201, name: "Soundboks Go", price: 3099 },
                    { id: 202, name: "Soundboks 3", price: 3799 },
                    { id: 203, name: "Soundboks 4", price: 4499 }
                ]
            },
            {
                id: 105,
                name: "Plus",
                description: "Inkluder skadeforsikring",
                products: [
                    { id: 201, name: "Soundboks Go", price: 3099 },
                    { id: 202, name: "Soundboks 3", price: 3799 },
                    { id: 203, name: "Soundboks 4", price: 4499 }
                ]
            },
            {
                id: 106,
                name: "Premium",
                description: "Inkluder skadeforsikring og tyveriforsikring",
                products: [
                    { id: 201, name: "Soundboks Go", price: 3099 },
                    { id: 202, name: "Soundboks 3", price: 3799 },
                    { id: 203, name: "Soundboks 4", price: 4499 }
                ]
            }
        ]
    }
];
