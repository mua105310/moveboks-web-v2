import { AccessoryConstraints } from "@/models/accessory";

export const accessories: AccessoryConstraints[] = [
    {
      product: {
        id: "sb-batteri-roskilde",
        title: "Soundboks Batteri",
        shortDescription: "Ekstra batteri til din Soundboks.",
        longDescription: "Ekstra batteri til din Soundboks, så du kan spille musik i endnu længere tid.",
        images: [
          "https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/43e14fa5-267f-4d0d-8bb7-edd13e6f5a00/public",
        ],
      },
      selectionType: "quantity",
      availableQuantity: 10,
      rentPrice: [{ hours: 24, price: 50 }],
      type: "rent",
      productId: "sb-batteri-roskilde",
      allowedQuantity: 10,
    },
    {
      product: {
        id: "mikrofon",
        title: "Mikrofon",
        shortDescription: "Mikrofon til din Soundboks.",
        longDescription: "Mikrofon, så du kan tilslutte og lave fantastiske shows.",
        images: [
          "https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/43e14fa5-267f-4d0d-8bb7-edd13e6f5a00/public",
        ],
      },
      selectionType: "quantity",
      availableQuantity: 10,
      rentPrice: [{ hours: 24, price: 50 }],
      type: "rent",
      productId: "sb-batteri-roskilde",
      allowedQuantity: 10,
    },
    {
      product: {
        id: "stativer",
        title: "Stativer",
        shortDescription: "Stativer til din Soundboks.",
        longDescription: "Giver fleksibilitet og bedre lyd ved at hæve dine højtalere.",
        images: [
          "https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/43e14fa5-267f-4d0d-8bb7-edd13e6f5a00/public",
        ],
      },
      selectionType: "quantity",
      availableQuantity: 10,
      rentPrice: [{ hours: 24, price: 50 }],
      type: "rent",
      productId: "sb-batteri-roskilde",
      allowedQuantity: 10,
    },
  ];
  