import { PackageModel, ProductConstraintModel} from "@/models/package";

// Shared product constraint data
const rosProducts: ProductConstraintModel[] = [
    {
        productId: "sb-go",
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        accessoryIds: ["sb-batteri-roskilde"],
        type: "rent",
        required: true,
    },
    {
        productId: "sb-3",
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        accessoryIds: ["sb-batteri-roskilde"],
        type: "rent",
        required: true,
    },
    {
        productId: "sb-4",
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        accessoryIds: ["sb-batteri-roskilde"],
        type: "rent",
        required: true,
    }
];

// Roskilde packages
export const packagesBasisRoskilde: PackageModel = {
    id: "ros-basis",
    title: "Roskilde basis",
    predefinedLocationAndTime: true,
    shortDescription: "Basispakken til Roskilde festival uden dækning",
    longDescription: "Ved køb af basispakken står du selv for ansvaret i tilfælde af tyveri og skade",
    images: [],
    features: ["Ingen dækning"],
    options: rosProducts,
};

export const packagesPlusRoskilde: PackageModel = {
    id: "ros-plus",
    title: "Roskilde Plus",
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade",
    images: [],
    features: ["Skadeforsikring"],
    options: rosProducts.map(product => ({
        ...product,
        rentPrice: [{ hours: 24, price: 3799 }]
    }))
};

export const packagesPremiumRoskilde: PackageModel = {
    id: "ros-premium",
    title: "Roskilde Premium",
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring og tyveriforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade og tyveri",
    images: [],
    features: ["Skadeforsikring", "Tyveriforsikring"],
    options: rosProducts.map(product => ({
        ...product,
        rentPrice: [{ hours: 24, price: 4499 }]
    }))
};

// Smukfest packages
const smukProducts: ProductConstraintModel[] = [
    {
        productId: "sb-go",
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        accessoryIds: ["sb-batteri-smukfest"],
        type: "rent",
        required: true,
    },
    {
        productId: "sb-3",
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        accessoryIds: ["sb-batteri-smukfest"],
        type: "rent",
        required: true,
    },
    {
        productId: "sb-4",
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        accessoryIds: ["sb-batteri-smukfest"],
        type: "rent",
        required: true,
    }
];

export const packagesBasisSmukfest: PackageModel = {
    id: "smuk-basis",
    title: "Smukfest basis",
    predefinedLocationAndTime: true,
    shortDescription: "Basispakken til Smukfest uden dækning",
    longDescription: "Ved køb af basispakken står du selv for ansvaret i tilfælde af tyveri og skade",
    images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/2d809dfb-51fc-4503-b906-0936213dc800/public"],
    features: ["Ingen dækning"],
    options: smukProducts,
};

export const packagesPlusSmukfest: PackageModel = {
    id: "smuk-plus",
    title: "Smukfest Plus",
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade",
    images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/edfb5303-e5e2-4c2d-eae3-e0a8ad18fb00/public"],
    features: ["Skadeforsikring"],
    options: smukProducts.map(product => ({
        ...product,
        rentPrice: [{ hours: 24, price: 3799 }]
    }))
};

export const packagesPremiumSmukfest: PackageModel = {
    id: "smuk-premium",
    title: "Smukfest Premium",
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring og tyveriforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade og tyveri",
    images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/3bd01de0-a395-42c0-ca10-7eedbf177500/public"],
    features: ["Skadeforsikring", "Tyveriforsikring"],
    options: smukProducts.map(product => ({
        ...product,
        rentPrice: [{ hours: 24, price: 4499 }]
    }))
};

// Final packages array
export const packages: PackageModel[] = [
    packagesBasisRoskilde,
    packagesPlusRoskilde,
    packagesPremiumRoskilde,
    packagesBasisSmukfest,
    packagesPlusSmukfest,
    packagesPremiumSmukfest,
];
