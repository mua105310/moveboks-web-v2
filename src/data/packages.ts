import { PackageModel, ProductConstraintModel} from "@/models/package";
import { products } from "./products";
import { accessories } from "./accessories";

// Shared product constraint data
const rosProducts: ProductConstraintModel[] = [
    {
        product: products[0],
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        allowedQuantity: 5,
        accessories: accessories,
        type: "rent",
        required: true,
    },
    {
        product: products[1],
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        allowedQuantity: 5,
        accessories: accessories,
        type: "rent",
        required: true,
    },
    {
        product: products[2],
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        allowedQuantity: 5,
        accessories: accessories,
        type: "rent",
        required: true,
    }
];

// Roskilde packages
export const packagesBasisRoskilde: PackageModel = {
    id: "ros-basis",
    title: "Roskilde basis",
    archived: false,
    pickupPoints: ["Valby", "Frederiksberg"],
    predefinedLocationAndTime: true,
    shortDescription: "Basispakken til Roskilde festival uden dækning",
    longDescription: "Ved køb af basispakken står du selv for ansvaret i tilfælde af tyveri og skade",
    images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/2d809dfb-51fc-4503-b906-0936213dc800/public"],
    features: ["Ingen dækning"],
    options: rosProducts,
};

export const packagesPlusRoskilde: PackageModel = {
    id: "ros-plus",
    title: "Roskilde Plus",
    archived: false,
    pickupPoints: ["Valby", "Frederiksberg"],
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade",
    images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/edfb5303-e5e2-4c2d-eae3-e0a8ad18fb00/public"],
    features: ["Skadeforsikring"],
    options: rosProducts.map(product => ({
        ...product,
        rentPrice: [{ hours: 24, price: 3799 }]
    }))
};

export const packagesPremiumRoskilde: PackageModel = {
    id: "ros-premium",
    title: "Roskilde Premium",
    archived: false,
    pickupPoints: ["Valby", "Frederiksberg"],
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring og tyveriforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade og tyveri",
    images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/3bd01de0-a395-42c0-ca10-7eedbf177500/public"],
    features: ["Skadeforsikring", "Tyveriforsikring"],
    options: rosProducts.map(product => ({
        ...product,
        rentPrice: [{ hours: 24, price: 3999 }]
    }))
};

// Smukfest packages
const smukProducts: ProductConstraintModel[] = [
    {
        product: products[0],
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        allowedQuantity: 5,
        accessories: accessories,
        type: "rent",
        required: true,
    },
    {
        product: products[1],
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        allowedQuantity: 5,
        accessories: accessories,
        type: "rent",
        required: true,
    },
    {
        product: products[2],
        rentPrice: [{ hours: 24, price: 3099 }],
        availableQuantity: 10,
        allowedQuantity: 5,
        accessories: accessories,
        type: "rent",
        required: true,
    }
];

export const packagesBasisSmukfest: PackageModel = {
    id: "smuk-basis",
    title: "Smukfest basis",
    archived: false,
    pickupPoints: ["Valby", "Frederiksberg"],
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
    archived: false,
    pickupPoints: ["Valby", "Frederiksberg"],
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
    archived: false,
    pickupPoints: ["Valby", "Frederiksberg"],
    title: "Smukfest Premium",
    predefinedLocationAndTime: true,
    shortDescription: "Inkluder skadeforsikring og tyveriforsikring",
    longDescription: "Ved køb af pluspakken er du dækket i tilfælde af skade og tyveri",
    images: ["https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/3bd01de0-a395-42c0-ca10-7eedbf177500/public"],
    features: ["Skadeforsikring", "Tyveriforsikring"],
    options: smukProducts.map(product => ({
        ...product,
        rentPrice: [{ hours: 24, price: 3999 }]
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
