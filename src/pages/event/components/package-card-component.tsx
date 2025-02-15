"use client";
import { PackageModel } from "@/internal/models/package";
import Image from "next/image";
import { getMinimumPrice } from "@/utils/pricing/price.calculating";
import { useOrderProvider } from "@/provider/order-provider";

interface PackageCardProps {
  item: PackageModel;
  isImage?: boolean;
  onClick?: () => void;
}

export default function PackageCardComponent({ item, onClick, isImage }: PackageCardProps) {
  if (!item) return null;
  // Provider
  const { bookingCreation } = useOrderProvider();
  // Variables
  const isSelected = bookingCreation?.package?.ID === item.ID;

  const minPrice = item.options
    ? Math.min(...item.options.map((option) => getMinimumPrice(option)))
    : null;

  return (
    <div
    onClick={onClick}
    className={`
      relative flex-1 rounded-lg border-2 bg-[#151515] border-white/20 p-24  sm:p-28 lg:p-24 overflow-hidden cursor-pointer hover:scale-95 transition
      ${bookingCreation?.package?.ID === item.ID && 'scale-95'}
      `}
      style={{ border: isSelected ? "solid var(--primary)" : undefined }}
    >
      {item.image_url && isImage && (
        <Image
          src={item.image_url}
          alt={`Image of ${item.title}`}
          fill
          className="object-cover"
          loading="lazy"
        />
      )}

      {/* <div className="absolute inset-0 bg-black/70 p-2 sm:p-3" /> */}

      <div className="absolute inset-0 p-2 sm:p-3 flex flex-row justify-between">
        <div>
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold lightning-text">{item.title}</h3>
          <p className="text-xs sm:text-sm opacity-80">{item.short_description}</p>
          <p className="text-xs sm:text-sm opacity-80">{item.long_description}</p>
        </div>
      </div>

      <div className="absolute bottom-3 left-3">
        <div className="flex flex-col lg:flex-row gap-2">
            {item.features?.map((feature, index) => (
              <p key={index} className="text-xs sm:text-sm opacity-80 py-1 px-3 bg-[var(--primary)] rounded-lg">{feature}</p>
            ))}
        </div>
      </div>

      {minPrice !== null && (
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-sm sm:text-base font-semibold text-white bg-gray-800 px-3 py-1 rounded-md">
          fra {minPrice},-
        </div>
      )}
    </div>
  );
}
