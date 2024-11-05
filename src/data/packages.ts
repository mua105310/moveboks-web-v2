import { PackageModel, PackageOptionModel } from "@/models/package";
import { PackageOptionType } from "@/models/package";
import { features } from "process";

// Define your packages as an array of PackageModel objects
export const packages: PackageModel[] = [
    {
        id: "ros-basis",
        title: "Roskilde basis",
        predefinedLocationAndTime: true,
        shortDescription: "Basispakken til Roskilde festival uden dækning",
        longDescription: "Ved køb af basispakken står du selv for ansvaret i tilfælde af tyveri og skade",
        images: [],
        features: ["Ingen dækning"],
    },
    {
        id: "ros-plus",
        title: "Roskilde Plus",
        predefinedLocationAndTime: true,
        shortDescription: "Inkluder skadeforsikring",
        longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade",
        images: [],
        features: ["Skadeforsikring"],
    },
    {
        id: "ros-premium",
        title: "Roskilde Premium",
        predefinedLocationAndTime: true,
        shortDescription: "Inkluder skadeforsikring og tyveriforsikring",
        longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade og tyveri",
        images: [],
        features: ["Skadeforsikring", "Tyveriforsikring"],
    },
    {
        id: "smuk-basis",
        title: "Smukfest basis",
        predefinedLocationAndTime: true,
        shortDescription: "Basispakken til Smukfest uden dækning",
        longDescription: "Ved køb af basispakken står du selv for ansvaret i tilfælde af tyveri og skade",
        images: [],
        features: ["Ingen dækning"],
    },
    {
        id: "smuk-plus",
        title: "Smukfest Plus",
        predefinedLocationAndTime: true,
        shortDescription: "Inkluder skadeforsikring",
        longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade",
        images: [],
        features: ["Skadeforsikring"],
    },
    {
        id: "smuk-premium",
        title: "Smukfest Premium",
        predefinedLocationAndTime: true,
        shortDescription: "Inkluder skadeforsikring og tyveriforsikring",
        longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade og tyveri",
        images: [],
        features: ["Skadeforsikring", "Tyveriforsikring"],
    }
];



// Roskilde festival 2024 packages

export const rosBasis: PackageOptionModel = {
    flowOrder: 1,
    title: "Højtalere",
    required: true,
    type: PackageOptionType.PrimarySingle,
    helperText: "",
    products: [
        {
            productId: "sb-go",
            prices: [
                {
                    hours: 24,
                    price: 3099
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-3",
            prices: [
                {
                    hours: 24,
                    price: 3099
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-4",
            prices: [
                {
                    hours: 24,
                    price: 3099
                },
            ],
            availableQuantity: 10,
        },
    ]
}

export const rosPlus: PackageOptionModel = {
    flowOrder: 2,
    title: "Højtalere",
    required: true,
    type: PackageOptionType.PrimarySingle,
    helperText: "",
    products: [
        {
            productId: "sb-go",
            prices: [
                {
                    hours: 24,
                    price: 3799
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-3",
            prices: [
                {
                    hours: 24,
                    price: 3799
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-4",
            prices: [
                {
                    hours: 24,
                    price: 3799
                },
            ],
            availableQuantity: 10,
        },
    ]
}

export const rosPremimum: PackageOptionModel = {
    flowOrder: 3,
    title: "Højtalere",
    required: true,
    type: PackageOptionType.PrimarySingle,
    helperText: "",
    products: [
        {
            productId: "sb-go",
            prices: [
                {
                    hours: 24,
                    price: 4499
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-3",
            prices: [
                {
                    hours: 24,
                    price: 4499
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-4",
            prices: [
                {
                    hours: 24,
                    price: 4499
                },
            ],
            availableQuantity: 10,
        },
    ]
}

export const accesoriesRoskilde: PackageOptionModel = {
    flowOrder: 4,
    title: "Tilbehør",
    required: false,
    type: PackageOptionType.AccessoryQuantity,
    helperText: "Vælg det antal du ønsker",
    products: [
        {
            productId: "sb-batteri-roskilde",
            prices: [
                {
                    hours: 24,
                    price: 500
                },
            ],
            availableQuantity: 10,
        },
    ]
}

export const packagesBasis: PackageModel = {
    id: "ros-basis",
    title: "Roskilde basis",
    predefinedLocationAndTime: true,
    shortDescription: "Basispakken til Roskilde festival uden dækning",
    longDescription: "Ved køb af basispakken står du selv for ansvaret i tilfælde af tyveri og skade",
    images: [],
    features: ["Ingen dækning"],
    options: [rosBasis, accesoriesRoskilde],
}


export const packagesPlus: PackageModel = {
    id: "ros-plus",
    title: "Roskilde Plus",
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade",
    images: [],
    features: ["Skadeforsikring"],
    options: [rosPlus, accesoriesRoskilde],
}

export const packagesPremium: PackageModel = {
    id: "ros-premium",
    title: "Roskilde Premium",
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring og tyveriforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade og tyveri",
    images: [],
    features: ["Skadeforsikring", "Tyveriforsikring"],
    options: [rosPremimum, accesoriesRoskilde],
}

// Smukfest 2024 packages

export const smukBasis: PackageOptionModel = {
    flowOrder: 1,
    title: "Højtalere",
    required: true,
    type: PackageOptionType.PrimarySingle,
    helperText: "",
    products: [
        {
            productId: "sb-go",
            prices: [
                {
                    hours: 24,
                    price: 3099
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-3",
            prices: [
                {
                    hours: 24,
                    price: 3099
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-4",
            prices: [
                {
                    hours: 24,
                    price: 3099
                },
            ],
            availableQuantity: 10,
        },
    ]
}

export const smukPlus: PackageOptionModel = {
    flowOrder: 2,
    title: "Højtalere",
    required: true,
    type: PackageOptionType.PrimarySingle,
    helperText: "",
    products: [
        {
            productId: "sb-go",
            prices: [
                {
                    hours: 24,
                    price: 3799
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-3",
            prices: [
                {
                    hours: 24,
                    price: 3799
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-4",
            prices: [
                {
                    hours: 24,
                    price: 3799
                },
            ],
            availableQuantity: 10,
        },
    ]
}

export const smukPremimum: PackageOptionModel = {
    flowOrder: 3,
    title: "Højtalere",
    required: true,
    type: PackageOptionType.PrimarySingle,
    helperText: "",
    products: [
        {
            productId: "sb-go",
            prices: [
                {
                    hours: 24,
                    price: 4499
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-3",
            prices: [
                {
                    hours: 24,
                    price: 4499
                },
            ],
            availableQuantity: 10,
        },
        {
            productId: "sb-4",
            prices: [
                {
                    hours: 24,
                    price: 4499
                },
            ],
            availableQuantity: 10,
        },
    ]
}

export const accesoriesSmukfest: PackageOptionModel = {
    flowOrder: 4,
    title: "Tilbehør",
    required: false,
    type: PackageOptionType.AccessoryQuantity,
    helperText: "Vælg det antal du ønsker",
    products: [
        {
            productId: "sb-batteri-smukfest",
            prices: [
                {
                    hours: 24,
                    price: 500
                },
            ],
            availableQuantity: 10,
        },
    ]
}

export const packagesBasisSmukfest: PackageModel = {
    id: "smuk-basis",
    title: "Smukfest basis",
    predefinedLocationAndTime: true,
    shortDescription: "Basispakken til Smukfest uden dækning",
    longDescription: "Ved køb af basispakken står du selv for ansvaret i tilfælde af tyveri og skade",
    images: [],
    features: ["Ingen dækning"],
    options: [smukBasis, accesoriesSmukfest],
}

export const packagesPlusSmukfest: PackageModel = {
    id: "smuk-plus",
    title: "Smukfest Plus",
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade",
    images: [],
    features: ["Skadeforsikring"],
    options: [smukPlus, accesoriesSmukfest],
}

export const packagesPremiumSmukfest: PackageModel = {
    id: "smuk-premium",
    title: "Smukfest Premium",
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring og tyveriforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade og tyveri",
    images: [],
    features: ["Skadeforsikring", "Tyveriforsikring"],
    options: [smukPremimum, accesoriesSmukfest],
}
