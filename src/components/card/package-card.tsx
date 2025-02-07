"use client";
import { PackageModel } from "@/internal/models/package";
import Image from "next/image";
import { getMinimumPrice } from "@/utils/pricing/price.calculating";
import  LoadingCard  from "@/components/card/loading-card";

interface PackageCardProps {
  item: PackageModel;
  onClick: () => void;
}

export default function PackageCard({ item, onClick }: PackageCardProps) {
  if (!item) return null;

  const minPrice = item.options
    ? Math.min(...item.options.map((option) => getMinimumPrice(option)))
    : null;

  return (
    <article 
    onClick={onClick}
    className="relative flex-1 rounded-lg border bg-[#151515] border-white/20 p-20 sm:p-28 overflow-hidden cursor-pointer hover:scale-95 transition"
    >
      {/* {item.image_url && (
        <Image
          src={item.image_url}
          alt={`Image of ${item.title}`}
          fill
          className="object-cover"
          loading="lazy"
        />
      )} */}

      {/* <div className="absolute inset-0 bg-black/70 p-2 sm:p-3" /> */}

      <div className="absolute inset-0 p-2 sm:p-3 flex flex-row justify-between">
        <div>
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold lightning-text">{item.title}</h3>
          <p className="text-xs sm:text-sm opacity-80">{item.short_description}</p>
          <p className="text-xs sm:text-sm opacity-80">{item.long_description}</p>
        </div>
      </div>

      {minPrice !== null && (
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-sm sm:text-base font-semibold text-white bg-gray-800 px-3 py-1 rounded-md">
          fra {minPrice},-
        </div>
      )}
    </article>
  );
}
